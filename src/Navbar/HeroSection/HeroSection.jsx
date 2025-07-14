import React from 'react'
import './Herosection.css'

const Herosection = () => {
  return (
  <>
   <div className="hero-container">
      <div className="hero-text">
        <span className="sale-label">Opening Sale Discount 50%</span>
        <h1>SuperMarket For Fresh Grocery</h1>
        <p className="description">Introduced a new model for online grocery shopping and convenient home delivery.</p>
        <button className="shop-button">Show Now →</button>
      </div>
      <div className="hero-image">
      <img src="https://img.freepik.com/premium-photo/grocery-basket-hd-8k-wallpaper-photographic-image_973183-6252.jpg" alt="" />
      </div>
    </div>
  </>
  )
}

export default Herosection