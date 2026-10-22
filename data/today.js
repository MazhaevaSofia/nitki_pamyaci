/* =========================================================
   БЕЛАРУСЬ СЁННЯ і «ПРАФЕСІІ ТАДЫ І СЁННЯ»

   window.TODAY — карткі пра сучасных беларусак: людзі, дасягненні, праекты.
   Толькі публічныя асобы і публічныя праекты. Кожны факт — з крыніцы ў src.
   Усе тэксты — {be, ru, en} (беларуская першая).

   Схема адной карткі:
   {
     id:    "latin-id",                       // лацінкай, без прабелаў
     kind:  "person" | "achievement" | "project",
     field: "science" | "medicine" | "sport" | "it" | "culture" | "space" | "society",
     name:  {be,ru,en},                       // загаловак карткі
     role:  {be,ru,en},                       // адзін радок: хто яна / што гэта
     text:  {be,ru,en},                       // 1–2 сказы для карткі
     more:  {be:[абзацы], ru:[...], en:[...]},// 3–5 абзацаў для поўнага расказу
     facts: [{be,ru,en}, ...],                // 2–4 кароткія факты/лічбы (неабавязкова)
     img:   "assets/img/today/<id>.webp",     // галоўнае фота
     imgSrc:{be,ru,en},                       // што на фота, аўтар, ліцэнзія, URL
     gallery:[{src:"assets/img/today/<id>-2.webp", cap:{be,ru,en}}], // 1–3 фота (неабавязкова)
     src:   [{t:"назва крыніцы", url:"https://..."}]
   }
   Падрабязна пра кожнае фота: assets/img/today/SOURCES.md

   window.PROFESSIONS — пары «1943 / 2026».
   { then, thenText, now, nowText: {be,ru,en},
     imgThen, imgNow: "assets/img/today/prof-<n>-then.webp" / "-now.webp",
     imgThenSrc, imgNowSrc: {be,ru,en} — што на фота і адкуль яно }
   ========================================================= */
