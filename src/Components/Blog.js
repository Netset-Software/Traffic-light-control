import React from 'react'

const Blog = () => {
    return(
        <>
            <section className="blog_section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <h5 className="latest">Latest Blogs</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div>
                                        <a href="/blog_details">
                                            
                                            <div className="img_row shadow-sm">
                                                <img src={require('../images/blog1.jpg').default} alt="" />
                                            </div>
                                            
                                            <h3 className="blog_title">How to create a profile page using Appy</h3>
                                            <p className="blog_paragraph mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </a>
                                       
                                    </div>
                                    <hr />
                                </div>
                                
                                <div className="col-md-6 mb-3">
                                    <div>
                                        <a href="/blog_details">
                                            
                                            <div className="img_row shadow-sm">
                                                <img src={require('../images/blog2.jpg').default} alt="" />
                                            </div>
                                            
                                            <h3 className="blog_title">How to create a profile page using Appy</h3>
                                            <p className="blog_paragraph mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </a>
                                       
                                    </div>
                                    <hr />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div>
                                        <a href="/blog_details">
                                            
                                            <div className="img_row shadow-sm">
                                                <img src={require('../images/blog3.jpg').default} alt="" />
                                            </div>
                                            
                                            <h3 className="blog_title">How to create a profile page using Appy</h3>
                                            <p className="blog_paragraph mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </a>
                                       
                                    </div>
                                    
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div>
                                        <a href="/blog_details">
                                            
                                            <div className="img_row shadow-sm">
                                                <img src={require('../images/blog4.jpg').default} alt="" />
                                            </div>
                                            
                                            <h3 className="blog_title">How to create a profile page using Appy</h3>
                                            <p className="blog_paragraph mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="popular">
                                <h4>Popular Blogs</h4>
                                <ul className="p-0 mt-4">
                                    <li>
                                        <span>
                                            01
                                        </span>
                                        <div>
                                            <h6>How to get creative using geometric patterns</h6>
                                            
                                        </div>
                                    </li>
                                    <li>
                                        <span>
                                            02
                                        </span>
                                        <div>
                                            <h6>Create your branding strategy in 4 simple steps</h6>
                                            
                                        </div>
                                    </li>
                                    <li>
                                        <span>
                                            03
                                        </span>
                                        <div>
                                            <h6>Don’t miss Appy’s exclusive workshop with our CEO</h6>
                                            
                                        </div>
                                    </li>
                                    <li>
                                        <span>
                                            04
                                        </span>
                                        <div>
                                            <h6>How to get creative using geometric patterns</h6>
                                            
                                        </div>
                                    </li>
                                    <li>
                                        <span>
                                            05
                                        </span>
                                        <div>
                                            <h6>Create your branding strategy in 4 simple steps</h6>
                                            
                                        </div>
                                    </li>
                                    <li>
                                        <span>
                                            06
                                        </span>
                                        <div>
                                            <h6>Don’t miss Appy’s exclusive workshop with our CEO</h6>
                                            
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Blog;