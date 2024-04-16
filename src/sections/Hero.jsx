import React, { useEffect, useState } from 'react';
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../Components/ShoeCard'

const Hero = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Trigger the animation when the component mounts
    }, []);
    const [bigShoe, setBigShoe] = useState(bigShoe1)
    return (
        <section id='home' className={`w-full  ${isMounted ? ' animate-fadeUp' : ''}  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container`} >

            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">

                <p className="text-xl font-monteserrat text-coral-red ">Our Summer Collection</p>
                <h1 className='mt-18 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'><span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span><br /> <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes</h1>
                <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals,quality comfort and innovation for your active life.</p>
                <Button label="Shop Now" iconURL={arrowRight} />
                <div className=' flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
                    {statistics.map((stat) => (
                        <div key={stat.label} className=' hover:text-coral-red transition-all'>
                            <p className='text-4xl font-palanquin font-bold  hover:text-coral-red transition-all'>{stat.value}</p>
                            <p className='leading-7 font-montserrat '>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center bg-hero'>
                <img src={bigShoe} alt="shoe-image" className="object-contain relative z-10 w-full" />
                <div className='flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[10%] max-sm:px-6 '>
                    {shoes.map((shoe) => (
                        <div key={shoe}>
                            <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => { setBigShoe(shoe) }} bigShoeImage={bigShoe} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
