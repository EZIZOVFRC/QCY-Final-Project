import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../DetailPage.scss";
import { useParams } from "react-router-dom";
import MainContext from "../../../context/context";
import ProductDetail from "../ProductDetail";
import ScrollButton from './../../ScrollButton/ScrollButton';
import FAQ from "../../Contact/FAQ";
import WhiteBlack from "../../Home_sec/WhiteBlack";
import LoadingPage from './../../../pages/LoadingPage/LoadingPage';

const ImageSlider = () => {
  const { id } = useParams();
  const { full, basketItems, setBasketItems, addToWish } =
    useContext(MainContext);
  const [detail, setDetail] = useState(null);
  const [count, setCount] = useState(1);
  const [isWishAdded, setIsWishAdded] = useState(false);
  const [inCartCount, setInCartCount] = useState(0);
  const [mainImage, setMainImage] = useState(
    "https://us.qcy.com/cdn/shop/products/qcy-h3-qcy-official-2.jpg?v=1708937054&width=800"
  );

  const images = [
    "https://us.qcy.com/cdn/shop/products/qcy-h3-qcy-official-1.jpg?v=1708937052&width=800",
    "https://us.qcy.com/cdn/shop/products/qcy-h3-qcy-official-2.jpg?v=1708937054&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-h3-qcy-official-3.jpg?v=1708937055&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-h3-qcy-official-4.jpg?v=1708937056&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-h3-qcy-official-5.jpg?v=1708937057&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-h3-qcy-official-6.jpg?v=1708937058&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-h3-qcy-official-7.jpg?v=1708937059&width=800",
    "https://us.qcy.com/cdn/shop/files/qcy-h3-qcy-official-8.jpg?v=1708937061&width=800",
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

  if (!detail) return <LoadingPage/>

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
    slidesToShow: 4.75,
    slidesToScroll: 1,
    focusOnSelect: true,
    beforeChange: (current, next) => setMainImage(images[next]),
  };

  return (
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
            src="https://us.qcy.com/cdn/shop/files/800x800-2.jpg?v=1708243181&width=800"
            alt=""
          />
        </div>
        <div className="desc1__right col-6">
          <span>Shrink the Noise, Enjoy the Music</span>
          <h2>43dB Active Noise Cancellation</h2>
          <p>
            From airplane noise to people’s voices, our QCY H3 wireless
            headphones use hybrid ANC technology and built-in 6 noise-canceling
            microphones to keep out more high and mid frequency sounds than
            ever.
          </p>
          <p>
            H3 headphones achieve up to 43dB of depth noise cancellation. And
            you can adiusted noise canceling intensity among the 4 modes to find
            the most comfortable level.
          </p>
        </div>
      </section>
      <WhiteBlack/>
      <section className="desc1 ">
        <div className="desc1__right col-6">
          <h2 style={{ width: "60%" }}>Noise Cancelling Adapts to Ears</h2>
          <p>
            The independently developed BECAT (Binaural Ear Canal Adaptive
            Technology) can intelligently identify the ear canal structure, and
            perform adaptive noise reduction and audio correction in real time,
            allowing everyone can get the same high-quality noise reduction
            effect and audio experience.
          </p>
        </div>
        <div className="desc1__left col-6">
          <img
            src="https://us.qcy.com/cdn/shop/files/800x800-5.jpg?v=1708243181&width=800"
            alt=""
          />
        </div>
      </section>
      <section className="desc1 ">
        <div className="desc1__left col-6">
          <img
            src="https://us.qcy.com/cdn/shop/files/800x800-3.jpg?v=1708243181&width=800"
            alt=""
          />
        </div>
        <div className="desc1__right col-6">
          <h2>Reveal Original Sound</h2>
          <p>
            With a frequency response range of 40kHz, QCY H3 headsets can reveal
            sound quality beyond CD-level to create atmospheric personal cinema
            that surrounds you for a new way of listening. Custom oversized 40mm
            dynamic drivers produce Hi-Res Audio ensures headphones are capable
            of producing exceptional sound. ​
          </p>
        </div>
      </section>
      <section className="desc1 ">
        <div className="desc1__right col-6">
          <h2 >Multipoint Connection</h2>
          <p>
            Stay connected to two devices with Bluetooth 5.3 and multipoint
            connection. Instantly switch between music, calls, videos, and more
            on different devices hassle-free to save you time and effort.
          </p>
        </div>
        <div className="desc1__left col-6">
          <img
            src="https://us.qcy.com/cdn/shop/files/800x800-4_d07449f2-72b7-44e0-98a9-3a3506062386.jpg?v=1708243181&width=800"
            alt=""
          />
        </div>
      </section>
      <section>
        <img src="https://us.qcy.com/cdn/shop/files/H3---1920-__13.jpg?v=1708245242&width=1800" alt="" width={'100%'}/>
      </section>
      <ScrollButton/>
      <FAQ/>
    </main>
  );
};

export default ImageSlider;
