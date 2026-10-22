/* =========================================================
   Раздзелы: Галоўная, Гераіні, Старонка гераіні, Карта памяці, Стужка часу
   ========================================================= */
(function(){
"use strict";
var A = window.App, t = A.t, L = A.L, esc = A.esc, tx = A.tx;

// Усе раздзелы: [маршрут, ключ назвы, знак, ключ апісання, у галоўным меню?]
A.NAV = [
  ["home","nav_home","sun",null,1],
  ["heroes","nav_heroes","berehinia","d_heroes",1],
  ["map","nav_map","comb","d_map",1],
  ["timeline","nav_timeline","tree","d_timeline",1],
  ["dolls","nav_dolls","rose","d_dolls",1],
  ["holidays","nav_holidays","ear","d_holidays",1],
  ["names","nav_names","star","d_names",1],
  ["today","nav_today","romb","d_today",0],
  ["wall","nav_wall","cross","d_wall",0],
  ["letters","nav_letters","rose","d_letters",0],
  ["quiz","nav_quiz","star","d_quiz",0],
  ["teacher","nav_teacher","tree","d_teacher",0],
  ["about","nav_jury","comb","d_jury",0]
];
A.realHeroes = function(){ return HEROES.filter(function(h){ return !h.placeholder; }); };

A.crumbs = function(items){
  return '<nav class="crumbs" aria-label="breadcrumbs"><a href="#/">'+t("home")+'</a>'+items.map(function(i){ return ' / '+(i[1]?'<a href="'+i[1]+'">'+esc(i[0])+'</a>':'<span aria-current="page">'+esc(i[0])+'</span>'); }).join("")+'</nav>';
};
A.head = function(title, lead, crumbs){
  return '<div class="wrap">'+A.crumbs(crumbs||[[title]])+'<header class="page-head reveal"><h1>'+esc(title)+'</h1>'+(lead?'<p>'+esc(lead)+'</p>':'')+'</header></div>';
};

/* ================= ГАЛОЎНАЯ ================= */
A.route("home", function(p){
  var heroes = A.realHeroes(), hod = heroes[Math.floor(Math.random()*heroes.length)];
  var q = QUOTES[Math.floor(Math.random()*QUOTES.length)];
  p.classList.add("page--flush");
  p.innerHTML =
  '<section class="hero" id="top-hero"><div class="hero__bg" data-parallax></div><div class="hero__in">'+
    '<div>'+A.symbolsHtml("symbols--hero")+'<p class="kicker">'+t("heroKicker")+'</p>'+
    '<h1>'+t("heroH1a")+' <em>'+t("heroH1b")+'</em></h1>'+
    '<p class="hero__sub">'+t("siteSub")+'. '+t("siteMotto")+'</p>'+
    '<p class="hero__motto">'+t("heroLead")+'</p>'+
    '<div class="btns"><a class="btn" href="#/heroes">'+t("start")+'</a><a class="btn btn--ghost" href="#/dolls">'+t("toDolls")+'</a></div>'+
    '<div class="counters" id="counters">'+
      '<div class="counter"><b data-count="'+CONFIG.freedomYears+'">'+CONFIG.freedomYears+'</b><span>'+t("cnt_freedom")+'<br>'+t("cnt_freedomNote")+'</span></div>'+
      '<div class="counter"><b>'+CONFIG.yearOfWoman+'</b><span>'+t("cnt_year")+'</span></div>'+
      '<div class="counter"><b data-count="'+DOLLS.length+'">'+DOLLS.length+'</b><span>'+t("cnt_dolls")+'</span></div>'+
    '</div></div>'+
    '<div class="hero__art"><div class="zoom zoom--big" style="height:100%;border-radius:200px 200px var(--radius) var(--radius);box-shadow:var(--shadow)"><img src="assets/img/dolls/kupalinka.webp" alt="'+esc(L(A.byId(DOLLS,"kupalinka").alt))+'" width="900" height="1200"></div></div>'+
  '</div></section>'+
  '<div class="orn-band" aria-hidden="true"></div>'+
  '<div class="wrap">'+
    '<section class="section reveal" id="home-sections"><p class="kicker">'+t("sectionsKicker")+'</p><h2>'+t("sectionsH")+'</h2><div class="tiles">'+
      A.NAV.filter(function(n){ return n[3]; }).map(function(n){
        return '<a class="tile" href="#/'+n[0]+'">'+A.symIcon(n[2],4).replace("<svg ",'<svg class="tile__m" ')+'<b>'+t(n[1])+'</b><span>'+t(n[3])+'</span></a>';
      }).join("")+
    '</div></section>'+
    '<section class="section grid g2" id="home-day">'+
      '<div class="card reveal"><p class="kicker">'+t("heroOfDay")+'</p>'+
        '<h3 style="font-size:2rem">'+esc(L(hod.name))+'</h3><p class="muted">'+esc(hod.years)+' · '+esc(L(hod.place))+'</p>'+
        '<p>'+tx(hod.contribution)+'</p>'+''+
        '<a class="btn btn--green btn--small" href="#/hero/'+hod.id+'">'+t("more")+'</a><p class="muted" style="margin-top:1em;font-size:.82rem">'+t("heroOfDayNote")+'</p></div>'+
      '<div class="card reveal"><p class="kicker">'+t("quoteKicker")+'</p><blockquote class="quote" id="hq">«'+esc(L(q.text))+'»</blockquote><p class="quote-who" id="hqw">'+esc(L(q.who))+'</p>'+
        '<button type="button" class="btn btn--ghost btn--small" id="anotherQ">'+t("anotherQuote")+'</button></div>'+
    '</section>'+
    '<section class="section card reveal" id="home-candle"><h2>'+t("candleH")+'</h2><p>'+t("candleText")+'</p><div id="candleBox"></div></section>'+
  '</div>';
  A.candle(A.$("#candleBox",p), "all");
  A.$("#anotherQ",p).onclick = function(){ var q = QUOTES[Math.floor(Math.random()*QUOTES.length)]; A.$("#hq").textContent = "«"+L(q.text)+"»"; A.$("#hqw").textContent = L(q.who); };
  // паралакс арнаменту
  var bg = A.$("[data-parallax]",p);
  function par(){ if(!A.reduced()) bg.style.transform = "translateY("+(scrollY*0.15)+"px)"; }
  addEventListener("scroll", par, {passive:true}); A.cleanup.push(function(){ removeEventListener("scroll", par); });
});

/* ================= ГЕРАІНІ ================= */
A.route("heroes", function(p){
  var f = { q:"", era:"", region:"", role:"" };
  function uniq(k){ var s=[]; HEROES.forEach(function(h){ if(h[k] && s.indexOf(h[k])<0) s.push(h[k]); }); return s; }
  function chips(k, pref){ return '<div class="filters__row" role="group" aria-label="'+t(k==="region"?"district":k)+'"><span>'+t(k==="region"?"district":k)+'</span><button type="button" class="chip" data-f="'+k+'" data-v="" aria-pressed="true">'+t("all")+'</button>'+
    uniq(k).map(function(v){ return '<button type="button" class="chip" data-f="'+k+'" data-v="'+v+'" aria-pressed="false">'+t(pref+v)+'</button>'; }).join("")+'</div>'; }
  p.innerHTML = A.head(t("heroesH"), t("heroesLead"))+
   '<div class="wrap"><div class="filters reveal" id="hfilters"><label class="sr" for="hq">'+t("search")+'</label><input class="search" id="hq" type="search" placeholder="'+t("search")+'">'+
    chips("era","era_")+chips("region","reg_")+chips("role","role_")+'</div>'+
   '<div class="grid g3" id="hlist" aria-live="polite"></div>'+
   (HEROES.some(function(h){return h.placeholder;}) ? '<section class="section card reveal" id="gomelSlot"><h2>'+t("gomelSlotH")+'</h2><p>'+t("gomelSlotText")+'</p><div class="btns">'+
     HEROES.filter(function(h){return h.placeholder;}).map(function(h){ return '<a class="btn btn--ghost btn--small" href="#/hero/'+h.id+'">'+esc(L(h.name))+'</a>'; }).join("")+'</div></section>' : '')+'</div>';
  function draw(){
    var q = f.q.toLowerCase(), list = HEROES.filter(function(h){
      if(h.placeholder) return false;
      if(f.era && h.era!==f.era) return false; if(f.region && h.region!==f.region) return false; if(f.role && h.role!==f.role) return false;
      if(q){ var hay = [h.name.be,h.name.ru,h.name.en,L(h.place)].join(" ").toLowerCase(); if(hay.indexOf(q)<0) return false; }
      return true;
    });
    A.$("#hlist",p).innerHTML = list.length ? list.map(A.heroCard).join("") : '<p class="muted">'+t("notFound")+'</p>';
  }
  A.$("#hq",p).oninput = function(){ f.q = this.value; draw(); };
  A.$$(".chip",p).forEach(function(c){ c.onclick = function(){
    var k = c.getAttribute("data-f"); f[k] = c.getAttribute("data-v");
    A.$$('.chip[data-f="'+k+'"]',p).forEach(function(o){ o.setAttribute("aria-pressed", o===c); }); draw();
  }; });
  draw();
});
A.heroCard = function(h){
  return '<a class="hcard" href="#/hero/'+h.id+'"><div class="hcard__img">'+(h.photo?'<img src="'+esc(h.photo)+'" alt="'+esc(L(h.name))+'" loading="lazy"'+A.focusStyle(h.photo)+'>':A.portraitSvg(h.id))+'</div>'+
    '<div class="hcard__b"><b>'+esc(L(h.name))+'</b><small>'+esc(h.years)+' · '+esc(L(h.place))+'</small>'+
    '<div class="chips" style="margin-top:6px"><span class="tag">'+t("era_"+h.era)+'</span><span class="tag">'+t("role_"+h.role)+'</span>'+''+'</div></div></a>';
};

/* ================= СТАРОНКА ГЕРАІНІ ================= */
A.route("hero", function(p, id){
  var h = A.byId(HEROES, id) || HEROES[0], name = L(h.name);
  var old = h.photo ? '<img class="p-old" src="'+esc(h.photo)+'" alt="'+esc(name)+'">' : '<div class="p-old" style="position:absolute;inset:0">'+A.portraitSvg(h.id)+'</div>';
  var col = h.photoColor ? '<img src="'+esc(h.photoColor)+'" alt="">' : (h.photo ? '<img src="'+esc(h.photo)+'" alt="">' : A.portraitSvg(h.id));
  var doll = h.doll && A.byId(DOLLS, h.doll);
  var tr = h.transcript ? L(h.transcript) : (L(h.bio)||[]).join("\n\n");
  p.innerHTML = '<div class="wrap">'+A.crumbs([[t("heroesH"),"#/heroes"],[name]])+
  '<article class="hp"><div>'+
    '<div class="portrait reveal" id="portrait" role="button" tabindex="0" aria-label="'+t("aliveHint")+'">'+col+old+'<div class="portrait__frame"></div><span class="portrait__hint">'+t("aliveHint")+'</span></div>'+
    '<p class="muted" style="font-size:.85rem;margin-top:10px"><b>'+t("portraitDesc")+':</b> '+tx(h.portrait)+'</p>'+(false&&h.photo&&h.photoSrc?'<p class="muted" style="font-size:.8rem;margin-top:-4px">📷 '+tx(h.photoSrc)+'</p>':'')+
    '<section class="card section" id="heroCandle" style="margin-top:20px"><h3>'+t("candleH")+'</h3><div id="hc"></div></section>'+
  '</div><div>'+
    '<header class="page-head"><p class="kicker">'+t("era_"+h.era)+' · '+t("role_"+h.role)+'</p><h1>'+esc(name)+'</h1>'+
    ''+(h.placeholder?' <span class="tag">'+t("placeholder")+'</span>':'')+'</header>'+
    '<dl class="facts"><dt>'+t("years")+'</dt><dd>'+tx(h.years)+'</dd><dt>'+t("place")+'</dt><dd>'+tx(h.place)+'</dd>'+(doll?'<dt>'+t("relatedDoll")+'</dt><dd><a href="#/dolls/'+doll.id+'">'+esc(L(doll.name))+'</a></dd>':'')+'</dl>'+
    '<section class="section" style="margin-top:20px"><h2>'+t("contribution")+'</h2><p class="read">'+tx(h.contribution)+'</p></section>'+
    '<section class="section" id="heroBio"><h2>'+t("bio")+'</h2>'+(L(h.bio)||[]).map(function(s, k){ var ru = A.lang==="be" && h.bio.ru && h.bio.ru.length===(h.bio.be||[]).length ? h.bio.ru[k] : ""; return '<p class="read"'+(ru?' data-say-ru="'+esc(ru)+'"':'')+'>'+(A.isTodo(s)?'<span class="todo">'+esc(s)+'</span>':esc(s))+'</p>'; }).join("")+'</section>'+
    '<section class="section"><h2>'+t("quoteH")+'</h2><blockquote class="quote">'+tx(h.quote.text)+'</blockquote>'+(A.quoteWho(h.quote.src)?'<p class="quote-who">'+esc(A.quoteWho(h.quote.src))+'</p>':'')+'</section>'+
    '<section class="section audio" id="heroAudio"><h2 style="font-size:1.5rem">'+t("audioH")+'</h2>'+
      (h.audio?'<audio controls preload="none" src="'+esc(h.audio)+'"></audio>':'<p class="muted" style="margin:0">'+t("noAudio")+'</p><div class="btns"><button type="button" class="btn btn--small btn--green" id="tts" aria-pressed="false">▶ '+t("listen")+'</button><button type="button" class="btn btn--small btn--ghost" id="ttsRestart" hidden>↺ '+t("ttsRestart")+'</button></div>')+
      '<details class="transcript"><summary>'+t("transcript")+'</summary><p style="white-space:pre-line">'+esc(tr)+'</p></details></section>'+
    '<section class="section card" id="heroTools"><h2 style="font-size:1.6rem">'+t("poster")+'</h2><div class="btns"><button type="button" class="btn" id="posterBtn">'+t("poster")+' (PNG)</button><button type="button" class="btn btn--ghost" id="printBtn">'+t("print")+'</button></div>'+
      '<h3 style="margin-top:1em">'+t("qrH")+'</h3><div id="qr"></div></section>'+
  '</div></article></div>';
  var por = A.$("#portrait",p); function alive(){ por.classList.toggle("alive"); }
  por.onclick = alive; por.onkeydown = function(e){ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); alive(); } };
  A.candle(A.$("#hc",p), h.id);
  A.qrBlock(A.$("#qr",p), {kind:"hero", id:h.id, title:name, sub:h.years+" · "+L(h.place), text:L(h.contribution)});
  A.$("#posterBtn",p).onclick = function(){ A.downloadCanvas(A.posterCanvas(h), "plakat-"+h.id+".png"); };
  A.$("#printBtn",p).onclick = function(){ window.print(); };
  // аўдыяаповед голасам браўзера: Слухаць → Паўза → Працягнуць, і Спыніць
  var tts = A.$("#tts",p), ttsRestart = A.$("#ttsRestart",p), state = "idle";
  function ttsUi(s){ state = s;
    tts.textContent = s==="play" ? "⏸ "+t("ttsPause") : s==="pause" ? "▶ "+t("ttsResume") : "▶ "+t("listen");
    tts.setAttribute("aria-pressed", s==="play"); ttsRestart.hidden = s==="idle"; }
  function ttsStart(){ ttsUi("play"); A.speakEls(A.$$("#heroBio .read",p), function(){ ttsUi("idle"); }); }
  if(tts){
    tts.onclick = function(){
      if(state==="idle") ttsStart();
      else if(state==="play"){ speechSynthesis.pause(); ttsUi("pause"); }
      else { speechSynthesis.resume(); ttsUi("play"); }
    };
    ttsRestart.onclick = ttsStart;
  }
});

