# Text Style Override (iOS Safari Optimized)

iOS Safari 환경에서 웹페이지의 글씨 가독성을 높이기 위해 자간을 조절하고 글씨에 얇은 외곽선을 적용하는 유저스크립트입니다. 
`wblock` 등의 사파리 확장 프로그램에서 가볍게 돌아가도록 렌더링 부하를 최적화했습니다.

## ✨ 주요 기능
* **자간 조절:** `letter-spacing`을 적용하여 텍스트를 더 밀도 있고 읽기 편하게 만들어 줍니다.
* **글씨 외곽선:** `-webkit-text-stroke-width`을 적용하여 폰트를 더 선명하고 또렷하게 만듭니다.
* **성능 최적화:** 모든 요소(`*`)가 아닌 주요 텍스트 태그(`body`, `button`, `input` 등)에만 스타일을 적용하여 모바일 기기의 배터리 소모와 렌더링 지연을 최소화했습니다.

## 🚀 설치 방법 (wblock 기준)
1. 아이폰에서 `wblock` 앱 설정으로 들어갑니다.
2. 스크립트 추가 메뉴에서 **URL로 추가(또는 URL에서 다운로드)** 를 선택합니다.
3. 아래의 Raw 링크를 복사하여 붙여넣고 설치합니다.
   ```
   https://raw.githubusercontent.com/ppodori/my-userscripts/main/text-style-override.user.js
