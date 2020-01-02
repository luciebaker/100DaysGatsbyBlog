import React from 'react'
import GatsbyLogo from '../../images/Gatsby_White.png'

export default function Header({title, subtitle}) {
        return (
        <div className="container">
        <div className="row">
        <div className="col-md-3 days-logo-col">
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
        <img className="days-logo" src={GatsbyLogo} alt="Gatsby Logo"/></a>  
        </div>
        <div className="col-md-9">
        <h1 className="days-hero-title">{title}</h1>
        <p className="days-hero-subtitle">{subtitle}</p>
        </div>
        
        </div>
        </div>
    
        )
    }