window.TODAY = [
  {
    id:"god-zhanchyny-2026", kind:"project", field:"society",
    name:{be:"2026 — Год беларускай жанчыны", ru:"2026 — Год белорусской женщины", en:"2026, the Year of the Belarusian Woman"},
    role:{be:"Агульнанацыянальны праект: указ, рэспубліканскі план, падзеі на Гомельшчыне", ru:"Общенациональный проект: указ, республиканский план, события на Гомельщине", en:"A national project: a decree, a national plan and events in the Gomel region"},
    text:{be:"Указам № 1 ад 1 студзеня 2026 года 2026 год абвешчаны Годам беларускай жанчыны. Па ўсёй краіне і на Гомельшчыне праходзяць выставы, форумы і праекты пра жанчын-працаўніц.", ru:"Указом № 1 от 1 января 2026 года 2026 год объявлен Годом белорусской женщины. По всей стране и на Гомельщине проходят выставки, форумы и проекты о женщинах-труженицах.", en:"Decree No. 1 of 1 January 2026 declared 2026 the Year of the Belarusian Woman. Exhibitions, forums and projects about working women are held across the country and in the Gomel region."},
    more:{
      be:[
        "Указ № 1 Прэзідэнт падпісаў 1 студзеня 2026 года. Яго мэта — сфарміраваць нацыянальны вобраз жанчыны-працаўніцы і паказаць ролю жанчын у захаванні і развіцці грамадства. Ураду разам з аблвыканкамамі і Мінскім гарвыканкамам даручылі распрацаваць рэспубліканскі план мерапрыемстваў.",
        "У лютым 2026 года Урад зацвердзіў план з 61 мерапрыемства. У ім — жаночае інтэрнэт-радыё, медыяпраекты #белоруска21века і #ЖенскоеЛицоБеларуси, конкурсы «Жанчына года» і «Сям'я года», сямейны фестываль «Разам», маладзёжны праект «Дзявочы вянок міру», праекты «Рука дапамогі» і «Быць мамай крута!». Каардынатар — Міністэрства працы і сацыяльнай абароны.",
        "На Гомельшчыне Год жанчыны звязвае памяць і сённяшні дзень. У маі Гомельскі абласны музей гісторыі друку і фатаграфіі паказаў праект «Жаночы твар Перамогі» — партрэты ўдзельніц Вялікай Айчыннай вайны і былых вязняў канцлагераў. 28 верасня ў палацы Румянцавых і Паскевічаў пачаўся Міжнародны форум жаночых ініцыятыў: прадстаўніцы Беларусі і Расіі гаварылі пра настаўніцтва, сям'ю і гістарычную памяць.",
        "9 кастрычніка ў Гомелі адкрылася выстава БелТА «Жаночая сіла»: 30 фотакарцін, на якіх больш за 200 здымкаў з фотахронікі агенцтва — ад Ефрасінні Полацкай і героінь вайны, сярод іх Вера Харужая, да сучасных беларусак.",
        "Да Года жанчыны Белстат апублікаваў лічбы: жанчыны складаюць 49,1 % кіраўнікоў арганізацый, 34 % работнікаў IT-сферы і 78 % валанцёраў. Доля жанчын у парламенце вырасла з 14 % у 1997 годзе да 32,7 %."
      ],
      ru:[
        "Указ № 1 Президент подписал 1 января 2026 года. Его цель — формирование национального образа женщины-труженицы и популяризация роли женщин в сохранении и развитии общества. Правительству с участием облисполкомов и Минского горисполкома поручено разработать республиканский план мероприятий.",
        "В феврале 2026 года Правительство утвердило план из 61 мероприятия. В нём — женское интернет-радио, медиапроекты #белоруска21века и #ЖенскоеЛицоБеларуси, конкурсы «Женщина года» и «Семья года», семейный фестиваль «Вместе», молодёжный проект «Дзявочы вянок мiру», проекты «Рука помощи» и «Быть мамой круто!». Координатор — Министерство труда и социальной защиты.",
        "На Гомельщине Год женщины связывает память и сегодняшний день. В мае Гомельский областной музей истории печати и фотографии представил проект «Женское лицо Победы» — портреты участниц Великой Отечественной войны и бывших узниц концлагерей. 28 сентября во дворце Румянцевых и Паскевичей начался Международный форум женских инициатив: представительницы Беларуси и России говорили о наставничестве, семье и исторической памяти.",
        "9 октября в Гомеле открылась фотовыставка БЕЛТА «Женская сила»: 30 фотокартин, на которых более 200 снимков из фотохроники агентства — от Евфросинии Полоцкой и героинь войны, среди них Вера Хоружая, до современных белорусок.",
        "К Году женщины Белстат опубликовал цифры: женщины составляют 49,1 % руководителей организаций, 34 % работников IT-сферы и 78 % волонтёров. Доля женщин в парламенте выросла с 14 % в 1997 году до 32,7 %."
      ],
      en:[
        "The President signed Decree No. 1 on 1 January 2026. Its aim is to shape a national image of the working woman and to highlight the role of women in preserving and developing society. The government, together with the regional executive committees and Minsk City, was instructed to draw up a national plan of events.",
        "In February 2026 the government approved a plan of 61 events. It includes a women's internet radio station, the media projects #белоруска21века and #ЖенскоеЛицоБеларуси, the contests Woman of the Year and Family of the Year, the family festival Together (Vmeste), the youth project A Girl's Wreath of Peace, and the projects Helping Hand and Being a Mum Is Cool. The Ministry of Labour and Social Protection coordinates the work.",
        "In the Gomel region the Year links memory with the present day. In May the Gomel Regional Museum of the History of Printing and Photography presented The Female Face of Victory, portraits of women who took part in the Great Patriotic War, including former concentration camp prisoners. On 28 September the International Forum of Women's Initiatives opened in the Rumyantsev-Paskevich Palace, where women from Belarus and Russia discussed mentoring, family and historical memory.",
        "On 9 October BelTA's exhibition Women's Strength opened in Gomel: 30 photo panels with more than 200 pictures from the agency's archive, from Euphrosyne of Polotsk and wartime heroines such as Vera Khoruzhaya to women of today.",
        "For the Year, Belstat published figures: women make up 49.1% of heads of organisations, 34% of people working in IT and 78% of volunteers. The share of women in parliament has grown from 14% in 1997 to 32.7%."
      ]
    },
    facts:[
      {be:"Указ № 1 ад 1 студзеня 2026 г.", ru:"Указ № 1 от 1 января 2026 г.", en:"Decree No. 1 of 1 January 2026"},
      {be:"61 мерапрыемства ў рэспубліканскім плане", ru:"61 мероприятие в республиканском плане", en:"61 events in the national plan"},
      {be:"49,1 % кіраўнікоў — жанчыны", ru:"49,1 % руководителей — женщины", en:"49.1% of managers are women"},
      {be:"34 % работнікаў IT — жанчыны", ru:"34 % работников IT — женщины", en:"34% of IT workers are women"}
    ],
    img:"assets/img/today/god-zhanchyny-2026.webp",
    imgSrc:{be:"Палац Румянцавых і Паскевічаў у Гомелі, дзе 28 верасня 2026 г. адкрыўся Міжнародны форум жаночых ініцыятыў. Фота: Аляксей Мацеша, CC BY-SA 3.0, https://commons.wikimedia.org/wiki/File:Палацава-паркавы_комплекс_ў_Гомелі._Фасад_палаца.jpg", ru:"Дворец Румянцевых и Паскевичей в Гомеле, где 28 сентября 2026 г. открылся Международный форум женских инициатив. Фото: Алексей Матеша, CC BY-SA 3.0, https://commons.wikimedia.org/wiki/File:Палацава-паркавы_комплекс_ў_Гомелі._Фасад_палаца.jpg", en:"The Rumyantsev-Paskevich Palace in Gomel, venue of the International Forum of Women's Initiatives (opened 28 September 2026). Photo: Aliaksei Matesha, CC BY-SA 3.0, https://commons.wikimedia.org/wiki/File:Палацава-паркавы_комплекс_ў_Гомелі._Фасад_палаца.jpg"},
    src:[
      {t:"Pravo.by: 2026 год объявлен Годом белорусской женщины", url:"https://pravo.by/novosti/obshchestvenno-politicheskie-i-v-oblasti-prava/2026/january/91697/"},
      {t:"БЕЛТА: Правительство утвердило республиканский план мероприятий по проведению Года белорусской женщины (09.02.2026)", url:"https://belta.by/society/view/pravitelstvo-utverdilo-respublikanskij-plan-meroprijatij-po-provedeniju-goda-belorusskoj-zhenschiny-763505-2026/"},
      {t:"БЕЛТА: «Женская сила». Более 200 фотографий о белорусках представила БЕЛТА в Гомеле (09.10.2026)", url:"https://belta.by/society/view/zhenskaja-sila-bolee-200-fotografij-o-beloruskah-raznyh-pokolenij-predstavila-belta-v-gomele-805185-2026/"},
      {t:"BelTA: Gomel Oblast museum showcases stories of courage in women's portraits (07.05.2026)", url:"https://eng.belta.by/society/view/gomel-oblast-museum-showcases-stories-of-courage-in-womens-portraits-179961-2026/"},
      {t:"Гомельские ведомости: В Гомеле проходит международный женский форум (28.09.2026)", url:"https://newsgomel.by/news/god-belorusskoy-zhenshchiny/v-gomele-prokhodit-mezhdunarodnyy-zhenskiy-forum_229777.html"},
      {t:"ОНТ: Белстат: почти половина руководителей в стране — женщины (2026)", url:"https://ont.by/ru/society-ru/view/belstat-pochti-polovina-rukovoditelej-v-strane-zhenschiny-317428-2026"},
      {t:"БЕЛТА: Белстат опубликовал портрет среднестатистической белоруски (05.03.2026)", url:"https://belta.by/society/view/zamuzh-v-27-cherez-god-rebenok-belstat-opublikoval-portret-srednestatisticheskoj-beloruski-767888-2026/"}
    ]
  },

  {
    id:"vasilevskaya", kind:"achievement", field:"space",
    name:{be:"Марына Васілеўская", ru:"Марина Василевская", en:"Marina Vasilevskaya"},
    role:{be:"Першая жанчына-касманаўт суверэннай Беларусі, Герой Беларусі (2024)", ru:"Первая женщина-космонавт суверенной Беларуси, Герой Беларуси (2024)", en:"The first woman cosmonaut of sovereign Belarus, Hero of Belarus (2024)"},
    text:{be:"Бортправадніца «Белавіі», якая ў сакавіку 2024 года паляцела на Міжнародную касмічную станцыю: 14 сутак у палёце і сем эксперыментаў беларускай навуковай праграмы.", ru:"Бортпроводница «Белавиа», которая в марте 2024 года полетела на Международную космическую станцию: 14 суток в полёте и семь экспериментов белорусской научной программы.", en:"A Belavia flight attendant who flew to the International Space Station in March 2024: 14 days in flight and seven experiments of a Belarusian science programme."},
    more:{
      be:[
        "Марына Васілеўская нарадзілася 14 верасня 1990 года ў Мінску і вучылася ў сярэдняй школе № 151. З 2017 года працавала бортправадніком-інструктарам авіякампаніі «Белавія» на самалётах Boeing і Embraer.",
        "У снежні 2022 года яна ўвайшла ў шасцёрку прэтэндэнтак, якіх выбралі з больш чым трох тысяч жадаючых. 29 мая 2023 года Марыну прызначылі ў асноўны экіпаж карабля «Саюз МС-25», а дублёрам стала дзіцячы хірург Анастасія Ленкова. Падрыхтоўка ў Цэнтры падрыхтоўкі касманаўтаў імя Гагарына ўключала трэнажор «Саюза», бязважкасць на самалёце-лабараторыі і трэніроўку на выпадак нештатнай пасадкі ў лесе зімой.",
        "21 сакавіка 2024 года старт аўтаматычна адмянілі за некалькі секунд да запуску. 23 сакавіка «Саюз МС-25» стартаваў з Байканура: камандзір Алег Навіцкі, Марына Васілеўская і астранаўтка NASA Трэйсі Дайсан. 25 сакавіка карабель састыкаваўся са станцыяй.",
        "На МКС Марына выконвала праграму, якую падрыхтавалі Нацыянальная акадэмія навук Беларусі, «Раскосмас» і Расійская акадэмія навук: сем эксперыментаў, з іх пяць навукова-даследчых і два адукацыйныя. Яна здымала Зямлю фота- і відэаспектральнай апаратурай беларускай вытворчасці, даследавала лактаферын і прабіётыкі, створаныя ў НАН, — для будучага харчавання касманаўтаў.",
        "6 красавіка 2024 года экіпаж вярнуўся на Зямлю на караблі «Саюз МС-24» і прызямліўся ў Казахстане. Палёт доўжыўся 14 сутак, 12 з іх — на станцыі. 9 красавіка 2024 года Марыне Васілеўскай прысвоена званне Героя Беларусі."
      ],
      ru:[
        "Марина Василевская родилась 14 сентября 1990 года в Минске и училась в средней школе № 151. С 2017 года работала бортпроводником-инструктором авиакомпании «Белавиа» на самолётах Boeing и Embraer.",
        "В декабре 2022 года она вошла в шестёрку претенденток, отобранных из более чем трёх тысяч желающих. 29 мая 2023 года Марину назначили в основной экипаж корабля «Союз МС-25», а дублёром стала детский хирург Анастасия Ленкова. Подготовка в Центре подготовки космонавтов имени Гагарина включала тренажёр «Союза», невесомость на самолёте-лаборатории и тренировку на случай нештатной посадки в лесу зимой.",
        "21 марта 2024 года старт автоматически отменили за несколько секунд до пуска. 23 марта «Союз МС-25» стартовал с Байконура: командир Олег Новицкий, Марина Василевская и астронавт NASA Трейси Дайсон. 25 марта корабль состыковался со станцией.",
        "На МКС Марина выполняла программу, разработанную Национальной академией наук Беларуси совместно с «Роскосмосом» и Российской академией наук: семь экспериментов, из них пять научно-исследовательских и два образовательных. Она снимала Землю фото- и видеоспектральной аппаратурой белорусского производства, исследовала лактоферрин и пробиотики, созданные в НАН, — для будущего питания космонавтов.",
        "6 апреля 2024 года экипаж вернулся на Землю на корабле «Союз МС-24» и приземлился в Казахстане. Полёт продлился 14 суток, 12 из них — на станции. 9 апреля 2024 года Марине Василевской присвоено звание Героя Беларуси."
      ],
      en:[
        "Marina Vasilevskaya was born in Minsk on 14 September 1990 and went to secondary school No. 151. From 2017 she worked as a senior flight attendant and instructor at Belavia, flying on Boeing and Embraer aircraft.",
        "In December 2022 she was one of six candidates chosen from more than three thousand applicants. On 29 May 2023 she was assigned to the prime crew of Soyuz MS-25, with paediatric surgeon Anastasia Lenkova as her backup. Training at the Gagarin Cosmonaut Training Centre included the Soyuz simulator, weightlessness on a flying laboratory and survival training for an emergency landing in a winter forest.",
        "On 21 March 2024 the launch was aborted automatically seconds before lift-off. On 23 March Soyuz MS-25 lifted off from Baikonur with commander Oleg Novitskiy, Marina Vasilevskaya and NASA astronaut Tracy Dyson. On 25 March the spacecraft docked with the station.",
        "On the ISS Marina carried out a programme prepared by the National Academy of Sciences of Belarus with Roscosmos and the Russian Academy of Sciences: seven experiments, five scientific and two educational. She photographed the Earth with Belarusian-made spectral equipment and tested lactoferrin and probiotics developed by the Academy as possible food for cosmonauts.",
        "On 6 April 2024 the crew returned to Earth aboard Soyuz MS-24 and landed in Kazakhstan. The flight lasted 14 days, 12 of them on the station. On 9 April 2024 Marina Vasilevskaya was awarded the title Hero of Belarus."
      ]
    },
    facts:[
      {be:"23 сакавіка — 6 красавіка 2024 г.", ru:"23 марта — 6 апреля 2024 г.", en:"23 March to 6 April 2024"},
      {be:"14 сутак у палёце, 12 — на МКС", ru:"14 суток в полёте, 12 — на МКС", en:"14 days in flight, 12 on the ISS"},
      {be:"7 эксперыментаў беларускай праграмы", ru:"7 экспериментов белорусской программы", en:"7 experiments of the Belarusian programme"},
      {be:"Абрана з больш чым 3000 прэтэндэнтак", ru:"Отобрана из более чем 3000 претенденток", en:"Chosen from more than 3,000 applicants"}
    ],
    img:"assets/img/today/vasilevskaya.webp",
    imgSrc:{be:"Марына Васілеўская на прэс-канферэнцыі перад стартам, Байканур, 20.03.2024. Фота: Bill Ingalls / NASA, грамадскі набытак (public domain), https://commons.wikimedia.org/wiki/File:Marina_Vasilevskaya_(NHQ202403200036)_(cropped).jpg", ru:"Марина Василевская на пресс-конференции перед стартом, Байконур, 20.03.2024. Фото: Bill Ingalls / NASA, общественное достояние (public domain), https://commons.wikimedia.org/wiki/File:Marina_Vasilevskaya_(NHQ202403200036)_(cropped).jpg", en:"Marina Vasilevskaya at the pre-flight press conference, Baikonur, 20 March 2024. Photo: Bill Ingalls / NASA, public domain, https://commons.wikimedia.org/wiki/File:Marina_Vasilevskaya_(NHQ202403200036)_(cropped).jpg"},
    gallery:[
      {src:"assets/img/today/vasilevskaya-2.webp", cap:{be:"Байканур, 23 сакавіка 2024 г.: Алег Навіцкі і Марына Васілеўская перад праверкай скафандраў «Сокал». Фота: Bill Ingalls / NASA, public domain", ru:"Байконур, 23 марта 2024 г.: Олег Новицкий и Марина Василевская перед проверкой скафандров «Сокол». Фото: Bill Ingalls / NASA, public domain", en:"Baikonur, 23 March 2024: Oleg Novitskiy and Marina Vasilevskaya before their Sokol suit checks. Photo: Bill Ingalls / NASA, public domain"}}
    ],
    src:[
      {t:"БЕЛТА: Космический экипаж с Василевской совершил посадку на Землю (06.04.2024)", url:"https://belta.by/society/view/kosmicheskij-ekipazh-s-vasilevskoj-sovershil-posadku-na-zemlju-626202-2024/"},
      {t:"БЕЛТА: Стали известны имена претенденток на полет в космос от Беларуси (24.12.2022)", url:"https://www.belta.by/president/view/stali-izvestny-imena-pretendentok-na-polet-v-kosmos-ot-belarusi-541739-2022/"},
      {t:"Википедия: Василевская, Марина Витальевна", url:"https://ru.wikipedia.org/wiki/Василевская,_Марина_Витальевна"}
    ]
  },

  {
    id:"lenkova", kind:"person", field:"medicine",
    name:{be:"Анастасія Ленкова", ru:"Анастасия Ленкова", en:"Anastasia Lenkova"},
    role:{be:"Дзіцячы хірург і касманаўт, дублёр Марыны Васілеўскай", ru:"Детский хирург и космонавт, дублёр Марины Василевской", en:"Paediatric surgeon and cosmonaut, Marina Vasilevskaya's backup"},
    text:{be:"Дзіцячы хірург, якая разам з Марынай Васілеўскай прайшла поўную падрыхтоўку да палёту на МКС. Сёння яна лечыць дзяцей і займаецца навукай.", ru:"Детский хирург, которая вместе с Мариной Василевской прошла полную подготовку к полёту на МКС. Сегодня она лечит детей и занимается наукой.", en:"A paediatric surgeon who went through the full ISS flight training alongside Marina Vasilevskaya. Today she treats children and does research."},
    more:{
      be:[
        "У снежні 2022 года сярод шасці фіналістак беларускага касмічнага адбору была Анастасія Ленкова, урач — дзіцячы хірург Рэспубліканскага навукова-практычнага цэнтра дзіцячай хірургіі. Усяго ў адборы правялі субяседаванні з больш чым трыма тысячамі чалавек.",
        "Яна прайшла такую ж падрыхтоўку, як і Марына Васілеўская, і ўвайшла ў дублюючы экіпаж карабля «Саюз МС-25» разам з касманаўтам «Раскосмаса» Іванам Вагнерам і астранаўтам NASA Дональдам Петцітам.",
        "Пра бязважкасць Анастасія расказвала: «Было такое адчуванне, быццам мяне закінулі ў паветраны басейн». У цэнтрыфузе, па яе словах, мала проста перанесці перагрузку — трэба яшчэ паказаць, што ты можаш працаваць: у гэты час правяраюць зрок, памяць, рэакцыю і арыентацыю ў прасторы.",
        "Пра космас яна марыла з дзяцінства, а любімай кнігай была «Незнайка на Месяцы». Нават на Байканур мама прывезла ёй талісман — Незнайку ў скафандры.",
        "У 2026 годзе Анастасія Ленкова — дзіцячы хірург і навуковы супрацоўнік РНПЦ анкалогіі і медыцынскай радыялогіі імя М. М. Аляксандрава. «Я сама выбрала дзве складаныя прафесіі — касманаўта і дзіцячага ўрача», — кажа яна. У Беларусі больш за 75 % урачоў — жанчыны."
      ],
      ru:[
        "В декабре 2022 года среди шести финалисток белорусского космического отбора была Анастасия Ленкова, врач — детский хирург Республиканского научно-практического центра детской хирургии. Всего в ходе отбора провели собеседования с более чем тремя тысячами человек.",
        "Она прошла точно такую же подготовку, как и Марина Василевская, и вошла в дублирующий экипаж корабля «Союз МС-25» вместе с космонавтом «Роскосмоса» Иваном Вагнером и астронавтом NASA Дональдом Петтитом.",
        "О невесомости Анастасия рассказывала: «Было такое чувство, будто меня закинули в воздушный бассейн». В центрифуге, по её словам, мало перенести перегрузку — нужно ещё показать работоспособность: во время испытания проверяют зрение, память, реакцию и ориентацию в пространстве.",
        "О космосе она мечтала с детства, а любимой книгой была «Незнайка на Луне». Даже на Байконур мама привезла ей талисман — Незнайку в скафандре.",
        "В 2026 году Анастасия Ленкова — детский хирург и научный сотрудник РНПЦ онкологии и медицинской радиологии им. Н. Н. Александрова. «Я сама выбрала две сложные профессии — космонавта и детского врача», — говорит она. В Беларуси более 75 % врачей — женщины."
      ],
      en:[
        "In December 2022 Anastasia Lenkova, a paediatric surgeon at the National Research and Practical Centre for Paediatric Surgery, was one of six finalists of the Belarusian cosmonaut selection. More than three thousand people were interviewed in the selection.",
        "She went through exactly the same training as Marina Vasilevskaya and joined the backup crew of Soyuz MS-25 together with Roscosmos cosmonaut Ivan Vagner and NASA astronaut Donald Pettit.",
        "Describing weightlessness, Anastasia said it felt as if she had been thrown into a swimming pool of air. In the centrifuge, she explained, surviving the g-force is not enough: you must also show you can work, as your eyesight, memory, reactions and spatial orientation are tested.",
        "She had dreamed of space since childhood, and her favourite book was Dunno on the Moon. Her mother even brought her a mascot to Baikonur: Dunno in a spacesuit.",
        "In 2026 Anastasia Lenkova works as a paediatric surgeon and research fellow at the N. N. Alexandrov National Cancer Centre. She says she chose two demanding professions, cosmonaut and children's doctor. More than 75% of doctors in Belarus are women."
      ]
    },
    facts:[
      {be:"Адна з 6 фіналістак касмічнага адбору", ru:"Одна из 6 финалисток космического отбора", en:"One of 6 finalists of the cosmonaut selection"},
      {be:"Дублюючы экіпаж «Саюз МС-25»", ru:"Дублирующий экипаж «Союз МС-25»", en:"Backup crew of Soyuz MS-25"},
      {be:"75 %+ урачоў Беларусі — жанчыны", ru:"75 %+ врачей Беларуси — женщины", en:"75%+ of doctors in Belarus are women"}
    ],
    img:"assets/img/today/lenkova.webp",
    imgSrc:{be:"Анастасія Ленкова на Байкануры ў дзень вывазу ракеты на старт, сакавік 2024. Фота: Bill Ingalls / NASA, грамадскі набытак (public domain), https://commons.wikimedia.org/wiki/File:Anastasia_Lenkova_(NHQ202403180002)_(cropped).jpg", ru:"Анастасия Ленкова на Байконуре в день вывоза ракеты на старт, март 2024. Фото: Bill Ingalls / NASA, общественное достояние (public domain), https://commons.wikimedia.org/wiki/File:Anastasia_Lenkova_(NHQ202403180002)_(cropped).jpg", en:"Anastasia Lenkova at Baikonur on the day of the Soyuz rollout, March 2024. Photo: Bill Ingalls / NASA, public domain, https://commons.wikimedia.org/wiki/File:Anastasia_Lenkova_(NHQ202403180002)_(cropped).jpg"},
    gallery:[
      {src:"assets/img/today/lenkova-2.webp", cap:{be:"Анастасія Ленкова (злева) і Марына Васілеўская, 2024. Фота: Прэс-служба Прэзідэнта Рэспублікі Беларусь (з указаннем крыніцы)", ru:"Анастасия Ленкова (слева) и Марина Василевская, 2024. Фото: Пресс-служба Президента Республики Беларусь (с указанием источника)", en:"Anastasia Lenkova (left) and Marina Vasilevskaya, 2024. Photo: Press Service of the President of the Republic of Belarus (attribution)"}}
    ],
    src:[
      {t:"БЕЛТА: Ленкова посетила НПЦ детской онкологии и рассказала о своей подготовке к полету в космос (29.05.2024)", url:"https://belta.by/society/view/lenkova-posetila-npts-detskoj-onkologii-i-rasskazala-o-svoej-podgotovke-k-poletu-v-kosmos-637639-2024/"},
      {t:"БЕЛТА: О женщинах в медицине. Проект «Женские лица столицы» (23.04.2026)", url:"https://belta.by/regions/view/o-zhenschinah-v-meditsine-i-ih-vklade-v-zdorovje-strany-proekt-zhenskie-litsa-stolitsy-proshel-v-minske-776971-2026/"},
      {t:"БЕЛТА: Стали известны имена претенденток на полет в космос от Беларуси (24.12.2022)", url:"https://www.belta.by/president/view/stali-izvestny-imena-pretendentok-na-polet-v-kosmos-ot-belarusi-541739-2022/"}
    ]
  },

  {
    id:"slobozhanina", kind:"person", field:"science",
    name:{be:"Кацярына Слабажаніна", ru:"Екатерина Слобожанина", en:"Katsiaryna Slabazhanina"},
    role:{be:"Біяфізік з Лельчыц, член-карэспандэнт НАН Беларусі, лаўрэат Дзяржаўнай прэміі", ru:"Биофизик из Лельчиц, член-корреспондент НАН Беларуси, лауреат Государственной премии", en:"Biophysicist from Lelchytsy, corresponding member of the National Academy of Sciences, State Prize laureate"},
    text:{be:"Нарадзілася ў Лельчыцах на Гомельшчыне. Дзесяцігоддзямі вывучае свячэнне бялкоў у клетках і на гэтай аснове стварае метады дыягностыкі хвароб.", ru:"Родилась в Лельчицах на Гомельщине. Десятилетиями изучает свечение белков в клетках и на этой основе создаёт методы диагностики болезней.", en:"Born in Lelchytsy in the Gomel region. For decades she has studied how proteins in cells glow and used it to develop ways of diagnosing disease."},
    more:{
      be:[
        "Кацярына Іванаўна Слабажаніна нарадзілася 10 сакавіка 1945 года ў гарадскім пасёлку Лельчыцы Гомельскай вобласці. У 1967 годзе з адзнакай скончыла біялагічны факультэт Беларускага дзяржаўнага ўніверсітэта.",
        "З 1969 года яна працуе ў Інстытуце фотабіялогіі (цяпер Інстытут біяфізікі і клеткавай інжынерыі НАН Беларусі). У 1993–2011 гадах была намеснікам дырэктара па навуковай рабоце, з 1999 года кіруе лабараторыяй, з 2004 года — лабараторыяй медыцынскай біяфізікі.",
        "Яе галоўная тэма — люмінесцэнцыя (свячэнне) бялкоў і будова біялагічных мембран. Пад яе кіраўніцтвам даказана, што флуарэсцэнтныя метады дазваляюць убачыць змены бялкоў у мембранах пры хваробах. За цыкл работ «Люмінесцэнцыя бялкоў і яе выкарыстанне ў навуковых даследаваннях і на практыцы» ў 1992 годзе яна разам з калегамі атрымала Дзяржаўную прэмію Рэспублікі Беларусь.",
        "Пад яе кіраўніцтвам распрацаваны экспрэс-метады дыягностыкі хвароб суставаў і спосаб дыягностыкі ўнутрывантробных заган развіцця плёну. Лабараторыя вывучае, як таксічныя металы (свінец, нікель) дзейнічаюць на эрытрацыты чалавека і як дысбаланс мікраэлементаў звязаны з метабалічным сіндромам.",
        "Доктар біялагічных навук (1992), прафесар (2003), член-карэспандэнт НАН Беларусі (2000). Аўтар больш за 450 навуковых работ, у тым ліку пяці манаграфій, і 13 аўтарскіх пасведчанняў на вынаходствы. У 2021 годзе ўзнагароджана медалём Францыска Скарыны."
      ],
      ru:[
        "Екатерина Ивановна Слобожанина родилась 10 марта 1945 года в городском посёлке Лельчицы Гомельской области. В 1967 году с отличием окончила биологический факультет Белорусского государственного университета.",
        "С 1969 года она работает в Институте фотобиологии (ныне Институт биофизики и клеточной инженерии НАН Беларуси). В 1993–2011 годах была заместителем директора по научной работе, с 1999 года руководит лабораторией, с 2004 года — лабораторией медицинской биофизики.",
        "Её главная тема — люминесценция (свечение) белков и строение биологических мембран. Под её руководством доказана применимость флуоресцентных методов для выявления изменений белков в мембранах при патологии. За цикл работ «Люминесценция белков и её использование в научных исследованиях и на практике» в 1992 году она в составе коллектива авторов удостоена Государственной премии Республики Беларусь.",
        "Под её руководством разработаны экспресс-методы дифференциальной диагностики заболеваний суставов и способ диагностики внутриутробных пороков развития плода. Лаборатория изучает действие токсичных металлов (свинец, никель) на эритроциты человека и роль дисбаланса микроэлементов в формировании метаболического синдрома.",
        "Доктор биологических наук (1992), профессор (2003), член-корреспондент НАН Беларуси (2000). Автор более 450 научных работ, в том числе пяти монографий, и 13 авторских свидетельств на изобретения. В 2021 году награждена медалью Франциска Скорины."
      ],
      en:[
        "Katsiaryna (Ekaterina) Slabazhanina was born on 10 March 1945 in the urban settlement of Lelchytsy, Gomel region. In 1967 she graduated with honours from the Faculty of Biology of the Belarusian State University.",
        "Since 1969 she has worked at the Institute of Photobiology, now the Institute of Biophysics and Cell Engineering of the National Academy of Sciences. From 1993 to 2011 she was deputy director for research; since 1999 she has headed a laboratory, since 2004 the Laboratory of Medical Biophysics.",
        "Her main subject is the luminescence (glow) of proteins and the structure of biological membranes. Her research showed that fluorescence methods can reveal changes in membrane proteins caused by disease. In 1992 she and her colleagues received the State Prize of the Republic of Belarus for the series Protein Luminescence and Its Use in Research and Practice.",
        "Under her leadership, rapid tests for joint diseases and a method of diagnosing birth defects before birth were developed. Her laboratory studies how toxic metals such as lead and nickel affect human red blood cells and how an imbalance of trace elements is linked to metabolic syndrome.",
        "Doctor of Biological Sciences (1992), professor (2003), corresponding member of the National Academy of Sciences (2000). She has written more than 450 scientific works, including five monographs, and holds 13 inventor's certificates. In 2021 she was awarded the Medal of Francysk Skaryna."
      ]
    },
    facts:[
      {be:"Нарадзілася ў Лельчыцах, 1945 г.", ru:"Родилась в Лельчицах, 1945 г.", en:"Born in Lelchytsy, 1945"},
      {be:"Дзяржаўная прэмія Беларусі — 1992 г.", ru:"Государственная премия Беларуси — 1992 г.", en:"State Prize of Belarus, 1992"},
      {be:"450+ навуковых работ, 13 вынаходстваў", ru:"450+ научных работ, 13 изобретений", en:"450+ papers, 13 inventions"}
    ],
    img:"assets/img/today/slobozhanina.webp",
    imgSrc:{be:"Партрэт К. І. Слабажанінай. Фота: Цэнтральная навуковая бібліятэка імя Якуба Коласа НАН Беларусі, праект «Гісторыя беларускай навукі ў асобах»; не свабодная ліцэнзія, выкарыстана для некамерцыйнага школьнага праекта, https://csl.bas-net.by/personalii/81708/slobojanina-ekaterina-ivanovna/", ru:"Портрет Е. И. Слобожаниной. Фото: Центральная научная библиотека им. Якуба Коласа НАН Беларуси, проект «История белорусской науки в лицах»; несвободная лицензия, использовано в некоммерческом школьном проекте, https://csl.bas-net.by/personalii/81708/slobojanina-ekaterina-ivanovna/", en:"Portrait of E. I. Slobozhanina. Photo: Yakub Kolas Central Scientific Library of the National Academy of Sciences of Belarus; not freely licensed, used in a non-commercial school project, https://csl.bas-net.by/personalii/81708/slobojanina-ekaterina-ivanovna/"},
    src:[
      {t:"ЦНБ НАН Беларуси: Слобожанина Екатерина Ивановна (История белорусской науки в лицах)", url:"https://csl.bas-net.by/personalii/81708/slobojanina-ekaterina-ivanovna/"},
      {t:"Википедия: Слобожанина, Екатерина Ивановна", url:"https://ru.wikipedia.org/wiki/Слобожанина,_Екатерина_Ивановна"}
    ]
  },

  {
    id:"gomel-navuka", kind:"achievement", field:"science",
    name:{be:"Маладыя навукоўцы Гомельшчыны", ru:"Молодые учёные Гомельщины", en:"Young women scientists of the Gomel region"},
    role:{be:"Прэміі аблвыканкама і вынаходствы гомельскіх даследчыц", ru:"Премии облисполкома и изобретения гомельских исследовательниц", en:"Regional prizes and inventions of Gomel researchers"},
    text:{be:"Стаматолаг Наталля Калчанова распрацоўвае антыбактэрыяльныя пакрыцці, навукоўца Вікторыя Шумская — фільтр для хімічнай прамысловасці. У беларускай навуцы ўсё больш жанчын.", ru:"Стоматолог Наталья Колчанова разрабатывает антибактериальные покрытия, учёная Виктория Шумская — фильтр для химической промышленности. В белорусской науке всё больше женщин.", en:"Dentist Natalia Kolchanova develops antibacterial coatings, and researcher Viktoria Shumskaya has invented a filter for the chemical industry. Women play a growing part in Belarusian science."},
    more:{
      be:[
        "На Гомельшчыне навуковымі даследаваннямі і распрацоўкамі займаюцца больш за 2 тысячы чалавек у 28 арганізацыях, сярод іх 24 доктары і 112 кандыдатаў навук. Пра гэта гаварылі 22 студзеня 2026 года ў Гомелі на ўрачыстым сходзе да Дня беларускай навукі.",
        "Там уручылі прэміі Гомельскага аблвыканкама маладым перспектыўным навукоўцам. Дыплом лаўрэата атрымала дацэнт кафедры отарыналарынгалогіі Гомельскага дзяржаўнага медыцынскага ўніверсітэта Наталля Калчанова — за распрацоўку і вывучэнне антыбактэрыяльных уласцівасцей кампазіцыйных пакрыццяў. «Я сама стаматолаг, працавала ў камандзе з мікрабіёлагамі», — расказала яна. Такія пакрыцці павінны зніжаць рызыку запаленчых захворванняў рота, а свой прадукт будзе танней за замежныя аналагі.",
        "Вікторыя Шумская — малады навукоўца Інстытута механікі металапалімерных сістэм імя У. А. Белага НАН Беларусі ў Гомелі. Яна распрацавала фільтр, які затрымлівае масляны аэразоль і не дае тэхнічнаму маслу трапіць у гатовыя ўгнаенні. У 2023 годзе фільтр праходзіў выпрабаванні на флагмане беларускай хімічнай прамысловасці. З гэтай распрацоўкай Вікторыя перамагла ў конкурсе «100 ідэй для Беларусі» і атрымала залаты медаль на міжнародным форуме вынаходнікаў у Новасібірску.",
        "Па ўсёй краіне ў 2025 годзе жанчыны складалі 38,1 % даследчыкаў, а ў Нацыянальнай акадэміі навук — каля паловы. 25 верасня 2026 года ў Мінску прайшоў першы форум жанчын-навукоўцаў «Роля жанчыны ў навуцы і адукацыі». Адна з яго секцый называлася «Маладыя жанчыны ў навуцы»."
      ],
      ru:[
        "На Гомельщине научными исследованиями и разработками занимаются более 2 тысяч человек в 28 организациях, среди них 24 доктора и 112 кандидатов наук. Об этом говорили 22 января 2026 года в Гомеле на торжественном собрании ко Дню белорусской науки.",
        "Там вручили премии Гомельского облисполкома молодым перспективным учёным. Диплом лауреата получила доцент кафедры оториноларингологии Гомельского государственного медицинского университета Наталья Колчанова — за разработку и изучение антибактериальных свойств композиционных покрытий. «Я сама стоматолог, работала в команде с микробиологами», — рассказала она. Такие покрытия должны снижать риск воспалительных заболеваний полости рта, а собственный продукт будет дешевле зарубежных аналогов.",
        "Виктория Шумская — молодой учёный Института механики металлополимерных систем им. В. А. Белого НАН Беларуси в Гомеле. Она разработала фильтр, который отсекает масляный аэрозоль и не даёт техническому маслу попасть в готовые удобрения. В 2023 году фильтр проходил испытания на флагмане отечественной химической промышленности. С этой разработкой Виктория победила в конкурсе «100 идей для Беларуси» и получила золотую медаль на международном форуме изобретателей в Новосибирске.",
        "По всей стране в 2025 году женщины составляли 38,1 % исследователей, а в Национальной академии наук — около половины. 25 сентября 2026 года в Минске прошёл первый форум женщин-учёных «Роль женщины в науке и образовании». Одна из его секций называлась «Молодые женщины в науке»."
      ],
      en:[
        "More than 2,000 people in 28 organisations do research and development in the Gomel region, including 24 doctors and 112 candidates of sciences. These figures were given in Gomel on 22 January 2026 at a ceremony for the Day of Belarusian Science.",
        "At the ceremony the Gomel Regional Executive Committee awarded its prizes to promising young scientists. One laureate was Natalia Kolchanova, associate professor at Gomel State Medical University, for developing and studying antibacterial composite coatings. She explained that she is a dentist herself and worked in a team with microbiologists. Such coatings should lower the risk of inflammatory diseases of the mouth, and a home-made product will cost less than foreign ones.",
        "Viktoria Shumskaya is a young researcher at the V. A. Bely Institute of Mechanics of Metal-Polymer Systems in Gomel. She developed a filter that traps oil mist so that machine oil does not get into finished fertiliser. In 2023 the filter was being tested at the country's leading chemical plant. With this invention she won the contest 100 Ideas for Belarus and a gold medal at an international inventors' forum in Novosibirsk.",
        "Across Belarus, women made up 38.1% of researchers in 2025, and about half of the researchers at the National Academy of Sciences. On 25 September 2026 Minsk hosted the first forum of women scientists, The Role of Women in Science and Education, with a section on young women in science."
      ]
    },
    facts:[
      {be:"2000+ даследчыкаў у 28 арганізацыях вобласці", ru:"2000+ исследователей в 28 организациях области", en:"2,000+ researchers in 28 organisations of the region"},
      {be:"38,1 % даследчыкаў Беларусі — жанчыны (2025)", ru:"38,1 % исследователей Беларуси — женщины (2025)", en:"38.1% of researchers in Belarus are women (2025)"},
      {be:"Каля 50 % даследчыкаў НАН — жанчыны", ru:"Около 50 % исследователей НАН — женщины", en:"About 50% of Academy researchers are women"}
    ],
    img:"assets/img/today/gomel-navuka.webp",
    imgSrc:{be:"Гомельскі дзяржаўны медыцынскі ўніверсітэт, дзе працуе Наталля Калчанова. Фота: Alexander Sokolov, грамадскі набытак (public domain), https://commons.wikimedia.org/wiki/File:Gomel_State_Medical_University.jpg", ru:"Гомельский государственный медицинский университет, где работает Наталья Колчанова. Фото: Alexander Sokolov, общественное достояние (public domain), https://commons.wikimedia.org/wiki/File:Gomel_State_Medical_University.jpg", en:"Gomel State Medical University, where Natalia Kolchanova works. Photo: Alexander Sokolov, public domain, https://commons.wikimedia.org/wiki/File:Gomel_State_Medical_University.jpg"},
    src:[
      {t:"БЕЛТА: Их открытия меняют жизнь. В Гомеле чествовали молодых и заслуженных ученых области (22.01.2026)", url:"https://belta.by/regions/view/ih-otkrytija-menjajut-zhizn-v-gomele-chestvovali-molodyh-i-zasluzhennyh-uchenyh-oblasti-760370-2026/"},
      {t:"СТВ: «Был колоссальный ажиотаж». Гомельчанка разработала фильтр для химпромышленности (28.01.2023)", url:"https://ctv.by/news/obshestvo/byl-kolossalnyj-azhiotazh-gomelchanka-razrabotala-filtr-kotoryj-reshit-problemy-himpromyshlennosti"},
      {t:"BelTA: Belstat: Women account for almost 40% of all researchers in Belarus (06.05.2026)", url:"https://eng.belta.by/society/view/belstat-women-account-for-almost-40-of-all-researchers-in-belarus-179931-2026/"},
      {t:"БЕЛТА: Около 50% исследователей в НАН Беларуси — женщины (25.09.2026)", url:"https://belta.by/society/view/okolo-50-issledovatelej-v-nan-belarusi-zhenschiny-802825-2026"}
    ]
  },

  {
    id:"neglyubka", kind:"achievement", field:"culture",
    name:{be:"Неглюбскае ткацтва — у спісе ЮНЕСКА", ru:"Неглюбское ткачество — в списке ЮНЕСКО", en:"Neglyubka weaving on the UNESCO list"},
    role:{be:"Ткацкая традыцыя Веткаўскага раёна Гомельскай вобласці, ЮНЕСКА — 9 снежня 2025 г.", ru:"Ткацкая традиция Ветковского района Гомельской области, ЮНЕСКО — 9 декабря 2025 г.", en:"A weaving tradition of Vetka district, Gomel region; UNESCO, 9 December 2025"},
    text:{be:"Неглюбскія ручнікі ткуць пераважна жанчыны, і майстэрства перадаецца ад бабуль і мам да дачок. У снежні 2025 года ЮНЕСКА ўнесла гэтую традыцыю ў спіс спадчыны, якая патрабуе тэрміновай аховы.", ru:"Неглюбские рушники ткут в основном женщины, и мастерство передаётся от бабушек и мам к дочерям. В декабре 2025 года ЮНЕСКО внесла эту традицию в список наследия, нуждающегося в срочной охране.", en:"Neglyubka towels are woven mostly by women, and the skill passes from grandmothers and mothers to daughters. In December 2025 UNESCO added the tradition to its list of heritage in need of urgent safeguarding."},
    more:{
      be:[
        "Неглюбка — аграгарадок у Веткаўскім раёне, за 60 км ад Гомеля. З сярэдзіны XIX стагоддзя ён вядомы як цэнтр мастацкага ручнога ткацтва. Сама традыцыя склалася ў XVII стагоддзі: тут ткуць і вышываюць ручнікі, адзенне і рэчы для інтэр'ера.",
        "Неглюбскія ручнікі вядомыя складанай палітрай — да 25 адценняў — і больш чым 120 узорамі. Геаметрычныя і раслінныя ўзоры («крывулі», «павучкі», «яблынька») — гэта зашыфраваныя пажаданні дабра, кахання, дабрабыту і здароўя. Ткуць з адваротнага боку, таму кожная рэч непаўторная.",
        "Паводле ЮНЕСКА, гэтай справай займаюцца пераважна жанчыны, хоць дапамагаюць і мужчыны. Веды перадаюцца ў сем'ях — асабліва ад бабуль і мам да дачок, а таксама ў рамесных цэнтрах і музеях праз выставы, майстар-класы і навучанне. На фота — Таццяна Суглоб з Неглюбкі, патомная ткачыха, якая папулярызуе неглюбскі промысел.",
        "9 снежня 2025 года на 20-й сесіі Міжурадавага камітэта ЮНЕСКА ў Нью-Дэлі традыцыю ўнеслі ў Спіс нематэрыяльнай культурнай спадчыны, якая патрабуе тэрміновай аховы. Гэта вынік сумеснай працы неглюбскіх майстроў, экспертаў, Нацыянальнай камісіі па справах ЮНЕСКА, Міністэрства культуры, МЗС і Беларускага дзяржаўнага ўніверсітэта культуры і мастацтваў.",
        "Цяпер у спісах ЮНЕСКА сем беларускіх элементаў, і два з іх — з Гомельшчыны. У 2019 годзе туды трапіў вясновы абрад «Юраўскі карагод» у вёсцы Пагост Жыткавіцкага раёна."
      ],
      ru:[
        "Неглюбка — агрогородок в Ветковском районе, в 60 км от Гомеля. С середины XIX века он известен как центр художественного ручного ткачества. Сама традиция сложилась в XVII веке: здесь ткут и вышивают рушники, одежду и предметы интерьера.",
        "Неглюбские рушники славятся сложной палитрой — до 25 оттенков — и более чем 120 узорами. Геометрические и растительные узоры («кривули», «паучки», «яблонька») — это зашифрованные пожелания добра, любви, благополучия и здоровья. Ткут с изнаночной стороны, поэтому каждая вещь неповторима.",
        "По данным ЮНЕСКО, этим ремеслом занимаются в основном женщины, хотя помогают и мужчины. Знания передаются в семьях — особенно от бабушек и мам к дочерям, а также в ремесленных центрах и музеях через выставки, мастер-классы и обучение. На фото — Татьяна Суглоб из Неглюбки, потомственная ткачиха, которая популяризирует неглюбский промысел.",
        "9 декабря 2025 года на 20-й сессии Межправительственного комитета ЮНЕСКО в Нью-Дели традицию внесли в Список нематериального культурного наследия, нуждающегося в срочной охране. Это результат совместной работы неглюбских мастеров, экспертов, Национальной комиссии по делам ЮНЕСКО, Министерства культуры, МИД и Белорусского государственного университета культуры и искусств.",
        "Теперь в списках ЮНЕСКО семь белорусских элементов, и два из них — с Гомельщины. В 2019 году туда вошёл весенний обряд «Юровский хоровод» («Юраўскі карагод») в деревне Погост Житковичского района."
      ],
      en:[
        "Neglyubka is a village in Vetka district, 60 km from Gomel. Since the mid-19th century it has been known as a centre of hand weaving. The tradition itself took shape in the 17th century: people here weave and embroider towels (rushniks), clothing and household textiles.",
        "Neglyubka towels are famous for their complex palette of up to 25 shades and more than 120 patterns. Geometric and floral motifs such as krivuli, little spiders and the apple tree are coded wishes of goodness, love, wellbeing and health. The cloth is woven from the reverse side, so every piece is unique.",
        "According to UNESCO, the craft is practised mostly by women, although men can also help. The knowledge is passed down in families, especially from grandmothers and mothers to daughters, and also in craft centres and museums through exhibitions, workshops and training. The photo shows Tatiana Suhlob from Neglyubka, a weaver from a family of weavers who promotes the craft.",
        "On 9 December 2025, at its 20th session in New Delhi, UNESCO's Intergovernmental Committee inscribed the tradition on the List of Intangible Cultural Heritage in Need of Urgent Safeguarding. This was the result of joint work by Neglyubka craftspeople, experts, the National Commission for UNESCO, the Ministry of Culture, the Ministry of Foreign Affairs and the Belarusian State University of Culture and Arts.",
        "Belarus now has seven elements on the UNESCO lists, and two of them come from the Gomel region. The other is the spring rite of Juraŭski Karahod in the village of Pahost, Zhytkavichy district, inscribed in 2019."
      ]
    },
    facts:[
      {be:"Да 25 адценняў і 120+ узораў", ru:"До 25 оттенков и 120+ узоров", en:"Up to 25 shades and 120+ patterns"},
      {be:"Традыцыя з XVII стагоддзя", ru:"Традиция с XVII века", en:"A tradition since the 17th century"},
      {be:"ЮНЕСКА — 9 снежня 2025 г.", ru:"ЮНЕСКО — 9 декабря 2025 г.", en:"UNESCO, 9 December 2025"}
    ],
    img:"assets/img/today/neglyubka.webp",
    imgSrc:{be:"Таццяна Суглоб, ткачыха з Неглюбкі, на выставе неглюбскага ткацтва ў Мінску, 14.02.2026. Фота: Tatiana Markina, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:2026.02.14_Belarusian_Traditional_Weaving_of_Niehliubka_Tatiana_Suhlob.jpg", ru:"Татьяна Суглоб, ткачиха из Неглюбки, на выставке неглюбского ткачества в Минске, 14.02.2026. Фото: Tatiana Markina, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:2026.02.14_Belarusian_Traditional_Weaving_of_Niehliubka_Tatiana_Suhlob.jpg", en:"Tatiana Suhlob, a weaver from Neglyubka, at an exhibition of Neglyubka weaving in Minsk, 14 February 2026. Photo: Tatiana Markina, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:2026.02.14_Belarusian_Traditional_Weaving_of_Niehliubka_Tatiana_Suhlob.jpg"},
    gallery:[
      {src:"assets/img/today/neglyubka-2.webp", cap:{be:"Неглюбскія ручнікі на выставе ў Мінску, 14.02.2026. Фота: Tess Mattew, CC BY-SA 4.0", ru:"Неглюбские рушники на выставке в Минске, 14.02.2026. Фото: Tess Mattew, CC BY-SA 4.0", en:"Neglyubka towels at an exhibition in Minsk, 14 February 2026. Photo: Tess Mattew, CC BY-SA 4.0"}},
      {src:"assets/img/today/neglyubka-3.webp", cap:{be:"Выстава неглюбскага ткацтва ў Мінску, 14.02.2026. Фота: Tess Mattew, CC BY-SA 4.0", ru:"Выставка неглюбского ткачества в Минске, 14.02.2026. Фото: Tess Mattew, CC BY-SA 4.0", en:"Exhibition of Neglyubka weaving in Minsk, 14 February 2026. Photo: Tess Mattew, CC BY-SA 4.0"}}
    ],
    src:[
      {t:"МИД Республики Беларусь: Negliub textile tradition included in UNESCO List (09.12.2025)", url:"https://mfa.gov.by/en/press/news_mfa/d872f48be1170be4.html"},
      {t:"UNESCO: Negliubka textile tradition of Vetka District Gomel Region", url:"https://ich.unesco.org/en/USL/negliubka-textile-tradition-of-vetka-district-gomel-region-02088"},
      {t:"Министерство культуры: Negliubka textile tradition inscribed on UNESCO list", url:"https://www.kultura.by/en/news/negliubka-textile-tradition-of-vetka-district-from-belarus-inscribed-on-unesco-intangible-cultural-h/"},
      {t:"Вікіпедыя: Неглюбка", url:"https://be.wikipedia.org/wiki/Неглюбка"}
    ]
  },

  {
    id:"mamashuk", kind:"person", field:"sport",
    name:{be:"Марыя Мамашук", ru:"Мария Мамошук", en:"Maryia Mamashuk"},
    role:{be:"Барэц вольнага стылю з Гомельскага раёна, срэбны прызёр Алімпіяды-2016, чэмпіёнка Еўропы", ru:"Борец вольного стиля из Гомельского района, серебряный призёр Олимпиады-2016, чемпионка Европы", en:"Freestyle wrestler from Gomel district, 2016 Olympic silver medallist, European champion"},
    text:{be:"Дзяўчына з вёскі Зябраўка пад Гомелем прыйшла ў барацьбу дзякуючы трэнеру, які сам абыходзіў школы. У 2016 годзе яна заваявала срэбра Алімпійскіх гульняў у Рыа-дэ-Жанейра.", ru:"Девушка из деревни Зябровка под Гомелем пришла в борьбу благодаря тренеру, который сам обходил школы. В 2016 году она завоевала серебро Олимпийских игр в Рио-де-Жанейро.", en:"A girl from the village of Ziabrauka near Gomel took up wrestling thanks to a coach who visited local schools himself. In 2016 she won silver at the Rio de Janeiro Olympics."},
    more:{
      be:[
        "Марыя Мамашук нарадзілася 31 жніўня 1992 года ў вёсцы Зябраўка Гомельскага раёна. Яе першы трэнер Пётр Паўлавіч Бабей набіраў дзяцей у секцыю вольнай барацьбы спартыўнай школы вагонабудаўнічага завода і сам абыходзіў школы пасёлкаў Зябраўка і Клімаўка.",
        "Маме спачатку не падабалася, што дачка займаецца барацьбой, але трэнер пераканаў яе: Марыі трэба працягваць, каб развівацца далей. Потым былі Гомельскае вучылішча алімпійскага рэзерву і факультэт фізічнай культуры Гомельскага дзяржаўнага ўніверсітэта імя Францыска Скарыны.",
        "У 2015 годзе Марыя стала бронзавым прызёрам Еўрапейскіх гульняў у Баку і чэмпіёнкай Еўропы сярод моладзі. У 2016 годзе ў Рызе яна выйграла чэмпіянат Еўропы ў вазе да 69 кг, а на Алімпійскіх гульнях у Рыа-дэ-Жанейра дайшла да фіналу ў вазе да 63 кг і заваявала срэбны медаль.",
        "У 2017 годзе ў Новім Садзе яна стала сярэбраным прызёрам чэмпіянату Еўропы. Яе алімпійскі медаль трапіў на беларускую паштовую марку, а ў Музеі спартыўнай славы Гомельшчыны ў ГДУ імя Скарыны ёсць экспазіцыя, прысвечаная Марыі Мамашук."
      ],
      ru:[
        "Мария Мамошук родилась 31 августа 1992 года в деревне Зябровка Гомельского района. Её первый тренер Пётр Павлович Бабей набирал учеников в секцию вольной борьбы спортивной школы вагоностроительного завода и сам обходил школы посёлков Зябровка и Климовка.",
        "Маме сначала не нравилось увлечение дочери борьбой, но тренер убедил её: Марии нужно продолжать занятия, чтобы развиваться дальше. Потом были Гомельское училище олимпийского резерва и факультет физической культуры Гомельского государственного университета имени Франциска Скорины.",
        "В 2015 году Мария стала бронзовым призёром Европейских игр в Баку и чемпионкой Европы среди молодёжи. В 2016 году в Риге она выиграла чемпионат Европы в весе до 69 кг, а на Олимпийских играх в Рио-де-Жанейро вышла в финал в весе до 63 кг и завоевала серебряную медаль.",
        "В 2017 году в Нови-Саде она стала серебряным призёром чемпионата Европы. Её олимпийская медаль попала на белорусскую почтовую марку, а в Музее спортивной славы Гомельщины в ГГУ им. Ф. Скорины есть экспозиция, посвящённая Марии Мамошук."
      ],
      en:[
        "Maryia Mamashuk was born on 31 August 1992 in the village of Ziabrauka, Gomel district. Her first coach, Piotr Babei, recruited children for the freestyle wrestling section of the sports school of the Gomel railway car building plant and went round the schools of Ziabrauka and Klimauka himself.",
        "At first her mother did not like her daughter's wrestling, but the coach persuaded her that Maryia should keep training. She went on to the Gomel Olympic Reserve College and the Faculty of Physical Education of Francysk Skaryna Gomel State University.",
        "In 2015 Maryia won bronze at the European Games in Baku and became U23 European champion. In 2016 she won the European Championships in Riga in the 69 kg class, and at the Rio de Janeiro Olympics she reached the 63 kg final and won the silver medal.",
        "In 2017 she won silver at the European Championships in Novi Sad. Her Olympic medal appeared on a Belarusian postage stamp, and the Museum of Sporting Glory of the Gomel Region at Gomel State University has a display about her."
      ]
    },
    facts:[
      {be:"Срэбра Алімпіяды-2016 (да 63 кг)", ru:"Серебро Олимпиады-2016 (до 63 кг)", en:"Olympic silver 2016 (63 kg)"},
      {be:"Чэмпіёнка Еўропы 2016 г. (да 69 кг)", ru:"Чемпионка Европы 2016 г. (до 69 кг)", en:"European champion 2016 (69 kg)"},
      {be:"Родам з Зябраўкі Гомельскага раёна", ru:"Родом из Зябровки Гомельского района", en:"From Ziabrauka, Gomel district"}
    ],
    img:"assets/img/today/mamashuk.webp",
    imgSrc:{be:"Марыя Мамашук на чэмпіянаце свету па барацьбе ў Осла, 2021 (фрагмент). Фота: Jørgen Løken, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Maryia_Mamashuk.JPG", ru:"Мария Мамошук на чемпионате мира по борьбе в Осло, 2021 (фрагмент). Фото: Jørgen Løken, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Maryia_Mamashuk.JPG", en:"Maryia Mamashuk at the 2021 World Wrestling Championships in Oslo (cropped). Photo: Jørgen Løken, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Maryia_Mamashuk.JPG"},
    gallery:[
      {src:"assets/img/today/mamashuk-2.webp", cap:{be:"Паштовая марка Беларусі 2016 г. «Сярэбраныя прызёры Гульняў XXXI Алімпіяды». Белпошта, грамадскі набытак", ru:"Почтовая марка Беларуси 2016 г. «Серебряные призёры Игр XXXI Олимпиады». Белпочта, общественное достояние", en:"Belarusian 2016 stamp, Silver medallists of the Games of the XXXI Olympiad. Belpochta, public domain"}}
    ],
    src:[
      {t:"Гомельская областная библиотека: Мамошук Мария Руслановна", url:"http://www.person.goub.by/?p=2105"},
      {t:"Википедия: Мамошук, Мария Руслановна", url:"https://ru.wikipedia.org/wiki/Мамошук,_Мария_Руслановна"},
      {t:"Wikipedia: Maryia Mamashuk", url:"https://en.wikipedia.org/wiki/Maryia_Mamashuk"}
    ]
  },

  {
    id:"domracheva", kind:"person", field:"sport",
    name:{be:"Дар'я Домрачава", ru:"Дарья Домрачева", en:"Darya Domracheva"},
    role:{be:"Біятланістка, чатырохразовая алімпійская чэмпіёнка, Герой Беларусі", ru:"Биатлонистка, четырёхкратная олимпийская чемпионка, Герой Беларуси", en:"Biathlete, four-time Olympic champion, Hero of Belarus"},
    text:{be:"Самая тытулаваная спартсменка ў гісторыі зімовых Алімпіяд па біятлоне: тры золаты ў Сочы-2014 і эстафета ў Пхёнчхане-2018. Першая жанчына, якой прысвоена званне Героя Беларусі.", ru:"Самая титулованная спортсменка в истории зимних Олимпиад по биатлону: три золота в Сочи-2014 и эстафета в Пхёнчхане-2018. Первая женщина, удостоенная звания Героя Беларуси.", en:"The most successful woman in Olympic biathlon history: three golds at Sochi 2014 and the relay at PyeongChang 2018. The first woman to be named Hero of Belarus."},
    more:{
      be:[
        "Дар'я Домрачава нарадзілася 3 жніўня 1986 года ў Мінску ў сям'і архітэктараў. Дзяцінства правяла ў сібірскім горадзе Нягань: займалася танцамі і баскетболам, з 1992 года — лыжнымі гонкамі, а ў 1999 годзе прыйшла ў біятлон. З 2004 года яна трэніравалася і выступала за зборную Беларусі.",
        "На Алімпіядзе-2010 у Ванкуверы яна заваявала бронзу ў індывідуальнай гонцы. У 2012 і 2013 гадах станавілася чэмпіёнкай свету, а ў сезоне 2014/15 выйграла агульны залік Кубка свету.",
        "Сочы-2014 — яе зорныя Гульні: тры залатыя медалі ў гонцы праследавання, індывідуальнай гонцы і масстарце. У дзень трэцяга золата Дар'і прысвоілі званне Героя Беларусі — яна стала першай жанчынай, удастоенай гэтай вышэйшай узнагароды краіны.",
        "У 2016 годзе ў Дар'і нарадзілася дачка, а ў студзені 2017 года яна вярнулася ў спорт. На Алімпіядзе-2018 у Пхёнчхане — срэбра ў масстарце і золата ў эстафеце разам з Надзеяй Скардзіна, Ірынай Крыўко і Дынарай Алімбекавай: першае каманднае золата Беларусі на зімовых Алімпіядах. 25 чэрвеня 2018 года Дар'я завяршыла кар'еру.",
        "Дар'я Домрачава — адзіная ў гісторыі жаночага біятлона чатырохразовая алімпійская чэмпіёнка. Яна і сёння побач са спортам: у чэрвені 2026 года ўдзельнічала ў «Алімпійскім дні» ў Мінску, дзе хвіліны трэніровак удзельнікаў ператвараліся ў дапамогу фонду для дзяцей з анкалагічнымі захворваннямі і інваліднасцю."
      ],
      ru:[
        "Дарья Домрачева родилась 3 августа 1986 года в Минске в семье архитекторов. Детство провела в сибирском городе Нягань: занималась танцами и баскетболом, с 1992 года — лыжными гонками, а в 1999 году пришла в биатлон. С 2004 года она тренировалась и выступала за сборную Беларуси.",
        "На Олимпиаде-2010 в Ванкувере она завоевала бронзу в индивидуальной гонке. В 2012 и 2013 годах становилась чемпионкой мира, а в сезоне 2014/15 выиграла общий зачёт Кубка мира.",
        "Сочи-2014 — её звёздные Игры: три золотые медали в гонке преследования, индивидуальной гонке и масс-старте. В день третьего золота Дарье присвоили звание Героя Беларуси — она стала первой женщиной, удостоенной высшей награды страны.",
        "В 2016 году у Дарьи родилась дочь, а в январе 2017 года она вернулась в спорт. На Олимпиаде-2018 в Пхёнчхане — серебро в масс-старте и золото в эстафете вместе с Надеждой Скардино, Ириной Кривко и Динарой Алимбековой: первое командное золото Беларуси на зимних Олимпиадах. 25 июня 2018 года Дарья завершила карьеру.",
        "Дарья Домрачева — единственная в истории женского биатлона четырёхкратная олимпийская чемпионка. Она и сегодня рядом со спортом: в июне 2026 года участвовала в «Олимпийском дне» в Минске, где минуты тренировок участников превращались в помощь фонду для детей с онкологическими заболеваниями и инвалидностью."
      ],
      en:[
        "Darya Domracheva was born in Minsk on 3 August 1986 into a family of architects. She grew up in the Siberian town of Nyagan, where she did dancing and basketball, took up cross-country skiing in 1992 and biathlon in 1999. From 2004 she trained and competed for the Belarusian national team.",
        "At the 2010 Vancouver Olympics she won bronze in the individual race. She became world champion in 2012 and 2013, and in the 2014/15 season she won the overall World Cup.",
        "Sochi 2014 were her greatest Games: three gold medals in the pursuit, the individual race and the mass start. On the day of her third gold she was named Hero of Belarus, the first woman to receive the country's highest title.",
        "Her daughter was born in 2016, and in January 2017 she returned to racing. At PyeongChang 2018 she took silver in the mass start and gold in the relay with Nadezhda Skardino, Iryna Kryuko and Dzinara Alimbekava, Belarus' first team gold at the Winter Olympics. She retired on 25 June 2018.",
        "Darya Domracheva is the only four-time Olympic champion in women's biathlon. She still supports sport today: in June 2026 she took part in Olympic Day in Minsk, where participants' training minutes were turned into donations to a charity for children with cancer and disabilities."
      ]
    },
    facts:[
      {be:"4 алімпійскія золаты", ru:"4 олимпийских золота", en:"4 Olympic gold medals"},
      {be:"Сочы-2014: 3 залатыя медалі", ru:"Сочи-2014: 3 золотые медали", en:"Sochi 2014: 3 gold medals"},
      {be:"Герой Беларусі (2014)", ru:"Герой Беларуси (2014)", en:"Hero of Belarus (2014)"}
    ],
    img:"assets/img/today/domracheva.webp",
    imgSrc:{be:"Дар'я Домрачава на этапе Кубка свету ў Обергофе, студзень 2018. Фота: Wikijunkie, CC BY-SA 3.0, https://commons.wikimedia.org/wiki/File:Darya_Domracheva_WCup_Oberhof_2018.jpg", ru:"Дарья Домрачева на этапе Кубка мира в Оберхофе, январь 2018. Фото: Wikijunkie, CC BY-SA 3.0, https://commons.wikimedia.org/wiki/File:Darya_Domracheva_WCup_Oberhof_2018.jpg", en:"Darya Domracheva at the World Cup in Oberhof, January 2018. Photo: Wikijunkie, CC BY-SA 3.0, https://commons.wikimedia.org/wiki/File:Darya_Domracheva_WCup_Oberhof_2018.jpg"},
    gallery:[
      {src:"assets/img/today/domracheva-2.webp", cap:{be:"Паштовая марка Беларусі 2014 г. у гонар трох алімпійскіх золатаў Дар'і Домрачавай. Белпошта, грамадскі набытак", ru:"Почтовая марка Беларуси 2014 г. в честь трёх олимпийских золотых медалей Дарьи Домрачевой. Белпочта, общественное достояние", en:"Belarusian 2014 stamp honouring Darya Domracheva's three Olympic golds. Belpochta, public domain"}}
    ],
    src:[
      {t:"НОК Беларуси: Домрачева Дарья Владимировна", url:"https://www.noc.by/olympic-games/team/chempiony-olimpijskih/domracheva-darya-vladimirovna-biatlon/"},
      {t:"Википедия: Домрачева, Дарья Владимировна", url:"https://ru.wikipedia.org/wiki/Домрачева,_Дарья_Владимировна"},
      {t:"БЕЛТА: «Важное дело в атмосфере праздника». Домрачева об «Олимпийском дне» (27.06.2026)", url:"https://belta.by/society/view/vazhnoe-delo-v-atmosfere-prazdnika-domracheva-ob-olimpijskom-dne-788519-2026/"}
    ]
  }
];

