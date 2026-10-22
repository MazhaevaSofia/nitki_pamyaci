/* =========================================================
   Ядро: захоўванне, мовы, маршрутызацыя, дапаможныя функцыі.
   Усё ў адным глабальным аб'екце App, каб сайт працаваў праз file://
   ========================================================= */
(function(){
"use strict";
var App = window.App = { pages:{}, cleanup:[] };

/* ---------- бяспечнае захоўванне ---------- */
var mem = {};
App.storageOk = (function(){ try{ var k="__t"; localStorage.setItem(k,"1"); localStorage.removeItem(k); return true; }catch(e){ return false; } })();
App.get = function(key, def){
  try{ var v = localStorage.getItem("np_"+key); return v===null ? (key in mem ? mem[key] : def) : JSON.parse(v); }
  catch(e){ return key in mem ? mem[key] : def; }
};
App.set = function(key, val){
  mem[key] = val;
  try{ localStorage.setItem("np_"+key, JSON.stringify(val)); }catch(e){}
};
App.exportAll = function(){
  var out = {};
  try{ for(var i=0;i<localStorage.length;i++){ var k=localStorage.key(i); if(k.indexOf("np_")===0) out[k]=localStorage.getItem(k); } }catch(e){}
  return out;
};
App.importAll = function(obj){
  Object.keys(obj||{}).forEach(function(k){ if(k.indexOf("np_")===0){ try{ localStorage.setItem(k, obj[k]); }catch(e){} } });
};

/* ---------- мовы ---------- */
App.lang = App.get("lang","be");
if(!window.I18N[App.lang]) App.lang = "be";
App.t = function(key, vars){
  var s = (I18N[App.lang] && I18N[App.lang][key]);
  if(s===undefined) s = I18N.be[key];
  if(s===undefined) return key;
  if(vars && typeof s==="string") Object.keys(vars).forEach(function(k){ s = s.split("{"+k+"}").join(vars[k]); });
  return s;
};
// Тэкст з даных: {be,ru,en} -> радок на бягучай мове
App.L = function(o){
  if(o==null) return "";
  if(typeof o!=="object" || Array.isArray(o)) return o;
  var v = o[App.lang];
  if(v===undefined || v==="") v = App.lang==="en" ? (o.ru||o.be) : o.be;
  return v===undefined ? "" : v;
};
App.applyI18n = function(root){
  (root||document).querySelectorAll("[data-i18n]").forEach(function(el){ el.textContent = App.t(el.getAttribute("data-i18n")); });
  (root||document).querySelectorAll("[data-i18n-aria]").forEach(function(el){ var s=App.t(el.getAttribute("data-i18n-aria")); el.setAttribute("aria-label", s); el.title = s; });
  document.documentElement.lang = App.lang;
};

/* ---------- HTML ---------- */
App.esc = function(s){ return String(s==null?"":s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); };
App.$ = function(sel, root){ return (root||document).querySelector(sel); };
App.$$ = function(sel, root){ return Array.prototype.slice.call((root||document).querySelectorAll(sel)); };
// подпіс цытаты без бібліяграфіі: «хто — што, калі»
App.quoteWho = function(s){ return String(s||"").split(/ \/\/ |; ?ц[иы]т\. ?п[оа]|; ?quoted|\s·\s| \(/i)[0].replace(/[\s.;,]+$/,""); };
// подпіс фота без аўтара і ліцэнзіі
App.capNoCredit = function(s){ return String(s||"").replace(/\.?\s*(Фото|Фота|Photo)\s*:.*$/i,"").replace(/\.\s*(Белпочта|Белпошта|Belpost|Belposhta).*$/i,"").trim(); };
App.isTodo = function(s){ return typeof s==="string" && s.indexOf("TODO")>-1; };
// абгортвае тэкст з TODO у пазнаку для каманды
App.tx = function(o){ var s = App.L(o); return App.isTodo(s) ? '<span class="todo">'+App.esc(s)+'</span>' : App.esc(s); };
App.byId = function(list, id){ for(var i=0;i<list.length;i++) if(list[i].id===id) return list[i]; return null; };
App.shuffle = function(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var x=a[i]; a[i]=a[j]; a[j]=x; } return a; };
App.reduced = function(){ return document.documentElement.classList.contains("nomotion") || (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches); };

/* ---------- паведамленні ---------- */
var toastTimer;
App.toast = function(msg){
  var el = App.$("#toast"); el.textContent = msg; el.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(function(){ el.classList.remove("show"); }, 2600);
};
App.modal = function(html, onOpen){
  var m = App.$("#modal");
  m.innerHTML = '<div class="modal__box" role="dialog" aria-modal="true">'+
    '<button type="button" class="iconbtn modal__x" aria-label="'+App.t("close")+'"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg></button>'+html+'</div>';
  m.hidden = false;
  var prev = document.activeElement;
  function close(){ m.hidden = true; m.innerHTML=""; document.removeEventListener("keydown", esc); if(prev && prev.focus) prev.focus(); }
  function esc(e){ if(e.key==="Escape") close(); }
  m.querySelector(".modal__x").onclick = close;
  m.onclick = function(e){ if(e.target===m) close(); };
  document.addEventListener("keydown", esc);
  m.querySelector(".modal__x").focus();
  if(onOpen) onOpen(m.querySelector(".modal__box"), close);
  return close;
};

/* ---------- спампоўка ---------- */
App.downloadCanvas = function(canvas, name){
  try{
    if(canvas.toBlob){
      canvas.toBlob(function(b){ App.downloadBlob(b, name); }, "image/png");
    } else App.downloadUrl(canvas.toDataURL("image/png"), name);
  }catch(e){ App.toast("Error: "+e.message); }
};
App.downloadBlob = function(blob, name){
  var url = URL.createObjectURL(blob);
  App.downloadUrl(url, name);
  setTimeout(function(){ URL.revokeObjectURL(url); }, 4000);
};
App.downloadUrl = function(url, name){
  var a = document.createElement("a"); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  App.toast(App.t("downloaded")+": "+name);
};
var TR = {а:"a",б:"b",в:"v",г:"h",ґ:"g",д:"d",е:"e",ё:"io",ж:"zh",з:"z",і:"i",и:"i",й:"j",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ў:"u",ф:"f",х:"kh",ц:"ts",ч:"ch",ш:"sh",щ:"shch",ъ:"",ы:"y",ь:"",э:"e",ю:"iu",я:"ia"};
App.slug = function(s){ return String(s).toLowerCase().split("").map(function(c){ return TR[c]!==undefined ? TR[c] : c; }).join("").replace(/[^a-z0-9-]+/g,"-").replace(/^-|-$/g,"") || "file"; };

/* ---------- QR ---------- */
App.qrCanvas = function(text, size){
  var qr = qrcode(0, "M");
  if(qrcode.stringToBytesFuncs && qrcode.stringToBytesFuncs["UTF-8"]) qrcode.stringToBytes = qrcode.stringToBytesFuncs["UTF-8"];
  qr.addData(text, "Byte"); qr.make();
  var n = qr.getModuleCount(), q = 2, cell = Math.max(2, Math.floor((size||240)/(n+q*2)));
  var c = document.createElement("canvas"); c.width = c.height = cell*(n+q*2);
  var x = c.getContext("2d"); x.fillStyle="#fff"; x.fillRect(0,0,c.width,c.height); x.fillStyle="#1a1a1a";
  for(var r=0;r<n;r++) for(var k=0;k<n;k++) if(qr.isDark(r,k)) x.fillRect((k+q)*cell,(r+q)*cell,cell,cell);
  return c;
};
App.qrText = function(kind, id, title){
  if(CONFIG.siteUrl) return CONFIG.siteUrl.replace(/\/?$/,"/")+"#/"+kind+"/"+id;
  return App.t("siteTitle")+". "+title+" ("+kind+"/"+id+")";
};

/* ---------- даты ---------- */
// Праваслаўны Вялікдзень (па новым стылі)
App.orthodoxEaster = function(y){
  var a=y%4, b=y%7, c=y%19, d=(19*c+15)%30, e=(2*a+4*b-d+34)%7;
  var month=Math.floor((d+e+114)/31), day=((d+e+114)%31)+1;
  var dt = new Date(y, month-1, day); dt.setDate(dt.getDate()+13); return dt;
};
App.holidayDate = function(h, year){
  if(h.date) return new Date(year, h.date.m-1, h.date.d);
  var e = App.orthodoxEaster(year); e.setDate(e.getDate()+(h.easter||0)); return e;
};
App.nextHolidays = function(){
  var now = new Date(); now.setHours(0,0,0,0);
  return HOLIDAYS.map(function(h){
    var d = App.holidayDate(h, now.getFullYear());
    if(d < now) d = App.holidayDate(h, now.getFullYear()+1);
    return { h:h, date:d, days:Math.round((d-now)/864e5) };
  }).sort(function(a,b){ return a.days-b.days; });
};
App.fmtDate = function(d){ return d.getDate()+" "+App.t("months")[d.getMonth()].toLowerCase(); };

/* ---------- маршрутызатар ---------- */
App.route = function(name, fn){ App.pages[name] = fn; };
App.current = null;
App.go = function(hash){ if(location.hash===hash) App.render(); else location.hash = hash; };
App.parse = function(){
  var h = (location.hash||"#/").replace(/^#\/?/,"");
  var parts = h.split("/").filter(Boolean);
  return { name: parts[0]||"home", arg: parts[1]||null };
};
App.render = function(){
  App.cleanup.forEach(function(f){ try{ f(); }catch(e){} }); App.cleanup = [];
  try{ if(App.stopSpeak) App.stopSpeak(); else if(window.speechSynthesis) speechSynthesis.cancel(); }catch(e){}
  var r = App.parse(), fn = App.pages[r.name] || App.pages.home;
  App.current = r;
  var main = App.$("#app");
  main.innerHTML = "";
  var page = document.createElement("div"); page.className = "page page--"+r.name;
  main.appendChild(page);
  fn(page, r.arg);
  App.applyI18n(page);
  App.afterRender(page, r);
};
App.afterRender = function(){}; // перавызначаецца ў app.js

})();
