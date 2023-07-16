import React from 'react';
import slideOne from '../../../dist/images/carousel-slide-one.svg';
import previousArrow from '../../../dist/icons/previous_theme_color.svg';
import nextArrow from '../../../dist/icons/next_theme_color.svg';

const HappyClientsCarousel = () => {
    return (
        <div className="carousel-wrapper">
            <div className="top-text text-center">
                <p>HAPPY CLIENTS</p>
                <h5>What our customers are saying</h5>
            </div>
            <div
                id="carouselExampleCaptions"
                className="carousel hc-carousel slide "
                data-bs-ride="false"
                style={{ height: '' }}
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex flex-column align-items-center h-100 justify-content-center">
                            <img src={slideOne} className="mx-auto" width={200} alt="..." />
                        </div>
                        <div className="corousel-text text-center">
                            <p>“ Vestibulum sollicitudin nunc in eros a justo facilisis rutrum. Aenean id <br className='d-none d-md-block' /> ullamcorper libero. Vestibulum imperdiet nibh tortor mauris condimentum nibh ”</p>
                            <h5 style={{marginTop:'40px'}}>MICHELLE TREECE</h5>
                            <p className='mt-3'>
                                JOB TITLE
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex flex-column align-items-center h-100 justify-content-center">
                            <img src={slideOne} className="mx-auto" width={200} alt="..." />
                        </div>
                        <div className="corousel-text text-center">
                            <p>“ Vestibulum sollicitudin nunc in eros a justo facilisis rutrum. Aenean id <br className='d-none d-md-block' />ullamcorper libero. Vestibulum imperdiet nibh tortor mauris condimentum nibh ”</p>
                            <h5 style={{marginTop:'40px'}}> EDWARD WITTEN</h5>
                            <p className='mt-3'>
                                JOB TITLE
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex flex-column align-items-center h-100 justify-content-center">
                            <img src={slideOne} className="mx-auto" width={200} alt="..." />
                        </div>
                        <div className="corousel-text text-center">
                            <p>“ Vestibulum sollicitudin nunc in eros a justo facilisis rutrum. Aenean id <br className='d-none d-md-block' /> ullamcorper libero. Vestibulum imperdiet nibh tortor mauris condimentum nibh ”</p>
                            <h5 style={{marginTop:'40px'}}>ALAN GUTH</h5>
                            <p className='mt-3'>
                                JOB TITLE
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                    style={{marginTop:'-80px'}}
                >
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true" /> */}
                   <img src={previousArrow} alt="" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                    style={{marginTop:'-80px'}}

                >
                    {/* <span className="carousel-control-next-icon" aria-hidden="true" /> */}
                   <img src={nextArrow} alt="" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default HappyClientsCarousel