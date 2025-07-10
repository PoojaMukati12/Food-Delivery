import React from 'react'
import './Screen.css'
import Herosection from './HeroSection/Herosection'
import Feature from './Featured/Feature'
import Products from './Products/Products'
import BestSelles from './BestSelles/BestSelles'
import Footer from './Footer/Footer'

const Screen = () => {
  return (
     <>
    <Herosection/>
    <Feature/>
    <Products/>
    <BestSelles/>
    <Footer/>
     </>
  )
}

export default Screen