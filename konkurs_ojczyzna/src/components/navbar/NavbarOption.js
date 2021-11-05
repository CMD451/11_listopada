import React, { Component } from 'react'


export class NavbarOption extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
        this.onOptionClick = this.onOptionClick.bind(this);
        this.optionRef = React.createRef();

    }
    onOptionClick(event)
    {
        event.preventDefault();
        this.props.handleOptionClicked(this.props.index,this.optionRef.current);
    }
    render() {
           
        return (
              
                <li onClick={this.onOptionClick} ref={this.optionRef}>
                    {this.props.name}
                </li>
             
            
        )
    }
}