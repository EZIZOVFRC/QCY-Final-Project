import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("false");
  const [data, setdata] = useState([]);
  



  const [basketItems,setBasketItems]=useState(localStorage.getItem('basketItems')?JSON.parse(localStorage.getItem('basketItems')):[])

  const addToBasket=(item)=>{
      const target=basketItems.find((x)=>x.item._id==item._id)
      if (target) {
          target.count+=1;
          target.totalPrice+=item.price
          setBasketItems([...basketItems])
          localStorage.setItem('basketItems',JSON.stringify(basketItems))
          console.log('Added to basket');
          
      }else{
          const newItem={
              item:item,
              count:1,
              totalPrice:item.price,
          }
          setBasketItems([...basketItems,newItem])
          localStorage.setItem('basketItems',JSON.stringify(basketItems))
          console.log('Added to basket c');
      }
  }

  const deleteToBasket=(item)=>{
      const target=basketItems.find((x)=>x.item._id==item._id)
      if (target.count>1) {
          target.count-=1;
          target.totalPrice-=item.price

          setBasketItems([...basketItems])
          localStorage.setItem('basketItems',JSON.stringify(basketItems.filter((x)=>x.item.id!=item.id)))
      }else{
          setBasketItems([...basketItems.filter((x)=>x.item._id!=item._id)])
          localStorage.setItem('basketItems',JSON.stringify(basketItems.filter((x)=>x.item.id=item.id)))
      }
  }

  const deleteBasket=(item)=>{
    const target=basketItems.find((x)=>x.item._id==item._id)
        setBasketItems([...basketItems.filter((x)=>x.item._id!=item._id)])
        localStorage.setItem('basketItems',JSON.stringify(basketItems.filter((x)=>x.item.id=item.id)))
}


  const [wishItems,setWishItems]=useState(localStorage.getItem('wishItems')?JSON.parse(localStorage.getItem('wishItems')):[])

  const addToWish=(item)=>{
      const target=wishItems.find((x)=>x.item._id==item._id)
      if (!target) {
          const newItem={
              item:item,
          }
          setWishItems([...wishItems,newItem])
          localStorage.setItem('wishItems',JSON.stringify(wishItems))
          console.log('Added To Wishlist');
          
      }else{
          setWishItems([...wishItems.filter((x)=>x.item._id!=item._id)])
          localStorage.setItem('wishItems',JSON.stringify(wishItems.filter((x)=>x.item.id=item.id)))
          console.log('Removed To Wishlist');
      }
  }


  const router = createBrowserRouter(ROUTES);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/watches")
      .then((res) => {
        setdata([...res.data]);
      })
      .catch((err) => {
        setError(err);
      });
  }, [])


  const context = {deleteBasket, loading, setLoading, error, setError, data, setdata ,basketItems,setBasketItems,wishItems,setWishItems,addToBasket,deleteToBasket,addToWish};
  return (
    <>
      <MainContext.Provider value={context}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  );
}

export default App;
