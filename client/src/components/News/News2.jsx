import React, { useContext, useEffect } from 'react'
import MainContext from '../../context/context'
import AOS from "aos";
import "aos/dist/aos.css";
const News2 = () => {
    const {news}=useContext(MainContext)
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <section className='news2'>
        
        {
            news.map((item,index)=>{
                return <div className='col-3 newCard' key={index} data-aos="zoom-out"data-aos-duration="1000">
                    <img src={`http://localhost:8080/public/${item.image}`} alt="" />
                    <span>{item.date}</span>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                </div>
            })
        }
    </section>
  )
}

export default News2
