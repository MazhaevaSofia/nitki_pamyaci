/* =========================================================
   Агульныя віджэты: арнамент, ніць, свечка, QR-табліцы, плакаты,
   «тады і цяпер», агучка, кукла-праваднік.
   ========================================================= */
(function(){
"use strict";
var A = window.App, t = A.t, L = A.L, esc = A.esc;

/* ---------- арнамент як CSS-фон (залежыць ад тэмы) ---------- */
A.ornamentVars = function(){
  var red = Stitch.cssColor("--red"), root = document.documentElement.style;
  root.setProperty("--orn-band", Stitch.dataUri(Stitch.svg(Stitch.bandRow(16), {cell:2, color:red})));
  root.setProperty("--orn-field", Stitch.dataUri(Stitch.svg(pad(SYMBOLS.star.m, 3), {cell:4, color:red})));
};
function pad(m, n){ var w=m[0].length+n*2, e=new Array(w+1).join("."), out=[]; for(var i=0;i<n;i++) out.push(e); m.forEach(function(r){ out.push(new Array(n+1).join(".")+r+new Array(n+1).join(".")); }); for(i=0;i<n;i++) out.push(e); return out; }
A.symIcon = function(id, size){ var s = SYMBOLS[id]; return s ? Stitch.svg(s.m, {cell:size||4, color:"var(--red)"}) : ""; };
A.symChip = function(id){
  var s = SYMBOLS[id]; if(!s) return "";
  return '<span class="sym" tabindex="0" title="'+esc(L(s.text))+'">'+A.symIcon(id,3)+esc(L(s.name))+'</span>';
};

/* ---------- плаўная з'ява блокаў ---------- */
A.reveal = function(root){
  var els = A.$$(".reveal", root);
  if(!("IntersectionObserver" in window) || A.reduced()){ els.forEach(function(e){ e.classList.add("in"); }); return; }
  var io = new IntersectionObserver(function(en){ en.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }); }, {rootMargin:"0px 0px -8% 0px"});
  els.forEach(function(e){ io.observe(e); });
  A.cleanup.push(function(){ io.disconnect(); });
};

/* ---------- чырвоная ніць, якая вышываецца пры пракрутцы ---------- */
A.thread = function(page){
  var H = page.scrollHeight; if(H < 900) return;
  var marks = A.$$(".section, .page-head", page).map(function(s){ return s.offsetTop + 30; });
  var w = 60, x0 = 30, d = "M"+x0+" 0", y = 0, step = 160, i = 0;
  while(y < H){ var ny = Math.min(H, y+step); d += " Q "+(i%2? x0-18 : x0+18)+" "+(y+step/2)+" "+x0+" "+ny; y = ny; i++; }
  var kinds = ["cross","rose","ear","star","tree"], g = "";
  marks.forEach(function(my, k){
    var s = SYMBOLS[kinds[k%kinds.length]];
    g += '<g class="mk" data-y="'+my+'" transform="translate('+(x0-16)+' '+(my-16)+')">'+Stitch.svg(s.m,{cell:32/13,color:"var(--red)"}).replace("<svg ",'<svg width="32" height="32" ')+'</g>';
  });
  var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
  svg.setAttribute("class","thread"); svg.setAttribute("aria-hidden","true");
  svg.setAttribute("width", w); svg.setAttribute("height", H); svg.setAttribute("viewBox","0 0 "+w+" "+H);
  svg.innerHTML = '<path class="t" d="'+d+'"/>'+g;
  svg.style.left = "max(4px, calc((100vw - var(--maxw)) / 2 - 76px))";
  page.appendChild(svg);
  var path = svg.querySelector("path"), len = path.getTotalLength();
  path.style.strokeDasharray = len; path.style.strokeDashoffset = len;
  var mks = A.$$(".mk", svg);
  function upd(){
    var top = page.getBoundingClientRect().top + scrollY;
    var drawnY = scrollY + innerHeight*0.65 - top;
    var p = Math.max(0, Math.min(1, drawnY / H));
    path.style.strokeDashoffset = A.reduced() ? 0 : len*(1-p);
    mks.forEach(function(m){ m.classList.toggle("on", A.reduced() || +m.getAttribute("data-y") < drawnY); });
  }
  upd(); addEventListener("scroll", upd, {passive:true});
  A.cleanup.push(function(){ removeEventListener("scroll", upd); });
};

