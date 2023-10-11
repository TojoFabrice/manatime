import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import accueil from '../../assets/icons/Accueil.svg'
import add from '../../assets/icons/Add.svg'
import stripe from '../../assets/icons/Stripe.svg'
import stripeBlue from '../../assets/icons/stripe_blue.svg'
import monEspace from '../../assets/icons/Mon_espace.svg'
import validation from '../../assets/icons/Validation.svg'
import indicateur from '../../assets/icons/Indicateurs.svg'
import soldes from '../../assets/icons/Soldes.svg'
import soldesBlue from '../../assets/icons/Soldes_blue.svg'
import recherche from '../../assets/icons/Recherche.svg'
import graphic from '../../assets/icons/Graphic.svg'
import { Poppins, Roboto_Mono } from 'next/font/google'


const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
const roboto = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto'
})

const MenuSidebar = () => {
    const [solde, setSolde] = useState<boolean>(false)
    const style = {
        height: 'calc(100% - 198px)'
    };
    return (
        <div>
            <div className='w-full'>
                <ul>
                    <li className='bg-primary  border border-primary border-t-lineTop border-b-lineBottom h-66px flex items-center relative active:bg-blue-400'>
                        <Link href="/pages/home" className={`${poppins.variable} font-sans font-medium text-lg flex w-full h-full`}>
                            <Image src={accueil} alt="Abscence icon" width={22} height={22} className='ml-5' />
                            <div className='text-center w-full h-[66px] absolute flex justify-center items-center'>
                                Accueil
                            </div>
                        </Link>
                    </li>
                    <li className='bg-primary  border border-primary border-t-lineTop border-b-lineBottom h-66px flex items-center relative active:bg-blue-400'>
                        <Link href="/pages/addnew" className={`${poppins.variable} font-sans font-medium text-lg flex w-full h-full`}>
                            <Image src={add} alt="Abscence icon" width={22} height={22} className='ml-5' />
                            <div className='text-center w-full h-[66px] absolute flex justify-center items-center'>
                                Ajouter
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='bg-gradient-to-b from-gradientTop to-gradientBottom w-full h-[calc(100vh-198px)] relative'>
                <ul>
                    <li className='border-t border-b border-t-borderMenu border-b-borderMenu h-66px flex items-center relative'>
                        <Image src={monEspace} alt="Abscence icon" width={22} height={22} className='ml-5' />
                        <div className='text-center w-full absolute'>
                            <Link href="#" className={`${poppins.variable} font-sans font-medium text-15px`}>Mon espace</Link>
                        </div>
                        <button className='absolute right-[15px]'>
                            <Image src={stripe} alt="Abscence icon" width={11} height={7} />
                        </button>
                    </li>
                    <li className='border-t border-b border-t-borderMenu border-b-borderMenu h-66px flex items-center relative'>
                        <Image src={validation} alt="Abscence icon" width={22} height={22} className='ml-5' />
                        <div className='text-center w-full absolute'>
                            <Link href="#" className={`${poppins.variable} font-sans font-medium text-15px`}>Validation</Link>
                        </div>
                        <button className='absolute right-[15px]'>
                            <Image src={stripe} alt="Abscence icon" width={11} height={7} />
                        </button>
                    </li>
                    <li className='border-t border-b border-t-borderMenu border-b-borderMenu h-66px flex items-center relative'>
                        <Image src={indicateur} alt="Abscence icon" width={22} height={22} className='ml-5' />
                        <div className='text-center w-full absolute'>
                            <Link href="#" className={`${poppins.variable} font-sans font-medium text-15px`}>Indicateur</Link>
                        </div>
                        <button className='absolute right-[15px]'>
                            <Image src={stripe} alt="Abscence icon" width={11} height={7} />
                        </button>
                    </li>
                    <li className={`border-t border-b border-t-borderMenu border-b-borderMenu h-66px flex items-center relative ${solde ? 'bg-white text-[#084693] border-b-white' : ''}`}>
                        {
                            solde ?
                                <Image src={soldesBlue} alt="Abscence icon" width={22} height={22} className='ml-5' />
                                :
                                <Image src={soldes} alt="Abscence icon" width={22} height={22} className='ml-5' />
                        }
                        <div className='text-center w-full absolute'>
                            <Link href="#" className={`${poppins.variable} font-sans font-medium text-15px`}>Soldes</Link>
                        </div>
                        <button className='absolute right-[15px]' onClick={() => setSolde(!solde)}>
                            {
                                solde ?
                                    <Image src={stripeBlue} alt="Abscence icon" width={11} height={7} className='rotate-180 duration-500' />
                                    :
                                    <Image src={stripe} alt="Abscence icon" width={11} height={7} className='duration-500' />
                            }
                        </button>
                    </li>
                    {
                        solde &&
                        <ul className='text-sousmenu bg-white'>
                            <li className='h-10 flex w-full justify-end pr-15px'>
                                <Link href='#' className={`${roboto.variable} font-roboto font-medium text-base`}>Gestion des solde</Link>
                            </li>
                            <li className='h-10 flex w-full justify-end pr-15px'>
                                <Link href='#' className={`${roboto.variable} font-roboto font-normal text-base`}>Ajuster un solde</Link>
                            </li>
                            <li className='h-10 flex  w-full justify-end pr-15px'>
                                <Link href='#' className={`${roboto.variable} font-roboto font-normal text-base`}>Compteurs</Link>
                            </li>
                            <li className='h-10 flex  w-full justify-end pr-15px'>
                                <Link href='#' className={`${roboto.variable} font-roboto font-normal text-base`}>Historique</Link>
                            </li>
                        </ul>
                    }
                    <li className='border-t border-b border-t-borderMenu border-b-borderMenu h-66px flex items-center relative'>
                        <Image src={recherche} alt="Abscence icon" width={22} height={22} className='ml-5' />
                        <div className='text-center w-full absolute'>
                            <Link href="#" className={`${poppins.variable} font-sans font-medium text-15px`}>Recherche</Link>
                        </div>
                        <button className='absolute right-[15px]'>
                            <Image src={stripe} alt="Abscence icon" width={11} height={7} />
                        </button>
                    </li>
                </ul>
                <div className='absolute bottom-0'>
                    <Image src={graphic} alt="Graphic" />
                </div>
            </div>
        </div>
    )
}

export default MenuSidebar