import React from 'react';
import Button from '../Components/Button';

const Subscribe = () => {
    return (
        <section className='flex max-container justify-center items-center max-lg:flex-col gap-10' id='contact-us'>
            <h3 className='text-4xl leading-[60px] lg:max-w-md font-palanquin font-bold'>Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter</h3>
            <div className='lg:max-4-[40%] flex items-center w-full max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full hover:border-coral-red duration-300 transition-all focus-within:border-coral-red'>
                <input
                    type="text"
                    placeholder="subscribe@nike.com"
                    className='flex-1 rounded-full p-2.5 focus:outline-none focus:border-coral-red'
                    onFocus={(e) => e.target.classList.add('border-coral-red')}
                    onBlur={(e) => e.target.value === '' && e.target.classList.remove('border-coral-red')}
                />
                <div className='flex max-sm:justify-end items-center max-sm:w-full'>
                    <Button fullWidth label="Subscribe" />
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
