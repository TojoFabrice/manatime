'use client'

import React from 'react'
import Image from 'next/image'
import burgerButton from '/public/icons/Burger_button.svg' 
import MenuSidebar from './menu/MenuSidebar'

const Sidebar = () => {
  return (
    <div className='h-screen bg-white w-[200px] min-w-[200px] z-10 shadow-3xl shadow-shadow'>
      <div className='bg-white h-[66px] flex justify-center items-center'>
        <button>
          <Image src={burgerButton} alt="Abscence icon" width={32} height={32} />
        </button>
      </div>
      <MenuSidebar />
    </div>
  )
}

export default Sidebar