import React from "react";

const ProductsSec2 = () => {
  return (
    <section className="product2">
      <h2>Come witness the landmarks we've achieved on our journey.</h2>
      <div className="product2__body">
        <div className="product2__body__left col-6">
          <div className="product2__body__left__card">
            <h3>
              2022{" "}
              <p>
                In 2022, QCY Q1 ranked fourth in the global true wireless
                Bluetooth headphone market share.
              </p>
            </h3>
            <img
              src="https://cdn.shopify.com/s/files/1/0639/3492/2809/files/2020.webp?v=1708598147"
              alt=""
            />
          </div>
          <div className="product2__body__left__card">
            <h3>
              2020{" "}
              <p>
                QCY ranked 4th in global true wireless Bluetooth headset market
                share in the first quarter, with total shipments reaching 2.5
                million units, a growth of 172% compared to the same period
              </p>
            </h3>
            <img src="https://www.qcy.com/upfile/1692343531885622.jpg" alt="" />
          </div>
        </div>
        {/* ------------- */}
        <div className="product2__body__right col-6">
          <div className="product2__body__right__card">
            <h3>
              2021{" "}
              <p>
              The QCY brand has evolved.Established Shenzhen Yixang Electronic Commerce Co., Ltd., a wholly owned subsidiary.
              </p>
            </h3>
            <img
              src="https://cdn.shopify.com/s/files/1/0639/3492/2809/files/2021.webp?v=1708598147"
              alt=""
            />
          </div>
          <div className="product2__body__right__card">
            <h3>
              2019{" "}
              <p>
              QCY ranked 5th in global true wireless Bluetooth earphone market share in the first half of the year.
              </p>
            </h3>
            <img
              src="https://cdn.shopify.com/s/files/1/0639/3492/2809/files/2019_b258086b-110c-494c-8083-5e23c4ce0ec8.jpg?v=1708598147"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSec2;
