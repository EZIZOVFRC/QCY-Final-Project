import React from "react";
import "./Sec2.scss";
import { Link } from "react-router-dom";
const Sec2 = () => {
  return (
    <>
      <section className="sec2">
        <h5>PRODUCT CATEGORY</h5>

        <div className="wrapper">
          <div className="card col-4">
            <div className="face front">
              <img
                src="https://www.qcy.com/upfile/1697528665434994.jpg"
                alt="city"
              />
              <h1 className="text-h1">Ear-Buds</h1>
            </div>

            <div className="face back">
              <h2 className="text-h2">Ear-Buds</h2>
              <p className="text-p">
                These earbuds provide crisp. <br />
                With their sleek design and comfortable fit. Compact and
                lightweight.
              </p>
              <div className="links">
                <Link to="/products/earbuds">
                  More<i className="fa-solid fa-right-long"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="card col-4">
            <div className="face front">
              <img
                src="https://www.qcy.com/upfile/1693184332334304.jpg"
                alt="city"
              />
              <h1 className="text-h1">Smart Watches</h1>
            </div>

            <div className="face back">
              <h2 className="text-h2">Smart Watches</h2>
              <p className="text-p">
                A smartwatch is a wearable device that combines the
                functionality of a traditional watch with advanced features such
                as fitness tracking, notifications, and even apps.
              </p>
              <div className="links">
                <Link to="/products/Watches">
                  More<i className="fa-solid fa-right-long"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="card col-4">
            <div className="face front">
              <img
                src="https://p2.itc.cn/images01/20230612/e6201c3d232f47f0b7c65d2e946d27e0.jpeg"
                alt="city"
              />
              <h1 className="text-h1">Headphones</h1>
            </div>

            <div className="face back">
              <h2 className="text-h2">Headphones</h2>
              <p className="text-p">
                They come in various
                types, including over-ear, on-ear, and in-ear, each offering
                different levels of comfort and sound quality.
              </p>
              <div className="links">
                <Link to="/products/headphones">
                  More<i className="fa-solid fa-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sec2;
