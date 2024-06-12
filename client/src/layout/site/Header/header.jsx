import React, { useState } from "react";
import "./Header.scss";
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
              <img src="https://qcy.com/phone/images/logo.png" alt="Logo" />
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
                  PRODUCTS
                </Link>
              </li>
              <li>
                <Link
                  className="about"
                  onMouseEnter={handleAboutMouseEnter}
                  onMouseLeave={handleAboutMouseLeave}
                >
                  ABOUT QCY
                </Link>
              </li>
              <li>
                <Link>NEWS</Link>
              </li>
              <li>
                <Link>BLOG</Link>
              </li>
              <li>
                <Link>CONTACT US</Link>
              </li>
            </ul>
          </div>
          <div className="nav__cart">
            <Link>
              <i className="fa-solid fa-heart"></i>
            </Link>
            <Link to={'basket'}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        </div>
        <div
          className="acordion"
          onMouseEnter={handleProductMouseEnter}
          onMouseLeave={handleProductMouseLeave}
          style={{ height: isProductHovered ? "50vh" : "0" }}
        >
          <img src="https://www.qcy.com/phone/images/downbg.png" alt="" />
          <ul>
            <h5>Category</h5>
            <li>
              <Link>Earbuds</Link>
            </li>
            <li>
              <Link>Smart Watches</Link>
            </li>
            <li>
              <Link>Headphones</Link>
            </li>
          </ul>
        </div>
        <div
          className="acordion1"
          onMouseEnter={handleAboutMouseEnter}
          onMouseLeave={handleAboutMouseLeave}
          style={{ height: isAboutHovered ? "45vh" : "0" }}
        >
          <img src="https://www.qcy.com/phone/images/downbg.png" alt="" />
          <ul>
            <h5>About Us</h5>
            <li>
              <Link to={'story'}>QCY history</Link>
            </li>
            <li>
              <Link>Videos</Link>
            </li>
            <li>
              <Link>See more</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
