import React from 'react'
import './Footer.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { GoGift } from "react-icons/go";
import { RiBox3Line } from "react-icons/ri";
import { GiCircleClaws } from "react-icons/gi";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Footer = () => {
  return (
    <>
     <div className="allsection">
        <div className="firstsection">
            <div className="icon"><AccessTimeIcon style={{color: 'green',fontSize: '52px'}}/></div>
            <span className='firstheading'>10 minute grocery now</span>
            <p className='paragraphsec'>Get your order delivered to your <br/>doorstep at the earliest from<br/> FreshCart pickup stores near you.</p>
        </div>

        <div className="firstsection">
            <div className="icon"><GoGift style={{color: 'green',fontSize: '52px'}}/></div>
            <span className='firstheading'>Best Prices & Offers</span>
            <p className='paragraphsec'>Cheaper prices than your local <br/>supermarket offer<br/> to top it off.Get  prices & offers</p>
        </div>

        <div className="firstsection">
            <div className="icon"><RiBox3Line style={{color: 'green',fontSize: '52px'}}/></div>
            <span className='firstheading'>Wide Assortment</span>
            <p className='paragraphsec'>Choose from 5000+ products across<br/> food,personal care,household,<br/> veg and non-veg & other categories.</p>
        </div>

        <div className="firstsection">
            <div className="icon"><GiCircleClaws style={{color: 'green',fontSize: '52px'}}/></div>
            <span className='firstheading'>Easy Returns</span>
            <p className='paragraphsec'>Not satisfied with a product? Return it<br/> at the doorstep & get a refund within hours.<br/>No questions asked policy.</p>
        </div>
     </div>

     <div className="footer-bottom">
        <div className="footer-columns">
            <div className="footer-column">
                <h4>Categories</h4>
                <ul>
                    <li>Vegetables & Fruits</li>
                    <li>Breakfast & instant food</li>
                    <li>Bakery & Biscuits</li>
                    <li>Atta,rice & dal</li>
                    <li>Sauces & spreads</li>
                    <li>Organic & gourmet</li>
                    <li>Baby Care</li>
                    <li>Cleaning essentials</li>
                    <li>Personal Care</li>
                </ul>
            </div>
            <div className="footer-column">
                <ul>
                    <li>Dairy,bread & eggs</li>
                    <li>Cold drink & juices</li>
                    <li>Tea,coffee & drinks</li>
                    <li>Masala,oil & more</li>
                    <li>Chicken,meat & fish</li>
                    <li>Pean Corner</li>
                    <li>Pharma & wellness</li>
                    <li>Home & office</li>
                    <li>Pet Care</li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Get to know us</h4>
                <ul>
                    <li>Company</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Help Center</li>
                    <li>Our Value</li>
                </ul>
            </div>
             <div className="footer-column">
                <h4>For Consumers</h4>
                <ul>
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Product Returns</li>
                    <li>FAQ</li>
                    <li>Shop Checkout</li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Become a Shopper</h4>
                <ul>
                    <li>Shopper Opportunities</li>
                    <li>Become a shopper</li>
                    <li>Earnings</li>
                    <li>Ideas & Guides</li>
                    <li>New Retailers</li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Freshcart programs</h4>
                <ul>
                    <li>Freshcart programs</li>
                    <li>Gift Cards</li>
                    <li>Promos & Coupons</li>
                    <li>Freshcart Ads</li>
                    <li>Careers</li>
                </ul>
            </div>
        </div>


    <div className="footer-extra">
        <div className="payments-apps">
            <div className="payment-partner">
                <span>Payment Partners</span>
                <img src="https://tse1.mm.bing.net/th/id/OIP.ELTJq7ftVub93BM0DoJCYwHaFj?pid=Api&P=0&h=220" alt="payments" style={{ height: "23px", marginLeft: "10px" }} />
                <img src="https://tse1.mm.bing.net/th/id/OIP.G0yX9QpAFENe2GjKtEPD7AHaHa?pid=Api&P=0&h=220" alt="payments" style={{ height: "33px", marginLeft: "10px" }} />
                <img src="https://tse4.mm.bing.net/th/id/OIP.E-BinyEEwrLkG0pbmOup0AHaDE?pid=Api&P=0&h=220" alt="payments" style={{ height: "21px", marginLeft: "10px" }} />
            </div>

            <div className="app-buttons">
                <h4 className='mobile-view'>Get Deliveries with FreshCart</h4>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" />
            </div>

        </div>
        <div className="lastsection">
            <div className="copyright">
                <p>© 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved. Powered by</p>
                <span style={{ color: 'green' }}>Codescandy.</span>
            </div>
            <div className="buynowbtn">
              <ShoppingCartCheckoutIcon/>
             <span>Buy Now</span>
            </div>
        </div>
     
    </div> 

     </div>
    </>
  )
}

export default Footer