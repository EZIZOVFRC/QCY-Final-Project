
import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../layout/site/Header/header'
import Footer from '../../layout/site/Footer/footer'


const SiteRoot = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default SiteRoot
