import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes";
import MainContext from "./context/context";
import { useState } from "react";
import axios from "axios";
function App() {
  const[loading, setLoading] = useState(true);
    const[error, setError] = useState('false');
    const [data, setdata] = useState([]);


  const router = createBrowserRouter(ROUTES);
const context ={loading,setLoading,error,setError,data,setdata}
  return (
    <>
<MainContext.Provider value={context} >
            <RouterProvider router={router}/>
        </MainContext.Provider>
    </>
  )
}

export default App
