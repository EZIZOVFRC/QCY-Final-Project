import React from "react";

const Location = () => {
  return (
    <>
    <section className="contact__location">
      <div className="contact__location__left col-4">
        <h2>Location</h2>
        <div className="contact__location__left__info">
          <h5>Hele Electronics Marketing & R&D Center</h5>
          <p>
            19th Floor, Gaosheng Technology Tower, Nancheng District, Dongguan
            City, China
          </p>
        </div>
        <div className="contact__location__left__info">
          <h5>Production Base</h5>
          <p>
            Dongguan Hele Electronics Co., Ltd Guangxi Hesheng Electronics Co.,
            Ltd
          </p>
        </div>
      </div>
      <div className="contact__location__right col-8">
        <img src="https://www.qcy.com/upfile/1687251266238778.jpg" alt="" />
      </div>
    </section>
    <section className="contact_sec3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6955.911704707674!2d113.0652973731048!3d22.55044357734097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2sus!4v1718651108483!5m2!1str!2sus"  style={{width:"100%", height:"60vh"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </>
  );
};

export default Location;
