import React, { Component } from 'react'
var json = require('./characters/json/piesni.json')

export class Music extends Component {
    constructor(props) {
        super(props)
        this.musicMap = [
            {name:"Mazurek Dąbrowskiego",id:"hymn",path:"audio/hymn.mp3"},
            {name:"Hej, hej ułani",id:"ulani",path:"audio/ulani.mp3"},
            {name:"Pieśń konfederatów barskich ",id:"barscy",path:"audio/barscy.mp3"},
            {name:"Boże, coś Polskę",id:"boze",path:"audio/boze.mp3"},
            {name:"O mój rozmarynie",id:"rozmaryn",path:"audio/rozmaryn.mp3"},
            {name:"Rozszumiały się wierzby płaczące",id:"placz",path:"audio/placz.mp3"},
            {name:"Czerwone Maki na Monte Casino",id:"maki",path:"audio/maki.mp3"},
            {name:"My, Pierwsza Brygada",id:"brygada",path:"audio/brygada.mp3"},
            {name:"Rota",id:"rota",path:"audio/rota.mp3"},
            {name:"Szara Piechota",id:"piechota",path:"audio/piechota.mp3"},
        ]
            
        this.state = {
            selected:null
        }
        this.handleMusicChoiceClick = this.handleMusicChoiceClick.bind(this);
        this.buildMusicChoices = this.buildMusicChoices.bind(this);
        this.buildText = this.buildText.bind(this);


    }
    handleMusicChoiceClick(event)
    {
        event.preventDefault();
        let choice = this.musicMap[event.target.id];
        this.setState({
            selected: event.target.id
        })
        this.props.onMusicSelect(choice.path,choice.name);
    }
    buildMusicChoices()
    {
        let tag = this.musicMap.map((value,index)=>{
            return (<li className="music-list-item" index={index} id={index} onClick={this.handleMusicChoiceClick.bind(this)}>{ (index+1)+"."+value.name}</li>)
        })
        return tag
    }
    buildText()
    {
        let tag = null;
        if(this.state.selected != null){
            tag = (<p>{json[this.musicMap[this.state.selected].id]}</p>)
        }
        return tag
    }
    render() {
        let choices = this.buildMusicChoices();
        let text = this.buildText();
        return (
            <div className="music-container">
            <div className="music-left">
                <div className="music-list-container">
                    <ul>{choices}</ul>
                </div>
            </div>

            <div className="music-right">
                <div className="music-text-container">
                <p>
                    {this.state.selected && <h2>{this.musicMap[this.state.selected].name}</h2>}
                    <br/>
                {text}
</p>
                </div>
                
            </div>
                        
                        
                    
                
            </div>
        )
    }
}