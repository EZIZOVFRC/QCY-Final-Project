import React, { useEffect, useRef, useState } from "react";
import "./QcyHistory.scss";
import video from "../../../public/Videos/story.mp4";
import ScrollButton from "../ScrollButton/ScrollButton";

import { Helmet } from 'react-helmet';

const QcyHistory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const storyElements = useRef([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    storyElements.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (storyElements.current) {
        storyElements.current.forEach((element) => {
          if (element) {
            observer.unobserve(element);
          }
        });
      }
    };
  }, []);

  return (
   <>
    <Helmet>
    <title>ABOUT</title>
</Helmet>
    <main>
      <section className="story1" ref={(el) => (storyElements.current[0] = el)}>
        <img src="https://www.qcy.com/upfile/1693292479566964.png" alt="" />
        <h3>Be Creative Go Beyond</h3>
        <div className="Appp">
          <button onClick={handleOpenModal} className="openVideoBt">
            Watch Video<i className="fa-solid fa-play"></i>
          </button>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close-btn" onClick={handleCloseModal}>
                  &times;
                </span>
                <video id="videoPlayer" controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </div>
      </section>
      <h2 id="str">QCY's Story</h2>
      <section className="story2" ref={(el) => (storyElements.current[1] = el)}>
        <div className="story2__left col-6">
          <img src="https://www.qcy.com/upfile/1697682538717716.jpg" alt="" />
        </div>
        <div className="story2__right col-6">
          <h3>EXPLORING THE STORY OF QCY</h3>
          <div className="story2__right__explore">
            <img src="https://www.qcy.com/phone/images/exp_1.png" alt="" />
            <div className="story2__right__explore__exp">
              <h5>VISION</h5>
              <p>Becoming a leader in wireless audio</p>
            </div>
          </div>
          <div className="story2__right__explore">
            <img src="https://www.qcy.com/phone/images/exp_2.png" alt="" />
            <div className="story2__right__explore__exp">
              <h5>MISSION</h5>
              <p>Make it easy for everyone to experience technological life</p>
            </div>
          </div>
          <div className="story2__right__explore">
            <img src="https://www.qcy.com/upfile/1702348750953121.png" alt="" />
            <div className="story2__right__explore__exp">
              <h5>VALORES</h5>
              <p>Cooperation, Results-oriented, Innovation, Altruism</p>
            </div>
          </div>
          <div className="story2__right__explore">
            <img src="https://www.qcy.com/phone/images/exp_3.png" alt="" />
            <div className="story2__right__explore__exp">
              <h5>ADVOCATE</h5>
              <p>Be Creative Go Beyond</p>
            </div>
          </div>
        </div>
      </section>
      <section className="story3" ref={(el) => (storyElements.current[2] = el)}>
        <div className="story3__left col-6">
          <h5>BRAND BACKGROUND</h5>
          <p>
            QCY - a brand under Dongguan Hele Electronics Co., Ltd., founded in
            2009, is committed to creating technological and innovative wireless
            Bluetooth products for the new generation of young people. The QCY
            brand advocates for "creativity and transcendence", adhering to the
            brand concept of technology, vitality, focus, and creativity to
            convey to every user, better stimulating inspiration, constantly
            innovating, and daring to break through.
          </p>
          <p>
            In 2013, QCY first logged into Tmall and climbed to the top spot in
            the Bluetooth category within 20 days; One year later, it grew into
            a well-known domestic internet brand. The marketing network has
            spread to more than 20 provinces across the country, as well as more
            than 30 countries and regions around the world such as North
            America, Europe, and Southeast Asia. It has 11 national level agents
            in South Korea, Japan, Russia, and other places, and its product
            export sales rank among the top in the world.
          </p>
          <p>
            In the first quarter of 2022, QCY ranked fourth in the global market
            share of true wireless Bluetooth earphone brands, becoming the
            fourth largest Bluetooth earphone brand in the world
          </p>
        </div>
        <div className="story3__right col-6">
          <img src="https://www.qcy.com/upfile/1697681287541885.jpg" alt="" />
        </div>
      </section>
      <section className="story4" ref={(el) => (storyElements.current[3] = el)}>
        <h5>Understanding QCY</h5>
        <p>
          QCY is derived from the initial letter of "to be creative and
          surpass", reflecting the spirit of continuous innovation and daring to
          break through.
        </p>
        <p>
          The logo comes from the elements of Mobius rings and star rings. The
          Mobius ring is a symbol of repeated cycles and the pursuit of
          eternity, while the star ring element tilts and compresses the circle,
          representing breaking conventions and reflecting QCY's endless
          exploration and innovation spirit and infinite possibilities in the
          field of technology.
        </p>
      </section>
      <section className="story5" ref={(el) => (storyElements.current[4] = el)}>
        <div className="story5__left col-6">
          <img src="https://www.qcy.com/upfile/1686303153484894.png" alt="" />
        </div>
        <div className="story5__right">
          <h3>Brand Mascot</h3>
          <p>
            In a highly developed mysterious planet, There is an elephant that
            loves music and rhythm, Filled with countless unknown symbols. It is
            good at listening attentively to every note around it, And shoulder
            the mission of "creativity and transcendence" for humanity,
            Continuously pursuing innovation and breakthroughs.
          </p>
          <span>The name of this magical elephant is'Imagery'.</span>
        </div>
      </section>
      <ScrollButton/>
    </main></>
  );
};

export default QcyHistory;
