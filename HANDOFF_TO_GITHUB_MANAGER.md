# 「오늘도 관리사무소」 GitHub 게시 전달서

- 저장소: `haruki40-sys/dungdung-management-office`
- 대상 브랜치: `main`
- 현재 공개 버전: `v1.3.0`
- 게시 요청 버전: `v1.3.1`
- 배포 기준일: `2026-09-21`
- 공개 주소: `https://haruki40-sys.github.io/dungdung-management-office/`

## 1. 새 버전 번호

`v1.3.1`

## 2. 주요 변경사항

- 1막을 첫 출근부터 7일차까지 이어지는 대화·선택형 진행으로 전면 개편
- 주화자 중심 캐릭터 배치, 동석자 축소 표시, 말풍선 화살표 방향 정리
- 열쇠·유모차·보관선·택배 상자·연습표·우산·사탕·차량·화분·고양이·사료 장면을 별도 컷인으로 전환
- 컷인 배경 흐림, 흰색 외곽선, 그림자와 여백을 적용해 본 배경과 구분
- 매일 결과를 한 개의 결과 문장과 회상 문장으로 정리하고 도윤을 중앙에 크게 배치
- 마지막 결과 흐름을 `1단계 관리계획 → 2단계 관리 결과 → 3단계 1막 전체 회상`으로 정리
- 1막 전체 선택을 원칙·관계·실행 성향 삼각형에 반영
- 진행 상태 자동 저장과 새로고침 후 이어보기를 추가
- 프롤로그 다음에 1일차 구분 화면을 배치하고, 새로운 날마다 호흡을 나누는 구분 화면을 추가
- 관리 결과와 1막 전체 관리 성향 화면을 이미지 중심으로 보강하고 결과 흐름을 정리
- 1막 마무리 대사를 관리계획으로 자연스럽게 이어지도록 수정
- CC0 배경음악 `Forget Me Not`을 낮은 음량으로 반복 재생하고 음악 켜기·끄기 기능을 추가

## 3. 신규·수정·삭제 파일 목록

### 신규

- `HANDOFF_TO_GITHUB_MANAGER.md`
- `assets/audio/forget_me_not_looped.ogg`
- `assets/1막_그래픽_v0.2/backgrounds/bg_corridor_v0.1.png`
- `assets/1막_그래픽_v0.2/backgrounds/bg_exterior_v0.1.png`
- `assets/1막_그래픽_v0.2/backgrounds/bg_garden_v0.1.png`
- `assets/1막_그래픽_v0.2/backgrounds/bg_lobby_v0.1.png`
- `assets/1막_그래픽_v0.2/backgrounds/bg_office_v0.1.png`
- `assets/1막_그래픽_v0.2/backgrounds/bg_parking_v0.1.png`
- `assets/1막_그래픽_v0.2/backgrounds/map_after_v0.1.png`
- `assets/1막_그래픽_v0.2/backgrounds/map_before_v0.1.png`
- `assets/1막_그래픽_v0.2/characters/chairman_sheet.png`
- `assets/1막_그래픽_v0.2/characters/doyun_sheet.png`
- `assets/1막_그래픽_v0.2/characters/female1_sheet.png`
- `assets/1막_그래픽_v0.2/characters/female2_sheet.png`
- `assets/1막_그래픽_v0.2/characters/grandma_sheet.png`
- `assets/1막_그래픽_v0.2/characters/male1_sheet.png`
- `assets/1막_그래픽_v0.2/characters/male2_sheet.png`
- `assets/1막_그래픽_v0.2/characters/schoolgirl_sheet.png`
- `assets/1막_그래픽_v0.2/characters/security_sheet.png`
- `assets/1막_그래픽_v0.4/backgrounds/bg_garden_rain_v0.1.png`
- `assets/1막_그래픽_v0.4/cutins/cutin_keys_hand_v0.1.png`
- `assets/1막_그래픽_v0.4/cutins/cutin_umbrella_back_v0.2.png`
- `assets/1막_그래픽_v0.4/props/prop_atlas_care_v0.1.png`
- `assets/1막_그래픽_v0.4/props/prop_atlas_daily_v0.1.png`
- `assets/1막_그래픽_v0.4/props/prop_atlas_life_v0.1.png`

### 수정

- `index.html`
- `css/v1.3.1.css`
- `js/game.js`
- `README.md`
- `saves/save-sample.json`

### 삭제

