import React from "react";
import './css/Field.css';

export const Field = ({icon, className, text, kind, onChange, value}) => {
    
    const activate = (e) => {
        onChange(e, text);
    }
    return (
        <div className="Field__wrapper">
            <input value={value} onChange={activate} className={`Field__input ${className}`} type= {kind} placeholder = {text} autoComplete = "true"/>
            <span className="Field__icon">{icon}</span>
        </div>
    )
}