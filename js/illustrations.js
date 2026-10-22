/* =========================================================
   Ілюстрацыі ў народным стылі (малююцца кодам, SVG).
   Паказваюцца, пакуль каманда не дадала сапраўднае фота
   (поле img або photo у файлах data/*.js).
   ========================================================= */
(function(){
"use strict";
var A = window.App;
var C = { red:"#C8102E", dred:"#8E0B20", green:"#1F7A3E", lgreen:"#6FA56F", gold:"#D9A441", linen:"#F4ECDD", cream:"#FBF7EF", ink:"#2A2623", sky:"#E9DCC6", night:"#23314F", water:"#8DB6D6", brown:"#8A6A4A" };

function frame(inner, bg){
  return '<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true" class="illus">'+
    '<rect width="400" height="260" fill="'+(bg||C.sky)+'"/>'+inner+border()+'</svg>';
}
// чырвоны бардзюр-крыжыкі па нізе
function border(){
  var s = '<g stroke="'+C.red+'" stroke-width="2" opacity=".9">';
  for(var x=6; x<400; x+=12){ s += '<path d="M'+x+' 246l6 6M'+(x+6)+' 246l-6 6"/>'; }
  return s+'</g><rect y="242" width="400" height="2" fill="'+C.red+'"/>';
}
function stitch(id, x, y, cell, col){
  var m = SYMBOLS[id].m, s = '<g stroke="'+(col||C.red)+'" stroke-width="'+(cell*0.25)+'" stroke-linecap="round">';
  for(var r=0;r<m.length;r++) for(var k=0;k<m[r].length;k++) if(m[r][k]==="#"){ var X=x+k*cell, Y=y+r*cell; s += '<path d="M'+X+' '+Y+'l'+cell*0.8+' '+cell*0.8+'M'+(X+cell*0.8)+' '+Y+'l'+(-cell*0.8)+' '+cell*0.8+'"/>'; }
  return s+'</g>';
}
function hills(col){ return '<path d="M0 200 Q100 160 200 190 T400 180 V260 H0Z" fill="'+(col||C.lgreen)+'"/>'; }
function candle(x, y){ return '<rect x="'+(x-8)+'" y="'+y+'" width="16" height="44" rx="3" fill="#FFF6E0" stroke="#E2CFA8"/><path d="M'+x+' '+(y-22)+'c8 10 8 16 0 20c-8-4-8-10 0-20z" fill="'+C.gold+'"/><path d="M'+x+' '+(y-14)+'c3 5 3 8 0 10c-3-2-3-5 0-10z" fill="#FFF3B0"/>'; }

var HOL = {
  kaliady: function(){ return frame('<rect width="400" height="260" fill="'+C.night+'"/>'+
    [[40,40],[90,90],[330,50],[360,120],[60,150],[280,30]].map(function(p){ return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="2" fill="#fff"/>'; }).join("")+
    '<path d="M0 205 Q200 175 400 205 V260 H0Z" fill="#fff"/>'+stitch("star",145,40,8.5,C.gold)+'<line x1="200" y1="150" x2="200" y2="215" stroke="'+C.brown+'" stroke-width="5"/>', C.night); },
  maslenitsa: function(){ return frame(hills("#fff")+'<circle cx="200" cy="100" r="46" fill="'+C.gold+'"/>'+stitch("sun",148,48,8,C.red)+
    '<g fill="#E8B96A" stroke="#C48A3A"><ellipse cx="80" cy="215" rx="44" ry="10"/><ellipse cx="80" cy="207" rx="42" ry="9"/><ellipse cx="80" cy="199" rx="40" ry="8"/></g>'); },
  verbnitsa: function(){ var s=''; for(var i=0;i<7;i++){ var x=150+i*16; s+='<path d="M200 230 Q'+(x-20)+' 140 '+x+' '+(40+i*6)+'" stroke="'+C.brown+'" stroke-width="3" fill="none"/>'; for(var j=0;j<5;j++) s+='<ellipse cx="'+(x-6+j*2)+'" cy="'+(60+i*6+j*30)+'" rx="6" ry="9" fill="#F2EFE8" stroke="#CFC6B6"/>'; }
    return frame(hills()+s+'<path d="M170 230 h60 l-6 16 h-48z" fill="'+C.red+'"/>'); },
  vialikdzen: function(){ var cols=[C.red,C.gold,C.green,C.dred,"#3E6BA8"], s=''; for(var i=0;i<5;i++){ var x=90+i*55; s+='<ellipse cx="'+x+'" cy="170" rx="24" ry="32" fill="'+cols[i]+'"/><path d="M'+(x-22)+' 165 h44" stroke="#fff" stroke-width="3" stroke-dasharray="4 4"/><path d="M'+(x-18)+' 180 l6 -6 6 6 6 -6 6 6 6 -6" stroke="#fff" stroke-width="2" fill="none"/>'; }
    return frame('<ellipse cx="200" cy="205" rx="170" ry="22" fill="'+C.linen+'" stroke="'+C.red+'" stroke-dasharray="6 4"/>'+s); },
  radaunitsa: function(){ return frame(hills()+'<path d="M300 210 V90" stroke="'+C.brown+'" stroke-width="10"/><circle cx="300" cy="80" r="50" fill="#9DC08B"/><circle cx="270" cy="100" r="30" fill="#87B07A"/>'+candle(120,160)+candle(160,170)+'<rect x="80" y="210" width="120" height="10" rx="4" fill="'+C.linen+'"/>'); },
  kupalle: function(){ return frame('<rect width="400" height="260" fill="#2E3D5C"/><circle cx="320" cy="50" r="22" fill="#FFF3C4"/>'+
    '<path d="M0 180 Q200 165 400 180 V260 H0Z" fill="'+C.water+'"/>'+
    '<g transform="translate(110 172)"><ellipse rx="44" ry="12" fill="'+C.green+'"/>'+[0,1,2,3,4,5].map(function(i){ return '<circle cx="'+(-34+i*14)+'" cy="'+(-6+(i%2)*4)+'" r="6" fill="'+[C.red,C.gold,"#fff"][i%3]+'"/>'; }).join("")+'<circle cx="0" cy="-20" r="5" fill="'+C.gold+'"/></g>'+
    '<path d="M280 180 l20 -60 20 60z" fill="'+C.gold+'"/><path d="M290 180 l10 -40 10 40z" fill="'+C.red+'"/><path d="M265 185 h70" stroke="'+C.brown+'" stroke-width="6"/>'+
    stitch("rose",30,40,4,C.red), "#2E3D5C"); },
  spas: function(){ var s=''; [[140,150],[185,160],[230,150],[165,125],[210,125]].forEach(function(p){ s+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="24" fill="'+C.red+'"/><path d="M'+p[0]+' '+(p[1]-24)+' q4 -10 10 -12" stroke="'+C.brown+'" stroke-width="3" fill="none"/><ellipse cx="'+(p[0]+10)+'" cy="'+(p[1]-30)+'" rx="7" ry="4" fill="'+C.green+'"/>'; });
    return frame('<path d="M110 175 h180 l-20 40 h-140z" fill="#C49A62"/>'+s+'<path d="M300 200 h50 v-40 q-25 -20 -50 0z" fill="'+C.gold+'"/><text x="325" y="190" text-anchor="middle" font-size="12" fill="'+C.ink+'">мёд</text>'); },
  dazhynki: function(){ var s=''; for(var i=-6;i<=6;i++){ s+='<path d="M200 220 L'+(200+i*9)+' 70" stroke="'+C.gold+'" stroke-width="4"/><ellipse cx="'+(200+i*9.4)+'" cy="66" rx="5" ry="12" fill="'+C.gold+'" transform="rotate('+(i*4)+' '+(200+i*9.4)+' 66)"/>'; }
    return frame(hills("#D8C27A")+s+'<rect x="170" y="150" width="60" height="14" fill="'+C.red+'"/><path d="M180 164 l-10 30 M220 164 l10 30" stroke="'+C.red+'" stroke-width="5"/>'); },
  pakrovy: function(){ var s=''; for(var i=0;i<18;i++){ var x=(i*53)%400, y=30+(i*37)%160; s+='<path d="M'+x+' '+y+' q10 -12 20 0 q-10 12 -20 0z" fill="'+[C.red,C.gold,"#C8742E"][i%3]+'" transform="rotate('+(i*25)+' '+x+' '+y+')"/>'; }
    return frame(s+'<path d="M140 220 Q200 120 260 220z" fill="'+C.linen+'" stroke="'+C.red+'" stroke-width="3"/>'+stitch("comb",178,160,3.4,C.red)); },
  dziady: function(){ return frame('<rect width="400" height="260" fill="#3A3330"/><rect x="60" y="170" width="280" height="16" rx="4" fill="'+C.linen+'"/>'+candle(200,120)+'<ellipse cx="110" cy="166" rx="30" ry="12" fill="#B07A3E"/><circle cx="290" cy="160" r="12" fill="#fff"/><circle cx="310" cy="162" r="10" fill="#fff"/>', "#3A3330"); }
};

var PLACE = {
  museum: function(seed){
    var v = seed % 3;
    if(v===0) return frame(hills()+'<rect x="110" y="110" width="180" height="90" fill="'+C.cream+'" stroke="'+C.ink+'"/><path d="M100 110 L200 60 L300 110z" fill="'+C.linen+'" stroke="'+C.ink+'"/>'+[0,1,2,3,4,5].map(function(i){ return '<rect x="'+(122+i*28)+'" y="120" width="10" height="80" fill="#fff" stroke="'+C.ink+'"/>'; }).join("")+'<circle cx="200" cy="88" r="8" fill="'+C.green+'"/>');
    if(v===1) return frame(hills()+'<rect x="120" y="100" width="160" height="100" fill="#B88A5A"/>'+[0,1,2,3,4,5,6,7].map(function(i){ return '<rect x="'+(120+i*20)+'" y="90" width="12" height="12" fill="#B88A5A"/>'; }).join("")+'<rect x="90" y="70" width="40" height="130" fill="#A57A4C"/><path d="M85 70 l25 -30 25 30z" fill="'+C.dred+'"/><rect x="185" y="150" width="30" height="50" fill="'+C.ink+'"/>');
    return frame(hills()+'<rect x="150" y="110" width="100" height="90" fill="#fff" stroke="'+C.ink+'"/><path d="M150 110 q50 -50 100 0z" fill="'+C.green+'"/><circle cx="200" cy="58" r="14" fill="'+C.gold+'"/><path d="M200 30 v20 M192 38 h16" stroke="'+C.gold+'" stroke-width="3"/><rect x="188" y="150" width="24" height="50" fill="'+C.ink+'"/>');
  },
  memorial: function(seed){
    if(seed % 2) return frame(hills("#9AA88F")+'<path d="M190 210 L194 50 L206 50 L210 210z" fill="#D9D3C7" stroke="'+C.ink+'"/><path d="M160 210 h80 v12 h-80z" fill="#BDB5A6"/>'+candle(260,170)+'<path d="M80 205 q10 -20 20 0 q10 -20 20 0" stroke="'+C.red+'" stroke-width="5" fill="none"/>');
    return frame('<rect width="400" height="260" fill="#CFC6B6"/>'+hills("#8F9E84")+'<g stroke="'+C.ink+'" stroke-width="3" fill="none"><path d="M120 200 v-60 h40 v60"/><path d="M240 200 v-80 h40 v80"/></g><path d="M190 200 v-110" stroke="'+C.ink+'" stroke-width="4"/><path d="M178 90 q12 -30 24 0z" fill="#6B6158"/>'+candle(330,170), "#CFC6B6");
  }
};

var ERA = {
  medieval: function(){ return frame(hills()+'<rect x="160" y="100" width="80" height="100" fill="#fff" stroke="'+C.ink+'"/><path d="M160 100 q40 -50 80 0z" fill="'+C.green+'"/><path d="M200 30 v30 M190 42 h20" stroke="'+C.gold+'" stroke-width="4"/><rect x="190" y="150" width="20" height="50" fill="'+C.ink+'"/>'); },
  early: function(){ return PLACE.museum(1); },
  xix: function(){ return frame('<rect x="110" y="70" width="180" height="130" fill="#fff" stroke="'+C.ink+'"/><path d="M200 70 v130" stroke="'+C.ink+'"/>'+[0,1,2,3,4].map(function(i){ return '<path d="M125 '+(95+i*20)+' h60 M215 '+(95+i*20)+' h60" stroke="#999"/>'; }).join("")+'<path d="M300 50 L250 170" stroke="'+C.brown+'" stroke-width="4"/><path d="M300 50 q20 10 10 30 q-10 -5 -10 -30z" fill="#fff" stroke="'+C.ink+'"/>'); },
  war: function(){ return frame('<rect width="400" height="260" fill="#C9C0AE"/>'+hills("#8F9E84")+'<path d="M200 40 l12 36 h38 l-31 22 12 36 -31 -22 -31 22 12 -36 -31 -22 h38z" fill="'+C.red+'"/><path d="M60 80 l80 10 -80 10 z M90 80 v20" stroke="'+C.ink+'" stroke-width="3" fill="'+C.ink+'"/>'+candle(310,170), "#C9C0AE"); },
  postwar: function(){ return frame(hills()+[0,1,2].map(function(i){ return '<rect x="'+(80+i*90)+'" y="'+(120-i*15)+'" width="70" height="'+(80+i*15)+'" fill="'+C.cream+'" stroke="'+C.ink+'"/>'+[0,1,2].map(function(j){ return '<rect x="'+(90+i*90+j*20)+'" y="'+(135-i*15)+'" width="10" height="12" fill="'+C.gold+'"/>'; }).join(""); }).join("")+'<path d="M330 200 v-120 l20 -10" stroke="'+C.ink+'" stroke-width="4" fill="none"/>'); },
  today: function(){ return frame('<rect x="120" y="70" width="160" height="100" rx="8" fill="'+C.ink+'"/><rect x="130" y="80" width="140" height="80" fill="#fff"/>'+stitch("berehinia",175,88,5,C.red)+'<path d="M100 170 h200 l20 20 h-240z" fill="#8a8178"/>'); }
};

var PROF = {
  0: function(then){ return then ? frame('<rect x="150" y="90" width="100" height="80" rx="8" fill="#5E5A3F"/><circle cx="200" cy="130" r="22" fill="#2b2a1e"/><path d="M110 80 q90 -60 180 0" stroke="'+C.ink+'" stroke-width="10" fill="none"/>') : ERA.today(); },
  1: function(then){ return then ? frame('<rect x="140" y="80" width="120" height="120" rx="12" fill="#fff" stroke="'+C.ink+'"/><path d="M200 105 v70 M165 140 h70" stroke="'+C.red+'" stroke-width="18"/>') : frame('<path d="M150 60 q-20 80 50 90 q70 -10 50 -90" stroke="'+C.ink+'" stroke-width="6" fill="none"/><circle cx="200" cy="190" r="22" fill="'+C.green+'"/><path d="M200 150 v18" stroke="'+C.ink+'" stroke-width="6"/>'); },
  2: function(then){ return then ? frame(hills("#8F9E84")+'<path d="M100 80 h200 v110 h-200z" fill="'+C.linen+'" stroke="'+C.ink+'"/><path d="M120 100 q40 40 80 0 t80 20" stroke="'+C.red+'" stroke-width="4" fill="none" stroke-dasharray="8 6"/><circle cx="280" cy="120" r="8" fill="'+C.red+'"/>') : frame('<rect x="185" y="60" width="30" height="90" rx="6" fill="'+C.ink+'"/><circle cx="200" cy="170" r="30" fill="none" stroke="'+C.ink+'" stroke-width="8"/><rect x="150" y="205" width="100" height="14" fill="'+C.ink+'"/><circle cx="200" cy="60" r="10" fill="'+C.green+'"/>'); }
};

A.illus = {
  holiday: function(id){ return (HOL[id]||HOL.radaunitsa)(); },
  place: function(type, idx, id){ id = id||""; if(/castle/.test(id)) return PLACE.museum(1); if(/turau/.test(id)) return PLACE.museum(2); if(/palace|museum/.test(id)) return PLACE.museum(0); return (PLACE[type]||PLACE.museum)(idx||0); },
  era: function(era){ return (ERA[era]||ERA.today)(); },
  prof: function(i, then){ return (PROF[i%3])(then); },
  field: function(f){ var sym = {science:"star", medicine:"cross", sport:"sun", it:"romb", culture:"rose"}[f]||"berehinia";
    return frame('<rect width="400" height="260" fill="'+C.linen+'"/>'+hills("#D9CBB0")+'<circle cx="200" cy="110" r="78" fill="#fff" stroke="'+C.red+'" stroke-width="3" stroke-dasharray="7 5"/>'+stitch(sym,148,58,8,f==="medicine"?C.red:C.green), C.linen); }
};
// карцінка: фота з даных або ілюстрацыя
// Куды цэліцца пры абрэзцы фота ў картцы (вертыкаль у %, 0 — верх кадра).
// Па змаўчанні 30%: твары звычайна ў верхняй трэці. Тут — фота, дзе твар яшчэ вышэй.
A.FOCUS = {
  "assets/img/heroes/shubionak.webp":15,
  "assets/img/today/mamashuk.webp":10,
  "assets/img/today/vasilevskaya.webp":15,
  "assets/img/today/prof-3-now.webp":10
};
A.focusStyle = function(src){ var y = A.FOCUS[src]; return y==null ? "" : ' style="object-position:50% '+y+'%"'; };
A.pic = function(src, alt, fallback, cls){
  return '<div class="pic '+(cls||"")+'">'+(src ? '<img src="'+A.esc(src)+'" alt="'+A.esc(alt||"")+'" loading="lazy"'+A.focusStyle(src)+'>' : fallback)+'</div>';
};
})();
