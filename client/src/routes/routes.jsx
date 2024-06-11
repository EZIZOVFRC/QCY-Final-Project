import SiteRoot from "../pages/site/SiteRoot";
import Home from "../pages/site/home/home";
import AdminRoot from './../pages/admin/AdminRoot';
import Dashboard from './../pages/admin/dashboard/dashboard';
import Add from './../pages/admin/add/add';
import Products from './../pages/admin/products/Products';
import Basket from './../components/Basket/Basket';
import QcyHistory from "../components/About/QcyHistory";



const ROUTES =[
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },{
                path:'basket',
                element:<Basket/>
            },{
                path:'story',
                element:<QcyHistory/>
            }
        ]
    },
    {
        path:"/admin",
        element: <AdminRoot/>,
        children:[
            {
                path:"",
                element:<Dashboard/>
            },
            {
                path:"add",
                element:<Add/>
            },{
                path:'products',
                element:<Products/>
            }
        ]
    }
    ,    {
        path:"*",
        element:<Error/>,
        
    },
]
export default ROUTES;