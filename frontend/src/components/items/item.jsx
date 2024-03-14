import React from "react";
import './item.css'
 import { Link } from "react-router-dom";
export default function Item({name,image,new_price,old_price,id}){
    return(
        <div className="item">
                <Link to={`/product/${id}`}> <img onClick={window.scroll(0,0)} src={image} alt="" /></Link>
                <p>{name}</p>
                <div className="item-prices">
                      <div className="item-prices-new">${new_price}</div>
                      <div className="item-prices-old">${old_price}</div>
                </div>
        </div>
    );
}