import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'

function Slide() {
    return (
        <>
            <Splide aria-label="My Favorite Images"
                options={{
                    type: 'loop',
                    drag: 'free',
                    perPage: 2,
                    snap: true,
                    arrows: false,
                    width: 700,
                }}>
                <SplideSlide>
                    <div className="card">
                        <div className="image">
                            <img src="/src/assets/images/person_1.jpg.webp" alt="" />
                            <div className="icon"><i class="fa-solid fa-quote-right"></i></div>
                        </div>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsum.</div>
                        <div className="personInfo">
                            <div className="name">Dennis Green</div>
                            <div className="proffesion">Architect</div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="card">
                        <div className="image">
                            <img src="/src/assets/images/person_2.jpg.webp" alt="" />
                            <div className="icon"><i class="fa-solid fa-quote-right"></i></div>
                        </div>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsum.</div>

                        <div className="personInfo">
                            <div className="name">Dennis Green</div>
                            <div className="proffesion">Architect</div>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="card">
                        <div className="image">
                            <img src="/src/assets/images/person_3.jpg.webp" alt="" />
                            <div className="icon"><i class="fa-solid fa-quote-right"></i></div>
                        </div>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsum.</div>

                        <div className="personInfo">
                            <div className="name">Dennis Green</div>
                            <div className="proffesion">Architect</div>
                        </div>
                    </div>
                </SplideSlide>
            </Splide></>
    )
}

export default Slide
