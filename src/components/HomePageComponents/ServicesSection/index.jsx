import React, { useState } from 'react'
import "./style.scss"

function ServicesSection() {



    const [chosenCategory, setChosenCategory] = useState("interior")

    function ShowCategory() {
        if (chosenCategory === "interior") {
            return (
                <div className='choosenCategory'>
                    <div className="icon"><i class="fa-solid fa-clone"></i></div>
                    <h1>Interior Design</h1>
                    <div className="categoryInfo">
                        Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.
                    </div>
                    <div className="button">
                        <span>Learn More</span>
                    </div>
                </div>
            )
        }
        if (chosenCategory === "concept") {
            return (
                <div className='choosenCategory'>
                    <div className="icon"><i class="fa-solid fa-object-ungroup"></i></div>
                    <h1>Concept Design</h1>
                    <div className="categoryInfo">
                        Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.
                    </div>
                    <div className="button">
                        <span>Learn More</span>
                    </div>
                </div>
            )
        }
        if (chosenCategory === "residental") {
            return (
                <div className='choosenCategory'>
                    <div className="icon"><i class="fa-solid fa-city"></i></div>
                    <h1>Residental Design</h1>
                    <div className="categoryInfo">
                        Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.
                    </div>
                    <div className="button">
                        <span>Learn More</span>
                    </div>
                </div>
            )
        } if (chosenCategory === "hospitality") {
            return (
                <div className='choosenCategory'>
                    <div className="icon"><i class="fa-regular fa-face-smile"></i></div>
                    <h1>Hospitality Design</h1>
                    <div className="categoryInfo">
                        Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.
                    </div>
                    <div className="button">
                        <span>Learn More</span>
                    </div>
                </div>
            )
        }
    }

    return (
        <section className='services'>
            <div className="categoriesContainer">
                <div className="categoriesContent">
                    <h1>SERVICES</h1>
                    <div className="categoriesButton">
                        <div className="interior" onClick={() => setChosenCategory("interior")}>
                            <span><i class="fa-solid fa-clone"></i></span>  INTERIOR
                        </div>
                        <div className="concept" onClick={() => setChosenCategory("concept")}>
                            <span><i class="fa-solid fa-object-ungroup"></i></span>  CONCEPT
                        </div>
                        <div className="residental" onClick={() => setChosenCategory("residental")}>
                            <span><i class="fa-solid fa-city"></i></span>  RESIDENTAL
                        </div>
                        <div className="hospitality" onClick={() => setChosenCategory("hospitality")}>
                            <span><i class="fa-regular fa-face-smile"></i></span>  HOSPITALITY
                        </div>
                    </div>
                </div>
            </div>
            <div className="information" key={chosenCategory}>
                <ShowCategory />
            </div>
        </section>
    )
}

export default ServicesSection