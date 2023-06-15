import React from 'react'
import { Link } from 'react-router-dom'
import Image2 from '../assets/Image2.png'
import '../pages/home/home.css'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>Looking to manage your finances in easy steps?</h4>
          <h1>The Next Generation of <br />Financial Accountability</h1>
          <p>
            Looking for a financial tool that can help you manage your finances and achieve your financial goals? Look no further than Finance Fluent. We offer a wide range of services to individuals and businesses, including budgeting, financial transaction tracking, inventory management, financial reports generation and much more. We will help you track all your financial needs and you focus on running your business.
          </p>
          <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image2} alt='Main Header Image'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader