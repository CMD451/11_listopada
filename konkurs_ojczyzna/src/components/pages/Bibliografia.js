import React, { Component } from 'react'


export class Bibliografia extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.infomacje = ["https://dzieje.pl/infografiki/i-rozbior-polski",
            "http://muzhp.pl/pl/e/16/pierwszy-rozbir-polski-wywiad", "https://www.polska1918-89.pl/droga-do-niepodleglej-polski,20.html", "https://www.swietokrzyskie.pro/droga-polski-do-niepodleglosci/?pdf=74998", "https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna", "https://ipn.gov.pl/download/1/102542/OJCOWIE-NIEPODLEGLOSCI-calosc-small.pdf",
            "https://niepodlegla.gov.pl/o-niepodleglej/roznymi-sciezkami-ku-niepodleglej-szli-ojcowie-polski-odrodzonej/"
        ]
        this.video = ["https://www.youtube.com/watch?v=2DrXgj1NwN8&ab_channel=parpgovpl", "https://www.youtube.com/watch?v=7XQ_o-rYl-U&t=538s&ab_channel=bds2014", "https://www.youtube.com/watch?v=q0zGbEN1kmE&ab_channel=travelfilmarchive"]
        this.photo = ["https://www.google.pl/imghp?hl=pl", "https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna", ""]
    }
    mapLinks(array) {
        return array.map((value, index) => {
            return (<p><a href={value}>{value}</a></p>)
        })
    }
    render() {
        let info = this.mapLinks(this.infomacje);
        let video = this.mapLinks(this.video);
        let photo = this.mapLinks(this.photo);
        return (
            <div>
                <section className="biblio-container">
                    <div className="biblio-content">
                        <div className="row">
                            <div class="line"><span>Informacje</span></div>
                            {info}
                        </div>
                        <div className="row">
                            <div class="line"><span>Zdjęcia</span></div>
                            <p>
                                {photo}
                            </p>
                        </div>
                        <div className="row">
                            <div class="line"><span>Video</span></div>
                            <p>
                                {video}
                            </p>
                        </div>

                    </div>

                </section>
            </div>
        )
    }
}