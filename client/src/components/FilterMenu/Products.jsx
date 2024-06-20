import React from 'react'
import { SideMenu } from './SideMenu'
import ProductsSec1 from './ProductsSec1'
import './Products.scss'
import { Link, useParams } from 'react-router-dom'
import ProductsSec2 from './ProductsSec2'
import AnimatedText from '../AnimatedText/AnimatedText'
import ScrollButton from '../ScrollButton/ScrollButton'
import FAQ from '../Contact/FAQ'
const Products = () => {
  const { filter } = useParams();
  return (
    <main>
        <ProductsSec1/>
        <div className="link"><Link to={"/"}>Home</Link><i class="fa-solid fa-angle-right"></i><Link to={""}>Products</Link></div>
        <AnimatedText/>
        <SideMenu initialFilter={filter || "earbuds"}/>
        <ProductsSec2/>
        <ScrollButton/>
        <FAQ/>
    </main>
  )
}

export default Products
