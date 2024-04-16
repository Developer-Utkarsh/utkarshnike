import React from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
    return (
        <>
            <header className='padding-x py-8 absolute z-10 w-full'>
                <nav className='flex justify-between items-center max-container'>
                    <a href='/'>
                        <img src={headerLogo} alt="logo" width={132} height={30} />
                    </a>
                    <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden'>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-all duration-300'>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className='hidden max-lg:block'>
                        <img src={hamburger} alt='Menu' width={26} height={26}></img>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Nav;
