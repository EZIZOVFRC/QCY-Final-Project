import React, { useContext, useState, useEffect } from "react";
import MainContext from "../../context/context";

import LoadingPage from "../../pages/LoadingPage/LoadingPage";
import { Link } from "react-router-dom";


export function Filtre(props) {
  return (
    <div className="filtr" style={{ margin: "10px" }}>
      <h1>
        <u>{props.filtre.toUpperCase().slice(0, 1) + props.filtre.slice(1, 10)}</u>
      </h1>
      <button onClick={() => props.setFiltre("earbuds")}>
        <img src="https://www.qcy.com/upfile/1703051465250702.jpg" alt="" /> Earbuds
      </button>
      <button onClick={() => props.setFiltre("headphones")}>
        <img src="https://www.qcy.com/upfile/1695102408131604.jpg" alt="" />Headphones
      </button>
      <button onClick={() => props.setFiltre("Watches")}>
        <img src="https://www.qcy.com/upfile/1695102425895583.jpg" alt="" />Watches
      </button>
    </div>
  );
}

export function SideMenu({initialFilter}) {
  const { full, addToWish, addToBasket,loading,setLoading } = useContext(MainContext);
  const [filtre, setFiltre] = useState(initialFilter);
  const [filtreliVeri, setFiltreliVeri] = useState(full);
  const [showToast, setShowToast] = useState(false);


  useEffect(() => {
    setLoading(true)
    let filtreliData = full;
    if (filtre === "earbuds") {
      filtreliData = full.filter(item => item.desc.includes("earbuds"))
    } else if (filtre === "headphones") {
      filtreliData = full.filter(item => item.desc.includes("headphones"))
    } else if (filtre === "Watches") {
      filtreliData = full.filter(item => item.title.includes("Watches"))
    }
    setFiltreliVeri(filtreliData)
    setLoading(false)
  }, [filtre, full]);

  const handleAddToWish = (item) => {
    const wishList = JSON.parse(localStorage.getItem('wishList')) || [];
    if (wishList.includes(item._id)) {
      const updatedWishList = wishList.filter(id => id !== item._id);
      localStorage.setItem('wishList', JSON.stringify(updatedWishList));
    } else {
      wishList.push(item._id);
      localStorage.setItem('wishList', JSON.stringify(wishList));
    }
    addToWish(item);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const isItemInWishList = (item) => {
    const wishList = JSON.parse(localStorage.getItem('wishList')) || [];
    return wishList.includes(item._id);
  };

  if (loading) {
    return <LoadingPage />; 
  }

  return (
    <div className="SideMenu">
      <Filtre filtre={filtre} setFiltre={setFiltre} />
      <div className="sd">
        {filtreliVeri.map((item, index) => {
          const heartColor = isItemInWishList(item) ? 'red' : '';
          return (
            <div key={index} className="side col-3">
              <Link to={`/detail/${item._id}`}><img src={`http://localhost:8080/public/${item.image}`} width={'100px'} alt="" /></Link>
              
              <h3>{item.title}</h3>
              <p>{item.price}$</p>
              <button className='add' onClick={() => addToBasket(item)}>Add To Cart<i class="fa-solid fa-cart-plus"></i></button>
              <button className='del' onClick={() => handleAddToWish(item)}>
                <i className={`fa-solid fa-heart`} style={{ color: heartColor }}></i>
              </button>
              {showToast && <div className="toast">{isItemInWishList(item) ? 'Removed from Wishlist' : 'Added to Wishlist'}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
