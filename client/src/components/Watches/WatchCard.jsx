import React, { useContext, useState, useEffect } from 'react';
import MainContext from '../../context/context';
import './Watches.scss';
import { Link } from 'react-router-dom';

function WatchCard({ item }) {
  const { addToBasket, addToWish } = useContext(MainContext);
  const [isWishAdded, setIsWishAdded] = useState(false);
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    const wishList = JSON.parse(localStorage.getItem('wishList')) || [];
    if (wishList.includes(item._id)) {
      setIsWishAdded(true);
    }
  }, [item._id]);

  const handleAddToWish = () => {
    const wishList = JSON.parse(localStorage.getItem('wishList')) || [];
    if (isWishAdded) {
      const updatedWishList = wishList.filter(id => id !== item._id);
      localStorage.setItem('wishList', JSON.stringify(updatedWishList));
    } else {
      wishList.push(item._id);
      localStorage.setItem('wishList', JSON.stringify(wishList));
    }
    addToWish(item);
    setIsWishAdded(!isWishAdded);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className='watch col-4'>
      <Link to={`/detail/${item._id}`}><img src={`http://localhost:8080/public/${item.image}`} alt="" width={'100px'} /></Link>
      
      <span>{item.title}</span>
      <h5>{item.price}$</h5>
      <button className='add' onClick={() => addToBasket(item)}>Add To Cart</button>
      <button className='del' onClick={handleAddToWish}>
        <i className={`fa-solid fa-heart`} style={{ color: isWishAdded ? 'red' : '' }}></i>
      </button>
      {showToast && <div className="toast">{isWishAdded ? 'Removed from Wishlist' : 'Added to Wishlist'}</div>}
    </div>
  );
}

export default WatchCard;
