# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import json 
import codecs
class QuoteCharacter():
    name = ""
    id = ""
    quotes = []
    
    def __init__(self,name,id):
        self.name = name
        self.id = id
        self.quotes = []
    
    def addQuotes(self,quotes):
        for quote in quotes:
            # newItem = {'content':quote}
            self.quotes.append(quote)
    def getJsonDict(self):
        dict = {'name':self.name,
                'id':self.id,
                'quotes':self.quotes}
        return dict
class MusicList():
    def __init__(self):
        self.musicList = []
    def addMusic(self,id,text):
        self.musicList.append({'id':id,'text':text})
    def getJsonDict(self):
        gigaDict = {}
        for music in self.musicList:
            gigaDict[music["id"]] = music["text"]
        return gigaDict
characters = []
quotes = []
items = []

pilsudski = QuoteCharacter("Józef Piłsudski",'pilsudski')
characters.append(pilsudski)
quotes.append(["Socjalista w Polsce dążyć musi do niepodległości kraju, a niepodległość jest znamiennym warunkiem zwycięstwa socjalizmu w Polsce.","Tylko ten człowiek wart nazwy człowieka, który ma pewne przekonania i potrafi je bez względu na skutki wyznawać czynem.",
"Racja jest jak dupa. Każdy ma swoją.","Mogła mi się próba stworzenia zawiązku wojska polskiego nie udać, mogłem się mylić w rachubach, lecz nie mogłem zdobyć się na jakieś udawanie Józefa Poniatowskiego i tonąć w jakiejś Elsterze.","Siła bez wolności i sprawiedliwości jest tylko przemocą i tyranią. Sprawiedliwość i wolność bez siły jest gadulstwem i dzieciństwem."
"Wy w wojnę beze mnie nie leźcie, wy ją beze mnie przegracie.","Polska jest jak obwarzanek. Wszystko, co najlepsze na Kresach, a w środku pustka."])

dmowski = QuoteCharacter("Roman Dmowski","dmowski")
characters.append(dmowski)
quotes.append(["Można bodaj z całą słusznością powiedzieć, że nigdzie nie ma tylu co u nas nieinteligentnych intelektualistów i tylu estetów bez smaku.","Obowiązki względem ojczyzny, to nie tylko obowiązki względem Polaków dzisiejszych, ale także względem pokoleń minionych i tych co po nas przyjdą.",
"...dopóki ostatni Polak, któremu sęp nie wyżarł mózgu - rzuciwszy naokół wzrokiem rozpaczliwym, nie zawoła już naprawdę Finis Poloniae!","Obowiązki względem ojczyzny, to nie tylko obowiązki względem Polaków dzisiejszych, ale także względem pokoleń minionych i tych co po nas przyjdą.","Wszystko co polskie jest moje: niczego się wyrzec nie mogę. Wolno mi być dumnym z tego, co w Polsce jest wielkie, ale muszę przyjąć i upokorzenie, które spada na naród za to co jest w nim marne."
,"Żadne państwo nie powstało z jednolitego materiału plemiennego, ale trwając długo, z tego różnorodnego materiału wytworzyło jeden naród."])

paderewski = QuoteCharacter("Ignacy Jan Paderewski","paderewski")
characters.append(paderewski)
quotes.append(["… Nie zginie Polska, nie zginie! Lecz żyć będzie po wieki wieków w potędze i chwale. Dla was, dla nas i dla całej ludzkości","Nic tak nie wzmaga sił przeciwnika, jak wyrządzona mu krzywda.","Droga do sukcesu jest pełna kobiet popychających mężów."])

witos = QuoteCharacter("Wincenty Witos","witos")
characters.append(witos)
quotes.append(["Chłop zachował w najgorszych chwilach ziemię, religię i narodowość. Te trzy wartości dały podstawę do stworzenia państwa.","Nie ma sprawy ważniejszej niż Polska.",
"Polska polityka za polskie pieniądze…","Prawdę mówić! Prawdą się kierować! Prawdy żądać! Prawdy dochodzić!","Nie miałem nigdy przesadnej wrażliwości ani skłonności poetyckich. Starałem się na wszystko patrzeć realnie."])

