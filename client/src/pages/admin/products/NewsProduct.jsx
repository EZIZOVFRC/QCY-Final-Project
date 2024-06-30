import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import MainContext from '../../../context/context';

function NewsProduct() {
const {news,setnews}=useContext(MainContext)

  useEffect(() => {
    axios.get("http://localhost:8080/api/news")
      .then(res => {
        setHead(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [setnews]);

  const deleteData = (itemId) => {
    axios.delete(`http://localhost:8080/api/news/${itemId}`).then(() => {
      const newData = news.filter((x) => x._id !== itemId);
      setnews(newData);
    }).catch((error) => {
      console.error("Error deleting data:", error);
    });
  }

  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <h1 style={{ paddingTop: '100px',textAlign:'center',fontSize:'42px' }}>News</h1>
      <div style={{ paddingTop: '100px' }}>
        <table className="table prdct">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
            news.map((item) => (
                <tr key={item._id}>
                  <th scope="row"><img src={`http://localhost:8080/public/${item.image}`} alt="" width={'70px'} /></th>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td><button onClick={() => deleteData(item._id)}><i className="fa-solid fa-delete-left"></i></button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default NewsProduct;
