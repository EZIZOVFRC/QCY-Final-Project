import React, { useState, useEffect, useContext } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CheckoutForm.scss';
import MainContext from '../../context/context';

const stripePromise = loadStripe('pk_test_51PX0OxEcSQXKPZFeUiCHAT8W0qxLpcOG57CLxmMDmYLLPk2JwbdDhTdBOvQ7h5TDZnXAN0HWyrQ1AqTTFfkf16Jf00NCFenydx');

const CheckoutForm = ({ clientSecret, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { basketItems, setBasketItems } = useContext(MainContext);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (error) {
      console.error('[error]', error);
    } else {
      console.log('[PaymentIntent]', paymentIntent)
      setBasketItems([]);
      localStorage.removeItem('basketItems');
      navigate('/success')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="form-row">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '18px',
                lineHeight: '24px',
                placeholder: 'Enter your card details',
              },
            },
          }}
        />
      </div>
      <button type="submit" disabled={!stripe} className="pay-button">
        Pay
      </button>
    </form>
  );
};

const WrappedCheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const { basketItems } = useContext(MainContext);

  useEffect(() => {
    const calculateTotalAmount = () => {
      let total = 0;
      basketItems.forEach((item) => {
        total += item.totalPrice*100;
      });
      return total;
    };

    axios.post('http://localhost:8080/create-payment-intent', { amount: calculateTotalAmount() })
      .then(res => setClientSecret(res.data.clientSecret))
      .catch(error => console.error('error when payment:', error));

    setTotalAmount(calculateTotalAmount());
  }, [basketItems]);

  return (
    <main className='stripe'>
      <h1>Complete Payment</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm clientSecret={clientSecret} amount={totalAmount} />
      </Elements>
    </main>
  );
};

export default WrappedCheckoutForm;
