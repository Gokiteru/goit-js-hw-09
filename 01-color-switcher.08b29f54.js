var t,e=document.querySelector(".data-start"),a=document.querySelector(".data-stop");e.addEventListener("click",(function(){e.disabled=!0,a.disabled=!1,t=setInterval((function(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),100)})),a.addEventListener("click",(function(){e.disabled=!1,a.disabled=!0,clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.08b29f54.js.map
