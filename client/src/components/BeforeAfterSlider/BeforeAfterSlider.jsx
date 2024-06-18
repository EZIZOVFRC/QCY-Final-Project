import React, { useState, useRef } from 'react';
import './BeforeAfterSlider.scss';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
const BeforeAfterSlider = ({ before, after }) => {

    const FIRST_IMAGE = {
        imageUrl: 'https://us.qcy.com/cdn/shop/files/black.png?v=1705285094&width=1200'
      };
      const SECOND_IMAGE = {
        imageUrl: 'https://us.qcy.com/cdn/shop/files/white.png?v=1705285093&width=1200'
      };
  return (
<>
<ReactBeforeSliderComponent className='beforeafterslider'
    firstImage={FIRST_IMAGE}
    secondImage={SECOND_IMAGE}
/>
</>
  );
};

export default BeforeAfterSlider;
