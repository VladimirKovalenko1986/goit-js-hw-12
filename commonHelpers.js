import{a as u,S as L,i as h}from"./assets/vendor-527658dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();u.defaults.baseURL="https://pixabay.com/api/";const S="36399234-af15385039238a4844768ffbd";class b{constructor(){this.searchQuery="",this.queryPage=1,this.perPage=15}async getNews(){const t=await u.get("",{params:{key:S,q:this.searchQuery,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:this.perPage,page:this.queryPage}});return this.incrementPage(),t.data}resetPage(){this.queryPage=1}incrementPage(){this.queryPage+=1}}function p(s){return s.map(({webformatURL:t,largeImageURL:i,tags:c,likes:e,views:r,comments:n,downloads:w})=>`<li class="list-item">
                    <a class="list-link" href="${i}"><img class="list-img" src="${t}" alt="${c}"/></a>
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
                            <p class="list-text">${w}</p>
                        </div>
                    </div>
                </li>`).join("")}let f=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const a=new b,o={formSearch:document.querySelector(".form"),listForm:document.querySelector(".list-form"),spinner:document.querySelector(".conteiner-loader"),btnLoadMore:document.querySelector(".button-loadMore"),textLoading:document.querySelector(".text-load")};o.formSearch.addEventListener("submit",v);o.btnLoadMore.addEventListener("click",P);async function v(s){s.preventDefault(),a.searchQuery=s.currentTarget.elements.searchQuery.value.trim(),l(),y(),q(),a.resetPage();try{const{hits:t}=await a.getNews(a.searchQuery);if(!t.length||!a.searchQuery)throw new Error("No more data");if(o.listForm.innerHTML=p(t),a.perPage>t.length)throw new Error("Data end!");d(),g(),f.refresh()}catch(t){t.message==="Data end!"?m():M()}finally{x()}}async function P(){y(),l();try{const{hits:s,totalHits:t}=await a.getNews(a.searchQuery),i=Math.ceil(t/s.length);if(console.log(i),i===a.queryPage)throw new Error("Data end!");o.listForm.insertAdjacentHTML("beforeend",p(s)),E(),d(),g(),f.refresh()}catch{m()}}function x(){o.formSearch.reset()}function q(){o.listForm.innerHTML=""}function M(){h.error({position:"topRight",title:"Error Search",message:"Sorry, there are no images matching your search query. Please try again!"}),d(),l()}function m(){h.info({position:"topRight",title:"Error End API Search",message:"We`re sorry, but you`ve reached the end of search results."}),d(),l()}function g(){o.btnLoadMore.classList.remove("hidden")}function l(){o.btnLoadMore.classList.add("hidden")}function y(){o.textLoading.classList.remove("hidden")}function d(){o.textLoading.classList.add("hidden")}function E(){const s=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
