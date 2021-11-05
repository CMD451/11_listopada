import { CharacterOverlay } from './characters/CharacterOverlay';
import React, { Component } from 'react'

export class Postacie extends Component {
    constructor(props) {
        super(props)
        let active = React.createRef();
        active.current = null;
        this.state = {
            active: active,
            activated: null
        }
        this.onColumnClick = this.onColumnClick.bind(this);
        this.buildContent = this.buildContent.bind(this);

    }
    componentDidMount() {
        let all_columns = Array.from(document.getElementsByClassName("column"));
        all_columns.forEach((column) => {
            column.addEventListener("mouseover", e => {
                all_columns.forEach((e) => {
                    if (e !== column) e.classList.add('blur')
                });
            });
            column.addEventListener("mouseout", e => all_columns.forEach((e) => { e.classList.remove('blur') }));
        }
        );
    }
    componentWillUnmount() {

    }
    onColumnClick(event) {
        console.log("ufo")
        let all_columns = Array.from(document.getElementsByClassName("column"));
        let reference = this.state.active;
        let name = "";

        if (reference.current == event.target) {

            all_columns.forEach((value) => {
                value.style.display = ""
                value.style.transform = ""
                value.style.position = "static";
                value.left = "0px";
            })
            reference.current = null;
            name = null;
        }
        else {

            let elementPosition = this.getScrollPosition(event.target);
            let Offset = (elementPosition.x / elementPosition.width) * elementPosition.width * -1;
            // let Offset = (elementPosition.x/elementPosition.width) * 100 * -1;
            event.target.style.transform = "translateX(" + String(Offset - 10) + "px)";
            event.target.style.position = "fixed";
            event.target.style.left = elementPosition.x  + "px";
            all_columns.forEach((value) => {
                if (value != event.target) {
                    value.style.display = "None"
                }
            })
            reference.current = event.target;
            name = event.target.getAttribute('value');
        }
        this.setState({
            active: reference,
            activated: name
        })
    }
    buildContent() {
        let content = null;
        if (this.state.activated != null) {
            content = (<CharacterOverlay name={this.state.activated} />)
        }
        return content;
    }
    getScrollPosition(element) {
        const target = element;
        const position = target.getBoundingClientRect();
        return position;
    }
    render() {
        let content = this.buildContent();
        return (

            <div class="containerPersony">
                <div onClick={this.onColumnClick} value="dmowski" class="column"></div>
                <div onClick={this.onColumnClick} value="pilsudski" class="column"></div>
                <div onClick={this.onColumnClick} value="paderewski" class="column"></div>
                <div onClick={this.onColumnClick} value="witos" class="column"></div>
                <div onClick={this.onColumnClick} value="korfanty" class="column"></div>
                <div onClick={this.onColumnClick} value="daszyn" class="column"></div>
                {/* <div className="bubble">
                    <div class="box sb2">I'm speech bubble</div>
                </div> */}
                {content}
            </div>
        )
    }
}