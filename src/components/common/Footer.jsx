import React from 'react';
import footerLogo from '../../dist/images/GOFOLIO_WHITE.svg';
import mail from '../../dist/icons/mail.svg';
import facebook from '../../dist/icons/facebook.svg';
import instagram from '../../dist/icons/instagram.svg';


const Footer = () => {
    return (
        <div className='home-footer'>
            <div className="logo-footer">
                <img src={footerLogo} width={120} alt="" />
            </div>
            <div className="footer-center-text">
                <p className='text-center m-auto'>
                    <span className='text-decoration-underline'>Terms of use</span> <span className='mx-2'>|</span> <span className='text-decoration-underline'>Privacy policy</span> <span className='mx-2'>|</span> <span className='text-decoration-underline'>Disclosures</span>  <br />
                    Version: 1.0.0 <br />
                    ©2023 GoFolio. All rights reserved.
                </p>
            </div>
            <div className="footer-social">
              <div>
              <span className='d-flex my-2'>
                    <img src={mail} width={20} alt=""  className='me-2' />
                    <p className='my-auto'>Help@thegofolio.com</p>
                </span>
                <span className='d-flex '>
                    <img src={facebook} width={20} alt="" className='me-2' />
                    <img src={instagram} width={20} alt="" className='me-2' />
                    <p className='m-auto'>Help@thegofolio.com</p>
                </span>
              </div>
                
            </div>
        </div>
    )
}

export default Footer