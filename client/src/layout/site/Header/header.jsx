import React, { useState, useEffect, useContext } from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MainContext from "../../../context/context";

const Header = () => {
  const {basketItems}=useContext(MainContext)
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure?");
    if (confirmLogout) {
      localStorage.removeItem("user");
      setIsLoggedIn(false);
    }
  };

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

  const getTotalBasketItems = () => {
    return basketItems.reduce((total, item) => total + item.count, 0);
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
                <Link to={'products'}
                  className="product"
                  onMouseEnter={handleProductMouseEnter}
                  onMouseLeave={handleProductMouseLeave}
                >
                  PRODUCTS
                </Link>
              </li>
              <li>
                <Link to={'story'}
                  className="about"
                  onMouseEnter={handleAboutMouseEnter}
                  onMouseLeave={handleAboutMouseLeave}
                >
                  ABOUT QCY
                </Link>
              </li>
              <li>
                <Link to={'news'}>NEWS</Link>
              </li>
              <li>
                <Link to={'contact'}>CONTACT US</Link>
              </li>
            </ul>
          </div>
          <div className="nav__cart">
            <Link to={'wishlist'}>
              <i className="fa-solid fa-heart"> </i>Favorites
            </Link>
            <Link  to={'basket'}>
              <i className="fa-solid fa-cart-shopping"> </i>Cart <span>{getTotalBasketItems()}</span>
            </Link>
            {isLoggedIn ? (
              <div className="user-menu">
                <i className="fa-solid fa-user" onClick={handleLogout}></i>
              </div>
            ) : (
              <Link className="loginA" to={'loginRegister'}>Sign in</Link>
            )}
          </div>
          <Button className="off" variant="primary" onClick={handleShow}>
            <i className="fa-solid fa-bars"></i>
          </Button>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Link to={''} onClick={handleClose}>
                HOME
              </Link>
              <Link to={'/products'} className="product" onClick={handleClose}>
                PRODUCTS
              </Link>
              <Link to={'/story'} className="about" onClick={handleClose}>
                ABOUT QCY
              </Link>
              <Link to={'/news'} onClick={handleClose}>
                NEWS
              </Link>
              <Link to={'/contact'} onClick={handleClose}>
                CONTACT US
              </Link>
            </Offcanvas.Body>
          </Offcanvas>
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
              <Link to="/products/earbuds">Earbuds</Link>
            </li>
            <li>
              <Link to="/products/Watches">Smart Watches</Link>
            </li>
            <li>
              <Link to="/products/headphones">Headphones</Link>
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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