/* ---------- свечка памяці ---------- */
A.candle = function(el, key){
  var all = A.get("candles", {}), n = all[key]||0, total = Object.keys(all).reduce(function(s,k){ return s+all[k]; },0);
  el.innerHTML = '<div class="candle'+(n?' lit':'')+'"><div class="candle__fig" aria-hidden="true"><div class="candle__flame"></div><div class="candle__wick"></div><div class="candle__wax"></div></div>'+
    '<div><p class="candle__n"><span data-n>'+(key==="all"?total:n)+'</span> <small class="muted" style="font-size:.9rem">'+t("candles")+'</small></p>'+
    '<button type="button" class="btn">'+t("candleBtn")+'</button><p class="muted" data-msg style="margin-top:.6em" aria-live="polite"></p></div></div>';
  el.querySelector("button").onclick = function(){
    var all = A.get("candles", {}); all[key] = (all[key]||0)+1; A.set("candles", all);
    var tot = Object.keys(all).reduce(function(s,k){ return s+all[k]; },0);
    el.querySelector("[data-n]").textContent = key==="all" ? tot : all[key];
    el.querySelector(".candle").classList.add("lit");
    el.querySelector("[data-msg]").textContent = t("candleLit");
    if(!A.storageOk) A.toast(t("storageOff"));
  };
};

/* ---------- тэкст на canvas з пераносам ---------- */
A.wrap = function(x, text, X, Y, maxW, lh, maxLines){
  var words = String(text).split(/\s+/), line = "", n = 0;
  for(var i=0;i<words.length;i++){
    var test = line ? line+" "+words[i] : words[i];
    if(x.measureText(test).width > maxW && line){ x.fillText(line, X, Y); Y += lh; line = words[i]; n++; if(maxLines && n>=maxLines-1){ var rest = words.slice(i).join(" "); while(x.measureText(rest+"…").width>maxW && rest.length) rest = rest.slice(0,-1); x.fillText(rest+(rest.length<words.slice(i).join(" ").length?"…":""), X, Y); return Y+lh; } }
    else line = test;
  }
  if(line){ x.fillText(line, X, Y); Y += lh; }
  return Y;
};
A.canvas = function(w, h){ var c = document.createElement("canvas"); c.width = w; c.height = h; return c; };
A.bandOnCanvas = function(x, X, Y, W, cell, col){
  var cols = Math.floor(W/cell); Stitch.draw(x, Stitch.bandRow(cols), X + (W-cols*cell)/2, Y, cell, col);
  return BAND.length*cell;
};

/* ---------- QR-табліца для друку ---------- */
A.qrBlock = function(el, o){
  var qr = A.qrCanvas(A.qrText(o.kind, o.id, o.title), 300);
  el.innerHTML = '<div class="qrbox"></div><p class="muted" style="margin-top:.8em">'+t("qrText")+'</p><div class="btns"><button type="button" class="btn btn--ghost btn--small" data-dl>'+t("qrDownload")+'</button></div>';
  qr.setAttribute("role","img"); qr.setAttribute("aria-label","QR: "+o.title);
  el.querySelector(".qrbox").appendChild(qr);
  var txt = document.createElement("div"); txt.innerHTML = '<b style="font-family:var(--head);font-size:1.3rem">'+esc(o.title)+'</b><br><span class="muted">'+esc(o.sub||"")+'</span>';
  el.querySelector(".qrbox").appendChild(txt);
  el.querySelector("[data-dl]").onclick = function(){ A.downloadCanvas(A.labelCanvas(o), "tablichka-"+o.id+".png"); };
};
A.labelCanvas = function(o){
  var W=1200, H=800, c=A.canvas(W,H), x=c.getContext("2d"), red="#C8102E";
  x.fillStyle="#FFFDF8"; x.fillRect(0,0,W,H);
  A.bandOnCanvas(x, 40, 30, W-80, 6, red); A.bandOnCanvas(x, 40, H-30-BAND.length*6, W-80, 6, red);
  var q = A.qrCanvas(A.qrText(o.kind, o.id, o.title), 420); x.imageSmoothingEnabled=false; x.drawImage(q, W-40-440, 170, 440, 440);
  x.fillStyle="#A50D26"; x.font="800 26px Manrope, Arial"; x.fillText(t("siteTitle").toUpperCase()+" · "+t("siteSub").toUpperCase(), 60, 150);
  x.fillStyle="#2A2623"; x.font="700 76px 'Cormorant Garamond', Georgia, serif";
  var y = A.wrap(x, o.title, 60, 250, 620, 80, 3);
  x.font="500 30px Manrope, Arial"; x.fillStyle="#6B6158"; y = A.wrap(x, o.sub||"", 60, y+20, 620, 42, 3);
  if(o.text){ x.font="400 26px Manrope, Arial"; x.fillStyle="#2A2623"; A.wrap(x, o.text, 60, y+20, 620, 38, 6); }
  return c;
};

