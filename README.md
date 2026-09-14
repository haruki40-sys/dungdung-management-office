# 오늘도 관리사무소

아파트 관리사무소를 배경으로 주민·직원과 대화하고 선택을 내리는 브라우저 게임입니다.

## 실행
GitHub Pages 또는 일반 정적 웹 서버에서 `index.html`을 시작 파일로 사용합니다.

외부 CDN을 사용하지 않으며 CSS, JavaScript, 이미지 모두 상대경로로 연결됩니다.

## 구조
- `index.html` — 게임 진입점
- `css/game.css` — UI/레이아웃
- `js/characters.js` — 캐릭터 및 스프라이트 경로
- `js/events.js` — 이벤트 데이터
- `js/game.js` — 게임 진행/선택/저장 로직
- `assets/backgrounds/` — 사용 중인 배경
- `assets/characters/` — 사용 중인 캐릭터 스프라이트
- `saves/save-sample.json` — 세이브 포맷 참고

## 저장
브라우저 저장 키는 기존과 동일하게 `office_v10_apply`를 사용합니다.
JSON 세이브 파일 내보내기/불러오기 기능도 유지합니다.
