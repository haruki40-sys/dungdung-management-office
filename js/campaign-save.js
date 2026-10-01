// JSON-only validation. No imported content is evaluated or inserted as HTML.
window.validateCampaignSaveData = function validateCampaignSaveData(saved, env) {
  const fail = message => { throw new Error(message); };
  const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const safeTree = (value, depth = 0) => {
    if (depth > 30) fail('저장 구조가 너무 깊습니다.');
    if (value && typeof value === 'object') {
      for (const key of Object.keys(value)) {
        if (['__proto__', 'prototype', 'constructor'].includes(key)) fail('허용되지 않는 저장 항목입니다.');
        safeTree(value[key], depth + 1);
      }
    }
  };
  safeTree(saved);
  if (!record(saved) || saved.schema !== 2) fail('지원하는 진행 저장 형식(schema 2)이 아닙니다.');
  const versions = ['v1.6.0-rc1'];
  if (!versions.includes(saved.version)) fail('지원하지 않는 저장 버전입니다.');
  const d = saved.dayIndex;
  if (!Number.isInteger(d) || d < 0 || d >= env.days.length) fail('지원하지 않는 저장 날짜입니다.');
  const day = env.days[d], a = saved.answers;
  if (!record(a)) fail('선택 기록이 올바르지 않습니다.');
  for (const [key, value] of Object.entries(a)) {
    const index = Number(key);
    if (!/^(0|[1-9]\d*)$/.test(key) || !Number.isInteger(value) || !env.days[index]?.choices?.[value]) fail('선택 기록에 알 수 없는 날짜나 선택지가 있습니다.');
  }
  const views = ['cover','day-break','main','choices','post','after','reflection','management','result-intro','plan-result','act-review','epilogue','ending','act3-plan','act3-result','act3-recap','act4-emergency','final-diary'];
  if (!views.includes(saved.view)) fail('저장된 화면을 확인해주세요.');
  const view = saved.view;
  if (view === 'cover' && d !== 0) fail('처음 화면의 날짜가 올바르지 않습니다.');
  if (['choices','post'].includes(view) && !day.choices) fail('이 날짜에는 선택 화면이 없습니다.');
  if (view === 'after' && !day.after?.length) fail('이 날짜에는 추가 장면이 없습니다.');
  if (['management','result-intro','plan-result','act-review'].includes(view) && ![6,14].includes(d)) fail('관리 계획 화면의 날짜가 올바르지 않습니다.');
  if (['act3-plan','act3-result','act3-recap'].includes(view) && d !== 19) fail('3막 관리 계획 날짜가 올바르지 않습니다.');
  if (view === 'act4-emergency' && d !== 21) fail('긴급 배치는 22일차에만 가능합니다.');
  if (view === 'final-diary' && d !== 23) fail('마지막 기록은 24일차에만 가능합니다.');
  if (view === 'ending' && ![6,14,19,22,23].includes(d)) fail('막의 마지막 날짜가 올바르지 않습니다.');
  if (view === 'epilogue' && ![6,14,19].includes(d)) fail('막의 마무리 날짜가 올바르지 않습니다.');
  const expectedAct = d < 7 ? 1 : d < 15 ? 2 : d < 20 ? 3 : d < 23 ? 4 : 5;
  if (saved.managementAct !== undefined && saved.managementAct !== expectedAct) fail('진행 중인 막의 기록이 올바르지 않습니다.');
  for (const key of ['sceneIndex','postIndex','afterIndex','resultIntroIndex','epiIndex','selected']) {
    if (saved[key] !== undefined && (!Number.isSafeInteger(saved[key]) || saved[key] < 0)) fail('장면 위치가 올바르지 않습니다.');
  }
  if (['choices','post','after','reflection'].includes(view) && day.choices && !day.choices[a[d] ?? saved.selected ?? 0]) fail('현재 선택 장면을 불러올 수 없습니다.');
  if (view === 'post' && (saved.postIndex || 0) >= day.choices[a[d] ?? saved.selected ?? 0].post.length) fail('선택 이후 장면 위치가 올바르지 않습니다.');
  if (view === 'after' && (saved.afterIndex || 0) >= day.after.length) fail('추가 장면 위치가 올바르지 않습니다.');
  if (view === 'epilogue' && (saved.epiIndex || 0) >= (d === 6 ? 4 : d === 14 ? 1 : env.act3Ending.length)) fail('마무리 장면 위치가 올바르지 않습니다.');
  if (saved.log !== undefined && (!Array.isArray(saved.log) || saved.log.length > 10000 || saved.log.some(item => !record(item) || typeof item.key !== 'string' || typeof item.text !== 'string' || typeof item.label !== 'string'))) fail('대화 기록이 올바르지 않습니다.');
  if (!record(saved.storyState)) fail('이야기 진행 기록이 없습니다.');
  const validateAssignments = value => {
    if (!record(value) || Object.keys(value).length > 2 || Object.entries(value).some(([key, person]) => !env.facilityKeys[key] || !['도윤','태식'].includes(person))) fail('시설 담당자 기록이 올바르지 않습니다.');
  };
  validateAssignments(saved.assignments);
  const second = saved.storyState.act2Assignments || {};
  validateAssignments(second);
  const act2Spent = Array.from({length:8},(_,n)=>n+7).reduce((sum,n)=>sum+(env.days[n].choices?.[a[n]]?.cost||0),0);
  const secondCost = Object.keys(second).reduce((sum,id)=>sum+env.projects.find(p=>p.id===id).cost,0);
  if (act2Spent + secondCost > 300) fail('2막 예산이 맞지 않습니다.');
  if (d < 15) return saved;
  const act3 = saved.act3 || saved.storyState.act3, c = act3?.context;
  if (!record(c) || !Number.isInteger(c.carryover) || c.carryover < 0 || c.carryover > 300 || ![0,1,2].includes(c.room) || typeof c.seniorOpen !== 'boolean' || !record(c.levels) || Object.keys(env.facilityKeys).some(id=>![0,1,2].includes(c.levels[id]))) fail('3막 시작 조건이 올바르지 않습니다.');
  if (!Array.isArray(act3.plan) || new Set(act3.plan).size !== act3.plan.length || typeof act3.confirmed !== 'boolean') fail('3막 계획 기록이 올바르지 않습니다.');
  const entries = act3.plan.map(id=>env.act3Projects.find(project=>project.id===id));
  if (entries.some(p=>!p) || act3.plan.includes('B') || act3.plan.some(id=>env.facilityKeys[id]&&c.levels[id]>=2) || act3.plan.includes('rental')&&act3.plan.includes('replace') || entries.reduce((sum,p)=>sum+p.slots,0)>2) fail('3막 계획의 선택 제한이 맞지 않습니다.');
  const opening = 300 + c.carryover - (env.days[17].choices?.[a[17]]?.cost||0) - entries.reduce((sum,p)=>sum+p.cost,0);
  if (opening < 0 || act3.confirmed && !act3.plan.length) fail('3막 계획 예산 또는 확정 기록이 맞지 않습니다.');
  if (['act3-result','act3-recap','epilogue','ending'].includes(view) && d === 19 && !act3.confirmed) fail('3막 관리 계획이 아직 확정되지 않았습니다.');
  if (d < 20) return saved;
  const four = saved.act4 || saved.storyState.act4;
  if (!act3.confirmed || !record(four) || four.started !== true || four.sourceBudget !== opening || !Array.isArray(four.completedProjects) || JSON.stringify([...four.completedProjects].sort()) !== JSON.stringify([...act3.plan].sort())) fail('4막의 완료 사업과 시작 예산이 맞지 않습니다.');
  if (!record(four.levels) || Object.keys(env.facilityKeys).some(id=>four.levels[id]!==Math.min(2,c.levels[id]+(act3.plan.includes(id)?1:0)))) fail('21일차 시설 완료 단계가 맞지 않습니다.');
  if (typeof four.emergencyConfirmed !== 'boolean') fail('긴급 배치 확정 기록이 올바르지 않습니다.');
  const option = four.emergencyChoice === null ? null : env.config.emergencyOptions.find(o=>o.id===four.emergencyChoice);
  if (four.emergencyChoice !== null && !option) fail('알 수 없는 긴급 배치 항목입니다.');
  if (four.emergencyConfirmed) {
    if (!option || four.emergencyCost !== option.cost || option.cost > opening) fail('긴급 배치 지출이 맞지 않습니다.');
    if (option.id !== 'hold') {
      const service = four.services?.[option.id];
      if (!record(service) || service.needed !== true || service.alreadyCovered !== false || service.available !== true || service.nonOverlapping !== true) fail('추가 서비스의 제공 범위를 확인할 수 없습니다.');
    }
  } else if (four.emergencyCost !== 0 || d >= 22) fail('23일차에 필요한 긴급 배치 확인이 없습니다.');
  return saved;
};
