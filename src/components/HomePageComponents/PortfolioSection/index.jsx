import React from 'react'
import "./style.scss"

function PortfolioSection() {
  return (
    <section className='portfolio'>
      <div className="leftSide">
        <h1>PORTFOLIO</h1>
        <div className="description">Far far away, behind the word mountains, far from the countries Vokalia</div>
        <div className="imagesCont">
          <div className="card number1">

            <div className="cardOverlay">
              <div className="icon"><i class="fas fa-search"></i></div>
              <div className="residence">
                Residence
              </div>
              <div className="workNumber">
                WORK 0
              </div>
            </div>
          </div>
          <div className="card number2">

            <div className="cardOverlay">
              <div className="icon"><i class="fas fa-search"></i></div>
              <div className="residence">
                Residence
              </div>
              <div className="workNumber">
                WORK 0
              </div>
            </div>
          </div>
          <div className="card number3">

            <div className="cardOverlay">
              <div className="icon"><i class="fas fa-search"></i></div>
              <div className="residence">
                Residence
              </div>
              <div className="workNumber">
                WORK 0
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection