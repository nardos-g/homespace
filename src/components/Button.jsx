import React from "react";
import './css/Button.css';

export const Button = ({ color, text, bgColor }) => {
    return (
        <input className="Btn" style={{color: {color}, backgroundColor: {bgColor}}} type="submit" value={text}/>
    )
}