import React from 'react'
import card from '../../../dist/icons/GoFolio_PORTFOLIO_CARD_ICON.svg'

const PortfolioList = () => {
  return (
    <>
      <div className='top-bar'>
        <ul>
          <li><a href="/#">GoFolio Calculated</a></li>
          <li><a href="/#">User Defined</a></li>
          <li><a href="/#" className='active'>Show All</a></li>
          <li className='ms-auto'>
            <div className="d-flex sort-by me-0">
              <p>Sort by:</p>
              <span>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                  <option selected>Portflolio type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className='portfolio-container'>
        <div className='row'>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
          <div className="p-3 portfolio-wrapper">
            <div className="portfolio-box">
              <div className="d-flex">
                <div className='d-flex'>
                  <div className='square me-2'></div>
                  <p className='portfolio-text'>Portfolio Name <br /> Gofolio Calculated</p>
                </div>
                <img src={card} width={34}  />
              </div>
              <h2 className='percentage'>XXX%</h2>
              <span className="d-flex mt-3">
                <button className="buttonDetails">Details</button>
                <button className="buttonX"><i class="fa-solid fa-xmark"></i></button>
              </span>
            </div>
          </div>
        </div>
      </div></>

  )
}

export default PortfolioList