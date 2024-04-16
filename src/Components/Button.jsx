import React from 'react'

const Button = (props) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-6 border py-3 font-montserrat text-lg leading-none duration-300
        ${props.backgroundColor ? `${props.backgroundColor} ${props.textColor} ${props.borderColor} hover:text-coral-red hover:border-coral-red` : '  border-coral-red text-coral-red hover:bg-coral-red hover:text-white'} rounded-full ${props.fullWidth && 'w-full'} transition-all shadow-sm hover:shadow-md duration-300`}>{props.label}

            {props.iconURL && <img src={props.iconURL} className='ml-2 rounded-full w-5 h-5' />
            }        </button>

    )
}

export default Button
