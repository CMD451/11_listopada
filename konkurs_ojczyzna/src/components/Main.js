import React, { Component } from 'react'
import {Home} from './pages/Home';
import {Navbar} from './navbar/Navbar';
import { ImageStack } from './ImageStack';
import { Postacie } from './pages/Postacie';
import { Gramophone } from './Gramophone';
import { Music } from './pages/Music';
import { Bibliografia } from './pages/Bibliografia';


export class Main extends Component {
    constructor(props) {
        super(props)
        this.options = 
            [
               {className:"",name:"Strona Główna"},
               {className:"",name:"Ojcowie Niepodległości"},
               {className:"",name:"Pieśni"},
               {className:"",name:"Bibliografia"},
            ];
       
        this.state = {
            activeComponent:"Strona Główna",
            selectedMusic:null,
            selectedMusicName:null
        }
        this.onOptionChange = this.onOptionChange.bind(this);
        this.onMusicSelect = this.onMusicSelect.bind(this);
        this.onMusicEnd = this.onMusicEnd.bind(this);

        this.classMap = {
            "Strona Główna":(<Home/>),
            "Ojcowie Niepodległości":(<Postacie/>),
            "Pieśni":(<Music onMusicSelect={this.onMusicSelect}/>),
            "Bibliografia":(<Bibliografia/>)
        };
    }
    onMusicSelect(musicPath,musicName)
    {
        this.setState({
        selectedMusic:musicPath,
        selectedMusicName:musicName
        });
    }
    onOptionChange(id)
    {
        if(id !== this.state.activeComponent)
        {
            this.setState({
                activeComponent:id 
             })
        }
        
    }
    onMusicEnd()
    {
        this.setState({
            selectedMusic:null,
            selectedMusicName:null
        })
    }
    buildGramophone()
    {
        let tag = null;
        if(this.state.selectedMusic != null)
        {
            let rng = Math.random();
            tag = (<Gramophone music={this.state.selectedMusic} onEnd={this.onMusicEnd}/>)
        }
        return tag
    }
    render() {
        let gramophone = this.buildGramophone();
        let active = this.classMap[this.state.activeComponent];
        return (
            <React.Fragment>
                <Navbar options={this.options} onOptionChange={this.onOptionChange}/>
                {gramophone}
                {active}
            </React.Fragment> 
        )
    }
}