"use client"

import React from 'react'
import Image from 'next/image'
import solder from '../../assets/icons/Solder.svg'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight : ['100','300','400','500','700','900']
})



const Table = ({datas}:any) => {

    return (
        <div className="p-[30px] h-auto">
            
            <div className="overflow-auto rounded-lg shadow block">
                <table className={`${roboto.className} font-roboto w-full`}>
                    <thead className="bg-white border-b text-sousmenu">
                        <tr className='divide-x h-[38px]'>
                            <th className="w-[450px] px-15px text-base font-medium  text-left overflow-hidden whitespace-nowrap">Utilisateurs</th>
                            <th className="w-[450px] px-15px text-base font-medium  text-left overflow-hidden whitespace-nowrap">Catégorie</th>
                            <th className="w-[120px] px-15px text-base font-medium  text-left overflow-hidden whitespace-nowrap">Période</th>
                            <th className="w-[120px] px-15px text-base font-medium  text-left overflow-hidden whitespace-nowrap">Solde actuel</th>
                            <th className="w-[120px] px-15px text-base font-medium  text-left overflow-hidden whitespace-nowrap">Solde pris</th>
                            <th className="w-[120px] px-15px text-base font-medium  text-left overflow-hidden whitespace-nowrap">Solde futur</th>
                            <th className="w-[270px] px-15px text-base font-medium  text-left overflow-hidden whitespace-nowrap"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 font-normal">
                        {
                            datas.map((item:any) => {
                                return(
                                    <tr className="bg-white divide-x text-menu h-[39px]" key={item.id}>
                                        <td className="px-15px text-base text-gray-700 whitespace-nowrap">
                                            <a href="#" className=" text-blue-500 hover:underline">{item.utilisateur}</a>
                                        </td>
                                        <td className="px-15px text-base text-gray-700 whitespace-nowrap">
                                            {item.categorie}
                                        </td>
                                        <td className="px-15px text-base text-gray-700 whitespace-nowrap">
                                            <span
                                                className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
                                        </td>
                                        <td className="px-15px text-base text-gray-700 whitespace-nowrap">{item.sa}</td>
                                        <td className="px-15px text-base text-gray-700 whitespace-nowrap">{item.sp}</td>
                                        <td className="px-15px text-base text-gray-700 whitespace-nowrap">{item.sf}</td>
                                        <td className="px-15px text-base text-gray-700 whitespace-nowrap">
                                            <div className='flex justify-around'>
                                                <Image src={solder} alt="solder" width={32} height={32} />
                                                <Image src={solder} alt="solder" width={32} height={32} />
                                                <Image src={solder} alt="solder" width={32} height={32} />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table