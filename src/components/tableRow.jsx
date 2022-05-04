import React from "react";

export const TableRow = ({data}) => {
    // I would assume the data is a json
    let values = Object.values(data)

    return(
        <div className="w-2/5">

            <div>
                {values.map(ele => {
                    return <div>{ele}</div>
                })}
            </div>

        </div>
    )
}