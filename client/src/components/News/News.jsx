import React from 'react'
import News1 from './News1'
import { Link } from 'react-router-dom'
import News2 from './News2'
import ScrollButton from '../ScrollButton/ScrollButton'

const News = () => {
  return (
    <main className='newsMain'>
    <News1/>
    <h1>News</h1>
    <div className="link" ><Link to={"/"}>Home</Link><i class="fa-solid fa-angle-right"></i><Link to={""}>News</Link></div>
    <h2>List</h2>
    <News2/>
    <ScrollButton/>
    </main>
  )
}

export default News
