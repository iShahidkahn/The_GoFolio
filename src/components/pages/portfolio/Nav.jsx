import React from 'react';
import dropArrow from '../../../dist/icons/dropdown_arrowx2.svg';
import overview from '../../../dist/icons/GoFolio_OVERVIEW.svg';
import profile from '../../../dist/icons/GoFolio_MY_ACCOUNT.svg';
import security from '../../../dist/icons/GoFolio_MY_SECURITIES.svg';
import portfolio from '../../../dist/icons/GoFolio_PORTFOLIO.svg';
import help from '../../../dist/icons/GoFolio_HELP.svg';
import logout from '../../../dist/icons/GoFolio_LOGOUT.svg';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Nav = () => {

  const location = useLocation();

  return (

    <>
      <div className="d-block d-md-flex flex-wrap align-items-center py-2 py-md-4 py-lg-4 py-xl-4">
        <div className="mb-1 mb-md-0 text-center text-md-start">
          <Link className="nav-link ms-0" style={{ borderBottom: 'none' }}>
            <span className="heading">
              Compare Portfolios
            </span>
          </Link>
        </div>
        <div className="ms-auto mb-1">
          <Link className="nav-link text-end" tabindex="-1" aria-disabled="true" style={{ borderBottom: 'none' }}>
            <div className="d-flex align-items-center" style={{ justifyContent: 'space-between' }}>
              <div className='d-md-none'>
                <span data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                  <i className="fa fa-bars me-1" />
                  Dashboard
                </span>
              </div>
              <div className='d-flex align-items-center' style={{ justifyContent: 'space-between' }}>
                <span className="position-relative">
                  <i className="fa-solid fa-bell"></i>
                  <span className="position-absolute start-100 translate-middle bg-danger border border-light rounded-circle" style={{ top: '12%' }}></span>
                </span>
                <span className="ms-2">Benjamin Treece</span>
                <span className="nav-link B me-0">
                  <p>B</p>
                </span>
                <div className="btn-group">
                  <Link className="dropdown-toggle nav-link me-0" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ borderBottom: 'none' }}>
                    <img src={dropArrow} alt='' />
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-lg-end mt-2 me-1">
                    <li><Link className="dropdown-item">Profile</Link></li>
                    <li><Link className="dropdown-item">Account Setting</Link></li>
                    <li><Link className="dropdown-item">Logout</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div
        className="offcanvas  offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header" >
          <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">
            Dashboard
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body p-0">
          <ul className="nav flex-column">
            <li className={location.pathname === "/overview" ? "active-link" : ""}>
              <Link to="Overview">
                <span><img className='fa' src={overview} width={28} alt=''/></span> <span className='colp'>Overview</span>
              </Link>
            </li>
            <li className={location.pathname === "/account" ? "active-link" : ""}>
              <Link to="/account">
                <span><img className='fa' src={profile} width={28} alt=''/></span>   <span className='colp'>My Account</span>
              </Link>
            </li>
            <li className={location.pathname === "/my_security" ? "active-link" : ""}>
              <Link to="/my_security">
                <span><img className='fa' src={security} width={28} alt=''/></span>   <span className='colp'>My Security</span>
              </Link>
            </li>
            <li className={location.pathname === "/" ? "active-link" : ""}>
              <Link to="/" >
                <span><img className='fa' src={portfolio} width={28} alt='' /></span>   <span className='colp'>My Portfolios</span>
              </Link>
            </li>
            <li className={location.pathname === "/help" ? "active-link" : ""}>
              <Link to="/help">
                <span><img className='fa' src={help} width={28} alt='' /></span>   <span className='colp'>Help</span>
              </Link>
            </li>
            <li className={location.pathname === "/logout" ? "active-link" : ""}>
              <Link to="/logout">
                <span><img className='fa' src={logout} width={28} alt='' /></span>   <span className='colp'>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>

  )
}

export default Nav