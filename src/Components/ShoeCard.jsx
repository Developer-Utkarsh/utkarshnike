import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
    const handleClick = () => {
        if (bigShoeImage !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
    return (
        <div className={`border-2 rounded-xl ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red transform  hover:border-2 scale-110 hover:scale-110 hover:border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1 shadow-sm hover:transform hover:scale-105 hover:border-coral-red hover:border transition-all duration-300`} onClick={handleClick}>
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img src={imgURL.thumbnail} alt="shoe collection" width={128} height={106} className='object-contain' />
            </div>
        </div>
    )
}

export default ShoeCard