/* ================= КАРТА ПАМЯЦІ ================= */
// Сапраўдная карта (Leaflet). З інтэрнэтам паказваюцца пліткі OpenStreetMap,
// без інтэрнэту — рэальныя вуліцы, рака, паркі і межы раёнаў з data/geo.js.
// LF — бібліятэка Leaflet (тут імя L занята функцыяй перакладу).
var LF = window.L;
A.route("map", function(p){
  p.innerHTML = A.head(t("mapH"), t("mapLead"))+'<div class="wrap">'+
  '<section class="section reveal" id="mapCity"><h2>'+t("mapCity")+'</h2><div class="mapwrap"><div class="map map--real" id="cityMap" role="region" aria-label="'+t("mapCity")+'"></div>'+
    '<div class="side"><input class="search" id="sq" type="search" placeholder="'+t("search")+'" aria-label="'+t("search")+'"><div id="slist" class="grid" style="gap:8px"></div><div class="card" id="sinfo"><p class="muted">'+t("pickPoint")+'</p></div></div></div></section>'+
  '<section class="section reveal" id="mapRegion"><h2>'+t("mapRegion")+'</h2><p class="kicker">'+t("grandma")+'</p><p>'+t("grandmaHint")+'</p>'+
    '<div class="chips" style="margin-bottom:12px"><button type="button" class="chip" data-pf="" aria-pressed="true">'+t("all")+'</button><button type="button" class="chip" data-pf="museum" aria-pressed="false">'+t("museums")+'</button><button type="button" class="chip" data-pf="memorial" aria-pressed="false">'+t("memorials")+'</button></div>'+
    '<div class="mapwrap"><div class="map map--real" id="regionMap" role="region" aria-label="'+t("mapRegion")+'"></div><div class="side">'+
      '<select class="search" id="dsel" aria-label="'+t("grandma")+'"><option value="">'+t("grandma")+'</option>'+DISTRICTS.slice().sort(function(a,b){ return L(a.name).localeCompare(L(b.name)); }).map(function(d){ return '<option value="'+d.id+'">'+esc(L(d.name))+' '+t("districtOf")+'</option>'; }).join("")+'</select>'+
      '<div class="card" id="rinfo"><p class="muted">'+t("pickPoint")+'</p></div></div></div></section>'+
  '</div>';
  if(!window.L || !LF.map){ A.$$(".map--real",p).forEach(function(m){ m.innerHTML = '<p class="muted" style="padding:20px">'+t("nothingHere")+'</p>'; }); return; }
  var city = cityMap(A.$("#cityMap",p)), region = regionMap(A.$("#regionMap",p));
  A.cleanup.push(function(){ city.map.remove(); region.map.remove(); });

  // вуліцы
  function sItem(s){ return '<button type="button" class="quiz__opt" data-sid="'+s.id+'" style="margin:0">'+(GOMEL_STREETS.indexOf(s)+1)+'. '+tx(s.name)+'</button>'; }
  function list(){ var q = A.$("#sq",p).value.toLowerCase(); A.$("#slist",p).innerHTML = GOMEL_STREETS.filter(function(s){ return !q || [s.name.be,s.name.ru,s.name.en,L(s.who)].join(" ").toLowerCase().indexOf(q)>-1; }).map(sItem).join(""); bindS(); }
  function showS(id, fly){
    var s = A.byId(GOMEL_STREETS,id);
    A.$$("[data-sid]",p).forEach(function(e){ e.classList.toggle("on", e.getAttribute("data-sid")===id); });
    city.select(id, fly);
    var hero = s.hero && A.byId(HEROES, s.hero);
    var box = A.$("#sinfo",p);
    box.innerHTML = (s.photo?'<img class="street-photo" src="'+esc(s.photo)+'" alt="'+esc(L(s.who))+'" loading="lazy">':'')+'<h3>'+tx(s.name)+'</h3>'+''+'<p><b>'+tx(s.who)+'</b></p><p>'+tx(s.story)+'</p>'+(hero?'<p><a href="#/hero/'+hero.id+'">'+esc(L(hero.name))+' →</a></p>':'')+
      (s.before||s.after?'<h4>'+t("thenNow")+'</h4><div id="ba"></div>':'')+'<h4 style="margin-top:1em">'+t("qrH")+'</h4><div id="sqr"></div>';
    if(s.before||s.after) A.beforeAfter(A.$("#ba",box), {before:s.before, after:s.after, alt:L(s.name)});
    A.qrBlock(A.$("#sqr",box), {kind:"street", id:s.id, title:L(s.name), sub:L(s.who), text:L(s.story)});
  }
  function bindS(){ A.$$("#slist [data-sid]",p).forEach(function(e){ e.onclick = function(){ showS(e.getAttribute("data-sid"), true); }; }); }
  city.onPick = function(id){ showS(id, false); };
  A.$("#sq",p).oninput = list; list();

  // вобласць
  function showD(id, fly){
    var d = A.byId(DISTRICTS,id); if(!d) return;
    region.select(id, fly); A.$("#dsel",p).value = id;
    var places = PLACES.filter(function(x){ return x.district===id; }), stories = DISTRICT_STORIES[id]||[];
    var heroes = HEROES.filter(function(h){ return h.district===id; });
    A.$("#rinfo",p).innerHTML = '<h3>'+esc(L(d.name))+' '+t("districtOf")+'</h3>'+
      (places.length||stories.length||heroes.length ? places.map(placeHtml).join("")+stories.map(function(s){ return '<p><b>'+esc(L(s.title))+'</b><br>'+esc(L(s.text))+'</p>'; }).join("")+heroes.map(function(h){ return '<p><a href="#/hero/'+h.id+'">'+esc(L(h.name))+'</a></p>'; }).join("")
        : '<p class="muted">'+t("nothingHere")+'</p>');
  }
  function placeHtml(x){ return '<div style="margin-bottom:12px">'+A.pic(x.img, L(x.name), A.illus.place(x.type, PLACES.indexOf(x), x.id), "pic--sm")+'<span class="tag">'+t(x.type==="museum"?"museums":"memorials")+'</span>'+'<h4 style="margin:.4em 0 .2em;font-size:1.2rem">'+esc(L(x.name))+'</h4><p style="font-size:.92rem">'+tx(x.text)+'</p></div>'; }
  region.onDistrict = function(id){ showD(id, false); };
  region.onPlace = function(x){ showD(x.district, false); };
  A.$("#dsel",p).onchange = function(){ if(this.value) showD(this.value, true); };
  A.$$("[data-pf]",p).forEach(function(c){ c.onclick=function(){ var v=c.getAttribute("data-pf"); A.$$("[data-pf]",p).forEach(function(o){o.setAttribute("aria-pressed",o===c);}); region.filter(v); }; });
});

