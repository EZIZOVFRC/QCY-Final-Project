import React, { useContext, useState, useEffect } from "react";
import MainContext from "../../context/context";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";
import { Link } from "react-router-dom";
import './Products.scss';

export function Filtre({ filtre, setFiltre }) {
  return (
    <div className="filtr" style={{ margin: "10px" }}>
      <h1>
        <u>{filtre.charAt(0).toUpperCase() + filtre.slice(1)}</u>
      </h1>
      <button onClick={() => setFiltre("earbuds")}>
        <img src="https://www.qcy.com/upfile/1703051465250702.jpg" alt="" /> Earbuds
      </button>
      <button onClick={() => setFiltre("headphones")}>
        <img src="https://www.qcy.com/upfile/1695102408131604.jpg" alt="" />Headphones
      </button>
      <button onClick={() => setFiltre("Watches")}>
        <img src="https://www.qcy.com/upfile/1695102425895583.jpg" alt="" />Watches
      </button>
    </div>
  );
}

export function SideMenu({ initialFilter }) {
  const { full, addToWish, addToBasket, loading, setLoading } = useContext(MainContext);
  const [filtre, setFiltre] = useState(initialFilter);
  const [filtreliVeri, setFiltreliVeri] = useState({ data: full, type: '' });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setLoading(true);
    let filteredData = full;

    if (filtre === "earbuds") {
      filteredData = { data: full.filter(item => item.desc.includes("earbuds")), type: 'earbuds' };
    } else if (filtre === "headphones") {
      filteredData = { data: full.filter(item => item.desc.includes("headphones")), type: 'headphones' };
    } else if (filtre === "Watches") {
      filteredData = { data: full.filter(item => item.title.includes("Watches")), type: 'watches' };
    }

    setFiltreliVeri(filteredData);
    setLoading(false);
  }, [filtre, full, setLoading]);

  const handleAddToWish = (item) => {
    const wishList = JSON.parse(localStorage.getItem('wishList')) || [];
    const isInWishList = wishList.includes(item._id);

    const updatedWishList = isInWishList
      ? wishList.filter(id => id !== item._id)
      : [...wishList, item._id];

    localStorage.setItem('wishList', JSON.stringify(updatedWishList));
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
        {filtreliVeri.data.map((item, index) => (
          <div key={index} className="side col-3">
            <Link to={`/detail/${item._id}`}>
              <img src={`http://localhost:8080/public/${item.image}`} width={'100px'} alt={item.title} />
            </Link>
            <h3>{item.title}</h3>
            <p>{item.price}$</p>
            <button className='add' onClick={() => addToBasket(item, filtreliVeri.type)}>Add To Cart<i className="fa-solid fa-cart-plus"></i></button>
            <button className='del' onClick={() => handleAddToWish(item)}>
              <i className={`fa-solid fa-heart`} style={{ color: isItemInWishList(item) ? 'red' : '' }}></i>
            </button>
            {showToast && <div className="toast">{isItemInWishList(item) ? 'Removed from Wishlist' : 'Added to Wishlist'}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
