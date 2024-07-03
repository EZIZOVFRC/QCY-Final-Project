import React, { useContext, useState } from 'react';
import MainContext from '../../context/context';
import './Basket.scss';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Basket = () => {
  const { addToBasket, deleteToBasket, basketItems, deleteBasket } = useContext(MainContext);
  const [clientSecret, setClientSecret] = useState('');
  let total = 0;

  const handleCheckout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/create-payment-intent', { amount: total * 100 });
      setClientSecret(response.data.clientSecret);

      window.location.href = '/payment';
    } catch (error) {
      console.error('Ödeme intenti oluşturulurken hata:', error);
    }
  };

  return (
    <>
    <Helmet>
      <title>CART</title>
    </Helmet>
    <main>
        <h1 style={{padding:'120px 0px 0px',marginBottom:'-70px',textAlign:'center',fontSize:'44px'}}>Cart</h1>
      <section className='basket'>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Count</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {
              basketItems.map((item, index) => {
                total += item.totalPrice;
                return (
                  <tr className='tr' key={index}>
                    <th scope="row" className='mgi'><img src={`http://localhost:8080/public/${item.item.image}`} width={'200px'} alt="" /> <div>
                    <h3>{item.item.title}</h3>
                    <span>{item.item.price} $</span>
                      </div></th>

                    <td className='couunt'>
                      <div>
                      <button className='minus' onClick={() => { deleteToBasket(item.item) }}>-</button>
                      <span>{item.count}</span>
                      <button className='plus' onClick={() => { addToBasket(item.item) }}>+</button>
                      </div>
                      <button className="noselect" onClick={() => { deleteBasket(item.item) }}>
                        <span>Remove</span>
                      </button>
                    </td>
                    <td className='totalPrice'>{item.totalPrice} $</td>
                    
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <div className="basket__total">
          <div>
          <h2>Total: <span>{total}$</span></h2>
          <textarea name="" id="" placeholder='Order note...' rows={4}></textarea>
          <button onClick={handleCheckout}><span>Checkout</span> <i class="fa-regular fa-credit-card"></i></button>
          </div>
          <div className="basket__total__accept">
            <span>We Accept</span>
            <div className="images">
              <img src="https://cdn.dsmcdn.com/frontend/web/assets/images/troy-logo-transparent.png" alt="" />
              <img src="https://cdn.dsmcdn.com/web/production/footer-amex.png" alt="" />
              <img src="https://cdn.dsmcdn.com/web/production/footer-master-card.png" alt="" />
              <img src="https://cdn.dsmcdn.com/web/production/footer-visa-black.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='services'>
        <div className="services__boxs">
        <i class="fa-solid fa-box"></i>
        <h2>Fast Shipping</h2>
        <span>Your order will be delivered in about</span>
        <span>7-30 days</span>
        </div>
        <div className="services__boxs">
        <i class="fa-solid fa-headphones"></i>
        <h2>Customer Service</h2>
        <span>Please send us an email at </span>
        <span>support@qcyearphone.com</span>
        </div>
        <div className="services__boxs">
        <i class="fa-solid fa-money-bill"></i>
        <h2>30-Day money back</h2>
        <span>Refund guaranteed for quality issues </span>
        <span>within 30 days</span>
        </div>
        <div className="services__boxs">
        <i class="fa-solid fa-arrow-left-long"></i>
        <h2>365 days warranty</h2>
        <span>365-day warranty service if any </span>
        <span>problem occurs</span>
        </div>
        
      </section>
      
    </main></>
  );
};

export default Basket;