// Агульная аснова: пліткі OSM па-над вектарнай падложкай. Калі інтэрнэту няма,
// пліткі не загружаюцца і застаецца відаць падложка з data/geo.js.
function baseMap(el, opts){
  var map = LF.map(el, { zoomControl:true, zoomSnap:opts.zoomSnap||1, scrollWheelZoom:false, minZoom:opts.minZoom, maxZoom:opts.maxZoom, maxBounds:opts.maxBounds, maxBoundsViscosity:.8 });
  map.attributionControl.setPrefix('<a href="https://leafletjs.com" target="_blank" rel="noopener">Leaflet</a>');
  map.createPane("base").style.zIndex = 150;   // ніжэй за пліткі (200)
  // Сервер OpenStreetMap блакуе запыты без адраса сайта (старонка, адкрытая як файл, яго не мае)
  // і паказвае «Access blocked». Таму для file:// бярэм пліткі OpenStreetMap France (стыль Humanitarian).
  var osm = '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>';
  var tiles = (location.protocol==="file:"
    ? LF.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", { subdomains:"abc", maxZoom:19, attribution:osm+', <a href="https://www.openstreetmap.fr/" target="_blank" rel="noopener">OSM France</a>' })
    : LF.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom:19, attribution:osm })).addTo(map);
  var fails = 0;
  tiles.on("tileerror", function(){ if(++fails>3){ el.classList.add("map--offline"); } });
  tiles.on("tileload", function(){ el.classList.remove("map--offline"); });
  if(navigator.onLine===false) el.classList.add("map--offline");
  // кола мышы — толькі разам з Ctrl, каб старонка гарталася як звычайна
  el.addEventListener("wheel", function(e){ if(e.ctrlKey){ e.preventDefault(); map.setZoom(map.getZoom()+(e.deltaY<0?1:-1)); } }, {passive:false});
  return map;
}
function bounds(lines){ var b = LF.latLngBounds([]); lines.forEach(function(l){ b.extend(l); }); return b; }

