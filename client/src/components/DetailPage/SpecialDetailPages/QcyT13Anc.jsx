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

const QcyT13Anc = () => {
  const { id } = useParams();
  const { full, basketItems, setBasketItems, addToWish } =
    useContext(MainContext);
  const [detail, setDetail] = useState(null);
  const [count, setCount] = useState(1);
  const [isWishAdded, setIsWishAdded] = useState(false);
  const [inCartCount, setInCartCount] = useState(0);
  const [mainImage, setMainImage] = useState(
    "https://us.qcy.com/cdn/shop/files/qcy-t13-anc-qcy-official-1.png?v=1708937067&width=800"
  );

  const images = [
    "https://us.qcy.com/cdn/shop/files/qcy-t13-anc-qcy-official-1.png?v=1708937067&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-t13-anc-qcy-official-2.png?v=1708937068&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-t13-anc-qcy-official-3.jpg?v=1708937069&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-t13-anc-qcy-official-4.jpg?v=1708937070&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-t13-anc-qcy-official-5.jpg?v=1708937071&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-t13-anc-qcy-official-6.jpg?v=1708937072&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-t13-anc-qcy-official-7.jpg?v=1708937074&width=800",
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
      QCY T13
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
            src="https://us.qcy.com/cdn/shop/files/t13_anc_details_1.jpg?v=1708420140&width=800"
            alt=""
          />
        </div>
        <div className="desc1__right col-6">
          <span>Active Noise Cancellation Mode</span>
          <h2>Leave only the melody in your ears</h2>
          <p>
            Do you think noise is everywhere in your life? Turn on the ANC mode
            to escape the hustle and bustle of life anytime and anywhere.
          </p>
          <p>
            QCY T13 ANC Earbuds achieve a 30dB noise reduction depth by
            combining active noise reduction and passive noise reduction.
          </p>
        </div>
      </section>
      <section className="desc1 ">
        <div className="desc1__right col-6">
          <span>Pass-through Mode</span>
          <h2 style={{ width: "60%" }}>
            Talk freely without taking off your earphones
          </h2>
          <p>
            Do you want to have free conversations even when you have earphones
            on? Turn on pass-through mode and never miss an important message,
            whether it's chatting with friends or broadcast announcements.
          </p>
        </div>
        <div className="desc1__left col-6">
          <img
            src="https://us.qcy.com/cdn/shop/files/t13_anc_details_2.jpg?v=1708420140&width=800"
            alt=""
          />
        </div>
      </section>
      <section className="desc1 ">
        <div className="desc1__left col-6">
          <img
            src="https://us.qcy.com/cdn/shop/files/t13_anc_details_3.jpg?v=1708420140&width=800"
            alt=""
          />
        </div>
        <div className="desc1__right col-6">
          <span>4 Microphones & ENC</span>
          <h2>No need to worry about wind noise</h2>
          <p>
            4 high-sensitivity microphone and environmental noise cancelling
            (ENC) algorithm filter most of the environmental noise during calls,
            making human voice clearer and communication more comfortable.
            Professional hydrodynamic windproof design reduces noise caused by
            wind hitting the microphone, and combined with call noise reduction
            technology, provides clear calls even outdoors.
          </p>
        </div>
      </section>
      <section className="desc1 ">
        <div className="desc1__right col-6">
          <span>10mm Dynamic driver</span>
          <h2>More realistic sound</h2>
          <p>
          The 10mm bio-diaphragm reproduces dynamic vocals and full and round low frequencies.
          The CCAW coil makes the mid and high frequencies clear and bright, easily adapting to various music styles.
          </p>
        </div>
        <div className="desc1__left col-6">
          <img
            src="https://us.qcy.com/cdn/shop/files/t13_anc_details_4.jpg?v=1708420140&width=800"
            alt=""
          />
        </div>
      </section>
      <section>
        <img
          src="https://us.qcy.com/cdn/shop/files/banner_list_2_83100d53-ad53-4d21-9327-bd7c01235f5b.jpg?v=1708420786&width=2000"
          alt=""
          width={"100%"}
        />
      </section>
      <ScrollButton />
      <FAQ />
    </main></>
  );
};

export default QcyT13Anc;
