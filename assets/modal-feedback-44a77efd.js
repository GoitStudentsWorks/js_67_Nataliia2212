import{e as h,b as L,a as p,i as u}from"./vendor-4357aed0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector(".js-menu-container")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e);function e(){t.modal.classList.toggle("is-hidden")}})();(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),a=()=>{const o=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open"),L[o?"enableBodyScroll":"disableBodyScroll"](document.body)};e.addEventListener("click",a),n.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),h(document.body))})})();const y=t=>{const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return e}},S=(t,e)=>{const n=JSON.stringify(e);localStorage.setItem(t,n)},m={quoteText:document.querySelector(".js__quote-text"),quoteAuthor:document.querySelector(".js__quote-author")},v="https://energyflow.b.goit.study/api/quote",d="currentQuote";let l=null;async function q(){const e=new Date().getDate(),n=y(d);n&&e!==n.currentDay||n===null?(await b(e),g(),console.log("A new day has been come.")):(g(),console.log("It is the same day, yet."))}q();async function b(t){const{data:e}=await p.get(v);S(d,{currentDay:t,data:e})}function g(){l=y(d),m.quoteText.textContent=l.data.quote,m.quoteAuthor.textContent=l.data.author}const c={openModalBtn:document.querySelector(".modal-give-rating"),closeModalBtn:document.querySelector("[data-modal-close-btn]"),modal:document.querySelector("[data-modal]")};console.log(c.closeModalBtn);c.closeModalBtn.addEventListener("click",M);function M(){c.modal.classList.add("is-hidden"),console.log("close")}let i=null;const f=document.querySelectorAll(".star"),E=document.querySelector(".input-email"),B=document.querySelector(".modal-input-comment");f.forEach(t=>{t.addEventListener("click",()=>{const e=t.classList.contains("active");if(f.forEach(n=>n.classList.remove("active")),!e){t.classList.add("active");let n=t.previousElementSibling;for(;n;)n.classList.add("active"),n=n.previousElementSibling}i=t.previousElementSibling.value,console.log("Вибрана опція:",i)})});document.querySelector(".form-rating").addEventListener("submit",function(t){t.preventDefault();const e=E.value,n=B.value;if(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e)){const o=t.target.parentNode.dataset.id,s={rating:i,email:e,review:n};console.log(o),w(o,s).then(()=>{c.modal.classList.add("is-hidden"),c.openModalBtn.id}).catch(r=>{u.error({position:"topRight",message:r.response.data.message})})}else u.error({position:"topRight",message:"Неправильний формат електронної пошти!"})});async function w(t,e){const n="https://energyflow.b.goit.study/api",a=`/exercises/${t}/rating`,o=n+a;return p.patch(o,e)}c.openModalBtn.addEventListener("click",t=>{const e=t.target.dataset.id;A(e)});function A(t){c.modal.classList.remove("visually-hidden"),c.modal.firstElementChild.setAttribute("data-id",t)}export{y as l,S as s};
//# sourceMappingURL=modal-feedback-44a77efd.js.map