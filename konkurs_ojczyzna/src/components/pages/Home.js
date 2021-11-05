import React, { Component } from 'react'
import { Timeline } from '../Timeline';
import { ImageStack } from "../ImageStack";
import { Slide1,Slide2,Slide3,Slide4 } from '../homeSlides/slidesFunctions';
import { ReadMore1, ReadMore2, ReadMore3, ReadMore4} from "../homeSlides/readMore"




export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activated: null,
            readMore:false,
            currentSlide:0
        }

        this.handleReadMore = this.handleReadMore.bind(this);
        this.handleSlideClick = this.handleSlideClick.bind(this);
        this.buildButtons = this.buildButtons.bind(this);
        this.buildReadMore = this.buildReadMore.bind(this);
        this.buildContent = this.buildContent.bind(this);
        this.focusOnElement =this.focusOnElement.bind(this);

        this.contentArray = [
            {slide:(<Slide1/>),readMore:(<ReadMore1 onSpawn={this.focusOnElement}/>),video:"video1.mp4"},
            {slide:(<Slide2/>),readMore:(<ReadMore2 onSpawn={this.focusOnElement}/>),video:"video12.mp4"},
            {slide:(<Slide3/>),readMore:(<ReadMore3 onSpawn={this.focusOnElement}/>),video:"video5.mp4"},
            {slide:(<Slide4/>),readMore:(<ReadMore4 onSpawn={this.focusOnElement}/>),video:"video4.mp4"},
        ]
        this.backgroundStack = React.createRef();
        this.textMap = { "a": "siema siema to ja", "b": "siema siema to ty ?", "c": "o tej porze każdy umrzęc morze mnie może goni bvałtyk stnął eba" }
        // this.onImageEnterHandle = this.onImageEnterHandle.bind(this);
        

    }
    focusOnElement(element)
    {
        // element.scrollIntoView(true);
        element.focus();
       
    }
    handleReadMore()
    {
        
       let truth = !this.state.readMore;
       this.setState({
            readMore: truth
       }) 
    }
    handleSlideClick(event)
    {
        let index = event.target.id;
        let clickedSlide = this.contentArray[index];
        this.setState({
            readMore:false,
            currentSlide:index, 
        })
    }
    buildButtons()
    {
        let tag = this.contentArray.map((value,index)=>{
            let classNam = "btn";
            if(index == this.state.currentSlide)
            {
                classNam += " active";
            }
            return <div onClick={this.handleSlideClick} className={classNam} id={index}></div>
        })
        return tag;
    }
    buildReadMore()
    {
        let choice = null;
        if(this.state.readMore == true)
        {
            choice = this.contentArray[this.state.currentSlide].readMore;
        }
        
        return choice
    }
    buildContent(){
        return this.contentArray[this.state.currentSlide].slide;
    }
    // onImageEnterHandle(event,item)
    // {
    //     this.backgroundStack.current.style.backgroundImage = `url(${item.image})`;
    //     this.setState({activated:item.id})

    // }
    render() {
        // let bundle = [{title:"Pomocy",date:"1942",text:"Wzywam was rodacy abyście swe serca podali mi na tacy",image:"/images/1.jpg"},
        // {title:"Halo, kto mówi",date:"1943",text:"O:::O",image:"/images/1.jpg"},
        // {title:"Gdzie pomoc",date:"1944",text:"Bardzo uprzejmie ponawiam prośbe o natychmiastową pomoc",image:"/images/2.jpg"},
        // {title:"Epitafium nie napiszę",date:"1946",text:"ZAKAZ epitafium (proszę nie grzebać zmarłych)",image:"/images/3.jpg"},
        // {title:"Koniec",date:"2022 21 Października",text:"Koniec",image:"/images/3.gif"}]
        // <ImageStack onEnterImage={this.onImageEnterHandle} imageBundle={[{class:"a witam",id:"a",image:"/images/1.jpg"},{class:"b witam",id:"b",image:"/images/2.jpg"},{class:"c witam",id:"c",image:"/images/4.jpg"}]}/>
        //             {active}

        // <Timeline bundle={bundle}/>
        // let active = null;
        // if (this.state.activated != null) {
        //     active = this.textMap[this.state.activated];
        // }
        let slideButtons = this.buildButtons();
        let slideContent = this.buildContent();
        let readMoreContent = this.buildReadMore();
        
        return (
            <React.Fragment>
                <section className="section-1">
                    <div className="dark"></div>
                    <video muted loop autoPlay src={"images/" + this.contentArray[this.state.currentSlide].video} id="video"></video>
                    <div className="content">
                        {slideContent}
                        {!this.state.readMore && <div className="read-more" onClick={this.handleReadMore}>Dowiedz się więcej</div>}
                    </div>
                    <div className="slider">
                       {slideButtons}
                    </div>
                </section>
                {readMoreContent}
            </React.Fragment>
        )
    }
}