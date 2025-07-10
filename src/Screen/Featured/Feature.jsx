import React, { useRef } from 'react'
import './Feature.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Products from './Products.json';
import Fruitimg from '../../assets/fruits-removebg-preview.png'

const Feature = () => {
    // const scrollRef=useRef(null);

    // const scrollLeft =()=>{
    //     scrollRef.current.scrollBy({left:-300,behavior:'smooth'})
    // }

    // const scrollRight=()=>{
    //     scrollRef.current.scrollBy({left:300,behavior:'smooth'})
    // }
    return (
        <>
            <div className="FeatureSection">
                <div className="FeatureHeader">
                    <h2 className="section-title">Featured Categories</h2>
                    <div className="iconsection">
                        <ArrowBackIosIcon/>
                        <ArrowForwardIosIcon/>
                    </div>
                </div>
                <div className="productdetail-grid">
                    {
                        Products.map((item, id) => {
                            return (
                                <div className="productdetail-card" key={id}>
                                    <img src={item.img} alt={item.tittle} />
                                    <p>{item.tittle}</p>
                                </div>

                            )

                        })
                    }

                </div>

            </div>

            <div className="imagesection">
                <div className="firstimagesection">
                    <div className="textsection">
                        <h2 className='texttitle'>Fruits & Vegetables</h2>
                        <p>Get upto 30% off</p>
                        <button className='shopnow'>Shop Now</button>
                    </div>
                    <div className="imgs">
                        <img src="https://tse1.mm.bing.net/th/id/OIP.AbfmmOj7_58qkQJ9zYQD2AHaE8?pid=Api&P=0&h=220" alt="" />
                    </div>
                </div>
                <div className="secondimgsection">
                    <div className="textsection">
                        <h2 className='texttitle'>Healthy Breakfast</h2>
                        <p>Get upto 30% off</p>
                        <button className='shopnow'>Shop Now</button>
                    </div>
                    <div className="imgs">
                        <img src="https://tse3.mm.bing.net/th/id/OIP.s42lDwSE-8gCwwqNZkXvWgHaFj?pid=Api&P=0&h=220" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature