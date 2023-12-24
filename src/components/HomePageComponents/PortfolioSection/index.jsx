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
            <img src="/src/assets/images/image_3.jpg.webp" alt="" />
            <div className="cardOverlay">
              <div className="icon"><i class="fas fa-search"></i></div>
              <div className="text">
                <div className="residence">
                  Residence
                </div>
                <div className="workNumber">
                  WORK 01
                </div>
              </div>
            </div>
          </div>
          <div className="card number2">
            <img src="/src/assets/images/image_2.jpg.webp" alt="" />
            <div className="cardOverlay">
              <div className="icon"><i class="fas fa-search"></i></div>
              <div className="text">
                <div className="residence">
                  Residence
                </div>
                <div className="workNumber">
                  WORK 02
                </div>
              </div>
            </div>
          </div>
          <div className="card number3">
            <img src="/src/assets/images/image_9.jpg.webp" alt="" />
            <div className="cardOverlay">
              <div className="icon"><i class="fas fa-search"></i></div>
              <div className="text">
                <div className="residence">
                  Residence
                </div>
                <div className="workNumber">
                  WORK 03
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="imagesCont">
          <div className="card number1">
            <img src="/src/assets/images/image_1.jpg.webp" alt="" />
            <div className="cardOverlay">
              <div className="icon"><i class="fas fa-search"></i></div>
              <div className="text">
                <div className="residence">
                  Residence
                </div>
                <div className="workNumber">
                  WORK 04
                </div>
              </div>
            </div>
          </div>
          <div className="secondRow">
            <div className="card number2">
              <img src="/src/assets/images/image_5.jpg.webp" alt="" />
              <div className="cardOverlay">
                <div className="icon"><i class="fas fa-search"></i></div>
                <div className="text">
                  <div className="residence">
                    Residence
                  </div>
                  <div className="workNumber">
                    WORK 05
                  </div>
                </div>
              </div>
            </div>
            <div className="card number3">
              <img src="/src/assets/images/image_6.jpg.webp" alt="" />
              <div className="cardOverlay">
                <div className="icon"><i class="fas fa-search"></i></div>
                <div className="text">
                  <div className="residence">
                    Residence
                  </div>
                  <div className="workNumber">
                    WORK 06
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="thirdRow">
            <div className="card number4">
              <img src="/src/assets/images/image_7.jpg.webp" alt="" />
              <div className="cardOverlay">
                <div className="icon"><i class="fas fa-search"></i></div>
                <div className="text">
                  <div className="residence">
                    Residence
                  </div>
                  <div className="workNumber">
                    WORK 07
                  </div>
                </div>
              </div>
            </div><div className="card number5">
              <img src="/src/assets/images/image_4.jpg.webp" alt="" />
              <div className="cardOverlay">
                <div className="icon"><i class="fas fa-search"></i></div>
                <div className="text">
                  <div className="residence">
                    Residence
                  </div>
                  <div className="workNumber">
                    WORK 08
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection