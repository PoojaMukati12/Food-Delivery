import React from 'react'
import './Product.css'
import ProducSection from './ProductSection.json'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Products = () => {
    return (
        <>
            <div className="popular-section">
                <h2 className='popular-heading'>Popular Products</h2>
                <div className="popular-grid">
                    {
                        ProducSection.map(product => (
                            <div key={product.id} className="product-card">
                                {product.badge && (
                                    <div className="badge">
                                       <span className='Sale'>{product.badge}{" "}</span> 
                                        <span className='discount'>{product.badgeDiscount}</span>
                                    </div>
                                )}

                                <div className="img-detail">
                                    <img src={product.imgurl} alt="" className='card-img' />
                                    <p className='category'>{product.category}</p>
                                    <h3 className='title'>{product.tittle}</h3>
                                </div>


                                <div className="rating">
                                    <StarIcon className='star' />
                                    <StarIcon className='star' />
                                    <StarIcon className='star' />
                                    <StarIcon className='star' />
                                    <StarHalfIcon className='star' />
                                    <span className='ra'>{product.rating}</span>
                                    <span className='reviews'>({product.ratingCount})</span>
                                </div>

                                <div className="price-section">
                                    <div className="price-wrapper">
                                        <span className='price'>${product.Price}</span>
                                        {product.OriginalPrice > product.Price && (
                                            <span className='old-price'>${product.OriginalPrice}</span>
                                        )}
                                    </div>

                                    <button className='add-btn'>+ Add</button>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Products