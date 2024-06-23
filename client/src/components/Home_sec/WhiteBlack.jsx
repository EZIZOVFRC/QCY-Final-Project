import React from 'react';
import BeforeAfterSlider from '../BeforeAfterSlider/BeforeAfterSlider';
import { Link } from 'react-router-dom';
const WhiteBlack = () => {
  return (
    <div className='be'>
      <h1 style={{textAlign:'center',fontSize:'64px',marginBottom:'30px'}}>Black/White</h1>
      <Link to={'/detail/666bf1224d5db32b64a88134'}>      <BeforeAfterSlider  />
      </Link>
    </div>
  );
};

export default WhiteBlack;