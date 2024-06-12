import React, { useContext, useState, useEffect } from 'react';
import MainContext from '../../context/context';
import './Watches.scss'; 

function WatchCard({ item }) {
  const { addToBasket, addToWish } = useContext(MainContext);
  const [isWishAdded, setIsWishAdded] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [heartColor, setHeartColor] = useState('');

  useEffect(() => {
    if (isWishAdded) {
      setHeartColor('red'); 
    } else {
      setHeartColor(''); 
    }
  }, [isWishAdded]);

  const handleAddToWish = () => {
    addToWish(item);
    setIsWishAdded(!isWishAdded); 
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); 
  };

  return (
    <div className='watch col-4'>
      <img src={`http://localhost:8080/public/${item.image}`} alt="" width={'100px'} />
      <span>{item.title}</span>
      <h5>{item.price}$</h5>
      <button className='add' onClick={() => addToBasket(item)}>Add To Basket</button>
      <button className='del' onClick={handleAddToWish}>
        <i className={`fa-solid fa-heart`} style={{ color: heartColor }}></i>
      </button>
      {showToast && <div className="toast">Added to Wishlist</div>}
    </div>
  );
}

export default WatchCard;
