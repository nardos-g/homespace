import React from "react";
import './css/Field.css';

export const Field = ({ placeholder, kind }) => {
    return (
        <input type= {kind} size={25} placeholder = {placeholder}/>
    )
}