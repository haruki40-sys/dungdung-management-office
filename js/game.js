const EMOTION_POS = {
  neutral: "0% 0%",
  angry: "33.333% 0%",
  happy: "66.666% 0%",
  sad: "100% 0%"
};

let state = {
  day: 1,
  idx: 0,
  turn: 0,
  sat: 68,
  fac: 74,
  trust: 60,
  money: 12400000,
  log: []
};

function defaultState() {
  return { day:1, idx:0, turn:0, sat:68, fac:74, trust:60, money:12400000, log:[] };
}
function clamp(v) { return Math.max(0, Math.min(100, v)); }
function money(v) { return Math.round(v).toLocaleString("ko-KR") + "원"; }

function updateHud() {
  document.getElementById("satVal").textContent = Math.round(state.sat);
  document.getElementById("facVal").textContent = Math.round(state.fac);
  document.getElementById("trustVal").textContent = Math.round(state.trust);
  document.getElementById("moneyVal").textContent = money(state.money);
  document.getElementById("satBar").style.width = clamp(state.sat) + "%";
  document.getElementById("facBar").style.width = clamp(state.fac) + "%";
  document.getElementById("trustBar").style.width = clamp(state.trust) + "%";
  document.getElementById("dayPill").textContent = EVENTS[state.idx]?.title || "운영 평가";
  document.getElementById("countPill").textContent = Math.min(state.idx + 1, EVENTS.length) + " / " + EVENTS.length;
}

function setSprite(el, charKey, emotion) {
  const c = CHARS[charKey];
  el.style.backgroundImage = `url('${c.sheet}')`;
  el.style.backgroundPosition = EMOTION_POS[emotion] || EMOTION_POS.neutral;
}

function setTag(elId, charKey) {
  const c = CHARS[charKey];
  document.getElementById(elId).innerHTML = `<b>${c.name}</b><span>${c.role} · ${c.age}</span>`;
}

function renderCast(speakerKey, emotion) {
  const ev = EVENTS[state.idx];
  const turn = ev?.turns?.[state.turn];
  let rightKey = turn?.char === "doyun" ? ev.turns.find(t => t.char !== "doyun")?.char || "kim" : turn?.char || "kim";

  const leftSlot = document.getElementById("leftSlot");
  const rightSlot = document.getElementById("rightSlot");
  const leftSprite = document.getElementById("leftSprite");
  const rightSprite = document.getElementById("rightSprite");

  leftSlot.classList.add("swapping");
  rightSlot.classList.add("swapping");

  setTimeout(() => {
    setSprite(leftSprite, "doyun", speakerKey === "doyun" ? emotion : "neutral");
    setSprite(rightSprite, rightKey, speakerKey !== "doyun" ? emotion : "neutral");
    setTag("leftTag", "doyun");
    setTag("rightTag", rightKey);

    leftSlot.classList.toggle("active", speakerKey === "doyun");
    leftSlot.classList.toggle("inactive", speakerKey !== "doyun");
    rightSlot.classList.toggle("active", speakerKey !== "doyun");
    rightSlot.classList.toggle("inactive", speakerKey === "doyun");

    requestAnimationFrame(() => {
      leftSlot.classList.remove("swapping");
      rightSlot.classList.remove("swapping");
    });
  }, 120);
}

function setSpeaker(charKey) {
  const c = CHARS[charKey];
  document.getElementById("speakerName").textContent = c.name;
  document.getElementById("speakerRole").textContent = c.role + " · " + c.age;
}

function animateDialogue() {
  const d = document.getElementById("dialogue");
  d.classList.remove("reenter");
  void d.offsetWidth;
  d.classList.add("reenter");
}

function showTurn() {
  updateHud();
  const ev = EVENTS[state.idx];
  if (!ev) {
    finishGame();
    return;
  }
  const turn = ev.turns[state.turn];
  if (!turn) {
    showChoices();
    return;
  }
  renderCast(turn.char, turn.emotion || "neutral");
  setSpeaker(turn.char);
  document.getElementById("lineText").textContent = turn.text;
  document.getElementById("subText").textContent = turn.sub || "";
  document.getElementById("dialogue").classList.remove("hidden");
  document.getElementById("dialogue").classList.remove("choice-mode");
  document.getElementById("choices").classList.add("hidden");
  animateDialogue();
}

