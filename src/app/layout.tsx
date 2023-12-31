import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { VisibilityContextProvider } from './context/VisibilityContext'
import Sidebar from './components/Sidebar'
import MenuBar from './components/menu/MenuBar'
import Modal from './components/modal/Modal'

// const inter = Inter({ subsets: ['latin'] })
import { Poppins } from 'next/font/google'


const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <VisibilityContextProvider>
          <div className='h-screen flex flex-row justify-start bg-secondary'>
            <Sidebar />
            <div className='w-full overflow-y-auto relative'>
              <div className='sticky top-0'>
                <MenuBar />
              </div>

            
                {children}  
             

              <div>
                <Modal />
              </div>
            </div>
          </div>
        </VisibilityContextProvider>
      </body>
    </html>
  )
}

              {/* <div className='w-full h-auto overflow-y-auto'>
          <div>
            <Table />
          </div>
        </div> */}
