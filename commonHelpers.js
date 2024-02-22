import{a as y,S as w,i as u}from"./assets/vendor-527658dd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const L="https://pixabay.com/api/",S="36399234-af15385039238a4844768ffbd";class b{constructor(){this.searchQuery="",this.queryPage=1}async getNews(){const s=await y.get(`${L}?key=${S}&q=${this.searchQuery}&image_type="photo"&orientation="horizontal"&safesearch=true&per_page=15&page=${this.queryPage}`);return this.incrementPage(),await s.data}resetPage(){this.queryPage=1}incrementPage(){this.queryPage+=1}}function h(r){return r.map(({webformatURL:s,largeImageURL:n,tags:c,likes:e,views:t,comments:a,downloads:g})=>`<li class="list-item">
                    <a class="list-link" href="${n}"><img class="list-img" src="${s}" alt="${c}"/></a>
                    <div class="list-conteiner">
                        <div class="list-wrappar">
                            <b class="list-pretext">Likes</b>
                            <p class="list-text">${e}</p>
                        </div>
                        <div class="list-wrappar">
                            <b class="list-pretext">Views</b>
                            <p class="list-text">${t}</p>
                        </div>
                        <div class="list-wrappar">
                            <b class="list-pretext"> Comments</b>
                            <p class="list-text">${a}</p>
                        </div>
                        <div class="list-wrappar">
                            <b class="list-pretext"> Downloads</b>
                            <p class="list-text">${g}</p>
                        </div>
                    </div>
                </li>`).join("")}let p=new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const i=new b,o={formSearch:document.querySelector(".form"),listForm:document.querySelector(".list-form"),spinner:document.querySelector(".conteiner-loader"),btnLoadMore:document.querySelector(".button-loadMore"),textLoading:document.querySelector(".text-load")};o.formSearch.addEventListener("submit",v);o.btnLoadMore.addEventListener("click",P);async function v(r){r.preventDefault(),i.searchQuery=r.currentTarget.elements.searchQuery.value.trim(),m(),q(),i.resetPage();try{const{hits:s}=await i.getNews(i.searchQuery);if(!s.length||!i.searchQuery)throw new Error("No data");o.listForm.innerHTML=h(s),f(),l(),p.refresh()}catch{M()}finally{x()}}async function P(){d(),m();try{const{hits:r,totalHits:s}=await i.getNews(i.searchQuery);if(Math.ceil(s/r)===i.queryPage)throw new Error("Data end!");o.listForm.insertAdjacentHTML("beforeend",h(r)),N(),f(),l(),p.refresh()}catch{E()}}function x(){o.formSearch.reset()}function q(){o.listForm.innerHTML=""}function M(r){u.error({position:"topRight",title:"Error Search",message:"Sorry, there are no images matching your search query. Please try again!"}),l(),d()}function E(){u.info({position:"topRight",title:"Error End API Search",message:"We`re sorry, but you`ve reached the end of search results."}),l(),d()}function f(){o.btnLoadMore.classList.remove("hidden")}function d(){o.btnLoadMore.classList.add("hidden")}function m(){o.textLoading.classList.remove("hidden")}function l(){o.textLoading.classList.add("hidden")}function N(){const r=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
