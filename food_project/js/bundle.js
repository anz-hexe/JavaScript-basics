!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(e,t,n,o){let r=document.querySelectorAll(e),a=document.querySelectorAll(t),c=document.querySelector(n);function i(){a.forEach(e=>{e.classList.add("hide"),e.classList.remove("show","fade")}),r.forEach(e=>{e.classList.remove(o)})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;a[e].classList.add("show","fade"),a[e].classList.remove("hide"),r[e].classList.add(o)}i(),s(),c.addEventListener("click",(function(t){const n=t.target;n&&n.classList.contains(e.slice(1))&&r.forEach((e,t)=>{n==e&&(i(),s(t))})}))};var r=function(e,t){function n(e){return e>=0&&e<10?"0"+e:e}!function(e,t){const o=document.querySelector(e),r=o.querySelector("#days"),a=o.querySelector("#hours"),c=o.querySelector("#minutes"),i=o.querySelector("#seconds"),s=setInterval(l,1e3);function l(){const e=function(e){let t,n,o,r;const a=Date.parse(e)-Date.parse(new Date);return a<=0?(t=0,n=0,o=0,r=0):(t=Math.floor(a/864e5),n=Math.floor(a/36e5%24),o=Math.floor(a/6e4%60),r=Math.floor(a/1e3%60)),{total:a,days:t,hours:n,minutes:o,seconds:r}}(t);r.innerHTML=n(e.days),a.innerHTML=n(e.hours),c.innerHTML=n(e.minutes),i.innerHTML=n(e.seconds),e.total<=0&&clearInterval(s)}l()}(e,t)};var a=function(e){let{container:t,slide:n,nextArrow:o,prevArrow:r,totalCounter:a,currentCounter:c,wrapper:i,field:s}=e;const l=document.querySelectorAll(n),d=document.querySelector(t),u=document.querySelector(r),m=document.querySelector(o),f=document.querySelector(a),h=document.querySelector(c),g=document.querySelector(i),p=window.getComputedStyle(g).width,v=document.querySelector(s);function y(){l.length<10?h.textContent="0"+b:h.textContent=b}function _(){L.forEach(e=>e.style.opacity=".5"),L[b-1].style.opacity=1}let b=1,S=0;l.length<10?(f.textContent="0"+l.length,h.textContent="0"+b):(f.textContent=l.length,h.textContent=b),v.style.width=100*l.length+"%",v.style.display="flex",v.style.transition="0.5s all",g.style.overflow="hidden",l.forEach(e=>{e.style.width=p}),d.style.position="relative";const x=document.createElement("ol"),L=[];x.classList.add("carousel-indicators"),x.style.cssText="\nposition: absolute;\nright: 0;\nbottom: 0;\nleft: 0;\nz-index: 15;\ndisplay: flex;\njustify-content: center;\nmargin-right: 15%;\nmargin-left: 15%;\nlist-style: none;\n",d.append(x);for(let e=0;e<l.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.style.cssText="\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 6px;\n  margin-right: 3px;\n  margin-left: 3px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: .5;\n  transition: opacity .6s ease;\n",0==e&&(t.style.opacity=1),x.append(t),L.push(t)}function w(e){return+e.replace(/\D/g,"")}m.addEventListener("click",()=>{S==w(p)*(l.length-1)?S=0:S+=w(p),v.style.transform=`translateX(-${S}px)`,b==l.length?b=1:b++,y(),_()}),u.addEventListener("click",()=>{0==S?S=w(p)*(l.length-1):S-=w(p),v.style.transform=`translateX(-${S}px)`,1==b?b=l.length:b--,l.length<10?h.textContent="0"+b:h.textContent=b,L.forEach(e=>e.style.opacity=".5"),L[b-1].style.opacity=1}),L.forEach(e=>{e.addEventListener("click",e=>{const t=e.target.getAttribute("data-slide-to");b=t,S=w(p)*(t-1),v.style.transform=`translateX(-${S}px)`,y(),_()})})};function c(e,t){const n=document.querySelector(e);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",console.log(t),t&&clearInterval(t)}function i(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}var s=function(e,t,n){const o=document.querySelectorAll(e),r=document.querySelector(t);o.forEach(e=>{e.addEventListener("click",()=>c(t,n))}),r.addEventListener("click",e=>{e.target!==r&&""!=e.target.getAttribute("data-close")||i(t)}),document.addEventListener("keydown",e=>{"Escape"===e.code&&r.classList.contains("show")&&i(t)}),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(c(t,n),window.removeEventListener("scroll",e))}))};var l=function(e,t){const n=document.querySelectorAll(e),o="img/form/spinner.svg",r="Thx! we are call to you",a="404";function s(e){const n=document.querySelector(".modal__dialog");n.classList.add("hide"),c(".modal",t);const o=document.createElement("div");o.classList.add("modal__dialog"),o.innerHTML=`\n        <div class="modal__content">\n            <div class="modal__close" data-close>×</div>\n            <div class="modal__title">${e}</div>\n        </div>\n    `,document.querySelector(".modal").append(o),setTimeout(()=>{o.remove(),n.classList.add("show"),n.classList.remove("hide"),i(".modal")},4e3)}n.forEach(e=>{var t;(t=e).addEventListener("submit",e=>{e.preventDefault();let n=document.createElement("img");n.src=o,n.style.cssText="\n          display: block;\n          margin: 0 auto;\n      ",t.insertAdjacentElement("afterend",n);const c=new FormData(t);(async(e,t)=>{const n=await fetch(e,{method:"POST",headers:{"Content-type":"application/json"},body:t});return await n.json()})("http://localhost:3000/requests",JSON.stringify(Object.fromEntries(c.entries()))).then(e=>{console.log(e),s(r),n.remove(),t.reset()}).catch(()=>{s(a)}).finally(()=>{t.reset()})})}),fetch("http://localhost:3000/menu").then(e=>e.json()).then(e=>console.log(e))};var d=function(){class e{constructor(e,t,n,o,r,a){this.src=e,this.alt=t,this.title=n,this.descr=o,this.price=r,this.parent=document.querySelector(a),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const e=document.createElement("div");e.innerHTML=`\n             <div class="menu__item">\n                          <img src=${this.src} alt=${this.alt}>\n                          <h3 class="menu__item-subtitle">${this.title}</h3>\n                          <div class="menu__item-descr">${this.descr}</div>\n                          <div class="menu__item-divider"></div>\n                          <div class="menu__item-price">\n                              <div class="menu__item-cost">price:</div>\n                              <div class="menu__item-total"><span>${this.price}</span> uha/day</div>\n                          </div>\n                      </div>\n            `,this.parent.append(e)}}axios.get("http://localhost:3000/menu").then(t=>{t.data.forEach(t=>{let{img:n,altimg:o,title:r,descr:a,price:c}=t;new e(n,o,r,a,c,".menu .container").render()})})};var u=function(){const e=document.querySelector(".calculating__result span");let t,n,o,r,a;function c(e,t){document.querySelectorAll(e).forEach(e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)})}function i(){e.textContent=t&&n&&o&&r&&a?"female"===t?Math.round((447.6+9.2*o+3.1*n-4.3*r)*a):Math.round((88.36+13.4*o+4.8*n-5.7*r)*a):"____"}function s(e,n){const o=document.querySelectorAll(e);o.forEach(e=>{e.addEventListener("click",e=>{e.target.getAttribute("data-ratio")?(a=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+e.target.getAttribute("data-ratio"))):(t=e.target.getAttribute("id"),localStorage.setItem("sex",e.target.getAttribute("id"))),console.log(a,t),o.forEach(e=>{e.classList.remove(n)}),e.target.classList.add(n),i()})})}function l(e){const t=document.querySelector(e);t.addEventListener("input",()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":n=+t.value;break;case"weight":o=+t.value;break;case"age":r=+t.value}i()})}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(a=1.375,localStorage.setItem("ratio",1.375)),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),i(),s("#gender div","calculating__choose-item_active"),s(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")};window.addEventListener("DOMContentLoaded",()=>{const e=setTimeout(()=>c(".modal",e),5e3);o(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),r(".timer","2022-12-30"),a({container:".offer__slider",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",slide:".offer__slide",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"}),s("[data-modal]",".modal",e),l("form",e),d(),u()})}]);
//# sourceMappingURL=bundle.js.map