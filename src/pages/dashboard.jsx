import { data } from "autoprefixer";
import React, { useState } from "react";
import { MdSettings, MdNotifications, MdSearch } from 'react-icons/md'
import { Chatlist } from "../components/chatList";
import { Paper } from "../components/paper";
import { TableRow } from "../components/tableRow";

export const Dash = () => {

    let [click, setClick] = useState(false);

    const kebabclose = (e) => {
        console.log(e)
    }

    data = [
        {
        projectName: 'Adminto Admine V1',
        startDate: '01/01/2017',
        dueDate: '01/01/2017',
        Status: "Released",
        Assign: 'Coderthems'
    },
        {
        projectName: 'Adminto Admine V1',
        startDate: '01/01/2017',
        dueDate: '01/01/2017',
        Status: "Released",
        Assign: 'Coderthems'
    },
        {
        projectName: 'Adminto Admine V1',
        startDate: '01/01/2017',
        dueDate: '01/01/2017',
        Status: "Released",
        Assign: 'Coderthems'
    },
        {
        projectName: 'Adminto Admine V1',
        startDate: '01/01/2017',
        dueDate: '01/01/2017',
        Status: "Released",
        Assign: 'Coderthems'
    },
        {
        projectName: 'Adminto Admine V1',
        startDate: '01/01/2017',
        dueDate: '01/01/2017',
        Status: "Released",
        Assign: 'Coderthems'
    },
]

    return(
        <div onClick={kebabclose} className="flex bg-blue-50">
        
            <div className="ml-4 mt-4 w-4 h-screen bg-slate-200">

                {/*TODO: left hand navigation */}

            </div>

            <div className="mt-4 w-full">   

                <div className=" flex bg-slate-50">

                    <div className="flex-1">
                        <h1>Dashboard</h1>
                    </div>

                    <div className="flex mx-2">
                        <input className="border-2 border-blue-400 outline-none rounded-xl px-4" type="text" />
                        <MdSearch />
                        <MdSettings />
                        <MdNotifications />
                    </div>


                </div>

                   

                <div className="max-w-sm">

                    <Paper close={click} name="Inbox" options={['Actions', 'Another action', 'Something else', 'Separated link']}>

                        <Chatlist img={'https://picsum.photos/id/123/200'} name="Nardos Getachew" lastMessage="come to the lab daniel doing great with this show or stuff"/>
                        <Chatlist img={'https://picsum.photos/id/124/200'} name="Daniel Workineh" lastMessage="Here is a mckinsy prep"/>
                        <Chatlist img={'https://picsum.photos/id/34/200'} name="masreshaw walteniguse" lastMessage="Zena eyaye nw"/>

                    </Paper>

                </div>


                <div>
                    <div className="flex">
                        <div>#</div>
                        {data[0].map(ele => {
                            return <div>ele</div>
                        })}
                    </div>
                    <Paper close={click} name="Latest Projects" options={['Actions', 'Another action', 'Something else', 'Separated link']}>
                        <TableRow data={data[0]}/>
                    </Paper>                    
                </div>


                <div>


                </div>


                <div>


                </div>

            </div>

        </div>
    )
}