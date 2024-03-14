import React from 'react';
import "./productdisplay.css";
import start_dull_icon from "../Assets/star_dull_icon.png";
import start_icon from "../Assets/star_icon.png";
export default function Productdisplay(props){
    const {product} =props;
    return (
        <div className="productdisplay">
            <div className="productdisplay_left">
                <div className="productdisplay_image_list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay_image">
                    <img src={product.image} alt="" className="productdisplay_main_image" />
                </div>
            </div>
            <div className="productdisplay_right">
                <h1>{product.name}</h1>
                <div className="productdisplay_right_stars ">
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-old-price">${product.old_price}</div>
                    <div className="productdisplay-new-price">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab hic temporibus quos facilis est corporis, laborum expedita ea explicabo necessitatibus? Fugit itaque excepturi numquam rerum repellat, similique eum ea inventore?
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S </div>
                        <div>M </div>
                        <div>L </div>
                        <div>Xl </div>
                        <div>XXL</div>
                    </div>
                </div>
                <button className='addcartbtn'>Add to cart</button>
                <p className="productdisplay-right-category">
                    <span className='firstspan'>Category: </span><span>Woomen, T_shirt, Crop-top</span>
                </p>
                <p className="productdisplay-right-category">
                <span className='firstspan'>TAGS: <span> Modern, latest</span></span>
                </p>
            </div>

        </div>
    );
};