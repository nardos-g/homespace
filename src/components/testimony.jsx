import React from "react";
import { FaStar } from 'react-icons/fa'

export const Testimony = () => {
    return(
        <div className = "flex flex-col w-1/5 mx-4 px-4 py-4 shadow-md bg-gray-100 rounded-lg justify-between">
            <div className="text-xl tracking-widest flex mb-4">
                <FaStar color="lightgray"/><FaStar color="lightgray"/>
                <FaStar color="lightgray"/><FaStar color="lightgray"/>
                <FaStar color="lightgray"/>
            </div>
            <div>
            <p>Fake!!! cum ullam temporibus minus dolores, rerum iusto aliquam exercitationem
                laborum sequi autem maxime consequatur. Saepe recusandae cum sunt,
                dolorem optio est expedita fugit dignissimos totam inventore!
            </p>

            </div>
            <div className="flex pt-2">
                {/* Your profile shows should
                be consistent accross the pages. */}
                <div>
                    <img src="#" alt="" className="w-12 h-12 rounded-full bg-orange-300 mr-4"/>
                </div>
                <div>
                    <p>Name</p>
                    <p>Job</p>
                </div>
            </div>
        </div>
    )
}