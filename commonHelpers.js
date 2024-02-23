import{a as w,S as L,i as u}from"./assets/vendor-527658dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const S="https://pixabay.com/api/",b="36399234-af15385039238a4844768ffbd";class P{constructor(){this.searchQuery="",this.queryPage=1,this.perPage=15}async getNews(){const t=await w.get(`${S}?key=${b}&q=${this.searchQuery}&image_type="photo"&orientation="horizontal"&safesearch=true&per_page=${this.perPage}&page=${this.queryPage}`);return this.incrementPage(),await t.data}resetPage(){this.queryPage=1}incrementPage(){this.queryPage+=1}}function h(s){return s.map(({webformatURL:t,largeImageURL:a,tags:c,likes:e,views:r,comments:n,downloads:y})=>`<li class="list-item">
                    <a class="list-link" href="${a}"><img class="list-img" src="${t}" alt="${c}"/></a>
                    <div class="list-conteiner">
                        <div class="list-wrappar">
                            <b class="list-pretext">Likes</b>
                            <p class="list-text">${e}</p>
                        </div>
                        <div class="list-wrappar">
                            <b class="list-pretext">Views</b>
                            <p class="list-text">${r}</p>
                        </div>
                        <div class="list-wrappar">
                            <b class="list-pretext"> Comments</b>
                            <p class="list-text">${n}</p>
                        </div>
                        <div class="list-wrappar">
                            <b class="list-pretext"> Downloads</b>
                            <p class="list-text">${y}</p>
                        </div>
                    </div>
                </li>`).join("")}let p=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const i=new P,o={formSearch:document.querySelector(".form"),listForm:document.querySelector(".list-form"),spinner:document.querySelector(".conteiner-loader"),btnLoadMore:document.querySelector(".button-loadMore"),textLoading:document.querySelector(".text-load")};o.formSearch.addEventListener("submit",v);o.btnLoadMore.addEventListener("click",x);async function v(s){s.preventDefault(),i.searchQuery=s.currentTarget.elements.searchQuery.value.trim(),m(),M(),i.resetPage();try{const{hits:t}=await i.getNews(i.searchQuery);if(!t.length||!i.searchQuery)throw new Error("No more data");if(o.listForm.innerHTML=h(t),i.perPage>t.length)throw new Error("Data end!");l(),g(),p.refresh()}catch(t){t.message==="Data end!"?f():E()}finally{q()}}async function x(){m(),d();try{const{hits:s,totalHits:t}=await i.getNews(i.searchQuery),a=Math.ceil(t/s.length);if(console.log(a),a===i.queryPage)throw new Error("Data end!");o.listForm.insertAdjacentHTML("beforeend",h(s)),$(),l(),g(),p.refresh()}catch{f()}}function q(){o.formSearch.reset()}function M(){o.listForm.innerHTML=""}function E(){u.error({position:"topRight",title:"Error Search",message:"Sorry, there are no images matching your search query. Please try again!"}),l(),d()}function f(){u.info({position:"topRight",title:"Error End API Search",message:"We`re sorry, but you`ve reached the end of search results."}),l(),d()}function g(){o.btnLoadMore.classList.remove("hidden")}function d(){o.btnLoadMore.classList.add("hidden")}function m(){o.textLoading.classList.remove("hidden")}function l(){o.textLoading.classList.add("hidden")}function $(){const s=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
