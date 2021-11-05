import React, { Component } from 'react'

export class SlideWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            readMore:false
        }
        this.handleReadMore = this.handleReadMore.bind(this);

    }
    handleReadMore(event)
    {
        event.preventDefault();
        this.setState({
            readMore:true
        })
    }
    render() {
        let more = null;
        if(this.state.readMore)
        {

        }
        return (
            <div className="homeMoreContent">
                <video muted loop autoPlay src={"images/" + this.props.video} id="video"></video>
                <div className="content">
                    {this.props.content}
                </div>
                <div className="read-more" onClick={this.handleReadMore}>Dowiedz się więcej</div>
            </div>
        )
    }
}


