import React from 'react'
import BradcamArea from "../BradcamArea"

const Portfolio = () => {
  return (
    <div>
      <div>
        <BradcamArea title="Portfolio" />
        <div className="portfolio_image_area dec_margin">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-md-5">
                <div className="single_Portfolio">
                  <div className="portfolio_thumb">
                    <img src="img/portfolio/1.png" alt="" />
                  </div>
                  <img src="img/portfolio/1.png" alt="" className="popup popup-image" />
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
                  <div className="popup popup-image"></div>
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
                  <div className="popup popup-image"></div>
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
                  <div className="popup popup-image"></div>
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
                  <div className="popup popup-image"></div>
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
  )
}
export default Portfolio