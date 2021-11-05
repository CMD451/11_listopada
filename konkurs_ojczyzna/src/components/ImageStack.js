import React, { Component } from 'react';
import '../styles/imageStack.css';

export class ImageStack extends Component {
    
    constructor(props) {

        super(props)
        this.state = {
          
        }    
        this.onImageClick = this.onImageClick.bind(this);
        this.ref = React.createRef();
        
    }
    onImageClick(event)
    {
     
       
            let previous = this.ref.current;
            let item = this.props.imageBundle[event.target.id];
            if(this.ref.current != null)
            {
                this.ref.current = null;
                if(this.props.onExitImage){
                    this.props.onExitImage(event,item);
                }
                previous.classList.toggle('activated_image');
            }
           if(this.ref.current == null && event.target != previous)
           {
                this.ref.current = event.target;
                if(this.props.onEnterImage){
                    this.props.onEnterImage(event,item);
                }
                event.target.classList.toggle('activated_image');
            }
            
            
        console.log(this.props)
       
    }
    render()
    {
        console.log(this.props.image)
        let images = this.props.imageBundle.map((value,index)=>{
            return (<div  style={{backgroundImage: "url("+value.image+")"}} className = {value.class} id={index} key={value.id} onClick={this.onImageClick}>   </div>)
        })
        return(
            <div className="imageStackContainer">
                {images}
            </div>
        )
    }
}