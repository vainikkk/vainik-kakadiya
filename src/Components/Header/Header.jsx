import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="header-area ">
        <div id="sticky-header" className="main-header-area">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-2">
                <div className="logo">
                  <Link to="/">
                    <h1 style={{color:"white"}}>Vainik</h1>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="main-menu  d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><Link className="active" to='/'>home</Link></li>
                      <li><Link to='/about'>About</Link></li>
                      <li><Link to='/services'>Services</Link></li>
                      <li><Link to="">blog <i className="ti-angle-down" /></Link>
                        <ul className="submenu">
                          <li><Link to='/blog'>blog</Link></li>
                          <li><Link to='/single-blog'>single-blog</Link></li>
                        </ul>
                      </li>
                      <li><Link to=''>pages <i className="ti-angle-down" /></Link>
                        <ul className="submenu">
                          <li><Link to='/portfolio'>Portfolio</Link></li>
                          <li><Link to='/elements'>elements</Link></li>
                        </ul>
                      </li>
                      <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="Appointment">
                  <div className="book_btn d-none d-lg-block">
                    <Link to='/contact'>Contact Me</Link>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header;