import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.scss";
import MainContext from "../../context/context";
import QcyH4Detail from "./SpecialDetailPages/QcyH4Detail";
import QcyArcBuds from './SpecialDetailPages/QcyArcBuds';
import QcyT13Anc from './SpecialDetailPages/QcyT13Anc';

import ProductDetail from "./ProductDetail";
import FAQ from "../Contact/FAQ";
import { Helmet } from "react-helmet";

const DetailPage = () => {
  const { id } = useParams();
  const { full, basketItems, setBasketItems, addToWish } = useContext(MainContext);
  const [detail, setDetail] = useState(null);
  const [count, setCount] = useState(1);
  const [isWishAdded, setIsWishAdded] = useState(false);
  const [inCartCount, setInCartCount] = useState(0);

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
    const wishList = JSON.parse(localStorage.getItem('wishList')) || [];
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
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
  };

  const handleAddToBasket = () => {
    addToBasket(detail, count);
    setInCartCount(inCartCount + count);
  };

  const handleAddToWish = () => {
    const wishList = JSON.parse(localStorage.getItem('wishList')) || [];
    if (isWishAdded) {
      const updatedWishList = wishList.filter(id => id !== detail._id);
      localStorage.setItem('wishList', JSON.stringify(updatedWishList));
    } else {
      wishList.push(detail._id);
      localStorage.setItem('wishList', JSON.stringify(wishList));
    }
    addToWish(detail);
    setIsWishAdded(!isWishAdded);
  };

  return detail.title.includes('H') ? (
    <QcyH4Detail />
  ) : detail.title.includes('Arc') ? (
    <QcyArcBuds/>
  ) : detail.title.includes('T13') ? (
    <QcyT13Anc />
  ) : (
    <>
    <Helmet>
      <title>DETAIL</title>
    </Helmet>
    <main>
      <section className="detail">
      <div className="detail__left col-6">
        <img src={`http://localhost:8080/public/${detail.image}`} alt={detail.title} />
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
    <FAQ/>
    </main></>
  );
};

export default DetailPage;
