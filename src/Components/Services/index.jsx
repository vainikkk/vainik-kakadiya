import React from 'react'
import BradcamArea from '../BradcamArea'

const Services = () => {
  return (
    <div>
      <BradcamArea title="Services" />
      <div className="service_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-65">
                <span>Service Provided</span>
                <h3>Build brands campaigns  <br />
                  &amp; digital projects</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-4">
              <div className="single_service text-center">
                <div className="icon">
                  <img src="img/svg_icon/1.svg" alt="" />
                </div>
                <h3>Graphic design</h3>
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
                <h3>Mobile app</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ service_area  */}
      <div className="project_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="projects_thumb">
                <img src="img/about/projects.png" alt="" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="projects_info">
                <h3>Colorlib Project</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus com odo viverra maecenas.</p>
                <div className="boxed-btn3">Browse Products</div>
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
  )
}
export default Services