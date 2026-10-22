/* =========================================================
   Раздзелы: Ніткі памяці (лялькі), Святы, Ручнік, Імёны
   ========================================================= */
(function(){
"use strict";
var A = window.App, t = A.t, L = A.L, esc = A.esc, tx = A.tx;

/* ================= НІТКІ ПАМЯЦІ ================= */
A.route("dolls", function(p, id){
  var idx = Math.max(0, DOLLS.findIndex(function(d){ return d.id===id; }));
  p.innerHTML = A.head(t("dollsH"), t("dollsLead"), [[t("nav_dolls")]])+'<div class="wrap">'+
    '<div class="doll-strip reveal" id="dollStrip" role="list">'+DOLLS.map(function(d,i){
      return '<button type="button" role="listitem" class="doll-thumb" data-i="'+i+'" aria-label="'+esc(L(d.name))+'"><span class="zoom"><img src="assets/img/dolls/'+d.id+'-thumb.webp" alt="'+esc(L(d.alt))+'" loading="lazy" width="420" height="560"></span><span>'+esc(L(d.name))+'</span></button>';
    }).join("")+'</div>'+
    '<section class="section doll-view" id="dollView" aria-live="polite"></section>'+
    '<div class="orn-band orn-band--thin sec-sep" aria-hidden="true"></div>'+
    '<section class="section reveal" id="camp"><p class="kicker">'+t("howWeMade")+'</p><h2>'+t("campH")+'</h2><p>'+t("campLead")+'</p>'+
      '<ol class="grid g3" style="list-style:none;padding:0;counter-reset:s">'+CAMP.steps.map(function(s,i){ return '<li class="card"><p class="kicker">'+(i+1)+'</p><h3>'+esc(L(s.title))+'</h3><p>'+tx(s.text)+'</p></li>'; }).join("")+'</ol>'+
      (L(CAMP.participants)?'<p style="margin-top:1em">'+tx(CAMP.participants)+'</p>':'')+
      '<div class="grid g4">'+(CAMP.photos.length?CAMP.photos.map(function(ph){ return '<img src="'+esc(ph)+'" alt="" loading="lazy" style="border-radius:16px;aspect-ratio:4/3;object-fit:cover">'; }).join(""):'')+
      (CAMP.videos.length?CAMP.videos.map(function(v){ return '<video controls preload="none" src="'+esc(v.file)+'"'+(v.poster?' poster="'+esc(v.poster)+'"':'')+' style="border-radius:16px;width:100%"></video>'; }).join(""):'')+'</div>'+
    '</section></div>';
  var view = A.$("#dollView",p), strip = A.$("#dollStrip",p);
  function show(i, focus){
    idx = (i+DOLLS.length)%DOLLS.length; var d = DOLLS[idx], hero = d.hero && A.byId(HEROES, d.hero);
    A.$$(".doll-thumb",p).forEach(function(b,k){ b.setAttribute("aria-current", k===idx); });
    view.innerHTML = '<div><div class="doll-view__img zoom zoom--big" id="dvImg"><img src="assets/img/dolls/'+d.id+'.webp" alt="'+esc(L(d.alt))+'" width="900" height="1200"></div>'+
      '<div class="doll-nav"><button type="button" class="btn btn--ghost" data-dir="-1">← '+t("back")+'</button><span class="muted" style="align-self:center">'+(idx+1)+' / '+DOLLS.length+'</span><button type="button" class="btn btn--ghost" data-dir="1">'+t("next")+' →</button></div></div>'+
      '<div><p class="kicker">'+t("nav_dolls")+'</p><h2 style="font-size:clamp(2.2rem,5vw,3.2rem)">'+esc(L(d.name))+'</h2>'+
      '<p style="font-size:1.12rem">'+esc(L(d.desc))+'</p>'+
      '<h3>'+t("nameMeans")+'</h3><p>'+tx(d.meaning)+'</p>'+
      '<h3>'+t("symbols")+'</h3><p>'+tx(d.colors)+'</p><div class="sym-list">'+d.symbols.map(A.symChip).join("")+'</div>'+
      '<h3>'+t("forWhat")+'</h3><p>'+tx(d.holiday)+'</p>'+
      '<h3>'+t("story")+'</h3><p>'+tx(d.story)+'</p>'+
      (hero?'<h3>'+t("relatedHero")+'</h3><p><a href="#/hero/'+hero.id+'">'+esc(L(hero.name))+'</a></p>':'')+
      '<h3>'+t("qrH")+'</h3><div id="dqr"></div></div>';
    A.qrBlock(A.$("#dqr",view), {kind:"dolls", id:d.id, title:L(d.name), sub:t("dollsH"), text:L(d.desc)});
    A.$$("[data-dir]",view).forEach(function(b){ b.onclick = function(){ show(idx + +b.getAttribute("data-dir"), true); }; });
    // свайп
    var img = A.$("#dvImg",view), x0=null;
    img.addEventListener("touchstart", function(e){ x0 = e.touches[0].clientX; }, {passive:true});
    img.addEventListener("touchend", function(e){ if(x0===null) return; var dx = e.changedTouches[0].clientX-x0; if(Math.abs(dx)>40) show(idx+(dx<0?1:-1)); x0=null; });
    var th = A.$$(".doll-thumb",p)[idx]; if(th && th.scrollIntoView) strip.scrollTo({left: th.offsetLeft - strip.clientWidth/2 + th.clientWidth/2, behavior: A.reduced()?"auto":"smooth"});
    if(history.replaceState) history.replaceState(null, "", "#/dolls/"+d.id);
    if(focus) view.querySelector("h2").setAttribute("tabindex","-1");
  }
  A.$$(".doll-thumb",p).forEach(function(b){
    var i = +b.getAttribute("data-i");
    b.onclick = function(){ show(i); view.scrollIntoView({behavior:A.reduced()?"auto":"smooth", block:"start"}); };
    b.onmouseenter = function(){ if(matchMedia("(hover:hover)").matches) show(i); };
    b.onfocus = function(){ show(i); };
  });
  function key(e){ if(/INPUT|TEXTAREA/.test(document.activeElement.tagName)) return; if(e.key==="ArrowRight") show(idx+1); if(e.key==="ArrowLeft") show(idx-1); }
  addEventListener("keydown", key); A.cleanup.push(function(){ removeEventListener("keydown", key); });
  show(idx);
});

/* ================= СВЯТЫ ================= */
A.route("holidays", function(p){
  var next = A.nextHolidays(), nh = next[0];
  var byM = {}; MEMORY_DATES.forEach(function(d){ (byM[d.m]=byM[d.m]||[]).push(d); });
  p.innerHTML = A.head(t("holidaysH"), t("holidaysLead"))+'<div class="wrap">'+
    '<section class="card reveal" id="nextHol" style="display:flex;gap:20px;align-items:center;flex-wrap:wrap">'+A.pic(nh.h.img, L(nh.h.name), A.illus.holiday(nh.h.id), "pic--side")+
      '<div><p class="kicker">'+t("nextHoliday")+'</p><h2 style="margin:0">'+esc(L(nh.h.name))+'</h2><p class="muted" style="margin:0">'+App.fmtDate(nh.date)+' · '+(nh.days===0?t("today"):t("inDays",{n:nh.days}))+'</p></div>'+
      '<a class="btn" href="#/rushnik" style="margin-left:auto">'+t("nav_rushnik")+'</a></section>'+
    '<section class="section"><div class="hol">'+next.map(function(x){ var h=x.h, d=h.doll&&A.byId(DOLLS,h.doll);
      return '<article class="card reveal card--pic">'+A.pic(h.img, L(h.name), A.illus.holiday(h.id))+'<h3 style="margin:.2em 0 0">'+esc(L(h.name))+'</h3><p class="hol__date">'+esc(L(h.when))+' · '+App.fmtDate(x.date)+'</p><p style="margin:0">'+tx(h.text)+'</p>'+
        (d?'<a href="#/dolls/'+d.id+'" style="display:flex;gap:10px;align-items:center;margin-top:8px"><img src="assets/img/dolls/'+d.id+'-thumb.webp" alt="" width="40" height="54" style="border-radius:8px;width:40px;height:54px;object-fit:cover">'+t("relatedDoll")+': '+esc(L(d.name))+'</a>':'')+'</article>'; }).join("")+'</div></section>'+
    '<section class="section reveal" id="memDates"><h2>'+t("memDates")+'</h2><div class="months">'+
      Object.keys(byM).sort(function(a,b){return a-b;}).map(function(m){ return '<div class="card month"><h4>'+t("months")[m-1]+'</h4><ul>'+byM[m].map(function(d){ var h=d.hero&&A.byId(HEROES,d.hero);
        return '<li><b>'+d.d+'</b>'+tx(d.text)+(h?' · <a href="#/hero/'+h.id+'">'+esc(L(h.name))+'</a>':'')+'</li>'; }).join("")+'</ul></div>'; }).join("")+'</div></section>'+
    '<section class="section card reveal" id="symbolsInfo"><h2>'+t("symbols")+'</h2><div class="grid g3">'+Object.keys(SYMBOLS).map(function(k){ var s=SYMBOLS[k];
      return '<div style="display:flex;gap:12px">'+A.symIcon(k,4).replace("<svg ",'<svg style="width:52px;height:52px;flex-shrink:0" ')+'<div><b>'+esc(L(s.name))+'</b> <span class="tag">'+t("meaning_"+s.cat)+'</span><p style="font-size:.9rem;margin:.3em 0 0">'+esc(L(s.text))+'</p></div></div>'; }).join("")+'</div></section>'+
  '</div>';
});

/* ================= РУЧНІК ================= */
A.route("rushnik", function(p){
  var layers = A.get("rushnik", ["star","romb","berehinia"]);
  var cats = ["protect","harvest","love","kin"];
  p.innerHTML = A.head(t("rushnikH"), t("rushnikLead"), [[t("nav_holidays"),"#/holidays"],[t("rushnikH")]])+'<div class="wrap"><div class="rk">'+
    '<div id="rkPal">'+cats.map(function(c){ return '<h3 style="margin-top:.6em">'+t("meaning_"+c)+'</h3><div class="rk__palette">'+Object.keys(SYMBOLS).filter(function(k){ return SYMBOLS[k].cat===c; }).map(function(k){
      return '<button type="button" class="motif" data-add="'+k+'" title="'+esc(L(SYMBOLS[k].text))+'">'+A.symIcon(k,4)+esc(L(SYMBOLS[k].name))+'<small class="muted" style="font-weight:400">'+esc(L(SYMBOLS[k].text))+'</small></button>'; }).join("")+'</div>'; }).join("")+'</div>'+
    '<div class="rk__canvas"><canvas id="rkC" aria-label="'+t("rushnikH")+'"></canvas>'+
      '<div class="card" style="width:100%;box-shadow:none"><h3>'+t("message")+'</h3><p id="rkMsg" aria-live="polite"></p></div>'+
      '<div class="rk__layers"><ul id="rkL"></ul></div>'+
      '<div class="btns"><button type="button" class="btn" id="rkDl">'+t("download")+' PNG</button><button type="button" class="btn btn--ghost" id="rkPr">'+t("print")+'</button><button type="button" class="btn btn--ghost" id="rkClr">'+t("clear")+'</button></div></div>'+
  '</div></div>';
  var C = A.$("#rkC",p);
  function render(scale){
    scale = scale||2; var cell = 9*scale, cols = 21, m = layers.length;
    var bandH = BAND.length, rows = 4 + bandH + 2 + Math.max(1,m)*(13+3) + bandH + 4;
    var c = scale===2 ? C : A.canvas(1,1);
    c.width = cols*cell; c.height = rows*cell + 40*scale;
    var x = c.getContext("2d"), red = "#C8102E";
    Stitch.linen(x, c.width, rows*cell, cell);
    var y = 3*cell; Stitch.draw(x, Stitch.bandRow(cols-2), cell, y, cell, red); y += (bandH+2)*cell;
    if(!m){ x.fillStyle="#8a7d6c"; x.font=(12*scale)+"px Manrope, Arial"; x.textAlign="center"; A.wrap(x, t("emptyRushnik"), c.width/2, y+6*cell, c.width-4*cell, 16*scale); }
    layers.forEach(function(k){ Stitch.draw(x, SYMBOLS[k].m, 4*cell, y, cell, red); y += 16*cell; });
    y += (m?0:16*cell) - cell; Stitch.draw(x, Stitch.bandRow(cols-2), cell, y, cell, red);
    // махры
    x.strokeStyle="#E7DCC8"; x.lineWidth=1.4*scale;
    for(var i=2;i<c.width;i+=3*scale){ x.beginPath(); x.moveTo(i, rows*cell); x.lineTo(i+Math.sin(i)*2*scale, rows*cell+36*scale); x.stroke(); }
    return c;
  }
  function msg(){
    if(!layers.length) return L(RUSHNIK_MSG.empty);
    var cnt = {}; layers.forEach(function(k){ var c = SYMBOLS[k].cat; cnt[c]=(cnt[c]||0)+1; });
    var order = cats.filter(function(c){ return cnt[c]; }).sort(function(a,b){ return cnt[b]-cnt[a]; });
    return order.map(function(c){ return L(RUSHNIK_MSG[c]); }).join(" ")+" "+L(RUSHNIK_MSG.mostly).replace("{c}", t("meaning_"+order[0]).toLowerCase());
  }
  function upd(){
    A.set("rushnik", layers); render(2);
    A.$("#rkMsg",p).textContent = msg();
    A.$("#rkL",p).innerHTML = layers.map(function(k,i){ return '<li><span>'+(i+1)+'. '+esc(L(SYMBOLS[k].name))+' · <span class="muted">'+t("meaning_"+SYMBOLS[k].cat)+'</span></span><span><button type="button" class="btn btn--ghost btn--small" data-up="'+i+'" '+(i?'':'disabled')+'>↑ '+t("up")+'</button> <button type="button" class="btn btn--ghost btn--small" data-rm="'+i+'">'+t("remove")+'</button></span></li>'; }).join("");
    A.$$("[data-rm]",p).forEach(function(b){ b.onclick=function(){ layers.splice(+b.getAttribute("data-rm"),1); upd(); }; });
    A.$$("[data-up]",p).forEach(function(b){ b.onclick=function(){ var i=+b.getAttribute("data-up"); var x=layers[i]; layers[i]=layers[i-1]; layers[i-1]=x; upd(); }; });
  }
  A.$$("[data-add]",p).forEach(function(b){ b.onclick=function(){ if(layers.length>=8){ layers.shift(); } layers.push(b.getAttribute("data-add")); upd(); }; });
  A.$("#rkClr",p).onclick = function(){ layers = []; upd(); };
  A.$("#rkDl",p).onclick = function(){ A.downloadCanvas(C, "ruchnik.png"); };
  A.$("#rkPr",p).onclick = function(){
    var w = window.open("", "_blank"); if(!w){ window.print(); return; }
    w.document.write('<title>'+t("rushnikH")+'</title><body style="margin:0;text-align:center;font-family:sans-serif"><img src="'+C.toDataURL()+'" style="max-height:95vh"><p>'+esc(msg())+'</p><script>onload=function(){print()}<\/script>');
    w.document.close();
  };
  upd();
});

/* ================= ІМЁНЫ ================= */
A.findName = function(s){
  s = String(s||"").trim().toLowerCase(); if(!s) return null;
  for(var i=0;i<NAMES.length;i++){ var n=NAMES[i]; if(n.forms.indexOf(s)>-1 || [n.name.be,n.name.ru,n.name.en].some(function(x){ return x.toLowerCase()===s; })) return n; }
  return null;
};
A.route("names", function(p){
  var last = A.get("embName", "Алеся");
  p.innerHTML = A.head(t("namesH"), t("namesLead"))+'<div class="wrap">'+
    '<section class="section card reveal" id="embroidery"><p class="kicker">'+t("embH")+'</p><h2>'+t("embH")+'</h2><p>'+t("embLead")+'</p>'+
      '<form id="embF" class="btns" style="align-items:center"><label class="sr" for="embI">'+t("yourName")+'</label><input id="embI" class="search" style="max-width:320px" maxlength="16" value="'+esc(last)+'" placeholder="'+t("yourName")+'"><button class="btn" type="submit">'+t("embroider")+'</button></form>'+
      '<div class="emb"><canvas id="embC" aria-label="'+t("embH")+'"></canvas><div id="embInfo"></div></div>'+
      '<div class="btns"><button type="button" class="btn btn--green" id="embDl">'+t("download")+' PNG</button></div></section>'+
    '<section class="section reveal" id="nameSearch"><h2>'+t("namesH")+'</h2><input id="nq" class="search" type="search" placeholder="'+t("search")+'" aria-label="'+t("search")+'" style="max-width:420px;margin-bottom:16px"><div class="namelist" id="nl"></div></section>'+
    '<section class="section card reveal" id="nameStreets"><h2>'+t("streetsNames")+'</h2><ul>'+GOMEL_STREETS.map(function(s){ return '<li><a href="#/map">'+tx(s.name)+'</a> · '+tx(s.who)+'</li>'; }).join("")+'</ul></section>'+
  '</div>';
  var C = A.$("#embC",p);
  function info(name){
    var n = A.findName(name), box = A.$("#embInfo",p);
    if(!n){ box.innerHTML = '<p class="muted">'+t("nameUnknown")+'</p>'; return; }
    var hs = n.heroes.map(function(id){ return A.byId(HEROES,id); }).filter(Boolean);
    box.innerHTML = '<h3 style="font-size:2rem">'+esc(L(n.name))+'</h3><p><b>'+t("nameMeans")+':</b> '+esc(L(n.meaning))+'</p><p><b>'+t("origin")+':</b> '+esc(L(n.origin))+'</p>'+
      '<p><b>'+t("famous")+':</b> '+tx(n.famous)+'</p>'+hs.map(function(h){ return '<a class="btn btn--ghost btn--small" href="#/hero/'+h.id+'">'+esc(L(h.name))+' →</a>'; }).join(" ");
  }
  function draw(name){
    name = name.trim() || "Алеся";
    var m = Stitch.textMatrix(name, 13), cell = 14, padX = 5, w = m[0].length, cols = Math.max(w + padX*2, 30);
    var bandH = BAND.length, rows = 3 + bandH + 4 + m.length + 4 + bandH + 3;
    C.width = cols*cell; C.height = rows*cell;
    var x = C.getContext("2d"), red = "#C8102E";
    Stitch.linen(x, C.width, C.height, cell);
    Stitch.draw(x, Stitch.bandRow(cols-2), cell, 3*cell, cell, red);
    Stitch.draw(x, m, Math.floor((cols-w)/2)*cell, (3+bandH+4)*cell, cell, "#B30E2A");
    // кветкі па баках
    var side = SYMBOLS.star.m.map(function(r){ return r; });
    if(cols >= w + 2*15) { Stitch.draw(x, side, cell, (3+bandH+4+ (m.length-13)/2|0)*cell, cell, "#1F7A3E"); }
    Stitch.draw(x, Stitch.bandRow(cols-2), cell, (rows-3-bandH)*cell, cell, red);
  }
  function go(){ var v = A.$("#embI",p).value; A.set("embName", v); draw(v); info(v); }
  A.$("#embF",p).onsubmit = function(e){ e.preventDefault(); go(); };
  A.$("#embDl",p).onclick = function(){ A.downloadCanvas(C, "imya-"+A.slug(A.$("#embI",p).value||"name")+".png"); };
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(go);
  function list(){ var q = A.$("#nq",p).value.toLowerCase();
    A.$("#nl",p).innerHTML = NAMES.filter(function(n){ return !q || n.forms.join(" ").indexOf(q)>-1 || L(n.name).toLowerCase().indexOf(q)>-1; }).map(function(n){
      return '<button type="button" class="card" data-name="'+esc(L(n.name))+'" style="text-align:left;cursor:pointer;font:inherit;color:inherit"><b style="font-family:var(--head);font-size:1.5rem">'+esc(L(n.name))+'</b><br><span class="muted">'+esc(L(n.origin))+'</span><p style="margin:.4em 0 0">'+esc(L(n.meaning))+'</p></button>'; }).join("");
    A.$$("[data-name]",p).forEach(function(b){ b.onclick = function(){ A.$("#embI",p).value = b.getAttribute("data-name"); go(); A.$("#embroidery",p).scrollIntoView({behavior:A.reduced()?"auto":"smooth"}); }; });
  }
  A.$("#nq",p).oninput = list; list();
});
})();
