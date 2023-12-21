import React from 'react'
import HeroSlider from './slider'
import "./style.scss"

function HomePageHero() {
    return (
        <div id='homePageHero'>
            <div className="heroHeader">
                TOUGH
            </div>
            <HeroSlider />
        </div>
    )
}

export default HomePageHero