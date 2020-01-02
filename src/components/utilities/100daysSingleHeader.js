import React from 'react'

export default function Header({title, subtitle, author, date}) {
        return (
        <div className="container">
        <div className="row">
        <div className="col-md-12">
        <h1 className="days-hero-single-title">{title}</h1>
        <p className="days-hero-single-subtitle">{subtitle}</p>
        <h6 className="days-hero-single-date"> <span>By {author} </span> | <span>{date}</span></h6>
        </div>
        </div>
        </div>
        )
    }
