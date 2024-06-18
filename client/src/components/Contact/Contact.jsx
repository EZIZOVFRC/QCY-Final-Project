import React, { useRef } from 'react'
import './Contact.scss'
import emailjs from '@emailjs/browser';
import FAQ from './FAQ';
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
        <section className="contact_sec3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6955.911704707674!2d113.0652973731048!3d22.55044357734097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2sus!4v1718651108483!5m2!1str!2sus"  style={{width:"100%", height:"60vh"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
        <FAQ/>
    </main>
  )
}

export default Contact
