import React, { Component } from 'react'
import logo from '../../images/LBMedia-logo.png'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import FooterIcons from './footerIcons'


export default class footer extends Component {
    render() {
        return (
            
        <div className="container-fluid">
                
            <div className="row footer">
                    
                    <div className="col-sm col-footer-right text-center">

                    <AniLink fade to='/'>
                    <img className="footer-logo" src={logo} alt="LB Media Logo"/>
                    </AniLink>
                    </div>

                    <div className="col-sm col-footer pt-4 text-white text-center">
                    </div>
                    
                    <div className="col-sm col-footer text-center">
                    <FooterIcons />
                    </div>

            </div>

                <div className="row copyright-bg copyright-border">
                <div className="col-10 mx-auto col-md-6 mt-3 text-center">
                <p className="copyright-text"> &copy; {new Date().getFullYear().toString()} Lucie B | LB Media </p>
                </div>
                </div>
        </div>
        )
    }
}