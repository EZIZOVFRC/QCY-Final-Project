import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import MainContext from '../../../context/context';

function EarbudsProduct() {
const {ear,setEar}=useContext(MainContext)

  useEffect(() => {
    axios.get("http://localhost:8080/api/earbuds")
      .then(res => {
        setEar(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [setEar]);

  const deleteData = (itemId) => {
    axios.delete(`http://localhost:8080/api/earbuds/${itemId}`).then(() => {
      const newData = ear.filter((x) => x._id !== itemId);
      setEar(newData);
    }).catch((error) => {
      console.error("Error deleting data:", error);
    });
  }

  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <h1 style={{ paddingTop: '100px',textAlign:'center',fontSize:'42px' }}>Ear Buds</h1>
      <div style={{ paddingTop: '100px' }}>
        <table className="table prdct">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
            ear.map((item) => (
                <tr key={item._id}>
                  <th scope="row"><img src={`http://localhost:8080/public/${item.image}`} alt="" width={'70px'} /></th>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
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

export default EarbudsProduct;
