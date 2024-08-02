import React, { useState } from 'react'
import logo from "../images/logo.png";
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {

    const [display, setdisplay] = useState(false);

    return (
        <>
            <header className='w-full border-b-blue-400 border-4 h-20 p-3 flex justify-evenly flex-wrap'>
                <div className='h-full w-24' >
                    <NavLink to={"/"}>
                        <img className='h-full w-full' src={logo} alt="logo" />
                    </NavLink>
                </div>

                <GiHamburgerMenu onClick={() => { setdisplay(!display) }}

                    className='md:hidden m-3 text-2xl cursor-pointer' />

                {!display && (
                    <div style={{ height: "100vh" }} className='text-gray-400 w-60 md:hidden  bg-slate-200  absolute top-0 right-0 z-10 '>
                        <IoCloseSharp onClick={() => setdisplay(!display)} className='text-3xl m-2 cursor-pointer  hover:text-gray-700 ' />
                        <ul className='flex flex-col items-center justify-evenly h-1/2 w-full text-2xl mb-2 '>
                            <li className='hover:scale-125'> <NavLink className='text-md font-medium hover:border-b-blue-400 hover:border-b-4  hover:ease-in hover:text-gray-700 ' to={"/about"}>About</NavLink></li>
                            <li className='hover:scale-125'><NavLink className='text-md font-medium hover:border-b-blue-400 hover:border-b-4 hover:ease-in hover:text-gray-700' to={"/academics"}>Academics</NavLink></li>
                            <li className='hover:scale-125'><NavLink className='text-md font-medium hover:border-b-blue-400 hover:border-b-4  hover:ease-in hover:text-gray-700' to={"/academics"}>Academics</NavLink></li>
                            <li className='hover:scale-125'><NavLink className='text-md font-medium hover:border-b-blue-400 hover:border-b-4  hover:ease-in hover:text-gray-700' to={"/faculty"}>Faculty</NavLink></li>
                            <li className='hover:scale-125'><NavLink className='text-md font-medium hover:border-b-blue-400 hover:border-b-4  hover:ease-in hover:text-gray-700' to={"/students"}>Students</NavLink></li>
                            <li className='hover:scale-125'><NavLink className='text-md font-medium hover:border-b-blue-400 hover:border-b-4 hover:ease-in hover:text-gray-700' to={"/gallery"}>Gallery</NavLink></li>
                            <li className='hover:scale-125'> <NavLink className='text-md font-medium hover:border-b-blue-400 hover:border-b-4  hover:ease-in hover:text-gray-700' to={"/contact"}>Contact Us</NavLink></li>
                        </ul>
                    </div>

                )}

                <div className='hidden  md:flex  justify-between w-2/4 m-3'>
                    <ul className='md:flex justify-between w-full'>
                        <li> <NavLink className='text-md font-thin hover:border-b-blue-400 hover:border-b-4  hover:ease-in ' to={"/about"}>About</NavLink></li>
                        <li><NavLink className='text-md font-thin hover:border-b-blue-400 hover:border-b-4 hover:ease-in' to={"/academics"}>Academics</NavLink></li>
                        <li><NavLink className='text-md font-thin hover:border-b-blue-400 hover:border-b-4  hover:ease-in' to={"/academics"}>Academics</NavLink></li>
                        <li><NavLink className='text-md font-thin hover:border-b-blue-400 hover:border-b-4  hover:ease-in' to={"/faculty"}>Faculty</NavLink></li>
                        <li><NavLink className='text-md font-thin hover:border-b-blue-400 hover:border-b-4  hover:ease-in' to={"/students"}>Students</NavLink></li>
                        <li><NavLink className='text-md font-thin hover:border-b-blue-400 hover:border-b-4 hover:ease-in' to={"/gallery"}>Gallery</NavLink></li>
                        <li> <NavLink className='text-md font-thin hover:border-b-blue-400 hover:border-b-4  hover:ease-in' to={"/contact"}>Contact Us</NavLink></li>
                    </ul>






                </div>

            </header>
        </>
    )
}

export default Header
