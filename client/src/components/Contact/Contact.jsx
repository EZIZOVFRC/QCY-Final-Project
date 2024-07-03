import React, { useRef } from 'react'
import './Contact.scss'
import emailjs from '@emailjs/browser';
import FAQ from './FAQ';
import Location from './Location';
import ScrollButton from '../ScrollButton/ScrollButton';
import { Helmet } from 'react-helmet';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_le7nrge', 'template_ouzsoxt', form.current, {
            publicKey: 'tUQ2yZU6iqYB_ItPJ',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };
  return (
   <>
   <Helmet>
    <title>CONTACT</title>
   </Helmet>
    <main >
        <section className="contact_sec1">
    <h1>Contact Us</h1>
    <p>You can contact us through the following methods</p>
        </section>
        <section className="contact_sec2">
        <div className="contact_sec2__left col-6">
        <h2>Our Information</h2>
        <div className="contact_sec2__left__cards">
        <i class="fa-solid fa-map-location-dot"></i>
        <div className="contact_sec2__left__cards__info">
            <h5>Adress:</h5>
            <span>Dongguan Hele Electronics Co., Ltd.</span>
            <p>19th Floor, Gaosheng Technology Tower, Nancheng District, Dongguan City, China</p>
        </div>
        </div>
        <div className="contact_sec2__left__cards">
        <i class="fa-solid fa-phone"></i>
        <div className="contact_sec2__left__cards__info">
            <h5>Telephone Number:</h5>
            <span>+0086 13380399275</span>
            <p> +1(917)807-6754</p>
        </div>
        </div>
        <div className="contact_sec2__left__cards">
        <i class="fa-solid fa-envelope"></i>
        <div className="contact_sec2__left__cards__info">
            <h5>Mail Us</h5>
            <span>Customer Service: support@qcyearphone.com</span>
            <p> PR & Influencers Collab: pr@qcy.com</p>
        </div>
        </div>
        <div className="contact_sec2__left__cards">
        <i class="fa-regular fa-clock"></i>
        <div className="contact_sec2__left__cards__info">
            <h5>Service Time</h5>
            <span>Mon - Fri: 9:00AM - 6:00PM</span>
           
        </div>
        </div>
        </div>
        <form ref={form} onSubmit={sendEmail}  className="contact_sec2__right col-6">
            <h3>Send Us Your Question</h3>
            <label htmlFor="user_name">Your Name</label>
            <input type="text" name='user_name' placeholder='Enter your name...' required />
            <label htmlFor="user_email">Your Email</label>
            <input type="email" name='user_email' placeholder='Enter your Email...' required/>
            <label htmlFor="sub">Subject</label>
            <input type="text" name='sub' placeholder='Enter subject...' required />
            <label htmlFor="subject">Description</label>
            <textarea name="subject" placeholder='Enter your mesagge...' id="" ></textarea>
            <button type='submit'>Submit</button>
        </form>
        </section>
       <Location/>
        <FAQ/>
       <ScrollButton/>
    </main></>
  )
}

export default Contact
