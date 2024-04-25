import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

function Footer() {
    return (
        <footer className='max-container'>
            <div className='flex justify-between gap-20 items-center flex-wrap max-lg:flex-col'>
                <div className='flex flex-col items-start'>
                    <a href="/">
                        <img src={footerLogo} alt="Logo" className='' width={152} height={48} />
                    </a>
                    <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm max-sm:whitespace-nowrap'>Get Shoes ready for the new term at your nearest Nike stores. Find Your perfect Size. In Store. Get Rewards</p>
                    <div className='flex items-center gap-5 mt-8 '>
                        {socialMedia.map((icon) => (
                            <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                                <img src={icon.src} alt={icon.alt} width={24} height={24} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap max-sm:justify-start'>
                    {footerLinks.map((section) => (
                        <div key={section}>
                            <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>
                                {section.title}
                                <ul>
                                    {section.links.map((link) => (
                                        <li className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer' key={link.name}>
                                            <a >{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </h4>

                        </div>
                    ))}
                </div>
            </div>

            <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
                <div className='flex flex-1 justify-start items-center font-montserrat cursor-pointer'>

                    <img src={copyrightSign} alt="copyright" width={20} height={20} className='w-full h-full rounded-full m-0' />
                    <p className='ml-2'> Copyright. All rights reserved</p>
                </div>
                <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
            </div>

        </footer>
    )
}

export default Footer
