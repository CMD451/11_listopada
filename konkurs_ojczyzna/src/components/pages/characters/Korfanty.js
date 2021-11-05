import React, { Component } from 'react'


export class Korfanty extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return (
            <div class="persony-container">

                <div class="persony-column-flip"></div>
                <div class="persony-content">
                    <h1 class="name">
                        Wojciech Korfanty
                    </h1>
                    <p>
                        <span> Wojciech Korfanty </span> (ur. jako Adalbert Korfanty 20 kwietnia 1873 w osadzie Sadzawki, zm. 17 sierpnia 1939 w Warszawie) – polski przywódca narodowy Górnego Śląska, związany z chrześcijańską demokracją. Jedna z najważniejszych postaci Śląska i jego walki o przyłączenie do Polski. Jeden z ojców niepodległej Polski.
                    </p>
                
                    <div class="line"><span>Młodość</span></div>
                    <div class="persony-row">
                        <div class="persony-text-container">
                            <p>
                            Urodził się 20 kwietnia 1873. Jego rodzicami byli Karolina z domu Klecha i Józef, górnik kopalni „Fanny”, którzy w życiu rodzinnym pielęgnowali i rozwijali wartości polskiego języka, katolickiej wiary i śląskiego obyczaju. Miał czwórkę rodzeństwa.
                            W 1879 rozpoczął naukę w niemieckiej szkole ludowej w Siemianowicach, następnie, od 1885, uczęszczał do katowickiego Gimnazjum Królewskiego  Szkołę średnią ukończył w grudniu 1895, po interwencji Józefa Kościelskiego, posła do Reichstagu z Wielkopolski, jako ekstern i jeszcze w tym samym roku rozpoczął studia na politechnice w Charlottenburgu.
                            </p>
                        </div>
                    </div>
                    <div class="line"><span>Działalność polityczna</span></div>
                    <div class="persony-row">
                        <div class="persony-text-container">
                            <p>
                                <div class="persony-image-container-vertical"><img src="images/korfanty1.png" alt="" srcset="" />
                                    <h5>Wojciech Korfanty jako poseł na Sejm RP</h5></div>
                                Początkowo współpracował z Romanem Dmowskim.
                                Zdecydowanie protestował przeciwko polityce
                                germanizacyjnej na Górnym Śląsku, za co został
                                uwięziony przez władze niemieckie.
                                Zasłynął wystąpieniem w Reichstagu 25 października
                                1918 r., w którym zażądał przyłączenia do przyszłego
                                państwa polskiego wszystkich ziem zaboru pruskiego
                                i Górnego Śląska. Uczestniczył w powstaniu
                                wielkopolskim.
                                Od 1920 r. był komisarzem plebiscytowym na Śląsku
                                z ramienia Polski. Był jednym z przywódców drugiego
                                powstania śląskiego, a niecały rok później głównym
                                dowodzącym trzeciego powstania.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}