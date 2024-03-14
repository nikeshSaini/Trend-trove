import React from 'react';
import "./Button.css"
export default function ButtonComponent({title}){
    return (
        <div className="button_container">
            <button>{title}</button>
        </div>
    );
};