import React, { useEffect } from 'react';
import Nav from '../pages/portfolio/Nav'
import PortfolioList from '../pages/portfolio/PortfolioList'
import PortfolioBox from '../pages/portfolio/PortfolioBox'
import Sidebar from '../common/Sidebar';

const Portfolio = () => {
  useEffect(() => {
    const fullHeight = () => {
      const elements = document.querySelectorAll('.js-fullheight');
      elements.forEach((element) => {
        element.style.height = window.innerHeight + 'px';
      });
    };

    const handleResize = () => {
      fullHeight();
    };

    window.addEventListener('resize', handleResize);

    const sidebarToggle = () => {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('active');
    };

    const sidebarCollapse = document.getElementById('sidebarCollapse');
    sidebarCollapse.addEventListener('click', sidebarToggle);

    // Clean up event listeners
    return () => {
      window.removeEventListener('resize', handleResize);
      sidebarCollapse.removeEventListener('click', sidebarToggle);
    };
  }, []);
  return (

    <>
      <div className="wrapper d-flex align-items-stretch">
        <Sidebar />
        <div className="content">
          <div className='content-wrapper'>
            <Nav />
            <PortfolioList />
            <PortfolioBox />
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio