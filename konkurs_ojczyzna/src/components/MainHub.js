import React, { Component } from 'react'

export class MainHub extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parade_planes:['paradePlane1','paradePlane2',"praradePlane3","h","i","j","k","l","op"]
        }
        this.onPlaneClick = this.onPlaneClick.bind(this);
        this.parade = this.parade.bind(this)
    }
    parade(event)
    {
        let planes = this.state.parade_planes.map((value,index)=>{
            let unit = document.getElementById(value);
            unit.style.display = "block";
            unit.style.bottom = "5%";
            unit.style.margin = "0";
            unit.style.left = String(4.3 +(10 * index)) + "%";
            return unit
        })
        planes.forEach((value,index)=>{
            if(index % 3 ==0)
            {
                this.fly(value,10)
            }
            else{
                this.fly(value);
            }
            
        })
       
    }
    onPlaneClick(event)
    {
        this.fly(event.target);
    }
    fly(target,start_pos=5,base_pos=0.7,start_acer=0.05,turn_acer=0.0025)
    {
        let id = null;
        clearInterval(id);
        id = setInterval(frame,2);
        function frame() {
            if(start_pos >= 100){
                target.style.display = "none";
                clearInterval(id);
            }
            else{
                start_pos = start_pos + base_pos * start_acer;
                if(start_acer < 0.5){
                    start_acer+=turn_acer
                }
                target.style.bottom = start_pos + "%";
            }
        }
    }
    render() {
       
        
             let parade = this.state.parade_planes.map((value,index)=>{
                return <img className="plane" id={value} key={index} src="plane.png"/>;
            });
        
        return (
            <div className="App">
                <header className="App-head">
                    <img src="tank.gif" className="App-logo" alt="logo" />
                    <p>
                        Uwaga <code>UWAGA</code> Uwaga
                    </p>
                    <a
                        className="App-link"
                        onClick={this.parade}
                    >
                        Dawaj na zapad!
                    </a>
                </header>
                <img id="plane" onClick={this.onPlaneClick} src="plane.png" />
                {parade}
                <div className="footer">
                    
                </div>
            </div>
        )
    }
}