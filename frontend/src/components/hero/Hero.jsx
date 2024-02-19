import React from 'react';
import './hero.css'
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/hero_image.png'
import arrow_icon from '../Assets/arrow.png';

export default function(){
    return(
        <div className="hero">
            <div className="left-part">
                <h2>NEW ARRIVAL ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New <img src={hand_icon}alt="" /></p>
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>
                    <div className="hero-latest-btn">
                        <div>Latest Collections</div>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            </div>
            <div className="right-part">
                <img src={hero_image} alt="" />
            </div>
        </div>
    );
}