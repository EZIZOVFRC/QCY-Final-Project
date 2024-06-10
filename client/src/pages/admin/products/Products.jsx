import React, { useContext } from 'react'

import axios from 'axios';
import { Helmet } from 'react-helmet';
import MainContext from '../../../context/context';


function Products() {
  const { data, setdata } = useContext(MainContext);
  const deleteData=(itemId)=>{
    axios.delete(`http://localhost:8080/api/exam/${itemId}`).then((res)=>{
      const newData=[...res.data.filter((x)=>x._id!=itemId)]
      setdata([...newData])
    })
  }
  return (
   <>
   <Helmet>
    <title>Products</title>
   </Helmet>
    <div>
      <table class="table">
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
    data.map((item)=>{
      
      
      return <tr key={item._id}>
      <th scope="row"><img src={item.image} alt="" width={'70px'} /></th>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td><button onClick={()=>{
        deleteData(item._id)
      }}>Delete</button></td>
    </tr>
    })
  }
    
  </tbody>
</table>
    </div></>
  )
}

export default Products