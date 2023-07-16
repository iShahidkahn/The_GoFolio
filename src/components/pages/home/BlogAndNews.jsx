import React from 'react';
import blogOne from '../../../dist/images/blogandnewsone.jpg';
import previousArrow from '../../../dist/icons/previous_white.svg';
import nextArrow from '../../../dist/icons/next_white.svg'

const BlogAndNews = () => {
    return (
        <div className="blog-carousel-wrapper">
            <div className="top-text text-center">
                <p>BLOG & NEWS</p>
                <h5 className='mb-4'>Stay informed with   <br />
                    our industry blog posts
                </h5>
            </div>
            <div
                id="carouselExampleCaptions2"
                className="carousel bn-carousel slide"
                data-bs-ride="false"
                style={{ height: '' }}
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex align-items-center h-100 justify-content-center">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src={blogOne} className='bImg' alt="" />
                                    </div>
                                    <div className='my-3'>
                                        <p style={{ fontSize: '12px' }} className='text-start mb-1'>
                                            By Benjamin Treece | April 20, 2023
                                        </p>
                                        <p className='text-start'>Within the construction industry as their overdraft
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 d-none d-md-block">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src={blogOne} className='bImg' alt="" />
                                    </div>
                                    <div className='my-3'>
                                        <p style={{ fontSize: '12px' }} className='text-start mb-1'>
                                            By Benjamin Treece | April 20, 2023
                                        </p>
                                        <p className='text-start'>Within the construction industry as their overdraft
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 d-none d-md-block">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src={blogOne} className='bImg' alt="" />
                                    </div>
                                    <div className='my-3'>
                                        <p style={{ fontSize: '12px' }} className='text-start mb-1'>
                                            By Benjamin Treece | April 20, 2023
                                        </p>
                                        <p className='text-start'>Within the construction industry as their overdraft
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex align-items-center h-100 justify-content-center">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src={blogOne} className='bImg' alt="" />
                                    </div>
                                    <div className='my-3'>
                                        <p style={{ fontSize: '12px' }} className='text-start mb-1'>
                                            By Benjamin Treece | April 20, 2023
                                        </p>
                                        <p className='text-start'>Within the construction industry as their overdraft
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 d-none d-md-block">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src={blogOne} className='bImg' alt="" />
                                    </div>
                                    <div className='my-3'>
                                        <p style={{ fontSize: '12px' }} className='text-start mb-1'>
                                            By Benjamin Treece | April 20, 2023
                                        </p>
                                        <p className='text-start'>Within the construction industry as their overdraft
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 d-none d-md-block">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src={blogOne} className='bImg' alt="" />
                                    </div>
                                    <div className='my-3'>
                                        <p style={{ fontSize: '12px' }} className='text-start mb-1'>
                                            By Benjamin Treece | April 20, 2023
                                        </p>
                                        <p className='text-start'>Within the construction industry as their overdraft
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex align-items-center h-100 justify-content-center">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src={blogOne} className='bImg' alt="" />
                                    </div>
                                    <div className='my-3'>
                                        <p style={{ fontSize: '12px' }} className='text-start mb-1'>
                                            By Benjamin Treece | April 20, 2023
                                        </p>
                                        <p className='text-start'>Within the construction industry as their overdraft
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 d-none d-md-block">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src={blogOne} className='bImg' alt="" />
                                    </div>
                                    <div className='my-3'>
                                        <p style={{ fontSize: '12px' }} className='text-start mb-1'>
                                            By Benjamin Treece | April 20, 2023
                                        </p>
                                        <p className='text-start'>Within the construction industry as their overdraft
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 d-none d-md-block">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src={blogOne} className='bImg' alt="" />
                                    </div>
                                    <div className='my-3'>
                                        <p style={{ fontSize: '12px' }} className='text-start mb-1'>
                                            By Benjamin Treece | April 20, 2023
                                        </p>
                                        <p className='text-start'>Within the construction industry as their overdraft
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev carou-icon"
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide="prev"
                >
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
                    <img src={previousArrow} alt="" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next carou-icon"
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide="next"
                >
                    <img src={nextArrow} alt="" />
                    {/* <span className="carousel-control-next-icon" aria-hidden="true" /> */}
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default BlogAndNews