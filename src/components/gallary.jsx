import React from "react";
import { FaThumbsUp, FaThumbsDown, FaShare} from 'react-icons/fa';

export const Gallary = ({className, thumbUp}) => {
    return(
        <div className={`${className} mb-10 ml-4 mr-4` }>
            {/* Photos */}
            <div className="">
                <div>
                    <img onClick={(e) => thumbUp(e)} className=" inline h-44 w-44 bg-slate-400" src="https://picsum.photos/200" alt="" />
                    <img onClick={(e) => thumbUp(e)} className=" inline h-44 w-44 bg-slate-400" src="https://picsum.photos/200" alt="" />
                    <img onClick={(e) => thumbUp(e)} className=" inline h-44 w-44 bg-slate-400" src="https://picsum.photos/200" alt="" />
                </div>
                <div>
                    <img onClick={(e) => thumbUp(e)} className=" inline h-44 w-44 bg-slate-400" src="https://picsum.photos/200" alt="" />
                    <img onClick={(e) => thumbUp(e)} className=" inline h-44 w-44 bg-slate-400" src="https://picsum.photos/200" alt="" />
                    <img onClick={(e) => thumbUp(e)} className=" inline h-44 w-44 bg-slate-400" src="https://picsum.photos/200" alt="" />
                </div>
            </div>
            {/* Information */}
            
            <div className="mt-1 bg-gray-100 mx-auto px-4 py-2 rounded-bl-3xl rounded-tr-3xl">
                <div className="flex justify-between mb-1">
                    <div className="">
                        <span className="flex items-center"><h3 className="pr-2 text-slate-600">Location:</h3><span>Bole, Edinamole</span></span>
                        <span className="flex items-center"><h3 className="pr-2 text-slate-600">Furnished:</h3><input className="h-4 w-4" type="checkbox" /></span>
                        <span className="flex items-center"><h3 className="pr-2 text-slate-600">applys:</h3><span className="bg-green-600 text-sm text-white px-2 text-center">6</span></span>
                    </div>
                    <div className="mr-4">
                        <span className="flex items-center"><h3 className="pr-2 text-slate-600">Price:</h3><span>12,000</span></span>
                        <span className="flex items-center"><h3 className="pr-2 text-slate-600">Active:</h3><input className="h-4 w-4" type="checkbox" /></span>
                    </div>
                </div>
                <hr />
                <div className=" flex justify-between mt-2">
                    <div className="flex">
                        {/* <span className="text-slate-600">Enough information?</span> */}
                        <span className="flex mx-2">
                            <span className="mr-4 flex items-center"><input className="mr-2 h-4 w-4" type="checkbox" /><span>Photos not descriptive</span></span>
                            {/* <span className="flex items-center"><input className="mr-2 h-4 w-4" type="checkbox" /><span>No</span></span> */}
                        </span>
                    </div>
                    <div className="flex">
                        <span><FaThumbsUp className="mr-8"/></span>
                        <span><FaThumbsDown className="mr-4"/></span>
                        <span><FaShare className="mr-4"/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}