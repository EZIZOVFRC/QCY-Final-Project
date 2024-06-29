import React from 'react'
import { Link } from 'react-router-dom'

const SuccesPage = () => {
  return (
    <main className='succesPage'>
        <div className="succesPage__div">
        <div class="success-animation">
<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
</div>
        <h1>Payment Successfull</h1>
        <span>Have great day:)</span>
        <Link to={'/basket'}>Back to cart</Link>
        </div>
    </main>
  )
}

export default SuccesPage
