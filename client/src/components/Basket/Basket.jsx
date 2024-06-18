import React, { useContext } from 'react';
import MainContext from '../../context/context';
import './Basket.scss';
import Contact from '../Contact/Contact';

const Basket = () => {
  const { addToBasket, deleteToBasket, basketItems, deleteBasket } = useContext(MainContext);
  let total = 0;
  return (
    <main>
      <section className='basket'>
        <h1>Cart</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Count</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              basketItems.map((item, index) => {
                total += item.totalPrice;
                return (
                  <tr className='tr' key={index}>
                    <th scope="row" className='mgi'><img src={`http://localhost:8080/public/${item.item.image}`} width={'200px'} alt="" /></th>
                    <td>{item.item.title}</td>
                    <td>{item.item.price} $</td>
                    <td>
                      <button className='minus' onClick={() => { deleteToBasket(item.item) }}>-</button>
                      <span>{item.count}</span>
                      <button className='plus' onClick={() => { addToBasket(item.item) }}>+</button>
                    </td>
                    <td>{item.totalPrice}</td>
                    <td>
                      <button className="noselect" onClick={() => { deleteBasket(item.item) }}>
                        <span className="text">Delete</span>
                        <span className="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                          </svg>
                        </span>
                      </button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <h2>Total: {total} $</h2>
      </section>
    </main>
  );
}

export default Basket;
