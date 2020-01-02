import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'


const Hero = ({img, className, children}) => {
    return (
        <BackgroundImage className={className} fluid={img}>
            {children}
        </BackgroundImage>
    )
}

export default styled(Hero)`
    min-height: 60vh;
    background-position: bottom center;
    display: flex;
    
`