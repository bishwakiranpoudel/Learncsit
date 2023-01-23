import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Card } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import Menuitem from './Menuitem';
import { useHotkeys } from 'react-hotkeys-hook';
import logo from './assets/logo.png';

// background stylesheet 


export default function Sidebar({ children }) {
    const navigate = useNavigate();
    useHotkeys('shift+alt+h', () => {
        navigate('/home');
    })



    return (
        <>
            <div className={`flex bg-white dark:bg-grayer`}>
                <aside className="h-screen sticky top-0 bg-opacity-20 inset-y-0 z-10 flex flex-col flex-shrink-0 w-64  overflow-x-hidden overflow-y-hidden transition-all transform bg-white dark:bg-grayer dark:border-white-rgba-1 border-r shadow-lg lg:z-10 lg:shadow-none">

                    <div className="p-3 h-20">
                        <img className='w-10 dark:opacity-60' />
                        <div className='p-0 flex flex-col'>
                            <span className="dark:text-white-rgba-7 font-oswald text-xl font-semibold leading-1 tracking-wider uppercase whitespace-nowrap text-linkblue">
                            <img src={logo} alt="Logo" />
                            </span>

                        </div>
                    </div>

                    <nav className="flex-1 overflow-y-auto">
                        <ul className="p-3 overflow-hidden">
                            <li>
                                <Menuitem title="Home" to="/" iconClass="bi bi-house" />
                                <Menuitem title="Semester" to="/semester" iconClass="bi bi-journals" />
                                <Menuitem title="Entrance" to="/entrance" iconClass="bi bi-bank" />
                                <Menuitem title="Notices" to="/notice" iconClass="bi bi-card-checklist" />
        
                                <div className='flex justify-center'>
                                    <div className='bg-black bg-opacity-10 h-[1px] my-5 w-[80%] dark:bg-white-rgba-1' />
                                </div>

                                <Menuitem title="Interview Preperation" to="/buy-credits" iconClass="bi bi-clipboard2-pulse-fill" />
                                <Menuitem title="Articles" to="/purchase-history" iconClass="bi bi-receipt" />
                            </li>
                        </ul>

                    </nav>



                    <div className='flex justify-between items-center p-3 border-t dark:border-white-rgba-1'>
                        <a href="" className='hover:underline text-xs uppercase text-black dark:text-white-rgba-6 text-opacity-40 font-ubuntu'><i className="bi bi-person mr-1"></i> Creator</a>

                        <Link title='FAQ' className='hover:underline text-xs uppercase text-black dark:text-white-rgba-6 text-opacity-40 font-ubuntu' to='/'>
                            <i className="bi bi-question-circle mr-1"></i> FAQ
                        </Link>
                        <Link title='Support' className='text-xs hover:underline uppercase text-black dark:text-white-rgba-6 text-opacity-40 font-ubuntu' to='/'>
                            <i className="bi bi-telephone-forward mr-1"></i> Support
                        </Link>
                    </div>



                </aside>
                {children}

            </div >
        </>

    )
}