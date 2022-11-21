import logo from "../media/img1.png";
import "../style/nav.css";
import React from "react";
import {MenuOutlined,SearchOutlined,SettingOutlined,ShoppingCartOutlined}
from  "@ant-design/icons";


const NavBar = ()=>{
    return(
        <div className="logo">
           <img src={logo} className="logo1"/>
           <div className="icons">
           < MenuOutlined/>
           < SearchOutlined/>
           < SettingOutlined/>
           < ShoppingCartOutlined/>
           </div>
        </div>
        
    )
}
export default NavBar;