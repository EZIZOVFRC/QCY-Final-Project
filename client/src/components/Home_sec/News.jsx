import React, { useEffect, useState } from 'react';
import './News.scss';
import axios from 'axios';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:8080/api/news")
          .then((res) => {
            setNews(res.data)
          })
          .catch((error) => {
            console.error("Error fetching news:", error);
          });
    }, []);

    return (
        <section className='nws'>
          <h2>LATEST NEWS</h2>
            {news.slice(0,4).map((item, index) => (
                <div className='nw' key={index}>
                    <img src={`http://localhost:8080/public/${item.image}`} alt="" />
                    <div className="nw__dates">
                    <h5>{item.date}</h5>
                    <p>{item.desc}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default News;
