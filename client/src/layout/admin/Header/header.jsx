import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  const handleProductMouseEnter = () => {
    setIsProductHovered(true);
    setIsAboutHovered(false);
  };

  const handleProductMouseLeave = () => {
    setIsProductHovered(false);
  };

  const handleAboutMouseEnter = () => {
    setIsAboutHovered(true);
    setIsProductHovered(false);
  };

  const handleAboutMouseLeave = () => {
    setIsAboutHovered(false);
  };

  return (
    <>
      <nav>
        <div className="nav">
          <div className="nav__logo">
            <Link to={""}>
              <img src="https://www.qcy.com/phone/images/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="nav__tabs col-5">
            <ul>
              <li>
                <Link
                  className="product"
                  onMouseEnter={handleProductMouseEnter}
                  onMouseLeave={handleProductMouseLeave}
                >
                  ADD PRODUCTS
                </Link>
              </li>
              <li>
                <Link
                  className="about"
                  onMouseEnter={handleAboutMouseEnter}
                  onMouseLeave={handleAboutMouseLeave}
                >
                  PRODUCTS
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="acordion"
          onMouseEnter={handleProductMouseEnter}
          onMouseLeave={handleProductMouseLeave}
          style={{ height: isProductHovered ? "60vh" : "0" }}
        >
          <img src="https://www.qcy.com/phone/images/downbg.png" alt="" />
          <ul>
            <h5>Add product</h5>
            <li>
              <Link to={'aearbuds'}>Add Earbuds</Link>
            </li>
            <li>
              <Link to={'add'}>Add Smart Watches</Link>
            </li>
            <li>
              <Link to={'aheadphones'}>Add Headphones</Link>
            </li>
            <li>
              <Link to={'anews'}>Add News</Link>
            </li>
          </ul>
        </div>
        <div
          className="acordion1 adminAccordion"
          onMouseEnter={handleAboutMouseEnter}
          onMouseLeave={handleAboutMouseLeave}
          style={{ height: isAboutHovered ? "60vh" : "0" }}
        >
          <img src="https://www.qcy.com/phone/images/downbg.png" alt="" />
          <ul>
            <h5>Products</h5>
            <li>
              <Link to={'eproducts'}>Earbuds</Link>
            </li>
            <li>
              <Link to={'hproducts'}>Headphones</Link>
            </li>
            <li>
              <Link to={'products'}>Smart Watches</Link>
            </li>
            <li>
              <Link to={'news'}>News</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
