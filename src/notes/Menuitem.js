import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menuitem(props) {
    return (
        <>
            <NavLink
                to={props.to}
                className={({ isActive }) => (isActive ?
                    "mb-1 font-oswald font-normal flex items-center justify-start gap-2 p-2 space-x-2 rounded-md bg-[#a4c3b2] text-linkblue bg-opacity-20 dark:bg-white-rgba-1 dark:text-white-rgba-7"
                    :
                    "mb-1 font-oswald text-linkblue font-normal flex items-center justify-start gap-2 p-2 space-x-2 rounded-md hover:bg-opacity-10 hover:bg-linkblue dark:hover:bg-white dark:hover:bg-opacity-5 dark:text-white-rgba-6")}
            >
                {props.iconClass && <i className={props.iconClass}></i>}
                {props.title}
            </NavLink>

           
        </>
    )
}