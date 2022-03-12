import React from "react";
import './css/Field.css'

export const Field = ({text, kind, onChange, value}) => {
    const activate = (e) => {
        onChange(e, text);
    }
    return (
        <input value={value} onChange={activate} className='field' type= {kind} size={25} placeholder = {text} autoComplete = "true"/>
    )
}