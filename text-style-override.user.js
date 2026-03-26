// ==UserScript==
// @name         Text Style Override (iOS Safari Optimized)
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  자간 조절 및 글씨 외곽선 적용 (성능 최적화 및 가독성 개선)
// @match        *://*/*
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/ppodori/my-userscripts/main/text-style-override.user.js
// @downloadURL  https://raw.githubusercontent.com/ppodori/my-userscripts/main/text-style-override.user.js
// ==/UserScript==

(function () {
    'use strict';

    const style = document.createElement('style');

    style.textContent = `
        body, 
        button, 
        input, 
        select, 
        textarea { 
            letter-spacing: -0.5px !important; 
            -webkit-text-stroke-width: 0.5px !important; 
        }
    `;
    
    const target = document.head || document.documentElement;
    target.appendChild(style);
})();
