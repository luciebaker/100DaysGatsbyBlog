import React, { Component } from 'react'
import logo from '../../images/LBMedia-logo.png'


export default class Navbar extends Component {
    state = {
        navbarOpen: false,
        css: "collapse navbar-collapse",
        links: [
            {
                id: 1,
                path: 'https://lbmedia.netlify.com',
                text: 'home',
                },
            {
                id: 2,
                path: 'https://lbmedia.netlify.com/about',
                text: 'about',
                },
            {
                id: 3,
                path: 'https://lbmedia.netlify.com/portfolio',
                text: 'portfolio',
                },
            {
                id: 4,
                path: '/',
                text: '#100Days',
                },
            {
                id: 5,
                path: 'https://lbmedia.netlify.com/insights',
                text: 'Insights',
                },
            {
                id: 6,
                path: `https://lbmedia.netlify.com/contact/`,
                text: 'contact',
                }   
        ]
    }

    navbarHandler = () => {
        this.state.navbarOpen
        ? this.setState({
            navbarOpen: false,
            css: "collapse navbar-collapse"
            })
        : this.setState({
            navbarOpen: true,
            css: "collapse navbar-collapse show"
            });
    };

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top shrink">
            <a href='https://lbmedia.netlify.com' target="_blank" rel="noopener noreferrer" className="navbar-brand">
            <img className="navbar-logo" src={logo} alt="LB Media Logo"/>
            </a>
            <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
            <span className="navbar-toggler-icon" />
            </button>
            <div className={this.state.css}>
            <ul className="navbar-nav ml-auto">
            {this.state.links.map(link => {
                return (
                    <li key={link.id} className="nav-item">
                    <a href={link.path} key={link.id} rel="noopener noreferrer" className="nav-link text-uppercase">
                    {link.text}</a>
                    </li>
                )     
            })}
            </ul>
            </div>
            </nav>
        )
    }
}