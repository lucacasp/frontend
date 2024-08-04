import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './Navbar.css'

import { useState } from 'react'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [menu, setMenu] = useState("Shop");
    const {getTotalCartItems} = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Glassify</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => {setMenu("Shop")}}><Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu === "Shop" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("About")}}><Link style={{textDecoration:'none'}} to="/sunglasses">Occhiali Da Sole</Link>{menu === "sunglasses" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("Contact")}}><Link style={{textDecoration:'none'}} to="/eyewear">Occhiali Da Vista</Link>{menu === "eyewear" ? <hr/> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to="/login"><button>Login</button></Link>
                <Link to ="/cart"><img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;