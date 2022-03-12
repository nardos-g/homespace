import React from "react";
import './css/Field.css'

export const Field = ({className, text, kind }) => {
    return (
        <input className={className} type= {kind} size={25} placeholder = {text} autoComplete = "true"/>
    )
}