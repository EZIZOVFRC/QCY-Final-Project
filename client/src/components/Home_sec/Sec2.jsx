import React from "react";
import "./Sec2.scss";
import { Link } from 'react-router-dom';
const Sec2 = () => {
  return (
    <>
      <section className="sec2">

        <h5>PRODUCT CATEGORY</h5>

<div class="wrapper">
  

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
              With their sleek design and comfortable fit. <br />
              Compact and lightweight.
            </p>
            <div className="links">
              <Link>More<i class="fa-solid fa-right-long"></i></Link>
              
            </div>
          </div>
        </div>

  <div class="card col-4">
    <div class="face front">
      <img
        src="https://www.qcy.com/upfile/1693184332334304.jpg"
        alt="city"
      />
      <h1 class="text-h1">Smart Watches</h1>
    </div>

    <div class="face back">
      <h2 class="text-h2">Smart Watches</h2>
      <p class="text-p">
      These earbuds provide crisp. <br />
With their sleek design and comfortable fit. <br />
Compact and lightweight.
      </p>
      <div class="links">
      <Link>More<i class="fa-solid fa-right-long"></i></Link>
      </div>
    </div>
  </div>

  <div class="card col-4">
    <div class="face front">
      <img
        src="https://p2.itc.cn/images01/20230612/e6201c3d232f47f0b7c65d2e946d27e0.jpeg"
        alt="city"
      />
      <h1 class="text-h1">Headphones</h1>
    </div>

    <div class="face back">
      <h2 class="text-h2">Headphones</h2>
      <p class="text-p">
      These earbuds provide crisp. <br />
With their sleek design and comfortable fit. <br />
Compact and lightweight.
      </p>
      <div class="links">
      <Link>More<i class="fa-solid fa-right-long"></i></Link>
      </div>
    </div>
  </div>
</div>
      </section>
    </>
  );
};

export default Sec2;
