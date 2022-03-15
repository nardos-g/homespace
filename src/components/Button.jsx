import React from "react";
import './css/Button.css';

export const Button = ({className, tcolor, text, bgColor }) => {
    
    return (
        <input className={`Btn ${className}`} style={{color: tcolor, backgroundColor: bgColor}} type="submit" value={text}/>
    )
}