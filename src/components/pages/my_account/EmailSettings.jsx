import React, { useState } from 'react';

const EmailSettings = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isClickedTwo, setIsClickedTwo] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    };
    const handleClickTwo = () => {
        setIsClickedTwo(true);
    };
    return (
        <div className='account-container'>
            <div className='top-bar'>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#" className='active'>Email Settings</a></li>
                    <li><a href="#">Security</a> </li>
                </ul>
            </div>
            <div className="email-box-wrapper my-4 mx-2">
                <div className="d-flex py-2">
                    <p>Update email address</p>
                    <button
                        className={`button-two ${isClicked ? 'clicked' : ''}`}
                        onClick={handleClick}
                    >
                        SAVE CHANGES
                    </button>
                </div>

                <label htmlFor="name" className="form-label">
                    First Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="form-control w-70"
                    style={{ width: '70%' }}
                    
                />
                <label htmlFor="password" className="form-label mt-3">
                    Current Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="form-control"
                    style={{ width: '70%' }}
                />
                <div className="bordertag"></div>
                <div className="d-flex pb-1">
                    <p>Email Notifications</p>
                    <button
                        className={`button-two ${isClickedTwo ? 'clicked' : ''}`}
                        onClick={handleClickTwo}
                    >
                        SAVE CHANGES
                    </button>
                </div>
                <div className="form-check mb-4 pb-1 mt-3" style={{ borderBottom: "3px solid #cecece" }}>
                    <div className="d-block">
                        <div>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Announcements
                            </label>
                        </div>
                        <div>
                            Updates on the GoFolio’s new features, products, and more.
                        </div>
                    </div>
                </div>
                <div className="form-check mb-4 pb-1" style={{ borderBottom: "3px solid #012e40" }}>
                    <div className="d-block">
                        <div>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckChecked"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Account education
                            </label>
                        </div>
                        <div>
                            Educational emails to help you succeed with the GoFolio.
                        </div>
                    </div>
                </div>
                <div className="form-check mb-4 pb-1" style={{ borderBottom: "3px solid #cecece" }}>
                    <div className="d-block d--md-flex">
                        <div>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Feedback and research
                            </label>
                        </div>
                        <div>
                            Occasional surveys on the GoFolio’s products and features.                                </div>
                    </div>
                </div>
                <div className="form-check mb-4 pb-1" style={{ borderBottom: "3px solid #012e40" }}>
                    <div className="d-block d-md-flex">
                        <div>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckChecked"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Newsletter
                            </label>
                        </div>
                        <div>
                            Weekly roundup of the blog posts.
                        </div>
                    </div>
                </div>
                <div className="form-check mb-4 pb-1 mb-5" style={{ borderBottom: "3px solid #cecece" }}>
                    <div className="d-block d-md-flex">
                        <div>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="flexCheckDefault"
                                disabled
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Billing and account
                            </label>
                        </div>
                        <div className="disabled-text">
                            Transactional emails and account notifications we’re legally obligated to send.                                </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EmailSettings