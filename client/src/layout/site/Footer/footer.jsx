import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top__left col-8">
          <ul className="col-3">
            <h5>PRODUCTS</h5>
            <li>Earbuds</li>
            <li>Smart Watches</li>
            <li>Headphones</li>
          </ul>
          <ul className="col-3">
            <h5>QCY</h5>
            <li>About Us</li>
            <li>History</li>
            <li>News</li>
          </ul>
          <ul className="col-3">
            <h5>SUPPORT</h5>
            <li>Where to buy</li>
            <li>Help Center</li>
            <li>FAQ</li>
            <li>Distributor Verification</li>
            <li>Authorized Distributors</li>
          </ul>
          <ul className="col-3 media">
            <h5>FOLLOW US</h5>
            <li className="app">
              <i className="fa-regular fa-bookmark"></i>QCY App{" "}
              <img
                src="https://www.qcy.com/upfile/1687245041821961.jpg"
                alt=""
              />
            </li>
            <li>
              <i className="fa-brands fa-facebook-f"></i>Facebook
            </li>
            <li>
              <i className="fa-brands fa-youtube"></i>YouTube
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>Instagram
            </li>
            <li>
              <i className="fa-brands fa-twitter"></i>Twitter
            </li>
            <li>
              <i className="fa-brands fa-tiktok"></i>TikTok
            </li>
          </ul>
        </div>
        <div className="footer__top__right col-4">
          <h5>SUBSCRIBE</h5>
          <p>Sign up to get the latest on sales, new releases, and more.</p>
          <div className="email">
            <input type="email" name="" id="" placeholder="Email..." />
            <button type="submit">Submit</button>
          </div>
          <div className="agrement">
            <input type="checkbox" name="" id="" />
            <p>I agree to the Terms of Use and Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© Dongguan Hele Electronics Co., Ltd 2024</span>
        <ul>
          <li>Contact Us</li>
          <li>Site Map</li>
          <li>News</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
