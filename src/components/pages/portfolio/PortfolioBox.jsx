import React from "react";
import Portfoliochart from "./Portfoliochart";

const PortfolioBox = () => {

    return (
        <div className="box-container my-4">
            <div className='row'>
                <div className="col-md-4 col-12 col-lg-4">
                    <div className="box">
                        <div className="box-top">
                            Ben’s Portfolio – <br />
                            GoFolio Calculated
                        </div>
                        <div className='box-inner-text'>
                            <p>FLMFX, VOO, QQQ, GLD</p>
                            <span className='btn'>LOWEST BETA</span> <br />
                            <span className='btn btn-2'>RISK REWARD</span>
                            <div className="d-flex mt-3">
                                <span className='btn btn-3'>1 YEAR</span>
                                <span className='btn btn-3 btn-4'>3 YEAR</span>
                            </div>
                            <div className="d-flex mt-2">
                                <span className='btn btn-3'>5 YEAR</span>
                                <span className='btn btn-3'>10 YEAR</span>
                            </div>
                            <p>
                                Portfolio Return: <span style={{ color: '#3ca6a6' }}>100%</span> <br />
                                Portfolio Beta: <span style={{ color: '#3ca6a6' }}>0.65</span> <br />
                                <p className="mt-2" style={{ lineHeight: '20px' }}>
                                    Portfolio Standard <br />
                                    <span>Deviation: <span style={{ color: '#3ca6a6' }}>0.12</span> </span>
                                </p>
                            </p>
                        </div>
                        <div className="chart text-center">
                            <Portfoliochart />
                        </div>
                        <div className="bottom text-center mx-5 px-3">
                            <p style={{ color: '#012e40' }}>STARTING VALUE</p>
                            <div className="input-group mb-3">
                                <span className="input-group-text" style={{ borderRadius: '0' }}>$</span>
                                <input type="number" className="form-control" placeholder="500,500,500" />
                            </div>
                        </div>
                        <div className="box-return d-flex my-3" style={{ justifyContent: "center" }}>
                            <span className="left">PORTFOLIO RETURN</span>
                            <span className="right">$100,000,000</span>
                        </div>
                        <div className="portfolio-date">
                            Data as of: 5/23/2023
                        </div>
                        <div className="d-flex justify-content-center align-items-center my-3">
                            <button className="btn">REMOVE FROM PORTFOLIO COMPARE</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 col-lg-4">
                    <div className="box">
                        <div className="box-top">
                            Ben’s Portfolio – <br />
                            GoFolio Calculated
                        </div>
                        <div className='box-inner-text'>
                            <p>FLMFX, VOO, QQQ, GLD</p>
                            <span className='btn'>LOWEST BETA</span> <br />
                            <span className='btn btn-2'>RISK REWARD</span>
                            <div className="d-flex mt-3">
                                <span className='btn btn-3'>1 YEAR</span>
                                <span className='btn btn-3 btn-4'>3 YEAR</span>
                            </div>
                            <div className="d-flex mt-2">
                                <span className='btn btn-3'>5 YEAR</span>
                                <span className='btn btn-3'>10 YEAR</span>
                            </div>
                            <p>
                                Portfolio Return: <span style={{ color: '#3ca6a6' }}>100%</span> <br />
                                Portfolio Beta: <span style={{ color: '#3ca6a6' }}>0.65</span> <br />
                                <p className="mt-2" style={{ lineHeight: '20px' }}>
                                    Portfolio Standard <br />
                                    <span>Deviation: <span style={{ color: '#3ca6a6' }}>0.12</span> </span>
                                </p>
                            </p>
                        </div>
                        <div className="chart text-center">
                            <Portfoliochart />
                        </div>
                        <div className="bottom text-center mx-5 px-3">
                            <p style={{ color: '#012e40' }}>STARTING VALUE</p>
                            <div className="input-group mb-3">
                                <span className="input-group-text" style={{ borderRadius: '0' }}>$</span>
                                <input type="number" className="form-control" placeholder="500,500,500" />
                            </div>
                        </div>
                        <div className="box-return d-flex my-3" style={{ justifyContent: "center" }}>
                            <span className="left">PORTFOLIO RETURN</span>
                            <span className="right">$100,000,000</span>
                        </div>
                        <div className="portfolio-date">
                            Data as of: 5/23/2023
                        </div>
                        <div className="d-flex justify-content-center align-items-center my-3">
                            <button className="btn">REMOVE FROM PORTFOLIO COMPARE</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 col-lg-4">
                    <div className="box">
                        <div className="box-top">
                            Ben’s Portfolio – <br />
                            GoFolio Calculated
                        </div>
                        <div className='box-inner-text'>
                            <p>FLMFX, VOO, QQQ, GLD</p>
                            <span className='btn'>LOWEST BETA</span> <br />
                            <span className='btn btn-2'>RISK REWARD</span>
                            <div className="d-flex mt-3">
                                <span className='btn btn-3'>1 YEAR</span>
                                <span className='btn btn-3 btn-4'>3 YEAR</span>
                            </div>
                            <div className="d-flex mt-2">
                                <span className='btn btn-3'>5 YEAR</span>
                                <span className='btn btn-3'>10 YEAR</span>
                            </div>
                            <p>
                                Portfolio Return: <span style={{ color: '#3ca6a6' }}>100%</span> <br />
                                Portfolio Beta: <span style={{ color: '#3ca6a6' }}>0.65</span> <br />
                                <p className="mt-2" style={{ lineHeight: '20px' }}>
                                    Portfolio Standard <br />
                                    <span>Deviation: <span style={{ color: '#3ca6a6' }}>0.12</span> </span>
                                </p>
                            </p>
                        </div>
                        <div className="chart text-center">
                            <Portfoliochart />
                        </div>
                        <div className="bottom text-center mx-5 px-3">
                            <p style={{ color: '#012e40' }}>STARTING VALUE</p>
                            <div className="input-group mb-3">
                                <span className="input-group-text" style={{ borderRadius: '0' }}>$</span>
                                <input type="number" className="form-control" placeholder="500,500,500" />
                            </div>
                        </div>
                        <div className="box-return d-flex my-3" style={{ justifyContent: "center" }}>
                            <span className="left">PORTFOLIO RETURN</span>
                            <span className="right">$100,000,000</span>
                        </div>
                        <div className="portfolio-date">
                            Data as of: 5/23/2023
                        </div>
                        <div className="d-flex justify-content-center align-items-center my-3">
                            <button className="btn">REMOVE FROM PORTFOLIO COMPARE</button>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center my-5">
                    <button className="btn btn-5">CREATE NEW CALCULATION</button>
                </div>
            </div>
        </div>
    )
}

export default PortfolioBox