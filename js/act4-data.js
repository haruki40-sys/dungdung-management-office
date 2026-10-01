/* Local review narrative only. Acts 1–3 and all budgets/outcome rules live elsewhere.
 * Fixed scene arrays preserve save indices. Conditional maps return display overrides only. */
window.ACT4_DAYS = [
  {
    "day": "21일차",
    "title": "비가 강해지기 전에",
    "type": "준비 확인",
    "place": "office",
    "scenes": [
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "태식은 관리사무소 책상 위에 도면을 펴놓고 다음 근무자에게 표시한 곳을 짚어주고 있었다. 도윤이 들어서자 업체 연락처가 적힌 메모를 건넸다.",
        "place": "office",
        "dynamic": "act4:day21Opening"
      },
      {
        "speaker": "강태식",
        "role": "경비반장",
        "who": "npc",
        "npc": "강태식",
        "text": "“출입구와 통제 구역은 같이 돌아봤습니다. 업체에서 연락이 오면 이 번호로 받으시면 됩니다.”",
        "place": "office",
        "dynamic": "act4:day21Handoff"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“네. 작업 끝난 뒤 확인할 내용도 여기 있군요.”",
        "place": "office"
      },
      {
        "speaker": "강태식",
        "role": "경비반장",
        "who": "npc",
        "npc": "강태식",
        "text": "“그저께 성호 씨하고 잰 모퉁이도 표시했습니다. 처음 오는 분은 넓은 쪽으로 돌아가려다 막다른 데로 들어갈 수 있어서요.”",
        "place": "office"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“마무리는 저희가 확인하겠습니다. 빠진 게 있으면 인계 기록에 남겨둘게요.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "태식은 도면을 한 번 더 바라보다 다음 근무자 쪽으로 돌려놓았다.",
        "place": "office"
      },
      {
        "speaker": "강태식",
        "role": "경비반장",
        "who": "npc",
        "npc": "강태식",
        "text": "“그럼 부탁합니다. 수고하십시오.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "태식이 나간 뒤에도 도면은 책상 위에 펼쳐져 있었다. 다음 근무자가 확인할 항목 옆에 시간을 적었다.",
        "place": "office",
        "cutin": "story-handover-plan"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day21CompletionIntro"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day21Work1"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day21Work2"
      },
      {
        "speaker": "박선우",
        "role": "입주자대표",
        "who": "npc",
        "npc": "박선우",
        "text": "“공용실 문 안내는 그대로 두었습니다. 대체 장소로 가셔야 한다는 안내도 같이 붙였고요.”",
        "place": "office",
        "dynamic": "act4:day21RoomNotice"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“네. 오늘 준비가 끝난 것과 그 방을 열 수 있는 건 따로 확인해야 합니다.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "도윤은 준비 현황을 갱신했다. 설치를 마친 장비, 정비된 공간, 연결된 연락처 옆에 확인 시간이 들어갔다. 손대지 못한 부분은 그대로 남겼다.",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "오후가 되자 관리사무소 전화와 주민들의 연락이 이어졌다. 도윤은 세 가지 일을 인계판에 적었다.",
        "place": "office"
      },
      {
        "speaker": "박선우",
        "role": "입주자대표",
        "who": "npc",
        "npc": "박선우",
        "text": "“기본 안내는 나갔습니다. 이제 현장에서 어긋나는 게 없는지 맞춰볼 차례네요.”",
        "place": "office"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“시설 쪽은 근무자와 업체, 주민 연락은 선우 씨, 차량 쪽은 관리사무소에서 이어가겠습니다. 저는 한쪽부터 직접 가보죠.”",
        "place": "office"
      }
    ],
    "choices": [
      {
        "label": "근무자와 업체가 같은 기준으로 연락하도록 현장에서 확인한다",
        "sub": "시설 위치와 보고·통제·지원의 연결을 직접 맞춥니다. 다른 담당자들의 대응도 계속됩니다.",
        "id": "facility",
        "focus": "facility",
        "style": "neutral",
        "post": [
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤은 통제 구역 바깥에서 근무자와 도면을 펼치고 업체 담당자에게 전화했다. 같은 도면을 보고도 서로 부르는 위치 이름이 달랐다.",
            "place": "exterior",
        "cutin": "story-handover-plan"
          },
          {
            "speaker": "업체 담당자",
            "role": "전문 점검 업체",
            "who": "npc",
            "npc": "점검 기사",
            "text": "“저희 작업서의 뒤쪽 출입구가 이곳입니다.”",
            "place": "exterior"
          },
          {
            "speaker": "도윤",
            "role": "관리소장",
            "who": "doyun",
            "npc": "도윤",
            "text": "“관리사무소 기록에서는 다른 문을 그렇게 부릅니다. 사진과 표시를 같이 붙여두죠. 급할 때 문부터 다시 찾지 않도록요.”",
            "place": "exterior"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤은 연락 순서와 위치 표시를 맞췄다. 전화를 받는 사람이 교대해도 같은 장소를 안내할 수 있도록 기록을 남겼다.",
            "place": "exterior"
          }
        ],
        "result": "시설 대응의 위치와 연락 인계를 구체화했다.",
        "thought": "교대 뒤에도 같은 곳을 안내할 수 있도록 남겼다."
      },
      {
        "label": "명숙과 함께 안내를 다시 확인할 주민들을 살핀다",
        "sub": "이용 경로와 필요한 이동 도움을 직접 확인합니다. 시설·차량 준비도 계속됩니다.",
        "id": "residents",
        "focus": "residents",
        "style": "neutral",
        "post": [
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "명숙은 연락 기록을 보더니 한 세대 옆에 손가락을 놓았다.",
            "place": "office"
          },
          {
            "speaker": "한명숙",
            "role": "단지 주민",
            "who": "npc",
            "npc": "한명숙",
            "text": "“이 댁은 전화는 잘 받아요. 그런데 장소 이름만 말하면 정문 쪽인지 후문 쪽인지 헷갈려요.”",
            "place": "office"
          },
          {
            "speaker": "도윤",
            "role": "관리소장",
            "who": "doyun",
            "npc": "도윤",
            "text": "“안내받았다는 답만 확인하면 놓치겠네요. 가는 길까지 다시 설명드리겠습니다.”",
            "place": "office"
          },
          {
            "speaker": "한명숙",
            "role": "단지 주민",
            "who": "npc",
            "npc": "한명숙",
            "text": "“계단 없는 쪽으로요. 가까운 길이라고 다 편한 건 아니니까.”",
            "place": "office"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤은 선우에게 장소의 이용 시간과 이동 안내를 다시 확인했다. 도움이 필요한 주민에게는 각자 가능한 동행 방법을 물었다. 명숙이 혼자 여러 집을 돌도록 맡기지는 않았다.",
            "place": "office"
          }
        ],
        "result": "안내를 이해했는지와 필요한 이동 도움을 더 확인했다.",
        "thought": "가까운 길이라고 모두에게 편한 길은 아니었다."
      },
      {
        "label": "성호와 함께 차량 연락과 하역 동선을 맞춘다",
        "sub": "안전한 위치에서 차량·하역 시간과 연락을 맞춥니다. 시설·주민 안내도 계속됩니다.",
        "id": "logistics",
        "focus": "logistics",
        "style": "neutral",
        "post": [
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "시간이 맞아 내려온 성호가 차량 진입로와 하역 구역을 번갈아 봤다.",
            "place": "facility-c"
          },
          {
            "speaker": "임성호",
            "role": "단지 주민",
            "who": "npc",
            "npc": "임성호",
            "text": "“업체 차가 여기 서 있을 때 주민 차가 들어오면 서로 기다리겠네요.”",
            "place": "facility-c",
            "dynamic": "act4:day21VehicleReport"
          },
          {
            "speaker": "도윤",
            "role": "관리소장",
            "who": "doyun",
            "npc": "도윤",
            "text": "“업체에는 하역 시간을 확인하고, 해당 차주들에게는 제가 연락하겠습니다.”",
            "place": "facility-c",
            "dynamic": "act4:day21VehicleReply"
          },
          {
            "speaker": "임성호",
            "role": "단지 주민",
            "who": "npc",
            "npc": "임성호",
            "text": "“저는 들어오는 길을 알려드릴게요. 반장님이 남긴 치수도 여기 있죠?”",
            "place": "facility-c"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤은 근무자에게 차량 안내를 연결했다. 성호는 안전한 위치에서 진입 방향을 짚었고, 근무자는 다음 안내에도 쓸 수 있게 표시했다. 소유자 확인 없이 차를 옮기거나 통제 구역 안으로 들어가지는 않았다.",
            "place": "facility-c"
          }
        ],
        "result": "차량·하역 시간과 담당자 연락을 구체화했다.",
        "thought": "다음에 오는 사람도 같은 표시를 찾을 수 있게 했다."
      }
    ],
    "after": [
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day21PumpRecord"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day21ResidentRecord"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "facility-c",
        "dynamic": "act4:day21LoadingRecord"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "저녁 무렵, 관리사무소 우산꽂이에 색이 다른 우산들이 남아 있었다. 안내 내용을 맞추러 온 사람들이 전화와 서류를 챙기느라 하나씩 놓고 간 것이었다.",
        "place": "office"
      },
      {
        "speaker": "정서연",
        "role": "단지 주민",
        "who": "npc",
        "npc": "정서연",
        "text": "“명숙 할머니 우산도 있네요. 아직 안 가셨어요?”",
        "place": "office"
      },
      {
        "speaker": "박선우",
        "role": "입주자대표",
        "who": "npc",
        "npc": "박선우",
        "text": "“아까 비가 잠깐 멎었을 때 가셨어요. 우산 두고 가셨다고 제가 연락드릴게요.”",
        "place": "office"
      },
      {
        "speaker": "정서연",
        "role": "단지 주민",
        "who": "npc",
        "npc": "정서연",
        "text": "“저도 제 것 찾으러 왔어요. 안내문만 챙기고 그냥 갔네요.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "서연은 자기 우산을 꺼낸 뒤 출력된 안내문을 한 번 더 봤다.",
        "place": "office"
      },
      {
        "speaker": "정서연",
        "role": "단지 주민",
        "who": "npc",
        "npc": "정서연",
        "text": "“대체 장소는 이 안내대로면 되죠? 아까 다른 분이 공용실로 가면 되느냐고 물으셨어요.”",
        "place": "office"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“네. 공용실은 계속 닫혀 있습니다. 안내문에도 눈에 띄게 적어두죠.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "서연이 돌아간 뒤 도윤은 인계판을 확인했다. 같은 세 항목 아래에 서로 다른 사람의 확인 시간이 적혀 있었다.",
        "place": "office"
      },
      {
        "speaker": "박선우",
        "role": "입주자대표",
        "who": "npc",
        "npc": "박선우",
        "text": "“한 번씩 다시 물어보니, 안내문 보냈다고 끝낼 일이 아니었네요.”",
        "place": "office"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“내일 근무하는 분도 바로 이어볼 수 있게 남겨두겠습니다.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "도윤은 다음 근무자와 남은 내용을 맞췄다. 창밖의 비는 아직 가늘었지만 아침부터 젖은 바닥은 마르지 않았다.",
        "place": "office"
      }
    ]
  },
  {
    "day": "22일차",
    "title": "예보보다 빠른 비",
    "type": "대응 연결",
    "place": "office",
    "scenes": [
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "점심 무렵부터 빗소리가 커졌다. 도윤이 현관 안내를 확인하는 동안 경비실에서 전화가 왔다.",
        "place": "office"
      },
      {
        "speaker": "강태식",
        "role": "경비반장",
        "who": "npc",
        "npc": "강태식",
        "text": "“지하 점검구 쪽 수위가 오전보다 높습니다. 근무자가 밖에서 확인했고, 진입 통제는 먼저 했습니다.”",
        "place": "office"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“확인한 시간과 위치를 보내주세요. 업체에도 같은 기록으로 연락하겠습니다.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "도윤이 통화를 마치자 선우가 연락 확인표를 책상 위에 놓았다. 한 칸에만 확인 시간이 없었다.",
        "place": "office"
      },
      {
        "speaker": "박선우",
        "role": "입주자대표",
        "who": "npc",
        "npc": "박선우",
        "text": "“이 댁은 아직 답이 없습니다. 어제 안내는 받으셨는데 오늘 전화가 연결되지 않네요.”",
        "place": "office"
      },
      {
        "speaker": "한명숙",
        "role": "단지 주민",
        "who": "npc",
        "npc": "한명숙",
        "text": "“아침에는 집에 계셨어요. 지금 나가실 만한 일도 없을 텐데.”",
        "place": "office"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“지혜 씨께 함께 확인할 수 있는지 물어보겠습니다. 답이 없으면 기다리기만 하지 말고 외부 도움도 요청하죠.”",
        "place": "office"
      },
      {
        "speaker": "강태식",
        "role": "경비반장",
        "who": "npc",
        "npc": "강태식",
        "text": "“설비 쪽 연락은 제가 이어받겠습니다. 주민 확인하러 가는 분들은 지상 복도로 안내하겠습니다.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "도윤은 두 보고를 나란히 붙였다. 한쪽의 확인을 기다리며 다른 쪽을 멈출 수는 없었다.",
        "place": "office"
      },
      {
        "speaker": "점검 기사 전화",
        "role": "전문 점검 업체",
        "who": "npc",
        "npc": "점검 기사",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day22PumpReport"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day22DrainReport"
      },
      {
        "speaker": "박선우",
        "role": "입주자대표",
        "who": "npc",
        "npc": "박선우",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day22ResidentReport"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day22FocusReturn"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“태식 반장님은 통제와 업체 연락, 선우 씨는 주민 확인을 이어주세요. 차량 안내는 관리사무소에서 받겠습니다.”",
        "place": "office"
      },
      {
        "speaker": "박선우",
        "role": "입주자대표",
        "who": "npc",
        "npc": "박선우",
        "text": "“확인한 내용은 여기로 모으겠습니다. 소장님은 어느 쪽부터 가시겠어요?”",
        "place": "office"
      }
    ],
    "choices": [
      {
        "label": "태식과 현장 보고를 맞추고 업체 대응을 연결한다",
        "sub": "통제선 바깥에서 상태 변화와 전문 점검 요청을 확인합니다. 주민 확인은 담당자가 이어갑니다.",
        "id": "facility",
        "focus": "facility",
        "style": "neutral",
        "post": [
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤은 지하 진입로의 통제선 바깥에서 태식을 만났다. 오전 사진과 방금 받은 사진 사이에는 물이 닿은 높이가 달랐다.",
            "place": "exterior"
          },
          {
            "speaker": "강태식",
            "role": "경비반장",
            "who": "npc",
            "npc": "강태식",
            "text": "“소리도 달라졌지만, 그것만 듣고 고장이라고 적지는 않았습니다. 시간별로 같이 보시죠.”",
            "place": "exterior"
          },
          {
            "speaker": "도윤",
            "role": "관리소장",
            "who": "doyun",
            "npc": "도윤",
            "text": "“네. 업체가 확인할 때도 이 순서대로 전달하겠습니다.”",
            "place": "exterior"
          },
          {
            "speaker": "점검 기사 전화",
            "role": "전문 점검 업체",
            "who": "npc",
            "npc": "점검 기사",
            "text": "“사진은 확인했습니다. 현장 근무자에게 점검 연락을 이어주십시오. 통제는 유지해 주세요.”",
            "place": "exterior"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤은 업체와 근무자가 같은 위치를 보고 있는지 확인했다. 주민 확인 쪽에서 온 연락도 태식에게 전하고, 다음 보고 시간을 기록했다.",
            "place": "exterior"
          }
        ],
        "result": "상태 변화와 보고 시각, 업체 연락이 한 기록으로 맞춰졌다.",
        "thought": "확인한 사실과 아직 모르는 것을 나누어 적었다."
      },
      {
        "label": "명숙·지혜와 안전한 복도로 가서 응답을 확인한다",
        "sub": "주민의 응답과 필요한 도움을 직접 확인합니다. 지하 통제와 업체 연락도 계속됩니다.",
        "id": "residents",
        "focus": "residents",
        "style": "neutral",
        "post": [
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤은 명숙·지혜와 지상 복도로 갔다. 명숙은 익숙한 문 앞에서도 먼저 도윤을 바라봤다.",
            "place": "corridor"
          },
          {
            "speaker": "한명숙",
            "role": "단지 주민",
            "who": "npc",
            "npc": "한명숙",
            "text": "“아까도 전화는 안 받으셨어요. 문을 두드려 보죠.”",
            "place": "corridor"
          },
          {
            "speaker": "도윤",
            "role": "관리소장",
            "who": "doyun",
            "npc": "도윤",
            "text": "“관리사무소 도윤입니다. 어르신, 안에 계세요?”",
            "place": "corridor"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "잠시 뒤 안에서 발소리가 났다. 문이 조금 열리자 지혜가 가까이서 자신의 이름을 말했다.",
            "place": "corridor"
          },
          {
            "speaker": "오지혜",
            "role": "야간 근무 주민",
            "who": "npc",
            "npc": "오지혜",
            "text": "“연락이 안 돼서 함께 왔어요. 들어가서 잠깐 이야기해도 될까요?”",
            "place": "corridor"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "주민이 고개를 끄덕였다. 도윤은 응답이 확인됐다는 연락부터 관리사무소에 보냈다.",
            "place": "corridor"
          }
        ],
        "result": "주민의 응답과 필요한 도움을 직접 확인했다.",
        "thought": "안내를 보냈다는 것과 닿았다는 것은 달랐다."
      },
      {
        "label": "들어오는 보고를 모으고 연락이 끊긴 곳을 다시 연결한다",
        "sub": "관리사무소에서 현장 보고와 주민 확인, 안내 수정을 연결합니다.",
        "id": "coordination",
        "focus": "coordination",
        "style": "neutral",
        "post": [
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤은 보고마다 위치와 확인 시간을 적었다. 단체방에는 지하에 갇힌 사람이 있다는 글이 올라왔다.",
            "place": "office"
          },
          {
            "speaker": "정서연",
            "role": "단지 주민",
            "who": "npc",
            "npc": "정서연",
            "text": "“이 글은 누가 직접 본 건지 확인이 안 돼요. 지금 전달된 건 출입 통제 사진인데요.”",
            "place": "office"
          },
          {
            "speaker": "도윤",
            "role": "관리소장",
            "who": "doyun",
            "npc": "도윤",
            "text": "“태식 반장님께 사람 확인부터 묻겠습니다. 확인된 내용으로 안내를 고쳐주세요.”",
            "place": "office"
          },
          {
            "speaker": "강태식 전화",
            "role": "경비반장",
            "who": "npc",
            "npc": "강태식",
            "text": "“통제 전 진입 인원 확인했고, 아직 남은 사람은 없습니다. 현장 확인 기록도 보내겠습니다.”",
            "place": "office"
          },
          {
            "speaker": "정서연",
            "role": "단지 주민",
            "who": "npc",
            "npc": "정서연",
            "text": "“통제 중이라는 안내와 확인 시각을 같이 올릴게요.”",
            "place": "office"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤은 선우에게도 주민 확인 진행을 물었다. 돌아온 응답을 같은 기록에 붙이고, 다시 연락할 곳을 구분했다.",
            "place": "office"
          }
        ],
        "result": "두 현장의 보고와 안내 수정이 한곳에서 연결됐다.",
        "thought": "누가 어디서 언제 확인했는지를 남겼다."
      }
    ],
    "after": [
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "오후 늦게 지혜와 명숙이 관리사무소로 돌아왔다. 선우는 비어 있던 칸에 확인 시간을 적었다.",
        "place": "office"
      },
      {
        "speaker": "오지혜",
        "role": "야간 근무 주민",
        "who": "npc",
        "npc": "오지혜",
        "text": "“집에 계셨습니다. 전화는 방 안에 두셨고, 보청기는 전지가 떨어져서 벗어두셨대요.”",
        "place": "office"
      },
      {
        "speaker": "한명숙",
        "role": "단지 주민",
        "who": "npc",
        "npc": "한명숙",
        "text": "“비가 이렇게 세졌는지도 문 열고 나서야 아셨어요. 창가에서 손짓했는데, 제가 무슨 말인지 못 알아들었죠.”",
        "place": "office"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“오늘은 안내를 들으셨는지까지 확인해야겠네요.”",
        "place": "office"
      },
      {
        "speaker": "오지혜",
        "role": "야간 근무 주민",
        "who": "npc",
        "npc": "오지혜",
        "text": "“크게 적어서 보여드렸어요. 지금은 집에 계시겠다고 하셨고, 다시 연락드릴 방법도 맞췄습니다.”",
        "place": "office"
      },
      {
        "speaker": "박선우",
        "role": "입주자대표",
        "who": "npc",
        "npc": "박선우",
        "text": "“이 댁은 문자만 보내고 완료로 적지 않겠습니다.”",
        "place": "office"
      },
      {
        "speaker": "한명숙",
        "role": "단지 주민",
        "who": "npc",
        "npc": "한명숙",
        "text": "“다음에는 제 이름도 써요. 알아보시는 사람이 있다는 걸 아셔야 하니까.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "도윤은 ‘전화 응답 없음’ 옆에 확인 결과를 붙였다. 빈칸이 사라졌지만, 앞으로 다시 확인할 시간은 남아 있었다.",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "준호는 아이들과 함께 안내를 받으러 왔다. 명숙이 의자를 비켜주자 준호가 먼저 고맙다고 말했다.",
        "place": "office"
      },
      {
        "speaker": "이준호",
        "role": "단지 주민",
        "who": "npc",
        "npc": "이준호",
        "text": "“아이들 때문에 급하면 제가 말을 다 못 듣더라고요. 오늘 바뀐 것만 다시 알려주실 수 있어요?”",
        "place": "office"
      },
      {
        "speaker": "한명숙",
        "role": "단지 주민",
        "who": "npc",
        "npc": "한명숙",
        "text": "“공용실은 아직 닫혔어요. 다른 데로 가야 하면 선우 씨한테 시간하고 길을 먼저 물어요.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "서연은 지혜에게 수정한 안내를 보여줬다. 지혜는 작은 글씨로 붙은 시간 표시를 짚었다.",
        "place": "office"
      },
      {
        "speaker": "오지혜",
        "role": "야간 근무 주민",
        "who": "npc",
        "npc": "오지혜",
        "text": "“이 시간은 더 크게 해주세요. 아까 안내랑 헷갈리지 않게요.”",
        "place": "office"
      },
      {
        "speaker": "정서연",
        "role": "단지 주민",
        "who": "npc",
        "npc": "정서연",
        "text": "“맨 위로 옮길게요. 장소 이름도 같이요.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "성호에게서는 물품 수령 위치를 확인하는 연락이 왔다. 정희는 젖지 않은 지상 통로 사진을 선우에게 보냈다.",
        "place": "office"
      },
      {
        "speaker": "윤정희",
        "role": "급식소 관리 주민",
        "who": "npc",
        "npc": "윤정희",
        "text": "“급식소 쪽 길은 지금 이렇습니다. 안내를 바꿀 때 이쪽 사진도 보세요.”",
        "place": "office"
      },
      {
        "speaker": "박선우",
        "role": "입주자대표",
        "who": "npc",
        "npc": "박선우",
        "text": "“네. 근무자가 확인한 동선하고 같이 보겠습니다.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day22FacilityReturn"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "저녁이 되자 빗소리가 잠시 낮아졌다. 태식은 다음 근무자에게 도윤이 갱신한 기록을 건넸다.",
        "place": "office"
      },
      {
        "speaker": "강태식",
        "role": "경비반장",
        "who": "npc",
        "npc": "강태식",
        "text": "“수위 보고 시간, 업체 연락, 통제 구역입니다. 달라지면 앞 기록에 덧붙이지 말고 새 시간으로 남겨주세요.”",
        "place": "office"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“주민 확인 기록도 같이 두겠습니다. 다시 연락할 곳은 따로 표시했습니다.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "휴대전화에서 재난 안내가 울렸다. 내일 새벽부터 강한 비가 예상된다는 내용이었다.",
        "place": "office"
      },
      {
        "speaker": "박선우",
        "role": "입주자대표",
        "who": "npc",
        "npc": "박선우",
        "text": "“오늘 안내를 내일 그대로 돌리면 안 되겠네요.”",
        "place": "office"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“네. 달라진 곳부터 다시 맞추겠습니다.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "도윤은 20일차 계획표 옆에 오늘의 확인 기록을 놓았다. 계획한 것과 실제로 쓰고 있는 것이 이제 같은 자리에 있었다.",
        "place": "office"
      },
      {
        "speaker": "박선우",
        "role": "입주자대표",
        "who": "npc",
        "npc": "박선우",
        "text": "“밤에 안전하게 머물 곳과 꼭 필요한 물품은 확인했습니다. 위험이 풀릴 때까지 기본 이용과 도움은 이어집니다.”",
        "place": "office"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“직원 교대도 정해뒀습니다. 기존 계약과 겹치지 않는 추가 지원의 범위와 가능한 시간만 따로 확인하겠습니다.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day22InspectionScope"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day22VenueScope"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day22ContactScope"
      }
    ]
  },
  {
    "day": "23일차",
    "title": "가장 긴 밤",
    "type": "집중호우 대응",
    "place": "office",
    "scenes": [
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "새벽, 도윤의 휴대전화가 울렸다. 화면에는 야간 근무자가 보낸 통제 구역 사진이 떠 있었다.",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "관리사무소에 도착했을 때 현관 매트 끝까지 젖어 있었다. 지하 출입구에는 전날보다 긴 통제선이 붙어 있었다.",
        "place": "office"
      },
      {
        "speaker": "경비 근무자",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day23InitialWater"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“남아 있는 사람은 확인됐습니까?”",
        "place": "office"
      },
      {
        "speaker": "경비 근무자",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "“통제 구역에는 없습니다. 설비 쪽은 업체에서 확인 중입니다.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "전화가 다시 울렸다. 점검 기사는 빗소리에 묻히지 않도록 천천히 말했다.",
        "place": "office"
      },
      {
        "speaker": "점검 기사 전화",
        "role": "전문 점검 업체",
        "who": "npc",
        "npc": "점검 기사",
        "text": "“젖은 구역과 연결된 일부 전기설비는 사용을 멈췄습니다. 펌프 쪽 운전 상태는 별도로 확인하고 있습니다.”",
        "place": "office"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“사용을 멈춘 구역부터 표시하겠습니다. 다음 확인도 같은 번호로 받겠습니다.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "도윤은 도면에서 그 구역을 짚었다. 공용실 벽에 처음 물자국을 표시했던 자리가 가까이에 있었다.",
        "place": "office",
        "cutin": "story-handover-plan"
      },
      {
        "speaker": "경비 근무자",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "“문은 계속 닫혀 있습니다. 그 앞 안내도 다시 확인했습니다.”",
        "place": "office"
      },
      {
        "speaker": "점검 기사 전화",
        "role": "전문 점검 업체",
        "who": "npc",
        "npc": "점검 기사",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day23PumpReport"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day23DrainReport"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "오전, 대체 장소 담당자에게서 연락이 왔다. 일찍 이동한 주민들은 모두 안에 들어와 있었다.",
        "place": "office"
      },
      {
        "speaker": "박선우 전화",
        "role": "입주자대표",
        "who": "npc",
        "npc": "박선우",
        "text": "“오신 분들은 확인했습니다. 장소가 바뀌었다는 안내도 계속 받고 있습니다.”",
        "place": "office"
      },
      {
        "speaker": "한명숙 전화",
        "role": "단지 주민",
        "who": "npc",
        "npc": "한명숙",
        "text": "“어제 찾아갔던 댁에도 다시 연락했어요. 써드린 안내를 옆에 두고 계시더라고요.”",
        "place": "office"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“네. 다음 확인 시간에도 이어주세요.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "도윤이 전화를 내려놓으려는데 아이 목소리가 잠깐 들렸다. 명숙이 수화기를 조금 떼고 대답했다.",
        "place": "office"
      },
      {
        "speaker": "한명숙",
        "role": "단지 주민",
        "who": "npc",
        "npc": "한명숙",
        "text": "“우산은 거기 두면 넘어져요. 옆에 기대둬요.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "준호가 낮게 웃으며 아이를 불렀다. 전화를 건 사람과 그 옆 사람의 목소리가 함께 들렸다.",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day23ResidentReadiness"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "도윤은 오전 확인을 다음 담당자에게 넘기고 몇 시간 쉬었다. 다시 관리사무소에 들어섰을 때 기록에는 그동안 받은 보고가 이어져 있었다.",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "저녁이 가까워질수록 빗소리가 커졌다. 창문 밖의 가로등 아래로 물이 끊이지 않고 흘렀다.",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "태식은 예정된 야간 근무에 들어와 낮 근무자의 보고를 받았다. 인계 기록에서 마지막 확인 시간을 짚었다.",
        "place": "office"
      },
      {
        "speaker": "점검 기사 전화",
        "role": "전문 점검 업체",
        "who": "npc",
        "npc": "점검 기사",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day23EveningWater"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“차량 안내도 같은 범위로 바꾸겠습니다.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "대체 장소에서는 이용 시간을 다시 확인해 달라는 연락이 왔다. 관리사무소 전화에는 자기 차를 확인하러 내려가도 되느냐는 문의가 이어졌다.",
        "place": "office"
      },
      {
        "speaker": "임성호 전화",
        "role": "단지 주민",
        "who": "npc",
        "npc": "임성호",
        "text": "“차 때문에 내려오겠다는 분한테 통제 안내부터 다시 드렸습니다. 하역하는 곳하고도 다르다고 말씀드렸고요.”",
        "place": "office"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“사진으로 확인할 수 있는 내용은 제가 받아서 전하겠습니다.”",
        "place": "office"
      },
      {
        "speaker": "박선우 전화",
        "role": "입주자대표",
        "who": "npc",
        "npc": "박선우",
        "text": "“여기는 명숙 어르신과 지혜 씨가 같이 있습니다. 이용 시간은 담당자하고 맞추겠습니다.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "도윤은 통화를 마치고 두 곳의 보고를 읽었다. 둘 다 사람이 있었다. 이제 자신이 어느 자리에 더 오래 붙어 있을지 정해야 했다.",
        "place": "office"
      }
    ],
    "choices": [
      {
        "label": "통제 구역 바깥에서 설비 보고와 필요한 연락을 이어간다",
        "sub": "시간별 보고와 전문 점검 요청을 직접 맞춥니다. 대체 장소와 차량 안내도 계속됩니다.",
        "id": "facility",
        "focus": "facility",
        "style": "neutral",
        "post": [
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤은 지상 통제 지점에서 근무자가 받은 사진을 같이 봤다. 물이 지나간 자국 위로 새 확인선이 그어져 있었다.",
            "place": "exterior",
            "dynamic": "act4:day23FacilityPhoto"
          },
          {
            "speaker": "점검 기사 전화",
            "role": "전문 점검 업체",
            "who": "npc",
            "npc": "점검 기사",
            "text": "“다음 확인에서도 이 선과 비교하겠습니다. 운전 소리만으로는 수위 변화를 알 수 없습니다.”",
            "place": "exterior"
          },
          {
            "speaker": "도윤",
            "role": "관리소장",
            "who": "doyun",
            "npc": "도윤",
            "text": "“밖에서 받은 보고는 시간별로 구분해두겠습니다.”",
            "place": "exterior"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "사진이 도착하자 도윤은 앞 기록과 나란히 놓았다. 현재 통제 구역을 보고 성호에게 안내를 같은 범위로 맞춰달라고 연락했다.",
            "place": "exterior"
          },
          {
            "speaker": "강태식",
            "role": "경비반장",
            "who": "npc",
            "npc": "강태식",
            "text": "“앞 기록은 받았습니다. 다음 보고는 제가 근무자하고 맞추겠습니다.”",
            "place": "exterior"
          },
          {
            "speaker": "도윤",
            "role": "관리소장",
            "who": "doyun",
            "npc": "도윤",
            "text": "“네. 저는 업체와 남은 구역부터 맞추겠습니다.”",
            "place": "exterior"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "대체 장소에서 준호의 음성 메시지가 왔다. 뒤에서 명숙이 아이들에게 자리 옮기는 것을 도와달라고 말했다.",
            "place": "exterior"
          },
          {
            "speaker": "이준호 음성 메시지",
            "role": "단지 주민",
            "who": "npc",
            "npc": "이준호",
            "text": "“아이들은 여기 있습니다. 바뀐 안내도 받았고요. 소장님은 지금 맡으신 쪽 보셔도 됩니다.”",
            "place": "exterior"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤은 끝까지 들은 뒤 짧게 답을 보냈다. 다음 보고가 오기 전까지 전화가 잠시 조용했다.",
            "place": "exterior"
          }
        ],
        "result": "시설 보고와 안내 변경을 직접 연결하고 다음 담당자에게 넘겼다.",
        "thought": "같은 위치의 기록을 다음 사람도 읽을 수 있게 했다."
      },
      {
        "label": "대체 장소에서 주민들이 알아야 할 변화를 직접 설명한다",
        "sub": "안전한 대체 장소에서 질문과 개별 연락을 맡습니다. 시설 보고와 통제는 계속됩니다.",
        "id": "residents",
        "focus": "residents",
        "style": "neutral",
        "post": [
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "확인된 안전한 지상 경로로 대체 장소에 도착했을 때, 준호는 아이가 보고 있던 휴대전화를 내려놓게 하고 있었다. 화면에는 지하 사진이 떠 있었다.",
            "place": "lobby"
          },
          {
            "speaker": "이준호",
            "role": "단지 주민",
            "who": "npc",
            "npc": "이준호",
            "text": "“아까 누가 보낸 걸 봤나 봐요. 집도 저렇게 되는 거냐고 계속 묻네요.”",
            "place": "lobby"
          },
          {
            "speaker": "도윤",
            "role": "관리소장",
            "who": "doyun",
            "npc": "도윤",
            "text": "“사진은 통제한 지하 구역입니다. 지금 여기와 집 쪽 확인은 따로 받고 있어요.”",
            "place": "lobby"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤은 확인한 곳만 표시된 안내를 펴놓았다. 아직 확인 중인 칸은 지우지 않았다.",
            "place": "lobby"
          },
          {
            "speaker": "정서연",
            "role": "단지 주민",
            "who": "npc",
            "npc": "정서연",
            "text": "“이 사진만 계속 돌고 있어요. 장소 이름 붙인 안내를 같이 보여드릴게요.”",
            "place": "lobby"
          },
          {
            "speaker": "오지혜",
            "role": "야간 근무 주민",
            "who": "npc",
            "npc": "오지혜",
            "text": "“글을 읽기 어려운 분들은 제가 옆에서 같이 볼게요.”",
            "place": "lobby"
          },
          {
            "speaker": "한명숙",
            "role": "단지 주민",
            "who": "npc",
            "npc": "한명숙",
            "text": "“준호 씨, 아이들은 제가 잠깐 보고 있을게요. 집에 연락할 일 있으면 하고 와요.”",
            "place": "lobby"
          },
          {
            "speaker": "이준호",
            "role": "단지 주민",
            "who": "npc",
            "npc": "이준호",
            "text": "“감사합니다. 금방 옆에서 전화하고 올게요.”",
            "place": "lobby"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤의 전화에 태식의 보고가 들어왔다. 함께 보고를 받는 근무자의 이름과 마지막 확인 시간이 함께 적혀 있었다.",
            "place": "lobby"
          },
          {
            "speaker": "강태식 음성 메시지",
            "role": "경비반장",
            "who": "npc",
            "npc": "강태식",
            "text": "“현재 통제 안쪽에 사람 없습니다. 업체 보고는 근무자가 받았습니다. 다음 확인 시간에 다시 연락드리겠습니다.”",
            "place": "lobby"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤은 보고를 확인하고 주민들에게 달라진 부분을 말했다. 명숙은 옆 사람이 들었는지 한 번 더 물었다.",
            "place": "lobby"
          }
        ],
        "result": "주민 안내와 개별 연락을 직접 맡고 다음 담당자에게 넘겼다.",
        "thought": "설명을 들었는지 옆 사람이 한 번 더 물어주었다."
      },
      {
        "label": "각 현장의 보고를 모으고 다음 담당자에게 끊김 없이 연결한다",
        "sub": "시설·주민·차량 안내의 확인 시각과 요청을 맞춥니다. 각 현장의 담당자도 계속 움직입니다.",
        "id": "coordination",
        "focus": "coordination",
        "style": "neutral",
        "post": [
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤은 통화 중인 전화 옆에 다음 연락을 적었다. 성호의 문의에는 이름을 확인한 차주 연락처를 붙였다.",
            "place": "office"
          },
          {
            "speaker": "임성호 전화",
            "role": "단지 주민",
            "who": "npc",
            "npc": "임성호",
            "text": "“이 분은 차 사진을 보고도 어느 구역인지 모르시겠답니다.”",
            "place": "office"
          },
          {
            "speaker": "도윤",
            "role": "관리소장",
            "who": "doyun",
            "npc": "도윤",
            "text": "“위치 확인해서 제가 설명드리겠습니다. 성호 씨는 안전한 수령 지점만 안내해 주세요.”",
            "place": "office"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "서연은 수정한 안내의 시간을 바꿨다. 정희가 전화로 읽어주는 질문 옆에 답을 짧게 적었다.",
            "place": "office"
          },
          {
            "speaker": "윤정희 전화",
            "role": "급식소 관리 주민",
            "who": "npc",
            "npc": "윤정희",
            "text": "“이쪽은 방송이 잘 안 들린대요. 어느 문을 쓰지 말라는 건지 한 번만 더 알려주세요.”",
            "place": "office"
          },
          {
            "speaker": "정서연",
            "role": "단지 주민",
            "who": "npc",
            "npc": "정서연",
            "text": "“문 사진 붙여서 보낼게요. 같은 문인지 먼저 봐주세요.”",
            "place": "office"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "도윤은 시설 보고를 기다리며 수화기를 들었다. 받는 사람은 조금 전까지 통화하던 태식이 아니었다.",
            "place": "office"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "태식과 같은 조의 근무자가 자신의 이름을 말하고 확인 시간을 읽었다. 도윤은 담당 기록에서 그 이름을 찾았다.",
            "place": "office"
          },
          {
            "speaker": "도윤",
            "role": "관리소장",
            "who": "doyun",
            "npc": "도윤",
            "text": "“네. 기록 보고 있습니다. 그다음 확인도 같은 위치로 부탁드립니다.”",
            "place": "office"
          },
          {
            "speaker": "이야기",
            "role": "",
            "who": "none",
            "npc": "",
            "text": "통화를 마치자 선우가 대체 장소의 보고를 전했다. 두 기록에는 서로 다른 사람의 이름과 같은 시각이 적혀 있었다.",
            "place": "office"
          },
          {
            "speaker": "박선우 전화",
            "role": "입주자대표",
            "who": "npc",
            "npc": "박선우",
            "text": "“여기는 이용 시간 맞췄습니다. 연락 남은 분들은 명숙 어르신하고 나눠서 확인하겠습니다.”",
            "place": "office"
          }
        ],
        "result": "각 현장의 최신 정보를 맞추고 다음 담당자에게 넘겼다.",
        "thought": "다른 사람의 이름으로도 같은 일이 이어지고 있었다."
      }
    ],
    "after": [
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day23EmergencyRecord"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "밤이 깊어졌다. 성호는 마지막 물품 수령을 마치고 태식에게 연락했다.",
        "place": "office"
      },
      {
        "speaker": "임성호 전화",
        "role": "단지 주민",
        "who": "npc",
        "npc": "임성호",
        "text": "“표시한 데서 받았습니다. 다음 분도 여기로 오시면 된다고 말씀드렸어요.”",
        "place": "office"
      },
      {
        "speaker": "강태식",
        "role": "경비반장",
        "who": "npc",
        "npc": "강태식",
        "text": "“네. 같은 위치로 인계하겠습니다. 이제 안에서 기다리십시오.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "서연은 지혜에게 마지막 안내를 보여줬다. 지혜는 자신의 휴대전화에도 같은 시각이 적혔는지 확인했다.",
        "place": "office"
      },
      {
        "speaker": "오지혜",
        "role": "야간 근무 주민",
        "who": "npc",
        "npc": "오지혜",
        "text": "“네, 이걸로 받았어요. 옆에 계신 분들께도 다시 말씀드릴게요.”",
        "place": "office"
      },
      {
        "speaker": "정서연",
        "role": "단지 주민",
        "who": "npc",
        "npc": "정서연",
        "text": "“바뀌면 같은 데에 올릴게요. 앞 안내도 시간이 보이게 남겨둘게요.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "선우에게서는 정희가 확인한 질문들이 넘어왔다. 도윤은 답한 항목을 표시하고 다음 근무자에게 건넸다.",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "누구도 단지 전체를 혼자 보고 있지 않았다. 도윤이 받은 보고도 다른 사람이 바로 이어 읽을 수 있었다.",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "자정이 되기 전, 점검 기사의 다음 보고가 왔다. 도윤은 앞 사진을 먼저 열어두었다.",
        "place": "office"
      },
      {
        "speaker": "점검 기사 전화",
        "role": "전문 점검 업체",
        "who": "npc",
        "npc": "점검 기사",
        "text": "“마지막 확인에서는 물이 더 넓게 번지지 않았습니다. 비가 계속되니 다음 확인까지 통제는 유지하겠습니다.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "도윤은 사진 두 장을 번갈아 봤다. 아직 젖어 있는 구역이 있었지만, 마지막 표시 밖으로 물이 넘어오지는 않았다.",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "확인한 내용은 다음 담당자에게도 같은 기록으로 전했다.",
        "place": "office",
        "dynamic": "act4:day23DamageResult"
      },
      {
        "speaker": "도윤",
        "role": "관리소장",
        "who": "doyun",
        "npc": "도윤",
        "text": "“확인했습니다. 남은 구역은 다음 근무자도 같은 표시로 보게 하겠습니다.”",
        "place": "office"
      },
      {
        "speaker": "강태식",
        "role": "경비반장",
        "who": "npc",
        "npc": "강태식",
        "text": "“교대자가 도착했습니다. 확인한 데부터 같이 보겠습니다.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "태식은 도윤이 들고 있던 종이를 받아 교대자에게 펼쳐 보였다. 자신의 마지막 확인 시간 옆에 다음 사람의 이름이 들어갔다.",
        "place": "office"
      },
      {
        "speaker": "강태식",
        "role": "경비반장",
        "who": "npc",
        "npc": "강태식",
        "text": "“소장님도 인계할 시간 적어두십시오.”",
        "place": "office"
      },
      {
        "speaker": "이야기",
        "role": "",
        "who": "none",
        "npc": "",
        "text": "도윤은 고개를 끄덕였다. 다음 보고를 자신만 받을 필요는 없었다.",
        "place": "office"
      }
    ]
  }
];
(function () {
  'use strict';
  const b = state => state.branchState || {};
  const completed = state => b(state).completedProjects || [];
  const has = (state, id) => completed(state).includes(id);
  const level = (state, id) => b(state).facilities?.[id] ?? 0;
  const text = value => ({ text: value });
  const narrator = value => ({ speaker:'이야기', role:'', who:'none', npc:'', text:value });
  const person = (name, role, value) => ({ speaker:name, role, who:name==='도윤'?'doyun':'npc', npc:name, text:value });
  const work = (state, index) => {
    const id = completed(state)[index];
    const items = {
      rental:person('점검 기사','전문 점검 업체','“장비 설치와 시험 운전은 끝났습니다. 운영 지원 연락도 이쪽으로 주시면 됩니다.”'),
      replace:person('점검 기사','전문 점검 업체','“교체와 시운전을 마쳤습니다. 운전 기록과 남은 점검 사항을 같이 드리겠습니다.”'),
      drain:person('점검 기사','전문 점검 업체','“계약한 구간은 마쳤습니다. 이번 작업 범위 밖의 구역도 보고서에 표시했습니다.”'),
      residents:person('박선우','입주자대표','“대체 장소 운영 시간과 담당자 연락처를 확인했습니다. 안내받았다고 답하신 세대도 표시했고요.”'),
      A:narrator('도윤과 근무자는 정비된 보관 구획과 이동 폭을 확인했다. 복도 정비 완료 자료에 확인 시간을 적었다.'),
      C:narrator('도윤과 근무자는 하역 표시와 이번에 정비한 항목을 확인했다. 차량과 물자를 받을 위치가 도면에 남았다.'),
      D:narrator('정희가 이용 동선을 알려주었다. 도윤은 업체의 급식소 정비 완료 내용을 확인하고, 지하 배수 기록과는 따로 두었다.'),
      E:narrator('도윤과 근무자는 안내·보관 시설을 확인했다. 달라진 표시가 입구에서 보이는지도 함께 살폈다.')
    };
    return items[id] || narrator('도윤은 완료 자료를 인계 기록에 붙였다. 이번에 마친 범위와 아직 확인이 필요한 부분을 나누어 표시했다.');
  };
  const scopeReport = (state,id,confirmed) => {
    const service=state.act4?.services?.[id] || window.LATE_ACT_CONFIG?.confirmedReviewServices?.[id];
    if(service?.alreadyCovered) return narrator('추가로 검토한 범위는 이미 확보돼 있었다. 도윤은 기존 담당자와 내용을 다시 확인하고 중복 배치 대상에서 제외했다.');
    if(service?.needed===false) return narrator('현재 기록에서는 그 범위의 추가 지원이 필요하지 않았다. 도윤은 기본 담당자가 이어갈 내용만 남겼다.');
    if(!service?.available || !service?.nonOverlapping) return narrator('추가 지원의 제공 가능 범위와 시간을 더 확인해야 했다. 기본 대응은 이어가고, 확인되지 않은 추가 계약은 하지 않기로 했다.');
    return narrator(confirmed);
  };
  window.ACT4_DYNAMIC = {
    day22InspectionScope: state => scopeReport(state,'inspection','업체는 기존 운전·교체·보강 계약 밖의 젖은 물품과 구역을 추가로 확인할 수 있다고 답했다. 24일차 초기 점검에 가능한 일정도 함께 확인했다.'),
    day22VenueScope: state => scopeReport(state,'venue','선우는 추가 휴게 구역·생활 안내·편의물품을 24일차 오전까지 이어갈 수 있다는 답을 기록했다. 안전한 체류와 필수품은 별도로 이미 확보돼 있었다.'),
    day22ContactScope: state => scopeReport(state,'contact','관리사무소는 추가 담당자의 저녁 업무 가능 시간을 확인했다. 기존 인력과 겹치지 않는 문의 대응과 안전한 지상 물품 수령만 따로 맡기는 범위였다.'),
    day21Opening: state => narrator(completed(state).some(id=>id!=='residents')
      ? '태식은 관리사무소 책상 위에 도면을 펴놓고 다음 근무자에게 표시한 곳을 짚어주고 있었다. 도윤이 들어서자 업체 연락처가 적힌 메모를 건넸다.'
      : '태식은 관리사무소 책상 위에 도면을 펴놓고 다음 근무자에게 표시한 곳을 짚어주고 있었다. 도윤이 들어서자 비상 연락처와 대체 장소 담당자 메모를 건넸다.'),
    day21Handoff: state => text(completed(state).some(id=>id!=='residents')
      ? '“출입구와 통제 구역은 같이 돌아봤습니다. 업체에서 연락이 오면 이 번호로 받으시면 됩니다.”'
      : '“출입구와 통제 구역은 같이 돌아봤습니다. 운영 담당자 연락과 비상 연락은 이쪽으로 받으시면 됩니다.”'),
    day21CompletionIntro: state => narrator(completed(state).some(id=>id!=='residents')
      ? '오전 준비가 마무리될 무렵, 도윤은 다음 근무자와 함께 완료 자료와 현장을 확인했다. 계획표의 ‘예정’을 하나씩 고쳤다.'
      : '도윤은 운영 담당자와 다음 근무자의 기록을 함께 확인했다. 장소 사용 확인과 준비 물품을 살피고 계획표의 ‘예정’을 고쳤다.'),
    day21Work1: state => work(state,0),
    day21Work2: state => work(state,1),
    day21RoomNotice: state => text(level(state,'B')===0
      ? '“공용실 개방 연기 안내는 그대로 두었습니다. 대체 장소로 가셔야 한다는 안내도 같이 붙였고요.”'
      : '“공용실 사용 중지 안내는 그대로 두었습니다. 대체 장소로 가셔야 한다는 안내도 같이 붙였고요.”'),
    day21VehicleReport: state => text(completed(state).some(id=>id!=='residents')
      ? '“업체 차가 여기 서 있을 때 주민 차가 들어오면 서로 기다리겠네요.”'
      : '“지원 차량이 나중에 여기 들어오면 주민 차와 겹치겠네요.”'),
    day21VehicleReply: state => text(completed(state).some(id=>id!=='residents')
      ? '“업체에는 하역 시간을 확인하고, 해당 차주들에게는 제가 연락하겠습니다.”'
      : '“필요할 때 사용할 하역 위치를 확인하고, 해당 차주들에게는 제가 연락하겠습니다.”'),
    day21PumpRecord: state => narrator(has(state,'rental')
      ? '운영 지원 연락처가 근무자 기록에 연결됐다. 장비가 있어도 상태 확인과 출입 통제는 계속한다.'
      : has(state,'replace') ? '새 펌프 시운전 기록이 인계됐다. 배수 경로와 전기 구역의 남은 문제도 같은 기록에 남았다.'
      : '기존 펌프의 점검 결과와 이상 시 외부 지원 요청 경로를 다시 확인했다. 추가 장비가 확보된 상태는 아니었다.'),
    day21ResidentRecord: state => narrator(has(state,'residents')
      ? '준비한 안내와 운영 시간에 오늘 확인한 내용을 덧붙였다. 대체 장소에 준비한 물품도 기록에 남았다.'
      : '선우는 안전한 대체 장소의 기본 이용 가능 여부와 외부 지원 경로를 확인했다. 장시간 머무를 때 필요한 물품은 따로 확인할 일이었다.'),
    day21LoadingRecord: state => narrator([
      '임시로 조정한 하역 위치와 차주 연락을 다음 근무자도 다시 확인해야 했다.',
      '정한 시간에 맞춰 임시 하역 구역을 사용할 수 있도록 인계했다.',
      '정식 하역 구역에서 차량 진입과 물자 이동을 나누어 안내할 수 있었다.'
    ][level(state,'C')]),
    day22PumpReport: state => has(state,'rental')
      ? person('강태식','경비반장','“운영 담당자하고 연결됐습니다. 설치 때 남긴 위치로 바로 확인하겠답니다.”')
      : has(state,'replace') ? person('점검 기사','전문 점검 업체','“새 펌프의 시운전 기록은 받았습니다. 지금 수위와 운전 상태를 대조하겠습니다.”')
      : person('강태식','경비반장','“기존 펌프 기록으로 업체에 연락했습니다. 추가 장비가 있는 것처럼 잡지는 않겠습니다.”'),
    day22DrainReport: state => narrator(has(state,'drain')
      ? '근무자는 완료 표시가 붙은 구간과 추가 확인이 필요한 구간을 나눠 보고했다.'
      : '근무자는 아직 보강하지 않은 배수 경로와 전기 구역을 도면에 표시했다. 전문 점검에서 확인할 범위로 함께 전달했다.'),
    day22ResidentReport: state => text(has(state,'residents')
      ? '“대체 장소 담당자에게도 알렸습니다. 준비된 물품과 이용 시간은 그대로 쓸 수 있습니다.”'
      : '“기본 안내한 대체 장소는 이용할 수 있습니다. 오래 머무를 분들이 있으면 필요한 물품은 따로 확인해야겠습니다.”'),
    day22FocusReturn: state => narrator({
      facility:'업체가 보고 사진의 표시를 읽고 어느 문인지 다시 묻지 않았다. 어제 맞춰둔 위치 이름이 같은 기록에 있었다.',
      residents:'명숙이 이동 도움을 확인해 둔 세대를 짚었다. 지혜에게는 이용 경로가 함께 전달됐다.',
      logistics:'관리사무소가 적어 둔 수령 위치를 보고 성호가 안전한 지상 하역 구간으로 갔다.'
    }[b(state).day21Focus] || '시설·주민 연락·차량 안내는 기본 인계 기록에 따라 각 담당자가 이어갔다.'),
    day22FacilityReturn: state => narrator(level(state,'C')===2 && level(state,'E')>=1
      ? '근무자는 고정된 하역 표시와 현관 안내를 확인하고 다음 연락으로 넘어갔다.'
      : '근무자는 안전한 물품 보관·수령 위치를 한 번 더 맞췄다. 정비되지 않은 곳에는 임시 안내와 확인 시간을 함께 남겼다.'),
    day23InitialWater: state => text(b(state).damage==='small'
      ? '“야간 기록 받았습니다. 물은 설비 주변의 확인 구역에 머물러 있습니다. 차량 진입은 계속 막고 있습니다.”'
      : b(state).damage==='partial' ? '“야간 기록 받았습니다. 지하 창고 앞 일부가 젖었습니다. 차량 진입은 계속 막고 있습니다.”'
      : '“야간 기록 받았습니다. 지하 창고 앞에서 더 넓은 구역으로 물이 들어왔습니다. 차량 진입은 계속 막고 있습니다.”'),
    day23PumpReport: state => text(has(state,'rental')
      ? '“계약한 운영 담당자가 장비를 확인하고 있습니다. 바뀐 수위는 여기로 계속 보내주십시오.”'
      : has(state,'replace') ? '“교체한 펌프는 운전 중입니다. 물이 들어오는 양과 수위를 함께 보고 있습니다.”'
      : '“기존 펌프 상태부터 확인하겠습니다. 추가 장비가 필요하면 가능한 지원 범위를 다시 알려드리겠습니다.”'),
    day23DrainReport: state => narrator(has(state,'drain')
      ? '보고서에는 배수 경로·전기 구역의 보강 완료 표시가 있었다. 도윤은 그 밖에 남은 확인 구역을 짚었다.'
      : '배수 경로와 전기 구역에는 추가 확인할 곳이 남아 있었다. 도윤은 전문 점검 보고가 올 자리와 통제 범위를 함께 표시했다.'),
    day23ResidentReadiness: state => narrator((has(state,'residents')
      ? '선우는 확인해 둔 운영 시간과 준비 물품을 보고 다음 연락을 받았다. '
      : '선우는 장소 담당자에게 남은 이용 시간과 물품을 다시 확인했다. 기본 이용은 계속되고 있었다. ')
      +(b(state).seniorOpen ? '오늘 이용을 확인한 안전한 경로당의 보고였다.' : '공용실과 이용할 수 없는 경로당을 제외한, 안전한 외부 연계 장소의 보고였다.')),
    day23EveningWater: state => text(b(state).damage==='small'
      ? '“확인 구역 안 수위가 높아졌습니다. 장비 운전은 담당자가 보고 있습니다. 예방 통제는 넓게 유지하겠습니다.”'
      : b(state).damage==='partial' ? '“창고 일부와 주차장 한 구역이 젖었습니다. 장비 운전은 담당자가 보고 있습니다. 통제 범위를 다시 표시하겠습니다.”'
      : '“창고 쪽에서 물이 더 넓게 번졌습니다. 장비 운전은 담당자가 보고 있고, 통제 범위는 넓혀야 합니다.”'),
    day23FacilityPhoto: state => narrator(b(state).damage==='small'
      ? '도윤은 안전한 지상 통제 지점에서 근무자가 받은 사진을 같이 봤다. 설비 주변 확인 구역의 수위 표시가 새로 그어져 있었다.'
      : '도윤은 안전한 지상 통제 지점에서 근무자가 받은 사진을 같이 봤다. 물이 지나간 자국 위로 새 확인선이 그어져 있었다.'),
    day23FacilityReport: state => narrator(b(state).damage==='small'
      ? '사진이 도착하자 도윤은 앞 기록과 나란히 놓았다. 예방 통제 범위를 확인하고 성호에게 최신 안내를 전했다.'
      : '사진이 도착하자 도윤은 앞 기록과 나란히 놓았다. 통제 구역의 새 표시를 보고 성호에게 안내를 바꿔달라고 연락했다.'),
    day23EmergencyRecord: state => narrator({
      inspection:'기존 계약 밖에서 추가로 확인할 설비와 젖은 물품의 목록이 붙었다. 전문업체와 맞춘 초기 복구 점검 일정도 다음 담당자에게 넘어갔다.',
      venue:'기본 야간 체류와 필수품은 확보돼 있었다. 추가 휴게 구역·생활 안내 운영·편의물품을 오전까지 이어갈 담당자와 시간을 확인했다.',
      contact:'추가 연락·물품 수령 지원의 담당 범위를 기록에 붙였다. 지원은 안전한 지상 장소에서 교대로 이어졌다.',
      hold:'기존 담당자는 안전한 야간 체류와 필수 물품을 확인했다. 기본 사람 확인·통제·전문 대응 요청을 이어가고, 잔액은 복구 견적을 확인한 뒤 쓰도록 남겼다.'
    }[b(state).emergencyChoice] || '현재 확보한 계약과 기본 외부 연계 범위를 기록에서 확인했다. 기본 사람 확인과 통제는 계속됐다.'),
    day23DamageResult: state => narrator({
      small:'확인한 설비 구역을 넘어 물이 번지지 않았다. 바닥에는 젖은 자국이 남았고, 전문 확인 전까지 사용 제한 표시는 그대로였다.',
      partial:'창고 일부 물품과 주차장 한 구역이 젖었다. 젖은 물품의 분류와 설비 점검이 끝나기 전까지 사용 제한 표시는 남겨두었다.',
      broad:'물이 넓은 구역에 남았다. 근무자는 지하주차장 사용 제한 범위를 다시 표시했다. 전문 점검과 구역별 복구 일정이 더 필요했다.'
    }[b(state).damage] || '마지막 표시 밖으로 물이 더 번지지는 않았다. 피해 범위는 전문 확인 기록을 기다리고, 사용 제한 표시는 그대로 남겼다.')
  };
})();

// Display-only weather cues. Fixed arrays/indices and gameplay data are unchanged.
// Explicit beats make back/restore deterministic rather than relying on previous frames.
(() => {
  const [day21, day22, day23] = window.ACT4_DAYS;
  const mark = (scene, time, rain) => { scene.weather = {time, rain}; };
  day21.scenes.forEach(s => mark(s, 'day', 'light'));
  day21.choices.forEach(c => c.post.forEach(s => mark(s, 'day', 'light')));
  day21.after.forEach((s, i) => mark(s, i >= 3 ? 'dusk' : 'day', 'light'));
  day22.scenes.forEach(s => mark(s, 'day', 'heavy'));
  day22.choices.forEach(c => c.post.forEach(s => mark(s, 'day', 'heavy')));
  day22.after.forEach((s, i) => mark(s, i >= 18 ? 'dusk' : 'day', i >= 18 ? 'light' : 'heavy'));
  day23.scenes.forEach((s, i) => mark(s, i < 12 ? 'night' : i < 21 ? 'day' : 'night', 'heavy'));
  day23.choices.forEach(c => c.post.forEach(s => mark(s, 'night', 'heavy')));
  day23.after.forEach(s => mark(s, 'night', 'heavy'));
})();
