import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProductsSec1 = () => {
  return (
    <>
    <section className='sec1 ' style={{paddingTop:'80px',height:'100vh',}}>
    <Carousel fade touch>
      <Carousel.Item className='item1'>
        <img  src="https://us.qcy.com/cdn/shop/files/1920x730.png?v=1704692455&width=2000" alt="" />
        <Carousel.Caption className='cap1' style={{color:'black'}}>
          <h3>QCY H3</h3>
          <p>Enjoy Tranquil Night!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item2'  >
        <img src="https://us.qcy.com/cdn/shop/files/lQDPKHRx0Li5WLfNAtrNB4CwHg34BZ7qEFgFh-AQUFSbAA_1920_730.jpg?v=1704692492&width=1800" alt="" />
        <Carousel.Caption className='cap2' style={{color:'white'}}>
          <h3>QCY t13 X</h3>
          <p>Enjoy With ANC!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    </>
  )
}

export default ProductsSec1
