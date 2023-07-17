import React from 'react';
import constructionImg from '../../../dist/images/contruction.jpg';
import { Link } from 'react-router-dom';



const AllPosts = () => {
    const cardData = [
        {
            title: 'By Benjamin Treece | April 20, 2023',
            text: 'Within the construction industry as their overdraft',
            link: '/blog_details',
        },
        {
            title: 'By Benjamin Treece | April 20, 2023',
            text: 'Within the construction industry as their overdraft',
            link: '/blog_details',
        },
        {
            title: 'By Benjamin Treece | April 20, 2023',
            text: 'Within the construction industry as their overdraft',
            link: '/blog_details',
        },
        {
            title: 'By Benjamin Treece | April 20, 2023',
            text: 'Within the construction industry as their overdraft',
            link: '/blog_details',
        },
        {
            title: 'By Benjamin Treece | April 20, 2023',
            text: 'Within the construction industry as their overdraft',
            link: '/blog_details',
        },
        {
            title: 'By Benjamin Treece | April 20, 2023',
            text: 'Within the construction industry as their overdraft',
            link: '/blog_details',
        },
        // Add more card data objects here...
    ];
    return (
        <div className="all-posts">
            <h1 className='text-center heading-text'>Blog</h1>
            <ul>
                <li><Link to='/blog' className='active-blog'>BLOG</Link></li>
                <li><Link to='/business'>BUSINESS</Link></li>
                <li><Link to='/market'>MARKET</Link></li>
                <li><Link to='/consulting'>CONSULTING</Link></li>
                <li><Link to='/lifestyle'>LIFESTYLE</Link></li>
            </ul>
            <div className="row">
                {cardData.slice(0, 10).map((card, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card" style={{ width: '18rem', fontSize: '10px' }}>
                            <img className="card-img-top" src={constructionImg} height={170} style={{ objectFit: 'cover' }} alt="img" />
                            <div className="card-body">
                                <p className="card-title">{card.title}</p>
                                <p className="card-text" style={{ fontSize: '16px', color: '#012e40' }}>{card.text}</p>
                                <Link to={card.link} className="card-link">
                                    Read More <i className="fa-solid fa-arrow-right-long ms-1"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="col-md-12 text-center" style={{ color: '#3ca6a6' }}>
                    LOADING MORE...
                </div>
            </div>
        </div>
    );
};

export default AllPosts