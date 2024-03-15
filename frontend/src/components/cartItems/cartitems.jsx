import React, { useContext } from 'react';
import './cartitems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';


export default function CartItem(){
    const {all_product, cartItems,removeFromCart, addToCart,gettotalamount} = useContext(ShopContext);

    return (
       <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products </p>
                <p>Title </p>
                <p>Price </p>
                <p>Quantity</p>
                <p>Total</p>
             
            </div>
            <hr />
            {all_product.map((e)=>{
                if(cartItems[e.id] >0){
                    return (
                    <div>
                        <div className="cartitem-format  cartitems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon'/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity' >
                                <p onClick={()=>{removeFromCart(e.id)}}>-</p> 
                                    {cartItems[e.id]} 
                                <p onClick={()=>{addToCart(e.id)}}>+</p></button>

                            <p>${e.new_price*cartItems[e.id]}</p>
                            
                        </div>
                        <hr />
                    </div>)
                }
                return null;
            })}
            
            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>Total</h1>
                    <div>
                        <div className="cartitem-total-item">
                            <p>Subtotal</p>
                            <p>${gettotalamount()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <p>Shipping fee</p>
                            <p>{gettotalamount()>100?"Free" :"$5"}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <h3>Total</h3>
                            <h3>${gettotalamount()>100?gettotalamount():gettotalamount()+5}</h3>
                        </div>

                    </div>

                    <button className='cartitem-total-button'>Proceed to checkout</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If you have a promocode , Enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" name="" id="" placeholder='Promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
       </div>
    );
};