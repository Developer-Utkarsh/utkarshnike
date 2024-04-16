import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className='flex justify-center items-center flex-col hover:text-coral-red duration-300 transition-all'>
            <img src={imgURL} className="rounded-full object-cover w-32 h-32" alt="customer" />
            <p className='mt-6 info-text  max-w-sm text-center'>{feedback}</p>
            <div className='mt-3 flex justify-center items-center gap-2'>
                <img src={star} className="object-container m-0 " alt="" />
                <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
            </div>
            <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
        </div>
    )
}

export default ReviewCard
