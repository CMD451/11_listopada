import React, { Component } from 'react'
import { NavbarOption } from './NavbarOption'
import './home.css'

export class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options:this.props.options,
            classProp:""
        }
        this.handleOptionClicked = this.handleOptionClicked.bind(this);
        this.getScrollPosition = this.getScrollPosition.bind(this);
        this.stressRef = React.createRef();
        this.ulRef = React.createRef();
        this.clickedElement = React.createRef();
        this.getScrollPosition = this.getScrollPosition.bind(this);
        this.listener = this.listener.bind(this);
       

    }

    listener(){
        if(this.clickedElement.current!=null)
        {
            this.moveBarToElement(this.clickedElement.current);
        }
    }
    componentDidMount(){
        this.clickedElement.current = document.querySelectorAll("header ul li")[0];
        this.moveBarToElement(this.clickedElement.current);
        window.addEventListener('resize', this.listener);
        
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.listener);
    }
    handleOptionClicked(index,element)
    {
        let options = this.state.options;
        let clickedOption = options[index];
        this.setState({ 
            classProp:clickedOption.className,
        })
        this.clickedElement.current = element;
        this.moveBarToElement(element)
        this.props.onOptionChange(clickedOption.name);

        
    }
    moveBarToElement(element)
    {
        let position = this.getScrollPosition(element);
        let ulPosition = this.getScrollPosition(this.ulRef.current);
        let stress = this.stressRef.current;
        
        let ulOffset = (ulPosition.x - position.x) * -1
        
        let pixelWidth = position.width;
        let ulWidth = ulPosition.width;
        let percentWidth = position.width/ulWidth * 100;

        let ulYOffset = ((ulPosition.y + ulPosition.height) - (position.y + position.height));
        let pixelStressHeight = this.getScrollPosition(stress).height;
        let height = (ulYOffset/pixelStressHeight) * 100;
        
        let xOffSet = ulOffset/pixelWidth * 100;
        stress.style.width = percentWidth+ "%";
        stress.style.transform= "translate("+ String(( xOffSet)) +"%,"+String(-1 * height) + "%)";
    }
    getScrollPosition( element ) {
        const target = element;
        const position = target.getBoundingClientRect();
        return position;
      }
    render() {
        let options = this.props.options.map((value,index)=>{
            return (<NavbarOption name={value.name} index={index} key={index} handleOptionClicked={this.handleOptionClicked}/>)
        })
        return (
            <header>
                <nav>
                    <ul ref={this.ulRef}>
                        {options}
                        <div class="ufo" ref={this.stressRef}>
                        </div>
                    </ul>
                  
                    
                </nav>
        </header>
        )
    }
}