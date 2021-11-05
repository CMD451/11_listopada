import React, { Component } from 'react'
import "./CSS/maps.css";
import { ImageStack } from '../ImageStack';
import { Timeline } from '../Timeline';
export class ReadMore1 extends Component {
    constructor(props) {
        super(props);
        this.center = React.createRef();
        this.handleFocus = this.handleFocus.bind(this);
        this.scrollTo = React.createRef();
    }
    componentDidMount() {
        this.props.onSpawn(this.center.current);
    }
    handleFocus(event) {
        event.target.classList.add("sectionActive");
        let body = document.getElementById("root");
        console.log(body)
        setTimeout(function () {
            if (this.center && this.center != null && this.center.current != null) {
                this.center.current.scrollIntoView({ behavior: 'smooth' });
            }
        }.bind(this), 10)
    }
    render() {
        return (
            <React.Fragment>
                <div className="bigDiv focus-visible-only" tabindex="0" ref={this.center} onFocus={this.handleFocus}>
                    <section className="section-2 half geneza" >
                        <div className="ZaborHeader"> <h1>Przyczyny rozbiorów</h1></div>
                        <div className="toLeft">

                            <div className="ZaborImg">
                                <img className="ImgZabor" src="images/geneza.jpg" />
                            </div>
                            <div className="ZaborTekst">

                                <p>
                                    Przyczyną rozbiorów była niezdolność kraju do reform, mogących wzmocnić siłę militarną Polski. Mimo znacznego potencjału gospodarczego,
                                    nie zdołano przeprowadzić koniecznych reform podatkowych (np. stałego opodatkowania szlachty i duchowieństwa) i politycznych (m.in. zniesienie liberum veto i pańszczyzny).
                                    Przeciw reformom była zarówno większość szlachty, magnaterii, jak i duchowieństwa. Podejmowane próby reform w myśl idei oświeceniowych upadły.
                                    Szczególną rolę odegrała zdrada części magnatów, wyższego duchowieństwa i szlachty w ramach tzw. konfederacji targowickiej.
                                    U zewnętrznych źródeł rozbiorów leży współdziałanie Rosji i Prus na sejmie konwokacyjnym w 1764. 11 kwietnia mocarstwa te podpisały tajny aneks do traktatu sojuszniczego,
                                    w którym zobowiązały się do wspólnego wystąpienia zbrojnego przeciwko Rzeczypospolitej, gdy strony uznają, że zagrożone są ich interesy w tym kraju.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="section-3 full mapyDiv" >
                        <div id="rozbior1" className="pic" ref={this.scrollTo}>
                            <div className="wraper">
                                <h1>I rozbiór</h1>
                                <p>W wyniku I rozbioru Polski,Austria otrzymała całą południową Polskę po Zbrucz ze Lwowem, ale bez Krakowa.Prusy anektowały Warmię i Prusy Królewskie (Pomorze Gdańskie), lecz bez Gdańska i Torunia,Rosja zagarnęła Inflanty Polskie oraz wschodnie, peryferyjne krańce Rzeczypospolitej</p>
                            </div>
                            <div className="overlay"></div>
                        </div>
                        <div id="rozbior2" className="pic">
                            <div className="wraper">
                                <h1>II rozbiór</h1>
                                <p>
                                    W wyniku II rozbioru Polski, Prusy otrzymały Wielkopolskę, Gdańsk, Toruń oraz ziemię sieradzką. Rosja zagarnęła szerokie tereny kijowszczyzny i mińszczyzny. W II rozbiorze nie wzięła udziału Austria, zajęta w tym czasie prowadzeniem wojny z Francją.
                                </p>
                            </div>
                            <div className="overlay"></div>
                        </div>
                        <div id="rozbior3" className="pic">
                            <div className="wraper" >
                                <h1>III rozbiór</h1>
                                <p>Ostatni z trzech rozbiorów Polski, rok po upadku insurekcji, 24 października 1795, monarchowie Rosji, Prus i Austrii uzgodnili wzajemnie traktat, zgodnie z którym przeprowadzili ostatni, pełny, III rozbiór Rzeczypospolitej. </p>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export class ReadMore2 extends ReadMore1 {
    render() {
        return (
            <div className="bigDiv focus-visible-only" tabindex="0" ref={this.center} onFocus={this.handleFocus}>
                <div className="zaboryContainer">
                    <div class="line"><span className="linia">Zabór Pruski</span></div>
                    <section className="section-zabor pruski" half>

                        <div className="ZaborImg2 jezus zabor1">
                        </div>
                        <div className="ZaborTekst">

                            <p>
                                Prusacy przystąpili do intensywnej akcji scaleniowej. Głównymi jej elementami było osiedlanie na ziemiach polskich ludności niemieckiej
                                . Rozdawano lub sprzedawano po niskich cenach skonfiskowane w roku 1795 dobra ziemskie klasztorów i uczestników powstania kościuszkowskiego
                                oraz podjęto germanizowanie młodzieży polskiej, realizowane m.in. przez naukę w szkole niemieckiej oraz służbę wojskową w armii pruskiej.
                                W celu przygotowania młodzieży do służby wojskowej Prusacy utworzyli w Kaliszu,
                                w zabudowaniach lewego skrzydła byłego kolegium jezuickiego, szkołę wojskową – Korpus Kadetów.
                            </p>
                        </div>

                    </section>
                    <div class="line"><span className="linia">Zabór Austriacki</span></div>
                    <section className="section-zabor austriacki" half>

                        <div className="ZaborTekst">

                            <p>
                                Z włączonych do Austrii ziem polskich zostało utworzone Królestwo Galicji i Lodomerii. Nazwa ta miała wywodzić się od średniowiecznych księstw ruskich, Halicza i Włodzimierza.
                                Galicja była prowincją odległą od Wiednia, najmniej nowoczesną i najbiedniejszą. W przeciwieństwie do zaboru rosyjskiego, w Galicji nie rozwinął się nigdy wielki przemysł,
                                nie powstała klasa robotników ani miejska klasa średnia. Poza kopalnią soli w Wieliczce i polami naftowymi w Borysławiu Galicja nie przynosiła wielkiego dochodu.
                            </p>
                        </div>
                        <div className="ZaborImg2 jezus zabor2" ref={this.scrollTo}>

                        </div>

                    </section>
                    <div class="line"><span className="linia">Zabór Rosyjski</span></div>
                    <section className="section-zabor rosyjski" half>

                        <div className="ZaborImg2 jezus zabor3">
                        </div>
                        <div className="ZaborTekst">

                            <p>
                                Władcy Imperium Rosyjskiego, rządzący terenami dawnej Rzeczypospolitej, prowadzili rządy autokratyczne i absolutne. Wobec Polaków stosowali
                                najczęściej politykę asymilacji, mającą z nich uczynić „prawdziwych chrześcijan, lojalnych obywateli i dobrych Rosjan”, działając w tym celu metodami
                                perswazji i przymusu. Władze carskie zlikwidowały dotychczasowe instytucje szlacheckiej demokracji, wprowadzono obowiązek służby wojskowej w stałej armii,
                                województwa zastąpiono guberniami,
                                wprowadzono scentralizowaną i opartą na hierarchii administrację państwową, która miała uczyć i wymagać posłuszeństwa wobec władcy.
                            </p>
                        </div>

                    </section>
                </div>
            </div>
        )
    }

}
export class ReadMore3 extends ReadMore1 {
    constructor(props) {
        super(props);
        this.state = {
            active: null
        }
        this.backgroundDiv = React.createRef();
        this.buildText = this.buildText.bind(this);
        this.handleActiveImage = this.handleActiveImage.bind(this);
        this.handleDeactivateImage = this.handleDeactivateImage.bind(this);
        this.imageBundle = [
            { class: "a witam", id: "a", image: "images/kosciuszko.jpg" },
            { class: "b witam", id: "b", image: "images/listopad.jpg" },
            { class: "c witam", id: "c", image: "images/krakow.jpg" },
            { class: "d witam", id: "d", image: "images/styczen.jpg" }
        ];
        this.textMap = {
            "a": {
                "title": "Insurekcja kościuszkowska", content: (<div>
                    <div class="line"><span className="linia">Geneza</span></div>
                    <br />
                    <p>
                        Powstanie kościuszkowskie wybuchło tuż po drugim rozbiorze Polski.
                        Spowodowane było rządami Targowicy i ingerencją Rosji w sprawy Polski.
                        Powstanie to rozpoczęło się od buntu generała Antoniego Madalińskiego który odmówił złożenia broni i wyruszył ze
                        swym
                        odziałem z Ostrołęki w kierunku Krakowa. Wkrótce potem dowództwo powstanie przejął Tadeusz Kościuszko. 24 marca
                        na rynku
                        krakowskim złożył uroczystą przysięgę która brzmiała:
                    </p>
                    <p>
                        <br />
                        <i>"Ja, Tadeusz Kościuszko, przysięgam w obliczu Boga całemu Narodowi Polskiemu, iż powierzonej władzy na niczyj
                            prywatny ucisk nie użyję, lecz jedynie dla obrony całości granic, odzyskania samowolności Narodu i
                            ugruntowania
                            powszechnej wolności używać będę. Tak mi dopomóż Bóg i niewinna Męka Syna Jego"</i>
                    </p>
                    <div class="line"><span className="linia">Przebieg</span></div>
                    <br />
                    4 kwietnia doszło do pierwszej bitwy oddziałów Kościuszki z wojskiem rosyjskim pod Racławicami. Sukces miał dla
                    walczących większe znaczenie moralne niż militarne. Wkrótce dotarły do nich optymistyczne informacje ze stolicy –
                    wybuchło tam powstanie, którego główne sukcesy to rozbicie rosyjskiego garnizonu, zdobycie ambasady i powołanie Rady
                    Zastępczej Tymczasowej.

                    Dalszy przebieg działań powstańczych wyglądał następująco:
                    <ul>
                        <li>
                            16 kwietnia – ogłoszono powstanie Wielkiego Księstwa Litewskiego, jego konsekwencje to wybuch powstania na
                            Litwie i
                            przyłączenie się do insurekcji koronnej,
                        </li>
                        <li>
                            7 maja – Kościuszko ogłasza uniwersał połaniecki, który przyznawał chłopom pańszczyźnianym ograniczoną
                            wolność
                            osobistą; miał przyczynić się do umożliwienia chłopom walk w armii i legalizował powstanie oddziałów
                            kosynierów,
                        </li>
                        <li>
                            6 czerwca – Polacy doznają porażki w bitwie z wojskami prusko-rosyjskimi pod Szczekocinami, straty to ponad
                            2000
                            żołnierzy, w tym dowódcy: Józef Wodzicki i Jan Grochowski,
                        </li>
                        <li>

                            8 czerwca – porażka wojsk generała Józefa Zajączka w bitwie pod Chełmem,
                            Od 13 lipca do 6 września wojska rosyjsko-pruskie nieskutecznie oblegały Warszawę,
                        </li>
                        <li>
                            19 września – przegrana powstańców w bitwie pod Terespolem,
                        </li>
                        <li>
                            10 października – bitwa pod Maciejowicami; w wyniku porażki Tadeusz Kościuszko dostaje się do niewoli, a
                            parę dni
                            później na stanowisku dowódcy powstania zastępuje go Tomasz Wawrzecki,
                        </li>
                        <li>
                            5 listopada – kapitulacja Warszawy.
                        </li>
                    </ul>

                    <br />
                    <div class="line"><span className="linia">Skutki</span></div>
                    <br />
                    <ul>
                        <li>
                            III rozbiór Polski – oficjalnie nastąpił w 1795 r., ale wszystkie decyzje podjęto w trakcie powstania; Polska zniknęła z map Europy na 123 lata
                        </li>
                        <li>
                            wywóz powstańców na Sybir lub wcielanie ich przemocą do armii rosyjskiej
                        </li>
                        <li>
                            w trakcie insurekcji doszło do ostatecznego zerwania unii polsko-litewskiej
                        </li>
                    </ul>
                </div>
                )
            },
            "b": {
                "title": "Powstanie listopadowe", content: (<div>
                    <div class="line"><span className="linia">Geneza</span></div>
                    <br />
                    <p>
                        Główną przyczyną wybuchu powstania listopadowego było nieprzestrzeganie przez carów Imperium Rosyjskiego
                        postanowień konstytucji z 1815 roku. Aleksander I w 1819 roku zniósł wolność prasy i wprowadził cenzurę
                        prewencyjną.ednocześnie wzmogły się prześladowania polskich organizacji niepodległościowych. W 1827 roku
                        nastąpiły aresztowania członków Towarzystwa Patriotycznego.
                    </p>
                    <br />
                    <div class="line"><span className="linia">Przebieg</span></div>
                    <br />
                    <p>
                        <ul>
                            <li>
                                29/30 XI 1830 “Noc Listopadowa” (nieudana próba aresztowania wielkiego księcia Konstantego przez
                                Sprzysiężenie Podchorążych, przejęcie Arsenału przez ludność Warszawy, wycofanie wojsk rosyjskich z
                                Warszawy)
                            </li>
                            <li>
                                radykalizacja nastrojów w sejmie Królestwa Polskiego – uchwała o detronizacji cara jako króla polskiego,
                            </li>
                            <li>
                                od stycznia 1831 r. regularna wojna między armią polską i rosyjską
                            </li>
                            <li>
                                najkrwawsza bitwa – Olszynka Grochowska (II 1831: udana obrona Warszawy przed rosyjskim szturmem; 17 tys.
                                ofiar obu stron)
                            </li>
                            <li>
                                walki toczyły się też na ziemiach wcielonych do Rosji
                            </li>
                            <li>
                                główni dowódcy: Józef Chłopicki, Jan Skrzynecki (częste zmiany, łącznie 8 wodzów)
                            </li>
                            <li>
                                początkowe sukcesy armii polskiej (Wawer, Dębe Wielkie, Iganie) zaprzepaszczone przez nieudolność polityków
                                i niewiarę generałów w zwycięstwo
                            </li>
                            <li>
                                przełom – V 1831 klęska wojsk polskich pod Ostrołęką, IX 1831 rosyjski szturm Woli i zajęcie Warszawy
                            </li>
                            <li>
                                Walki wygasły w X 1831; resztki armii polskiej wycofały się do Prus.
                            </li>
                        </ul>
                        <br />
                        <div class="line"><span className="linia">Skutki</span></div>
                        <br />
                        <p>
                            <ul>
                                <li>
                                    fala represji w Królestwie (rusyfikacja szkół i urzędów, likwidacja szkół wyższych, włączenie armii polskiej
                                    do armii rosyjskiej)
                                </li>
                                <li>
                                    marginalizacja Warszawy, Paryż staję się stolicą polskiej kultury
                                </li>
                                <li>
                                    likwidacja samodzielności Królestwa (zastąpienie konstytucji Statutem Organicznym, likwidacja sejmu,
                                    rusyfikacja urzędów)
                                </li>
                            </ul>
                        </p>
                    </p>

                </div>)
            },
            "c": {
                "title": "Powstanie Krakowskie", content: (<div>
                    <div class="line"><span className="linia">Próba zwerbowania chłopów </span></div>
                    <br />
                    <p>
                        Po niepowodzeniach wcześniejszych zrywów narodowych zaczęto brać pod uwagę rolę chłopów w walkach powstańczych.
                        Powstanie w Krakowie chciano oprzeć na sile chłopskich rąk. W zamian za pomoc utworzony tu Rząd Narodowy
                        Rzeczypospolitej Polskiej obiecał uwłaszczenie chłopów, przydzielenie im ziemi i utworzenie warsztatów
                        narodowych.
                        Jednak zamiar przyciągnięcia chłopów do powstania nie powiódł się, gdyż głoszeniem i tłumaczeniem obietnic wśród
                        najniższej warstwy społeczeństwa zajęła się jedynie niewielka garstka ludzi, wśród nich m.in. Edward Dembowski.
                    </p>
                    <br />
                    <div class="line"><span className="linia">Przebieg</span></div>
                    <br/>
                    <p>
                        W nocy z 20 na 21.02.1846 powstańcy rozpoczęli walki o miasto z lokalnym garnizonem austriackim. Po wyparciu ich
                        wojsk z Krakowa utworzono Rząd Narodowy Rzeczpospolitej Polskiej, który głosił radykalne hasła (wydane w
                        Manifeście do Narodu Polskiego), dotyczące zniesienia różnic stanowych i uwłaszczenia chłopów bez odszkodowania.
                        Dyktatorem powstania został Jan Tyssowski.
                        Powstanie nie spotkało się jednak z odzewem w innych zaborach, a bez niego na nic zdał się nawet entuzjazm
                        okolicznych chłopów. Nadchodzące wojska austriackie rozgromiły 27.02 procesję patriotyczną, mającą porwać
                        chłopów i robotników do walki, zabijając przy tym księdza Edwarda Dembowskiego. Władze miasta, zdając sobie
                        sprawę z bezsensu dalszej walki, rozpoczęły pertraktacje pokojowe. 4.03.1846 roku miasto zajęły wojska
                        austriackie i rosyjskie
                    </p>
                    <br />
                    <div class="line"><span className="linia">Skutki</span></div>
                    <br />
                    <p>
                        <ul>
                            <li>Dyktator powstania Tyssowski wraz z 1500 ludźmi został internowany przez władze pruskie</li>
                            <li>Zlikwidowano i włączono Wolne Miasto Kraków do Austrii</li>
                        </ul>
                    </p>

                </div>)
            },
            "d": {
                "title": "Powstanie Styczniowe", content: (<div>
                    <br />
                    <div class="line"><span className="linia">Największe z powstań</span></div>
                    <br />
                    <p>
                        Powstanie 1863-1864 było najdłużej trwającym zrywem niepodległościowym w epoce porozbiorowej. Do walki wciągnęło
                        wszystkie warstwy społeczeństwa, odcisnęło się silnie na ówczesnych stosunkach międzynarodowych, a wreszcie
                        spowodowało ogromny przełom społeczny i ideowy w dziejach narodowych, co wywarło decydujący wpływ na rozwój
                        nowoczesnego społeczeństwa polskiego.
                    </p>
                    <br />
                    <div class="line"><span className="linia">Polskie Stronnictwa</span></div>
                    <br />
                    <p>
                        Mimo iż wszyscy polscy działacze mieli wspólny cel jakim było odzyskanie niepodległości, to
                        nie byli zgodni co do metody odzyskanie tejże co spodowało utworzenie się dwóch stronnictw:
                        <ul>
                            <li><b>Czerwoni</b>-byli obozem radykalnym, grupującym działaczy nielegalnych kółek wojskowych i młodzieżowych,
                                organizatorów patriotycznych manifestacji 1860–61. </li>
                            <li><b>Biali</b>-dążyli do odzyskania niepodległości drogą reform i koncesji uzyskanych od cara (czego nie
                                należy mylić z ugodowością).
                            </li>
                        </ul>
                    </p>
                    <br />
                    <div class="line"><span className="linia">Wybuch powstania</span></div>
                    <br />
                    <p>
                        16 stycznia 1863 roku Komitet Centralny Narodowy wystąpił jako Tymczasowy Rząd Narodowy i wydał odezwę, w której
                        ogłosił w całym kraju stan wyjątkowy,22 stycznia ogłoszony został manifest Tymczasowego Rządu Narodowego,
                        autorstwa Marii Ilnickiej, wzywający do czynu zbrojnego przeciw Imperium Rosyjskiemu.
                    </p>
                    <br />
                    <div class="line"><span className="linia">Przebieg powstania</span></div>
                    <br />
                    <p>
                        W reakcji na wybuch powstania wielki książę Konstanty Mikołajewicz Romanow przywrócił stan wojenny.W pierwszych
                        dniach wojska rosyjskie opuściły 14 miast powiatowych (na 39). Powstanie od samego początku, z racji stosunku
                        sił, przybrało charakter partyzancki. Władza spoczywała w Rządzie Narodowym wyłonionym z KCN, raz po raz jednak
                        dochodziło do starć, będących wyrazem walki pomiędzy stronnictwami.Pierwszy zamach stanu przeprowadzili w lutym
                        1863 roku zwolennicy Ludwika Mierosławskiego, . Po kilku klęskach skompromitowany wódz zbiegł, a dyktatura
                        upadła. W marcu do powstania przyłączyli się biali dążący do wpływu na bieg wydarzeń. Z ich strony wyszła
                        inicjatywa przekazania władzy w ręce wsławionego zwycięstwami generała Mariana Langiewicza.Władza powróciła w
                        ręce rządu, w którym główne role odgrywali Stefan Bobrowski i Agaton Giller. Po kolejnym zamachu skrajnych
                        czerwonych władza przeszła w ręce Karola Majewskiego (związanego z ugrupowaniem białych). Pod koniec roku, gdy
                        powstanie gasło, władzę przejął Romuald Traugutt, trzeci i najlepszy z dyktatorów, usiłujący przekształcić
                        powstańcze oddziały w regularne wojsko i nadać impulsów walce, zachęcając do udziału w niej chłopów.Wiosną 1864
                        roku powstanie wyraźnie gasło. Represje i przewaga wroga czyniły swoje. Ukoronowaniem działań Rosjan było
                        aresztowanie, osądzenie i stracenie Traugutta (sierpień 1864).
                        Ostatnie oddziały partyzanckie utrzymały się do jesieni 1864 roku. Było to najdłuższe z polskich powstań, trwało
                        bowiem aż 18 miesięcy.
                    </p>
                    <br />
                    <div class="line"><span className="linia">Skutki</span></div>
                    <br />
                    <p>
                        <ul>
                            <li>
                                śmierć ponad 10000 uczestników powstania i zesłanie ponad 20000 na Sybir
                            </li>
                            <li>
                                likwidacja autonomii Królestwa Polskiego.
                            </li>
                            <li>
                                konfiskata majątków uczestników powstania tymsamym straty w kulturze
                            </li>
                            <li>
                                zastąpienie urzędników polskich rosyjskimi.
                            </li>
                            <li>
                                jeszcze szersza rusyfikacja polskiego szkolnictwa
                            </li>
                            <li>
                                kasata części polskich klasztorów
                            </li>
                        </ul>
                    </p>
                </div>)
            }
        }
    }
    handleActiveImage(event, item) {
        this.backgroundDiv.current.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${item.image})`;
        this.setState(
            { active: item.id }
        )
    }
    handleDeactivateImage(event, item) {
        this.backgroundDiv.current.style.backgroundImage = ``;
        this.setState(
            { active: null }
        )
    }
    buildText() {
        let tag = null;
        if (this.state.active != null) {
            let text = this.textMap[this.state.active].content;
            let title = this.textMap[this.state.active].title;
            tag = { text: text, title: title };
        }
        return tag;
    }
    render() {
        let text = this.buildText();
        return (
            <div className="bigDiv focus-visible-only" tabindex="0" ref={this.center} onFocus={this.handleFocus}>

                <section className="section-imagestack" ref={this.backgroundDiv} >

                    <div className="imagestack__left">
                        <ImageStack onEnterImage={this.handleActiveImage} onExitImage={this.handleDeactivateImage} imageBundle={this.imageBundle} />
                    </div>
                    <div className="imagestack__right" ref={this.scrollTo}>
                        <div className="imagestack__header"><h1>{text != null && text.title}</h1></div>
                        <div className="imagestack__content">{text != null && text.text}</div>
                    </div>

                </section >
            </div >
        )
    }
}
export class ReadMore4 extends ReadMore1 {
    constructor(props)
    {
        super(props);
        this.bundle = [
            {title:"Powstanie Związku Walki Czynnej ",date:"Czerwiec 1908",text:"Związek Walki Czynnej (ZWC) – polska tajna organizacja wojskowa założona w czerwcu 1908 we Lwowie przez działaczy Organizacji Bojowej PPS, lecz o charakterze ponadpartyjnym, mająca przygotować walkę zbrojną o wyzwolenie Polski.",image:"1.jpg"},
            {title:"Powstanie Związku Strzeleckiego",date:"23 Kwiecień 1910",text:"Związek Strzelecki należy do organizacji proobronnych i społeczno – wychowawczych. Odegrały one wielką rolę w przygotowaniach do odzyskania przez Polskę Niepodległości",image:"2.jpg"},
            {title:"Wybuch I wojny światowej",date:"28 Lipiec 1914",text:"I wojna światowa (przed II wojną światową nazywana „Wielką Wojną”) – wojna światowa, trwająca od 28 lipca 1914 do 11 listopada 1918 pomiędzy ententą (Trójporozumieniem), tj. Wielką Brytanią, Francją, Rosją, Serbią, Japonią, Włochami (od 1915) i Stanami Zjednoczonymi (od 1917) a państwami centralnymi (Trójprzymierzem), tj. Austro-Węgrami i Niemcami, wspieranymi przez Imperium Osmańskie oraz Bułgarię.",image:"3.jpg"},
            {title:"Powstanie Legionów Polskich",date:"27 Sierpień 1914",text:"Legiony Polskie – polska formacja wojskowa wchodząca w skład armii austro-węgierskiej, utworzona 27 sierpnia 1914 r. z inicjatywy polskich stronnictw politycznych w Galicji. W 1916 r. przekształcona w Polski Korpus Posiłkowy. Legiony Polskie brały udział w I wojnie światowej po stronie państw centralnych.",image:"4.jpg"},
            {title:"Powstanie Naczelnej Rady Ludowej",date:"1916",text:"Naczelna Rada Ludowa (NRL) – organizacja polityczna zaboru pruskiego.",image:"5.jpg"},
            {title:"Powstanie Armii Polskiej we Francji",date:"4 Czerwca 1917",text:"Armia Polska we Francji, zwana też Błękitną Armią (fr. L’Armée bleue od koloru francuskich mundurów) lub Armią Hallera – polska ochotnicza formacja wojskowa powstała w czasie I wojny światowej w roku 1917, powołana dekretem prezydenta Francji Raymonda Poincarégo 4 czerwca 1917 z inicjatywy Romana Dmowskiego oraz kierowanego przez niego Komitetu Narodowego Polskiego.",image:"6.jpg"},
            {title:"Kryzys przysięgowy",date:"11 Lub 9 Lipiec 1917",text:"Józef Piłsudski, polityk mający największe wpływy w Legionach, zalecił legionistom, by nie składali przysięgi. Większość żołnierzy I i III Brygady demonstracyjnie uchyliła się od niej 9 lipca 1917. ",image:"7.jpg"},
            {title:"Powstanie Komitetu Narodowego Polskiego w Paryżu",date:"15 Sierpnień 1917",text:"",image:"8.jpg"},
            {title:"Powstanie Rady Regencyjnej Królestwa Polskiego w Warszawie",date:"12 Wrzesień 1917",text:"",image:"9.jpg"},
            {title:"Powstanie Polskiej Komisji Likwidacyjnej Galicji i Śląska Cieszyńskiego w Krakowie",date:"Październik 1918",text:"",image:"10.jpg"},
            {title:"Powstanie Tymczasowego Rządu Ludowego Republiki Polskiej",date:"7 Listopad 1918",text:"Tymczasowy Rząd Ludowy Republiki Polskiej (określany również jako „rząd lubelski” oraz „rząd ludowy”) – rada ministrów pod przewodnictwem Ignacego Daszyńskiego, utworzona 7 listopada 1918 r. w Lublinie, przez działaczy lewicy niepodległościowej. ",image:"11.jpg"},
            {title:"Przyjazd Józefa Piłsudskiego do Warszawy",date:"10 Listopad 1918",text:"",image:"12.jpg"},
            {title:"Odzyskanie Niepodległości",date:"11 Listopad 1918",text:"przekazanie przez Radę Regencyjną zwierzchniej władzy nad wojskiem brygadierowi Józefowi Piłsudskiemu oraz zamianowanie go naczelnym dowódcą wojsk polskich",image:"13.jpg"},
            {title:"Przekazanie przez Radę Regencyjną Józefowi Piłsudskiemu władzy politycznej",date:"14 Listopad 1918",text:"",image:"14.jpg"},
            {title:"Telegram Józefa Piłsudskiego do światowych przywódców",date:"16 Listopad 1918",text:"Wysłąny przez Józefa Piłsudskiego do światowych przywódców telegram notyfikujący o powstaniu niepodległego państwa polskiego: „Jako Wódz Naczelny Armii Polskiej pragnę notyfikować rządom i narodom wojującym i neutralnym istnienie Państwa Polskiego Niepodległego, obejmującego wszystkie ziemie zjednoczonej Polski. Dzięki zmianom, które nastąpiły w skutek świetnych zwycięstw armij sprzymierzonych – wznowienie niepodległości i suwerenności Polski staje się odtąd faktem dokonanym”",image:"15.jpg"},
            {title:"Wybuch powstania wielkopolskigo",date:"27 Grudzień 1918",text:"",image:"16.jpg"},
            {title:"Początek konferencji pokojowej w Paryżu",date:"18 Styczeń 1919",text:"",image:"17.jpg"},
            {title:"Wybuch wojny polsko-sowieckiej",date:"14 Luty 1919",text:" wojna pomiędzy odrodzoną Rzeczpospolitą Polską (II RP), a Rosyjską Federacyjną Socjalistyczną Republiką Radziecką (RFSRR), dążącą do podboju europejskich państw i przekształcenia ich w republiki sowieckie,",image:"18.jpg"},
            {title:"Podpisanie traktatu wersalskiego",date:"28 Czerwiec 1919",text:"",image:"19.jpg"},
            {title:"I powstanie śląskie",date:"16 - 24 Sierpień 1919",text:"",image:"20.jpg"},
            {title:"Powstanie sejneńskie ",date:"23 - 28 Sierpień 1919",text:"",image:"21.jpg"},
            {title:"Zakończenie konferencji pokojowej w Paryżu",date:"21 Stycznia 1920",text:"",image:"22.jpg"},
            {title:"Plebiscyt na Warmii,Mazurach i Powiślu ",date:"11 Lipiec 1920",text:"",image:"23.jpg"},
            {title:"Bitwa warszawska",date:"13 - 25 Sierpień 1920",text:"nazywana Cudem nad Wisłą – operacja wojskowa stoczona w dniach 13–25 sierpnia 1920 roku pomiędzy oddziałami sowieckiej Armii Czerwonej, a armiami Wojska Polskiego, zgrupowanymi nad Wisłą, decydująca bitwa wojny polsko-bolszewickiej.",image:"24.jpg"},
            {title:"II powstanie śląskie",date:"19 - 25 Sierpień 1920",text:"",image:"26.jpg"},
            {title:"Zawieszenie broni w wojnie polsko-sowieckiej",date:"18 Październik 1920",text:"",image:"27.jpg"},
            {title:"Podpisanie traktatku ryskiego",date:"18 Marca 1921",text:" traktat pokojowy zawarty przez Polskę i RFSRR oraz USRR, ratyfikowany przez Naczelnika Państwa Józefa Piłsudskiego 16 kwietnia 1921",image:"28.jpg"},
            {title:"Plebiscyt na Górnym Śląsku",date:"20 Marzec 1921",text:"",image:"29.jpg"},
            {title:"III powstanie śląskie",date:"2 Maj - 5 Lipiec 1921",text:"",image:"30.jpg"},
            {title:"Uznanie wschodniej granicy II RP przez Radę Ambasadorów",date:"15 Marzec 1923",text:"",image:"31.jpg"},
          
        ]
    }
    render() {

        return (

            <div className="bigDiv" tabindex="0" ref={this.center} onFocus={this.handleFocus}>
                <Timeline bundle={this.bundle}  />
                <h1 ref={this.scrollTo}>Pomóżcie mi</h1>
            </div>
        )
    }
}