function cityMap(el){
  var G = window.GEO, map = baseMap(el, {minZoom:11, maxZoom:18, maxBounds:[[52.30,30.80],[52.56,31.18]]});
  map.setView([52.43, 30.99], 12);
  var base = {pane:"base", interactive:false};
  G.parks.forEach(function(r){ LF.polygon(r, LF.extend({className:"g-park", stroke:false, fillOpacity:1}, base)).addTo(map); });
  G.water.forEach(function(r){ LF.polygon(r, LF.extend({className:"g-water", stroke:false, fillOpacity:1}, base)).addTo(map); });
  [["c",1.2],["b",2.6],["a",4]].forEach(function(c){ LF.polyline(G.roads[c[0]], LF.extend({className:"g-road g-road--"+c[0], weight:c[1]}, base)).addTo(map); });
  var api = { map:map, onPick:null, lines:{} }, all = LF.latLngBounds([]);
  GOMEL_STREETS.forEach(function(st, i){
    var geo = st.line ? [st.line] : G.womenStreets[st.id]; if(!geo || !geo.length) return;
    var b = bounds(geo); all.extend(b);
    var line = LF.polyline(geo, {className:"street women", weight:7}).addTo(map);
    line.getElement && line.getElement() && line.getElement().setAttribute("data-sid", st.id);
    line.bindTooltip(L(st.name), {sticky:true});
    var mid = geo.reduce(function(a,g){ return g.length>a.length?g:a; }, []);
    var m = LF.marker(mid[Math.floor(mid.length/2)], { icon:LF.divIcon({className:"pin", html:'<span>'+(i+1)+'</span>', iconSize:[30,30], iconAnchor:[15,15]}), title:L(st.name), alt:L(st.name), keyboard:true }).addTo(map);
    function pick(){ if(api.onPick) api.onPick(st.id); }
    line.on("click", pick); m.on("click", pick);
    m.on("keypress", function(e){ if(e.originalEvent.key==="Enter") pick(); });
    api.lines[st.id] = {line:line, marker:m, bounds:b};
  });
  if(all.isValid()) map.fitBounds(all.pad(.25));
  api.select = function(id, fly){
    Object.keys(api.lines).forEach(function(k){ var o = api.lines[k]; o.line.setStyle({weight:k===id?11:7}); o.marker.getElement() && o.marker.getElement().classList.toggle("on", k===id); if(k===id) o.line.bringToFront(); });
    var o = api.lines[id]; if(o && fly) map.flyToBounds(o.bounds.pad(1.2), {maxZoom:16, duration:.8});
  };
  return api;
}

