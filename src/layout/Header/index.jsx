import React from 'react'
import "./style.scss"
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="closeButton">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div className="leftSide">

      </div>
      <div className="rightSide">
        <div className="content">
          <div className="headerTough">
            TOUGH
          </div>
          <div className="pageLinks">
            <div className="homePage">
              <div className="numberOfPage">
                01
              </div>
              <NavLink to={"/"}>Home</NavLink>
            </div>
            <div className="aboutPage">
              <div className="numberOfPage">
                02
              </div>
              About
            </div>
            <div className="servicesPage">
              <div className="numberOfPage">
                03
              </div>
              Services
            </div>
            <div className="pricingPage">
              <div className="numberOfPage">
                04
              </div>
              Pricing
            </div>
            <div className="portfolioPage">
              <div className="numberOfPage">
                05
              </div>
              Portfolio
            </div>
            <div className="blogPage">
              <div className="numberOfPage">
                06
              </div>
              Blog
            </div>
            <div className="contactPage">
              <div className="numberOfPage">
                07
              </div>
              Contact
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header