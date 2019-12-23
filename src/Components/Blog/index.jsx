import React from 'react'
import BradcamArea from '../BradcamArea'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <div>
        <BradcamArea title="Blog" />
        {/* /bradcam_area  */}
        {/*================Blog Area =================*/}
        <section className="blog_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="blog_left_sidebar">
                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img className="card-img rounded-0" src="img/blog/single_blog_1.png" alt="" />
                      <div className="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </div>
                    </div>
                    <div className="blog_details">
                      <Link className="d-inline-block" to='/single-blog'>
                        <h2>Google inks pact for new 35-storey office</h2>
                      </Link>
                      <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                        he earth it first without heaven in place seed it second morning saying.</p>
                      <ul className="blog-info-link">
                        <li><i className="fa fa-user" /> Travel, Lifestyle</li>
                        <li><i className="fa fa-comments" /> 03 Comments</li>
                      </ul>
                    </div>
                  </article>
                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img className="card-img rounded-0" src="img/blog/single_blog_2.png" alt="" />
                      <div className="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </div>
                    </div>
                    <div className="blog_details">
                      <Link className="d-inline-block" to="/single-blog">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </Link>
                      <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                        he earth it first without heaven in place seed it second morning saying.</p>
                      <ul className="blog-info-link">
                        <li><i className="fa fa-user" /> Travel, Lifestyle</li>
                        <li><i className="fa fa-comments" /> 03 Comments</li>
                      </ul>
                    </div>
                  </article>
                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img className="card-img rounded-0" src="img/blog/single_blog_3.png" alt="" />
                      <div className="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </div>
                    </div>
                    <div className="blog_details">
                      <Link className="d-inline-block" to="/single-blog">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </Link>
                      <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                        he earth it first without heaven in place seed it second morning saying.</p>
                      <ul className="blog-info-link">
                        <li><i className="fa fa-user" /> Travel, Lifestyle</li>
                        <li><i className="fa fa-comments" /> 03 Comments</li>
                      </ul>
                    </div>
                  </article>
                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img className="card-img rounded-0" src="img/blog/single_blog_4.png" alt="" />
                      <div className="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </div>
                    </div>
                    <div className="blog_details">
                      <Link className="d-inline-block" to='/single-blog'>
                        <h2>Google inks pact for new 35-storey office</h2>
                      </Link>
                      <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                        he earth it first without heaven in place seed it second morning saying.</p>
                      <ul className="blog-info-link">
                        <li><i className="fa fa-user" /> Travel, Lifestyle</li>
                        <li><i className="fa fa-comments" /> 03 Comments</li>
                      </ul>
                    </div>
                  </article>
                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img className="card-img rounded-0" src="img/blog/single_blog_5.png" alt="" />
                      <div className="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </div>
                    </div>
                    <div className="blog_details">
                      <Link className="d-inline-block" to='/single-blog'>
                        <h2>Google inks pact for new 35-storey office</h2>
                      </Link>
                      <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                        he earth it first without heaven in place seed it second morning saying.</p>
                      <ul className="blog-info-link">
                        <li><i className="fa fa-user" /> Travel, Lifestyle</li>
                        <li><i className="fa fa-comments" /> 03 Comments</li>
                      </ul>
                    </div>
                  </article>
                  <nav className="blog-pagination justify-content-center d-flex">
                    <ul className="pagination">
                      <li className="page-item">
                        <div className="page-link" aria-label="Previous">
                          <i className="ti-angle-left" />
                        </div>
                      </li>
                      <li className="page-item">
                        <div className="page-link">1</div>
                      </li>
                      <li className="page-item active">
                        <div className="page-link">2</div>
                      </li>
                      <li className="page-item">
                        <div className="page-link" aria-label="Next">
                          <i className="ti-angle-right" />
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  <aside className="single_sidebar_widget search_widget">
                    <form action="#">
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <input type="text" className="form-control" placeholder="Search Keyword" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'" />
                          <div className="input-group-append">
                            <button className="btn" type="button"><i className="ti-search" /></button>
                          </div>
                        </div>
                      </div>
                      <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Search</button>
                    </form>
                  </aside>
                  <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Category</h4>
                    <ul className="list cat-list">
                      <li>
                        <div className="d-flex">
                          <p>Resaurant food</p>
                          <p>(37)</p>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <p>Travel news</p>
                          <p>(10)</p>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <p>Modern technology</p>
                          <p>(03)</p>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <p>Product</p>
                          <p>(11)</p>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <p>Inspiration</p>
                          <p>21</p>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <p>Health Care (21)</p>
                          <p>09</p>
                        </div>
                      </li>
                    </ul>
                  </aside>
                  <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Recent Post</h3>
                    <div className="media post_item">
                      <img src="img/post/post_1.png" alt="post" />
                      <div className="media-body">
                        <Link to='/single-blog'>
                          <h3>From life was you fish...</h3>
                        </Link>
                        <p>January 12, 2019</p>
                      </div>
                    </div>
                    <div className="media post_item">
                      <img src="img/post/post_2.png" alt="post" />
                      <div className="media-body">
                        <Link to='/single-blog'>
                          <h3>The Amazing Hubble</h3>
                        </Link>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                    <div className="media post_item">
                      <img src="img/post/post_3.png" alt="post" />
                      <div className="media-body">
                        <Link to='/single-blog'>
                          <h3>Astronomy Or Astrology</h3>
                        </Link>
                        <p>03 Hours ago</p>
                      </div>
                    </div>
                    <div className="media post_item">
                      <img src="img/post/post_4.png" alt="post" />
                      <div className="media-body">
                        <Link to='/single-blog'>
                          <h3>Asteroids telescope</h3>
                        </Link>
                        <p>01 Hours ago</p>
                      </div>
                    </div>
                  </aside>
                  <aside className="single_sidebar_widget tag_cloud_widget">
                    <h4 className="widget_title">Tag Clouds</h4>
                    <ul className="list">
                      <li>
                        project
                      </li>
                      <li>
                        love
                      </li>
                      <li>
                        technology
                      </li>
                      <li>
                        travel
                      </li>
                      <li>
                        restaurant
                      </li>
                      <li>
                        life style
                      </li>
                      <li>
                        design
                      </li>
                      <li>
                        illustration
                      </li>
                    </ul>
                  </aside>
                  <aside className="single_sidebar_widget instagram_feeds">
                    <h4 className="widget_title">Instagram Feeds</h4>
                    <ul className="instagram_row flex-wrap">
                      <li>
                          <img className="img-fluid" src="img/post/post_5.png" alt="" />
                      </li>
                      <li>
                          <img className="img-fluid" src="img/post/post_6.png" alt="" />
                      </li>
                      <li>
                          <img className="img-fluid" src="img/post/post_7.png" alt="" />
                        
                      </li>
                      <li>
                          <img className="img-fluid" src="img/post/post_8.png" alt="" />
                      </li>
                      <li>
                          <img className="img-fluid" src="img/post/post_9.png" alt="" />
                      </li>
                      <li>
                          <img className="img-fluid" src="img/post/post_10.png" alt="" />
                      </li>
                    </ul>
                  </aside>
                  <aside className="single_sidebar_widget newsletter_widget">
                    <h4 className="widget_title">Newsletter</h4>
                    <form action="#">
                      <div className="form-group">
                        <input type="email" className="form-control" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email'" placeholder="Enter email" required />
                      </div>
                      <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Subscribe</button>
                    </form>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}
export default Blog;