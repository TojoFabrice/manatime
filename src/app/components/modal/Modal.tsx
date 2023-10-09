'use client'

import { useVisibilityContext } from '@/app/context/VisibilityContext';
import React from 'react'
import Image from 'next/image'
import logo from '../../assets/icons/Logo.svg'

const Modal = () => {
    const { isVisible, setIsVisible } = useVisibilityContext();
    if (!isVisible) return
    return (
        <div className='absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-start'>
            <div className='w-1/2 h-screen '>
                <div className='bg-white p-4 h-screen text-black rounded-r-2xl'>
                    <div className='flex justify-center mt-[118px]'>
                        <Image src={logo} alt="Logo" width={350} height={72.5}/>
                    </div>
                    <div className='flex justify-center'>
                        menu
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
