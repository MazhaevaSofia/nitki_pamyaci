/* =========================================================
   Рэжым «Дэманстрацыя на 7 хвілін»
   Крокі: маршрут, элемент для падсветкі, тэкст падказкі, секунды.
   Сума секунд не больш за CONFIG.demoLimit (420).
   ========================================================= */
(function(){
"use strict";
var A = window.App, t = A.t, L = A.L;
var T = function(be,ru,en){ return {be:be,ru:ru,en:en}; };
A.DEMO = [
  { r:"#/", s:"#top-hero", sec:35, x:T("«Ніткі памяці. Дочкі Беларусі». Гісторыя краіны праз лёсы жанчын. Чырвоная ніць праходзіць праз увесь сайт і злучае гераінь, лялек, вуліцы і святы.","«Нити памяти. Дочки Беларуси». История страны через судьбы женщин. Красная нить проходит через весь сайт и соединяет героинь, кукол, улицы и праздники.","“Threads of Memory. Daughters of Belarus”: the country's history told through women's lives, joined by a red thread.") },
  { r:"#/", s:"#home-day", sec:25, x:T("Гераіня дня і цытата мяняюцца пры кожным адкрыцці. Ніжэй можна запаліць свечку памяці.","Героиня дня и цитата меняются при каждом открытии. Ниже можно зажечь свечу памяти.","The heroine of the day and the quote change on every visit; below you can light a candle.") },
  { r:"#/heroes", s:"#hfilters", sec:35, x:T("Каталог гераінь: пошук і фільтры па эпосе, рэгіёне і родзе дзейнасці. Тэксты, якія трэба праверыць, пазначаны.","Каталог героинь: поиск и фильтры по эпохе, региону и роду деятельности. Тексты, которые нужно проверить, помечены.","The catalogue: search and filters by era, region and field. Unverified texts are marked.") },
  { r:"#/hero/khoruzhaya", s:"#portrait", sec:35, a:"alive", x:T("Старонка гераіні. Партрэт «ажывае»: чорна-белае фота плаўна становіцца каляровым. Ёсць біяграфія, аўдыяаповед з расшыфроўкай і крыніцы.","Страница героини. Портрет «оживает»: чёрно-белое фото плавно становится цветным. Есть биография, аудиорассказ с расшифровкой и источники.","A heroine's page. The portrait comes alive; biography, audio with transcript, sources.") },
  { r:"#/hero/khoruzhaya", s:"#heroTools", sec:30, x:T("Плакат для класнага кутка і QR-таблічка для музея ствараюцца на камп'ютары без інтэрнэту.","Плакат для классного уголка и QR-табличка для музея создаются на компьютере без интернета.","A classroom poster and a museum QR label are generated offline.") },
  { r:"#/map", s:"#mapCity", sec:35, x:T("Карта памяці: сапраўдная карта Гомеля з вуліцамі, названымі ў гонар жанчын. Ёсць гісторыя вуліцы і паўзунок «тады і цяпер».","Карта памяти: настоящая карта Гомеля с улицами, названными в честь женщин. Есть история улицы и ползунок «тогда и сейчас».","The memory map: Gomel streets named after women, with a then-and-now slider.") },
  { r:"#/map", s:"#mapRegion", sec:30, a:"district", x:T("«Адкуль твая бабуля?»: націсніце на раён Гомельшчыны і ўбачыце музеі, памятныя мясціны і гісторыі.","«Откуда твоя бабушка?»: нажмите на район Гомельщины и увидите музеи, памятные места и истории.","“Where is your grandmother from?”: click a district to see museums and stories.") },
  { r:"#/timeline", s:"#tl", sec:30, x:T("Стужка часу ад XII стагоддзя да 2026 года: дзевяць стагоддзяў жаночых лёсаў.","Лента времени от XII века до 2026 года: девять веков женских судеб.","A timeline from the 12th century to 2026.") },
  { r:"#/dolls", s:"#dollView", sec:40, x:T("«Ніткі памяці. Вобразы традыцыі»: 14 лялек-берагінь нашай каманды. У кожнай ёсць значэнне імя, сімволіка колеру і вышыўкі, QR-картка.","«Нити памяти. Образы традиции»: 14 кукол-берегинь нашей команды. У каждой есть значение имени, символика цвета и вышивки, QR-карточка.","Fourteen guardian dolls made by our team, each with meaning, symbols and a QR card.") },
  { r:"#/holidays", s:"#nextHol", sec:25, x:T("Каляндар народных святаў і памятных дат. Сайт сам лічыць, якое свята бліжэйшае.","Календарь народных праздников и памятных дат. Сайт сам считает, какой праздник ближайший.","A calendar of folk holidays and memorable dates; the site finds the next one.") },
  { r:"#/rushnik", s:".rk", sec:30, a:"motif", x:T("«Збяры свой ручнік»: выбіраем знакі па сэнсах, і сайт расшыфроўвае пасланне. Ручнік можна спампаваць і надрукаваць.","«Собери свой рушник»: выбираем знаки по смыслам, и сайт расшифровывает послание. Рушник можно скачать и распечатать.","Build a rushnik from meaningful signs; the site decodes its message.") },
  { r:"#/names", s:"#embroidery", sec:30, x:T("«Імя на вышыванцы»: імя вышываецца крыжыкам, побач яго значэнне і гераіня з такім імем.","«Имя на вышиванке»: имя вышивается крестиком, рядом его значение и героиня с таким именем.","Your name in cross-stitch, with its meaning and a heroine of the same name.") },
  { r:"#/quiz", s:"#quizBox", sec:20, x:T("Віктарына з карткай выніку і гульні: «Адгадай свята», пазл з арнаментам.","Викторина с карточкой результата и игры: «Угадай праздник», пазл с орнаментом.","A quiz with a result card, and games.") },
  { r:"#/about", s:"#juryStats", sec:15, x:T("Пра праект: мэта, актуальнасць, крытэрыі і статыстыка, якая лічыцца аўтаматычна. Дзякуй!","О проекте: цель, актуальность, критерии и статистика, которая считается автоматически. Спасибо!","About the project: goals, criteria and automatic statistics. Thank you!") }
];

var st = null;
function fmt(s){ s = Math.max(0, Math.round(s)); return Math.floor(s/60)+":"+("0"+(s%60)).slice(-2); }
function total(){ return A.DEMO.reduce(function(s,d){ return s+d.sec; },0); }

A.demoStart = function(){
  if(A.closeIntro && document.getElementById("intro")) A.closeIntro();
  if(st) return;
  st = { i:0, left:A.DEMO[0].sec, paused:false, back:location.hash||"#/", guide:!A.$("#guide").hidden };
  document.body.classList.add("demo"); A.$("#guide").hidden = true;
  A.$("#demoBar").hidden = false;
  st.timer = setInterval(tick, 1000);
  addEventListener("keydown", keys);
  go(0);
};
A.demoStop = function(done){
  if(!st) return; clearInterval(st.timer); removeEventListener("keydown", keys);
  A.$$(".demo-focus").forEach(function(e){ e.classList.remove("demo-focus"); });
  A.$("#demoBar").hidden = true; document.body.classList.remove("demo");
  var back = st.back; st = null;
  if(done) A.toast(t("demoDone"));
  A.go(back);
};
function keys(e){
  if(e.key==="Escape") A.demoStop();
  else if(e.key==="ArrowRight" && e.altKey) go(st.i+1);
  else if(e.key==="ArrowLeft" && e.altKey) go(st.i-1);
}
function tick(){
  if(!st || st.paused) return;
  st.left--; st.elapsed = (st.elapsed||0)+1;
  if(st.left<=0){ if(st.i>=A.DEMO.length-1) return A.demoStop(true); go(st.i+1); }
  bar();
}
function go(i){
  if(i<0) i = 0; if(i>=A.DEMO.length) return A.demoStop(true);
  st.i = i; st.left = A.DEMO[i].sec;
  var d = A.DEMO[i];
  if(location.hash !== d.r) { location.hash = d.r; setTimeout(function(){ focus(d); }, 350); } else focus(d);
  bar();
}
function focus(d){
  A.$$(".demo-focus").forEach(function(e){ e.classList.remove("demo-focus"); });
  var el = A.$(d.s); if(!el) return;
  el.classList.add("demo-focus");
  el.scrollIntoView({block: el.offsetHeight > innerHeight*0.7 ? "start" : "center", behavior: A.reduced()?"auto":"smooth"});
  setTimeout(function(){
    if(d.a==="alive"){ var p = A.$("#portrait"); if(p) p.classList.add("alive"); }
    if(d.a==="district"){ var g = A.$('.district[data-did="gomel"]'); if(g) g.dispatchEvent(new MouseEvent("click",{bubbles:true})); }
    if(d.a==="motif"){ var m = A.$('[data-add="sun"]'); if(m) m.click(); }
  }, 1200);
}
function bar(){
  var d = A.DEMO[st.i], b = A.$("#demoBar");
  var rest = st.left + A.DEMO.slice(st.i+1).reduce(function(s,x){ return s+x.sec; },0);
  b.innerHTML = '<div class="demo-bar__top"><span>'+t("demoStep")+' '+(st.i+1)+' / '+A.DEMO.length+'</span><span aria-label="timer">⏱ '+fmt(rest)+' / '+fmt(total())+'</span></div>'+
    '<div class="progress"><span style="width:'+((total()-rest)/total()*100)+'%"></span></div>'+
    '<div class="demo-bar__txt" aria-live="polite">'+A.esc(L(d.x))+'</div>'+
    '<div class="demo-bar__ctrl"><button type="button" class="btn btn--ghost btn--small" data-d="prev">← '+t("demoPrev")+'</button>'+
    '<button type="button" class="btn btn--small" data-d="pause">'+(st.paused?"▶ "+t("demoPlay"):"❚❚ "+t("demoPause"))+'</button>'+
    '<button type="button" class="btn btn--ghost btn--small" data-d="next">'+t("demoNext")+' →</button>'+
    '<button type="button" class="btn btn--ghost btn--small" data-d="exit" style="margin-left:auto">✕ '+t("demoExit")+'</button></div>';
  b.querySelector('[data-d="prev"]').onclick = function(){ go(st.i-1); };
  b.querySelector('[data-d="next"]').onclick = function(){ go(st.i+1); };
  b.querySelector('[data-d="pause"]').onclick = function(){ st.paused = !st.paused; bar(); };
  b.querySelector('[data-d="exit"]').onclick = function(){ A.demoStop(); };
}
A.demoActive = function(){ return !!st; };
A.demoRefocus = function(){ if(st) setTimeout(function(){ focus(A.DEMO[st.i]); }, 200); };
A.demoTotal = total;
})();
