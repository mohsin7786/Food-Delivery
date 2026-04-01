import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>A Food Delivery Website is an online platform that allows users to order food from various restaurants and have it delivered to their location. It provides a user-friendly interface where customers can browse restaurant menus, select meals, and place orders. Key features include restaurant listings, a searchable menu, a cart system, secure payment options, and real-time order tracking. Users can create accounts to save delivery addresses and view past orders. The site often offers filters for cuisine types, dietary preferences, and customer reviews. Promotions and discounts help attract and retain customers. It is designed to work seamlessly on both desktop and mobile devices.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026 Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
