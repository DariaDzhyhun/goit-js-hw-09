!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("body"),n=document.querySelector("button[data-stop]"),o=0;function a(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.addEventListener("click",(function(){t.disabled=!0,o=setInterval(a,1e3)})),n.addEventListener("click",(function(){clearInterval(o),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.a0833cb9.js.map