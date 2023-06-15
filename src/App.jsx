import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/home/Home'
import About from '../src/pages/about/About'
import Services from '../src/pages/services/Services'
import Teams from '../src/pages/teams/Teams'
import Plans from '../src/pages/plans/Plans'
import Blog from '../src/pages/blog/Blog'
import Contact from '../src/pages/contact/Contact'
import NotFound from '../src/pages/notFound/NotFound'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import GoToTop from './components/GoToTop'

const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='team' element={<Teams />} />
        <Route path='plans' element={<Plans />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <GoToTop />
      <Footer />
    </BrowserRouter>
  )
}

export default App