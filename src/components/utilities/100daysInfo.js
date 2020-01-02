import React, { Component } from 'react'


export default class DaysInfo extends Component {
    render() {
        return (
            <div className="container-fluid mt-5">
                
            <div className="row justify-content-center mb-5">
            <div className="col-md-5 mt-2 info-container-left">
                <h4>I first came across Gatsby while doing a React course. I really enjoyed working with React (and still do) but the one lecture dedicated to Gatsby was my Aha! moment; that time when it all makes perfect sense. </h4>
            </div>
            <div className="col-md-5 mt-2 info-container-right">
                <p>Starting January 1, 2020, I am be taking part in the <a className="day-link" href="https://twitter.com/hashtag/100DaysofGatsby" target="_blank" rel="noopener noreferrer">#100DaysofGatsby</a> Challenge. Here, I share with you the journey, the highlights and challenges day by day. While I have been working with Gatsby for a few months, there is always more to learn! </p>
            </div>
        </div>
            </div>
        )
    }
}