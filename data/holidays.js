/* =========================================================
   НАРОДНЫЯ СВЯТЫ І ПАМЯТНЫЯ ДАТЫ
   date: {m:месяц, d:дзень} — штогод у адзін дзень.
   easter: N — рухомае свята, N дзён ад праваслаўнага Вялікадня (можа быць адмоўным).
   img — фота свята, напрыклад "assets/img/holidays/kupalle.webp". Пуста — малюецца ілюстрацыя.
   Крыніцы і ліцэнзіі фота — assets/img/holidays/SOURCES.md. src — крыніца тэксту.
   ========================================================= */
window.HOLIDAYS = [
  { id:"kaliady", img:"assets/img/holidays/kaliady.webp", date:{m:12,d:25}, doll:null, icon:"star",
    name:{be:"Каляды",ru:"Коляды",en:"Kaliady"},
    when:{be:"25 снежня – 7 студзеня",ru:"25 декабря – 7 января",en:"25 December – 7 January"},
    text:{be:"Зімовыя святы з калядоўшчыкамі, зоркай, «казой» і шчодрым сталом. Дзяўчаты варажылі на будучы лёс.",ru:"Зимние праздники с колядовщиками, звездой, «козой» и щедрым столом. Девушки гадали на будущую судьбу.",en:"Winter festivities with carollers, a star, the “goat” and a generous table."} },
  { id:"maslenitsa", img:"assets/img/holidays/maslenitsa.webp", easter:-49, doll:null, icon:"sun",
    name:{be:"Масленіца",ru:"Масленица",en:"Maslenitsa"},
    when:{be:"тыдзень перад Вялікім постам",ru:"неделя перед Великим постом",en:"the week before Lent"},
    src:"https://be.wikipedia.org/wiki/Масленіца",
    text:{be:"Праводзіны зімы: бліны, катанне з горак, спальванне пудзіла. На Палессі шырокі чацвер масленічнага тыдня называлі «Уласьем» або «Валосіем». У чацвер частавалі аладкамі карову і выбіралі пастуха на наступны год, зяці хадзілі на бліны да цешчаў, у суботу ладзілі залоўкіны пасядзелкі. Апошні дзень — Даравальная нядзеля, калі ўсе прасілі адзін у аднаго прабачэння. Блізкае свята сустрэчы вясны — Камаедзіца (каля 24 сакавіка), калі «частавалі» мядзведзя гарохавай кашай.",
          ru:"Проводы зимы: блины, катание с горок, сжигание чучела. В Полесье широкий четверг масленичной недели называли «Власьем» или «Волосием». В четверг угощали оладьями корову и выбирали пастуха на следующий год, зятья ходили на блины к тёщам, в субботу устраивали золовкины посиделки. Последний день — Прощёное воскресенье, когда все просили друг у друга прощения. Близкий праздник встречи весны — Комоедица (около 24 марта), когда «угощали» медведя гороховой кашей.",
          en:"Seeing off winter: pancakes, sledging, burning an effigy. In Polesie the “broad Thursday” of the week was called Vlasye or Volosiy. On Thursday the cow was treated to fritters and a village herdsman was chosen, sons-in-law visited their mothers-in-law for pancakes, and on Saturday sisters-in-law hosted gatherings. The last day is Forgiveness Sunday, when everyone asks each other's forgiveness. A related spring festival is Kamaedzitsa (around 24 March), when the waking bear was “treated” to pea porridge."} },
  { id:"verbnitsa", img:"assets/img/holidays/verbnitsa.webp", easter:-7, doll:"verbnitsa", icon:"tree",
    name:{be:"Вербніца",ru:"Вербное воскресенье",en:"Palm Sunday"},
    when:{be:"за тыдзень да Вялікадня",ru:"за неделю до Пасхи",en:"a week before Easter"},
    text:{be:"Свянцілі галінкі вярбы і лёгка сцябалі імі родных з пажаданнем здароўя.",ru:"Освящали ветки вербы и легонько стегали ими родных, желая здоровья.",en:"Willow branches were blessed and used to tap relatives for good health."} },
  { id:"vialikdzen", img:"assets/img/holidays/vialikdzen.webp", easter:0, doll:null, icon:"cross",
    name:{be:"Вялікдзень",ru:"Пасха",en:"Easter"},
    when:{be:"рухомае свята",ru:"переходящий праздник",en:"moveable feast"},
    src:"https://gomelisp.gov.by/intangible-heritage/",
    text:{be:"Фарбаваныя яйкі, валачобнікі з песнямі, сямейны стол. На другі дзень Вялікадня ў вёсках Гадзічава і Маркавічы Гомельскага раёна жанчыны і дзяўчаты ў мясцовых самаробных строях водзяць «Сулу»: заводзяць старадаўнія карагоды-«танкі» і ідуць з песняй «Як ішла Сула» з адной вёскі ў другую. Абрад аднавілі ў 2007 годзе пасля 40-гадовага перапынку, у 2019 годзе ён атрымаў статус гісторыка-культурнай каштоўнасці.",
          ru:"Крашеные яйца, волочебники с песнями, семейный стол. На второй день Пасхи в деревнях Гадичево и Марковичи Гомельского района женщины и девушки в местных самодельных костюмах водят «Сулу»: заводят старинные хороводы-«танки» и идут с песней «Как шла Сула» из одной деревни в другую. Обряд возродили в 2007 году после 40-летнего перерыва, в 2019 году он получил статус историко-культурной ценности.",
          en:"Painted eggs, singing valachobniki, a family table. On the second day of Easter women and girls of Hadzichava and Markavichy villages (Gomel district) “lead the Sula”: in home-made local costumes they dance old round dances and walk from one village to the other singing “As the Sula went”. Revived in 2007 after a 40-year break, the rite became a listed element of Belarusian cultural heritage in 2019."} },
  { id:"radaunitsa", img:"assets/img/holidays/radaunitsa.webp", easter:9, doll:null, icon:"tree",
    name:{be:"Радаўніца",ru:"Радуница",en:"Radaunitsa"},
    when:{be:"9-ы дзень пасля Вялікадня",ru:"9-й день после Пасхи",en:"9th day after Easter"},
    text:{be:"Дзень памяці продкаў. Сем'і ідуць на могілкі, успамінаюць бабуль і дзядуль.",ru:"День памяти предков. Семьи идут на кладбище, вспоминают бабушек и дедушек.",en:"A day to remember ancestors."} },
  { id:"kupalle", img:"assets/img/holidays/kupalle.webp", date:{m:7,d:6}, doll:"kupalinka", icon:"sun",
    name:{be:"Купалле",ru:"Купалье",en:"Kupalle"},
    when:{be:"ноч з 6 на 7 ліпеня",ru:"ночь с 6 на 7 июля",en:"night of 6–7 July"},
    text:{be:"Самая кароткая ноч: вянкі на вадзе, вогнішча, пошук папараць-кветкі.",ru:"Самая короткая ночь: венки на воде, костёр, поиск цветка папоротника.",en:"The shortest night: wreaths on the water, bonfires, the search for the fern flower."} },
  { id:"spas", img:"assets/img/holidays/spas.webp", date:{m:8,d:19}, doll:"spasena", icon:"ear",
    name:{be:"Спас",ru:"Спас",en:"Saviour's Day"},
    when:{be:"19 жніўня",ru:"19 августа",en:"19 August"},
    text:{be:"Свянцілі яблыкі, мёд і першы хлеб новага ўраджаю.",ru:"Освящали яблоки, мёд и первый хлеб нового урожая.",en:"Apples, honey and the first bread were blessed."} },
  { id:"dazhynki", img:"assets/img/holidays/dazhynki.webp", date:{m:9,d:1}, doll:"dazhynka", icon:"ear",
    name:{be:"Дажынкі",ru:"Дожинки",en:"Dazhynki"},
    when:{be:"канец жніва (жнівень – верасень)",ru:"конец жатвы (август – сентябрь)",en:"end of harvest"},
    text:{be:"Апошні сноп упрыгожвалі стужкамі і неслі ў хату. Цяпер гэта і рэспубліканскае свята працаўнікоў сяла.",ru:"Последний сноп украшали лентами и несли в дом. Сейчас это и республиканский праздник тружеников села.",en:"The last sheaf was decorated and carried home. Today it is also a national harvest festival."} },
  { id:"pakrovy", img:"assets/img/holidays/pakrovy.webp", date:{m:10,d:14}, doll:"pakrouka", icon:"comb",
    name:{be:"Пакровы",ru:"Покров",en:"Pokrova"},
    when:{be:"14 кастрычніка",ru:"14 октября",en:"14 October"},
    text:{be:"Канец палявых работ, пачатак вячорак і вяселляў.",ru:"Конец полевых работ, начало посиделок и свадеб.",en:"End of field work, start of evening gatherings and weddings."} },
  { id:"dziady", img:"assets/img/holidays/dziady.webp", date:{m:11,d:2}, doll:null, icon:"tree",
    name:{be:"Дзяды",ru:"Деды",en:"Dziady"},
    when:{be:"пачатак лістапада",ru:"начало ноября",en:"early November"},
    text:{be:"Восеньскі дзень памяці продкаў, вячэра, на якую «клікалі» памерлых родных.",ru:"Осенний день памяти предков, ужин, на который «звали» умерших родных.",en:"An autumn day of remembering ancestors."} }
];