function regionMap(el){
  var G = window.GEO, map = baseMap(el, {minZoom:6.5, maxZoom:16, zoomSnap:.25, maxBounds:[[50.6,26.6],[54.2,32.8]]});
  var api = { map:map, onDistrict:null, onPlace:null, polys:{}, pins:[] };
  map.fitBounds(bounds([G.oblast[0][0]]), {padding:[8,8]});   // да дадавання слаёў, каб яны адразу трапілі на карту
  map.createPane("districts").style.zIndex = 380;
  Object.keys(G.rivers).forEach(function(k){ LF.polyline(G.rivers[k], {pane:"base", interactive:false, className:"g-river", weight:3}).addTo(map); });
  LF.polygon(G.oblast, {pane:"base", interactive:false, className:"g-land", stroke:false, fillOpacity:1}).addTo(map);
  DISTRICTS.forEach(function(d){
    var geo = G.districts[d.id]; if(!geo) return;
    var poly = LF.polygon(geo, {pane:"districts", className:"district", weight:1.5, fillOpacity:.12}).addTo(map);
    if(poly.getElement()){ poly.getElement().setAttribute("data-did", d.id); }
    poly.bindTooltip(L(d.name), {permanent:true, direction:"center", className:"dlabel"});
    poly.on("click", function(){ if(api.onDistrict) api.onDistrict(d.id); });
    api.polys[d.id] = poly;
  });
  LF.polygon(G.oblast, {pane:"districts", interactive:false, className:"g-oblast", fill:false, weight:3}).addTo(map);
  PLACES.forEach(function(x){
    if(x.lat==null) return;
    var m = LF.marker([x.lat, x.lon], { icon:LF.divIcon({className:"pin pin--"+x.type, html:'<span></span>', iconSize:[20,20], iconAnchor:[10,10]}), title:L(x.name), alt:L(x.name), keyboard:true, zIndexOffset:500 }).addTo(map);
    m.bindTooltip(L(x.name), {direction:"top", offset:[0,-8]});
    m.on("click", function(){ if(api.onPlace) api.onPlace(x); });
    m.on("keypress", function(e){ if(e.originalEvent.key==="Enter" && api.onPlace) api.onPlace(x); });
    m.place = x; api.pins.push(m);
  });
  // назвы раёнаў — толькі калі карта дастаткова вялікая
  function labels(){ el.classList.toggle("map--nolabels", map.getZoom()<8 && el.clientWidth<620); }
  map.on("zoomend", labels); labels();
  api.select = function(id, fly){
    Object.keys(api.polys).forEach(function(k){ var e = api.polys[k].getElement(); if(e) e.classList.toggle("on", k===id); });
    if(fly && api.polys[id]) map.flyToBounds(api.polys[id].getBounds(), {padding:[30,30], duration:.8});
  };
  api.filter = function(v){ api.pins.forEach(function(m){ if(!v || m.place.type===v) m.addTo(map); else m.remove(); }); };
  return api;
}

