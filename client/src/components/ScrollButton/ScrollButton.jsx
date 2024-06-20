import React from 'react'
import '../Home_sec/Sec4.scss'
const ScrollButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <button onClick={scrollToTop} className="scrollToTopBtn">
    <i className="fa-solid fa-chevron-up"></i>
      Top
    </button>
  )
}

export default ScrollButton
