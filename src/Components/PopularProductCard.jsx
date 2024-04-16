import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className='flex flex-1 flex-col max-w-fit w-full rounded-sm border-slate-100 rounded-t-3xl border-b rounded-tr-3xl  p-0  hover:border-coral-red hover:border-0 hover:border-b hover:rounded-b-sm max-sm:justify-center max-sm:items-center duration-300 bg-white-400 hover:scale-105 transfrom transition-all hover:shadow-sm hover:rounded-md'>
            <img src={imgURL} alt={name} className='w-full h-full max-sm:justify-center max-sm:items-center ' />
            <div className='flex flex-col justify-center items-start pb-7 pl-3 max-sm:items-center max-sm:justify-center '>


                <div className='mt-8 flex justify-start gap-2.5 '>
                    <img src={star} alt="rating" width={24} height={24} />
                    <p className='font-montserraat text-slate-gray text-xl leading-normal'>(4.5)</p>
                </div>
                <h3 className='mt-2 text-2xl leading-normal font-palanquin font-semibold '>{name}</h3>
                <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
            </div>
        </div >
    )
}

export default PopularProductCard
