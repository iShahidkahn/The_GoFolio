import React from 'react';
import heroImg from '../../../dist/images/blog2.jpg'

const BlogHero = () => {
    return (
        <div className="blog-hero">
            <div className="heading">
                <h1 className='mt-3 text-center'>Blog</h1>
            </div>
            <div className="image">
                <img src={heroImg} alt="" />
            </div>
        </div>
    )
}

export default BlogHero