/* ---------- плакат гераіні (A4, 150 dpi) ---------- */
A.posterCanvas = function(h){
  var W=1240, H=1754, c=A.canvas(W,H), x=c.getContext("2d"), red="#C8102E";
  x.fillStyle="#FBF7EF"; x.fillRect(0,0,W,H);
  // рамка-арнамент
  var cell=8; A.bandOnCanvas(x, 60, 50, W-120, cell, red); A.bandOnCanvas(x, 60, H-50-BAND.length*cell, W-120, cell, red);
  x.strokeStyle=red; x.lineWidth=3; x.strokeRect(60, 50+BAND.length*cell+20, W-120, H-2*(50+BAND.length*cell+20));
  var y = 230;
  x.fillStyle="#A50D26"; x.font="800 30px Manrope, Arial"; x.textAlign="center"; x.fillText(t("siteTitle").toUpperCase()+" · "+t("siteSub").toUpperCase(), W/2, y);
  x.fillStyle="#2A2623"; x.font="700 110px 'Cormorant Garamond', Georgia, serif"; y = A.wrap(x, L(h.name), W/2, y+140, W-260, 112, 2);
  x.font="600 40px Manrope, Arial"; x.fillStyle="#1F7A3E"; x.fillText(h.years+"  ·  "+L(h.place), W/2, y+10);
  // знак
  var m = SYMBOLS[h.era==="war"?"cross":"star"].m; Stitch.draw(x, m, W/2-13*9/2, y+60, 9, red);
  x.textAlign="left"; x.fillStyle="#2A2623"; x.font="500 38px Manrope, Arial";
  y = A.wrap(x, L(h.contribution), 140, y+250, W-280, 56, 7);
  x.font="400 30px Manrope, Arial"; x.fillStyle="#3b3632";
  var bio = (L(h.bio)||[]).join(" ");
  y = A.wrap(x, bio, 140, y+30, W-280, 44, 12);
  var q = A.qrCanvas(A.qrText("hero", h.id, L(h.name)), 260); x.imageSmoothingEnabled=false; x.drawImage(q, W-140-260, H-200-260, 260, 260);
  x.fillStyle="#6B6158"; x.font="400 24px Manrope, Arial";
  A.wrap(x, t("siteMotto")+". 2026", 140, H-170, W-560, 34, 3);
  return c;
};

/* ---------- «тады і цяпер» ---------- */
A.placeholderPhoto = function(label, year, tone){
  return '<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><rect width="800" height="500" fill="'+(tone==="old"?"#cfc5b4":"#dfe9e0")+'"/>'+
    '<g fill="'+(tone==="old"?"#8f8473":"#7fa08a")+'"><rect x="80" y="210" width="140" height="200"/><rect x="250" y="160" width="120" height="250"/><rect x="400" y="230" width="170" height="180"/><rect x="600" y="190" width="120" height="220"/></g>'+
    '<rect y="410" width="800" height="90" fill="'+(tone==="old"?"#a89c88":"#9fb8a5")+'"/>'+
    '<text x="400" y="120" text-anchor="middle" font-family="Georgia,serif" font-size="64" fill="#fff" font-weight="700">'+esc(year)+'</text>'+
    '<text x="400" y="470" text-anchor="middle" font-family="Arial" font-size="22" fill="#fff">'+esc(label)+'</text></svg>';
};
A.beforeAfter = function(el, o){
  var b = o.before ? '<img src="'+esc(o.before)+'" alt="'+esc(o.alt||"")+' 1943" loading="lazy">' : A.placeholderPhoto("", o.y1||"1943", "old");
  var a = o.after ? '<img src="'+esc(o.after)+'" alt="'+esc(o.alt||"")+' 2026" loading="lazy">' : A.placeholderPhoto("", o.y2||"2026", "new");
  el.innerHTML = '<div class="ba">'+a+'<div class="ba__top" style="position:absolute;inset:0">'+b+'</div><div class="ba__bar"></div>'+
    '<span class="ba__lbl" style="left:10px">'+esc(o.y1||"1943")+'</span><span class="ba__lbl" style="right:10px">'+esc(o.y2||"2026")+'</span>'+
    '<input type="range" min="0" max="100" value="50" aria-label="'+t("thenNow")+'"></div>';
  var inp = el.querySelector("input"), top = el.querySelector(".ba__top"), bar = el.querySelector(".ba__bar");
  inp.oninput = function(){ top.style.clipPath = "inset(0 "+(100-inp.value)+"% 0 0)"; bar.style.left = inp.value+"%"; };
  inp.oninput();
};

/* ---------- сілуэт-заглушка для партрэта ---------- */
A.portraitSvg = function(seed){
  var h = A.byId(HEROES, seed), name = h ? L(h.name) : "", ini = name.split(" ").map(function(w){ return w.charAt(0); }).join("").slice(0,2);
  var star = Stitch.svg(SYMBOLS[h && h.era==="war" ? "cross" : "star"].m, {cell:6, color:"#C8102E"}).replace(/<svg[^>]*>/,"").replace("</svg>","");
  return '<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+esc(name)+'"><rect width="300" height="400" fill="#EFE5D3"/>'+
    '<rect x="14" y="14" width="272" height="372" rx="10" fill="none" stroke="#C8102E" stroke-width="2" stroke-dasharray="3 5"/>'+
    '<g transform="translate(111 56)" opacity=".9">'+star+'</g>'+
    '<text x="150" y="250" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="96" font-weight="700" fill="#2A2623">'+esc(ini)+'</text>'+
    '<text x="150" y="300" text-anchor="middle" font-family="Manrope, Arial" font-size="14" fill="#6B6158">'+esc(name)+'</text>'+'</svg>';
};