/* ================= СТУЖКА ЧАСУ ================= */
A.route("timeline", function(p){
  p.innerHTML = A.head(t("timelineH"), t("timelineLead"))+'<div class="wrap"><div class="tl__ctrl"><button type="button" class="iconbtn" id="tlPrev" aria-label="'+t("back")+'"><svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg></button><button type="button" class="iconbtn" id="tlNext" aria-label="'+t("next")+'"><svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></button></div></div>'+
   '<section class="tl section reveal" id="tl"><div class="tl__line" aria-hidden="true"></div><div class="tl__track" id="tlTrack" tabindex="0" aria-label="'+t("timelineH")+'">'+
   TIMELINE.map(function(e){ var h = e.hero && A.byId(HEROES, e.hero);
     return '<article class="tl__item"><div class="card card--pic">'+A.pic(e.img, L(e.title), A.illus.era(e.era))+'<p class="tl__era">'+t("era_"+e.era)+'</p><p class="tl__year">'+esc(e.year)+'</p><h3>'+esc(L(e.title))+'</h3><p>'+tx(e.text)+'</p>'+
       ''+(h?'<a href="#/hero/'+h.id+'">'+esc(L(h.name))+' →</a>':'')+'</div></article>'; }).join("")+
   '</div></section>';
  var tr = A.$("#tlTrack",p), step = function(){ return Math.min(340, tr.clientWidth*0.8); };
  A.$("#tlPrev",p).onclick = function(){ tr.scrollBy({left:-step(), behavior:"smooth"}); };
  A.$("#tlNext",p).onclick = function(){ tr.scrollBy({left:step(), behavior:"smooth"}); };
  tr.onkeydown = function(e){ if(e.key==="ArrowRight"){ tr.scrollBy({left:step()}); e.preventDefault(); } if(e.key==="ArrowLeft"){ tr.scrollBy({left:-step()}); e.preventDefault(); } };
  var down=false, sx=0, sl=0;
  tr.addEventListener("pointerdown", function(e){ if(e.pointerType!=="mouse") return; down=true; sx=e.clientX; sl=tr.scrollLeft; tr.classList.add("drag"); });
  function mv(e){ if(down) tr.scrollLeft = sl-(e.clientX-sx); }
  function up(){ down=false; tr.classList.remove("drag"); }
  addEventListener("pointermove", mv); addEventListener("pointerup", up);
  A.cleanup.push(function(){ removeEventListener("pointermove", mv); removeEventListener("pointerup", up); });
  tr.addEventListener("wheel", function(e){ if(Math.abs(e.deltaY)>Math.abs(e.deltaX) && tr.scrollWidth>tr.clientWidth){ var max = tr.scrollWidth-tr.clientWidth; if((e.deltaY>0 && tr.scrollLeft<max) || (e.deltaY<0 && tr.scrollLeft>0)){ tr.scrollLeft += e.deltaY; e.preventDefault(); } } }, {passive:false});
});
})();
