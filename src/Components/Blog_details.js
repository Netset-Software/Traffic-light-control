const Blog_details = () => {
    return(
        <>
        <div className="blog-single py-4">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-lg-8">
                        <article className="article">
                            {/* <div className="user_img_row">
                                <span>
                                    <img src={require('../images/user_img.jpg').default} alt="" />
                                    
                                </span>
                                <p className="ml-2">By <a href="/#">Lisa Allison</a> Oct22, 2021</p>
                            </div> */}
                            <div className="article-img">
                                <img src={require('../images/blogimg.jpg').default} title="" alt="" />
                            </div>
                            <div className="article-title mt-3">
                               
                                <h2>They Now Bade Farewell To The Kind But Unseen People</h2>
                                <div className="media">
                                    <div className="avatar">
                                    {/* <img src={require('').default} title="" alt="" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="article-content">
                                <p>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.</p>
                                <p>Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.</p>
                                <h4>What are my payment options?</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <p className="blockquote-footer">Someone famous in <cite title="Source Title">Dick Grayson</cite></p>
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </article>
                        
                    </div>
                    <div className="col-lg-4 blog-aside">
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
        </div>
        </>
    )
}
export default Blog_details;