import ReactAudioPlayer from 'react-audio-player';
import React, { Component } from 'react'
import "../styles/gramophone.css"


export class Gramophone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            end:false
        }
        this.endIsNaught = this.endIsNaught.bind(this);
        this.StartEnd = this.StartEnd.bind(this);
    }
    endIsNaught(event)
    {
        if(this.state.end)
        {
            this.props.onEnd();
        }
        
    }
    StartEnd(event)
    {
        this.setState({
            end:true
        })
    }
    render() {
        let classNam = "gramophone";
        if(this.state.end)
        {
            classNam="gramophone gramophoneOut";
        }
        return (
          
            <div className={classNam} onAnimationEnd={this.endIsNaught}>
                <img src="images/gram.gif" className="gramophoneImage" />
                <ReactAudioPlayer
                src={this.props.music}
                autoPlay
                controls
                className="audioHtml"
                onEnded = {this.StartEnd}
                onPause = {this.StartEnd}
               
                />
            </div>
        )
    }
}