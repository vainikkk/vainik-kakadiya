import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-md-6">
              <div className="menu_links">
                <ul>
                  <li>About</li>
                  <li>Services</li>
                  <li>Portfolio</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="socail_links">
                <ul>
                  <li> <i className="fa fa-facebook" /></li>
                  <li> <i className="fa fa-twitter" /></li>
                  <li> <i className="fa fa-instagram" /></li>
                  <li> <i className="fa fa-google-plus" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right_text">
        <div className="container">
          <div className="footer_border" />
          <div className="row">
            <div className="col-xl-12">
              <div className="copy_right text-center">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved <i className="fa fa-heart-o" aria-hidden="true" /> by <div style={{fontWeight:"500"}}>Vainik Kakadiya</div>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}
export default Footer;