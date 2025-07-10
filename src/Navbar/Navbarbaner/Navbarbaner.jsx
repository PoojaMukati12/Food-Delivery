import React from 'react'
import './Navbarbaner.css'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Navbarbaner = () => {
    return (
        <div className="Navbarbaner">
            <div className="optionmenu" style={{backgroundColor:"rgb(12, 187, 12)",color:"white",padding:"8px 17px",borderRadius:"5px"}}>
                <GridViewOutlinedIcon sx={{ fontSize: "20px" }} />
                <span className='allpoint'>All Departments</span>
            </div>
            <div className="optionmenu">
                <span className='allpoint'>Home</span>
                  <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "18px" }} />
            </div>
            <div className="optionmenu">
                <span className='allpoint'>Shop</span>
                <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "18px" }} />
            </div>
            <div className="optionmenu">
                <span className='allpoint'>Stores</span>
                 <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "18px" }} />
            </div>
            <div className="optionmenu">
                <span className='allpoint'>Mega menu</span>
                <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "18px" }} />
            </div>
            <div className="optionmenu">
                <span className='allpoint'>Pages</span>
                  <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "18px" }} />
            </div>
            <div className="optionmenu">
                <span className='allpoint'>Account</span>
                <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "18px" }} />
            </div>
            <div className="optionmenu">
                <span className='allpoint'>Dashboard </span>
                 {/* <span className='allpoint'>Docs</span> */}
            </div>
            <div className="optionmenu">
                 <span className='allpoint'>Docs</span>
            </div>
        </div>
    )
}

export default Navbarbaner