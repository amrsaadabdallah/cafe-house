const heroSec=document.querySelector(".hero-sec"),links=window.document.querySelectorAll("a"),header=window.document.querySelector(".header"),headerNav=window.document.querySelector(".header__nav"),togglerBtn=window.document.querySelector(".header__nav__toggle-btn"),currentYearElements=window.document.querySelectorAll(".current-year"),scrollToTopBtn=window.document.querySelector(".scroll-to-top-btn"),preloader=window.document.querySelector(".preloader");window.document.body.style.overflow="hidden",window.addEventListener("DOMContentLoaded",(()=>{preloader.classList.add("hidden"),window.document.body.style.overflow="auto"})),togglerBtn.addEventListener("click",(()=>{headerNav.classList.toggle("show"),window.setTimeout((()=>{togglerBtn.blur()}),1e3)})),links.forEach((e=>{e.addEventListener("click",(o=>{const t=e.getAttribute("href");if("#"===t)o.preventDefault(),window.scrollTo({top:0,behavior:"smooth"});else if(1!==t.lenght&&t.startsWith("#")){o.preventDefault();const e=document.querySelector(t);window.scrollTo({top:`${e.offsetTop}`,behavior:"smooth"})}window.setTimeout((()=>{e.blur()}),1e3),headerNav.classList.contains("show")&&headerNav.classList.remove("show")}))}));const currentYear=(new Date).getFullYear();currentYearElements.forEach((e=>{e.textContent=currentYear})),scrollToTopBtn.addEventListener("click",(()=>{scrollToTopBtn.blur(),window.scrollTo({top:0,behavior:"smooth"})}));const obs=new IntersectionObserver((e=>{!1===e[0].isIntersecting?(header.classList.add("sticky"),scrollToTopBtn.classList.add("show")):(header.classList.remove("sticky"),scrollToTopBtn.classList.remove("show"))}),{root:null,threshold:0});obs.observe(heroSec);
//# sourceMappingURL=index.abf4d284.js.map
