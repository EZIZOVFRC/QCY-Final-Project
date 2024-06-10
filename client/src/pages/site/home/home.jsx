import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import { Helmet } from 'react-helmet'
import Sec1 from '../../../components/Home_sec/Sec1'
import Sec2 from './../../../components/Home_sec/Sec2';
import Sec3 from '../../../components/Home_sec/Sec3';
import Sec4 from '../../../components/Home_sec/Sec4';
import Sec5 from '../../../components/Home_sec/Sec5';

    
    const Home = () => {
        
        // const {data,setdata} = useContext(MainContext)
        return (
            
        <>
        <Helmet>
            <title>HOME</title>
        </Helmet>
               <Sec1/>
               <Sec2/>
               <Sec3/>
               <Sec4/>
               <Sec5/>
        </>
        )
    }
    
    export default Home
        