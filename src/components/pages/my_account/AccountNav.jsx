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
const AccountNav = () => {
  const location = useLocation();

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-0" style={{ height: '70px' }}>
        <button type="button" id="sidebarCollapse" className="btn btn-primary">
        <i className="fa fa-bars" />
        <span className="sr-only">Toggle Menu</span>
      </button>
        <span className='heading'>
          Compare Portfolios
        </span>
        <button
          className="btn btn-dark d-inline-block d-lg-none ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav ms-auto" style={{ height: '30px' }}>
            <li className="nav-item">
              <span class="position-relative">
                <i class="fa-solid fa-bell"></i>
                <span class="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle">
                </span>
              </span>
              <span style={{ marginLeft: "10px" }}>Benjamin Treece</span>
            </li>
            <li className="nav-item">
              <span className="nav-link B">
                <p>B</p>
              </span>
            </li>
            <div class="btn-group">
              <span class="dropdown-toggle nav-link" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                <img src={dropArrow} />
              </span>
              <ul class="dropdown-menu dropdown-menu-lg-end mt-2 me-1">
                <li><button class="dropdown-item" type="button">Profile</button></li>
                <li><button class="dropdown-item" type="button">Account Setting</button></li>
                <li><button class="dropdown-item" type="button">Logout</button></li>
              </ul>
            </div>
          </ul>
        </div>
      </div>

       <div class="d-block d-md-flex flex-wrap align-items-center py-2 py-md-4 py-lg-4 py-xl-4">
      <div class="mb-1 mb-md-0 text-center text-md-start">
        <a href="#" class="nav-link ms-0" style={{ borderBottom: 'none' }}>
          <span class="heading">
            Compare Portfolios
          </span>
        </a>
      </div>
      <div class="ms-auto mb-1">


    </nav> */}
      <div class="d-block d-md-flex flex-wrap align-items-center py-2 py-md-4 py-lg-4 py-xl-4" style={{margin:'0 20px'}}>
        <div class="mb-1 mb-md-0 text-center text-md-start">
          <a href="#" class="nav-link ms-0" style={{ borderBottom: 'none' }}>
            <span class="heading">
              My Account
            </span>
          </a>
        </div>
        <div class="ms-auto ">
          <a href="#" class="nav-link text-end" tabindex="-1" aria-disabled="true" style={{ borderBottom: 'none' }}>
            <div class="d-flex align-items-center" style={{ justifyContent: 'space-between' }}>
              <div className='d-md-none'> 
                  <span  data-bs-toggle="offcanvas"  data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                  <i className="fa fa-bars me-1" />
                      Dashboard
                  </span>
              </div>
              <div className='d-flex align-items-center' style={{ justifyContent: 'space-between' }}>
                <span class="position-relative">
                  <i class="fa-solid fa-bell"></i>
                  <span class="position-absolute start-100 translate-middle bg-danger border border-light rounded-circle" style={{top:'12%'}}></span>
                </span>
                <span class="ms-2">Benjamin Treece</span>
                <span class="nav-link B me-0">
                  <p>B</p>
                </span>
                <div class="btn-group">
                  <a class="dropdown-toggle nav-link me-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ borderBottom: 'none' }}>
                    <img src={dropArrow} />
                  </a>
                  <ul class="dropdown-menu dropdown-menu-lg-end mt-2 me-1">
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><a class="dropdown-item" href="#">Account Setting</a></li>
                    <li><a class="dropdown-item" href="#">Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
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
            <ul class="nav flex-column">
              <li className={location.pathname === "/overview" ? "active-link" : ""}>
                <Link to="Overview">
                  <span><img className='fa' src={overview} width={28} /></span> <span className='colp'>Overview</span>
                </Link>
              </li>
              <li className={location.pathname === "/account" ? "active-link" : ""}>
                <Link to="/account">
                  <span><img className='fa' src={profile} width={28} /></span>   <span className='colp'>My Account</span>
                </Link>
              </li>
              <li className={location.pathname === "/my_security" ? "active-link" : ""}>
                <Link to="/my_security">
                  <span><img className='fa' src={security} width={28} /></span>   <span className='colp'>My Security</span>
                </Link>
              </li>
              <li className={location.pathname === "/" ? "active-link" : ""}>
                <Link to="/" >
                  <span><img className='fa' src={portfolio} width={28} /></span>   <span className='colp'>My Portfolios</span>
                </Link>
              </li>
              <li className={location.pathname === "/help" ? "active-link" : ""}>
                <Link to="/help">
                  <span><img className='fa' src={help} width={28} /></span>   <span className='colp'>Help</span>
                </Link>
              </li>
              <li className={location.pathname === "/logout" ? "active-link" : ""}>
                <Link to="/logout">
                  <span><img className='fa' src={logout} width={28} /></span>   <span className='colp'>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    
  )
}

export default AccountNav