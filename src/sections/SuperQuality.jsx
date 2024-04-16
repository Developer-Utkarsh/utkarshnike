import React from 'react'
import Button from '../Components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
    return (
        <section className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
            <div className='flex flex-1 flex-col'>


                <h2 className='mt-0 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>We Provide You <span className='text-coral-red inline-block mt-3'>Super</span> <br /> <span className='text-coral-red inline-block mt-3'>Quality</span> Shoes</h2>
                <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your Experience,providing you with unmatched quality, innovation, and a touch of elegance.</p>
                <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and excellence ensures your satisfaction</p>
                <div className='mt-11'>

                    <Button label="View Details" />
                </div>

            </div>
            <div className='flex-1 flex justify-center items-center '>
                <img src={shoe8} alt='about-shoe' className='w-full h-full object-contain' />

            </div>

        </section>
    )
}

export default SuperQuality
