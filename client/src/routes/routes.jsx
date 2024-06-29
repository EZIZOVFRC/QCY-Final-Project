import SiteRoot from "../pages/site/SiteRoot";
import Home from "../pages/site/home/home";
import AdminRoot from './../pages/admin/AdminRoot';
import Dashboard from './../pages/admin/dashboard/dashboard';
import Add from './../pages/admin/add/add';
import Products from './../pages/admin/products/Products';
import Basket from './../components/Basket/Basket';
import QcyHistory from "../components/About/QcyHistory";
import WishList from "../components/WishList/WishList";
import HeadphonesProducts from "../pages/admin/products/HeadphonesProducts";
import EarbudsProduct from "../pages/admin/products/EarbudsProduct";
import AddHeadphones from "../pages/admin/add/AddHeadphones";
import AddEarbuds from "../pages/admin/add/AddEarbuds";
import Product from './../components/FilterMenu/Products';
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import News from "../components/News/News";
import Contact from "../components/Contact/Contact";
import DetailPage from "../components/DetailPage/DetailPage";
import LoginRegister from "../components/LoginRegister/LoginRegister";
import CheckoutForm from '../components/Stripe/CheckoutForm';
import WrappedCheckoutForm from "../components/Stripe/CheckoutForm";
import SuccesPage from "../components/Stripe/SuccesPage";




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
            },{
                path:'wishlist',
                element:<WishList/>
            },{
                path:'products',
                element:<Product/>
            },{
                path:"products/:filter?",
                 element:<Product/>
            },{
                path:'news',
                element:<News/>
            },{
                path:'contact',
                element:<Contact/>
            },{
                path:'/detail/:id',
                element:<DetailPage/>
            }
        ]
    },
    {
        path:'loginRegister',
        element:<LoginRegister/>
    },
    {
        path:'payment',
        element:<WrappedCheckoutForm/>
    },{
        path:'success',
        element:<SuccesPage/>
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
            },{
                path:'hproducts',
                element:<HeadphonesProducts/>
            },{
                path:'eproducts',
                element:<EarbudsProduct/>
            },{
                path:'aheadphones',
                element:<AddHeadphones/>
            },{
                path:'aearbuds',
                element:<AddEarbuds/>
            }
        ]
    }
    , ,
    {
      path: "/loading",
      element: <LoadingPage/>
    },   {
        path:"*",
        element:<Error/>,
        
    },
]
export default ROUTES;