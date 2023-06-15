import React from 'react'
import './home.css'
import MainHeader from '../../components/MainHeader'
import Features from '../../components/Features'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'

const Home = () => {
  return (
    <>
      <MainHeader />
      <Features />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  )
}

export default Home