korfanty = QuoteCharacter("Wojciech Korfanty","korfanty")
characters.append(korfanty)
quotes.append(["My, Polacy, od pierwszej chwili, gdyśmy do tego parlamentu wstąpili, uważaliśmy się zawsze za przedstawicieli narodu polskiego.","W naszym narodzie chcą oni stworzyć niby państwo w państwie, chcą mieć większe prawa niż reszta obywateli."])

daszyn = QuoteCharacter("Ignacy Ewaryst Daszyńs","daszyn")
characters.append(daszyn)
quotes.append(["Chwała ogromna, triumf zupełny. Wróg rozbity, Polska wolna, Europa uwolniona od zmory „czerwonej armii”, pojącej konie w Renie... Drugi Grunwald w swych dalekosiężnych skutkach.","Dzisiaj prasa rządowa opiera swoje nadzieje na argumencie bata, na pokorze, na posłuszeństwie większości Sejmu wobec samej groźby bata."
"Nie wdaję się w rozpatrywanie zbawczego planu generała Weyganda, bo plan ten nigdy nie był wykonany. Armia polska wykonała plan Piłsudskiego i zwyciężyła"])
giga_dict = []
i=0


for character,item in zip(characters, quotes):
    i = i + 1
    # print(i)
    # print(item)
    character.addQuotes(item)
    giga_dict.append(character.getJsonDict())
d = characters[4]
d.addQuotes(quotes[4])
# print(quotes[4])
print(characters[3].quotes)
# print(d.getJsonDict())
# print(d.getJsonDict())
# parsedJson = json.loads(giga_dict)
with codecs.open("cytaty.json","w","utf-8") as file:
    json.dump(giga_dict, file,indent=4,sort_keys=True)

listOfMusic = MusicList()
listOfMusic.addMusic("rota",
'''
Nie rzucim ziemi skąd nasz ród!
Nie damy pogrześć mowy.
Polski my naród, polski lud,
Królewski szczep Piastowy.

Nie damy, by nas gnębił wróg!
Tak nam dopomóż Bóg!
Tak nam dopomóż Bóg!

Do krwi ostatniej kropli z żył
Bronić będziemy ducha,
Aż się rozpadnie w proch i w pył
Krzyżacka zawierucha.

Twierdzą nam będzie każdy próg!
Tak nam dopomóż Bóg!
Tak nam dopomóż Bóg!

Nie będzie Niemiec pluł nam w twarz
Ni dzieci nam germanił,
Orężny wstanie hufiec nasz,
Duch będzie nam hetmanił.

Pójdziem, gdy zabrzmi złoty róg!
Tak nam dopomóż Bóg!
Tak nam dopomóż Bóg!

Nie damy miana Polski zgnieść
Nie pójdziem żywo w trumnę
W Ojczyzny imię, na jej cześć
Podnosi czoła dumne.

Odzyska ziemi dziadów wnuk!
Tak nam dopomóż Bóg!
Tak nam dopomóż Bóg!''')
listOfMusic.addMusic("maki",
''' 
Czy widzisz te gruzy na szczycie?
Tam wróg twój się ukrył jak szczur.
Musicie, musicie, musicie
Za kark wziąć i strącić go z chmur.
I poszli szaleni zażarci,
I poszli zabijać i mścić,
I poszli jak zawsze uparci,
Jak zawsze za honor się bić.

Czerwone maki na Monte Cassino
Zamiast rosy piły polską krew.
Po tych makach szedł żołnierz i ginął,
Lecz od śmierci silniejszy był gniew.
Przejdą lata i wieki przeminą.
Pozostaną ślady starych dni
I tylko maki na Monte Cassino
Czerwieńsze będą, bo z polskiej wzrosły krwi.

Runęli przez ogień ,straceńcy,
niejeden z nich dostał i padł,
jak ci z Somosierry szaleńcy,
Jak ci spod Rokliny przed lat.
Runęli impetem szalonym,
I doszli . I udał się szturm.
I sztandar swój biało czerwony
Zatknęli na gruzach wśród chmur,

Czerwone maki…

Czy widzisz ten rząd białych krzyży?
Tam Polak z honorem brał ślub.
Idź naprzód, im dalej ,im wyżej,
Tym więcej ich znajdziesz u stóp.
Ta ziemia do Polski należy,
Choć Polska daleko jest stąd,
Bo wolność krzyżami się mierzy,
Historia ten jeden ma błąd.

Czerwone maki…
''')
listOfMusic.addMusic("placz",
''' 
Rozszumiały się wierzby płaczące
Rozpłakała się dziewczyna w głos
Od łez oczy podniosła błyszczące
Na żołnierski na twardy życia los
Na żołnierski na twardy życia los
Nie ślijcie wierzby nam
Żalu co serce rwie
Nie płacz dziewczyno ma
Bo w partyzantce nie jest źle
Do tańca grają nam
Armaty stenów szczęk
Śmierć kosi niby łan
Lecz my nie wiemy co to lęk
Czy to deszcz czy słoneczna spiekota
Wszędzie słychać miarowy równy krok
To na bój idzie leśna piechota
Na ustach śpiew spokojna twarz wesoły wzrok
Na ustach śpiew spokojna twarz wesoły wzrok
Nie ślijcie wierzby nam
Żalu co serce rwie
Nie płacz dziewczyno ma
Bo w partyzantce nie jest źle
Do tańca grają nam
Armaty stenów szczęk
Śmierć kosi niby łan
Lecz my nie wiemy co to lęk
Do tańca grają nam
Armaty stenów szczęk
Śmierć kosi niby łan
Lecz my nie wiemy co to lęk
''')
listOfMusic.addMusic("piechota",
'''
Nie noszą lampasów lecz szary ich strój
Nie noszą ni srebra ni złota
Lecz w pierwszym szeregu podąża na bój
Piechota ta szara piechota
Maszerują strzelcy maszerują
Karabiny błyszczą szary strój
A przed nimi drzewa salutują
Bo za naszą Polskę idą w bój
Idą a w słońcu kołysze się stal
Dziewczęta zerkają zza płota
A oczy ich dumnie utkwione są w dal
Piechota ta szara piechota
A oczy ich dumnie utkwione są w dal
Piechota ta szara piechota
Maszerują strzelcy maszerują
Karabiny błyszczą szary strój
A przed nimi drzewa salutują
Bo za naszą Polskę idą w bój
Nie grają im surmy nie huczy im róg
A śmierć im pod stopy się miota
Lecz czoła ich dumnie wzniesione są wzwyż
Piechota ta szara piechota
Lecz czoła ich dumnie wzniesione są wzwyż
Piechota ta szara piechota
Maszerują strzelcy maszerują
Karabiny błyszczą szary strój
A przed nimi drzewa salutują
Bo za naszą Polskę idą w bój
Miarowo bagnetów kołysze się łan
A w sercu ich szczera ochota
Ze śpiewem do boju wyrusza jak w tan
Piechota ta szara piechota
Ze śpiewem do boju wyrusza jak w tan
Piechota ta szara piechota
Maszerują strzelcy maszerują
Karabiny błyszczą szary strój
A przed nimi drzewa salutują
Bo za naszą Polskę idą w bój
''')
listOfMusic.addMusic('brygada','''

Legiony to żołnierska nuta,
Legiony to ofiarny stos,
Legiony to żołnierska buta,
Legiony to straceńców los.

My, Pierwsza Brygada,
Strzelecka gromada,
Na stos rzuciliśmy swój życia los,
Na stos, na stos.

O ileż męk, ileż cierpienia,
O ileż krwi, wylanych łez.
Pomimo to – nie ma zwątpienia,
Dodawał sił – wędrówki kres.

My, Pierwsza Brygada…

Mówili żeśmy stumanieni,
Nie wierząc nam, że chcieć to móc.
Leliśmy krew osamotnieni,
A z nami był nasz drogi wódz!

My, Pierwsza Brygada…

Inaczej się dziś zapatrują
I trafić chcą do naszych dusz,
I mówią, że nas już szanują,
Lecz właśnie czas odwetu już!

My, Pierwsza Brygada…

Nie chcemy dziś od was uznania,
Ni waszych mów, ni waszych łez.
Skończyły się dni kołatania
Do waszych dusz, do waszych serc.

My, Pierwsza Brygada…

Dziś nadszedł czas pokwitowania
Za mękę serc i katusz dni.
Nie chciejcie więc politowania,
Zasadą jest: za krew chciej krwi.

My, Pierwsza Brygada…

Umieliśmy w ogień zapału
Młodzieńczych wiar rozniecić skry,
Nieść życie swe dla ideału
I swoją krew i marzeń sny.

My, Pierwsza Brygada…

Potrafim dziś dla potomności
Ostatki swych poświęcić dni,
Wśród fałszów siać siew szlachetności
Miazgą swych ciał, żarem swej krwi.

My, Pierwsza Brygada…
''')
listOfMusic.addMusic('rozmaryn',
'''
O mój rozmarynie, rozwijaj się
O mój rozmarynie, rozwijaj się
Pójdę do dziewczyny, pójdę do jedynej
Zapytam się.
Pójdę do dziewczyny, pójdę do jedynej
Zapytam się.
A jak mi odpowie: nie kocham cię,
A jak mi odpowie: nie kocham cię,
Ułani werbują, strzelcy maszerują
Zaciągnę się.
Ułani werbują, strzelcy maszerują
Zaciągnę się.
Dadzą mi konika cisawego
Dadzą mi konika cisawego
I ostrą szabelkę, i ostrą szabelkę
Do boku mego.
I ostrą szabelkę, i ostrą szabelkę
Do boku mego.
Dadzą mi manierkę z gorzałczyną
Dadzą mi manierkę z gorzałczyną
A żebym nie tęsknił, ażebym nie tęsknił
Za dziewczyną.
A żebym nie tęsknił, ażebym nie tęsknił
Za dziewczyną.
A kiedy już wyjdę na wiarusa
A kiedy już wyjdę na wiarusa
Pójdę do dziewczyny, pójdę do jedynej
Po całusa.
Pójdę do dziewczyny, pójdę do jedynej
Po całusa.
''')
listOfMusic.addMusic("boze",
'''
Boże coś Polskę przez tak długie wieki

Otaczał blaskiem potęgi i chwały.

Coś ją osłaniał tarczą swej opieki

Od nieszczęść, które przygnębić ją miały.

Przed Twe ołtarze zanosim błaganie,

Ojczyźnie wolność, racz nam wrócić, Panie!

Ty, któryś potem tknięty jej upadkiem,

Walczących wspierał za najświętszą sprawę,

I chcąc świat cały mieć jej męstwa świadkiem,

W nieszczęściach samych pomnażał ich sławę.

Przed Twe ołtarze zanosim błaganie...

Wróć naszej Polsce świetność starożytną,

Użyźniaj pola, spustoszone łany,

Niech szczęście, spokój na nowo zakwitną!

Poprzestań kary, Boże zagniewany!

Przed Twe ołtarze zanosim błaganie...

Boże, którego ramię sprawiedliwe

Żelazne berła władców świata kruszy;

Zniwecz tych wrogów zamiary szkodliwe,

Obudź nadzieję w biednej naszej duszy.

Przed Twe ołtarze zanosim błaganie...

Boże najświętszy, przez Twe wielkie cudy

Oddalaj od nas klęski, mordy boju;

Połącz wolności węzłem Twoje ludy

Pod jedno berło Anioła Pokoju.

Przed Twe ołtarze zanosim błaganie...

Boże najświętszy, od którego woli

Istnienie świata całego zależy,

Wyrwij lud Polski z tyranów niewoli,

Wspieraj zamiary wytrwałej młodzieży.

Przed Twe ołtarze zanosim błaganie...

Boże najświętszy przez Chrystusa rany,

Świeć wiekuiście, nad braćmi zmarłymi;

Spojrzyj na lud Twój niewolą znękany,

Przyjmij ofiary synów Polskiej ziemi.

Przed Twe ołtarze zanosim błaganie...

Gdy naród polski dzisiaj we łzach tonie,

Za naszych braci poległych błagamy,

By ich męczeństwem uwieńczone skronie

Nam do wolności otworzyły bramy.

Przed Twe ołtarze zanosim błaganie...

Niedawno wolność zabrał z polskiej ziemi,

A łez krwi naszej popłynęły rzeki.

Jakże to musi być okropnie z tymi,

Którym ojczyznę zabierasz na wieki.

Przed Twe ołtarze zanosim błaganie...

Jedno Twe słowo o wielki nasz Panie

Z prochów nas podnieść znowu będzie zdolne;

A gdy zasłużym na Twe ukaranie,

Obróć nas w prochy, ale prochy wolne!

Przed Twe ołtarze zanosim błaganie...
''')
listOfMusic.addMusic("hymn",
'''
Jeszcze Polska nie zginęła,
Kiedy my żyjemy.
Co nam obca przemoc wzięła,
Szablą odbierzemy.
Ref.: Marsz, marsz, Dąbrowski,
Z ziemi włoskiej do Polski.
Za twoim przewodem
Złączym się z narodem./ x2
Przejdziem Wisłę, przejdziem Wartę,
Będziem Polakami.
Dał nam przykład Bonaparte,
Jak zwyciężać mamy.
Ref.: Marsz, marsz, Dąbrowski…/ x2
Jak Czarniecki do Poznania
Po szwedzkim zaborze,
Dla ojczyzny ratowania
Wrócim się przez morze.
Ref.: Marsz, marsz, Dąbrowski…/ x2
Już tam ojciec do swej Basi
Mówi zapłakany:
„Słuchaj jeno, pono nasi
biją w tarabany”.
Ref.: Marsz, marsz, Dąbrowski…/ x2'''
)
listOfMusic.addMusic('ulani',
'''
łani, ułani, malowane dzieci,
niejedna panienka za wami poleci.
Ref.: Hej, hej, ułani, malowane dzieci,
niejedna panienka za wami poleci./ x2
Niejedna panienka i niejedna wdowa,
za wami, ułani, polecieć gotowa.
Ref.: Hej, hej, ułani, malowane dzieci…/ x2
Babcia umierała, jeszcze się pytała:
czy na tamtym świecie, ułani, będziecie?
Ref.: Hej, hej, ułani, malowane dzieci…/ x2
Nie ma takiej wioski, nie ma takiej chatki,
gdzie by nie kochały ułana mężatki.
Ref.: Hej, hej, ułani, malowane dzieci…/ x2
Nie ma takiej chatki ani przybudówki,
gdzie by nie kochały ułana Żydówki.
Ref.: Hej, hej, ułani, malowane dzieci…
Jedzie ułan, jedzie, konik pod nim pląsa,
czapkę ma na bakier i podkręca wąsa,
Ref.: Hej, hej, ułani, malowane dzieci…/ x2
Jedzie ułan, jedzie, szablą pobrzękuje,
uciekaj, dziewczyno, bo cię pocałuje.
Ref.: Hej, hej, ułani, malowane dzieci…/ x2
A niech pocałuje, nikt mu nie zabrania,
wszak on swoją piersią Ojczyznę osłania.
Ref.: Hej, hej, ułani, malowane dzieci…/ x2
''')
listOfMusic.addMusic('barscy',
'''
Nigdy z królami nie będziem w aliansach,
Nigdy przed mocą nie ugniemy szyi,
Bo uChrystusa my na ordynansach,
Słudzy Maryi.
Więc choć się spęka świat, i zadrży słońce,
Chociaż się chmury i morza nasrożą −
Choćby na smokach wojska latające,
Nas nie zatrwożą.
Bóg naszych ojców i dziś jest nad nami!
Więc nie dopuści upaść żadnej klęsce;
Wszak póki On był z naszymi ojcami,
Byli zwycięzce!
Więc nie wpadniemy w żadną wilczą jamę,
Nie ulękniemy przed mocarzy władzą,
Wiedząc, że nawet grobowce nas same
Bogu oddadzą.
Ze skowronkami wstaliśmy do pracy,
I spać pójdziemy o wieczornej zorzy;
Ale w grobowcach my jeszcze żołdacy
I hufiec Boży
Bo kto zaufał Chrystusowi Panu,
I szedł na święte kraju werbowanie;
Ten, de profundis, z ciemnego kurhanu,
Na trąbę wstanie.
Bóg jest ucieczką i obroną naszą!
Póki On z nami, całe piekła pękną!
Ani ogniste smoki nie ustraszą,
Ani ulękną.
Nie złamie nas głód, ni żaden frasunek,
Ani zhołdują żadne świata hołdy:
Bo na Chrystusa my poszli werbunek,
Na jego żołdy. 
''')
with codecs.open("piesni.json","w","utf-8") as file:
    json.dump(listOfMusic.getJsonDict(), file,indent=4,sort_keys=True)