function nextTurn() {
  const ev = EVENTS[state.idx];
  state.turn += 1;
  if (state.turn >= ev.turns.length) showChoices();
  else showTurn();
}

function showChoices() {
  const ev = EVENTS[state.idx];
  renderCast("doyun", "neutral");
  setSpeaker("doyun");
  document.getElementById("lineText").textContent = "이 상황에서 어떤 판단을 내릴까?";
  document.getElementById("subText").textContent = "모든 선택에는 장점과 비용이 함께 있다.";
  document.getElementById("dialogue").classList.add("choice-mode");
  animateDialogue();

  const box = document.getElementById("choices");
  box.classList.remove("hidden");
  box.innerHTML = ev.choices.map((c, i) => `
    <div class="choice">
      <div>
        <h4>${i + 1}. ${c.t}</h4>
        <p>${c.d}</p>
      </div>
      <button onclick="choose(${i})">선택</button>
    </div>
  `).join("");
}

function makeDelta(label, val) {
  if (!val) return "";
  const cls = val > 0 ? "plus" : "minus";
  const sign = val > 0 ? "+" : "";
  return `<span class="delta ${cls}">${label} ${sign}${Number(val).toLocaleString("ko-KR")}</span>`;
}

function renderLog() {
  const list = document.getElementById("logList");
  list.innerHTML = state.log.length ? state.log.join("") : '<div class="log-item">아직 기록이 없습니다.</div>';
}

function logChoice(ev, ch, fx, bonus) {
  const deltas = [
    makeDelta("만족도", fx.sat || 0),
    makeDelta("시설", fx.fac || 0),
    makeDelta("신뢰", fx.trust || 0),
    makeDelta("예산", fx.money || 0),
    bonus?.money ? makeDelta("추가수익", bonus.money) : ""
  ].filter(Boolean).join("");

  state.log.unshift(`
    <div class="log-item">
      <b>${ev.title}</b><br>
      선택: ${ch.t}<br>
      결과: ${ch.res}
      <div class="delta-row">${deltas}</div>
    </div>
  `);
  renderLog();
}

function transitionToNext(message) {
  const ov = document.getElementById("transition");
  document.getElementById("transitionTitle").textContent = message;
  document.getElementById("transitionSub").textContent = state.idx < EVENTS.length ? EVENTS[state.idx].title : "운영 평가로 이동합니다.";
  ov.classList.add("show");
  setTimeout(() => {
    ov.classList.remove("show");
    if (state.idx >= EVENTS.length) finishGame();
    else showTurn();
  }, 650);
}

function choose(i) {
  const ev = EVENTS[state.idx];
  const ch = ev.choices[i];
  const fx = ch.fx || {};
  const bonus = ch.bonus || null;

  state.sat = clamp(state.sat + (fx.sat || 0));
  state.fac = clamp(state.fac + (fx.fac || 0));
  state.trust = clamp(state.trust + (fx.trust || 0));
  state.money += (fx.money || 0);
  if (bonus?.money) state.money += bonus.money;

  logChoice(ev, ch, fx, bonus);
  state.day += 1;
  state.idx += 1;
  state.turn = 0;

  updateHud();
  autoSave();
  toast(ch.res);
  document.getElementById("choices").classList.add("hidden");
  transitionToNext("결정 완료");
}

