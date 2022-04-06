import React from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

export const Card = ({imageUrl, description, location, type, price}) => {
    return(
        <div className="flex-col text-sm mx-4 mb-8 group">
            <div className="relative hover:">
                <img src={imageUrl} alt="" className="h-52 w-52 rounded-3xl bg-slate-900 shadow-md"/>
                <div className="group-hover:flex left-2 right-2 justify-between absolute top-1/2 -translate-y-1/2 hidden">
                    <FaAngleLeft className="text-yellow-600 pr-2 font-semibold text-3xl bg-slate-400 rounded-full"/>
                    <FaAngleRight className="text-yellow-600 pl-2 font-semibold text-3xl bg-slate-400 rounded-full"/>
                </div>
            </div>
            <div className="flex-col mt-1">
                <h4 className="font-bold text-orange-500">{description}</h4>
                <div className="flex justify-between">
                    <p>{location}</p>
                    <p>{type}</p>
                </div>
                <p>{price} birr/month</p>
            </div>
        </div>
    )
}