// ==UserScript==
// @name         Text Style Override (iOS Safari Optimized)
// @namespace    https://github.com/ppodori
// @author       ppodori
// @homepageURL  https://github.com/ppodori/my-userscripts
// @version      2.0
// @description  자간 조절 및 글씨 외곽선 적용 (+ FM코리아 제목 링크 폰트 Black으로 교체)
// @match        *://*/*
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/ppodori/my-userscripts/main/text-style-override.user.js
// @downloadURL  https://raw.githubusercontent.com/ppodori/my-userscripts/main/text-style-override.user.js
// ==/UserScript==
(function () {
    'use strict';
    const style = document.createElement('style');
    style.textContent = `
        /* 전역: 자간 조절 및 글씨 외곽선 */
        body, 
        button, 
        input, 
        select, 
        textarea { 
            letter-spacing: -0.5px !important; 
            -webkit-text-stroke-width: 0.45px !important; 
        }

        /* FM Korea: 제목 및 카테고리 링크 색상 */
        :is(.fm_best_widget, .fm_best_widget .li_visited) .title a,
        h3.title a,
        .hotdeal_info a,
        .hotdeal_info span,
        .category a {
            color: #333 !important;
        }
    `;
    
    const target = document.head || document.documentElement;
    target.appendChild(style);
})();
