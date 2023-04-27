import React from 'react'
import {Bars3Icon} from '@heroicons/react/24/solid'

    function Header() {
        return (
            <div className='flex fixed items-center justify-between min-h-6 p-5 top-0 left-0 right-0 z-10'>
                <a>
                    <img src="public/images/logo.svg" alt='Tesla Logo'></img>
                </a>
                {/* menu */}
                <div className='flex flex-1 items-center justify-center'>
                    <a href="#" className='head'>Model S</a>
                    <a href="#" className='head'>Model 3</a>
                    <a href="#" className='head'>Model X</a>
                    <a href="#" className='head'>Model Y</a>
                </div>
                {/* Right Menu */}
                <div className='flex flex-row items-center justify-center'>
                    <a className='right-menu'>Shop</a>
                    <a className='right-menu'>Tesla Account</a>
                    <Bars3Icon className='cursor-pointer h-7'/>
                </div>
                {/* Burger Navigation Bar */}
                <div className='burger-nav'>
                    <li><a>Existing Inventory</a></li>
                    <li><a>Used Inventory</a></li>
                    <li><a>Trade-In</a></li>
                    <li><a>Roadster</a></li>
                    <li><a>Semi</a></li>
                    <li><a>Utilities</a></li>
                    <li><a>Support</a></li>
                </div>
                    
            </div>
            
        )
    }

    export default Header