/* ---------- агучка браўзера ---------- */
// Галасы для бягучай мовы, лепшыя першымі. Беларускага голасу ў браўзерах звычайна няма,
// тады для беларускай версіі бярэцца рускі голас і чытаецца руская версія тэксту.
A.voiceList = function(){
  if(!window.speechSynthesis) return [];
  var want = {be:["be","ru"],ru:["ru"],en:["en"]}[A.lang];
  function score(v){
    var n = v.name, l = v.lang.toLowerCase(), s = 0, li = -1;
    for(var i=0;i<want.length;i++) if(l.indexOf(want[i])===0){ li = i; break; }
    if(li<0) return -1;
    s += (want.length-li)*1000;                       // спачатку патрэбная мова
    if(/natural|neural/i.test(n)) s += 300;           // нейрагаласы Edge
    else if(/online/i.test(n)) s += 200;
    else if(/google/i.test(n)) s += 150;              // анлайн-голас Chrome
    if(/svetlana|dariya|ekaterina|milena|alena|irina|zira|jenny|aria|sonia|libby|google/i.test(n)) s += 10;
    return s;
  }
  return speechSynthesis.getVoices().map(function(v){ return {v:v, s:score(v)}; }).filter(function(x){ return x.s>=0; })
    .sort(function(a,b){ return b.s-a.s; }).map(function(x){ return x.v; });
};
// самы якасны з даступных галасоў; калі лепшага няма — звычайны сістэмны
A.voiceFor = function(){ return A.voiceList()[0] || null; };
// ці ёсць добры (нейронавы або анлайн) голас
A.goodVoice = function(v){ return !!v && /natural|neural|online|google/i.test(v.name); };
// gen — нумар чытання: пасля спынення старыя абзацы не працягваюцца
var ttsGen = 0;
A.speakEls = function(els, onEnd){
  if(!window.speechSynthesis){ A.toast("Speech: —"); return; }
  A.stopSpeak(); var i = 0, gen = ++ttsGen;
  function next(){
    if(gen!==ttsGen) return;
    els.forEach(function(e){ e.classList.remove("reading"); });
    if(i>=els.length){ if(onEnd) onEnd(); return; }
    var el = els[i++], v = A.voiceFor();
    // беларускі тэкст рускім голасам гучыць кепска — тады чытаем рускую версію абзаца (data-say-ru)
    var txt = (v && A.lang==="be" && v.lang.toLowerCase().indexOf("be")!==0 && el.getAttribute("data-say-ru")) || el.textContent;
    var u = new SpeechSynthesisUtterance(txt);
    if(v){ u.voice = v; u.lang = v.lang; if(!A.goodVoice(v)) u.rate = .95; } else u.lang = {be:"be-BY",ru:"ru-RU",en:"en-GB"}[A.lang];
    el.classList.add("reading"); el.scrollIntoView({block:"center", behavior: A.reduced()?"auto":"smooth"});
    u.onend = next; u.onerror = next; speechSynthesis.speak(u);
  }
  next();
};
A.stopSpeak = function(){
  ttsGen++;
  if(window.speechSynthesis){ speechSynthesis.cancel(); speechSynthesis.resume(); }
  A.$$(".reading").forEach(function(e){ e.classList.remove("reading"); });
};

/* ---------- кукла-праваднік ---------- */
A.guide = function(){
  var g = A.$("#guide");
  if(!A.get("guide", CONFIG.guideEnabled) || document.body.classList.contains("demo")){ g.hidden = true; return; }
  var nh = A.nextHolidays()[0], doll = (nh.h.doll && A.byId(DOLLS, nh.h.doll)) || DOLLS[(new Date().getDate())%DOLLS.length];
  var route = A.current ? A.current.name : "home";
  var tip = { home:["heroes","nav_heroes"], heroes:["map","nav_map"], hero:["timeline","nav_timeline"], map:["dolls","nav_dolls"], dolls:["holidays","nav_holidays"], holidays:["rushnik","nav_rushnik"], rushnik:["names","nav_names"], names:["quiz","nav_quiz"] }[route] || ["home","nav_home"];
  var hol = nh.days<=30 ? '<p>'+esc(t("guideHoliday",{h:L(nh.h.name)+" ("+(nh.days===0?t("today"):t("inDays",{n:nh.days}))+")"}))+'</p>' : "";
  g.innerHTML = '<button type="button" class="guide__doll" aria-expanded="false" aria-label="'+esc(L(doll.name))+'"><img src="assets/img/dolls/'+doll.id+'-thumb.webp" alt=""></button>'+
    '<div class="guide__bubble" hidden><p><b>'+esc(t("guideHello",{doll:L(doll.name)}))+'</b></p>'+hol+
    '<p><a href="#/'+tip[0]+'">'+t("guideGo")+': '+esc(t(tip[1]))+' →</a></p><button type="button" class="guide__x">'+t("guideOff")+'</button></div>';
  g.hidden = false;
  var btn = g.querySelector(".guide__doll"), bub = g.querySelector(".guide__bubble");
  function open(v){ bub.hidden = !v; btn.setAttribute("aria-expanded", v); }
  btn.onclick = function(){ open(bub.hidden); };
  if(!A._guideShown){ A._guideShown = true; setTimeout(function(){ open(true); }, 1500); setTimeout(function(){ open(false); }, 9000); }
  g.querySelector(".guide__x").onclick = function(){ A.set("guide", false); g.hidden = true; };
};
})();
