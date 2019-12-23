import React from 'react'
import BradcamArea from '../BradcamArea'

const About = () => {
  return (
    <div>
      <div>
        <BradcamArea title="About Me" />
        {/* /bradcam_area  */}
        <div className="video_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="video_wrap">
                  <div className="thumb">
                    <img src="img/video/video_bg.png" alt="" />
                    <div className="video_icon">
                      <a className="popup-video" href="https://www.youtube.com/watch?v=1Prw90PRiJE"> <i className="fa fa-play" /> </a>
                    </div>
                  </div>
                  <div className="video_text text-center">
                    <p>Hi there, I am Milan. I am designer, artist, cat  <br />
                      lover and I would like to share with you some of <br /> 
                      my ideas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    <span className="counter">1 </span><span>+</span>
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
                  <button className="boxed-btn3">Start Talking</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About