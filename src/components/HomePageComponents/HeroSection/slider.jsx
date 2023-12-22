import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./style.scss"

function HeroSlider() {
    return (
        <Splide aria-label="My Favorite Images"
            options={{
                type: 'loop',
                perPage: 3,
                focus: 'center',
                height: 800,
                focus: 'center',
                arrows: false,
            }}>

            <SplideSlide>
                <div className='sliderCard1'>
                    <div className="overlay">

                    </div>
                    <div className="cardBuildingName">
                        #01 EXTERIOR BUILDING
                    </div>
                </div>
            </SplideSlide>

            <SplideSlide>
                <div className='sliderCard2'>
                    <div className="overlay">

                    </div>
                    <div className="cardBuildingName">
                        #02 AMERICAN BUILDING
                    </div>
                </div>
            </SplideSlide>

            <SplideSlide>
                <div className='sliderCard3'>
                    <div className="overlay">

                    </div>
                    <div className="cardBuildingName">
                        #03 LOUIE'S RESIDENCES
                    </div>
                </div>
            </SplideSlide>

            <SplideSlide>
                <div className='sliderCard4'>
                    <div className="overlay">

                    </div>
                    <div className="cardBuildingName">
                        #04 BUSINESS BUILDING
                    </div>
                </div>
            </SplideSlide>
        </Splide >
    )
}

export default HeroSlider