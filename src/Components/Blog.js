import React, { useState, useEffect } from 'react'
import Paginate from './common/Pagination';
import { userService } from '../services';
import Loader from './common/Loader'
import { toast } from 'react-toastify';
import { config } from '../config/config'
import Header from './common/Header'
import Footer from './common/Footer'

const Blog = () => {

    const [pageNo, setPageNo] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [latestBlogs, setLatestBlogs] = useState([]);
    const [popularBlogs, setPopularBlogs] = useState([]);


    useEffect(() => {
        getBlogs(0);
    }, []);

    function getBlogs(page) {
        setIsLoading(true);
        userService.getBlogs(page).then((response) => {
            setIsLoading(false);
            if (response.data.status == 200) {
                let data = response.data
                setLatestBlogs(data.latestBlogs);
                setPopularBlogs(data.popularBlogs);
                setTotalCount(data.totalPages);
                // setBlogs(quizesData);
            } else {
                setLatestBlogs([]);
                setPopularBlogs([]);
                setTotalCount(0);
                setIsLoading(false);
                toast.error("Some Error Occur");
            }
        }).catch((error) => {
            setIsLoading(false);
            setLatestBlogs([]);
            setPopularBlogs([]);
            setTotalCount(0);
            console.log("error ", error);
        });
    }



    function handlePageChange(page) {
        setPageNo(page);
        getBlogs(page);
    }

    return (
        <>
        <Header/>
            {isLoading && <Loader />}
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
                                {latestBlogs.length > 0 ? latestBlogs.map((blog) => {
                                    return (<div className="col-md-6 mb-3">
                                        <div>
                                            <a href={"/blog_details?id=" + blog._id}>

                                                <div className="img_row shadow-sm">
                                                    <img src={config.imageUrl + blog.image} alt="" />
                                                </div>
                                                <h3 className="blog_title">{blog.title}</h3>
                                                <p className="blog_paragraph mt-2">{blog.short_description}</p>
                                            </a>
                                        </div>
                                        <hr />
                                    </div>)
                                }) : <p className="no-blog" >{!isLoading ? "No Latest-Blogs Found" : ''}</p>}
                            </div>
                            <div style={{ width: '100%' }}>
                                <Paginate count={totalCount} activePage={pageNo} handlePageChange={(page) => handlePageChange(page)} perPageEntries={perPage} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="popular">
                                <h4>Popular Blogs</h4>
                                <ul className="p-0 mt-4">
                                    {popularBlogs.length > 0 ? popularBlogs.map((blog, i) => {
                                        return (<li>
                                           <a href={"/blog_details?id=" + blog._id}>
                                            <span>{ (i < 10 ? '0' : '')+(i + 1)}</span>
                                            <div><h6>{blog.title}</h6></div></a>
                                        </li>)
                                    }) :
                                        <li className="no-blog">No Popular-Blogs Found</li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Blog;