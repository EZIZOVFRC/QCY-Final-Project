import React, { useState, useEffect, useContext } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CheckoutForm.scss";
import MainContext from "../../context/context";
import { Helmet } from "react-helmet";

const stripePromise = loadStripe(
  "pk_test_51PX0OxEcSQXKPZFeUiCHAT8W0qxLpcOG57CLxmMDmYLLPk2JwbdDhTdBOvQ7h5TDZnXAN0HWyrQ1AqTTFfkf16Jf00NCFenydx"
);

const CheckoutForm = ({ clientSecret, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { basketItems, setBasketItems } = useContext(MainContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [orderHeadphones, setOrderHeadphones] = useState([]);
  const [orderEarbuds, setOrderEarbuds] = useState([]);
  const [orderWatches, setOrderWatches] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
        receipt_email: email,
      }
    );

    if (error) {
      console.error("[error]", error);
    } else {
      axios
        .post("http://localhost:8080/api/order", {
          email,
          name,
          orderHeadphones,
          orderEarbuds,
          orderWatches,
        })
        .then(() => {
          setBasketItems([]);
          localStorage.removeItem("basketItems");
          navigate("/success");
        })
        .catch((error) => {
          console.error("Order creation error:", error);
        });

      console.log("[PaymentIntent]", paymentIntent);
    }
  };

  useEffect(() => {
    const typeFilter = (items) => {
      const headphones = [];
      const earbuds = [];
      const watches = [];

      items.forEach((item) => {
        if (item.type === "headphones") {
          headphones.push(item);
        } else if (item.type === "earbuds") {
          earbuds.push(item);
        } else if (item.type === "watches") {
          watches.push(item);
        }
      });

      setOrderHeadphones(headphones);
      setOrderEarbuds(earbuds);
      setOrderWatches(watches);
    };

    typeFilter(basketItems);
  }, [basketItems]);

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className="form-row">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                lineHeight: "24px",
                placeholder: "Enter your card details",
              },
            },
          }}
        />
      </div>
      <button type="submit" disabled={!stripe} className="pay-button">
        Pay ${amount / 100}
      </button>
    </form>
  );
};

const WrappedCheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const { basketItems } = useContext(MainContext);

  useEffect(() => {
    const calculateTotalAmount = () => {
      return basketItems.reduce(
        (total, item) => total + item.totalPrice * 100,
        0
      );
    };

    const fetchPaymentIntent = async () => {
      const amount = calculateTotalAmount();
      try {
        const res = await axios.post(
          "http://localhost:8080/create-payment-intent",
          { amount }
        );
        setClientSecret(res.data.clientSecret);
        setTotalAmount(amount);
      } catch (error) {
        console.error("Error when creating payment intent:", error);
      }
    };

    fetchPaymentIntent();
  }, [basketItems]);

  return (
    <>
    <Helmet>
      <title>CHECKOUT</title>
    </Helmet>
    <main className="stripe">
      <h1>Complete Payment</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm clientSecret={clientSecret} amount={totalAmount} />
      </Elements>
    </main>
    </>
  );
};

export default WrappedCheckoutForm;
