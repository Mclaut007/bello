!function(){"use strict";(function(){const e=document.querySelector(".header"),t=document.querySelector(".header__menu"),n=document.querySelector(".header__menu-icon"),o=document.body;n.addEventListener("click",(function(){if(n.classList.toggle("_menu-open"),t.classList.toggle("_menu-open"),t.classList.contains("_menu-open")){const t=window.innerWidth-document.documentElement.clientWidth+"px";o.style.paddingRight=t,e.style.paddingRight=t}else o.removeAttribute("style"),e.removeAttribute("style");o.classList.toggle("_lock")})),document.addEventListener("keydown",(function(s){"Escape"==s.code&&(t.classList.remove("_menu-open"),n.classList.remove("_menu-open"),o.classList.remove("_lock"),o.removeAttribute("style"),e.removeAttribute("style"))})),t.addEventListener("click",(function(s){(!s.target.closest(".menu__list")||s.target.closest(".menu__list a")||s.target.closest(".menu__list button"))&&(t.classList.remove("_menu-open"),n.classList.remove("_menu-open"),o.classList.remove("_lock"),o.removeAttribute("style"),e.removeAttribute("style"))}))})(),function(){const e=document.querySelector(".header__log-in"),t=document.querySelector(".menu__list"),n=document.querySelector(".header__button"),o=document.createElement("li");o.style.fontSize="1.125rem";const s=window.matchMedia("(max-width: 30rem)");function c(s){s.matches?(o.append(e),t.append(o)):(n.insertAdjacentElement("beforebegin",e),o.remove())}s.addEventListener("change",c),c(s)}()}();