window.PROFESSIONS = [
  { then:{be:"Сувязістка",ru:"Связистка",en:"Signaller"}, thenText:{be:"Перадавала загады па тэлефоне і рацыі пад абстрэлам. Ад яе хуткасці залежалі жыцці.",ru:"Передавала приказы по телефону и рации под обстрелом. От её скорости зависели жизни.",en:"Passed on orders by phone and radio under fire."},
    now:{be:"Праграмістка",ru:"Программистка",en:"Software developer"}, nowText:{be:"Будуе сістэмы сувязі і праграмы, праз якія сёння ідзе інфармацыя.",ru:"Строит системы связи и программы, через которые сегодня идёт информация.",en:"Builds the systems that carry information today."},
    imgThen:"assets/img/today/prof-1-then.webp",
    imgThenSrc:{be:"Савецкія сувязісткі артылерыйскай часці ля палявога тэлефона, 1941–1942. Фота: Сяргей Струннікаў, грамадскі набытак, https://commons.wikimedia.org/wiki/File:У_полевого_телефона.jpg", ru:"Советские связистки артиллерийской части у полевого телефона, 1941–1942. Фото: Сергей Струнников, общественное достояние, https://commons.wikimedia.org/wiki/File:У_полевого_телефона.jpg", en:"Soviet women signallers of an artillery unit at a field telephone, 1941–1942. Photo: Sergey Strunnikov, public domain, https://commons.wikimedia.org/wiki/File:У_полевого_телефона.jpg"},
    imgNow:"assets/img/today/prof-1-now.webp",
    imgNowSrc:{be:"Праграмістка піша код (ілюстрацыйнае фота, не з Беларусі). Фота: Joonspoon, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Programmer_writing_code_with_Unit_Tests.jpg", ru:"Программистка пишет код (иллюстративное фото, не из Беларуси). Фото: Joonspoon, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Programmer_writing_code_with_Unit_Tests.jpg", en:"A woman programmer writing code (illustrative photo, not from Belarus). Photo: Joonspoon, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:Programmer_writing_code_with_Unit_Tests.jpg"} },
  { then:{be:"Медсястра",ru:"Медсестра",en:"Field nurse"}, thenText:{be:"Выносіла параненых з поля бою, рабіла перавязкі ў шпіталях.",ru:"Выносила раненых с поля боя, делала перевязки в госпиталях.",en:"Carried the wounded from the battlefield and dressed wounds."},
    now:{be:"Урач",ru:"Врач",en:"Doctor"}, nowText:{be:"Лечыць з дапамогай сучаснай тэхнікі, робіць складаныя аперацыі.",ru:"Лечит с помощью современной техники, делает сложные операции.",en:"Treats patients with modern technology."},
    imgThen:"assets/img/today/prof-2-then.webp",
    imgThenSrc:{be:"Санінструктар 119-га стралковага палка Ніна Курганава аказвае першую дапамогу параненаму, 1942. Фота: Георгій Канавалаў, грамадскі набытак, https://commons.wikimedia.org/wiki/File:Санинструктор_Нина_Курганова_оказывает_первую_помощь_раненому.jpg", ru:"Санинструктор 119-го стрелкового полка Нина Курганова оказывает первую помощь раненому, 1942. Фото: Георгий Коновалов, общественное достояние, https://commons.wikimedia.org/wiki/File:Санинструктор_Нина_Курганова_оказывает_первую_помощь_раненому.jpg", en:"Medical orderly Nina Kurganova of the 119th Rifle Regiment gives first aid to a wounded soldier, 1942. Photo: Georgy Konovalov, public domain, https://commons.wikimedia.org/wiki/File:Санинструктор_Нина_Курганова_оказывает_первую_помощь_раненому.jpg"},
    imgNow:"assets/img/today/prof-2-now.webp",
    imgNowSrc:{be:"Анастасія Ленкова — дзіцячы хірург і касманаўт, 2024. Фота: Bill Ingalls / NASA, грамадскі набытак, https://commons.wikimedia.org/wiki/File:Anastasia_Lenkova_(NHQ202403180002)_(cropped).jpg", ru:"Анастасия Ленкова — детский хирург и космонавт, 2024. Фото: Bill Ingalls / NASA, общественное достояние, https://commons.wikimedia.org/wiki/File:Anastasia_Lenkova_(NHQ202403180002)_(cropped).jpg", en:"Anastasia Lenkova, paediatric surgeon and cosmonaut, 2024. Photo: Bill Ingalls / NASA, public domain, https://commons.wikimedia.org/wiki/File:Anastasia_Lenkova_(NHQ202403180002)_(cropped).jpg"} },
  { then:{be:"Партызанка-разведчыца",ru:"Партизанка-разведчица",en:"Partisan scout"}, thenText:{be:"Збірала звесткі пра ворага, хадзіла праз пасты з запіскамі ў хлебе.",ru:"Собирала сведения о враге, ходила через посты с записками в хлебе.",en:"Gathered intelligence and smuggled notes past checkpoints."},
    now:{be:"Навукоўца",ru:"Учёная",en:"Scientist"}, nowText:{be:"Шукае новыя веды: даследуе, правярае, адкрывае.",ru:"Ищет новые знания: исследует, проверяет, открывает.",en:"Seeks new knowledge: researches, tests, discovers."},
    imgThen:"assets/img/today/prof-3-then.webp",
    imgThenSrc:{be:"Беларуская партызанка Алена Астапаўна Атаман з дачкой Марусяй, Калінкавіцкі раён Гомельскай вобласці, 14.01.1944. Фота: Павел Трошкін, грамадскі набытак, https://commons.wikimedia.org/wiki/File:Портрет_белорусской_партизанки_А.О._Атаман_с_детьми.jpg", ru:"Белорусская партизанка Алёна Остаповна Атаман с дочерью Марусей, Калинковичский район Гомельской области, 14.01.1944. Фото: Павел Трошкин, общественное достояние, https://commons.wikimedia.org/wiki/File:Портрет_белорусской_партизанки_А.О._Атаман_с_детьми.jpg", en:"Belarusian partisan Alena Ataman with her daughter Marusia, Kalinkavichy district, Gomel region, 14 January 1944. Photo: Pavel Troshkin, public domain, https://commons.wikimedia.org/wiki/File:Портрет_белорусской_партизанки_А.О._Атаман_с_детьми.jpg"},
    imgNow:"assets/img/today/prof-3-now.webp",
    imgNowSrc:{be:"Кацярына Слабажаніна — біяфізік з Лельчыц, член-карэспандэнт НАН Беларусі. Фота: ЦНБ імя Якуба Коласа НАН Беларусі (не свабодная ліцэнзія), https://csl.bas-net.by/personalii/81708/slobojanina-ekaterina-ivanovna/", ru:"Екатерина Слобожанина — биофизик из Лельчиц, член-корреспондент НАН Беларуси. Фото: ЦНБ им. Якуба Коласа НАН Беларуси (несвободная лицензия), https://csl.bas-net.by/personalii/81708/slobojanina-ekaterina-ivanovna/", en:"Ekaterina Slobozhanina, biophysicist from Lelchytsy, corresponding member of the National Academy of Sciences. Photo: Yakub Kolas Central Scientific Library (not freely licensed), https://csl.bas-net.by/personalii/81708/slobojanina-ekaterina-ivanovna/"} }
];
