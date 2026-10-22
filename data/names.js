/* =========================================================
   ЖАНОЧЫЯ ІМЁНЫ
   forms — усе варыянты напісання (для пошуку), малымі літарамі.
   heroes — id гераінь з гэтым імем. famous — вядомыя носьбіткі (тэкст).
   Значэнні — паводле слоўнікаў імёнаў і артыкулаў Вікіпедыі пра імёны.
   Вядомыя носьбіткі звераны па артыкулах Вікіпедыі (be/ru).
   ========================================================= */
(function(){
var T=function(be,ru,en){return {be:be,ru:ru,en:en};};
window.NAMES = [
  { id:"alesia", name:T("Алеся","Алеся","Alesya"), forms:["алеся","алесь","алеся","олеся","aliaksandra","alesya","аляксандра","александра"],
    origin:T("грэчаская (праз Аляксандра)","греческое (через Александра)","Greek (via Alexandra)"),
    meaning:T("абаронца людзей","защитница людей","defender of people"), heroes:[], famous:T("Алеся (Олеся) — гераіня аповесці А. Купрына «Олеся» (1898) і оперы Я. Цікоцкага «Алеся» (1944)","Олеся — героиня повести А. Куприна «Олеся» (1898); «Алеся» (1944) — опера Е. Тикоцкого","Olesya in A. Kuprin's story (1898); “Alesya” (1944), an opera by Yevgeny Tikotsky") },
  { id:"hanna", name:T("Ганна","Анна","Hanna"), forms:["ганна","ганка","анна","аня","hanna","anna"],
    origin:T("габрэйская","древнееврейское","Hebrew"), meaning:T("ласка, міласць","благодать, милость","grace"), heroes:[], famous:T("Ганна Кацярына Радзівіл (Сангушка, 1676–1746), гаспадарчая дзяячка і мецэнатка ВКЛ","Анна Екатерина Радзивилл (Сангушко, 1676–1746), хозяйственный деятель и меценат ВКЛ","Anna Katarzyna Radziwiłł (née Sanguszko, 1676–1746), estate manager and patron in the Grand Duchy of Lithuania") },
  { id:"vera", name:T("Вера","Вера","Vera"), forms:["вера","vera"],
    origin:T("стараславянская (пераклад грэчаскага Піста)","старославянское (перевод греческого Пистис)","Old Church Slavonic"), meaning:T("вера","вера","faith"), heroes:["khoruzhaya"], famous:T("Вера Харужая, падпольшчыца","Вера Хоружая, подпольщица","Vera Khoruzhaya") },
  { id:"maryia", name:T("Марыя","Мария","Maria"), forms:["марыя","мария","маша","марыля","maria","maryia"],
    origin:T("габрэйская","древнееврейское","Hebrew"), meaning:T("значэнне спрэчнае: «жаданая», «горкая», «панная»","значение спорное: «желанная», «горькая», «госпожа»","debated: “beloved”, “bitter”, “lady”"), heroes:["osipova"], famous:T("Марыя Осіпава, падпольшчыца","Мария Осипова, подпольщица","Maria Osipova") },
  { id:"eufrasinnia", name:T("Еўфрасіння","Евфросиния","Euphrosyne"), forms:["еўфрасіння","ефрасіння","евфросиния","ефросинья","euphrosyne","фрося"],
    origin:T("грэчаская","греческое","Greek"), meaning:T("радасць","радость","joy"), heroes:["eufrasinnia"], famous:T("Еўфрасіння Полацкая, асветніца","Евфросиния Полоцкая, просветительница","Euphrosyne of Polotsk") },
  { id:"praslava", name:T("Прадслава","Предслава","Predslava"), forms:["прадслава","предслава","predslava"],
    origin:T("славянская","славянское","Slavic"), meaning:T("«тая, што перад славаю»; магчымае значэнне — «даўняя слава»","«предшествующая славе»; возможное значение — «давняя слава»","“before glory”; possibly “ancient glory”"), heroes:["eufrasinnia"], famous:T("Свецкае імя Еўфрасінні Полацкай","Мирское имя Евфросинии Полоцкой","Secular name of Euphrosyne") },
  { id:"iryna", name:T("Ірына","Ирина","Iryna"), forms:["ірына","ирина","ярына","ярина","iryna","irina"],
    origin:T("грэчаская","греческое","Greek"), meaning:T("мір, спакой","мир, покой","peace"), heroes:[], famous:T("Ірына Мазуркевіч, актрыса, нарадзілася ў Мазыры (1958)","Ирина Мазуркевич, актриса, родилась в Мозыре (1958)","Irina Mazurkevich, actress, born in Mazyr (1958)") },
  { id:"kaciaryna", name:T("Кацярына","Екатерина","Katsiaryna"), forms:["кацярына","кацярына","екатерина","катя","kateryna","katsiaryna"],
    origin:T("грэчаская","греческое","Greek"), meaning:T("чыстая","чистая","pure"), heroes:[], famous:T("Кацярына Карстэн, двухразовая алімпійская чэмпіёнка па акадэмічным веславанні (1996, 2000)","Екатерина Карстен, двукратная олимпийская чемпионка по академической гребле (1996, 2000)","Ekaterina Karsten, two-time Olympic rowing champion (1996, 2000)") },
  { id:"nadzeia", name:T("Надзея","Надежда","Nadzeya"), forms:["надзея","надежда","надя","nadzeya","nadezhda"],
    origin:T("стараславянская","старославянское","Old Church Slavonic"), meaning:T("надзея","надежда","hope"), heroes:[], famous:T("Надзея Траян, удзельніца аперацыі 1943 года","Надежда Троян, участница операции 1943 года","Nadezhda Troyan") },
  { id:"alena", name:T("Алена","Елена","Alena"), forms:["алена","елена","лена","alena","yelena","elena"],
    origin:T("грэчаская","греческое","Greek"), meaning:T("светлая, сонечная","светлая, солнечная","bright, sunny"), heroes:[], famous:T("Алена Мазанік, удзельніца аперацыі 1943 года","Елена Мазаник, участница операции 1943 года","Yelena Mazanik") },
  { id:"sofia", name:T("Сафія","Софья","Sofia"), forms:["сафія","софья","софия","соня","sofia","sophia"],
    origin:T("грэчаская","греческое","Greek"), meaning:T("мудрасць","мудрость","wisdom"), heroes:[], famous:T("Сафія Слуцкая, князёўна","Софья Слуцкая, княжна","Sophia of Slutsk") },
  { id:"paulina", name:T("Паўліна","Павлина","Paulina"), forms:["паўліна","паўлінка","павлина","полина","paulina","polina"],
    origin:T("лацінская","латинское","Latin"), meaning:T("малая","маленькая","small"), heroes:[], famous:T("Паўлінка, гераіня камедыі Янкі Купалы","Павлинка, героиня комедии Янки Купалы","Paulinka, Kupala's heroine") },
  { id:"yanina", name:T("Яніна","Янина","Yanina"), forms:["яніна","янина","yanina"],
    origin:T("габрэйская (праз Ян)","древнееврейское (через Ян)","Hebrew (via Jan)"), meaning:T("Бог мілуе","Бог милует","God is gracious"), heroes:[], famous:T("Яніна Жэймо (1909–1987), кінаактрыса з Ваўкавыска","Янина Жеймо (1909–1987), киноактриса из Волковыска","Janina Żejmo (1909–1987), film actress from Vawkavysk") },
  { id:"natallia", name:T("Наталля","Наталья","Natallia"), forms:["наталля","наталья","наташа","natallia","natalia"],
    origin:T("лацінская","латинское","Latin"), meaning:T("родная, народжаная на Каляды","родная, рождённая на Рождество","born at Christmas"), heroes:[], famous:T("Наталля Гайда, спявачка, народная артыстка БССР (1980)","Наталия Гайда, певица, народная артистка БССР (1980)","Natalia Gaida, singer, People's Artist of the BSSR (1980)") },
  { id:"sviatlana", name:T("Святлана","Светлана","Sviatlana"), forms:["святлана","светлана","sveta","sviatlana","svetlana"],
    origin:T("славянская","славянское","Slavic"), meaning:T("светлая","светлая","bright"), heroes:[], famous:T("Святлана Багінская, гімнастка з Мінска, трохразовая алімпійская чэмпіёнка","Светлана Богинская, гимнастка из Минска, трёхкратная олимпийская чемпионка","Svetlana Boginskaya, gymnast from Minsk, three-time Olympic champion") },
  { id:"liudmila", name:T("Людміла","Людмила","Liudmila"), forms:["людміла","людмила","люда","liudmila","lyudmila"],
    origin:T("славянская","славянское","Slavic"), meaning:T("мілая людзям","милая людям","dear to people"), heroes:[], famous:T("Людміла Ананька, біятланістка з Навагрудка, двухразовая чэмпіёнка Еўропы ў эстафеце","Людмила Ананько, биатлонистка из Новогрудка, двукратная чемпионка Европы в эстафете","Liudmila Ananko, biathlete from Navahrudak, two-time European relay champion") },
  { id:"valiantsina", name:T("Валянціна","Валентина","Valiantsina"), forms:["валянціна","валентина","валя","valentina","valiantsina"],
    origin:T("лацінская","латинское","Latin"), meaning:T("здаровая, моцная","здоровая, сильная","healthy, strong"), heroes:[], famous:T("Валянціна Гаявая (1936–2026), харэограф, заснавальніца ансамбля «Харошкі»","Валентина Гаевая (1936–2026), хореограф, основательница ансамбля «Хорошки»","Valentina Gaevaya (1936–2026), choreographer, founder of the Khoroshki ensemble") },
  { id:"volha", name:T("Вольга","Ольга","Volha"), forms:["вольга","ольга","оля","volha","olga"],
    origin:T("скандынаўская","скандинавское","Scandinavian"), meaning:T("святая","святая","holy"), heroes:[], famous:T("Вольга Корбут, гімнастка з Гродна, чатырохразовая алімпійская чэмпіёнка","Ольга Корбут, гимнастка из Гродно, четырёхкратная олимпийская чемпионка","Olga Korbut, gymnast from Hrodna, four-time Olympic champion") },
  { id:"alaiza", name:T("Алаіза","Алоиза","Alaiza"), forms:["алаіза","алоиза","alaiza","aloiza"],
    origin:T("германская","германское","Germanic"), meaning:T("слаўная ваяўніца","славная воительница","famous warrior"), heroes:[], famous:T("Цётка (Алаіза Пашкевіч), паэтка","Тётка (Алоиза Пашкевич), поэтесса","Tsiotka, poet") },
  { id:"palina", name:T("Паліна","Полина","Polina"), forms:["паліна","полина","paulina","polina","поля"],
    origin:T("грэчаская (ад імя Апалінарыя) або лацінская","греческое (от Аполлинария) или латинское","Greek (from Apollinaria) or Latin"), meaning:T("«малая» (ад лац. paulus) або «сонечная» (як форма імя Апалінарыя, ад імя Апалона)","«маленькая» (от лат. paulus) или «солнечная» (как форма имени Аполлинария, от имени Аполлона)","“small” (Latin paulus) or “sunny” (as a form of Apollinaria, from Apollo)"), heroes:["gelman"], famous:T("Паліна Гельман, штурман, Герой Савецкага Саюза","Полина Гельман, штурман, Герой Советского Союза","Polina Gelman, navigator") },
  { id:"halina", name:T("Галіна","Галина","Halina"), forms:["галіна","галина","галя","halina","galina"],
    origin:T("грэчаская","греческое","Greek"), meaning:T("спакой, цішыня (мора)","спокойствие, тишь (моря)","calm, stillness"), heroes:["dokutovich"], famous:T("Галіна Дакутовіч, штурман","Галина Докутович, штурман","Galina Dokutovich, navigator") },
  { id:"ryma", name:T("Рыма","Римма","Rimma"), forms:["рыма","римма","rimma"],
    origin:T("царкоўнае: імя раннехрысціянскага мучаніка Рымы (II ст.)","церковное: имя раннехристианского мученика Риммы (II в.)","Church name of the early Christian martyr Rimma (2nd c.)"), meaning:T("дакладнае значэнне невядомае; часта тлумачаць як «рымлянка»","точное значение неизвестно; часто толкуют как «римлянка»","exact meaning unknown; often explained as “Roman woman”"), heroes:["shershniova"], famous:T("Рыма Шаршнёва, партызанка з Добруша","Римма Шершнёва, партизанка из Добруша","Rimma Shershneva, partisan") },
  { id:"ksenia", name:T("Ксенія","Ксения","Ksenia"), forms:["ксенія","ксения","ксюша","ksenia"],
    origin:T("грэчаская","греческое","Greek"), meaning:T("гасцінная","гостеприимная","hospitable"), heroes:[], famous:T("Ксенія Сітнік з Мазыра, пераможца «Дзіцячага Еўрабачання — 2005»","Ксения Ситник из Мозыря, победительница «Детского Евровидения — 2005»","Ksenia Sitnik from Mazyr, winner of Junior Eurovision 2005") }
];
})();
