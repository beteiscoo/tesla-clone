import React from 'react'
import {Bars3Icon} from '@heroicons/react/24/solid'

    function Header() {
        return (
            <div className='flex fixed items-center justify-between min-h-6 p-5 top-0 left-0 right-0'>
                <a>
                    <img src="/images/logo.svg" alt=''></img>
                </a>
                {/* menu */}
                <div className='flex flex-1 items-center justify-center'>
                    <a href="#" className='head'>Model S</a>
                    <a href="#" className='head'>Model 3</a>
                    <a href="#" className='head'>Model X</a>
                    <a href="#" className='head'>Model Y</a>
                </div>
                {/* Right Menu */}
                <div>
                    <a className='right-menu'>Shop</a>
                    <a className='right-menu'>Tesla Account</a>
                </div>
                <Bars3Icon className='pointer h-7'/>
            </div>
        )
    }

    export default Header

