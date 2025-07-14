import React, { useState } from 'react'
import './Navbarbild.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Navbarbild = ({setSearchTerm,}) => {
  const [inputvalue,setInputvalue]=useState('');
  const [showHistory,setShowHistory]=useState(false);

  const handlechange=(e)=>{
    const value= e.target.value;
    setInputvalue(value);
    setSearchTerm(value);
    setShowHistory(value.length>0);
  }

  const handleHistoryClick = (term)=>{
        setInputvalue(term);
        setSearchTerm(term)
        setShowHistory(false)
  }

  return (
    <div>
      <div className="main">
        <div className="leftdiv">
         <div className="text">Super Value Deals-Save more with coupons</div>
        </div>
        <div className="rightdiv">
          <div className="English">English<ArrowDropDownIcon className="dropdownicon"/></div>
        </div>
      </div>

      <div className="cart">
        <div className="leftpart">
            <div className="iconcart">
             <ShoppingCartOutlinedIcon style={{fontSize:"29px",color:"green"}}/>
            </div>
            <div className="freshtext">
               FreshCart
            </div>
        </div>

        <div className="midlepart">
            <div className="inputbox">
                    <input type="text" 
                    placeholder='Search for products' 
                    onChange={(e)=>setSearchTerm(e.target.value.toLowerCase())}
                    />
                    <SearchOutlinedIcon className='SearchIcon'/> 
            </div>
            <div className="location-container mobile-view">
               <LocationOnOutlinedIcon className="location-icon" />
                <div className="location-info">
                <span className="location-label">Location</span>
                </div>

             </div>

        </div>
        <div className="rightpart">
        <div className="like"><FavoriteBorderOutlinedIcon className='like' style={{fontSize:"29px"}}/></div>
        <div className="person"><PermIdentityOutlinedIcon className='Prem'/></div>
        <div className="bag"><LocalMallOutlinedIcon className='LocalMall'/></div>
        </div>
      </div>
    </div>
  )
}

export default Navbarbild