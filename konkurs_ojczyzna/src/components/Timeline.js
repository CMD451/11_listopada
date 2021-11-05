import React, { Component } from 'react';
import '../styles/timeline.css';


export class Timeline extends Component {
    
    constructor(props) {
        super(props);
        let bundle = this.props.bundle.map((value,index)=>{
            let ref = React.createRef();
            value.ref = ref;
            return value;
        })
      
        this.state = {
            bundle:bundle
        }
        this.active =React.createRef();
        this.backgroundDiv = React.createRef();
        this.getScrollPosition = this.getScrollPosition.bind(this);
        this.handleTimelineItems = this.handleTimelineItems.bind(this);
        
    }
    handleTimelineItems()
    {
        if(this.active.current != null){
            let activated = this.active.current;
            let position = this.getScrollPosition(activated);
            if(position.y >= 70 || position.y <= (position.height * -1) )
            {
                activated.classList.remove('timeline-item--active');
                this.active.current = null;
                if(this.backgroundDiv.current !=null){
                    this.backgroundDiv.current.style.backgroundImage = "";
                }
            }
        }
        
        this.state.bundle.forEach((value,index)=>{
            let element = value.ref.current;
            let position = this.getScrollPosition(element);
            if(this.active.current == null && position.y <= 0 + position.height/2.5  && position.y >= (position.height * -1)){
                element.classList.add('timeline-item--active');
                this.active.current = element;
                if(this.backgroundDiv.current !=null){
                    this.backgroundDiv.current.style.backgroundImage = "url(images/" + value.image +")";
                }
                
                
            }        
        })
        
    }
    componentDidMount(){
        
        window.addEventListener('scroll',this.handleTimelineItems);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleTimelineItems);
    }
    getScrollPosition( element ) {
        const target = element;
        const position = target.getBoundingClientRect();
        return position;
      }
    buildEventTag(item)
    {
        let tag = (
            
                <div className="timeline-item" data-text={item.date} ref={item.ref}>
                    <div className="timeline__content"><img className="timeline__img" src={"images/"+item.image} alt="pomocy"  />
                        <h2 className="timeline__content-title">{item.title}</h2>
                        <p className="timeline__content-desc">{item.text}</p>
                    </div>
                </div>
        )
        return tag
    }
    render()
    {
        let items = this.state.bundle.map((value,index)=>{
            return this.buildEventTag(value);
        })
        return(
            <div className="timeline-container" id="timeline-1" ref={this.backgroundDiv}>
                <div className="timeline" >
                {items}
                </div>
            </div>
        )
    }
}