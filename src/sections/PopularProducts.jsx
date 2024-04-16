import React, { useEffect, useState } from 'react';
import { products } from "../constants"
import PopularProductCard from '../Components/PopularProductCard'
const PopularProducts = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Trigger the animation when the component mounts
    }, []);
    return (
        <section id="products" className={`max-container max-sm:mt-12 max-sm:justify-center max-sm:items-center sm:w-full flex flex-col w-full ${isMounted ? 'animate-fadeUp' : ''} `}>
            <div className="flex flex-col justify-start gap-5 max-sm:justify-center max-sm:items-center w-full ">
                <h2 className='font-palanquin font-bold text-4xl'>Our <span className='text-coral-red'>Popular</span> Products</h2>
                <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
            </div>

            <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-12 max-sm:justify-center max-sm:items-center '>
                {products.map((product) => (
                    <PopularProductCard key={product.name} {...product} />
                ))}

            </div>

        </section>
    )
}

export default PopularProducts
