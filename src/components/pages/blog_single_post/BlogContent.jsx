import React from 'react';
import constructionImg from '../../../dist/images/contruction.jpg';
import commentUser from '../../../dist/images/contruction.jpg';
import recentPost from '../../../dist/images/contruction.jpg';
import { Link } from 'react-router-dom';

const BlogContent = () => {
    return (
        <div className='pricing-container my-5'>
            <h1 className="heading my-0 text-uppercase">
                Headline goes here
            </h1>
            <p>By Benjamin Treece | April 20, 2023</p>
            <div className="row my-4">
                {/* Left Section */}
                <div className="col-md-9 blog-left-section pe-4">
                    <p>
                        Companies seem to dislike the term ‘turnaround consulting’ because it represents failure. The truth is that turnaround consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.
                        <br /> <br />
                        We help companies turnaround their non-profitable ventures into something that benefits them. Our specialty lies in understanding what makes a company special and what makes it tick.
                    </p>
                    <div className='blog-light-box'>
                        <p>
                            Consulting WP – we help companies assess their skills and choose a new direction which utilizes the talents of the team and resources most productively. <br /> <br />
                            CEO lacinia faucibus risus
                        </p>
                    </div>
                    <h6>Nam ac elit a ante commodo tristique</h6>
                    <p>
                        Many businesses, large and small, have a huge source of great ideas that can help them improve, innovate, and grow, and yet so many of these companies never think of using this amazing corporate asset. What is this highly valuable asset? Its own people. Says Morgan Fraud, the author of The Thinking Corporation, “Given that we are all capable of contributing new ideas, the question becomes how do you successfully generate, capture, process and implement ideas?” Becoming an organization capable of answering this question can benefit in a number of ways:
                        <ul >
                            <li>Work fewer hours & make money</li>
                            <li>Attract and retain quality, high-paying customers</li>
                            <li>Retain, high-paying customers</li>
                            <li>You’ll get more done in less time</li>
                        </ul>
                    </p>
                    <div className="d-flex">
                        <div className='d-flex'>
                            <h6 className='me-2' style={{ fontWeight: '500', fontSize: '9px' }}>TAGS:</h6>
                            <button className='tagbutton'>BUSINESS</button>
                            <button className='tagbutton'>CONSULTING</button>
                            <button className='tagbutton'>PLANNING</button>
                        </div>
                        <div className='d-flex'>
                            <h6 className='me-1' style={{ fontWeight: '500', fontSize: '9px' }}>SHARE:</h6>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                    <div className="border my-3"></div>
                    <div className="related-post">
                        <h6 className='me-1' style={{ fontWeight: '500', fontSize: '12px' }}>Related Posts</h6>
                        <div className="d-flex" style={{ justifyContent: 'start' }}>
                            <div className="card me-2" style={{ width: "15rem" }}>
                                <img className="card-img-top" src={constructionImg} alt='img' />
                                <div className="card-body">
                                    <h5 className="card-title">By Benjamin Treece | April 20, 2023</h5>
                                    <p className="card-text">
                                        Within the construction industry as their overdraft
                                    </p>
                                    <Link to="/blog_details" class="card-link">Read More <i class="fa-solid fa-arrow-right-long"></i></Link>
                                </div>
                            </div>
                            <div className="card ms-2" style={{ width: "15rem" }}>
                                <img className="card-img-top" src={constructionImg} alt='img' />
                                <div className="card-body">
                                    <h5 className="card-title">By Benjamin Treece | April 20, 2023</h5>
                                    <p className="card-text">
                                        Within the construction industry as their overdraft
                                    </p>
                                    <Link to="/blog_details" class="card-link">Read More <i class="fa-solid fa-arrow-right-long"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h6 className='me-1 my-3' style={{ fontWeight: '500', fontSize: '12px' }}>02 Comment</h6>
                    <div className="d-flex blog-comment">
                        <div>
                            <div class="circle me-3 mt-2">
                                <img src={commentUser} alt="" />
                            </div>
                        </div>
                        <div className="text">
                            <p>
                                <strong style={{ color: '#3ca6a6' }}>Vestibulum imperdiet nibh vel magna</strong> <br />
                                Ed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br />
                                <div className="d-flex jusitfffy-contents-space-between">
                                    <p className='mt-2' style={{ color: '#7d7d7d', fontSize: '10px', fontWeight: 'bold' }}>AUGUST 6, 2019  |  BY ADMIN</p>
                                    <p className='my-1 me-5 reply'>Reply<i class="fa-solid fa-arrow-right"></i></p>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex blog-comment mt-3">
                        <div>
                            <div class="circle me-3 mt-2">
                                <img src={commentUser} alt="" />
                            </div>
                        </div>
                        <div className="text">
                            <p>
                                <strong style={{ color: '#3ca6a6' }}>Vestibulum imperdiet nibh vel magna</strong> <br />
                                Ed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br />
                                <div className="d-flex jusitfffy-contents-space-between">
                                    <p className='mt-2' style={{ color: '#7d7d7d', fontSize: '10px', fontWeight: 'bold' }}>AUGUST 6, 2019  |  BY ADMIN</p>
                                    <p className='my-1 me-5 reply'>Reply<i class="fa-solid fa-arrow-right"></i></p>
                                </div>
                            </p>
                        </div>
                    </div>
                    <h6 className='me-1' style={{ fontWeight: '500', fontSize: '12px' }}>Leave a comment</h6>
                    <div className="form-reply">
                        <div className="d-flex">
                            <input className="form-control me-2 mt-2 mb-3" type="email" placeholder="Email" aria-label="email" />
                            <input className="form-control ms-2 mt-2 mb-3" type="text" placeholder="Phone number" aria-label="number" />
                        </div>
                        <input className="form-control mb-3" type="text" placeholder="Name" aria-label="Name" />
                        <textarea className="form-control" placeholder='Your message' id="exampleFormControlTextarea1" rows="5"></textarea>
                        <button className='btn mt-3'>SEND</button>
                    </div>
                </div>
                {/* ----------------------------- Right Section --------------------------- */}
                <div className="col-md-3 col-12  blog-right-section">
                    <input className="form-control mb-4" type="seacrh" placeholder="Seacrh..." aria-label="seacrh" />
                    <div style={{ border: '1px solid #ebebeb' }}></div>
                    <div className="my-4">
                        <p className='right-blog-caption'>
                            Categories
                        </p>
                        <div className="bolg-categories ms-3">
                            <p className='wrapper mb-0' style={{ color: '#3ca6a6', fontWeight: '400', lineHeight:'23px', cursor:'pointer' }}>
                                Strategic planning <br />
                                Bonds & Commodities  <br />
                                Turnaround Consulting  <br />
                                Trades & Stocks  <br />
                                Audit & Assurance  <br />
                                Business Opportunities  <br />
                            </p>
                        </div>
                    </div>
                    <div style={{ border: '1px solid #ebebeb' }}></div>
                    <div className="my-4">
                        <p className='right-blog-caption'>
                            Recent Post
                        </p>
                        <div className='bg-danger' style={{ width: '100%', height: '150px', overflow: 'hidden' }}>
                            <img src={recentPost} alt="" style={{ width: '100%' }} />
                        </div>
                        <p className='mb-0 mt-2' style={{ color: '#7d7d7d', fontFamily: 'sans-serif', fontSize: '11px' }}>BY JONT HENRRY | AUGUST 6, 2019 </p>
                        <p className='mt-2 mb-0' style={{ color: '#3ca6a6', fontFamily: 'sans-serif', cursor:'pointer' }}>Within the construction industry as their overdraft
                        </p>
                        <div className='bg-danger mt-4' style={{ width: '100%', height: '150px', overflow: 'hidden' }}>
                            <img src={recentPost} alt="" style={{ width: '100%' }} />
                        </div>
                        <p className='mb-0 mt-2' style={{ color: '#7d7d7d', fontFamily: 'sans-serif', fontSize: '11px' }}>BY JONT HENRRY | AUGUST 6, 2019 </p>
                        <p className='mt-2 mb-0' style={{ color: '#3ca6a6', fontFamily: 'sans-serif', cursor:'pointer' }}>Within the construction industry as their overdraft
                        </p>
                    </div>
                    <div style={{ border: '1px solid #ebebeb' }}></div>
                    <div className="my-4">
                        <p className='right-blog-caption'>
                            Popular Tags
                        </p>
                        <div className='d-block blog-tags'>
                            <button>ADVISORS</button>
                            <button>BENCHMARKS</button>
                            <button>IDEAS</button>
                            <button className='active'>MARKET</button>
                            <button>PLANNING</button>
                            <button>CONSULTING</button>
                            <button>ONLINE SERVICES</button>
                            <button>BUSINESS</button>
                            <button>FINANCE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogContent