'use client'

import { useVisibilityContext } from '@/app/context/VisibilityContext';
import React from 'react'
import Image from 'next/image'
import logo from '../../assets/icons/Logo.svg'
import Card from '../card/Card';
import { listModule } from '@/app/data/listModule';

const Modal = () => {
    const { isVisible, setIsVisible } = useVisibilityContext();
    if (!isVisible) return
    return (
        <div className='absolute inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-start'>
            <div className='w-[800px] h-screen '>
                <div className='bg-white p-4 h-screen text-black rounded-r-[40px] flex justify-evenly flex-col'>
                    <div className='flex justify-center'>
                        <Image src={logo} alt="Logo" width={350} height={72.5} />
                    </div>
                    <div className=''>
                        <div className='flex justify-start flex-wrap gap-[6px]'>
                            {
                                listModule.map((item: any, key: number) => (
                                    <Card image={item.image} altText={item.altTitle} cardName={item.title} key={key} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
