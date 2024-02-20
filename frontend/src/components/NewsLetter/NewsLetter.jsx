import React from 'react';
import './newsLetter.css'
export default function NewsLetter(){
    return (
        <div className="newsletter">
            <h1>Get Exclusive Offer on Your 
                Email 
            </h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" name="" id="" placeholder='Your email id' />
                <button>Subscribe</button>
            </div>
        </div>
    );
};