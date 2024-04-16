import React from 'react'
import { offer } from '../assets/images'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
    return (
        <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
            <div className='flex-1 '>
                <img src={offer} alt="offer" className='object-contain w-full h-full' />
            </div>
            <div className='flex flex-1 flex-col'>


                <h2 className='mt-0 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'><span className='text-coral-red inline-block mt-3'>Special</span> Offer</h2>
                <p className='mt-4 lg:max-w-lg info-text'>Embark on a shopping journey that redefines your Experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
                <p className='mt-6 lg:max-w-lg info-text'>Navigate a realm of possibilties designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
                <div className='mt-11 flex flex-wrap gap-4'>

                    <Button label="Shop Now" iconURL={arrowRight} />
                    <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
                </div>

            </div>
        </section>
    )
}

export default SpecialOffer
