// src/components/Common/Sidebar.js
import React from 'react';
import overview from '../../dist/icons/GoFolio_OVERVIEW.svg';
import profile from '../../dist/icons/GoFolio_MY_ACCOUNT.svg';
import security from '../../dist/icons/GoFolio_MY_SECURITIES.svg';
import portfolio from '../../dist/icons/GoFolio_PORTFOLIO.svg';
import help from '../../dist/icons/GoFolio_HELP.svg';
import logout from '../../dist/icons/GoFolio_LOGOUT.svg';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";


function Sidebar() {
  const location = useLocation();

  return (
    <nav id="sidebar" className="active">
      <ul className="list-unstyled components mb-5">
        <li className='sidebarcollapse'>
          <Link id="sidebarCollapse">
            <span ><i className="fa fa-bars" style={{ fontSize: '28px', cursor: 'pointer', marginTop: '7px' }} /></span><span className='colp ms-1'>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="" className={location.pathname === "/overview" ? "active-link" : ""}>
            <span><img className='fa' src={overview} width={28} alt='' /></span> <span className='colp'>Overview</span>
          </Link>
        </li>
        <li>
          <Link to="/account" className={location.pathname === "/account" ? "active-link" : ""}>
            <span><img className='fa' src={profile} width={28} alt='' /></span>   <span className='colp'>My Account</span>
          </Link>
        </li>
        <li>
          <Link to="" className={location.pathname === "/my_security" ? "active-link" : ""}>
            <span><img className='fa' src={security} width={28} alt='' /></span>   <span className='colp'>My Security</span>
          </Link>
        </li>
        <li>
          <Link to="/my_portfolio" className={location.pathname === "/my_portfolio" ? "active-link" : ""}>
            <span><img className='fa' src={portfolio} width={28} alt='' /></span>   <span className='colp'>My Portfolios</span>
          </Link>
        </li>
        <li>
          <Link to="" className={location.pathname === "/help" ? "active-link" : ""}>
            <span><img className='fa' src={help} width={28} alt='' /></span>   <span className='colp'>Help</span>
          </Link>
        </li>
        <li>
          <Link to="" className={location.pathname === "/logout" ? "active-link" : ""}>
            <span><img className='fa' src={logout} width={28} alt='' /></span>   <span className='colp'>Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
