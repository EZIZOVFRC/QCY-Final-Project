import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../context/context';
import './WishList.scss';
import News from '../Home_sec/News';
import WatchList from '../Watches/WatchList';
import { Helmet } from 'react-helmet';

const WishList = () => {
  const { wishItems, addToWish, addToBasket,data } = useContext(MainContext);
  const [showToast, setShowToast] = useState(false);

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

  return (
    <>
    <Helmet>
      <title>FAVORITES</title>
    </Helmet>
    <main id='wi'>
      <h1>Favorites</h1>
      <table className="table table-hover wishTable">
          <thead>
            <tr>
              <th scope="col" className='wishT'></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              wishItems.map((item, index) => {
                const heartColor = isItemInWishList(item.item) ? 'red' : '';
                return (
                  <tr className='tr wishTr' key={index}>
                    <th scope="row" className='mgi'><img src={`http://localhost:8080/public/${item.item.image}`} width={'200px'} alt="" /> <div>
                    <h3>{item.item.title}</h3>
                    <span>{item.item.price} $</span>
                      </div></th>
                      <th className='wishBasket'>
                        <button  onClick={()=>{
                          addToBasket(item.item)
                        }}>Add To Cart</button>
                      </th>
                      <th className='wishWish'>
                      <button className='del' onClick={() => handleAddToWish(item.item)}>
                    <i className={`fa-solid fa-heart`} style={{ color: heartColor }}></i>
                  </button>
                      </th>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <WatchList data={data}/>
        <News/>
    </main></>
  );
}

export default WishList;
