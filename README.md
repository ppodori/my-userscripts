# Text Style Override

웹페이지의 글씨 가독성을 높이기 위해 자간을 줄이고 얇은 외곽선을 적용하는 유저스크립트입니다.

## ✨ 주요 기능

* **자간 조절:** `letter-spacing: -0.5px`로 텍스트를 조금 더 촘촘하게 만듭니다.
* **글씨 외곽선:** `-webkit-text-stroke-width: 0.15px`로 두께는 거의 그대로 두고 획만 또렷하게 합니다.
* **FM코리아 링크 색상:** FM코리아에서만 게시글 제목·카테고리·핫딜 정보 링크 색상을 `#111`로 바꿉니다. 다른 사이트에는 적용되지 않습니다.
* **가벼운 적용 범위:** 모든 요소(`*`)가 아닌 `body`, `button`, `input` 등 주요 태그에만 스타일을 적용해 렌더링 부담을 줄였습니다.

## 🚀 설치 방법 (wblock 기준)

1. `wblock` 앱 설정으로 들어갑니다.
2. 스크립트 추가 메뉴에서 **URL로 추가(또는 URL에서 다운로드)** 를 선택합니다.
3. 아래 Raw 링크를 붙여넣고 설치합니다.
   ```
   https://raw.githubusercontent.com/ppodori/my-userscripts/main/text-style-override.user.js
   ```
