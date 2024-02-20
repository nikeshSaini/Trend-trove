import './newCollection.css'
import new_collection from '../Assets/new_collections';
import Item from '../items/item';
import React from 'react';

export default function NewCollection(){
    return (
        <div className="newCollection">
            <h1>New Collections</h1>
            <hr />
            <div className="collection">
                {new_collection.map((item)=>{
                    return <Item name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>

        </div>
    );
};
