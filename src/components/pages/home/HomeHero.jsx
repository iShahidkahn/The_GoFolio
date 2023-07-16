import React from 'react';
import homeHero from '../../../dist/images/homeHero.png'

const HomeHero = () => {
    return (
            <div className="home-hero">
                <div className="home-hero-inner-box">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 col-md-6">
                                    <div className="welcome-text">
                                        <h2>
                                            Welcome to <br />
                                            the GoFolio
                                        </h2>
                                        <p>
                                            A comprehensive portfolio data calculator that will provide
                                            insights into your portfolio’s most important statistical metrics.
                                        </p>
                                        <button className='btn mt-4'>WATCH DEMO</button>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="welcome-thumbnail">
                                        <img
                                            src={homeHero}
                                            alt=""
                                            width={500}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>          
    )
}

export default HomeHero