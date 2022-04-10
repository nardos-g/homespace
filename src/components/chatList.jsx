import React from "react";

export const Chatlist = ({img, name, lastMessage}) => {
    return(
        <div>
            <div className="flex justify-between my-2">
                <div className="w-16 h-16 rounded-3xl">
                    <img src={img} alt="" />
                </div>

                <div className="w-1/2">
                    <h1 className="font-semibold">{name}</h1>
                    <p className="text-sm text-gray-500">{lastMessage.length > 20 ? `${lastMessage.slice(0, 20)}...`  : lastMessage}</p>
                </div>

                <div>
                    {new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}
                </div>

            </div>
            <hr/>
        </div>

    )
}