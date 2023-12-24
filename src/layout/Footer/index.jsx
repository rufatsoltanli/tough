import React from 'react'
import "./style.scss"

function Footer() {
  return (
    <footer>
      <div className="footerCont">
        <div className="socialMedias">
          <div className="facebook">
            <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div className="twitter">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="instagram">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="contactUs">
          <div className="header">
            Contact Us
          </div>
          <div className="email">
            info@email.com
          </div>
        </div>
        <div className="copyright">
          Copyright ©2023 All rights reserved | This site made by Rufat Soltanly
        </div>
      </div>
    </footer>
  )
}

export default Footer