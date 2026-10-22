/* =========================================================
   Запуск: навігацыя, мова, тэмы, даступнасць, плывучыя кнопкі
   ========================================================= */
(function(){
"use strict";
var A = window.App, t = A.t, root = document.documentElement;
var ICON = { home:'<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>', heroes:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 4-7 8-7s7 2 8 7"/>', map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z M9 4v14 M15 6v14"/>', dolls:'<path d="M12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM7 21l2-10h6l2 10z"/>', menu:'<path d="M4 7h16M4 12h16M4 17h16"/>' };

/* ---------- налады ---------- */
var prefs = A.get("prefs", { theme:null, fs:0, contrast:false, motion:false });
function applyPrefs(){
  var dark = prefs.theme ? prefs.theme==="dark" : (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches);
  root.setAttribute("data-theme", dark ? "dark" : "light");
  root.classList.toggle("fs1", prefs.fs===1); root.classList.toggle("fs2", prefs.fs===2);
  root.classList.toggle("contrast", !!prefs.contrast); root.classList.toggle("nomotion", !!prefs.motion);
  A.$$("[data-fs]").forEach(function(b){ b.setAttribute("aria-pressed", +b.getAttribute("data-fs")===prefs.fs); });
  A.$("#optContrast").checked = !!prefs.contrast; A.$("#optMotion").checked = !!prefs.motion;
  A.ornamentVars();
}
function save(){ A.set("prefs", prefs); applyPrefs(); }

/* ---------- навігацыя ---------- */
function buildNav(){
  var main = A.NAV.filter(function(n){ return n[4]; }), more = A.NAV.filter(function(n){ return !n[4]; });
  A.$("#mainnav").innerHTML = main.map(function(n){ return '<a href="#/'+(n[0]==="home"?"":n[0])+'" data-r="'+n[0]+'">'+t(n[1])+'</a>'; }).join("")+
    '<div class="more"><button type="button" aria-expanded="false" aria-haspopup="true" id="moreBtn">'+t("nav_more")+' ▾</button><div class="more__menu" id="moreMenu" hidden>'+
    more.map(function(n){ return '<a href="#/'+n[0]+'" data-r="'+n[0]+'">'+t(n[1])+'</a>'; }).join("")+'<a href="#/rushnik" data-r="rushnik">'+t("nav_rushnik")+'</a></div></div>';
  A.$("#drawerNav").innerHTML = A.NAV.concat([["rushnik","nav_rushnik","star"]]).map(function(n){ return '<a href="#/'+(n[0]==="home"?"":n[0])+'" data-r="'+n[0]+'">'+A.symIcon(n[2],2).replace("<svg ",'<svg style="width:26px;height:26px" ')+t(n[1])+'</a>'; }).join("");
  A.$("#bottomnav").innerHTML = [["home","nav_home"],["heroes","nav_heroes"],["map","nav_map"],["dolls","nav_dolls"]].map(function(n){
    return '<a href="#/'+(n[0]==="home"?"":n[0])+'" data-r="'+n[0]+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round">'+ICON[n[0]]+'</svg>'+t(n[1]).split(" ")[0]+'</a>'; }).join("")+
    '<button type="button" id="bnMenu" aria-controls="drawer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">'+ICON.menu+'</svg>'+t("menu")+'</button>';
  var mb = A.$("#moreBtn"), mm = A.$("#moreMenu");
  mb.onclick = function(e){ e.stopPropagation(); mm.hidden = !mm.hidden; mb.setAttribute("aria-expanded", !mm.hidden); };
  document.addEventListener("click", function(){ mm.hidden = true; mb.setAttribute("aria-expanded","false"); });
  A.$("#bnMenu").onclick = toggleDrawer;
  A.$$("#drawer a").forEach(function(a){ a.addEventListener("click", function(){ toggleDrawer(false); }); });
  markNav();
}
function markNav(){
  var r = A.current ? A.current.name : "home"; if(r==="hero") r = "heroes"; if(r==="rushnik") r = "rushnik";
  A.$$("[data-r]").forEach(function(a){ if(a.getAttribute("data-r")===r) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
}
function toggleDrawer(force){
  var d = A.$("#drawer"), open = typeof force==="boolean" ? force : d.hidden;
  d.hidden = !open; A.$("#burgerBtn").setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
}

/* ---------- пасля кожнага раздзела ---------- */
A.afterRender = function(page, r){
  markNav();
  var h1 = page.querySelector("h1"); document.title = (h1 && r.name!=="home" ? h1.textContent+" · " : "")+t("siteTitle")+". "+t("siteSub");
  A.reveal(page);
  setTimeout(function(){ A.thread(page); }, 60);
  A.guide();
  if(A.demoActive()) A.demoRefocus();
  else window.scrollTo(0,0);
  if(A._navFocus){ A.$("#app").focus({preventScroll:true}); }
  A._navFocus = true;
};

/* ---------- запуск ---------- */
function init(){
  A.applyI18n();
  applyPrefs();
  buildNav();
  A.$$("[data-lang]").forEach(function(b){
    b.setAttribute("aria-pressed", b.getAttribute("data-lang")===A.lang);
    b.onclick = function(){ A.lang = b.getAttribute("data-lang"); A.set("lang", A.lang); A.$$("[data-lang]").forEach(function(o){ o.setAttribute("aria-pressed", o===b); }); A.applyI18n(); buildNav(); A._navFocus=false; A.render(); };
  });
  A.$("#themeBtn").onclick = function(){ prefs.theme = root.getAttribute("data-theme")==="dark" ? "light" : "dark"; save(); };
  var ap = A.$("#a11yPanel");
  A.$("#a11yBtn").onclick = function(e){ e.stopPropagation(); ap.hidden = !ap.hidden; this.setAttribute("aria-expanded", !ap.hidden); };
  ap.onclick = function(e){ e.stopPropagation(); };
  document.addEventListener("click", function(){ ap.hidden = true; A.$("#a11yBtn").setAttribute("aria-expanded","false"); });
  A.$$("[data-fs]").forEach(function(b){ b.onclick = function(){ prefs.fs = +b.getAttribute("data-fs"); save(); }; });
  A.$("#optContrast").onchange = function(){ prefs.contrast = this.checked; save(); };
  A.$("#optMotion").onchange = function(){ prefs.motion = this.checked; save(); };
  var reading = false, rb = A.$("#readAloudBtn");
  rb.onclick = function(){
    if(reading){ A.stopSpeak(); reading = false; rb.textContent = t("readAloud"); return; }
    var els = A.$$("#app h1, #app h2, #app p, #app li, #app blockquote").filter(function(e){ return e.offsetParent && e.textContent.trim(); });
    reading = true; rb.textContent = t("stopReading");
    A.speakEls(els, function(){ reading = false; rb.textContent = t("readAloud"); });
  };
  A.$("#burgerBtn").onclick = function(){ toggleDrawer(); };
  A.$("#demoBtn").onclick = function(){ A.demoStart(); };
  var tt = A.$("#totop");
  tt.onclick = function(){ window.scrollTo({top:0, behavior:A.reduced()?"auto":"smooth"}); A.$("#app").focus({preventScroll:true}); };
  var bar = A.$("#threadBar");
  addEventListener("scroll", function(){
    tt.classList.toggle("show", scrollY > 600);
    var max = document.documentElement.scrollHeight - innerHeight; bar.style.width = (max>0 ? scrollY/max*100 : 0)+"%";
  }, {passive:true});
  addEventListener("hashchange", function(){ toggleDrawer(false); A.render(); });
  if(window.matchMedia) matchMedia("(prefers-color-scheme: dark)").addEventListener && matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(){ if(!prefs.theme) applyPrefs(); });
  if(!A.storageOk) setTimeout(function(){ A.toast(t("storageOff")); }, 1500);
  A._navFocus = false;
  A.render();
  // уступ — пасля загрузкі, каб за ім ужо быў бачны сайт
  setTimeout(function(){ A.$("#preloader").classList.add("done"); if(A.showIntro) A.showIntro(); }, A.reduced() ? 0 : 700);
}
if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
