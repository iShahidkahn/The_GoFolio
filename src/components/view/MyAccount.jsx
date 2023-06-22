import React, { useEffect } from 'react';
import AccountTopbar from '../pages/my_account/AccountTopbar'
import EmailSettings from '../pages/my_account/EmailSettings'
import Sidebar from '../common/Sidebar'
import AccountNav from '../pages/my_account/AccountNav';

const MyAccount = () => {
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
                <Sidebar/>
                <div className="content">
                    <div className="page-wrapper">
                        <AccountNav/>
                        <AccountTopbar />
                        <EmailSettings />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyAccount