import React, { useState } from 'react';
import logo from '../../dist/images/GOFOLIO_WHITE.svg'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom"; 


const Navbar = () => {
    const location = useLocation(); // Get the current location using the useLocation hook

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light top-nav p-md-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{border:'none'}}>
                    <img src={logo} alt=''/>
                </Link>
                <button
                    className="btn btn-dark d-inline-block d-lg-none ml-auto border-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ backgroundColor: '#026773'}}
                >
                    <i className="fa fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                    <ul className="nav navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link  to="/" className={location.pathname === "/" ? "nav-link active-page" : "nav-link"}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pricing" className={location.pathname === "/pricing" ? "nav-link active-page" : "nav-link"}>
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className={location.pathname === "/blog" ? "nav-link active-page" : "nav-link"}>
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/account" className={location.pathname === "/account" ? "nav-link active-page" : "nav-link"}>
                                My Account
                            </Link>
                        </li>
                        <li className="nav-item my-auto">
                            <button
                                className={`btn ms-2 button-one ${isClicked ? 'clicked' : ''}`}
                                onClick={handleClick}
                            >
                                Get Started
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar