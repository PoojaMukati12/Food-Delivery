import React from 'react'
import Navbarbild from './Navbarbild/Navbarbild'
import Navbarbaner from './Navbarbaner/Navbarbaner'
import Herosection from './HeroSection/HeroSection'
import Feature from './Featured/Feature'
import Products from './Products/Product'
import BestSelles from './BestSells/BestSells'
import Footer from './Footer/Footer'


const Navbar = ({searchTerm,setSearchTerm,searchHistory}) => {
  return (
    <div>
      <Navbarbild setSearchTerm={setSearchTerm} searchHistory={searchHistory}/>
      <Navbarbaner/>
      <Herosection/>
      <Feature/>
      <Products searchTerm={searchTerm}/>
      <BestSelles/>
     <Footer/>
    </div>
  )
}

export default Navbar