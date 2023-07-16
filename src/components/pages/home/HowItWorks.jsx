import React from 'react';
import how1 from '../../../dist/icons/ICONS_WHITE_STOCK.svg';
import sideCurve from '../../../dist/icons/sideCurve.svg'

const HowItWorks = () => {
    return (
        <div className='how-it-works text-center'>
            <div className="top-text">
                <p className='mb-2 mt-4'>HOW IT WORKS</p>
                <h2>Built for the  <br />
                    average consumer
                </h2>
                <p className='mt-2'>Until now, the only way you could calculate a risk analysis tailored to your portfolio was to request a report using
                    expensive proprietary software through your financial advisor. We built something easy to use on your own that can
                    help you visualize your relationship between risk and reward, you can finally say goodbye to that pesky question,
                    “why is the market beating my portfolio?”
                </p>
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="how-icons">
                        <div className="icon">
                            <img src={how1} alt="" width={45} />
                        </div>
                    </div>
                    <p className='mb-0 py-2 mt-2'>
                        COLLECT DATA
                    </p>
                    <p>
                        Gofolio uses historical price data from as far back as 10 years to generate the results for your portfolio.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <div className="how-icons">
                        <div className="icon">
                            <img src={how1} alt="" width={45} />
                        </div>
                    </div>
                    <p className='mb-0 py-2 mt-2'>
                        COLLECT DATA
                    </p>
                    <p>
                        Gofolio uses historical price data from as far back as 10 years to generate the results for your portfolio.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <div className="how-icons">
                        <div className="icon">
                            <img src={how1} alt="" width={45} />
                        </div>
                    </div>
                    <p className='mb-0 py-2 mt-2'>
                        COLLECT DATA
                    </p>
                    <p>
                        Gofolio uses historical price data from as far back as 10 years to generate the results for your portfolio.
                    </p>
                </div>
            </div>
            <div className="border-box">
            </div>
            <div className="top-text">             
                <h2>It’s simple to get started
                </h2>           
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="how-icons">
                        <div className="icon">
                            <img src={how1} alt="" width={45} />
                        </div>
                    </div>
                    <p className='mb-0 py-2 mt-2'>
                        COLLECT DATA
                    </p>
                    <p>
                        Gofolio uses historical price data from as far back as 10 years to generate the results for your portfolio.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <div className="how-icons">
                        <div className="icon">
                            <img src={how1} alt="" width={45} />
                        </div>
                    </div>
                    <p className='mb-0 py-2 mt-2'>
                        COLLECT DATA
                    </p>
                    <p>
                        Gofolio uses historical price data from as far back as 10 years to generate the results for your portfolio.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <div className="how-icons">
                        <div className="icon">
                            <img src={how1} alt="" width={45} />
                        </div>
                    </div>
                    <p className='mb-0 py-2 mt-2'>
                        COLLECT DATA
                    </p>
                    <p>
                        Gofolio uses historical price data from as far back as 10 years to generate the results for your portfolio.
                    </p>
                </div>
            </div>
            <div className="side-curve-img d-none d-md-block">
                <img src={sideCurve} alt="" width={350} />
            </div>
        </div>
    )
}

export default HowItWorks