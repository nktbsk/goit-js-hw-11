import{a as d,i,S as m}from"./assets/vendor-eed0c909.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="45565768-ade7924c670b62e50b9d023f8",f="https://pixabay.com/api/";async function g(a,t=1,s=12){const o=await d.get(f,{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s}});return console.log(o.data),o.data}function y(a){return a.map(({webformatURL:t,largeImageURL:s,tags:o,likes:e,views:r,comments:n,downloads:u})=>`
        <li class="gallery-item">
          <a class="a-img" href="${s}">
            <img class="gallery-img" src="${t}" alt="${o}" loading="lazy" />
          </a>
          <div class="info">
            <p class="p-likes" >Likes ${e}</p>
            <p class="p-views" >Views ${r}</p>
            <p class="p-comments" >Comments ${n}</p>
            <p class="p-downloads" >Downloads ${u}</p>
          </div>
        </li>`).join("")}const h=document.querySelector("#search-form"),l=document.querySelector(".gallery"),c=document.querySelector("#loader");h.addEventListener("submit",L);async function L(a){a.preventDefault();const t=a.currentTarget.elements.query.value.trim();if(!t){i.error({title:"Error",message:"Search query cannot be empty"});return}try{c.classList.remove("hidden"),l.innerHTML="";const{hits:s}=await g(t);if(s.length===0){i.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}l.innerHTML=y(s),new m(".gallery a").refresh()}catch{i.error({title:"Error",message:"Something went wrong, please try again later"})}finally{c.classList.add("hidden")}}
//# sourceMappingURL=commonHelpers.js.map
