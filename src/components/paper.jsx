import React, { useState } from "react";
import {VscKebabVertical} from 'react-icons/vsc'

export const Paper = ({close, name, options, children}) => {

    let [opt, setOpt] = useState(close);

    const showOpt = (close) => {
        setOpt(!opt);
    }

    return(
        <div className="relative shadow-sm mx-8 mt-4 bg-white border-2 border-white rounded-md">
            <div className="flex justify-between mx-4 mt-4 mb-6 font-semibold">
                <h1>{name}</h1>
                <VscKebabVertical onClick={showOpt}/>
            </div>

            {/* Drop Down Options */}
            <div className={`absolute top-0 right-0 mr-4 bg-white shadow-lg p-4 mt-10 ${ opt ? 'block' : 'hidden'}`}>
                <ul className="list-none p-0">
                   {options.map(ele => {
                       return <li className="pb-2 px-2 hover:cursor-pointer hover:bg-slate-200">{ele}</li>
                   })}
                </ul>
            </div>

            <div className=" mx-4 mb-4">
                {children}
            </div>
        </div>
    )
}