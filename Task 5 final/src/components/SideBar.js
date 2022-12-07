import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";

export const SideBar = [
    {
        title: 'Janitor & MCP',
        path: '/janitor_mcp',
        icon: <AiIcons.AiOutlineUser />,
        class_name: 'nav-text'
    },
    {
        title: 'Collector & Vehicle',
        path: '/collector_vehicles',
        icon: <AiIcons.AiOutlineUsergroupDelete />,
        class_name: 'nav-text'
    },
    {
        title: 'Driver & Route',
        path: '/driver_route',
        icon: <HiIcons.HiOutlineTruck />,
        class_name: 'nav-text'
    },
]