- `assets/backgrounds/bg.png`
- `assets/characters/boy_sheet.png`
- `assets/characters/chairman_sheet.png`
- `assets/characters/coordinator_sheet.png`
- `assets/characters/doyun_sheet.png`
- `assets/characters/facility_sheet.png`
- `assets/characters/female1_sheet.png`
- `assets/characters/female2_sheet.png`
- `assets/characters/female3_sheet.png`
- `assets/characters/grandma_sheet.png`
- `assets/characters/grandpa_sheet.png`
- `assets/characters/male1_sheet.png`
- `assets/characters/male2_sheet.png`
- `assets/characters/npc-atlas-v12.webp`
- `assets/characters/schoolgirl_sheet.png`
- `assets/characters/security_sheet.png`
- `assets/characters/v12/boy.svg`
- `assets/characters/v12/choi.svg`
- `assets/characters/v12/girl.svg`
- `assets/characters/v12/grandma.svg`
- `assets/characters/v12/grandpa.svg`
- `assets/characters/v12/han.svg`
- `assets/characters/v12/kim.svg`
- `assets/characters/v12/lee.svg`
- `assets/characters/v12/odong.svg`
- `assets/characters/v12/park.svg`
- `assets/characters/v12/security.svg`
- `assets/characters/v12/seoji.svg`
- `assets/characters/v12/yoon.svg`
- `css/v12.css`
- `js/characters.js`
- `js/events.js`

## 4. 테스트 결과와 알려진 문제

### 테스트 결과

- 로컬 배포 경로의 `index.html`에서 전체 1막 자동 진행 완료
- 7일 구성, 선택 사건 5개, 비선택 사건 2개 확인
- 컷인 12종의 연결, 흐린 배경, 흰 외곽선, 화면 이탈 여부 확인
- 일일 결과의 도윤 중앙 배치 및 중립 자세 확인
- 관리계획, 관리 결과, 1막 전체 회상 화면 분리 확인
- 배포 폴더 루트 파일 제한, 자산 누락, 콘솔 오류 확인
- v1.2.1 저장 기록 백업, v1.3.1 자동 저장, 새로고침 후 이어보기 확인
- 첫 사용자 입력 뒤 배경음악 재생, 반복 재생, 음악 켜기·끄기와 음량 설정 확인

### 알려진 문제

- v1.2.1과 v1.3.1은 사건 및 상태 구조가 달라 기존 진행 지점을 새 장면으로 직접 변환하지 않습니다.
- v1.2.1의 빠른 저장·JSON 내보내기·불러오기 버튼은 v1.3.1에서 제거되고 자동 저장으로 대체됩니다.
- 브라우저 자동 재생 정책에 따라 배경음악은 첫 클릭 또는 탭 이후 시작합니다.

## 5. 기존 저장 데이터 호환 여부

부분 호환입니다.

- 기존 로컬 저장 키 `office_v10_apply`는 변경하지 않습니다.
- v1.2.1 형식(`idx` 필드 포함)을 발견하면 사용자가 v1.3.1을 처음 진행하는 시점에 원본 JSON을 `office_v10_apply_legacy_v1_2_1`로 자동 백업합니다.
- v1.2.1 진행 위치는 v1.3.1의 7일 서사로 직접 승계하지 않고 새 게임으로 시작합니다.
- 필요 시 개발자 도구에서 백업 키의 값을 다시 `office_v10_apply`에 복사하면 v1.2.1 기록을 복원할 수 있습니다.

## 6. 로컬 저장 키 및 세이브 구조 변경 여부

### 유지 키

- `office_v10_apply`

### 신규 백업 키

- `office_v10_apply_legacy_v1_2_1`

### 신규 음악 설정 키

- `office_audio_enabled`
- 배경음악 켜기·끄기 선택만 저장하며 게임 진행 기록과는 분리합니다.
- 기존 세이브 구조와 `office_v10_apply` 데이터에는 영향을 주지 않습니다.

### v1.3.1 저장 구조

```json
{
  "schema": 2,
  "version": "v1.3.1",
  "dayIndex": 0,
  "sceneIndex": 0,
  "postIndex": 0,
  "epiIndex": 0,
  "view": "cover",
  "selected": 0,
  "answers": {},
  "assignments": {},
  "log": []
}
```

## 게시 시 유의사항

- 이 폴더의 내용을 저장소 `main` 브랜치 루트에 그대로 반영합니다.
- 삭제 목록의 기존 파일이 저장소에 남지 않도록 확인합니다.
- 배포 후 공개 주소에서 강력 새로고침한 뒤 첫 화면, 컷인, 3단계 결과, 새로고침 이어보기를 재확인합니다.
