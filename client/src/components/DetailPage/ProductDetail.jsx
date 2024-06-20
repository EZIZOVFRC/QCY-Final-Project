import React from "react";

const ProductDetail = ({
  detail,
  count,
  setCount,
  isWishAdded,
  handleAddToBasket,
  handleAddToWish,
  inCartCount,
}) => {
  return (
    <div className="detail__right col-6" style={{ paddingTop: "100px" }}>
      <h4>{detail.title}</h4>
      <span>Price: {detail.price} $</span>
      <p>{detail.desc}</p>
      <h5>Count:</h5>
      <div className="detail__right__count">
        <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div className="detail__right__carts">
        <button className="detail__right__carts__cart" onClick={handleAddToBasket}>
          Add To Cart
        </button>
        <button
          className="detail__right__carts__wish"
          onClick={handleAddToWish}
          style={{ backgroundColor: isWishAdded ? 'red' : '', color: isWishAdded ? 'white' : '' }}
        >
          {isWishAdded ? 'Added to Wish List' : 'Add To Wish List'}
        </button>
      </div>
      <h3>In Cart: {inCartCount}</h3>
    </div>
  );
};

export default ProductDetail
