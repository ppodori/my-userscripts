// ==UserScript==
// @name         Text Style Override
// @namespace    https://github.com/ppodori
// @author       ppodori
// @homepageURL  https://github.com/ppodori/my-userscripts
// @version      2.5
// @description  자간 조절 및 글씨 외곽선 적용 (+ FM코리아 제목 링크 색상 #111로 교체)
// @match        *://*/*
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ppodori/my-userscripts/main/text-style-override.user.js
// @downloadURL  https://raw.githubusercontent.com/ppodori/my-userscripts/main/text-style-override.user.js
// ==/UserScript==
(function () {
    'use strict';

    const isFM = /(^|\.)fmkorea\.com$/.test(location.hostname);

    /* 전역: 자간 조절 및 글씨 외곽선 */
    const globalCSS = `
        body, button, input, select, textarea {
            letter-spacing: -0.5px !important;
            -webkit-text-stroke-width: 0.15px !important;
        }
    `;

    /* FM코리아 전용: 제목 및 카테고리 링크 색상 */
    const fmCSS = `
        .fm_best_widget .title a,
        h3.title a,
        .hotdeal_info a,
        .hotdeal_info span,
        .category a {
            color: #111 !important;
        }
    `;

    const style = document.createElement('style');
    style.textContent = globalCSS + (isFM ? fmCSS : '');
    (document.head || document.documentElement).appendChild(style);
})();
