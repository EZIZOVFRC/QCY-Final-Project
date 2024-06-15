import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../context/context';
import './WishList.scss';

const WishList = () => {
  const { wishItems, addToWish, addToBasket } = useContext(MainContext);
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
    <main id='wi'>
      <h1>Wish List</h1>
      <section className='wishlist' style={{ paddingTop: '100px' }}>
        {
          wishItems.length === 0 ? (
            <h2>Wishlist is empty</h2>
          ) : (
            wishItems.map((item, index) => {
              const heartColor = isItemInWishList(item.item) ? 'red' : '';
              return (
                <div className='mywish col-4' key={index}>
                  <img src={`http://localhost:8080/public/${item.item.image}`} alt="" width={'100px'} />
                  <span>{item.item.title}</span>
                  <h5>{item.item.price}$</h5>
                  <button className='add' onClick={() => addToBasket(item.item)}>Add To Cart</button>
                  <button className='del' onClick={() => handleAddToWish(item.item)}>
                    <i className={`fa-solid fa-heart`} style={{ color: heartColor }}></i>
                  </button>
                  {showToast && <div className="toast">{isItemInWishList(item.item) ? 'Removed from Wishlist' : 'Added to Wishlist'}</div>}
                </div>
              );
            })
          )
        }
      </section>
    </main>
  );
}

export default WishList;
