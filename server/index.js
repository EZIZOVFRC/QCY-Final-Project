
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const multer = require('multer')
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const app = express()
require("dotenv").config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
app.use(cors())
app.use(express.json())
app.use('/public', express.static('public/images'));
// ----------------------

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});


passport.use(new GoogleStrategy({
  clientID: 'GOOGLE_CLIENT_ID',
  clientSecret: 'GOOGLE_CLIENT_SECRET',
  callbackURL: 'http://localhost:8080/auth/google/callback'
},
(token, tokenSecret, profile, done) => {
  return done(null, profile);
}));

passport.use(new FacebookStrategy({
  clientID: 'FACEBOOK_APP_ID',
  clientSecret: 'FACEBOOK_APP_SECRET',
  callbackURL: 'http://localhost:8080/auth/facebook/callback'
},
(token, tokenSecret, profile, done) => {
  return done(null, profile);
}));


app.use(session({
  secret: 'SECRET_KEY',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  });
// ------------
mongoose.connect(process.env.sec).then(() => {
    console.log("qosuldu")
    })
    
app.listen(8080, () => {
    console.log("isleyir")
})

app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  

const headphonesRouter = require("./routes/headphones.routes");
app.use("/api/headphones", headphonesRouter);

const watchesRouter = require("./routes/watches.routes");
app.use("/api/watches", watchesRouter);

const newsRouter = require("./routes/news.routes");
app.use("/api/news", newsRouter);

const earBudsRouter = require("./routes/earBuds.routes");
app.use("/api/earBuds", earBudsRouter);
const orderRouter = require("./routes/order.routes");
app.use("/api/order", orderRouter);

const userRouter = require("./routes/user.routes");
app.use("/api", userRouter);