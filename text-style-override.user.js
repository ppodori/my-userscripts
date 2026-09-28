// ==UserScript==
// @name         Text Style Override
// @namespace    https://github.com/ppodori
// @author       ppodori
// @homepageURL  https://github.com/ppodori/my-userscripts
// @version      2.9
// @description  자간 조절 및 글씨 외곽선 적용
// @match        *://*/*
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ppodori/my-userscripts/main/text-style-override.user.js
// @downloadURL  https://raw.githubusercontent.com/ppodori/my-userscripts/main/text-style-override.user.js
// ==/UserScript==
(function () {
    'use strict';

    const TARGET_SELECTORS = ['body', 'button', 'input', 'select', 'textarea'];
    const STYLE_RULES = [
        'letter-spacing: -0.2px !important;',
        '-webkit-text-stroke-width: 0.1px !important;',
    ];

    const globalCSS = `
        ${TARGET_SELECTORS.join(', ')} {
            ${STYLE_RULES.join('\n            ')}
        }
    `;

    const style = document.createElement('style');
    style.textContent = globalCSS;
    (document.head || document.documentElement).appendChild(style);
})();
