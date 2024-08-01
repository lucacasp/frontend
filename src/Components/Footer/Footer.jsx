import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>Glassify</p>
      </div>
        <ul className='footer-links'>
          <li>Shop</li>
          <li>Occhiali da sole</li>
          <li>Occhiali da vista</li>
          <li>Contatti</li>
          <li>Chi siamo</li>
        </ul>   
    <div className="footer-social-icon">
        <div className="footer-icons-container">
            <li><img src={pinterest_icon} alt="" /></li>
        </div>
        <div className="footer-icons-container">
            <li><img src={whatsapp_icon} alt="" /></li>
        </div>
        <div className="footer-icons-container">
            <li><img src={instagram_icon} alt="" /></li>
        </div>
    </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright © 2024 Glassify. Tutti i diritti riservati.</p>
        </div>
    </div>
  )
}
