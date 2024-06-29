import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("false");
  const [data, setdata] = useState([]);
  const [head,setHead]=useState([])
  const [ear,setEar]=useState([])
  const [full,setFull]=useState([])
  const [news, setnews] = useState([]);
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

  const addToWish = (item) => {
    const target = wishItems.find((x) => x.item._id === item._id);
    let newWishItems;
  
    if (!target) {
      const newItem = { item: item };
      newWishItems = [...wishItems, newItem];
      console.log('Added To Wishlist');
    } else {
      newWishItems = wishItems.filter((x) => x.item._id !== item._id);
      console.log('Removed From Wishlist');
    }
  
    setWishItems(newWishItems);
    localStorage.setItem('wishItems', JSON.stringify(newWishItems));
  };
  

  const router = createBrowserRouter(ROUTES);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/watches")
      .then((res) => {
        setFull(prevFull => [...prevFull, ...res.data]);
        
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/headphones")
      .then((res) => {
        setFull(prevFull => [...prevFull, ...res.data]);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/earbuds")
      .then((res) => {
        setFull(prevFull => [...prevFull, ...res.data]);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/news")
      .then((res) => {
        setnews([...res.data])
      })
      .catch((err) => {
        setError(err)
      })
  }, [])
  
  const context = {full,news,setnews,setFull,head,setHead,ear,setEar,deleteBasket, loading, setLoading, error, setError, data, setdata ,basketItems,setBasketItems,wishItems,setWishItems,addToBasket,deleteToBasket,addToWish};
  return (
    <>

      <MainContext.Provider value={context}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  );
}

export default App;
