(()=>{
const s=(speaker,role,who,npc,text,extra={})=>({speaker,role,who,npc,text,...extra});
const characterRoot='assets/1막_그래픽_v0.2/characters/';
const characterFiles={'도윤':'doyun_sheet.webp','강태식':'security_sheet.webp','한명숙':'grandma_sheet.webp','이준호':'male2_sheet.webp','정서연':'schoolgirl_sheet.webp','오지혜':'female2_sheet.webp','임성호':'male1_sheet.webp','박선우':'chairman_sheet.webp','윤정희':'female1_sheet.webp'};
const aliases={'태식':'강태식','명숙':'한명숙','준호':'이준호','서연':'정서연','지혜':'오지혜','성호':'임성호','선우':'박선우','정희':'윤정희'};
const emotionPosition={neutral:'0% bottom',angry:'33.333% bottom',happy:'66.667% bottom',sad:'100% bottom'},emotionIndex={neutral:0,angry:1,happy:2,sad:3};
const characterFrame={'도윤':[.75,[69.43,57.46,44.38,33.24]],'박선우':[.75,[70.53,55.16,47.24,35.36]],'강태식':[.4442,[50.84,53.59,53.71,47.13]],'한명숙':[.4442,[58.25,59.69,48.92,54.67]],'이준호':[.4442,[58.97,54.67,48.09,54.31]],'정서연':[.4442,[58.97,51.91,48.92,52.15]],'오지혜':[.4442,[62.2,52.87,53.35,40.91]],'임성호':[.4442,[58.13,50,50,47.49]],'윤정희':[.4442,[61.84,55.26,54.55,48.68]]};
function paintFigure(element,name,emotion='neutral'){const canonical=aliases[name]||name,file=characterFiles[canonical],frame=characterFrame[canonical]||[.4442,[58,58,58,58]],index=emotionIndex[emotion]??0;if(canonical==='점검 기사'){element.style.backgroundImage='url("assets/3막_신규/technician_user_v1.0.webp")';element.style.backgroundSize='100% 100%';element.style.backgroundPosition='center bottom';element.style.setProperty('--frame-ratio',2/3);element.style.setProperty('--focus','-50%');element.setAttribute('aria-label',canonical);return}element.style.backgroundSize='';element.style.backgroundImage=file?`url("${characterRoot}${file}")`:'';element.style.backgroundPosition=emotionPosition[emotion]||emotionPosition.neutral;element.style.setProperty('--frame-ratio',frame[0]);element.style.setProperty('--focus',`-${frame[1][index]}%`);element.setAttribute('aria-label',canonical)}
function inferEmotion(scene){const text=scene.text||'';if(/고마워|괜찮아요|새잎|잘 부탁|같이 가세요/.test(text))return'happy';if(/죄송|모르겠|힘들|위험|넘어질|배고픈|걱정|젖/.test(text))return'sad';if(/금지|책임|바로 빼|통하지 않|지금처럼 둘 수/.test(text))return'angry';return'neutral'}
const reactionCopy={'도윤':'상황을 조용히 살핀다','강태식':'현장을 살핀다','한명숙':'상대의 말을 듣는다','이준호':'통로를 바라본다','정서연':'조용히 듣는다','오지혜':'생활 시간을 떠올린다','임성호':'설명을 기다린다','박선우':'기준을 따져본다','윤정희':'걱정스레 지켜본다'};
const days=[
{day:'1일차',type:'핵심 사건',title:'복도에 놓인 유모차',place:'corridor',scenes:[
s('이야기','아파트 소개','none','강태식','지어진 지 스물여덟 해가 된 라이프아파트. 여덟 동, 사백여 세대가 저마다의 사정을 품고 살아가는 곳이다.',{chapter:'프롤로그',place:'exterior'}),
s('이야기','첫 출근','none','강태식','첫 출근 날. 도윤은 오래된 유리문 앞에서 잠시 숨을 골랐다.',{chapter:'프롤로그',place:'exterior'}),
s('도윤','신임 관리소장','doyun','강태식','“오늘부터 여기가 내 직장이구나.”',{chapter:'프롤로그',place:'exterior'}),
s('이야기','낯선 자리','none','강태식','낡은 책상 위에는 단지 배치도와 주민 연락망, 손때 묻은 메모가 놓여 있었다.',{chapter:'프롤로그',place:'office'}),
s('강태식','경비반장','npc','강태식','“일찍 오셨네요. 강태식입니다. 경비반장을 맡고 있습니다.”',{chapter:'프롤로그',place:'office'}),
s('도윤','신임 관리소장','doyun','강태식','“도윤입니다. 앞으로 잘 부탁드립니다.”',{chapter:'프롤로그',place:'office'}),
s('강태식','경비반장','npc','강태식','“기계실, 옥상, 공용실, 지하 창고 열쇠입니다. 비슷하게 생겼으니 표찰을 꼭 확인하세요.”',{chapter:'프롤로그',place:'office'}),
s('이야기','첫 번째 인계','none','강태식','손바닥에 올려진 열쇠 꾸러미가 생각보다 묵직했다.',{chapter:'프롤로그',place:'office'}),
s('강태식','경비반장','npc','강태식','“여기서는 고장 난 시설만 고치는 게 아닙니다. 작은 불편이 누군가에게는 매일 견뎌야 하는 일이 되기도 하죠.”',{chapter:'프롤로그',place:'office'}),
s('강태식','경비반장','npc','강태식','“시설은 고치면 되지만, 사람 마음은 순서가 있습니다. 먼저 사정을 들어보시죠.”',{chapter:'프롤로그',place:'office'}),
s('도윤','신임 관리소장','doyun','강태식','“먼저 듣고, 필요한 일을 제대로 찾겠습니다.”',{chapter:'프롤로그',place:'office'}),
s('이야기','첫 번째 방문자','none','한명숙','똑똑. 정리되지 않은 책상 앞에 첫 번째 노크 소리가 울렸다.',{chapter:'프롤로그',place:'office'}),
s('한명숙','5층 주민','npc','한명숙','“새로 오신 소장님 맞죠? 잠깐 같이 가보셔야겠어요.”',{chapter:'프롤로그',place:'office'}),
s('이야기','사건 도입','none','한명숙','도윤은 명숙과 함께 엘리베이터에 올랐다. 숫자가 바뀌는 동안 명숙은 몇 번이나 말을 고르는 듯했다.'),
s('한명숙','5층 주민','npc','한명숙','“503호 유모차가 늘 복도에 나와 있어요. 이제는 거기 있는 게 당연해진 것처럼요.”'),
s('도윤','신임 관리소장','doyun','한명숙','“지나가실 때 많이 불편하셨습니까?”'),
s('한명숙','5층 주민','npc','한명숙','“보행기가 걸려서 몸을 틀어야 해요. 불이라도 나면 더 위험하고요.”'),
s('이야기','현장 확인','none','한명숙','복도 한편에 쌍둥이용 유모차가 펼쳐져 있었다. 명숙의 보행기 바퀴가 손잡이 끝에 가볍게 부딪혔다.'),
s('도윤','신임 관리소장','doyun','한명숙','“통로는 확보해야 합니다. 다만 계속 밖에 둔 이유부터 확인해보겠습니다.”'),
s('이야기','두 번째 사정','none','이준호','초인종을 누르자, 잠시 뒤 한쪽 팔에 아이를 안은 준호가 문을 열었다.'),
s('이준호','503호 주민','npc','이준호','“아, 유모차 때문에 오셨죠? 죄송합니다. 오늘 안으로 옮길게요.”'),
s('도윤','신임 관리소장','doyun','이준호','“매일 밖에 둘 수밖에 없는 사정이 있습니까?”'),
s('이준호','503호 주민','npc','이준호','“쌍둥이용이라 접어도 현관 신발장을 막습니다. 아이 둘을 먼저 안고 다시 옮기기도 쉽지 않고요.”'),
s('이준호','503호 주민','npc','이준호','“아내가 야간 근무라 혼자 감당할 때가 많습니다.”'),
s('한명숙','5층 주민','npc','한명숙','“아이 둘이면 힘든 건 알아요. 그래도 저는 여기서 넘어질 뻔했어요.”',{others:['준호']}),
s('이야기','달라진 시선','none','이준호','준호는 그제야 보행기와 유모차 사이의 좁은 틈을 바라보았다.',{others:['명숙']}),
s('이준호','503호 주민','npc','이준호','“이렇게 좁은 줄은 몰랐습니다. 저도 아이들을 데리고 이 길을 써야 해서… 어떻게 해야 할지 모르겠네요.”'),
s('이야기','같은 복도, 다른 사정','none','이준호','한 사람에게는 안전하게 걸어야 하는 길이었고, 다른 사람에게는 아이 둘을 데리고 나가는 유일한 길이었다.'),
s('도윤','신임 관리소장','doyun','한명숙','“지금처럼 둘 수는 없습니다. 오늘 안에 가능한 방법을 찾아보겠습니다.”',{others:['준호']}),
s('이야기','해결책 찾기','none','강태식','관리사무소로 돌아온 도윤은 5층 평면도와 비상 대피 동선을 펼쳤다.',{place:'office'}),
s('강태식','경비반장','npc','강태식','“규정대로라면 치우게 하면 됩니다. 다만 보관할 데가 없으면 며칠 지나 다시 나올 겁니다.”',{place:'office'}),
s('도윤','신임 관리소장','doyun','강태식','“엘리베이터 옆 빈 공간은 사용할 수 없을까요?”',{place:'office'}),
s('강태식','경비반장','npc','강태식','“소화전과 방화문만 막지 않으면 가능은 합니다. 다만 누구나 이해할 규칙이 필요하겠죠.”',{place:'office'}),
s('이야기','첫 번째 결정','none','강태식','안전, 당장의 불편, 앞으로 함께 지킬 기준. 어느 선택도 모든 문제를 한 번에 해결해주지는 않는다.',{place:'office'})],choices:[
{label:'복도 적치 금지 기준을 적용한다.',sub:'통행 안전과 명확한 원칙을 우선한다.',style:'principle',result:'복도는 바로 비워졌다. 안전은 확보됐지만 준호의 보관 부담은 다음 과제로 남았다.',thought:'복도는 넓어졌지만, 준호의 하루는 조금 더 무거워졌다. 기준 밖에 남은 불편도 살펴봐야겠다.',post:[s('도윤','관리소장','doyun','한명숙','“복도는 비워야 합니다. 오늘 저녁까지 옮길 수 있도록 보관 방법은 따로 안내하겠습니다.”',{others:['준호']}),s('이야기','그날 오후','none','이준호','준호는 유모차를 접어 집 안으로 옮겼다. 막혀 있던 복도가 넓어졌다.'),s('한명숙','5층 주민','npc','한명숙','“이제 보행기를 돌리지 않고도 지나가겠네요.”'),s('이준호','503호 주민','npc','이준호','“규정은 알겠습니다. 아이 둘과 유모차를 함께 옮길 방법은 더 찾아봐야겠네요.”'),s('이야기','퇴근 전','none','이준호','도윤은 안전 기준과, 기준 밖에 남겨진 불편을 함께 기록했다.')]},
{label:'엘리베이터 옆에 임시 보관선을 만든다.',sub:'오늘 작동하는 절충안을 마련한다.',style:'action',result:'유모차와 보행기가 함께 놓일 자리가 생겼다. 임시선이 방치가 되지 않도록 점검이 필요하다.',thought:'완벽하지 않아도 오늘 두 사람이 함께 지나갈 자리는 만들었다. 이제 그 선을 지키는 일이 남았다.',post:[s('이야기','오후 세 시','none','강태식','도윤과 태식은 소화전과 방화문을 피해 바닥에 임시 보관선을 붙였다.'),s('도윤','관리소장','doyun','강태식','“유모차와 보행 보조기만 둘 수 있습니다. 선 밖 물건은 바로 치우겠습니다.”'),s('한명숙','5층 주민','npc','한명숙','“통로만 막히지 않는다면 저도 괜찮아요.”',{others:['준호']}),s('이준호','503호 주민','npc','이준호','“다른 물건이 쌓이지 않도록 저도 신경 쓰겠습니다.”',{others:['명숙']}),s('이야기','퇴근 전','none','이준호','두 사람 모두 지나갈 자리가 생겼다. 도윤은 임시선 점검표를 남겼다.')]},
{label:'공용 보관 방안을 함께 논의한다.',sub:'서로의 사정을 듣고 기준을 만든다.',style:'relation',result:'복도는 비우고 주민 논의를 시작했다. 답은 늦어졌지만 두 사람은 처음으로 상대의 사정을 들었다.',thought:'답을 조금 늦게 내리는 대신 함께 지킬 약속을 만들기로 했다. 그동안의 불편도 잊지 말아야겠다.',post:[s('도윤','관리소장','doyun','한명숙','“논의가 끝날 때까지 유모차는 세대 안에 두고, 옮기기 어려운 날은 경비실에 도움을 요청해주세요.”',{others:['준호']}),s('한명숙','5층 주민','npc','한명숙','“아이 둘이면 쉽지 않겠네요. 그래도 통로는 꼭 남겨주세요.”',{others:['준호']}),s('이준호','503호 주민','npc','이준호','“그렇게 하겠습니다. 공용 자리가 정해지면 관리 규칙도 따르겠습니다.”',{others:['명숙']}),s('이야기','함께 보는 복도','none','이준호','세 사람은 통로 폭과 비어 있는 자리를 함께 살폈다.',{others:['명숙']}),s('이야기','퇴근 전','none','이준호','도윤은 주민 의견을 모을 날짜를 잡았다. 결론 전까지 복도 안전 기준은 그대로 유지된다.')]}]},
{day:'2일차',type:'일상 사건',title:'이름이 번진 상자',place:'lobby',scenes:[
s('이야기','아침 우편함','none','강태식','관리사무소 문을 열기 전, 도윤은 우편함 주변을 한 바퀴 돌았다.'),
s('이야기','젖은 상자','none','강태식','의자 위에 비에 젖은 택배 상자가 놓여 있었다. 송장에는 라이프아파트와 이름 한 글자만 남아 있었다.'),
s('강태식','경비반장','npc','강태식','“어젯밤 순찰 때부터 있었습니다. 누가 잘못 가져갔다가 둔 것 같기도 하고요.”'),
s('도윤','관리소장','doyun','강태식','“상자를 열지 않고 주인을 찾아야겠네요. 배송 번호는 일부 보입니다.”'),
s('이야기','지나가던 주민','none','한명숙','장바구니를 든 명숙이 상자를 힐끗 보더니 걸음을 멈췄다.'),
s('한명숙','5층 주민','npc','한명숙','“동만 알면 방송하면 되지 않아요? 금방 찾을 텐데.”'),
s('도윤','관리소장','doyun','한명숙','“내용물이나 이름이 드러나면 곤란할 수 있어서요. 필요한 정보만 써보겠습니다.”'),
s('이야기','작은 분실물','none','강태식','상자는 말이 없었지만, 누구의 정보까지 꺼내도 되는지는 도윤이 정해야 했다.')],choices:[
{label:'분실물로 등록하고 택배사에 확인한다.',sub:'정확하고 안전하지만 시간이 걸린다.',style:'principle',result:'배송 기록으로 주인을 찾았다. 절차는 느렸지만 상자는 안전하게 돌아갔다.',thought:'주소가 번져도 기록은 누군가의 집을 기억하고 있었다.',post:[s('도윤','관리소장','doyun','강태식','“접수 시간과 상자 상태부터 적어두죠. 배송 번호로 택배사에 확인하겠습니다.”'),s('이야기','두 시간 뒤','none','강태식','택배사의 회신으로 동과 호수가 확인됐다.'),s('강태식','경비반장','npc','강태식','“조금 늦어도 틀리지 않는 방법이 필요할 때가 있군요.”'),s('이야기','주인에게','none','강태식','도윤은 신분을 확인한 뒤 상자를 건넸다. 내용물은 끝까지 묻지 않았다.')]},
{label:'정보를 가린 안내문을 게시한다.',sub:'빠르지만 문의가 여러 번 올 수 있다.',style:'action',result:'게시판을 본 주민들의 제보가 이어졌다. 몇 번의 확인 끝에 주인이 나타났다.',thought:'작은 안내문 하나가 단지의 눈을 잠시 같은 곳으로 모았다.',post:[s('이야기','안내문 만들기','none','강태식','도윤은 이름과 송장 번호를 가리고 상자의 색과 발견 장소만 적었다.'),s('강태식','경비반장','npc','강태식','“벌써 세 분이 자기 물건인지 물으셨습니다.”'),s('도윤','관리소장','doyun','강태식','“받는 분의 배송 화면까지 확인하고 건네죠.”'),s('이야기','점심 무렵','none','강태식','네 번째로 찾아온 주민의 배송 화면과 번호가 일치했다.')]},
{label:'순찰하며 주민들에게 직접 묻는다.',sub:'시간이 들지만 얼굴과 이름을 익힌다.',style:'relation',result:'도윤은 여러 주민과 처음 인사를 나눴고, 마지막 동에서 상자의 주인을 만났다.',thought:'상자 하나를 돌려주러 갔다가 여러 사람의 얼굴을 기억하게 됐다.',post:[s('이야기','동마다 한 번씩','none','강태식','도윤은 상자의 특징만 말하며 경비실과 각 동 출입구를 돌았다.'),s('박선우','입주자대표','npc','박선우','“개인정보를 가린 건 잘하셨네요. 주민 단체방에는 특징만 올려보겠습니다.”'),s('도윤','관리소장','doyun','박선우','“감사합니다. 받는 분은 배송 화면을 확인하겠습니다.”'),s('이야기','마지막 동','none','박선우','상자는 주인을 찾았다. 도윤의 수첩에는 처음 들은 주민 이름 몇 개도 함께 남았다.')]}]},
{day:'3일차',type:'핵심 사건',title:'오후 두 시의 연습 소리',place:'corridor',scenes:[
s('이야기','오후 순찰','none','오지혜','복도 끝에서 피아노 소리가 들렸다. 빠른 음계가 멈췄다가 다시 처음부터 이어졌다.'),
s('이야기','계단참','none','오지혜','계단참에는 병원 야간 근무를 마친 지혜가 식지 않은 커피를 든 채 서 있었다.'),
s('도윤','관리소장','doyun','오지혜','“집에 들어가지 못하고 계신 겁니까?”'),
s('이야기','잠시 멈춘 말','none','오지혜','지혜는 식어가는 커피를 내려다보다가, 다시 시작된 피아노 소리에 잠시 귀를 기울였다.'),
s('오지혜','야간 근무 주민','npc','오지혜','“낮인 건 알아요. 그래도 이 시간에 자지 못하면 밤 근무를 버티기 어렵습니다.”'),
s('오지혜','야간 근무 주민','npc','오지혜','“항의하러 올라가면 학생이 연습을 못 하게 될까 봐… 그것도 마음에 걸리고요.”'),
s('이야기','문 너머','none','정서연','도윤이 초인종을 누르자 메트로놈 소리가 멎고 서연이 문을 열었다.'),
s('정서연','입시 준비생','npc','정서연','“죄송해요. 낮 두 시부터 네 시까지만 치고 있어요. 그 시간도 안 되는 건가요?”'),
s('도윤','관리소장','doyun','정서연','“같은 시간에 잠들어야 하는 주민이 있습니다. 연습을 그만두라는 말부터 하러 온 건 아닙니다.”'),
s('정서연','입시 준비생','npc','정서연','“실기 시험이 얼마 안 남았어요. 따로 연습실을 빌릴 형편도 아니고요.”'),
s('오지혜','야간 근무 주민','npc','오지혜','“시험 준비가 중요한 건 알아요. 저도 매일 조용히 해달라는 말은 하고 싶지 않아요.”',{others:['서연']}),
s('이야기','다른 생활 시간','none','정서연','한 사람의 오후는 잠들어야 하는 밤이었고, 다른 사람에게는 꿈을 준비할 유일한 시간이었다.',{others:['지혜']}),
s('강태식','경비반장','npc','강태식','“지하 공용실이 비어 있긴 합니다. 오래 닫아둬서 바로 쓰기는 어렵고 벽에 습기 자국도 있습니다.”',{place:'office'}),
s('도윤','관리소장','doyun','강태식','“서연의 연습 시간과 지혜 씨의 수면 시간을 함께 지킬 방법을 찾아야겠네요. 비어 있는 공용실도 확인해보겠습니다.”',{place:'office'})],choices:[
{label:'낮 시간 소음 기준을 안내한다.',sub:'금지보다 지켜야 할 범위를 분명히 한다.',style:'principle',result:'연습은 계속됐지만 방진 패드와 창문 관리 기준이 생겼다. 지혜의 수면 문제는 일부 남았다.',thought:'규정 안의 소리도 누군가에게는 버티기 힘든 하루가 될 수 있다.',post:[s('도윤','관리소장','doyun','정서연','“낮 연습은 가능하지만 창문을 닫고 방진 패드를 사용해주세요. 연속 연습 시간도 줄이겠습니다.”'),s('정서연','입시 준비생','npc','정서연','“지킬게요. 쉬는 시간을 더 자주 넣겠습니다.”'),s('오지혜','야간 근무 주민','npc','오지혜','“완전히 조용하진 않아도 기준이 생기면 저도 준비할 수 있겠어요.”',{others:['서연']}),s('이야기','그날 오후','none','정서연','피아노 소리는 조금 낮아졌고, 복도에는 연습 시간과 소음 방지 수칙이 붙었다.')]},
{label:'두 사람의 생활 시간을 조정한다.',sub:'근무표와 연습 시간을 맞춘다.',style:'relation',result:'두 사람은 일주일 단위 연습표를 만들었다. 번거롭지만 서로의 시간을 처음 알게 됐다.',thought:'같은 시계를 봐도 서로 다른 하루를 사는 사람들이 있다.',post:[s('도윤','관리소장','doyun','오지혜','“지혜 씨 근무일에는 연습을 한 시간 늦추고, 쉬는 날은 원래 시간으로 두면 어떨까요?”',{others:['서연']}),s('정서연','입시 준비생','npc','정서연','“근무표를 알려주시면 맞춰볼게요. 대신 시험 전 주는 다시 의논하고 싶어요.”',{others:['지혜']}),s('오지혜','야간 근무 주민','npc','오지혜','“그 주에는 제가 귀마개를 준비할게요. 먼저 말해줘서 고마워요.”',{others:['서연']}),s('이야기','새로 생긴 표','none','정서연','냉장고와 피아노 옆에 같은 연습표가 한 장씩 붙었다.')]},
{label:'비어 있는 공용실을 시험 개방한다.',sub:'공간을 활용하되 형평성 과제가 남는다.',style:'action',result:'서연은 제한된 시간에 공용실을 쓰게 됐다. 벽 아래의 습기 자국도 함께 발견됐다.',thought:'빈방 하나가 해결책이 되자, 그동안 보이지 않던 문제도 모습을 드러냈다.',post:[s('이야기','지하 공용실','none','강태식','태식이 문을 열자 눅눅한 공기와 함께 오래 접힌 의자들이 모습을 드러냈다.'),s('도윤','관리소장','doyun','정서연','“일단 일주일만, 정해진 시간에 사용해봅시다. 다른 주민도 같은 기준으로 신청할 수 있어야 합니다.”'),s('정서연','입시 준비생','npc','정서연','“청소와 정리는 제가 할게요. 연습할 수 있다면 충분해요.”'),s('강태식','경비반장','npc','강태식','“벽 아래 물자국은 사진으로 남겨두겠습니다. 비 오기 전에 한 번 봐야겠어요.”',{others:['서연']})]}]},
{day:'4일차',type:'훈훈 사건',title:'우산 한 칸',place:'garden-rain',scenes:[
s('이야기','옥상 점검 뒤','none','정서연','도윤이 옥상 점검을 마치고 내려오자 굵은 빗방울이 화단 흙을 두드리기 시작했다.'),
s('이야기','갑작스러운 소나기','none','한명숙','출입구 처마 아래에 명숙이 서 있었다. 접이식 우산은 집 현관에 두고 온 모양이었다.'),
s('한명숙','5층 주민','npc','한명숙','“요즘 비는 예고도 없이 오네요. 조금 기다리면 그치겠죠.”'),
s('이야기','하교길','none','정서연','그때 교복 차림의 서연이 우산을 기울이며 천천히 다가왔다.'),
s('정서연','입시 준비생','npc','정서연','“같은 동이시죠? 같이 가세요.”',{others:['명숙']}),
s('한명숙','5층 주민','npc','한명숙','“학생 가방 다 젖겠어. 조금만 이쪽으로 와요.”',{others:['서연']}),
s('이야기','우산 한 칸','none','정서연','두 사람은 서로 젖지 않게 우산을 밀어주다 결국 어깨 한쪽씩 비에 젖었다.',{others:['명숙']}),
s('이야기','처마 아래','none','정서연','도윤은 처마 아래에서 그 모습을 지켜보다 빗물받이에 걸린 나뭇잎을 치웠다.'),
s('이야기','다음 날','none','정서연','우산은 관리사무소 앞에 돌아와 있었다. 손잡이에는 작은 사탕 봉지와 ‘학생에게’라는 쪽지가 매달려 있었다.',{place:'office'})],result:'누가 시키지 않아도 주민 사이에는 작은 도움이 오갔다.',thought:'민원이 없던 날에도 라이프아파트의 이야기는 조금씩 앞으로 갔다.'},
{day:'5일차',type:'핵심 사건',title:'잠깐 세운 차',place:'parking',scenes:[
s('이야기','주차장 경적','none','강태식','짧은 경적이 두 번 울렸다. 도윤이 내려가 보니 승용차 한 대가 진입로 한쪽을 막고 있었다.'),
s('강태식','경비반장','npc','강태식','“여기는 비상 차량이 들어오는 길입니다. 지금 바로 빼셔야 합니다.”'),
s('임성호','차량 주민','npc','임성호','“무거운 짐만 올려놓고 바로 뺄 생각이었습니다. 십 분도 안 걸려요.”',{others:['태식']}),
s('강태식','경비반장','npc','강태식','“그 십 분이 매일 겹칩니다. 구급차가 들어올 때는 잠깐이라는 말이 통하지 않아요.”',{others:['성호']}),
s('도윤','관리소장','doyun','임성호','“우선 차부터 비상 통로 밖으로 옮겨주세요. 짐을 내릴 방법은 그다음에 같이 보겠습니다.”',{others:['태식']}),
s('이야기','통로 확보','none','임성호','성호가 차를 옮기자 막혀 있던 노란 비상선이 다시 드러났다.'),
s('임성호','차량 주민','npc','임성호','“규정은 압니다. 그런데 지하 주차장은 높이가 낮고, 먼 곳에서 이 상자를 다 들고 오기도 어렵습니다.”'),
s('도윤','관리소장','doyun','임성호','“하역할 공간이 없어서 이 자리를 쓰게 된 겁니까?”'),
s('임성호','차량 주민','npc','임성호','“네. 저뿐 아니라 택배차도 잠깐씩 여기 섭니다. 서로 눈치만 보는 거죠.”'),
s('강태식','경비반장','npc','강태식','“정해진 자리가 없으니 막을 때마다 제가 뛰어와야 합니다.”',{others:['성호']}),
s('이야기','바닥의 선','none','임성호','도윤은 비상선 옆 빈 면과 차량이 도는 폭을 천천히 살폈다.',{others:['태식']}),
s('도윤','관리소장','doyun','강태식','“통로는 지금처럼 비워두고, 반복되는 하역 문제를 따로 풀어야겠습니다.”')],choices:[
{label:'주차 규정을 즉시 적용한다.',sub:'비상 통로를 우선 확보한다.',style:'principle',result:'차량은 바로 이동했다. 통로는 열렸지만 하역할 장소가 없다는 불편은 남았다.',thought:'잠깐의 편의와 언제 올지 모를 위험은 같은 저울에 놓기 어렵다.',post:[s('도윤','관리소장','doyun','임성호','“오늘부터 비상선 안 정차는 시간과 관계없이 금지하겠습니다.”'),s('임성호','차량 주민','npc','임성호','“알겠습니다. 오늘 짐은 먼 쪽에 세우고 옮길게요.”'),s('강태식','경비반장','npc','강태식','“같은 기준을 택배 차량에도 안내하겠습니다.”',{others:['성호']}),s('이야기','다시 열린 길','none','임성호','통로는 비었지만 성호는 먼 주차면에서 상자를 한 개씩 옮겨야 했다.')]},
{label:'시간제 하역 구역을 시험 운영한다.',sub:'현장에서 작동할 임시 기준을 만든다.',style:'action',result:'한쪽 면에 임시 하역 시간이 표시됐다. 이용이 몰리는 시간대는 더 살펴봐야 한다.',thought:'선을 하나 긋는 일에도 누가 언제 그 길을 쓰는지 알아야 했다.',post:[s('이야기','빈 주차면','none','강태식','도윤과 태식은 회전 폭을 확인한 뒤 비상선 밖 한 면에 임시 표지를 세웠다.'),s('도윤','관리소장','doyun','임성호','“한 번에 십 분, 연락처를 남기고 운전자는 근처에 있어야 합니다.”'),s('임성호','차량 주민','npc','임성호','“직접 써보고 불편한 시간대는 말씀드리겠습니다.”'),s('강태식','경비반장','npc','강태식','“일주일 동안 사용 시간을 적어두죠. 표지만 세우고 끝낼 일은 아닙니다.”',{others:['성호']})]},
{label:'사용 규칙을 함께 정한다.',sub:'실제 이용자와 필요한 폭과 시간을 정한다.',style:'relation',result:'성호와 태식은 말투가 딱딱했지만 필요한 폭과 시간을 함께 재기 시작했다.',thought:'다투던 두 사람이 같은 줄자를 잡는 데에도 작은 시작은 있었다.',post:[s('도윤','관리소장','doyun','임성호','“비상 통로는 지금 비웁니다. 대신 실제로 필요한 시간과 폭을 두 분이 같이 확인해주세요.”',{others:['태식']}),s('임성호','차량 주민','npc','임성호','“짐이 큰 날과 택배차가 몰리는 시간을 적어오겠습니다.”'),s('강태식','경비반장','npc','강태식','“제가 차량 회전 폭을 재죠. 통로를 건드리지 않는 선에서 봅시다.”',{others:['성호']}),s('이야기','같은 줄자','none','임성호','차는 이미 옮겨져 있었다. 성호와 태식은 비상선 바깥에서 줄자의 양끝을 잡았다.',{others:['태식']})]}]},
{day:'6일차',type:'훈훈 사건',title:'화분을 살린 사람',place:'office',scenes:[
s('이야기','관리사무소 창가','none','윤정희','며칠 전까지 고개를 숙였던 화분에서 연둣빛 새잎이 올라와 있었다.'),
s('도윤','관리소장','doyun','윤정희','“태식 반장님이 물을 주셨나?”'),
s('이야기','문밖의 인기척','none','윤정희','문밖에서 물뿌리개가 바닥에 닿는 작은 소리가 났다.'),
s('윤정희','단지 주민','npc','윤정희','“아… 지나갈 때 흙이 말라 있으면 조금씩 줬어요. 허락 없이 만져서 죄송합니다.”'),
s('도윤','관리소장','doyun','윤정희','“죄송할 일은 아니죠. 오히려 제가 놓치고 있었습니다.”'),
s('윤정희','단지 주민','npc','윤정희','“물을 너무 많이 주는 사람도 있더라고요. 그래서 마른 날만 줬습니다.”'),
s('도윤','관리소장','doyun','윤정희','“그럼 이제 물 준 날을 같이 표시해둘까요? 돌보는 사람끼리 헷갈리지 않게요.”'),
s('이야기','작은 관리표','none','윤정희','정희는 달력 구석에 조심스럽게 물방울 하나를 그렸다.'),
s('강태식','경비반장','npc','강태식','“소장님보다 화분 사정을 먼저 안 주민이 있었네요.”',{others:['정희']}),
s('이야기','새잎','none','윤정희','누가 알아주지 않아도 돌보는 사람이 있다는 걸, 새잎 하나가 먼저 알려주었다.')],result:'관리사무소 화분에 물 준 날을 함께 적는 작은 약속이 생겼다.',thought:'잘 보이지 않는 돌봄도 기록해두면 다음 사람이 이어갈 수 있다.'},
{day:'7일차',type:'핵심 사건',title:'밥그릇이 놓인 자리',place:'parking',scenes:[
s('이야기','저녁 순찰','none','윤정희','지하 출입구를 돌던 도윤은 차량 아래로 재빨리 사라지는 고양이 한 마리를 보았다.'),
s('이야기','출입구 모퉁이','none','윤정희','벽 아래 밥그릇 주변에는 젖은 사료가 흩어져 있었다. 사람과 차량 모두에게 불편한 자리였다.'),
s('윤정희','급식소 관리 주민','npc','윤정희','“사람 눈에 덜 띄고 비도 피할 수 있어서 여기 둔 겁니다. 치우면 고양이들이 차 사이로 다녀요.”'),
s('도윤','관리소장','doyun','윤정희','“돌보려는 마음은 알겠습니다. 하지만 출입구와 차량 바로 옆은 위험합니다.”'),
s('이야기','대화에 끼어든 사람','none','박선우','그때 주차장 쪽을 지나던 선우가 밥그릇 앞에서 걸음을 멈췄다.'),
s('박선우','입주자대표','npc','박선우','“공용 공간을 개인 판단으로 쓰기 시작하면 누구에게 같은 기준을 적용해야 합니까?”',{others:['정희']}),
s('윤정희','급식소 관리 주민','npc','윤정희','“치우기만 하면 끝인가요? 배고픈 고양이는 더 위험한 곳으로 갑니다.”',{others:['선우']}),
s('박선우','입주자대표','npc','박선우','“먹이지 말자는 게 아닙니다. 냄새와 벌레, 아이들 안전도 누군가는 책임져야죠.”',{others:['정희']}),
s('강태식','경비반장','npc','강태식','“위생도 문제지만 차량 아래로 들어가는 고양이도 걱정입니다. 자리를 함께 다시 봐야겠습니다.”',{others:['정희','선우']}),
s('이야기','서로 다른 걱정','none','윤정희','정희는 고양이를, 선우는 주민을, 태식은 위험한 동선을 보고 있었다.',{others:['선우','태식']}),
s('도윤','관리소장','doyun','윤정희','“지금 자리의 사료부터 치우고 바닥을 닦겠습니다. 급식 자체를 어떻게 할지는 그다음에 정하죠.”',{others:['선우']}),
s('이야기','임시 정리','none','강태식','태식과 정희가 젖은 사료를 치우는 동안 선우는 출입하는 주민에게 바닥을 조심하라고 알렸다.',{others:['정희','선우']}),
s('도윤','관리소장','doyun','강태식','“통행과 위생을 확보한 상태에서, 계속 지킬 수 있는 방식을 골라야겠습니다.”')],choices:[
{label:'급식소를 철거하고 규정을 적용한다.',sub:'공용 공간의 일관된 기준을 지킨다.',style:'principle',result:'출입구는 정리됐다. 정희는 다른 장소를 찾기 전까지 급식을 중단하기로 했다.',thought:'깨끗해진 자리만 보고 해결됐다고 말하기에는 남은 생명이 있었다.',post:[s('도윤','관리소장','doyun','윤정희','“출입구 급식은 중단하겠습니다. 그릇은 오늘 철거하고 대체 장소 기준을 따로 찾겠습니다.”',{others:['선우']}),s('윤정희','단지 주민','npc','윤정희','“마음에 들진 않지만 위험한 자리는 맞아요. 다른 곳을 찾을 때까지 치우겠습니다.”'),s('박선우','입주자대표','npc','박선우','“대체 장소를 검토할 때 위생 기준도 같이 보겠습니다.”',{others:['정희']}),s('이야기','비워진 모퉁이','none','윤정희','출입구는 깨끗해졌다. 정희는 빈 그릇을 든 채 고양이가 사라진 쪽을 오래 바라보았다.')]},
{label:'위생 조건을 갖춘 장소를 시험 운영한다.',sub:'통행과 공존을 함께 살핀다.',style:'action',result:'세척 가능한 그릇과 관리표가 생겼다. 위치가 적절한지는 시험 기간 뒤 다시 보기로 했다.',thought:'공존에는 마음뿐 아니라 계속 지킬 수 있는 관리가 필요했다.',post:[s('이야기','새 시험 장소','none','강태식','네 사람은 차량 동선과 출입구에서 떨어진 화단 뒤편을 살폈다.'),s('도윤','관리소장','doyun','윤정희','“일주일 동안만 시험합니다. 정해진 시간 뒤에는 그릇을 씻어 보관해주세요.”',{others:['선우']}),s('윤정희','단지 주민','npc','윤정희','“관리표도 제가 적겠습니다. 냄새나 벌레가 생기면 바로 말씀드릴게요.”'),s('박선우','입주자대표','npc','박선우','“기록이 남는다면 주민들에게도 시험 운영이라고 설명하겠습니다.”',{others:['정희']})]},
{label:'주민 의견 전까지 임시 기준을 만든다.',sub:'당장 지킬 선을 만들고 논의를 연다.',style:'relation',result:'급식 시간과 청소 담당이 정해졌다. 의견이 모일 때까지 정희와 태식이 상태를 기록한다.',thought:'결론을 미루는 대신, 그동안 아무렇게나 두지 않을 약속을 만들었다.',post:[s('도윤','관리소장','doyun','윤정희','“주민 의견을 받는 동안 출입구에서는 치우고, 임시 위치와 급식 시간을 정하겠습니다.”',{others:['선우']}),s('박선우','입주자대표','npc','박선우','“찬성과 반대만 묻지 말고, 걱정되는 점도 함께 받죠.”'),s('윤정희','단지 주민','npc','윤정희','“청소 기록과 고양이가 오는 시간은 제가 적겠습니다.”',{others:['선우']}),s('강태식','경비반장','npc','강태식','“저는 통행과 습기 상태를 같이 보겠습니다. 임시라는 말이 방치가 되면 안 되니까요.”',{others:['정희','선우']})]}]}
];
const ACT1_DAYS=7;
days.push(...(window.ACT2_DAYS||[]),...(window.ACT3_DAYS||[]),...(window.ACT4_DAYS||[]),...(window.ACT5_DAYS||[]));
const firstDayScene=days[0].scenes.findIndex(scene=>!scene.chapter);
const projects=[
{id:'A',name:'복도 안전 정비',cost:80,recommended:'태식',answer:0,effects:['세대 안 보관 부담을 줄이면서 복도 금지 기준을 유지할 정식 보관 공간을 만듭니다.','임시 보관선을 실제 이용량에 맞는 고정 공간으로 바꿉니다.','주민이 합의한 위치와 이용 기준을 정식 보관 공간에 적용합니다.']},
{id:'B',name:'주민 쉼터 정비',cost:140,recommended:'태식',answer:2,effects:['세대 내 소음 기준을 유지하면서 대안 연습 공간을 정비합니다.','서로 맞춘 생활 시간을 주민 쉼터 이용표에 반영합니다.','시험 개방한 주민 쉼터의 습기를 확인하고 운영 기준을 만듭니다.']},
{id:'C',name:'주차·하역 구역 정비',cost:100,recommended:'태식',answer:4,effects:['비상 통로 규정을 유지하면서 별도의 하역 공간을 만듭니다.','시험 운영한 하역선을 정식 표시와 안내판으로 바꿉니다.','합의한 폭과 이용 시간을 실제 공간에 반영합니다.']},
{id:'D',name:'화단·급식소 정비',cost:70,recommended:'도윤',answer:6,effects:['통행로 밖에 허용 가능한 급식 위치와 위생 설비를 만듭니다.','시험 장소를 세척과 기록이 가능한 위생 공간으로 바꿉니다.','임시 기록을 바탕으로 위치와 위생 기준을 정식화합니다.']},
{id:'E',name:'공동현관·안내 구역 정비',cost:60,recommended:'도윤',effects:['게시판과 우편함, 택배 공간을 정돈해 안내 누락과 출입구 혼잡을 줄입니다.']}
];
const facilityKeys={A:'corridor_storage',B:'community_room',C:'loading_zone',D:'feeding_station',E:'lobby_hub'};
const upgradeEffects={
A:['임시 보관선을 만들어 통행로와 보관 위치를 나눕니다.','고정 보관 구획과 안내 표식을 설치합니다.'],
B:['제습기와 임시 가구를 두고 시험 개방합니다.','냉방·환기·흡음 설비와 예약판을 갖춥니다.'],
C:['임시 시간제 하역선을 표시합니다.','정식 노면 표시와 차막이·수레대를 설치합니다.'],
D:['시험 위생 급식대와 관리표를 둡니다.','차양·배수·밀폐 보관함과 고정 관리판을 설치합니다.'],
E:['임시 분류 선반과 게시판을 둡니다.','고정 수납·잠금함과 통합 게시판을 설치합니다.']
};
const resultIntro=[
s('이야기','일주일 뒤','none','강태식','첫 관리 계획에 넣은 공사가 작은 소음과 함께 시작됐다.',{place:'office'}),
s('강태식','경비반장','npc','강태식','“못 고른 곳은 다음 계획에 다시 올리겠습니다. 한꺼번에 다 하려다간 아무것도 제대로 못 하니까요.”',{place:'office'}),
s('도윤','관리소장','doyun','강태식','“네. 이번 주에 들은 사정부터 하나씩 계획에 담아보겠습니다.”',{place:'office'})
];
const epilogue=[
s('이야기','해 질 무렵','none','윤정희','창가 화분의 새잎 뒤로 아파트 창문이 하나둘 밝아졌다.',{place:'office'}),
s('이야기','마지막 방문자','none','오지혜','사무소 문을 닫으려던 순간, 조심스러운 노크 소리가 다시 들렸다.',{place:'office'}),
s('오지혜','야간 근무 주민','npc','오지혜','“소장님, 이번에는 민원 때문에 온 게 아니에요. 부탁드릴 게 하나 있어서요.”',{place:'office'}),
s('이야기','문 너머의 이야기','none','오지혜','사람은 문제가 해결된 뒤에야 꺼낼 수 있는 이야기도 있었다.',{place:'office'})
];
const act3Prelude=[
s('강태식','경비반장','npc','강태식','“여기까지 올라왔었나… 지하 펌프실 기록부터 다시 보죠. 방 안 습기만의 문제는 아닐 수도 있습니다.”',{facility:'B'})
];
const $=id=>document.getElementById(id),stage=$('stage'),cover=$('cover'),dayBreak=$('day-break'),propLayer=$('prop-layer'),doyun=$('doyun'),doyunFigure=$('doyun-figure'),npc=$('npc'),npcFigure=$('npc-figure'),npcName=$('npc-name'),reaction=$('reaction'),bubble=$('bubble'),speaker=$('speaker'),role=$('role'),line=$('line'),choices=$('choices'),choiceList=$('choice-list'),reflection=$('reflection'),management=$('management'),planResult=$('plan-result'),actReview=$('act-review'),ending=$('ending'),history=$('history'),historyList=$('history-list'),chapter=$('chapter'),progress=$('progress'),progressbar=document.querySelector('.progress'),prev=$('prev'),historyOpen=$('history-open'),bgm=$('bgm'),audioToggle=$('audio-toggle');
let dayIndex=0,sceneIndex=0,postIndex=0,afterIndex=0,resultIntroIndex=0,epiIndex=0,view='cover',selected=0,answers={},assignments={},act2Assignments={},managementAct=1,endingMode=2,log=[];
let storageIssue='';
let storageReadable=true;
function readStored(key){try{return localStorage.getItem(key)}catch(error){storageReadable=false;storageIssue='브라우저 저장을 읽을 수 없습니다. 파일 내보내기로 진행을 보관해주세요.';return null}}
function writeStored(key,value){try{localStorage.setItem(key,value)}catch(error){storageIssue='브라우저에 저장하지 못했습니다. 파일 내보내기로 진행을 보관해주세요.';throw error}}
const STORAGE_KEY='office_campaign_release_v1',LEGACY_BACKUP_KEY='office_campaign_release_legacy',AUDIO_KEY='office_campaign_release_audio';
let audioEnabled=readStored(AUDIO_KEY)!=='false';
bgm.volume=.4;
function syncAudio(){audioToggle.textContent=audioEnabled?'음악 끄기':'음악 켜기';audioToggle.setAttribute('aria-pressed',String(audioEnabled))}
function startAudio(){if(audioEnabled&&bgm.paused)bgm.play().catch(()=>{})}
function toggleAudio(){audioEnabled=!audioEnabled;try{writeStored(AUDIO_KEY,String(audioEnabled))}catch(error){}if(audioEnabled)startAudio();else bgm.pause();syncAudio()}
function baseFacilityLevel(id){return assignments[id]?1:0}
function facilityLevel(id){return Math.min(2,baseFacilityLevel(id)+(act2Assignments[id]?1:0))}
function facilityLevels(){return Object.fromEntries(Object.entries(facilityKeys).map(([id,key])=>[key,facilityLevel(id)]))}
function styleCounts(act=managementAct){const counts={principle:0,relation:0,action:0},start=act===1?0:ACT1_DAYS,end=act===1?ACT1_DAYS:15;for(let index=start;index<end;index++){const choice=days[index].choices?.[answers[index]];if(choice?.style)counts[choice.style]++}return counts}
function incidentSpent(){let total=0;for(let index=ACT1_DAYS;index<15;index++)total+=days[index].choices?.[answers[index]]?.cost||0;return total}
function currentAssignments(){return managementAct===1?assignments:act2Assignments}
function assignedCost(list=currentAssignments()){return Object.keys(list).reduce((sum,id)=>sum+(projects.find(p=>p.id===id)?.cost||0),0)}
function act2Budget(){const planSpent=assignedCost(act2Assignments),incident=incidentSpent();return{base:300,incidentSpent:incident,planSpent,available:300-incident-planSpent}}
function roomUse(){return['전용 무더위·안전 쉼터','주민 운영 모임이 주별로 결정','칸막이형 쉼터·활동실'][answers[14]??0]}
function storyState(){return{currentAct:dayIndex<ACT1_DAYS?1:2,act2Started:dayIndex>=ACT1_DAYS,act2Assignments,facilityLevels:facilityLevels(),actStyleCounts:{act1:styleCounts(1),act2:styleCounts(2)},act2Budget:act2Budget(),dayResults:{day8:answers[7]===undefined?null:{choice:days[7].choices[answers[7]].style},day9:answers[8]===undefined?null:{choice:days[8].choices[answers[8]].style,junhoMyeongsookTrust:1},day10:dayIndex>9?{frozenBoxSaved:true,junhoSeonghoTrust:1}:null,day11:dayIndex>10?{snackUntouched:true,lastPatrolLog:'02:10'}:null,day12:answers[11]===undefined?null:{choice:days[11].choices[answers[11]].style,taesikResting:true},day13:answers[12]===undefined?null:{choice:days[12].choices[answers[12]].style,feedingOperationDefined:true},day14:dayIndex>13?{practiceResumed:true,seoyeonJihyeTrust:1}:null,day15:answers[14]===undefined?null:{choice:days[14].choices[answers[14]].style,communityRoomOperationDefined:true,moistureSpreadSuspected:true}},flags:{infrastructureInspectionNeeded:answers[14]!==undefined},relationships:{junhoMyeongsookTrust:dayIndex>8?1:0,junhoSeonghoTrust:dayIndex>9?1:0,seoyeonJihyeTrust:dayIndex>13?1:0},carryoverBudget:act2Budget().available}}
function progressSnapshot(){return{schema:2,version:'v1.4.1',dayIndex,sceneIndex,postIndex,afterIndex,resultIntroIndex,epiIndex,view,selected,answers,assignments,log,managementAct,storyState:storyState()}}
function saveProgress(){try{const raw=readStored(STORAGE_KEY);if(raw){const current=JSON.parse(raw);if(current&&typeof current.idx==='number'&&!readStored(LEGACY_BACKUP_KEY))writeStored(LEGACY_BACKUP_KEY,raw)}writeStored(STORAGE_KEY,JSON.stringify(progressSnapshot()))}catch(error){console.warn('진행 저장 실패',error)}}
function loadProgress(){try{const saved=JSON.parse(readStored(STORAGE_KEY));if(!saved||saved.schema!==2)return false;dayIndex=Math.min(Math.max(Number(saved.dayIndex)||0,0),days.length-1);sceneIndex=Math.max(Number(saved.sceneIndex)||0,0);postIndex=Math.max(Number(saved.postIndex)||0,0);afterIndex=Math.max(Number(saved.afterIndex)||0,0);resultIntroIndex=Math.max(Number(saved.resultIntroIndex)||0,0);epiIndex=Math.max(Number(saved.epiIndex)||0,0);view=saved.view||'cover';selected=Math.max(Number(saved.selected)||0,0);answers=saved.answers||{};assignments=saved.assignments||{};act2Assignments=saved.storyState?.act2Assignments||{};managementAct=Number(saved.managementAct)||((dayIndex>=ACT1_DAYS)?2:1);log=Array.isArray(saved.log)?saved.log:[];return true}catch(error){console.warn('기존 진행을 불러오지 못했습니다.',error);return false}}
function setActHeader(){const act=dayIndex<ACT1_DAYS?1:2;$('act-name').textContent=act===1?'1막 · 처음 만난 사람들':'2막 · 이름 뒤의 사정';progressbar.setAttribute('aria-label',`${act}막 진행률`)}
function facilityPlace(id){return`facility-${id.toLowerCase()}-${facilityLevel(id)}`}
function resolve(scene){const level=scene.facility?facilityLevel(scene.facility):0,rawPlace=scene.place||days[dayIndex]?.place||'office',place=scene.facility?facilityPlace(scene.facility):/^facility-[a-e]$/.test(rawPlace)?facilityPlace(rawPlace.at(-1).toUpperCase()):rawPlace;return{...scene,text:scene.textByLevel?.[level]||scene.textByDay1?.[answers[0]??0]||scene.text,place}}
function showSavedView(){setActHeader();const day=days[dayIndex];sceneIndex=Math.min(sceneIndex,day.scenes.length-1);if(view==='day-break')showDayBreak();else if(view==='main')renderMain();else if(view==='choices')showChoices();else if(view==='post'){selected=answers[dayIndex]??selected;postIndex=Math.min(postIndex,day.choices[selected].post.length-1);renderPost()}else if(view==='after'){afterIndex=Math.min(afterIndex,(day.after?.length||1)-1);renderAfter()}else if(view==='reflection'){const choice=day.choices?.[answers[dayIndex]??selected];showReflection(choice?.result||day.result,choice?.thought||day.thought)}else if(view==='management')showManagement(managementAct);else if(view==='result-intro')renderResultIntro();else if(view==='plan-result')showPlanResult();else if(view==='act-review')showActReview();else if(view==='epilogue')renderEpilogue();else if(view==='ending')showEnding(dayIndex>=ACT1_DAYS?3:2);else{hide();cover.classList.remove('hidden')}}
function hide(){[cover,dayBreak,bubble,choices,reflection,management,planResult,actReview,ending,history].forEach(el=>el.classList.add('hidden'));reaction.classList.add('hidden');propLayer.replaceChildren()}
function setProgress(n){progress.style.width=`${Math.max(0,Math.min(100,n))}%`;progressbar.setAttribute('aria-valuenow',String(Math.round(n)))}
function actProgress(fraction=0){const local=dayIndex<ACT1_DAYS?dayIndex+fraction:dayIndex-ACT1_DAYS+fraction,total=dayIndex<ACT1_DAYS?ACT1_DAYS:days.length-ACT1_DAYS;return 6+Math.round(local/total*78)}
function propsFor(scene){const text=scene.text||'',rules=[];if(scene.cutin)rules.push(['full',scene.cutin]);if(/손바닥에 올려진 열쇠 꾸러미/.test(text))rules.push(['full','keys']);if(/복도 한편에 쌍둥이용 유모차/.test(text))rules.push(['daily','stroller']);if(/비에 젖은 택배 상자/.test(text))rules.push(['daily','parcel']);if(/연습 시간과 소음 방지 수칙|같은 연습표/.test(text))rules.push(['life','schedule']);if(/서로 젖지 않게 우산/.test(text))rules.push(['full','umbrella-back']);if(/사탕 봉지/.test(text))rules.push(['life','candy']);if(/승용차 한 대가 진입로/.test(text))rules.push(['life','car']);if(/바닥에 임시 보관선을|임시 표지를 세웠다|줄자의 양끝/.test(text))rules.push(['care','line-kit']);if(/달력 구석에.*물방울/.test(text))rules.push(['life','plant']);if(/차량 아래로 재빨리 사라지는 고양이/.test(text))rules.push(['care','cat']);if(/밥그릇 주변.*사료|젖은 사료를 치우는/.test(text))rules.push(['care','bowls']);return rules}
function renderProps(scene){const rules=propsFor(scene);propLayer.replaceChildren();if(!rules.length)return false;const key=rules[0][1],full=['keys','umbrella-back','dinosaur-bottle','frozen-parcel','snack-note','water-stain','old-photo','technician','finale-umbrellas','finale-new-leaf','story-handover-plan','story-management-log','detail-printed-notice','detail-duty-phone','detail-dry-supplies','detail-untagged-umbrellas'].includes(key),cutin=document.createElement('div'),backdrop=document.createElement('span'),specialBackdrop=key==='keys'?'keys-hand':key==='umbrella-back'?'umbrella-back':'';cutin.className='cutin';backdrop.className=`cutin-backdrop ${specialBackdrop||scene.place}`;cutin.append(backdrop);if(key.startsWith('act3-'))renderAct3Cutin(cutin,key);else if(full){const photo=document.createElement('span');photo.className=`cutin-photo ${key==='keys'?'keys-hand':key}`;if(key.startsWith('detail-')){photo.setAttribute('role','img');photo.setAttribute('aria-label',{'detail-printed-notice':'우산 곁의 출력된 주민 안내문','detail-duty-phone':'인계 기록 옆 관리사무소 전화','detail-dry-supplies':'마른 탁자에 정리된 수건과 물품','detail-untagged-umbrellas':'이름표 없이 우산꽂이에 남은 여러 색 우산'}[key]);}if(key.startsWith('story-')){photo.setAttribute('role','img');photo.setAttribute('aria-label',key==='story-handover-plan'?'책상 위에 펼쳐진 도면과 인계 메모':'펼쳐진 관리일지와 다음 점검 목록');}cutin.append(photo)}else rules.slice(0,2).forEach(([atlas,name])=>{const item=document.createElement('span');item.className=`cutin-art ${atlas} ${name}`;cutin.append(item)});propLayer.append(cutin);return true}
function setCharacter(scene){doyun.className='character left hidden';npc.className='character right hidden';const mood=scene.emotion||inferEmotion(scene);if(scene.who==='none'&&scene.visualCast?.length){const [left,right]=scene.visualCast;doyun.classList.remove('hidden');paintFigure(doyunFigure,left,scene.visualEmotion||'neutral');if(right){npc.classList.remove('hidden');paintFigure(npcFigure,right,scene.visualEmotion||'neutral');npcName.textContent=right}stage.classList.add('story-tableau');stage.classList.toggle('story-tableau-single',!right)}if(scene.who==='doyun'){doyun.classList.remove('hidden');doyun.classList.add('speaking');paintFigure(doyunFigure,'도윤',scene.doyunEmotion||mood)}else if(scene.who==='npc'){npc.classList.remove('hidden');npc.classList.add('speaking');paintFigure(npcFigure,scene.npc,mood);npcName.textContent=scene.npc}const explicit=[...(scene.others||[])],names=explicit.length?(scene.who==='doyun'?[scene.npc,...explicit]:scene.who==='npc'?(explicit.length<2?['도윤',...explicit]:explicit):[scene.npc,...explicit]):[];const visible=names.map(name=>aliases[name]||name).filter((name,index,list)=>name&&list.indexOf(name)===index).slice(0,2);reaction.replaceChildren();reaction.className=`reaction ${scene.who==='npc'?'left':'right'}`;visible.forEach(name=>{const item=document.createElement('div'),portrait=document.createElement('div'),figure=document.createElement('div'),copy=document.createElement('div'),strong=document.createElement('strong'),span=document.createElement('span');item.className='reaction-person';portrait.className='reaction-portrait';figure.className='reaction-figure';copy.className='reaction-copy';strong.textContent=name;span.textContent=reactionCopy[name]||'장면을 지켜본다';paintFigure(figure,name);portrait.append(figure);copy.append(strong,span);item.append(portrait,copy);reaction.append(item)});reaction.classList.toggle('hidden',!visible.length)}
function weatherClasses(scene){if(scene?.atmosphere)return ' '+scene.atmosphere;const w=scene?.weather;return w?` act4-weather weather-${w.time} rain-${w.rain}`:''}
function renderDialogue(scene,label,percent){hide();setActHeader();scene=resolve(scene);chapter.textContent=scene.chapter||label;stage.className=`stage ${scene.place}${weatherClasses(scene)}`;const hasCutin=renderProps(scene);stage.classList.toggle('cutin-on',hasCutin);setCharacter(hasCutin?{...scene,who:'none',others:[],visualCast:[]}:scene);bubble.className=`bubble ${scene.who==='doyun'?'right':scene.who==='npc'?'left':'narration'}`;speaker.textContent=scene.who==='none'?'':scene.speaker;role.textContent=scene.who==='none'?'':scene.role;line.textContent=scene.text;bubble.classList.remove('hidden');setProgress(percent);prev.disabled=view==='main'&&sceneIndex===0;historyOpen.disabled=false}
function showDayBreak(){hide();view='day-break';setActHeader();const day=days[dayIndex],place=day.place.startsWith('facility-')?facilityPlace(day.place.at(-1).toUpperCase()):day.place;chapter.textContent=`${day.day} · 시작`;stage.className=`stage ${place}${weatherClasses(day.scenes[0])}`;$('day-break-kicker').textContent=`DAY ${dayIndex+1}`;$('day-break-day').textContent=day.day;$('day-break-title').textContent=day.title;dayBreak.querySelector('span').textContent=dayIndex===ACT1_DAYS?'이름 뒤의 사정을 마주하는 두 번째 주가 시작됩니다.':'새로운 하루가 시작됩니다.';dayBreak.classList.remove('hidden');doyun.classList.add('hidden');npc.classList.add('hidden');setProgress(actProgress());prev.disabled=true;historyOpen.disabled=dayIndex===0&&!log.length}
function renderMain(){view='main';const day=days[dayIndex];renderDialogue(day.scenes[sceneIndex],`${day.day} · ${day.type}`,actProgress(sceneIndex/day.scenes.length))}
function renderPost(){view='post';const day=days[dayIndex],choice=day.choices[selected];renderDialogue(choice.post[postIndex],`${day.day} · 선택 이후`,actProgress(.82));prev.disabled=false}
function renderAfter(){view='after';const day=days[dayIndex];renderDialogue(day.after[afterIndex],`${day.day} · 남은 흔적`,actProgress(.9));prev.disabled=false}
const act2ResultIntro=[s('이야기','두 번째 관리 계획','none','박선우','두 번째 주에 쓴 긴급 비용과 아직 남은 공간 문제를 한 장에 모았다.',{place:'office'}),s('박선우','입주자대표','npc','박선우','“사건을 넘기는 데 쓴 비용부터 빼고, 남은 예산으로 한두 곳을 제대로 바꾸죠.”',{place:'office'}),s('도윤','관리소장','doyun','박선우','“선택한 공간만 한 단계 올리고, 고르지 못한 곳은 다음 계획에 남기겠습니다.”',{place:'office'})];
function activeResultIntro(){return managementAct===1?resultIntro:act2ResultIntro}
function renderResultIntro(){view='result-intro';const scenes=activeResultIntro();resultIntroIndex=Math.min(resultIntroIndex,scenes.length-1);renderDialogue(scenes[resultIntroIndex],`${managementAct}막 · 관리계획 실행`,90+Math.round((resultIntroIndex+1)/scenes.length*2));prev.disabled=false}
function activeEpilogue(){return managementAct===1?epilogue:act3Prelude}
function renderEpilogue(){view='epilogue';const scenes=activeEpilogue();renderDialogue(scenes[epiIndex],managementAct===1?'1막 · 마무리':'2막 · 마지막 확인',94+Math.round((epiIndex+1)/scenes.length*5));prev.disabled=epiIndex===0}
function currentScene(){if(view==='main')return resolve(days[dayIndex].scenes[sceneIndex]);if(view==='post')return resolve(days[dayIndex].choices[selected].post[postIndex]);if(view==='after')return resolve(days[dayIndex].after[afterIndex]);if(view==='result-intro')return resolve(activeResultIntro()[resultIntroIndex]);if(view==='epilogue')return resolve(activeEpilogue()[epiIndex])}
function logScene(scene){if(!scene)return;const key=`${view}-${dayIndex}-${scene.speaker}-${scene.text}`;if(log.some(item=>item.key===key))return;log.push({key,label:`${scene.who==='none'?'장면':scene.speaker} · ${scene.role}`,text:scene.text})}
function advance(){logScene(currentScene());if(view==='main'){const day=days[dayIndex];if(sceneIndex<day.scenes.length-1){sceneIndex++;if(dayIndex===0&&sceneIndex===firstDayScene)showDayBreak();else renderMain()}else if(day.choices)showChoices();else if(day.skipReflection)nextDay();else showReflection(day.result,day.thought)}else if(view==='post'){const day=days[dayIndex],post=day.choices[selected].post;if(postIndex<post.length-1){postIndex++;renderPost()}else if(day.after?.length){afterIndex=0;renderAfter()}else{const choice=day.choices[selected];showReflection(choice.result,choice.thought)}}else if(view==='after'){const day=days[dayIndex];if(afterIndex<day.after.length-1){afterIndex++;renderAfter()}else{const choice=day.choices[selected];showReflection(choice.result,choice.thought)}}else if(view==='result-intro'){const scenes=activeResultIntro();if(resultIntroIndex<scenes.length-1){resultIntroIndex++;renderResultIntro()}else showPlanResult()}else if(view==='epilogue'){const scenes=activeEpilogue();if(epiIndex<scenes.length-1){epiIndex++;renderEpilogue()}else showEnding(managementAct===1?2:3)}}
function showChoices(){hide();view='choices';setActHeader();const day=days[dayIndex],place=resolve(day.scenes.at(-1)).place;chapter.textContent=`${day.day} · 선택`;stage.className=`stage ${place}${weatherClasses(day.scenes.at(-1))}`;doyun.className='character left speaking';npc.className='character right hidden';paintFigure(doyunFigure,'도윤','neutral');choiceList.replaceChildren();day.choices.forEach((choice,i)=>{const button=document.createElement('button');button.type='button';button.className=`choice ${choice.style}`;const strong=document.createElement('strong'),small=document.createElement('small');strong.textContent=choice.label;small.textContent=choice.sub;button.append(strong,small);button.addEventListener('click',()=>choose(i));choiceList.append(button)});choices.classList.remove('hidden');prev.disabled=false;historyOpen.disabled=false}
function choose(i){selected=i;answers[dayIndex]=i;postIndex=0;afterIndex=0;const day=days[dayIndex],choice=day.choices[i],key=`choice-${dayIndex}`;log=log.filter(item=>item.key!==key);log.push({key,label:`${day.day} · 도윤의 선택`,text:choice.label,choice:true});renderPost()}
function showReflection(resultText,thoughtText){hide();view='reflection';setActHeader();const day=days[dayIndex];chapter.textContent=`${day.day} · 결과`;stage.className='stage office'+weatherClasses(day.after?.at(-1)||day.scenes.at(-1));$('reflection-type').textContent=day.type;$('reflection-title').textContent=day.title;$('reflection-sub').textContent=resultText||'';$('thought').textContent=thoughtText||'';$('next-day').textContent=dayIndex===ACT1_DAYS-1?'첫 관리 계획 세우기':dayIndex===14?'2막 관리 계획을 세운다':'다음 날로';reflection.classList.remove('hidden');setProgress(actProgress(1));prev.disabled=false;historyOpen.disabled=false}
function nextDay(){if(dayIndex===ACT1_DAYS-1){managementAct=1;showManagement(1);return}if(dayIndex===14){managementAct=2;showManagement(2);return}if(dayIndex===19){showAct3Plan();return}dayIndex++;sceneIndex=0;postIndex=0;afterIndex=0;showDayBreak()}
function goBack(){if(view==='main'&&sceneIndex>0){sceneIndex--;renderMain()}else if(view==='choices'){sceneIndex=days[dayIndex].scenes.length-1;renderMain()}else if(view==='post'){if(postIndex>0){postIndex--;renderPost()}else showChoices()}else if(view==='after'){if(afterIndex>0){afterIndex--;renderAfter()}else{postIndex=days[dayIndex].choices[selected].post.length-1;renderPost()}}else if(view==='reflection'){const day=days[dayIndex];if(day.after?.length){afterIndex=day.after.length-1;renderAfter()}else if(day.choices){selected=answers[dayIndex]??0;postIndex=day.choices[selected].post.length-1;renderPost()}else{sceneIndex=day.scenes.length-1;renderMain()}}else if(view==='result-intro'){if(resultIntroIndex>0){resultIntroIndex--;renderResultIntro()}else showManagement(managementAct)}else if(view==='epilogue'&&epiIndex>0){epiIndex--;renderEpilogue()}}
function openHistory(){logScene(currentScene());historyList.replaceChildren();log.forEach(item=>{const card=document.createElement('article');card.className=`history-item${item.choice?' choice-log':''}`;const b=document.createElement('strong'),p=document.createElement('p');b.textContent=item.label;p.textContent=item.text;card.append(b,p);historyList.append(card)});history.classList.remove('hidden');history.scrollTop=history.scrollHeight}
function planIntro(){if(managementAct===2)return`사건 대응에 ${incidentSpent()}만 원을 사용했습니다. 현재 시설은 1막 계획 결과를 반영합니다.`;return['복도 금지 기준으로 통행은 확보됐지만 준호의 세대 안 보관 부담이 남았습니다.','임시 보관선은 사용 중이지만 고정 장치와 점검 기준이 필요합니다.','5층 주민 논의는 끝나 위치와 이용 기준에 합의했습니다. 아직 실제 보관 설비는 없습니다.'][answers[0]??0]}
function showManagement(act=managementAct){managementAct=act;hide();view='management';setActHeader();chapter.textContent=act===1?'첫 관리 계획':'2막 관리 계획';stage.className='stage office';doyun.classList.add('hidden');npc.classList.add('hidden');$('plan-step').textContent=`1단계 · ${act}막 관리 계획`;$('plan-title').textContent=act===1?'라이프아파트, 무엇부터 바꿀까?':'남은 예산으로 어디를 한 단계 바꿀까?';management.classList.remove('hidden');$('plan-context').textContent=`${planIntro()} 조감도에서 최대 두 곳을 고르세요.`;prev.disabled=true;historyOpen.disabled=false;setProgress(89);renderProjects()}
function rebalance(list=currentAssignments()){const ids=Object.keys(list).sort();if(!ids.length)return;list[ids[0]]=projects.find(p=>p.id===ids[0]).recommended;if(ids.length===2){const second=projects.find(p=>p.id===ids[1]);list[ids[1]]=second.recommended===list[ids[0]]?(second.recommended==='도윤'?'태식':'도윤'):second.recommended}}
function effect(project){if(managementAct===2)return upgradeEffects[project.id][baseFacilityLevel(project.id)];return project.effects[project.answer===undefined?0:answers[project.answer]??0]}
function availableBeforePlan(){return managementAct===1?300:300-incidentSpent()}
function toggleProject(id){const list=currentAssignments();$('plan-warning').textContent='';if(list[id]){delete list[id];rebalance(list);renderProjects();return}if(managementAct===2&&baseFacilityLevel(id)>=2){$('plan-warning').textContent='이미 2단계인 장소입니다.';return}if(Object.keys(list).length>=2){$('plan-warning').textContent='이번 계획에서는 두 곳까지만 관리할 수 있습니다.';return}const project=projects.find(p=>p.id===id);if(assignedCost(list)+project.cost>availableBeforePlan()){$('plan-warning').textContent='예산이 부족합니다. 선택한 장소를 하나 해제해주세요.';return}list[id]='대기';rebalance(list);renderProjects();$('plan-context').textContent=`${project.name}: ${effect(project)}`}
function renderProjects(){const list=currentAssignments();document.querySelectorAll('[data-spot]').forEach(spot=>{const id=spot.dataset.spot,person=list[id],project=projects.find(p=>p.id===id),level=managementAct===1?0:baseFacilityLevel(id);spot.classList.toggle('on',Boolean(person));spot.classList.toggle('maxed',managementAct===2&&level>=2);spot.setAttribute('aria-pressed',String(Boolean(person)));spot.disabled=managementAct===2&&level>=2;spot.querySelector('small').textContent=managementAct===1?`1명 · ${project.cost}만 원`:`${level}→${Math.min(2,level+1)}단계 · ${project.cost}만 원`});const cost=assignedCost(list),dId=Object.keys(list).find(id=>list[id]==='도윤'),tId=Object.keys(list).find(id=>list[id]==='태식');$('budget').textContent=`${availableBeforePlan()-cost}만 원`;$('doyun-state').textContent=dId?projects.find(p=>p.id===dId).name.replace(/ 정비| 표시| 정리/g,''):'배정 가능';$('taesik-state').textContent=tId?projects.find(p=>p.id===tId).name.replace(/ 정비| 표시| 정리/g,''):'배정 가능'}
function renderStyle(){const counts=styleCounts(managementAct),center=[75,80],axes={principle:[75,20],relation:[18,120],action:[132,120]},point=key=>{const ratio=.28+.72*counts[key]/5,v=axes[key];return`${Math.round(center[0]+(v[0]-center[0])*ratio)},${Math.round(center[1]+(v[1]-center[1])*ratio)}`};$('style-shape').setAttribute('points',[point('principle'),point('relation'),point('action')].join(' '));$('count-principle').textContent=counts.principle;$('count-relation').textContent=counts.relation;$('count-action').textContent=counts.action;const max=Math.max(...Object.values(counts)),names={principle:'원칙 고수',relation:'관계 중시',action:'실행 우선'},leaders=Object.keys(counts).filter(key=>counts[key]===max).map(key=>names[key]);$('style-copy').textContent=`${managementAct}막에서 도윤은 ${leaders.join('·')} 쪽에 조금 더 무게를 두었습니다.`}
function confirmPlan(){const list=currentAssignments();if(!Object.keys(list).length){$('plan-warning').textContent='적어도 한 곳은 골라보세요.';return}resultIntroIndex=0;renderResultIntro()}
const facilityImages={A:['corridor_stage0_unresolved_v0.1.webp','corridor_stage1_temporary_zone_v0.1.webp','corridor_stage2_permanent_station_v0.1.webp'],B:['community_room_stage0_damp_unused_v0.1.webp','community_room_stage1_trial_open_v0.1.webp','community_room_stage2_permanent_lounge_v0.1.webp'],C:['loading_zone_stage0_emergency_lane_blocked_v0.1.webp','loading_zone_stage1_temporary_timed_bay_v0.1.webp','loading_zone_stage2_permanent_timed_bay_v0.1.webp'],D:['feeding_station_stage0_unmanaged_bowls_v0.1.webp','feeding_station_stage1_trial_hygiene_zone_v0.1.webp','feeding_station_stage2_permanent_hygiene_station_v0.1.webp'],E:['lobby_hub_stage0_scattered_parcels_notices_v0.1.webp','lobby_hub_stage1_temporary_sorting_v0.1.webp','lobby_hub_stage2_integrated_information_hub_v0.1.webp']};
function imagePath(id,level){return`assets/2막_공간/${facilityImages[id][level]}`}
function showPlanResult(){const list=currentAssignments(),selectedEntries=Object.entries(list);hide();view='plan-result';chapter.textContent=`2단계 · ${managementAct}막 관리 결과`;stage.className='stage office';$('result-step').textContent=`2단계 · ${managementAct}막 관리 결과`;$('result-title').textContent='고른 공간이 한 단계 달라졌다';$('result-lead').textContent='사건 선택이 아니라 이번 관리계획으로만 시설 단계가 올랐습니다.';planResult.classList.remove('hidden');const listEl=$('summary-list');listEl.replaceChildren();selectedEntries.forEach(([id,person])=>{const project=projects.find(p=>p.id===id),item=document.createElement('div'),before=managementAct===1?0:baseFacilityLevel(id),after=Math.min(2,before+1),copy=managementAct===1?effect(project):upgradeEffects[id][before];item.className='summary-item change-item';item.innerHTML=`<b>${project.name} · ${person} 담당</b><div class="before-after"><figure><img src="${imagePath(id,before)}" alt="${project.name} 정비 전"><figcaption>정비 전 · ${before}단계</figcaption></figure><figure><img src="${imagePath(id,after)}" alt="${project.name} 정비 후"><figcaption>정비 후 · ${after}단계</figcaption></figure></div><span>${copy}</span>`;listEl.append(item)});const rest=document.createElement('div');rest.className='summary-item';const remaining=availableBeforePlan()-assignedCost(list);rest.innerHTML=`<b>남은 예산 · ${remaining}만 원</b><span>고르지 못한 공간은 다음 관리 계획에서 다시 검토합니다.</span>`;listEl.append(rest);setProgress(93);prev.disabled=true;historyOpen.disabled=false}
function renderReviewSummary(){const list=$('review-summary');list.replaceChildren();if(managementAct===1)return;const facilityNames={A:'복도 안전',B:'주민 쉼터',C:'주차·하역',D:'화단·급식소',E:'공동현관·안내'},rows=[['공용실 운영 방식',roomUse()],['현재 시설 단계',Object.keys(facilityNames).map(id=>`${facilityNames[id]} ${facilityLevel(id)}`).join(' · ')],['남은 예산',`${act2Budget().available}만 원`],['시설 점검 필요','공용실 습기와 지하 펌프실 기록 확인']];rows.forEach(([title,copy])=>{const item=document.createElement('div');item.className='summary-item';const b=document.createElement('b'),span=document.createElement('span');b.textContent=title;span.textContent=copy;item.append(b,span);list.append(item)})}
function showActReview(){hide();view='act-review';chapter.textContent=`3단계 · ${managementAct}막 전체 회상`;stage.className='stage office';$('review-step').textContent=`3단계 · ${managementAct}막 전체 회상`;$('review-lead').textContent=managementAct===1?'7일 동안 다섯 번의 선택을 돌아봅니다.':'8일 동안 다섯 번의 선택과 남겨진 공간을 돌아봅니다.';$('review-style-title').textContent=`${managementAct}막 전체 관리 성향`;$('review-reflection').textContent=managementAct===1?'이번 주의 판단과 만든 공간은 다음 사건에도 이어진다.':'방의 사용 방법은 정해졌다. 이제 벽 안에서 번지는 문제를 확인할 차례다.';$('epilogue-open').textContent=managementAct===1?'관리사무소로 돌아간다':'지하 펌프실 기록을 확인한다';actReview.classList.remove('hidden');renderStyle();renderReviewSummary();setProgress(96);prev.disabled=true;historyOpen.disabled=false}
function showEnding(target=2){endingMode=target;hide();view='ending';stage.className='stage exterior';doyun.classList.add('hidden');npc.classList.add('hidden');ending.classList.toggle('act3-teaser',target===3);ending.classList.remove('hidden');if(target===2){chapter.textContent='1막 · 끝';$('ending-kicker').textContent='ACT 2';$('ending-title').textContent='2막 · 이름 뒤의 사정';$('ending-copy').textContent='사정을 알게 된 뒤에도 같은 기준을 똑같이 적용할 수 있을까?';$('ending-restart').textContent='2막 시작하기';$('ending-restart').disabled=false}else{chapter.textContent='2막 · 끝';$('ending-kicker').textContent='3막 예고';$('ending-title').textContent='3막 · 벽 안의 물소리';$('ending-copy').textContent='공용실의 바닥 가까운 벽에서 위로 번진 변색선이 드러났다. 방의 쓰임은 정해졌지만, 벽 안에서 번지는 문제의 주인은 아직 찾지 못했다.';$('ending-restart').textContent='3막 준비 중';$('ending-restart').disabled=true}setProgress(100);prev.disabled=true;historyOpen.disabled=false}
function startAct2(){if(!Object.keys(assignments).length)assignments={A:'태식',B:'도윤'};dayIndex=ACT1_DAYS;sceneIndex=0;postIndex=0;afterIndex=0;managementAct=2;showDayBreak()}
// Local review extension: reuse the existing dialogue, assets and earlier acts.
let act3={context:null,plan:[],confirmed:false};
let saveAllowed=true;
let campaignMenuOpen=false;
let runStarted=false;
const RUN_BACKUP_KEY='office_campaign_release_backup_v1';
const campaignPanel=$('campaign-panel');
const act3Projects=[
 {id:'rental',name:'예비 펌프·운영 지원',cost:120,slots:1,effect:'21~23일차 장비 임대와 업체 운영 지원을 확보합니다.',limit:'기존 펌프 노후와 배수 경로 문제는 남습니다.',response:'강태식 · “장비만 놓고 가는 계약은 아니군요. 업체 담당자와 근무자 인계 시간을 맞추겠습니다.”'},
 {id:'replace',name:'기존 펌프 선제 교체',cost:240,slots:2,effect:'21일차 전문업체 교체·시운전을 확인합니다.',limit:'업무 2칸을 모두 사용합니다. 다른 구역 보강은 별도입니다.',response:'도윤 · “내일 교체와 시운전까지 확인하겠습니다. 새 펌프를 넣었다고 다른 구역의 통제를 풀지는 않겠습니다.”'},
 {id:'drain',name:'배수 경로·전기 구역 보강',cost:100,slots:1,effect:'배수구·점검구 정비와 필요한 방수 보강을 의뢰합니다.',limit:'펌프 자체의 노후·처리 여력은 그대로입니다.',response:'강태식 · “펌프까지 오는 물길도 같이 살피겠네요. 작업 구역 출입 안내는 제가 인계하겠습니다.”'},
 {id:'residents',name:'주민 연락·대체 쉼터 운영',cost:60,slots:1,effect:'연락 확인, 대체 장소 운영 협의와 기본 물품을 준비합니다.',limit:'공용실은 계속 폐쇄합니다. 설비 피해를 직접 줄이지 않습니다.',response:'박선우 · “문자가 갔다고 연락이 끝난 건 아니죠. 확인이 안 된 세대는 따로 이어보겠습니다.”'},
 ...projects.map(p=>({id:p.id,name:p.name,cost:p.cost,slots:1,effect:'',limit:p.id==='B'?'안전 확인 전 개방을 전제로 한 정비는 보류합니다.':'21일차 완료 확인 후 한 단계 상승합니다. 지금은 준비 예정입니다.',response:'도윤 · “선택한 공간의 정비를 마친 뒤, 실제로 달라진 부분까지 확인하겠습니다.”'}))
];
const project3=id=>act3Projects.find(p=>p.id===id);
const sum3=(key,ids=act3.plan)=>ids.reduce((sum,id)=>sum+project3(id)[key],0);
const spent3=()=>days[17].choices?.[answers[17]]?.cost||0;
const budget3=()=>({base:300,carryover:act3.context?.carryover??0,incidentSpent:spent3(),planSpent:act3.confirmed?sum3('cost'):0,available:300+(act3.context?.carryover??0)-spent3()-(act3.confirmed?sum3('cost'):0)});
function validContext(raw){
 if(!raw||!Number.isInteger(raw.carryover)||raw.carryover<0||raw.carryover>300||!Number.isInteger(raw.room)||raw.room<0||raw.room>2||typeof raw.seniorOpen!=='boolean')throw Error('이월액은 0~300만 원, 공용실 용도는 세 가지 중 하나여야 합니다.');
 const levels={};for(const id of Object.keys(facilityKeys)){const n=raw.levels?.[id];if(!Number.isInteger(n)||n<0||n>2)throw Error('시설 단계는 0~2여야 합니다.');levels[id]=n}
 return {levels,carryover:raw.carryover,room:raw.room,seniorOpen:raw.seniorOpen};
}
function planProblem(ids){
 if(new Set(ids).size!==ids.length||ids.some(id=>!project3(id)))return '계획 항목이 올바르지 않습니다.';
 if(ids.includes('B'))return '공용실은 안전 확인 전까지 정비를 보류합니다.';
 if(ids.some(id=>facilityKeys[id]&&facilityLevel(id)>=2))return '이미 정비가 끝난 공간입니다.';
 if(ids.includes('rental')&&ids.includes('replace'))return '예비 펌프와 선제 교체는 함께 선택할 수 없습니다.';
 if(sum3('slots',ids)>2)return '업무 여력은 2칸입니다. 선택한 사업을 먼저 해제해주세요.';
 if(sum3('cost',ids)>300+(act3.context?.carryover??0)-spent3())return '가용 예산을 초과합니다.';
 return '';
}
const oldHide=hide;hide=()=>{oldHide();campaignPanel.classList.add('hidden')};
const oldLevel=facilityLevel;facilityLevel=id=>dayIndex>=15&&act3.context?act3.context.levels[id]:oldLevel(id);
const oldCounts=styleCounts;styleCounts=(act=managementAct)=>{
 if(act!==3)return oldCounts(act);
 const counts={principle:0,relation:0,action:0};for(const i of [15,17]){const key=days[i].choices?.[answers[i]]?.style;if(key)counts[key]++}return counts;
};
const oldStoryState=storyState;storyState=()=>{
 const state=oldStoryState();if(dayIndex<15)return state;
 return {...state,currentAct:3,facilityLevels:facilityLevels(),actStyleCounts:{...state.actStyleCounts,act3:styleCounts(3)},act3,act3Budget:budget3(),carryoverBudget:act3.context.carryover,dayResults:{...state.dayResults,day16:answers[15]===undefined?null:{choice:days[15].choices[answers[15]].style,roomClosed:true},day17:dayIndex>16?{photoSaved:true}:null,day18:answers[17]===undefined?null:{choice:days[17].choices[answers[17]].style,commonDrainCause:true,temporarySupport:answers[17]===2?'completed_before_day20':'none'},day19:dayIndex>18?{loadingRouteShared:true}:null,day20:{plan:act3.plan,confirmed:act3.confirmed,workCompleted:false}},flags:{...state.flags,roomClosed:true},pendingProjects:act3.confirmed?[...act3.plan]:[]};
};
const oldSnapshot=progressSnapshot;progressSnapshot=()=>({...oldSnapshot(),version:'v1.6.0-rc1',act3});
const oldSave=saveProgress;saveProgress=()=>{if(saveAllowed&&!campaignMenuOpen&&storageReadable)oldSave()};
const oldLoad=loadProgress;loadProgress=()=>{
 try{const raw=readStored(STORAGE_KEY);if(!raw)return false;const saved=JSON.parse(raw);
 if(saved.schema!==2||!Number.isInteger(saved.dayIndex)||saved.dayIndex<0||saved.dayIndex>=days.length)throw Error('지원하지 않는 저장 형식입니다.');
 if(saved.dayIndex>=15){const state=saved.act3||saved.storyState?.act3;act3={context:validContext(state?.context),plan:Array.isArray(state?.plan)?state.plan:[],confirmed:state?.confirmed===true};
  if(act3.plan.some(id=>!project3(id)))throw Error('저장된 계획 항목을 확인해주세요.');
  for(const i of [15,17])if(saved.answers?.[i]!==undefined&&![0,1,2].includes(saved.answers[i]))throw Error('선택 기록이 올바르지 않습니다.');
 }
 const ok=oldLoad();if(!ok)throw Error('저장 파일을 읽지 못했습니다.');if(dayIndex>=15&&planProblem(act3.plan))throw Error('저장된 계획이 확정 기준과 맞지 않습니다.');return true;
 }catch(e){saveAllowed=false;window.saveLoadError=e.message;return false}
};
const oldHeader=setActHeader;setActHeader=()=>{if(dayIndex<15)return oldHeader();$('act-name').textContent='3막 · 벽 안의 물소리';progressbar.setAttribute('aria-label','3막 진행률')};
const oldProgress=actProgress;actProgress=(fraction=0)=>dayIndex>=15?6+Math.round((dayIndex-15+fraction)/5*78):dayIndex>=7?6+Math.round((dayIndex-7+fraction)/8*78):oldProgress(fraction);
const oldResolve=resolve;resolve=raw=>{
 const out=oldResolve(raw);if(dayIndex<15||!act3.context)return out;
 const c=act3.context,b=c.levels.B,l=c.levels.C;
 const dynamic={
 roomBackground:['오래된 장에 가려져 있던 벽 아래에도 물자국이 보였다. 아직 개방 전인 방이었다.','시험 개방 때 쓰던 흡음판 뒤로 변색선이 드러났다. 시험 이용은 점검이 끝날 때까지 멈춘다.','예약판에는 이번 주 일정이 적혀 있었다. 고정 흡음재 아래 변색선 때문에 이용 예정자에게 중지를 알려야 했다.'][b],
 roomNotice:b===0?'공용실 문에 개방 연기 안내가 붙었다. 안전 확인 전까지 방은 열지 않는다.':'공용실 문에 사용 중지 안내가 붙었다. 점검이 끝날 때까지 예약과 이용은 멈춘다.',
 roomUse:b===0?['“쉼터를 열 때까지 어디서 지내면 되는지 알려주세요.”','“모임을 준비하던 분들에게 제가 알릴게요. 개방은 점검 뒤로 미루는 거죠?”','“공용실 연습 계획은 미룰게요. 벽 확인부터 끝나야겠네요.”'][c.room]:[c.seniorOpen?'“오늘 더위는 경로당에서 견딜 수 있겠지만, 쉼터를 언제 다시 열 수 있는지는 알려주세요.”':'“경로당도 못 쓰는데, 오늘은 어디로 가면 될까요?”','“이번 주 모임을 정한 사람들에게 제가 연락할게요. 안전 확인 전까지는 다른 곳으로 옮기죠.”','“연습은 집에서 할게요. 칸막이는 그대로 두면 안 되는 거죠?”'][c.room],
 roomUseReply:b===0?['“다른 이용 가능한 장소부터 확인해서 안내하겠습니다.”','“네. 점검 뒤에 개방을 다시 결정하고 대체 장소도 함께 찾겠습니다.”','“네. 확인이 끝날 때까지 방은 열지 않겠습니다.”'][c.room]:[c.seniorOpen?'“점검 결과를 확인한 뒤 쉼터 일정을 다시 안내하겠습니다.”':'“오늘 이용할 수 있는 대체 장소를 확인해서 안내하겠습니다.”','“연락을 도와주시면 저는 대체 장소를 확인하겠습니다.”','“전문가가 벽을 확인하기 전까지는 방 전체를 쓰지 않겠습니다.”'][c.room],
 gardenClue:c.levels.D===2?'정식 급식대의 배수는 괜찮았지만 옆 공용 배수구는 늦게 말랐다고 정희가 말했다.':'정희는 임시 급식 위치와 화단 사이에 물이 고였던 자리를 가리켰다.',
 loadingIntro:['“방문 시간이 정해지면 차주들에게 먼저 연락해야겠습니다. 지금 폭으로는 하역 장소를 확정하면 안 되겠네요.”','“시간제로 쓰는 곳이니 업체 방문과 배송 시간이 겹치지 않게 맞춰야겠습니다.”','“내릴 자리는 정해져 있습니다. 장비가 이 모퉁이를 돌아갈 수 있는지 확인하면 되겠네요.”'][l],
 cartCheck:['“수레는 있는데 앞에 짐이 있습니다. 누구 건지 확인해서 비워달라고 해야겠어요.”','“수레는 꺼낼 수 있습니다. 다른 분이 쓰고 있을 수도 있으니 방문 시간에 맞춰 확인해야겠네요.”','“수레는 제자리에 있습니다. 업체가 쓸 수 있는 크기인지만 확인하면 되겠어요.”'][l],
 cartReply:['“소유자 확인과 정리 요청은 제가 맡겠습니다. 업체 운반 도구도 확인해볼게요.”','“방문 시간이 정해지면 수레 사용 가능 여부를 확인하겠습니다.”','“방금 잰 동선과 함께 수레 크기도 물어보겠습니다.”'][l],
 loadingReport:['“차주 연락과 적치물 정리가 남아 있습니다. 방문 전에 하역 위치를 다시 맞추겠습니다.”','“임시 하역 시간을 업체 방문에 맞춰 조정하면 됩니다.”','“정식 하역 구역을 쓰고 수레 사용 시간만 맞추면 됩니다.”'][l],
 day18Report:['“추가 검사 항목과 남은 확인 사항이 나뉘어 왔습니다. 어떤 일을 맡기는지 비교할 수 있겠습니다.”','“주민들에게 받은 관찰 기록도 업체에 전달했습니다. 기본 점검 결과에 대조할 자료로 붙여두었습니다.”','“추가 방문과 임시 배수 작업은 끝났습니다. 당장 고인 물은 줄었지만 큰비를 버틸 수 있다고 하지는 않았습니다.”'][answers[17]??0]
 };
 if(raw.dynamic)out.text=dynamic[raw.dynamic];
 if(raw.dynamic==='roomUse'){const name=['한명숙','윤정희','정서연'][c.room];out.speaker=name;out.npc=name;out.role=c.room===1?'급식소 관리 주민':'단지 주민';out.who='npc'}
 if(b===0){out.text=out.text.replace('어제는 누구에게 열어둘지 정했는데, 오늘은 문을 닫아야 하는군요.','어제는 누구에게 열어둘지 정했는데, 개방부터 미뤄야겠군요.').replace('저는 연락이 닿지 않는 분이 있는지 볼게요. 방이 닫혔다는 말만 듣고 찾아오는 분도 계실 테니까요.','개방 준비하던 분들께 제가 알릴게요. 문을 연 줄 알고 찾아오는 분이 없도록요.').replaceAll('사용 중지','개방 연기')}
 if(view==='epilogue'&&act3.plan.every(id=>id==='residents'))out.text=out.text.replace('업체 방문 시간','비상 연락처와 대체 장소 담당자').replace('업체에 연결하는','대체 장소 담당자에게 연결하는');
 return out;
};
function renderAct3Cutin(cutin,key){
 const art=document.createElement('div');art.className=`act3-cutin ${key}`;
 if(key==='act3-room-notice'){
  const unopened=act3.context.levels.B===0;
  art.innerHTML=`<div class="notice-tape"></div><div class="notice-paper"><small>라이프아파트 관리사무소</small><strong>공용실<br>${unopened?'개방 연기':'사용 중지'}</strong><p>${unopened?'안전 확인 전까지 예정된 개방을 미룹니다.':'안전 확인 전까지 공용실 이용을 중지합니다.'}</p><span>점검 후 다시 안내하겠습니다</span></div>`;
 }else if(key==='act3-scan-screen'){
  art.innerHTML='<div class="scan-monitor"><div class="scan-toolbar"><span>서연의 스캔 화면</span><span>확대 보기</span></div><div class="scan-picture" role="img" aria-label="스캔한 옛 단지 단체사진"></div><div class="scan-caption">끝에 선 태식까지 화면에 들어왔다</div></div>';
 }else{
  const confirmed=key==='act3-plan-confirmed';
  art.classList.toggle('confirmed',confirmed);
  art.innerHTML=`<div class="plan-sheet"><div class="plan-title">공용실·지하 위치도 <small>현장 확인용 개략도</small></div><svg viewBox="0 0 300 142" aria-hidden="true"><rect class="plan-room" x="20" y="18" width="111" height="47" rx="4"/><rect class="plan-room" x="172" y="81" width="108" height="43" rx="4"/><path class="plan-route" d="M75 66 L75 100 L171 100"/><circle class="plan-dot" cx="75" cy="66" r="5"/><circle class="plan-dot" cx="171" cy="100" r="5"/><text x="75" y="40" text-anchor="middle">공용실 벽</text><text x="75" y="56" text-anchor="middle">물자국</text><text x="226" y="98" text-anchor="middle">지하 점검구</text><text x="226" y="114" text-anchor="middle">· 펌프실</text><text x="55" y="133" text-anchor="middle">화단 배수구</text></svg><div class="plan-caption">${confirmed?'점검 기사 확인 · 같은 배수 구간':'두 위치 비교 · 연결 여부 확인 전'}</div></div>`;
 }
 cutin.append(art);
}
const oldActiveEpilogue=activeEpilogue;activeEpilogue=()=>managementAct===3?window.ACT3_ENDING:oldActiveEpilogue();
const oldRenderEpilogue=renderEpilogue;renderEpilogue=()=>{oldRenderEpilogue();if(managementAct===3)chapter.textContent='3막 · 첫 빗방울'};
const oldShowEnding=showEnding;showEnding=(target=2)=>{
 if(dayIndex>=15){hide();view='ending';endingMode=4;stage.className='stage garden-rain';doyun.classList.add('hidden');npc.classList.add('hidden');ending.classList.remove('hidden','act3-teaser');chapter.textContent='3막 · 끝';$('ending-kicker').textContent='ACT 3 · COMPLETE';$('ending-title').textContent='벽 안의 물소리';$('ending-copy').textContent='준비 계획을 정했습니다. 다음은 4막 「가장 긴 비」입니다. 현재는 20일차까지 진행됩니다.';$('ending-restart').textContent='3막 완료';$('ending-restart').disabled=true;setProgress(100);prev.disabled=true;return}
 oldShowEnding(target);if(target===3){$('ending-restart').textContent='3막 시작하기';$('ending-restart').disabled=false}
};
const oldSavedView=showSavedView;showSavedView=()=>{
 if(view==='act3-plan')return showAct3Plan();if(view==='act3-result')return showAct3Result();if(view==='act3-recap')return showAct3Recap();oldSavedView();
};
function panel(title,kicker){hide();campaignPanel.replaceChildren();campaignPanel.classList.remove('hidden');stage.className='stage office';doyun.classList.add('hidden');npc.classList.add('hidden');prev.disabled=true;historyOpen.disabled=!log.length;const small=document.createElement('small'),h=document.createElement('h1');small.textContent=kicker;h.textContent=title;campaignPanel.append(small,h);return campaignPanel}
function para(parent,text,tag='p',className=''){const el=document.createElement(tag);el.textContent=text;el.className=className;parent.append(el);return el}
function button(parent,text,fn){const el=document.createElement('button');el.type='button';el.className='button';el.textContent=text;el.addEventListener('click',fn);parent.append(el);return el}
function startAct3(context,options={}){
 const nextContext=validContext(context||{levels:Object.fromEntries(Object.keys(facilityKeys).map(id=>[id,oldLevel(id)])),carryover:act2Budget().available,room:answers[14]??0,seniorOpen:answers[7]===2});
 if(context!==undefined&&options.preserveHistory!==true){answers={};assignments={};act2Assignments={};log=[]}
 campaignMenuOpen=false;runStarted=true;act4=emptyAct4();
 act3={context:nextContext,plan:[],confirmed:false};
 for(const key of Object.keys(answers))if(Number(key)>=15)delete answers[key];
 dayIndex=15;managementAct=3;sceneIndex=postIndex=afterIndex=epiIndex=0;saveAllowed=true;showDayBreak();saveProgress();
}
function showAct3Plan(message=''){
 view='act3-plan';managementAct=3;setActHeader();const p=panel('큰비를 앞두고 무엇을 준비할까?','20일차 · 관리 계획');chapter.textContent='3막 관리 계획';
 para(p,`가용 ${300+act3.context.carryover-spent3()-sum3('cost')}만 원 · 남은 업무 ${2-sum3('slots')}칸`,'h2','plan-budget');
 para(p,`신규 300 + 이월 ${act3.context.carryover} − 사건 ${spent3()} − 선택 사업 ${sum3('cost')}만 원`,'p','muted');
 para(p,'기본 안전조치는 공통입니다. 오늘은 준비를 확정하고, 21일차에 작업 완료를 확인합니다.');
 const warning=para(p,message,'p','notice');warning.setAttribute('role','status');
 for(const project of act3Projects){const chosen=act3.plan.includes(project.id),maxed=facilityKeys[project.id]&&facilityLevel(project.id)>=2,blocked=project.id==='B'||maxed;
  const card=document.createElement('button');card.type='button';card.className='project3'+(chosen?' selected':'');card.setAttribute('aria-pressed',String(chosen));card.disabled=blocked;
  para(card,project.name,'strong');para(card,`${project.cost}만 원 · 업무 ${project.slots}칸`,'span','cost');
  para(card,project.id==='B'?'안전 확인 전 선택 보류':maxed?'2단계 · 정비 완료':facilityKeys[project.id]?`${facilityLevel(project.id)}→${facilityLevel(project.id)+1}단계 예정 · ${upgradeEffects[project.id][facilityLevel(project.id)]}`:project.effect,'span');
  para(card,project.limit,'small');p.append(card);
  card.addEventListener('click',()=>{const next=chosen?act3.plan.filter(id=>id!==project.id):[...act3.plan,project.id];const problem=planProblem(next);if(problem){warning.textContent=problem;warning.scrollIntoView({block:'nearest'});return}act3.plan=next;showAct3Plan();saveProgress()});
 }
 const actions=document.createElement('div');actions.className='plan3-actions';p.append(actions);button(actions,'이 계획으로 준비한다',()=>{const problem=planProblem(act3.plan);if(!act3.plan.length||problem){warning.textContent=problem||'한 가지 이상 선택해주세요.';warning.scrollIntoView({block:'nearest'});return}act3.confirmed=true;log.push({key:'act3-plan',label:'20일차 · 관리 계획',text:act3.plan.map(id=>project3(id).name).join(' / '),choice:true});showAct3Result();saveProgress()}).classList.add('primary');
}
function showAct3Result(){view='act3-result';const p=panel('준비 계획을 확정했다','20일차 · 계약·준비 단계');chapter.textContent='계획 확정';
 for(const id of act3.plan){const project=project3(id);para(p,project.name,'h2');para(p,project.response);para(p,`${project.cost}만 원 배정 · 21일차 완료 확인 예정`,'p','muted')}
 para(p,`남은 가용 예산 ${budget3().available}만 원`,'h2');para(p,'공용실 사용 제한은 유지됩니다. 시설 단계는 아직 오르지 않았습니다.');button(p,'3막을 돌아본다',showAct3Recap).classList.add('primary');}
function showAct3Recap(){view='act3-recap';const p=panel('벽과 지하, 그리고 사람들','3막 전체 회상');chapter.textContent='3막 회상';const counts=styleCounts(3);para(p,`원칙 고수 ${counts.principle} · 관계 중시 ${counts.relation} · 실행 우선 ${counts.action}`,'h2');para(p,'16·18일차의 두 판단만 집계했습니다. 관리 계획은 포함하지 않습니다.','p','muted');
 para(p,'벽과 펌프는 같은 지하 배수 문제의 두 증상이었다. 사진 속 기억을 함께 보고, 줄자의 양끝을 나눠 잡았다. 큰비를 앞두고 각자 맡을 준비가 정해졌다.');para(p,`4막으로 남기는 예산 · ${budget3().available}만 원`,'h2');button(p,'첫 빗방울',()=>{epiIndex=0;managementAct=3;renderEpilogue()}).classList.add('primary');}
// Whole-campaign extension. Published Acts 1–3 keep their original state and rules.
const lateActsReady=()=>window.ACT4_DAYS?.length===3&&window.ACT5_DAYS?.length===1;
const lateConfig=()=>window.LATE_ACT_CONFIG;
const emptyAct4=()=>({started:false,sourceBudget:0,completedProjects:[],levels:null,emergencyChoice:null,emergencyCost:0,emergencyConfirmed:false,services:null});
let act4=emptyAct4();
const emergencyOption=id=>lateConfig()?.emergencyOptions.find(option=>option.id===id);
const expectedLateLevels=()=>Object.fromEntries(Object.keys(facilityKeys).map(id=>[id,Math.min(2,act3.context.levels[id]+(act3.plan.includes(id)?1:0))]));
const lateBalance=()=>act4.sourceBudget-(act4.emergencyConfirmed?act4.emergencyCost:0);
const priorCounts=styleCounts;styleCounts=(act=managementAct)=>{
 if(act!==4&&act!==5)return priorCounts(act);
 const counts={principle:0,relation:0,action:0};
 // Act4 direct-focus choices and spending are outcome history, not management-style points.
 return counts;
};
function totalStyleCounts(){const total={principle:0,relation:0,action:0};for(const act of [1,2,3])for(const [key,value]of Object.entries(styleCounts(act)))total[key]+=value;return total}
function branchState(){
 const completed=act4.started?act4.completedProjects:[];
 const pumpCoverage=completed.includes('rental')||completed.includes('replace'),drainCoverage=completed.includes('drain');
 const coverage=pumpCoverage&&drainCoverage?'both':pumpCoverage||drainCoverage?'one':'neither';
 const counts=totalStyleCounts(),highest=Math.max(...Object.values(counts));
 const known=i=>Number.isInteger(answers[i])&&Boolean(days[i]?.choices?.[answers[i]]);
 const firstThreeChoiceDays=[0,1,2,4,6,7,8,11,12,14,15,17],styleHistoryKnown=firstThreeChoiceDays.every(known);
 const act2Experienced=[7,8,11,12,14].every(known),loggedDay=i=>log.some(item=>typeof item.key==='string'&&item.key.startsWith(`main-${i}-`));
 const history={fullCampaign:styleHistoryKnown,act4Experienced:[20,21,22].every(known),day9Experienced:known(8),day14Experienced:act2Experienced||loggedDay(13),day16Experienced:known(15),day19Experienced:loggedDay(18),day22Experienced:known(21),sharedPlantCare:styleHistoryKnown||loggedDay(5)};
 return {pumpCoverage,drainCoverage,residentSupport:completed.includes('residents'),
  pumpMode:completed.includes('replace')?'replacement':completed.includes('rental')?'rental':'original',
  damage:lateConfig()?.damageByCoverage[coverage]||'broad',facilities:act4.levels||act3.context?.levels||{},
  roomUse:act3.context?.room??0,seniorOpen:act3.context?.seniorOpen??false,availableBudget:lateBalance(),
  completedProjects:[...completed],completedProjectNames:completed.map(id=>project3(id)?.name||id),
  emergencyChoice:act4.emergencyChoice,emergencyLabel:emergencyOption(act4.emergencyChoice)?.label||'아직 정하지 않음',emergencyCost:act4.emergencyConfirmed?act4.emergencyCost:0,
  inspectionSupport:act4.emergencyChoice==='inspection',venueSupport:act4.emergencyChoice==='venue',contactSupport:act4.emergencyChoice==='contact',
  day21Focus:days[20]?.choices?.[answers[20]]?.id||null,day22Focus:days[21]?.choices?.[answers[21]]?.id||null,day23Focus:days[22]?.choices?.[answers[22]]?.id||null,
  history,styleHistoryKnown,performanceConfirmed:false,styleCounts:counts,styleLeaders:highest?Object.keys(counts).filter(key=>counts[key]===highest):[]};
}
const priorFacilityLevel=facilityLevel;facilityLevel=id=>dayIndex>=20&&act4.started?act4.levels[id]:priorFacilityLevel(id);
const priorStoryState=storyState;storyState=()=>{
 const state=priorStoryState();if(dayIndex<20)return state;
 return {...state,currentAct:dayIndex<23?4:5,act4,branchState:branchState(),facilityLevels:facilityLevels(),
  actStyleCounts:{...state.actStyleCounts,act4:styleCounts(4)},carryoverBudget:lateBalance(),
  act4Budget:{opening:act4.sourceBudget,emergencySpent:act4.emergencyConfirmed?act4.emergencyCost:0,available:lateBalance()},
  pendingProjects:[],completedProjects:[...act4.completedProjects],
  dayResults:{...state.dayResults,day20:{...state.dayResults.day20,workCompleted:act4.started},day21:{workCompleted:act4.started,focus:branchState().day21Focus},day22:{focus:branchState().day22Focus,emergencyChoice:act4.emergencyChoice},day23:{focus:branchState().day23Focus,damage:branchState().damage}}};
};
const priorSnapshot=progressSnapshot;progressSnapshot=()=>({...priorSnapshot(),...(dayIndex>=20?{version:lateConfig()?.version||'late-acts-review-1',act4}:{})});
const priorLoad=loadProgress;loadProgress=()=>{
 if(!priorLoad())return false;
 try{
  if(dayIndex>=20){
   if(!lateActsReady()||!act3.confirmed)throw Error('4막 시작에 필요한 3막 완료 기록이 없습니다.');
   const saved=JSON.parse(readStored(STORAGE_KEY)),raw=saved.act4||saved.storyState?.act4;
   if(!raw?.started)throw Error('4막 작업 완료 기록이 없습니다.');
   const option=raw.emergencyChoice===null?null:emergencyOption(raw.emergencyChoice);
   if(raw.emergencyChoice!==null&&!option)throw Error('긴급 배치 기록을 확인해주세요.');
   act4={...emptyAct4(),started:true,sourceBudget:budget3().available,completedProjects:[...act3.plan],levels:expectedLateLevels(),emergencyChoice:option?.id||null,emergencyConfirmed:raw.emergencyConfirmed===true,emergencyCost:raw.emergencyConfirmed===true?(option?.cost??NaN):0,services:raw.services&&typeof raw.services==='object'?raw.services:null};
   if(!Number.isFinite(act4.sourceBudget)||!Number.isFinite(act4.emergencyCost)||lateBalance()<0||act4.emergencyConfirmed&&!option)throw Error('긴급 배치 예산 기록을 확인해주세요.');
   if(act4.emergencyConfirmed&&option?.id!=='hold'&&serviceProblem(option.id))throw Error('긴급 배치의 추가 제공 범위 확인이 필요합니다.');
   if(dayIndex>=22&&!act4.emergencyConfirmed)throw Error('23일차 이전 긴급 배치 확인 기록이 필요합니다.');
   for(const i of [20,21,22])if(answers[i]!==undefined&&![0,1,2].includes(answers[i]))throw Error('4막 선택 기록이 올바르지 않습니다.');
  }
  return true;
 }catch(e){saveAllowed=false;window.saveLoadError=e.message;return false}
};
const priorHeader=setActHeader;setActHeader=()=>{if(dayIndex<20)return priorHeader();const act=dayIndex<23?4:5;$('act-name').textContent=act===4?'4막 · 가장 긴 비':'5막 · 비가 그친 뒤';progressbar.setAttribute('aria-label',`${act}막 진행률`)};
const priorProgress=actProgress;actProgress=(fraction=0)=>dayIndex>=23?6+Math.round(fraction*78):dayIndex>=20?6+Math.round((dayIndex-20+fraction)/3*78):priorProgress(fraction);
const priorResolve=resolve;resolve=raw=>{
 const dynamic=raw?.dynamic,late=typeof dynamic==='string'&&/^(act4|act5):/.test(dynamic);
 const out=priorResolve(late?{...raw,dynamic:undefined}:raw);
 if(late){const map=dynamic.startsWith('act4:')?window.ACT4_DYNAMIC:window.ACT5_DYNAMIC;const render=map?.[dynamic]||map?.[dynamic.split(':')[1]];
  if(typeof render!=='function')throw Error(`후반부 장면 분기가 없습니다: ${dynamic}`);
  const patch=render(storyState());if(!patch||typeof patch.text!=='string')throw Error(`후반부 장면 문장이 없습니다: ${dynamic}`);
  return {...out,...patch};
 }
 return out;
};
function startAct4(){
 if(!lateActsReady()||!act3.confirmed)return;
 if(!act4.started)act4={...emptyAct4(),started:true,sourceBudget:budget3().available,completedProjects:[...act3.plan],levels:expectedLateLevels()};
 dayIndex=20;managementAct=4;sceneIndex=postIndex=afterIndex=epiIndex=0;campaignMenuOpen=false;showDayBreak();saveProgress();
}
function startAct5(){dayIndex=23;managementAct=5;sceneIndex=postIndex=afterIndex=epiIndex=0;showDayBreak();saveProgress()}
const priorNextDay=nextDay;nextDay=()=>{
 if(dayIndex===21){showEmergencyPlan();return}
 if(dayIndex===22){showEnding(5);return}
 if(dayIndex===23){showEnding(6);return}
 priorNextDay();
};
function serviceProblem(id){
 if(id==='hold')return '';
 const service=act4.services?.[id];
 if(service?.alreadyCovered===true)return '확보됨 · 기존 범위와 중복';
 if(service?.needed===false)return '추가 필요 없음';
 if(service?.needed!==true||service?.available!==true)return '제공 확인 전';
 if(service?.nonOverlapping!==true)return '기존 범위와 중복 여부 확인 전';
 return '';
}
function showEmergencyPlan(message=''){
 if(!act4.services)act4.services=JSON.parse(JSON.stringify(lateConfig().confirmedReviewServices));
 view='act4-emergency';managementAct=4;const p=panel('밤을 앞두고 무엇을 더 맡길까?','22일차 · 긴급 배치');setActHeader();chapter.textContent='4막 긴급 배치';stage.className='stage office act4-weather weather-dusk rain-light';
 para(p,`남은 예산 ${act4.sourceBudget}만 원`,'h2');para(p,'도윤이 직접 맡을 일과 유료 추가 지원은 별개입니다. 기본 안전조치와 연락은 모든 선택에서 계속됩니다.');
 const warning=para(p,message,'p','notice');warning.setAttribute('role','status');
 for(const option of lateConfig().emergencyOptions){const card=document.createElement('button');card.type='button';card.className='project3'+(act4.emergencyChoice===option.id?' selected':'');card.setAttribute('aria-pressed',String(act4.emergencyChoice===option.id));const unavailable=serviceProblem(option.id);card.disabled=option.cost>act4.sourceBudget||Boolean(unavailable);
  para(card,option.label,'strong');para(card,`${option.cost}만 원${unavailable?' · '+unavailable:option.cost>act4.sourceBudget?' · 예산 부족':''}`,'span','cost');para(card,option.description,'span');if(act4.services?.[option.id]?.scope)para(card,'확인한 추가 범위: '+act4.services[option.id].scope,'small');
  card.addEventListener('click',()=>{act4.emergencyChoice=option.id;showEmergencyPlan();saveProgress()});p.append(card);
 }
 button(p,'긴급 배치를 확정하고 23일차로',()=>{
  const option=emergencyOption(act4.emergencyChoice);if(!option){warning.textContent='추가 지원 또는 기본 대응 유지를 선택해주세요.';return}
  if(option.cost>act4.sourceBudget){warning.textContent='남은 예산 안에서 선택해주세요.';return}
  const problem=serviceProblem(option.id);if(problem){warning.textContent=problem;return}
  act4.emergencyConfirmed=true;act4.emergencyCost=option.cost;
  log=log.filter(item=>item.key!=='act4-emergency');log.push({key:'act4-emergency',label:'22일차 · 긴급 배치',text:`${option.label} · ${option.cost}만 원`,choice:true});
  dayIndex=22;sceneIndex=postIndex=afterIndex=0;showDayBreak();saveProgress();
 }).classList.add('primary');
}
function showFinalDiary(){
 view='final-diary';managementAct=5;const p=panel('오늘도, 관리사무소','5막 · 도윤의 기록');setActHeader();chapter.textContent='마지막 기록';
 const b=branchState(),styleNames={principle:'원칙 고수',relation:'관계 중시',action:'실행 우선'};
 const diary=window.ACT5_DIARY?.(storyState());
 if(diary?.title)para(p,diary.title,'h2');
 for(const text of diary?.paragraphs||['비가 그친 뒤, 완료한 일과 앞으로 확인할 일을 나누어 적었다.'])para(p,text);
 para(p,'지나온 판단','h2');para(p,Object.entries(b.styleCounts).map(([key,n])=>`${styleNames[key]} ${n}`).join(' · '));
 para(p,!b.styleHistoryKnown?'이전 막의 선택 기록이 모두 있지는 않아, 전체 관리 성향을 단정하지 않았다.':b.styleLeaders.length>1?`한 방향으로만 기울지 않았다. ${b.styleLeaders.map(key=>styleNames[key]).join('·')} 사이에서 상황마다 먼저 지킬 것을 골랐다.`:b.styleLeaders.length?`${styleNames[b.styleLeaders[0]]}에 조금 더 무게를 두었다.`:'어떤 선택을 이어왔는지, 기록을 천천히 다시 읽는다.');
 para(p,'마친 준비와 남은 일','h2');para(p,b.completedProjectNames.join(' · ')||'기본 안전조치와 점검을 이어갔다.');
 para(p,`비가 남긴 흔적: ${lateConfig().damageLabels[b.damage]}. 공용실은 전문 점검과 안전 확인 전까지 사용 제한을 유지한다.`);
 para(p,`긴급 배치: ${b.emergencyLabel} · ${b.emergencyCost}만 원`);para(p,`남은 예산: ${b.availableBudget}만 원`);
 button(p,'마지막 장면',()=>showEnding(6)).classList.add('primary');setProgress(96);saveProgress();
}
const diaryReviewButton=document.createElement('button');diaryReviewButton.type='button';diaryReviewButton.className='button hidden';diaryReviewButton.textContent='관리 기록 다시 보기';diaryReviewButton.addEventListener('click',showFinalDiary);ending.querySelector('.actions').append(diaryReviewButton);
const priorShowEnding=showEnding;showEnding=(target=2)=>{
 diaryReviewButton.classList.toggle('hidden',dayIndex<23);$('finale-group-photo').classList.toggle('hidden',dayIndex<23);
 if(dayIndex>=23){hide();view='ending';endingMode=6;stage.className='stage office';doyun.classList.add('hidden');npc.classList.add('hidden');ending.classList.remove('hidden','act3-teaser');chapter.textContent='이야기 · 끝';$('ending-kicker').textContent='ACT 5 · COMPLETE';$('ending-title').textContent='오늘도 관리사무소';$('ending-copy').textContent='비가 그친 창가에 작은 새잎이 났다. 내일도 누군가는 이 문을 두드릴 것이다.';$('ending-restart').textContent='시작 화면으로';$('ending-restart').disabled=false;setProgress(100);prev.disabled=true;saveProgress();return}
 if(dayIndex===22&&target===5){hide();view='ending';endingMode=5;stage.className='stage exterior act4-weather weather-night rain-heavy';doyun.classList.add('hidden');npc.classList.add('hidden');ending.classList.remove('hidden','act3-teaser');chapter.textContent='4막 · 끝';$('ending-kicker').textContent='ACT 5';$('ending-title').textContent='비가 그친 뒤';$('ending-copy').textContent='가장 긴 밤이 지나고, 24일차 아침이 밝아온다.';$('ending-restart').textContent='5막 시작하기';$('ending-restart').disabled=false;setProgress(100);prev.disabled=true;return}
 priorShowEnding(target);
 if(dayIndex===19&&lateActsReady()){stage.className='stage office early-rain';$('ending-copy').textContent='준비 계획을 정했습니다. 21일차에 작업 완료를 확인하고, 가장 긴 비를 맞습니다.';$('ending-restart').textContent='4막 시작하기';$('ending-restart').disabled=false}
};
const priorSavedView=showSavedView;showSavedView=()=>{
 if(view==='act4-emergency')return showEmergencyPlan();
 if(view==='final-diary')return showFinalDiary();
 if(view==='ending'&&dayIndex===22)return showEnding(5);
 priorSavedView();
};

function validateCampaignSave(saved){return window.validateCampaignSaveData(saved,{days,projects,act3Projects,facilityKeys,act3Ending:window.ACT3_ENDING,config:lateConfig()})}
const uncheckedLoad=loadProgress;loadProgress=()=>{
 try{const raw=readStored(STORAGE_KEY);if(!raw)return false;validateCampaignSave(JSON.parse(raw));const ok=uncheckedLoad();if(ok)runStarted=true;return ok}
 catch(error){saveAllowed=false;window.saveLoadError=error.message;return false}
};
function exportCampaignSave(){
 const blob=new Blob([JSON.stringify(progressSnapshot(),null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');
 a.href=url;a.download='오늘도_관리사무소_진행저장_v1.6.0-rc1.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function importCampaignSave(saved){
 validateCampaignSave(saved);
 if(!storageReadable)throw Error('브라우저 저장을 읽을 수 없어 안전하게 교체할 수 없습니다. 저장 접근을 허용한 뒤 다시 가져와주세요.');
 if(!confirmReplaceProgress('선택한 진행 저장을 가져오기'))return false;
 const previousRaw=readStored(STORAGE_KEY),previousSnapshot=progressSnapshot(),previousAllowed=saveAllowed,previousStarted=runStarted;
 try{
  writeStored(STORAGE_KEY,JSON.stringify(saved));act4=emptyAct4();saveAllowed=true;
  if(!loadProgress())throw Error(window.saveLoadError||'진행 저장을 읽지 못했습니다.');
  delete window.saveLoadError;campaignMenuOpen=false;showSavedView();saveProgress();return true;
 }catch(error){
  try{writeStored(STORAGE_KEY,JSON.stringify(previousSnapshot));act4=emptyAct4();uncheckedLoad();if(previousRaw===null)localStorage.removeItem(STORAGE_KEY);else writeStored(STORAGE_KEY,previousRaw)}catch(restoreError){console.warn('이전 저장 복원 확인 필요',restoreError)}
  saveAllowed=previousAllowed;runStarted=previousStarted;showCampaignHome();throw error;
 }
}
let campaignImportGeneration=0;
async function importCampaignFile(file){
 const request=++campaignImportGeneration;
 if(!file)return false;
 if(file.size>5*1024*1024)throw Error('진행 저장 파일은 5MB 이하여야 합니다.');
 let text;try{text=await file.text()}catch(error){if(request!==campaignImportGeneration)return false;throw Error('파일을 읽지 못했습니다. 기존 진행은 변경하지 않았습니다.')}
 if(request!==campaignImportGeneration)return false;
 let saved;try{saved=JSON.parse(text)}catch(error){throw Error('JSON 진행 저장 파일이 아닙니다. 기존 진행은 변경하지 않았습니다.')}
 return importCampaignSave(saved);
}

function confirmReplaceProgress(action){
 const raw=readStored(STORAGE_KEY)||(runStarted?JSON.stringify(progressSnapshot()):null);
 if(!raw)return true;
 if(!window.confirm(`${action}하면 현재 진행 저장을 바꿉니다. 계속할까요?`))return false;
 try{writeStored(RUN_BACKUP_KEY,raw)}catch(e){console.warn('이전 진행 백업 실패',e);return false}
 return true;
}
function startCampaign(){
 campaignImportGeneration++;
 if(!confirmReplaceProgress('1막부터 새로 시작'))return;
 dayIndex=sceneIndex=postIndex=afterIndex=resultIntroIndex=epiIndex=selected=0;
 answers={};assignments={};act2Assignments={};log=[];managementAct=1;endingMode=2;
 act3={context:null,plan:[],confirmed:false};act4=emptyAct4();runStarted=true;view='cover';saveAllowed=true;campaignMenuOpen=false;
 delete window.saveLoadError;
 showSavedView();saveProgress();
}
function showCampaignHome(){
 campaignImportGeneration++;
 const p=panel('오늘도 관리사무소','라이프아파트 · 이야기 시작');campaignMenuOpen=true;
 chapter.textContent='시작 화면';$('act-name').textContent=lateActsReady()?'1~5막 · 24일간의 이야기':'1~3막 · 20일간의 이야기';
 para(p,lateActsReady()?'처음 만난 주민들, 가장 긴 비, 그리고 비가 그친 아침. 도윤의 시간을 이어갑니다.':'처음 만난 주민들부터 벽 안의 물소리까지, 도윤의 시간을 이어갑니다.');
 if(saveAllowed&&(readStored(STORAGE_KEY)||runStarted)){
  const act=dayIndex<7?1:dayIndex<15?2:dayIndex<20?3:dayIndex<23?4:5;
  button(p,`이어하기 · ${act}막 ${dayIndex+1}일차`,()=>{campaignMenuOpen=false;showSavedView()}).classList.add('primary');
 }
 if(window.saveLoadError)para(p,'기존 저장은 보존했습니다. '+window.saveLoadError,'p','notice');
 if(storageIssue)para(p,storageIssue,'p','notice');
 button(p,'1막부터 새로 시작',startCampaign).classList.add('primary');
 if(runStarted)button(p,'현재 진행 저장 파일 내보내기',exportCampaignSave);
 para(p,'진행 저장 파일 가져오기','h2');para(p,'이 게시용 버전에서 직접 저장한 진행 파일을 불러옵니다. 현재 진행을 바꾸기 전 확인합니다.','p','muted');
 const file=document.createElement('input');file.type='file';file.accept='.json,application/json';file.setAttribute('aria-label','캠페인 진행 저장 파일 선택');p.append(file);
 const fileError=para(p,'','p','notice');fileError.setAttribute('role','alert');
 file.addEventListener('change',async()=>{try{await importCampaignFile(file.files?.[0])}catch(error){fileError.textContent=error.message}finally{file.value=''}});
 para(p,'진행은 이 브라우저에 자동 저장됩니다. 기기를 옮기거나 브라우저 데이터를 지우기 전 저장 파일을 내보내세요.','p','muted');
}
$('home-open').textContent='시작 화면';
$('home-open').addEventListener('click',showCampaignHome);
// Campaign panels and dialogue support keyboard navigation.
bubble.tabIndex=0;bubble.setAttribute('role','button');bubble.setAttribute('aria-label','다음 대사');bubble.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();advance();saveProgress()}});

$('start').addEventListener('click',renderMain);$('day-break-open').addEventListener('click',renderMain);audioToggle.addEventListener('click',toggleAudio);document.addEventListener('click',startAudio,{once:true});bubble.addEventListener('click',advance);stage.addEventListener('click',event=>{if(['main','post','after','result-intro','epilogue'].includes(view)&&!event.target.closest('button,.bubble,.history,.campaign-panel'))advance()});$('next-day').addEventListener('click',nextDay);prev.addEventListener('click',goBack);historyOpen.addEventListener('click',openHistory);$('history-close').addEventListener('click',()=>history.classList.add('hidden'));document.querySelectorAll('[data-spot]').forEach(spot=>spot.addEventListener('click',()=>toggleProject(spot.dataset.spot)));$('confirm-plan').addEventListener('click',confirmPlan);planResult.addEventListener('click',showActReview);$('epilogue-open').addEventListener('click',()=>{epiIndex=0;renderEpilogue()});$('ending-restart').addEventListener('click',()=>{if(endingMode===2)startAct2();else if(endingMode===3)startAct3();else if(endingMode===4)startAct4();else if(endingMode===5)startAct5();else if(endingMode===6)showCampaignHome()});syncAudio();
window.applyEarlyActVisuals?.({days:days.slice(0,20),epilogue,ending:window.ACT3_ENDING});
const earlyVisualResolve=resolve;resolve=raw=>{const scene=earlyVisualResolve(raw);return window.reviewEarlyResolvedExpression?window.reviewEarlyResolvedExpression(scene,dayIndex):scene};
document.addEventListener('click',()=>queueMicrotask(saveProgress));window.addEventListener('pagehide',saveProgress);const resumed=loadProgress();showCampaignHome();
console.assert([20,24].includes(days.length),'1~3막은 20일, 전체 이야기는 24일이어야 합니다.');console.assert(days.slice(0,7).filter(day=>day.choices).length===5,'1막 선택 사건은 다섯 개여야 합니다.');console.assert(days.slice(7,15).filter(day=>day.choices).length===5,'2막 선택 사건은 다섯 개여야 합니다.');console.assert(days.slice(7,15).filter(day=>!day.choices).length===3,'2막 자동 사건은 세 개여야 합니다.');console.assert(days.every(day=>!day.choices||day.choices.length===3),'선택 사건마다 선택지 세 개가 필요합니다.');console.assert(facilityImages&&Object.keys(facilityImages).length===5,'다섯 공간의 단계별 이미지가 필요합니다.');console.assert(incidentSpent()>=0&&incidentSpent()<=150,'2막 사건 비용은 0~150만 원이어야 합니다.');
})();
