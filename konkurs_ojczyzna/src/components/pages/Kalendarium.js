import React, { Component } from 'react'




export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    render() {
        return (
            <div>
                <section className="section-1">
                    <div className="header-wraper">
                        <h1>Droga Do Niepodległości</h1>
                        <h2>Tu cos będzie</h2>
                    </div>
                    <div className="circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                        </svg>
                    </div>
                </section>
                <section className="section-2">
                    
                </section>
            </div>
        )
    }
}