window.MEMORY_DATES = [
  { m:3, d:8, hero:null, text:{be:"Дзень жанчын",ru:"День женщин",en:"Women's Day"} },
  { m:4, d:26, hero:null, text:{be:"Дзень памяці ахвяр Чарнобыльскай катастрофы (1986)",ru:"День памяти жертв Чернобыльской катастрофы (1986)",en:"Chernobyl remembrance day (1986)"} },
  { m:5, d:9, hero:null, text:{be:"Дзень Перамогі",ru:"День Победы",en:"Victory Day"} },
  { m:6, d:5, hero:"eufrasinnia", text:{be:"Дзень памяці Еўфрасінні Полацкай",ru:"День памяти Евфросинии Полоцкой",en:"Feast of Euphrosyne of Polotsk"} },
  { m:6, d:22, hero:null, text:{be:"Дзень усенароднай памяці ахвяр Вялікай Айчыннай вайны",ru:"День всенародной памяти жертв Великой Отечественной войны",en:"Day of Remembrance of the victims of the war"} },
  { m:7, d:3, hero:null, text:{be:"Дзень Незалежнасці (вызваленне Мінска, 1944)",ru:"День Независимости (освобождение Минска, 1944)",en:"Independence Day (liberation of Minsk, 1944)"} },
  { m:9, d:22, hero:"osipova", text:{be:"1943: аперацыя мінскіх падпольшчыц",ru:"1943: операция минских подпольщиц",en:"1943: the Minsk underground operation"} },
  { m:9, d:27, hero:"khoruzhaya", text:{be:"Дзень нараджэння Веры Харужай (1903)",ru:"День рождения Веры Хоружей (1903)",en:"Vera Khoruzhaya's birthday (1903)"} },
  { m:10, d:24, hero:"gelman", text:{be:"Дзень нараджэння Паліны Гельман (1919)",ru:"День рождения Полины Гельман (1919)",en:"Polina Gelman's birthday (1919)"} },
  { m:8, d:6, hero:"shubionak", text:{be:"1941: Ганна (Эна) Шубёнак сярод першых партызан, узнагароджаных медалём «За адвагу»",ru:"1941: Анна (Энна) Шубенок среди первых партизан, награждённых медалью «За отвагу»",en:"1941: Anna (Enna) Shubenok among the first partisans awarded the Medal for Courage"} },
  { m:11, d:26, hero:null, text:{be:"Дзень вызвалення Гомеля (1943)",ru:"День освобождения Гомеля (1943)",en:"Liberation of Gomel (1943)"} },
  { m:12, d:27, hero:"osipova", text:{be:"Дзень нараджэння Марыі Осіпавай (1908)",ru:"День рождения Марии Осиповой (1908)",en:"Maria Osipova's birthday (1908)"} }
];