function scoreGame() {
  const avg = (state.sat + state.fac + state.trust) / 3;
  if (state.money >= 16500000 && avg >= 78) return {
    title: "흑자도 내고 신뢰도 얻었다", rank: "S",
    text: "수익과 운영, 사람 관리의 균형을 잘 잡았습니다. 꽤 훌륭한 결과입니다."
  };
  if (avg >= 80) return {
    title: "명예 관리소장", rank: "A+",
    text: "사람과 시설, 조직을 안정적으로 챙겼습니다."
  };
  if (avg >= 67) return {
    title: "욕은 먹었지만 굴러갔다", rank: "B+",
    text: "모두를 만족시키진 못했지만 아파트는 잘 굴러갔습니다."
  };
  if (state.sat < 35) return {
    title: "주민소환 직전", rank: "D+",
    text: "시설은 돌아가지만 주민 신뢰가 크게 흔들렸습니다."
  };
  if (state.money < 0) return {
    title: "관리비 블랙홀", rank: "D",
    text: "의도는 좋았지만 재무가 버티지 못했습니다."
  };
  return {
    title: "다음 주가 더 무섭다", rank: "B-",
    text: "큰 붕괴는 없었지만 숙제가 많이 남았습니다."
  };
}

function finishGame() {
  const r = scoreGame();
  document.getElementById("resultTitle").textContent = r.title;
  document.getElementById("resultRank").textContent = r.rank;
  document.getElementById("resultText").textContent = r.text;
  document.getElementById("resultRows").innerHTML = `
    <div class="row"><span>주민 만족도</span><b>${Math.round(state.sat)}</b></div>
    <div class="row"><span>시설 상태</span><b>${Math.round(state.fac)}</b></div>
    <div class="row"><span>직원 신뢰</span><b>${Math.round(state.trust)}</b></div>
    <div class="row"><span>최종 예산</span><b>${money(state.money)}</b></div>
  `;
  document.getElementById("resultOverlay").classList.remove("hidden");
}

function toast(msg) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2350);
}

function autoSave() {
  localStorage.setItem("office_v10_apply", JSON.stringify(state));
}

function loadSave() {
  try {
    const s = JSON.parse(localStorage.getItem("office_v10_apply"));
    if (s && typeof s.idx === "number") {
      state = s;
      return true;
    }
  } catch (e) {}
  return false;
}

function exportSave() {
  const payload = { game: "오늘도 관리사무소", version: "v1.1", savedAt: new Date().toISOString(), state };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "오늘도_관리사무소_v1.1_save.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  toast("세이브 파일 저장 완료");
}

function importSave(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const obj = JSON.parse(reader.result);
      const incoming = obj.state || obj;
      if (typeof incoming.idx !== "number") throw new Error("bad");
      state = incoming;
      autoSave();
      renderLog();
      updateHud();
      document.getElementById("startOverlay").classList.add("hidden");
      document.getElementById("resultOverlay").classList.add("hidden");
      state.idx >= EVENTS.length ? finishGame() : showTurn();
      toast("세이브 파일 불러오기 완료");
    } catch (e) {
      toast("세이브 파일을 확인해주세요.");
    }
  };
  reader.readAsText(file, "utf-8");
}

function restartGame() {
  localStorage.removeItem("office_v10_apply");
  state = defaultState();
  renderLog();
  document.getElementById("resultOverlay").classList.add("hidden");
  document.getElementById("startOverlay").classList.add("hidden");
  document.getElementById("choices").classList.add("hidden");
  showTurn();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("startBtn").onclick = () => {
  document.getElementById("startOverlay").classList.add("hidden");
  showTurn();
};
document.getElementById("nextBtn").onclick = nextTurn;
document.getElementById("restartBtn").onclick = () => {
  if (confirm("현재 진행을 지우고 새 게임을 시작할까요?")) restartGame();
};
document.getElementById("saveBtn").onclick = () => { autoSave(); toast("빠른 저장 완료"); };
document.getElementById("exportBtn").onclick = exportSave;
document.getElementById("importBtn").onclick = () => document.getElementById("fileInput").click();
document.getElementById("fileInput").addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (file) importSave(file);
  e.target.value = "";
});

updateHud();
renderLog();
setSprite(document.getElementById("leftSprite"), "doyun", "neutral");
setSprite(document.getElementById("rightSprite"), "kim", "neutral");

if (loadSave() && state.idx < EVENTS.length) {
  document.getElementById("startOverlay").classList.add("hidden");
  renderLog();
  showTurn();
}
