import React from 'react';
import styles from '../Style';
import { useState } from "react";
import { close, menu } from "../Assets";
import { navLinks } from '../Constant';

const Navbar = () =>
{
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const handleToggleClick = () => setToggle(!toggle);
    const handleNavmenuClick = (title) =>
    {
        setActive(title);
        setToggle(false); // Add the missing parameter `title` here
        // Close the mobile menu when a menu item is clicked

    };

    return (
        <nav className='w-full max-w-[1280px] flex justify-between items-center'>
            <div className="text-center text-3xl font-medium font-serif text-slate-700 cursor-pointer hover:scale-105">
                Khurshid
            </div>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`text-lg hover:cursor-pointer hover:scale-110 ${active === nav.title ? 'text-white' : 'text-dimWhite'
                            } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                        onClick={() => handleNavmenuClick(nav.title)} // Pass `nav.title` as parameter
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
                <button className={`${styles.buttonDesign} ml-10 text-base px-4 py-1`}>Contact</button>
            </ul>
            <div className='md:hidden flex flex-1 justify-end items-center'>
                <img
                    src={toggle ? close : menu}
                    alt='Menu'
                    className='w-[28px] h-[28px] object-contain'
                    onClick={handleToggleClick}
                />
            </div>

            {/* Mobile Nav */}

            <div
                className={`${!toggle ? "hidden" : "flex"} top-10 w-full p-6 bg-gradient-to-br from-slate-600 to-gray-400 absolute left-0 right-0 min-w-[140px] rounded-xl sidebar`}
            >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                            onClick={handleNavmenuClick}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;
