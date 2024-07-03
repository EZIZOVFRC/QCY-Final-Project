import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../DetailPage.scss";
import { useParams } from "react-router-dom";
import MainContext from "../../../context/context";
import ProductDetail from "../ProductDetail";
import ScrollButton from "./../../ScrollButton/ScrollButton";
import FAQ from "../../Contact/FAQ";
import { Helmet } from "react-helmet";

const QcyArcBuds = () => {
  const { id } = useParams();
  const { full, basketItems, setBasketItems, addToWish } =
    useContext(MainContext);
  const [detail, setDetail] = useState(null);
  const [count, setCount] = useState(1);
  const [isWishAdded, setIsWishAdded] = useState(false);
  const [inCartCount, setInCartCount] = useState(0);
  const [mainImage, setMainImage] = useState(
    "https://us.qcy.com/cdn/shop/products/qcy-arcbuds-qcy-official-1.jpg?v=1711506998&width=800"
  );

  const images = [
    "https://us.qcy.com/cdn/shop/products/qcy-arcbuds-qcy-official-1.jpg?v=1711506998&width=800",
    "https://us.qcy.com/cdn/shop/products/qcy-arcbuds-qcy-official-2.jpg?v=1711506998&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-arcbuds-qcy-official-3.jpg?v=1711506998&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-arcbuds-qcy-official-4.jpg?v=1711506998&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-arcbuds-qcy-official-5.jpg?v=1711506998&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-arcbuds-qcy-official-7.jpg?v=1711506998&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-arcbuds-qcy-official-8.jpg?v=1711506998&width=800",
  ];

  useEffect(() => {
    if (full && id) {
      const foundDetail = full.find((item) => item._id === id);
      setDetail(foundDetail);
    }
  }, [full, id]);

  useEffect(() => {
    if (detail) {
      const target = basketItems.find((x) => x.item._id === detail._id);
      setInCartCount(target ? target.count : 0);
    }
  }, [detail, basketItems]);

  useEffect(() => {
    const wishList = JSON.parse(localStorage.getItem("wishList")) || [];
    if (detail && wishList.includes(detail._id)) {
      setIsWishAdded(true);
    }
  }, [detail]);

  if (!detail) return <p>Loading...</p>;

  const addToBasket = (item, count) => {
    const target = basketItems.find((x) => x.item._id === item._id);
    if (target) {
      target.count += count;
      target.totalPrice += item.price * count;
      setBasketItems([...basketItems]);
    } else {
      const newItem = {
        item: item,
        count: count,
        totalPrice: item.price * count,
      };
      setBasketItems([...basketItems, newItem]);
    }
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  };

  const handleAddToBasket = () => {
    addToBasket(detail, count);
    setInCartCount(inCartCount + count);
  };

  const handleAddToWish = () => {
    const wishList = JSON.parse(localStorage.getItem("wishList")) || [];
    if (isWishAdded) {
      const updatedWishList = wishList.filter((id) => id !== detail._id);
      localStorage.setItem("wishList", JSON.stringify(updatedWishList));
    } else {
      wishList.push(detail._id);
      localStorage.setItem("wishList", JSON.stringify(wishList));
    }
    addToWish(detail);
    setIsWishAdded(!isWishAdded);
  };

  const settings = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    beforeChange: (current, next) => setMainImage(images[next]),
  };

  return (
    <>
    <Helmet>
      <title>
        Qcy Arc Buds
      </title>
    </Helmet>
    <main>
      <section className="detail-page">
        <div className="slider-container col-6">
          <div className="slider">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="main-image">
            <img src={mainImage} alt="Main" />
          </div>
        </div>
        <ProductDetail
          detail={detail}
          count={count}
          setCount={setCount}
          isWishAdded={isWishAdded}
          handleAddToBasket={handleAddToBasket}
          handleAddToWish={handleAddToWish}
          inCartCount={inCartCount}
        />
      </section>
      <section className="desc1 ">
        <div className="desc1__left col-6">
          <img
            src="https://us.qcy.com/cdn/shop/files/arcbuds_details01.jpg?v=1708227181&width=1000"
            alt=""
          />
        </div>
        <div className="desc1__right col-6">
          <h2>Multi-mode active noise cancellation</h2>

          <p>
            QCY ArcBuds noise cancelling earbuds feature unique Hybrid ANC
            technology, environmental noises are eliminated up to 40dB. You can
            choose your noise-canceling mode and noise canceling intensity to
            adapt to your environment, keeping you immersed in any place.
          </p>
        </div>
      </section>
      <section className="desc1 ">
        <div className="desc1__right col-6">
          <h2 style={{ width: "60%" }}>Immersive Sound with Punchy Bass</h2>
          <p>
            QCY ArcBuds wireless earbuds adopt 10mm LCP graphene dynamic driver
            equipped with DAIKOKU CCAW coil to provide powerful deep bass, clear
            and comfortable stereo with rich details.
          </p>
        </div>
        <div className="desc1__left col-6">
          <img
            src="https://us.qcy.com/cdn/shop/files/6_6d32e654-3db6-490a-b78d-94d353c78917.jpg?v=1708227344&width=800"
            alt=""
          />
        </div>
      </section>
      <section className="desc1 ">
        <div className="desc1__left col-6">
          <img
            src="https://us.qcy.com/cdn/shop/files/arcbuds_details03.jpg?v=1708228737&width=1000"
            alt=""
          />
        </div>
        <div className="desc1__right col-6">
          <h2>6 Microphones for AI-Enhanced Calls</h2>
          <p>
            QCY ArcBuds noise cancelling earbuds have 6 microphones with an AI
            algorithm that picks up your voice precisely and blocks out
            background noise. Be heard clearly whenever you're on calls, video
            chats, live streams, etc.
          </p>
        </div>
      </section>
      <section className="desc1 ">
        <div className="desc1__right col-6">
          <h2>32-Hour Battery Life</h2>
          <p>
            QCY ArcBuds wireless earbuds can last for 8 hours' playtime from a
            single charge and 32 extra hours in the compact charging case.
            Providing Fast-Charging with a quick 5-minute charging providing 60
            minutes of playtime.
          </p>
        </div>
        <div className="desc1__left col-6">
          <img
            src="https://us.qcy.com/cdn/shop/files/qcy-arcbuds-qcy-official-8.jpg?v=1711506998&width=800"
            alt=""
          />
        </div>
      </section>
      <section>
        <img
          src="https://us.qcy.com/cdn/shop/files/arcbuds_details07_92167b27-0987-469b-8095-d3345847888a.jpg?v=1708237070&width=1800"
          alt=""
          width={"100%"}
        />
      </section>
      <ScrollButton />
      <FAQ />
    </main></>
  );
};

export default QcyArcBuds;
