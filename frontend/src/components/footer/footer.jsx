import React from 'react';
import './footer.css';
import footer_logo from '../Assets/logo_big.png';
import insta_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';



export default function Footer(){
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>Trend Trove</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="icon-container">
                    <img src={insta_icon} alt="" />
                    <img src={pinterest_icon} alt="" />
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
             <div className="footer-copyright">
                <hr />
                <p>Copyright &copy;  Nikesh Saini - All Right Reserved</p>
             </div>
        </div>
    );
};