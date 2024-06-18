import React from 'react';
import BeforeAfterSlider from '../BeforeAfterSlider/BeforeAfterSlider';
// import BeforeAfterSlider from './BeforeAfterSlider';
// import beforeImage from './path-to-before-image.jpg';
// import afterImage from './path-to-after-image.jpg';

const WhiteBlack = () => {
  return (
    <div className='be'>
      <h1 style={{textAlign:'center',fontSize:'64px',marginBottom:'30px'}}>Black/White</h1>
      <BeforeAfterSlider  />
    </div>
  );
};

export default WhiteBlack;