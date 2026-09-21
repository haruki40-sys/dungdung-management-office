# 오늘도 관리사무소 v1.3.1

아파트 관리사무소의 첫 7일을 따라가며 주민의 사정을 듣고, 선택과 관리계획을 남기는 브라우저 게임입니다.

## 실행

GitHub Pages 또는 일반 정적 웹 서버에서 `index.html`을 시작 파일로 사용합니다. 외부 CDN 없이 모든 파일을 상대경로로 불러옵니다.

## 구조

- `index.html` — 게임 진입점
- `css/v1.3.1.css` — 화면 스타일
- `js/game.js` — 사건 데이터, 진행, 선택, 저장 로직
- `assets/` — 배경, 캐릭터, 컷인, 소품 이미지와 배경음악
- `saves/save-sample.json` — 진행 상태 예시

## 저장

- 브라우저 저장 키: `office_v10_apply` (기존 키 유지)
- v1.3.1 저장 구조: `schema: 2`
- v1.2.1 형식이 발견되면 첫 진행 시 `office_v10_apply_legacy_v1_2_1`에 원본을 백업합니다.
- 이야기 구조가 전면 변경되어 v1.2.1의 진행 지점은 v1.3.1 장면으로 직접 변환하지 않습니다.
- 음악 설정 키: `office_audio_enabled` (진행 기록과 분리된 켜기·끄기 설정)

## 음악

- `Forget Me Not` (looped) — Kistol
- 라이선스: CC0
- 출처: https://opengameart.org/content/forget-me-not
