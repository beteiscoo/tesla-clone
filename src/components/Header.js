import React, {useState, useTransition} from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Fade, LightSpeed } from 'react-reveal';

    function Header() {
        
        const [burgerStatus, setBurgerStatus] = useState(true);
        const navState = () => {
            setBurgerStatus(!burgerStatus);
            console.log(burgerStatus);
            
        };
        

        let nav = [
            {name: "Model S", link: "/"},
            {name: "Model 3", link: "/"},
            {name: "Model X", link: "/"},
            {name: "Model Y", link: "/"},
            {name: "Existing Inventory", link: "/"},
            {name: "Used Inventory", link: "/"},
            {name: "Trade-In", link: "/"},
            {name: "Roadster", link: "/"},
            {name: "Semi", link: "/"},
            {name: "Utilities", link: "/"},
            {name: "Support", link: "/"},
            {name: "Solar Panel", link: "/"},
            {name: "Solar Roof", link: "/"},
            {name: "Accessories", link: "/"},
        ];
      
        
        return (
            <div className='flex fixed items-center justify-between min-h-6 p-5 top-0 left-0 right-0 z-10'>
                <a>
                    <img className='h-5 w-50' src="https://www.pngmart.com/files/10/Tesla-Logo-PNG-HD.png" alt='Tesla Logo'></img>
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
                    <Bars3Icon name="menu" onClick={navState} className='cursor-pointer h-8 rounded-lg p-0.5 hover:bg-gray-300 duration-300'/>
                </div>
                {/* Burger Navigation Bar */}
                <div show={burgerStatus} style={{
                    visibility: burgerStatus ? 'hidden': 'visible'
                }}
                className='flex-col overflow-y-auto scrollbar-hide items-start fixed
                top-0 bottom-0 right-0 bg-white w-75 z-100
                list-none p-5 burger-nav transform-[${props => props.show ? translateX(0): translateX(100%)}]'>
                    {/* when you have a flex inside of a flex,
                    the flex on the inside will always lose. */}
                    <div className='flex justify-end'>
                        <XMarkIcon onClick={navState} className='cursor-pointer h-8 rounded-lg hover:bg-gray-200 duration-300'/>
                    </div>
                        {
                            nav.map((link)=>(
                                <li><a href='{link.link}' className='flex hover:bg-slate-200 duration-200 p-2 rounded-lg '>{link.name}</a></li>
                            ))
                        }
                </div>
                    
            </div>
            
        )
    }

    export default Header

