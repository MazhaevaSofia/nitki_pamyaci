/* =========================================================
   Раздзелы: Віктарына і гульні, Для журы, Беларусь сёння,
   Сцяна памяці, Мадэрацыя, Лісты і галасы, Для настаўніка
   ========================================================= */
(function(){
"use strict";
var A = window.App, t = A.t, L = A.L, esc = A.esc, tx = A.tx;

/* ================= ВІКТАРЫНА ================= */
A.route("quiz", function(p){
  p.innerHTML = A.head(t("nav_quiz"), t("quizLead"))+'<div class="wrap">'+
    '<section class="section card quiz reveal" id="quizBox"></section>'+
    '<section class="section reveal" id="games"><h2>'+t("games")+'</h2><div class="grid g2">'+
      '<div class="card" id="guessBox"></div><div class="card" id="closerBox"></div></div>'+
      '<div class="card section" id="puzzleBox"></div></section></div>';
  var box = A.$("#quizBox",p), qs, i, score;
  function start(){
    box.innerHTML = '<h2>'+t("quizH")+'</h2><p>'+t("quizLead")+'</p><button type="button" class="btn" id="qStart">'+t("startQuiz")+'</button>';
    A.$("#qStart",box).onclick = function(){ qs = A.shuffle(QUIZ); i = 0; score = 0; ask(); };
  }
  function ask(){
    var q = qs[i];
    box.innerHTML = '<p class="muted">'+t("question")+' '+(i+1)+' / '+qs.length+'</p><div class="progress"><span style="width:'+(i/qs.length*100)+'%"></span></div>'+
      '<h3 style="margin-top:.8em;font-size:1.6rem">'+esc(L(q.q))+'</h3><div class="quiz__opts">'+q.o.map(function(o,k){ return '<button type="button" class="quiz__opt" data-k="'+k+'">'+esc(L(o))+'</button>'; }).join("")+'</div><p id="qFb" aria-live="polite"></p>';
    A.$$(".quiz__opt",box).forEach(function(b){ b.onclick = function(){
      var k = +b.getAttribute("data-k"), ok = k===q.a; if(ok) score++;
      A.$$(".quiz__opt",box).forEach(function(o,j){ o.disabled = true; if(j===q.a) o.classList.add("ok"); else if(j===k) o.classList.add("bad"); });
      var h = q.hero && A.byId(HEROES,q.hero);
      A.$("#qFb",box).innerHTML = '<b>'+t(ok?"correct":"wrong")+'</b>'+(h?' <a href="#/hero/'+h.id+'">'+esc(L(h.name))+' →</a>':'')+'<br><button type="button" class="btn" style="margin-top:10px" id="qNext">'+t("next")+'</button>';
      A.$("#qNext",box).onclick = function(){ i++; if(i<qs.length) ask(); else done(); }; A.$("#qNext",box).focus();
    }; });
  }
  function done(){
    var best = A.get("quizBest",0); if(score>best) A.set("quizBest",score);
    box.innerHTML = '<h2>'+t("result")+': '+score+' / '+qs.length+'</h2><canvas id="qCard" style="width:100%;max-width:600px;border-radius:16px;box-shadow:var(--shadow)"></canvas>'+
      '<div class="btns"><button type="button" class="btn" id="qDl">'+t("downloadCard")+'</button><button type="button" class="btn btn--ghost" id="qAgain">'+t("again")+'</button></div>';
    var c = A.$("#qCard",box); card(c, score, qs.length);
    A.$("#qDl",box).onclick = function(){ A.downloadCanvas(c, "viktaryna-"+score+".png"); };
    A.$("#qAgain",box).onclick = start;
  }
  function card(c, s, n){
    c.width = 1200; c.height = 800; var x = c.getContext("2d"), red = "#C8102E";
    Stitch.linen(x, 1200, 800, 12);
    A.bandOnCanvas(x, 40, 40, 1120, 8, red); A.bandOnCanvas(x, 40, 800-40-BAND.length*8, 1120, 8, red);
    x.textAlign = "center"; x.fillStyle = "#A50D26"; x.font = "800 30px Manrope, Arial"; x.fillText(t("siteTitle").toUpperCase()+" · "+t("quizH").toUpperCase(), 600, 220);
    x.fillStyle = "#2A2623"; x.font = "700 200px 'Cormorant Garamond', Georgia, serif"; x.fillText(s+" / "+n, 600, 440);
    x.font = "500 36px Manrope, Arial"; x.fillText(s>=8 ? {be:"Вы добра ведаеце гісторыю!",ru:"Вы хорошо знаете историю!",en:"You know history well!"}[A.lang] : {be:"Ёсць што адкрыць. Вяртайцеся!",ru:"Есть что открыть. Возвращайтесь!",en:"More to discover. Come back!"}[A.lang], 600, 520);
    x.font = "400 26px Manrope, Arial"; x.fillStyle = "#6B6158"; x.fillText(new Date().toLocaleDateString(A.lang==="en"?"en-GB":"ru-RU"), 600, 580);
    Stitch.draw(x, SYMBOLS.star.m, 120, 330, 10, red); Stitch.draw(x, SYMBOLS.star.m, 1080-130, 330, 10, red);
  }
  start();
  // Адгадай свята
  var g = A.$("#guessBox",p);
  function guess(){
    var h = HOLIDAYS[Math.floor(Math.random()*HOLIDAYS.length)], opts = A.shuffle([h].concat(A.shuffle(HOLIDAYS.filter(function(x){ return x!==h; })).slice(0,3)));
    g.innerHTML = '<h3>'+t("guessHoliday")+'</h3><p>'+esc(L(h.text))+'</p><div class="quiz__opts">'+opts.map(function(o){ return '<button type="button" class="quiz__opt" data-id="'+o.id+'">'+esc(L(o.name))+'</button>'; }).join("")+'</div><p aria-live="polite" id="gFb"></p>';
    A.$$("[data-id]",g).forEach(function(b){ b.onclick = function(){ var ok = b.getAttribute("data-id")===h.id; b.classList.add(ok?"ok":"bad"); A.$("#gFb",g).innerHTML = '<b>'+t(ok?"correct":"wrong")+'</b> <button type="button" class="btn btn--small btn--ghost">'+t("next")+'</button>'; A.$("#gFb button",g).onclick = guess; }; });
  }
  guess();
  // Якая гераіня бліжэй (гульнявы фармат)
  var cl = A.$("#closerBox",p), CQ = [
    {q:{be:"Што вам бліжэй?",ru:"Что вам ближе?",en:"What is closer to you?"}, o:[["eufrasinnia",{be:"Кнігі і веды",ru:"Книги и знания",en:"Books and knowledge"}],["khoruzhaya",{be:"Смелыя справы",ru:"Смелые дела",en:"Bold deeds"}],["osipova",{be:"Каманда і план",ru:"Команда и план",en:"Team and plan"}]]},
    {q:{be:"Што вы ўзялі б у дарогу?",ru:"Что бы вы взяли в дорогу?",en:"What would you take on a journey?"}, o:[["eufrasinnia",{be:"Пяро і пергамент",ru:"Перо и пергамент",en:"A quill and parchment"}],["khoruzhaya",{be:"Ліст ад сяброў",ru:"Письмо от друзей",en:"A letter from friends"}],["osipova",{be:"Карту горада",ru:"Карту города",en:"A city map"}]]},
    {q:{be:"Якое слова пра вас?",ru:"Какое слово о вас?",en:"Which word describes you?"}, o:[["eufrasinnia",{be:"Мудрасць",ru:"Мудрость",en:"Wisdom"}],["khoruzhaya",{be:"Вернасць",ru:"Верность",en:"Loyalty"}],["osipova",{be:"Мужнасць",ru:"Мужество",en:"Courage"}]]}
  ];
  function closer(){
    var j = 0, sc = {};
    function q(){
      if(j>=CQ.length){ var best = Object.keys(sc).sort(function(a,b){ return sc[b]-sc[a]; })[0], h = A.byId(HEROES,best);
        cl.innerHTML = '<h3>'+t("closer")+'</h3><p style="font-family:var(--head);font-size:2rem;margin:.2em 0">'+esc(L(h.name))+'</p><p class="muted">'+{be:"Гэта гульня, а не псіхалагічны тэст. Пазнаёмцеся з усімі гераінямі!",ru:"Это игра, а не психологический тест. Познакомьтесь со всеми героинями!",en:"Just a game, not a personality test. Meet all the heroines!"}[A.lang]+'</p><div class="btns"><a class="btn btn--small" href="#/hero/'+h.id+'">'+t("more")+'</a><button type="button" class="btn btn--ghost btn--small">'+t("again")+'</button></div>';
        A.$("button",cl).onclick = closer; return; }
      var c = CQ[j];
      cl.innerHTML = '<h3>'+t("closer")+'</h3><p>'+esc(L(c.q))+'</p><div class="quiz__opts">'+c.o.map(function(o){ return '<button type="button" class="quiz__opt" data-h="'+o[0]+'">'+esc(L(o[1]))+'</button>'; }).join("")+'</div>';
      A.$$("[data-h]",cl).forEach(function(b){ b.onclick = function(){ var h=b.getAttribute("data-h"); sc[h]=(sc[h]||0)+1; j++; q(); }; });
    }
    q();
  }
  closer();
  // Пазл з арнаментам: 3×3, абмен частак
  var pz = A.$("#puzzleBox",p);
  function puzzle(){
    var N = 3, order = A.shuffle([0,1,2,3,4,5,6,7,8]), sel = null, size = 300;
    var src = A.canvas(size,size), x = src.getContext("2d"); Stitch.linen(x,size,size,10); Stitch.draw(x, SYMBOLS.rose.m, (size-13*20)/2, (size-13*20)/2, 20, "#C8102E");
    pz.innerHTML = '<h3>'+t("puzzle")+'</h3><p class="muted">'+{be:"Націскайце на дзве часткі, каб памяняць іх месцамі.",ru:"Нажимайте на две части, чтобы поменять их местами.",en:"Click two pieces to swap them."}[A.lang]+'</p><div id="pzG" style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;max-width:330px"></div><p id="pzM" aria-live="polite"></p>';
    function drawG(){
      var G = A.$("#pzG",pz); G.innerHTML = "";
      order.forEach(function(v, pos){
        var c = A.canvas(size/N, size/N); c.getContext("2d").drawImage(src, (v%N)*size/N, Math.floor(v/N)*size/N, size/N, size/N, 0, 0, size/N, size/N);
        var b = document.createElement("button"); b.type="button"; b.style.cssText="padding:0;border:3px solid "+(sel===pos?"var(--green)":"transparent")+";border-radius:8px;cursor:pointer;background:none";
        b.setAttribute("aria-label", (pos+1)+""); c.style.width="100%"; b.appendChild(c);
        b.onclick = function(){ if(sel===null){ sel=pos; } else { var tmp=order[sel]; order[sel]=order[pos]; order[pos]=tmp; sel=null; } drawG(); };
        G.appendChild(b);
      });
      if(order.every(function(v,i){ return v===i; })) A.$("#pzM",pz).innerHTML = '<b>'+t("correct")+'</b> '+esc(L(SYMBOLS.rose.name))+': '+esc(L(SYMBOLS.rose.text));
    }
    drawG();
  }
  puzzle();
});

/* ================= ДЛЯ ЖУРЫ / ПРА ПРАЕКТ ================= */
A.stats = function(){
  var real = A.realHeroes();
  var audio = HEROES.filter(function(h){ return h.audio; }).length + VOICES.length;
  return [
    ["st_heroes", real.length], ["st_dolls", DOLLS.length], ["st_streets", GOMEL_STREETS.filter(function(s){ return !s.placeholder; }).length],
    ["st_places", PLACES.length], ["st_audio", audio], ["st_video", CAMP.videos.length], ["st_quiz", QUIZ.length],
    ["st_holidays", HOLIDAYS.length], ["st_names", NAMES.length], ["st_dates", MEMORY_DATES.length]
  ];
};
A.route("jury", function(p){
  // Апісанне праекта для абласнога конкурсу «Погляд у будучыню», намінацыя «Web-распрацоўка»
  // (загад ГУА Гомельскага аблвыканкама ад 05.03.2026 № 164)
  var B = {
    contest:[
      [{be:"Конкурс",ru:"Конкурс",en:"Contest"},{be:"Абласны конкурс «Погляд у будучыню», 2026",ru:"Областной конкурс «Взгляд в будущее», 2026",en:"Regional contest “A Look into the Future”, 2026"}],
      [{be:"Намінацыя",ru:"Номинация",en:"Category"},{be:"«Web-распрацоўка»",ru:"«Web-разработка»",en:"Web development"}],
      [{be:"Тэма",ru:"Тема",en:"Theme"},{be:"«За межамі магчымага» — да Года беларускай жанчыны",ru:"«За пределами возможного» — к Году белорусской женщины",en:"“Beyond the Possible”, for the Year of the Belarusian Woman"}],
      [{be:"Арганізатары",ru:"Организаторы",en:"Organisers"},{be:"Галоўнае ўпраўленне адукацыі Гомельскага аблвыканкама, тэхнапарк «Карал», Гомельскі дзяржаўны абласны Палац творчасці дзяцей і моладзі",ru:"Главное управление образования Гомельского облисполкома, технопарк «Коралл», Гомельский государственный областной Дворец творчества детей и молодёжи",en:"Gomel Regional Education Department, Korall Technopark, Gomel Regional Palace of Children's and Youth Creativity"}],
      [{be:"Аўтары",ru:"Авторы",en:"Authors"},{be:"Каманда ДУА «Гімназія № 14 г. Гомеля»",ru:"Команда ГУО «Гимназия № 14 г. Гомеля»",en:"Team of Gomel Gymnasium No. 14"}]
    ],
    goal:{be:"Расказаць пра беларускіх жанчын, якія зрабілі немагчымае, ад Еўфрасінні Полацкай да гераінь Гомельшчыны і нашых сучасніц, і звязаць іх лёсы з народнай традыцыяй лялек-берагінь, пашытых удзельніцамі лагера «ФінГрыЯ».",
          ru:"Рассказать о белорусских женщинах, которые сделали невозможное, от Евфросинии Полоцкой до героинь Гомельщины и наших современниц, и связать их судьбы с народной традицией кукол-берегинь, сшитых участницами лагеря «ФинГриЯ».",
          en:"To tell the stories of Belarusian women who achieved the impossible, from Euphrosyne of Polotsk to heroines of the Gomel region and women of today, and to link their lives with the folk tradition of guardian dolls sewn by the girls of the FinGriYa camp."},
    tasks:{be:["Сабраць і праверыць па крыніцах біяграфіі гераінь, асабліва землякоў з Гомельшчыны.","Паказаць сувязь пакаленняў: стужка часу, карта памяці, раздзел «Беларусь сёння».","Прадставіць калекцыю лялек-берагінь, створаных сваімі рукамі.","Зрабіць сайт зручным для ўсіх: тры мовы, камп'ютар, планшэт і тэлефон, версія для слабавідушчых, агучка.","Даць настаўнікам гатовыя матэрыялы для ўрокаў і класных гадзін."],
           ru:["Собрать и проверить по источникам биографии героинь, особенно землячек с Гомельщины.","Показать связь поколений: лента времени, карта памяти, раздел «Беларусь сегодня».","Представить коллекцию кукол-берегинь, созданных своими руками.","Сделать сайт удобным для всех: три языка, компьютер, планшет и телефон, версия для слабовидящих, озвучка.","Дать учителям готовые материалы для уроков и классных часов."],
           en:["Collect and fact-check the biographies of heroines, especially those from the Gomel region.","Show the link between generations: the timeline, the memory map and “Belarus Today”.","Present our collection of handmade guardian dolls.","Make the site usable for everyone: three languages, computer, tablet and phone, low-vision mode, read-aloud.","Give teachers ready-made materials for lessons."]},
    theme:{be:"Нашы гераіні рабілі тое, што здавалася немагчымым. Еўфрасіння Полацкая ў XII стагоддзі заснавала манастыры, пры якіх дзяцей вучылі грамаце. Гамяльчанкі Паліна Гельман і Галіна Дакутовіч сталі штурманамі начных бамбардзіроўшчыкаў. Марына Васілеўская стала першай жанчынай-касманаўтам суверэннай Беларусі. Межы магчымага пашыраюць людзі, і сайт расказвае, як.",
           ru:"Наши героини делали то, что казалось невозможным. Евфросиния Полоцкая в XII веке основала монастыри, при которых детей учили грамоте. Гомельчанки Полина Гельман и Галина Докутович стали штурманами ночных бомбардировщиков. Марина Василевская стала первой женщиной-космонавтом суверенной Беларуси. Границы возможного раздвигают люди, и сайт рассказывает, как.",
           en:"Our heroines did what seemed impossible. In the 12th century Euphrosyne of Polotsk founded convents where children learned to read. Polina Gelman and Galina Dokutovich from Gomel became navigators of night bombers. Marina Vasilevskaya became the first woman cosmonaut of sovereign Belarus. People push the limits of the possible, and the site shows how."},
    audience:{be:"Школьнікі 10–18 гадоў, настаўнікі гісторыі і класныя кіраўнікі, наведвальнікі школьнага музея, бацькі і ўсе, каму цікавая гісторыя Беларусі.",
              ru:"Школьники 10–18 лет, учителя истории и классные руководители, посетители школьного музея, родители и все, кому интересна история Беларуси.",
              en:"Students aged 10–18, history teachers and class tutors, school museum visitors, parents and anyone interested in the history of Belarus."},
    structure:{be:"У галоўным меню — Гераіні, Карта памяці, Стужка часу, Ніткі памяці (лялькі), Святы і Імёны. У меню «Яшчэ» — Беларусь сёння, Сцяна памяці, Лісты, Віктарына, Для настаўніка, Рушнік і Пра праект. На тэлефоне ёсць ніжняя панэль і бакавое меню. Дапамагаюць арыентавацца «хлебныя крошкі», пошук і фільтры, кнопка «Наверх», уступ пры адкрыцці і рэжым дэманстрацыі на 7 хвілін.",
               ru:"В главном меню — Героини, Карта памяти, Лента времени, Нити памяти (куклы), Праздники и Имена. В меню «Ещё» — Беларусь сегодня, Стена памяти, Письма, Викторина, Для учителя, Рушник и О проекте. На телефоне есть нижняя панель и боковое меню. Ориентироваться помогают «хлебные крошки», поиск и фильтры, кнопка «Наверх», вступление при открытии и режим демонстрации на 7 минут.",
               en:"The main menu has Heroines, Memory Map, Timeline, Threads of Memory (dolls), Holidays and Names. “More” has Belarus Today, Memory Wall, Letters, Quiz, For Teachers, Rushnik and About. Phones get a bottom bar and a side menu. Breadcrumbs, search and filters, a back-to-top button, the opening intro and a 7-minute demo mode help visitors find their way."},
    tech:{be:"HTML5, CSS3 і JavaScript без фрэймворкаў. Карта — бібліятэка Leaflet і даныя OpenStreetMap. Агучка — Web Speech API, таксама ёсць QR-коды. Сайт адкрываецца на камп'ютары, планшэце і тэлефоне ў сучасных браўзерах і працуе нават без інтэрнэту.",
          ru:"HTML5, CSS3 и JavaScript без фреймворков. Карта — библиотека Leaflet и данные OpenStreetMap. Озвучка — Web Speech API, также есть QR-коды. Сайт открывается на компьютере, планшете и телефоне в современных браузерах и работает даже без интернета.",
          en:"HTML5, CSS3 and plain JavaScript. The map uses Leaflet and OpenStreetMap data, read-aloud uses the Web Speech API, and there are QR codes. The site opens on computers, tablets and phones in modern browsers and even works offline."},
    future:{be:["Дадаць гераінь з усіх 21 раёна Гомельшчыны.","Запісаць аўдыяаповеды галасамі вучняў.","Рэгулярна абнаўляць раздзел «Беларусь сёння».","Размясціць QR-таблічкі ў музеі гімназіі.","Правесці новую змену лагера і папоўніць калекцыю лялек."],
            ru:["Добавить героинь из всех 21 района Гомельщины.","Записать аудиорассказы голосами учащихся.","Регулярно обновлять раздел «Беларусь сегодня».","Разместить QR-таблички в музее гимназии.","Провести новую смену лагеря и пополнить коллекцию кукол."],
            en:["Add heroines from all 21 districts of the Gomel region.","Record audio stories in students' voices.","Update “Belarus Today” regularly.","Put QR labels in the gymnasium museum.","Hold a new camp session and grow the doll collection."]}
  };
  var feats = ["nav_heroes","nav_map","nav_timeline","nav_dolls","nav_holidays","nav_rushnik","nav_names","nav_quiz","nav_wall","nav_letters","nav_today","nav_teacher"];
  // крытэрыі ацэнкі намінацыі «Web-распрацоўка» (п. 7.4 Палажэння), па 0–10 балаў
  var crit = [
    [{be:"Унікальнасць зместу і інфарматыўнасць",ru:"Уникальность содержания и информативность",en:"Unique, informative content"},{be:"Аўтарскія матэрыялы: лялькі-берагіні ўдзельніц лагера, біяграфіі гераінь з цытатамі, карта Гомеля і вобласці, стужка часу. Раздзел «Беларусь сёння» папаўняецца.",ru:"Авторские материалы: куклы-берегини участниц лагеря, биографии героинь с цитатами, карта Гомеля и области, лента времени. Раздел «Беларусь сегодня» пополняется.",en:"Original materials: the camp's guardian dolls, heroine biographies with quotes, maps of Gomel and the region, the timeline. “Belarus Today” is updated."},"dolls"],
    [{be:"Функцыянальнасць",ru:"Функциональность",en:"Functionality"},{be:"Адаптыўная вёрстка для камп'ютара, планшэта і тэлефона, розныя браўзеры, тры мовы. Няма непрацуючых спасылак, пустых старонак і раздзелаў «у распрацоўцы».",ru:"Адаптивная вёрстка для компьютера, планшета и телефона, разные браузеры, три языка. Нет неработающих ссылок, пустых страниц и разделов «в разработке».",en:"Responsive layout for computer, tablet and phone, works across browsers, three languages. No broken links, empty pages or “under construction” sections."},"heroes"],
    [{be:"Адпаведнасць тэматыцы",ru:"Соответствие тематике",en:"Relevance to the theme"},{be:"«За межамі магчымага» і Год беларускай жанчыны: жанчыны, якія зрабілі немагчымае, ад XII стагоддзя да космасу.",ru:"«За пределами возможного» и Год белорусской женщины: женщины, которые сделали невозможное, от XII века до космоса.",en:"“Beyond the Possible” and the Year of the Belarusian Woman: women who did the impossible, from the 12th century to space."},"timeline"],
    [{be:"Дызайн і афармленне",ru:"Дизайн и оформление",en:"Design"},{be:"Народны арнамент і чырвоная ніць праз увесь сайт, сапраўдныя фотаздымкі, дзяржаўная сімволіка, светлая і цёмная тэмы.",ru:"Народный орнамент и красная нить через весь сайт, настоящие фотографии, государственная символика, светлая и тёмная темы.",en:"Folk ornament and a red thread through the site, real photographs, state symbols, light and dark themes."},"holidays"],
    [{be:"Юзабіліці (структура і навігацыя)",ru:"Юзабилити (структура и навигация)",en:"Usability (structure and navigation)"},{be:"Зразумелае меню і ніжняя панэль на тэлефоне, пошук і фільтры, «хлебныя крошкі», версія для слабавідушчых, агучка тэксту.",ru:"Понятное меню и нижняя панель на телефоне, поиск и фильтры, «хлебные крошки», версия для слабовидящих, озвучка текста.",en:"Clear menu and a bottom bar on phones, search and filters, breadcrumbs, low-vision mode, read-aloud."},"map"]
  ];
  // план абароны (п. 6.3: да 10 хвілін)
  var plan = {be:["Мэта і задачы стварэння сайта","Для якой аўдыторыі прызначаны сайт","Структура і навігацыя","Змест раздзелаў (рэжым «Дэманстрацыя на 7 хвілін»)","Перспектывы развіцця сайта","Адказы на пытанні журы"],
              ru:["Цель и задачи создания сайта","Для какой аудитории предназначен сайт","Структура и навигация","Содержание разделов (режим «Демонстрация на 7 минут»)","Перспективы развития сайта","Ответы на вопросы жюри"],
              en:["Goal and objectives","Target audience","Structure and navigation","Section contents (7-minute demo mode)","Future development","Answers to the jury's questions"]};
  function h3(o){ return '<h3>'+esc(L(o))+'</h3>'; }
  function ul(a, tag){ return '<'+(tag||"ul")+'>'+(a||[]).map(function(s){ return '<li>'+esc(s)+'</li>'; }).join("")+'</'+(tag||"ul")+'>'; }
  p.innerHTML = A.head(t("juryH"), "")+'<div class="wrap">'+
    '<section class="section card reveal contest-card" id="juryContest"><dl>'+B.contest.map(function(r){ return '<dt>'+esc(L(r[0]))+'</dt><dd>'+esc(L(r[1]))+'</dd>'; }).join("")+'</dl></section>'+
    '<section class="section grid g2">'+
      '<div class="card reveal">'+h3({be:"Мэта",ru:"Цель",en:"Goal"})+'<p>'+esc(L(B.goal))+'</p>'+h3({be:"Задачы",ru:"Задачи",en:"Objectives"})+ul(L(B.tasks),"ol")+'</div>'+
      '<div class="card reveal">'+h3({be:"Чаму «За межамі магчымага»",ru:"Почему «За пределами возможного»",en:"Why “Beyond the Possible”"})+'<p>'+esc(L(B.theme))+'</p>'+h3({be:"Для каго сайт",ru:"Для кого сайт",en:"Audience"})+'<p>'+esc(L(B.audience))+'</p></div>'+
    '</section>'+
    '<section class="section grid g2">'+
      '<div class="card reveal">'+h3({be:"Структура і навігацыя",ru:"Структура и навигация",en:"Structure and navigation"})+'<p>'+esc(L(B.structure))+'</p>'+h3({be:"Тэхналогіі",ru:"Технологии",en:"Technology"})+'<p>'+esc(L(B.tech))+'</p></div>'+
      '<div class="card reveal">'+h3({be:"Перспектывы развіцця",ru:"Перспективы развития",en:"Future development"})+ul(L(B.future))+'</div>'+
    '</section>'+
    '<section class="section reveal" id="juryStats"><h2>'+t("stats")+'</h2><div class="stats">'+A.stats().filter(function(s){ return s[1]>0; }).map(function(s){ return '<div class="stat"><b>'+s[1]+'</b><span>'+t(s[0])+'</span></div>'; }).join("")+'</div></section>'+
    '<section class="section reveal" id="juryCrit"><h2>'+t("criteria")+'</h2><div class="tablewrap"><table><thead><tr><th>'+t("criterion")+'</th><th>'+t("where")+'</th></tr></thead><tbody>'+
      crit.map(function(c){ return '<tr><td><b>'+esc(L(c[0]))+'</b></td><td>'+esc(L(c[1]))+' <a href="#/'+c[2]+'">→</a></td></tr>'; }).join("")+'</tbody></table></div></section>'+
    '<section class="section grid g2">'+
      '<div class="card reveal">'+h3({be:"Раздзелы сайта",ru:"Разделы сайта",en:"Sections"})+'<ul>'+feats.map(function(k){ var r = A.NAV.filter(function(n){ return n[1]===k; })[0]; return '<li><a href="#/'+(r?r[0]:"rushnik")+'">'+t(k)+'</a></li>'; }).join("")+'</ul></div>'+
      '<div class="card reveal">'+h3({be:"План абароны (да 10 хвілін)",ru:"План защиты (до 10 минут)",en:"Presentation plan (up to 10 minutes)"})+ul(L(plan),"ol")+'</div>'+
    '</section>'+
    '<section class="section card reveal" id="juryData"><h3>'+{be:"Даныя наведвальнікаў",ru:"Данные посетителей",en:"Visitor data"}[A.lang]+'</h3><p class="muted">'+{be:"Свечкі, запісы сцяны памяці і вынікі захоўваюцца на гэтым камп'ютары. Іх можна перанесці на іншы.",ru:"Свечи, записи стены памяти и результаты хранятся на этом компьютере. Их можно перенести на другой.",en:"Candles, wall entries and results are stored on this computer and can be moved."}[A.lang]+'</p>'+
      '<div class="btns"><button type="button" class="btn btn--ghost" id="exp">Экспарт JSON</button><label class="btn btn--ghost" style="cursor:pointer">Імпарт JSON<input type="file" accept=".json,application/json" id="imp" hidden></label></div></section>'+
  '</div>';
  A.$("#exp",p).onclick = function(){ A.downloadBlob(new Blob([JSON.stringify(A.exportAll(),null,1)],{type:"application/json"}), "nitki-pamyaci-dadzenyia.json"); };
  A.$("#imp",p).onchange = function(){ var f = this.files[0]; if(!f) return; var r = new FileReader(); r.onload = function(){ try{ A.importAll(JSON.parse(r.result)); A.toast(t("saved")); }catch(e){ A.toast("JSON error"); } }; r.readAsText(f); };
});
A.route("about", function(p){ A.pages.jury(p); });

/* ================= БЕЛАРУСЬ СЁННЯ ================= */
// Спіс картак; кожная адкрываецца па адрасе #/today/<id> з поўнай гісторыяй, фота і відэа.
var KIND = { person:{be:"Людзі",ru:"Люди",en:"People"}, achievement:{be:"Дасягненні",ru:"Достижения",en:"Achievements"}, project:{be:"Праекты",ru:"Проекты",en:"Projects"} };
var FIELD = { science:{be:"Навука",ru:"Наука",en:"Science"}, medicine:{be:"Медыцына",ru:"Медицина",en:"Medicine"}, sport:{be:"Спорт",ru:"Спорт",en:"Sport"}, it:{be:"ІТ",ru:"ИТ",en:"IT"},
  culture:{be:"Культура",ru:"Культура",en:"Culture"}, space:{be:"Космас",ru:"Космос",en:"Space"}, society:{be:"Грамадства",ru:"Общество",en:"Society"} };
function todayCard(x){
  return '<a class="card card--pic card--link" href="#/today/'+esc(x.id)+'">'+A.pic(x.img, L(x.name), A.illus.field(x.field))+
    '<div class="chips"><span class="tag">'+esc(L(KIND[x.kind]||KIND.person))+'</span>'+(FIELD[x.field]?'<span class="tag">'+esc(L(FIELD[x.field]))+'</span>':'')+'</div>'+
    '<h3>'+tx(x.name)+'</h3>'+(x.role?'<p class="muted" style="margin:-.3em 0 .5em;font-size:.92rem">'+tx(x.role)+'</p>':'')+'<p>'+tx(x.text)+'</p>'+
    '<span class="card__more">'+{be:"Чытаць",ru:"Читать",en:"Read"}[A.lang]+' →</span></a>';
}
A.route("today", function(p, id){
  var x = id && A.byId(TODAY, id);
  if(x) return todayItem(p, x);
  var year = A.get("profYear", "1943"), kind = "";
  p.innerHTML = A.head(t("nav_today"), t("d_today"))+'<div class="wrap">'+
    '<section class="section reveal" id="todayList"><h2>'+t("nav_today")+'</h2>'+
      '<div class="chips" style="margin-bottom:14px"><button type="button" class="chip" data-k="" aria-pressed="true">'+t("all")+'</button>'+Object.keys(KIND).filter(function(k){ return TODAY.some(function(x){ return x.kind===k; }); }).map(function(k){ return '<button type="button" class="chip" data-k="'+k+'" aria-pressed="false">'+esc(L(KIND[k]))+'</button>'; }).join("")+'</div>'+
      '<div class="grid g3" id="todayGrid"></div></section>'+
    '<section class="section reveal" id="prof"><h2>'+{be:"Прафесіі тады і сёння",ru:"Профессии тогда и сегодня",en:"Professions then and now"}[A.lang]+'</h2>'+
      '<div class="seg" role="group" style="display:inline-flex;margin-bottom:16px"><button type="button" data-y="1943">1943</button><button type="button" data-y="2026">2026</button></div><div class="grid g3" id="profL"></div></section></div>';
  function list(){
    A.$$("[data-k]",p).forEach(function(b){ b.setAttribute("aria-pressed", b.getAttribute("data-k")===kind); });
    A.$("#todayGrid",p).innerHTML = TODAY.filter(function(x){ return !kind || x.kind===kind; }).map(todayCard).join("");
  }
  A.$$("[data-k]",p).forEach(function(b){ b.onclick = function(){ kind = b.getAttribute("data-k"); list(); }; });
  list();
  function draw(){
    A.$$("[data-y]",p).forEach(function(b){ b.setAttribute("aria-pressed", b.getAttribute("data-y")===year); });
    A.$("#profL",p).innerHTML = PROFESSIONS.map(function(x, i){ var th = year==="1943";
      return '<div class="card card--pic" style="'+(th?'background:var(--surface-2)':'')+'">'+A.pic(th?x.imgThen:x.imgNow, L(th?x.then:x.now), A.illus.prof(i, th))+'<p class="kicker">'+year+'</p><h3>'+esc(L(th?x.then:x.now))+'</h3><p>'+esc(L(th?x.thenText:x.nowText))+'</p><p class="muted" style="font-size:.85rem">↔ '+esc(L(th?x.now:x.then))+'</p>'+'</div>'; }).join("");
  }
  A.$$("[data-y]",p).forEach(function(b){ b.onclick = function(){ year = b.getAttribute("data-y"); A.set("profYear", year); draw(); }; });
  draw();
});
function todayItem(p, x){
  var i = TODAY.indexOf(x), prev = TODAY[(i-1+TODAY.length)%TODAY.length], next = TODAY[(i+1)%TODAY.length];
  var more = L(x.more) || [];
  p.innerHTML = A.head(L(x.name), L(x.role)||"", [[t("nav_today"),"#/today"],[L(x.name)]])+'<div class="wrap"><article class="today-item">'+
    '<figure class="today-item__img">'+A.pic(x.img, L(x.name), A.illus.field(x.field))+''+'</figure>'+
    '<div class="today-item__body"><div class="chips"><span class="tag">'+esc(L(KIND[x.kind]||KIND.person))+'</span>'+(FIELD[x.field]?'<span class="tag">'+esc(L(FIELD[x.field]))+'</span>':'')+'</div>'+
      '<p class="lead">'+tx(x.text)+'</p>'+more.map(function(s){ return '<p>'+esc(s)+'</p>'; }).join("")+
      (x.facts && x.facts.length?'<ul class="today-facts">'+x.facts.map(function(f){ return '<li>'+esc(L(f))+'</li>'; }).join("")+'</ul>':'')+'</div></article>'+
    (x.gallery && x.gallery.length?'<section class="section"><h2>'+{be:"Фота",ru:"Фото",en:"Photos"}[A.lang]+'</h2><div class="grid g3">'+x.gallery.map(function(g){ return '<figure class="today-ph"><img src="'+esc(g.src)+'" alt="'+esc(A.capNoCredit(L(g.cap))||L(x.name))+'" loading="lazy">'+(A.capNoCredit(L(g.cap))?'<figcaption>'+esc(A.capNoCredit(L(g.cap)))+'</figcaption>':'')+'</figure>'; }).join("")+'</div></section>':'')+
    '<nav class="today-nav"><a class="btn btn--ghost" href="#/today/'+esc(prev.id)+'">← '+esc(L(prev.name))+'</a><a class="btn btn--ghost" href="#/today">'+t("nav_today")+'</a><a class="btn btn--ghost" href="#/today/'+esc(next.id)+'">'+esc(L(next.name))+' →</a></nav></div>';
}

/* ================= СЦЯНА ПАМЯЦІ ================= */
A.postcard = function(e){
  var W=1200, H=800, c=A.canvas(W,H), x=c.getContext("2d"), red="#C8102E";
  Stitch.linen(x,W,H,12); A.bandOnCanvas(x,40,40,W-80,7,red); A.bandOnCanvas(x,40,H-40-BAND.length*7,W-80,7,red);
  Stitch.draw(x, SYMBOLS.tree.m, 80, 180, 12, red);
  x.fillStyle="#A50D26"; x.font="800 24px Manrope, Arial"; x.fillText(t("siteTitle").toUpperCase()+" · "+t("nav_wall").toUpperCase(), 290, 160);
  x.fillStyle="#2A2623"; x.font="700 58px 'Cormorant Garamond', Georgia, serif"; var y = A.wrap(x, e.title, 290, 230, 820, 62, 2);
  x.font="400 30px Manrope, Arial"; y = A.wrap(x, e.text, 290, y+20, 820, 42, 8);
  x.font="italic 500 34px 'Cormorant Garamond', Georgia, serif"; x.fillStyle="#6B6158"; x.fillText("— "+e.author+", "+e.date, 290, Math.min(y+40, H-110));
  return c;
};
A.route("wall", function(p){
  var entries = A.get("wall", []);
  p.innerHTML = A.head(t("nav_wall"), {be:"Раскажыце пра сваю сваячку або напішыце ліст гераіні. Сайт аформіць тэкст як паштоўку. Запісы захоўваюцца на гэтым камп'ютары і з'яўляюцца на сцяне пасля адабрэння.",ru:"Расскажите о своей родственнице или напишите письмо героине. Сайт оформит текст как открытку. Записи хранятся на этом компьютере и появляются на стене после одобрения.",en:"Tell us about a relative or write to a heroine. The site will turn it into a postcard. Entries are stored on this computer and appear after approval."}[A.lang])+'<div class="wrap">'+
    '<section class="section card reveal" id="wallForm"><form id="wf" class="grid" style="gap:12px">'+
      '<label>'+{be:"Пра каго або каму",ru:"О ком или кому",en:"About or to whom"}[A.lang]+'<input class="search" name="title" required maxlength="80"></label>'+
      '<label>'+{be:"Ваш тэкст",ru:"Ваш текст",en:"Your text"}[A.lang]+'<textarea class="search" name="text" required maxlength="600" rows="5"></textarea></label>'+
      '<label>'+{be:"Подпіс",ru:"Подпись",en:"Signature"}[A.lang]+'<input class="search" name="author" required maxlength="60"></label>'+
      '<label class="switch"><input type="checkbox" name="ok" required>'+{be:"Я згодны(-ая), каб запіс паказвалі на сайце",ru:"Я согласен(-на), чтобы запись показывали на сайте",en:"I agree that the entry may be shown on the site"}[A.lang]+'</label>'+
      '<div class="btns"><button class="btn" type="submit">'+{be:"Стварыць паштоўку",ru:"Создать открытку",en:"Create postcard"}[A.lang]+'</button></div></form><div id="wPrev"></div></section>'+
    '<section class="section reveal"><h2>'+t("nav_wall")+'</h2><div class="grid g3" id="wl"></div></section></div>';
  function list(){ var ok = entries.filter(function(e){ return e.status==="ok"; });
    A.$("#wl",p).innerHTML = ok.length ? ok.map(function(e){ return '<div class="card"><h3>'+esc(e.title)+'</h3><p>'+esc(e.text)+'</p><p class="muted">'+esc(e.author)+', '+esc(e.date)+'</p></div>'; }).join("") : '<p class="muted">'+{be:"Пакуль пуста. Будзьце першымі!",ru:"Пока пусто. Будьте первыми!",en:"Empty so far. Be the first!"}[A.lang]+'</p>'; }
  A.$("#wf",p).onsubmit = function(ev){ ev.preventDefault(); var f = ev.target;
    var e = { id:Date.now(), title:f.title.value.trim(), text:f.text.value.trim(), author:f.author.value.trim(), date:new Date().toLocaleDateString("ru-RU"), status:"new" };
    entries.push(e); A.set("wall", entries);
    var c = A.postcard(e); c.style.cssText = "width:100%;max-width:720px;border-radius:16px;box-shadow:var(--shadow);margin-top:16px";
    var pv = A.$("#wPrev",p); pv.innerHTML = ""; pv.appendChild(c);
    var b = document.createElement("button"); b.type="button"; b.className="btn btn--green"; b.style.marginTop="12px"; b.textContent=t("download")+" PNG"; b.onclick=function(){ A.downloadCanvas(c, "pashtouka.png"); }; pv.appendChild(b);
    f.reset(); A.toast(t("saved"));
  };
  list();
});
A.route("moderate", function(p){
  var entries = A.get("wall", []);
  p.innerHTML = A.head(t("nav_moderate"), {be:"Адабрыце або схавайце запісы сцяны памяці.",ru:"Одобрите или скройте записи стены памяти.",en:"Approve or hide memory wall entries."}[A.lang])+'<div class="wrap"><div class="tablewrap"><table><tbody id="mt"></tbody></table></div></div>';
  function draw(){ A.$("#mt",p).innerHTML = entries.length ? entries.map(function(e,i){ return '<tr><td><b>'+esc(e.title)+'</b><br>'+esc(e.text)+'<br><span class="muted">'+esc(e.author)+', '+esc(e.date)+'</span></td><td><span class="tag">'+e.status+'</span></td><td style="white-space:nowrap"><button type="button" class="btn btn--small btn--green" data-ok="'+i+'">✓</button> <button type="button" class="btn btn--small btn--ghost" data-hide="'+i+'">✕</button></td></tr>'; }).join("") : '<tr><td class="muted">—</td></tr>';
    A.$$("[data-ok]",p).forEach(function(b){ b.onclick=function(){ entries[+b.getAttribute("data-ok")].status="ok"; A.set("wall",entries); draw(); }; });
    A.$$("[data-hide]",p).forEach(function(b){ b.onclick=function(){ entries[+b.getAttribute("data-hide")].status="hidden"; A.set("wall",entries); draw(); }; }); }
  draw();
});

/* ================= ЛІСТЫ І ГАЛАСЫ ================= */
A.route("letters", function(p){
  p.innerHTML = A.head(t("nav_letters"), {be:"Радкі з сапраўдных лістоў і дзённікаў ваенных гадоў з'яўляюцца так, быццам іх піша пяро. Галасы школьнікаў і іх родных запісаны толькі са згоды.",ru:"Строки из настоящих писем и дневников военных лет появляются так, будто их пишет перо. Голоса школьников и их родных записаны только с согласия.",en:"Lines from real wartime letters and diaries appear as if written by a pen. Voices are recorded only with consent."}[A.lang])+'<div class="wrap">'+
    LETTERS.map(function(l,i){ return '<section class="section card reveal"><p class="kicker">'+esc(l.date)+'</p><h3>'+tx(l.who)+'</h3><div class="pen" data-pen="'+i+'"></div></section>'; }).join("")+
    (VOICES.length?'<section class="section"><h2>'+{be:"Галасы",ru:"Голоса",en:"Voices"}[A.lang]+'</h2>'+VOICES.map(function(v){ return '<div class="card"><b>'+esc(L(v.who))+'</b> · '+esc(L(v.about))+'<audio controls preload="none" src="'+esc(v.file)+'"></audio></div>'; }).join("")+'</section>':'')+'</div>';
  var timers = [];
  A.$$("[data-pen]",p).forEach(function(el){
    var txt = L(LETTERS[+el.getAttribute("data-pen")].text), io;
    function write(){ if(A.reduced()){ el.textContent = txt; return; } var k = 0; el.innerHTML = '<span></span><i class="caret"></i>'; var s = el.firstChild;
      var tm = setInterval(function(){ s.textContent = txt.slice(0, ++k); if(k>=txt.length) clearInterval(tm); }, 35); timers.push(tm); }
    if("IntersectionObserver" in window){ io = new IntersectionObserver(function(en){ if(en[0].isIntersecting){ write(); io.disconnect(); } }); io.observe(el); A.cleanup.push(function(){ io.disconnect(); }); } else write();
  });
  A.cleanup.push(function(){ timers.forEach(clearInterval); });
});

/* ================= ДЛЯ НАСТАЎНІКА ================= */
A.route("teacher", function(p, id){
  var hs = A.realHeroes().filter(function(h){ return h.lesson; }), h = A.byId(hs, id) || hs[0], lang = A.lang==="en" ? "ru" : A.lang;
  p.innerHTML = A.head(t("nav_teacher"), {be:"Рэжым «Урок»: план, пытанні і заданні па кожнай гераіні. Старонку можна надрукаваць.",ru:"Режим «Урок»: план, вопросы и задания по каждой героине. Страницу можно распечатать.",en:"Lesson mode: plan, questions and tasks for each heroine. Printable."}[A.lang])+'<div class="wrap">'+
    '<div class="chips no-print" style="margin-bottom:16px">'+hs.map(function(x){ return '<a class="chip" href="#/teacher/'+x.id+'" aria-pressed="'+(x===h)+'">'+esc(L(x.name))+'</a>'; }).join("")+'</div>'+
    '<article class="card print-area" id="lesson"><p class="kicker">'+{be:"Урок",ru:"Урок",en:"Lesson"}[A.lang]+' · 45 '+{be:"хв",ru:"мин",en:"min"}[A.lang]+'</p><h2>'+esc(L(h.name))+'</h2><p class="muted">'+esc(h.years)+' · '+esc(L(h.place))+'</p>'+
      '<h3>'+{be:"План",ru:"План",en:"Plan"}[A.lang]+'</h3><ol>'+({be:["Арганізацыйны момант, свечка памяці (3 хв)","Аповед або аўдыя з сайта (10 хв)","Праца з біяграфіяй і крыніцамі (12 хв)","Пытанні для абмеркавання (10 хв)","Практычнае заданне (8 хв)","Рэфлексія: вышыць імя або сабраць ручнік (2 хв)"],ru:["Организационный момент, свеча памяти (3 мин)","Рассказ или аудио с сайта (10 мин)","Работа с биографией и источниками (12 мин)","Вопросы для обсуждения (10 мин)","Практическое задание (8 мин)","Рефлексия: вышить имя или собрать рушник (2 мин)"]}[lang]).map(function(s){ return '<li>'+esc(s)+'</li>'; }).join("")+'</ol>'+
      '<h3>'+{be:"Пытанні",ru:"Вопросы",en:"Questions"}[A.lang]+'</h3><ol>'+h.lesson.q[lang].map(function(s){ return '<li>'+esc(s)+'</li>'; }).join("")+'</ol>'+
      '<h3>'+{be:"Заданні",ru:"Задания",en:"Tasks"}[A.lang]+'</h3><ol>'+h.lesson.task[lang].map(function(s){ return '<li>'+esc(s)+'</li>'; }).join("")+'</ol>'+
      '<h3>'+t("contribution")+'</h3><p>'+tx(h.contribution)+'</p>'+
      '<div class="btns no-print"><button type="button" class="btn" id="lp">'+t("print")+'</button><a class="btn btn--ghost" href="#/hero/'+h.id+'">'+t("more")+'</a></div></article></div>';
  A.$("#lp",p).onclick = function(){ window.print(); };
});
})();
