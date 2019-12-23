import React from 'react'

const Home = () => {
  return (
    <div>
      <div>
        <div className="slider_area">
          <div className="single_slider  d-flex align-items-center slider_bg_1">
          <div className="shap_pattern d-none d-lg-block">
            <img src="img/about/grid.png" alt="" />
          </div>
          <div className="social_links">
            <ul>
              <li><i className="fa fa-facebook" /></li>
              <li><i className="fa fa-twitter" /></li>
              <li><i className="fa fa-instagram" /></li>
            </ul>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12">
                <div className="slider_text text-center">
                  <h3>
                    Hello This is Vainik
                  </h3>
                  <span>Enterprise FE development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="service_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section_title text-center mb-65">
                  <span>Service Provided</span>
                  <h3>Build React App  <br />
                    &amp;  projects</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-4">
                <div className="single_service text-center">
                  <div className="icon">
                    <img src="img/svg_icon/1.svg" alt="" />
                  </div>
                  <h3>Build Android App</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                </div>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="single_service text-center">
                  <div className="icon">
                    <img src="img/svg_icon/2.svg" alt="" />
                  </div>
                  <h3>Web design</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                </div>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="single_service text-center">
                  <div className="icon">
                    <img src="img/svg_icon/3.svg" alt="" />
                  </div>
                  <h3>Create small web-App</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ service_area  */}
        {/* portfolio_area */}
        <div className="portfolio_area portfolio_bg_1">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section_title white_text text-center">
                  <span>Portfolios</span>
                  <h3>Some of my awesome <br />
                    stuffs here</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ portfolio_area */}
        {/* portfolio_image_area  */}
        <div className="portfolio_image_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-md-5">
                <div className="single_Portfolio">
                  <div className="portfolio_thumb">
                    <img src="img/portfolio/1.png" alt="" />
                  </div>
                  <div className="popup popup-image">
                    <img src="img/portfolio/1.png"  alt="" />
                  </div>
                  <div className="portfolio_hover">
                    <div className="title">
                      <h3>Product Design</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-md-7">
                <div className="single_Portfolio">
                  <div className="portfolio_thumb">
                    <img src="img/portfolio/2.png" alt="" />
                  </div>
                  <div  className="popup popup-image" >
                    <img src="img/portfolio/2.png" alt=""/>
                  </div>
                 
                  <div className="portfolio_hover">
                    <div className="title">
                      <h3>Product Design</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="single_Portfolio">
                  <div className="portfolio_thumb">
                    <img src="img/portfolio/3.png" alt="" />
                  </div>
                  <img src="img/portfolio/3.png" alt="" className="popup popup-image" />
                  <div className="portfolio_hover">
                    <div className="title">
                      <h3>Product Design</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="single_Portfolio">
                  <div className="portfolio_thumb">
                    <img src="img/portfolio/4.png" alt="" />
                  </div>
                  <img src="img/portfolio/4.png" alt="" className="popup popup-image" />
                  <div className="portfolio_hover">
                    <div className="title">
                      <h3>Product Design</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-12 col-lg-4">
                <div className="single_Portfolio">
                  <div className="portfolio_thumb">
                    <img src="img/portfolio/5.png" alt="" />
                  </div>
                  <img src="img/portfolio/5.png" alt="" className="popup popup-image" />
                  <div className="portfolio_hover">
                    <div className="title">
                      <h3>Product Design</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="more_portfolio text-center">
                  <div className="line_btn">More Folio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ portfolio_image_area  */}
        {/* about_me  */}
        <div className="about_me">
          <div className="about_large_title d-none d-lg-block">
            About
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-6">
                <div className="about_e_details">
                  <h3>About me</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus com odo viverra maecenas.</p>
                  <div className="download_cv">
                    <div className="boxed-btn3">Download CV</div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="about_img">
                  <div className="color_pattern d-none d-lg-block">
                    <img src="img/about/color_grid.png" alt="" />
                  </div>
                  <div className="my_Pic">
                    <img src="img/about/about.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ about_me  */}
        <div className="counter_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-4">
                <div className="single_counter text-center">
                  <h3>
                    <span className="counter">4 </span><span>+</span>
                  </h3>
                  <p>Total Projects</p>
                </div>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="single_counter text-center">
                  <h3>
                    <span className="counter">0 </span>
                  </h3>
                  <p>On Going Projects</p>
                </div>
              </div>
              <div className="col-xl-4 col-md-4">
                <div className="single_counter text-center">
                  <h3>
                    <span className="counter">95 </span> <span>%</span>
                  </h3>
                  <p>Job Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial_area  */}
        <div className="testimonial_area ">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="testmonial_active owl-carousel">
                  <div className="single_carousel">
                    <div className="single_testmonial text-center">
                      <div className="quote">
                        <img src="img/testmonial/quote.svg" alt="" />
                      </div>
                      <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br /> 
                        sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br />
                        Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                      <div className="testmonial_author">
                        <div className="thumb">
                          <img src="img/testmonial/thumb.png" alt="" />
                        </div>
                        <h3>Robert Thomson</h3>
                        <span>Business Owner</span>
                      </div>
                    </div>
                  </div>
                  <div className="single_carousel">
                    <div className="single_testmonial text-center">
                      <div className="quote">
                        <img src="img/testmonial/quote.svg" alt="" />
                      </div>
                      <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br /> 
                        sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br />
                        Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                      <div className="testmonial_author">
                        <div className="thumb">
                          <img src="img/testmonial/thumb.png" alt="" />
                        </div>
                        <h3>Robert Thomson</h3>
                        <span>Business Owner</span>
                      </div>
                    </div>
                  </div>
                  <div className="single_carousel">
                    <div className="single_testmonial text-center">
                      <div className="quote">
                        <img src="img/testmonial/quote.svg" alt="" />
                      </div>
                      <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br /> 
                        sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br />
                        Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                      <div className="testmonial_author">
                        <div className="thumb">
                          <img src="img/testmonial/thumb.png" alt="" />
                        </div>
                        <h3>Robert Thomson</h3>
                        <span>Business Owner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /testimonial_area  */}
        <div className="discuss_projects">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="project_text text-center">
                  <h3>Let’s discuss for a project</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                  <div className="boxed-btn3">Start Talking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Home