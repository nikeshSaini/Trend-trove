import React, { useState ,useContext }  from 'react';
import "./navbar.css";
import logo from  "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

export default function Navbar(){
   const {gettotalCartItem} = useContext(ShopContext);
    const[menu , setmenu] = useState("home");
    function menuOnclick(e){
        setmenu(e);
    }
    return(
       
        <div className="navbar">
            <Link exact to='/' className="navlogo">
                <img src={logo} alt="" />
                <p>Trend Trove</p>
            </Link>
                
         
            <ul className='nav-menu'>
                <li onClick={()=>menuOnclick("home")}><Link exact  to="/">Home</Link></li>
                <li onClick={()=>menuOnclick("men")}><Link to="/men">Men</Link></li>
                <li onClick={()=>menuOnclick("women")}><Link to="/women">Women</Link></li>
                <li onClick={()=>menuOnclick("kids")}><Link to="/kids">Kids</Link></li>
            </ul>
            <div className="nav-login-cart">
                <Link to ="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                
                <div className="nav-cart-count">{gettotalCartItem()}</div>
            </div>
        </div>
        
    );
}