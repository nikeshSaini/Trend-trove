import React from "react";
import './item.css'
 
export default function Item({name,image,new_price,old_price}){
    return(
        <div className="item">
                <img src={image} alt="" />
                <p>{name}</p>
                <div className="item-prices">
                      <div className="item-prices-new">${new_price}</div>
                      <div className="item-prices-old">${old_price}</div>
                </div>
        </div>
    );
}