import React, { Component } from 'react'
import { Pilsudski } from './Pilsudski';
import { Dmowski } from './Dmowski';
import { Paderewski } from './Paderewski';
import { Wincenty } from './Wincenty';
import { Daszyn } from './Daszyn';
import { Korfanty } from './Korfanty';
var json = require('./json/cytaty.json')



export class CharacterOverlay extends Component {
    constructor(props) {
        super(props)
        this.quotes = {}
        Array.from(json).forEach((value) => {
            this.quotes[value.id] = value;
        })
        this.state = {
            quote: true
        }
        this.componentMap = {
            pilsudski: (<Pilsudski />),
            dmowski: (<Dmowski />),
            paderewski: (<Paderewski />),
            witos: (<Wincenty />),
            daszyn: (<Daszyn />),
            korfanty: (<Korfanty />)
        };

    }
    handleQuote() {
        let quote = !this.state.quote;
        this.setState({ quote: quote })
    }
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    render() {
        let quote = null;
        if (this.state.quote) {
            quote = (<div onAnimationEnd={this.handleQuote.bind(this)} className="wrapper">
                <div class="speechbubble">
                    {this.quotes[this.props.name].quotes[this.getRandomIntInclusive(0, this.quotes[this.props.name].quotes.length - 1)]}
                    <span className="username">{this.quotes[this.props.name].name}</span>
                </div>
            </div>)
        }
        let d = null;
        if (!this.state.quote) {
            d = (<button onClick={this.handleQuote.bind(this)}>Kto mówi?</button>)
        }
        let content = this.componentMap[this.props.name];
        return (
            <div className="overlay">
                <div className="characterPlace"></div>
                <div className="characterContent">
                    {content}
                </div>
                {quote}
            </div>
        )
    }
}