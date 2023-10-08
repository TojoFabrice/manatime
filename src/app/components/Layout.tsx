import React from 'react'
import Sidebar from './Sidebar'
import MenuBar from './menu/MenuBar'
import Table from './table/table'

const Layout = () => {
  return (
    <div className='h-screen flex flex-row justify-start bg-secondary'>
        <Sidebar />
        <div className='w-full overflow-y-auto'>
            <div className='sticky top-0'>
                <MenuBar />
            </div>
            <div className='w-full h-auto overflow-y-auto'>
                <div>
                  <Table />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Layout