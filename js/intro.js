/* =========================================================
   Уступ пры адкрыцці сайта: навошта праект, лагер у гімназіі,
   Год беларускай жанчыны. Паказваецца адзін раз за сеанс
   (пасля закрыцця ўкладкі — зноў). Тэксты — у INTRO ніжэй.
   Назва і эмблема гімназіі — у data/config.js (school, schoolEmblem).
   ========================================================= */
(function(){
"use strict";
var A = window.App, t = A.t, L = A.L, esc = A.esc;

var INTRO = {
  title:{be:"Ніткі памяці. Дочкі Беларусі", ru:"Нити памяти. Дочки Беларуси", en:"Threads of Memory. Daughters of Belarus"},
  paras:{
    be:[
      "Указам Прэзідэнта 2026 год абвешчаны Годам беларускай жанчыны. Гэта год удзячнасці жанчынам, якія берагуць дом і сям'ю, абаранялі Радзіму ў цяжкія гады і сёння ствараюць будучыню краіны.",
      "У дзяржаўнай установе адукацыі «Гімназія № 14 г. Гомеля» быў арганізаваны выхаваўча-аздараўленчы лагер працы і адпачынку «ФінГрыЯ» для дзяўчат 14–15 гадоў, дзе ўдзельніцы сваімі рукамі шылі народныя лялькі-берагіні. Кожная лялька атрымала імя, строй з вышыўкай і сваю гісторыю, звязаную з народным святам або справай. Так нарадзілася наша калекцыя з {dolls} лялек.",
      "Лялька-берагіня — гэта памяць пра жанчыну, якая захоўвае род. Таму мы пайшлі далей і сабралі на гэтым сайце лёсы сапраўдных жанчын: ад Еўфрасінні Полацкай да гераінь Гомельшчыны і нашых сучасніц.",
      "Тут вы знойдзеце карту памяці, стужку часу, народныя святы, віктарыну і раздзел «Беларусь сёння». Кожная нітка — гэта памяць роду. Прайдзіце па ёй разам з намі."
    ],
    ru:[
      "Указом Президента 2026 год объявлен Годом белорусской женщины. Это год благодарности женщинам, которые берегут дом и семью, защищали Родину в трудные годы и сегодня создают будущее страны.",
      "В государственном учреждении образования «Гимназия № 14 г. Гомеля» был организован воспитательно-оздоровительный лагерь труда и отдыха «ФинГриЯ» для девушек 14–15 лет, где участницы своими руками шили народных кукол-берегинь. Каждая кукла получила имя, наряд с вышивкой и свою историю, связанную с народным праздником или делом. Так родилась наша коллекция из {dolls} кукол.",
      "Кукла-берегиня — это память о женщине, которая хранит род. Поэтому мы пошли дальше и собрали на этом сайте судьбы настоящих женщин: от Евфросинии Полоцкой до героинь Гомельщины и наших современниц.",
      "Здесь вы найдёте карту памяти, ленту времени, народные праздники, викторину и раздел «Беларусь сегодня». Каждая нить — это память рода. Пройдите по ней вместе с нами."
    ],
    en:[
      "By Presidential Decree, 2026 is the Year of the Belarusian Woman: a year of gratitude to women who look after home and family, defended their country in hard times and are building its future today.",
      "The state educational institution “Gomel Gymnasium No. 14” organised FinGriYa, an educational and recreational work-and-rest camp for girls aged 14–15, where the participants sewed traditional Belarusian guardian dolls by hand. Each doll received a name, an embroidered costume and its own story linked to a folk holiday or craft. That is how our collection of {dolls} dolls was born.",
      "A guardian doll is a memory of the woman who keeps the family together. So we went further and gathered the lives of real women on this site: from Euphrosyne of Polotsk to the heroines of the Gomel region and women of our own time.",
      "Here you will find a memory map, a timeline, folk holidays, a quiz and the section “Belarus Today”. Every thread is the memory of a family. Follow it with us."
    ]
  },
  ourSchool:{be:"нашай гімназіі", ru:"нашей гимназии", en:"our gymnasium"},
  go:{be:"Перайсці на сайт", ru:"Перейти на сайт", en:"Enter the site"},
  symbols:{be:"Дзяржаўны сцяг і Дзяржаўны герб Рэспублікі Беларусь", ru:"Государственный флаг и Государственный герб Республики Беларусь", en:"State flag and State emblem of the Republic of Belarus"}
};

// шапка з дзяржаўнай сімволікай і эмблемай гімназіі (выкарыстоўваецца і на галоўнай)
A.symbolsHtml = function(cls){
  var school = CONFIG.school && L(CONFIG.school);
  return '<div class="symbols '+(cls||"")+'" role="group" aria-label="'+esc(L(INTRO.symbols))+'">'+
    '<img class="symbols__flag" src="assets/img/symbols/flag.svg" alt="'+esc({be:"Дзяржаўны сцяг Рэспублікі Беларусь",ru:"Государственный флаг Республики Беларусь",en:"State flag of the Republic of Belarus"}[A.lang])+'" width="96" height="48">'+
    '<img class="symbols__arms" src="assets/img/symbols/coat-of-arms.webp" alt="'+esc({be:"Дзяржаўны герб Рэспублікі Беларусь",ru:"Государственный герб Республики Беларусь",en:"State emblem of the Republic of Belarus"}[A.lang])+'" width="64" height="64">'+
    (CONFIG.schoolEmblem?'<img class="symbols__school" src="'+esc(CONFIG.schoolEmblem)+'" alt="'+esc(school||"")+'" width="64" height="64">':'')+
  '</div>';
};

A.showIntro = function(force){
  var seen = false;
  try{ seen = sessionStorage.getItem("np_intro")==="1"; }catch(e){}
  if(seen && !force) return;
  var box = document.createElement("div");
  box.className = "intro"; box.id = "intro";
  box.setAttribute("role","dialog"); box.setAttribute("aria-modal","true"); box.setAttribute("aria-labelledby","introTitle");
  document.body.appendChild(box); document.body.classList.add("intro-open");
  function draw(){
    var school = (CONFIG.school && L(CONFIG.school)) || L(INTRO.ourSchool);
    box.innerHTML = '<div class="intro__card">'+
      '<div class="intro__lang">'+["be","ru","en"].map(function(l){ return '<button type="button" data-il="'+l+'" aria-pressed="'+(A.lang===l)+'">'+{be:"БЕЛ",ru:"РУС",en:"ENG"}[l]+'</button>'; }).join("")+'</div>'+
      A.symbolsHtml("symbols--intro")+
      '<p class="kicker">'+t("heroKicker")+'</p>'+
      '<h1 id="introTitle">'+esc(L(INTRO.title))+'</h1>'+
      '<div class="intro__text">'+(L(INTRO.paras)||[]).map(function(s){ return '<p>'+esc(s.replace("{school}", school).replace("{dolls}", DOLLS.length))+'</p>'; }).join("")+'</div>'+
      '<button type="button" class="btn intro__go" id="introGo">'+esc(L(INTRO.go))+' →</button>'+
      '<div class="orn-band orn-band--thin" aria-hidden="true"></div>'+
    '</div>';
    A.$("#introGo",box).onclick = close;
    A.$$("[data-il]",box).forEach(function(b){ b.onclick = function(){ var h = A.$('.lang [data-lang="'+b.getAttribute("data-il")+'"]'); if(h) h.click(); draw(); }; });
  }
  function key(e){ if(e.key==="Escape") close(); }
  function close(){
    try{ sessionStorage.setItem("np_intro","1"); }catch(e){}
    box.classList.add("intro--out"); document.body.classList.remove("intro-open");
    removeEventListener("keydown", key);
    setTimeout(function(){ box.remove(); }, A.reduced()?0:450);
    var main = A.$("#app"); if(main) main.focus({preventScroll:true});
  }
  A.closeIntro = close;
  addEventListener("keydown", key);
  draw();
  setTimeout(function(){ var g = A.$("#introGo",box); if(g) g.focus({preventScroll:true}); }, 50);
};
})();
