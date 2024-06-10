import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Sec1.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
const Sec1 = () => {
  return (
    <>
    <section className='sec1'>
    <Carousel fade touch>
      <Carousel.Item className='item1'>
        <img src="https://www.qcy.com/upfile/1697534191211653.jpg" alt="" />
        <Carousel.Caption className='cap1'>
          <h3>QCY H3</h3>
          <p>Enjoy Tranquil Night!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item2'>
        <img src="https://www.qcy.com/upfile/1695102868530994.jpg" alt="" />
        <Carousel.Caption className='cap2'>
          <h3>QCY t13 X</h3>
          <p>Enjoy With ANC!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    </>
  )
}

export default Sec1
