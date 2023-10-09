import React from 'react'
import Image from 'next/image'
import solder from '../../assets/icons/Solder.svg'


const Table = () => {
    return (
        <div className="p-[30px] h-auto">
            
            <div className="overflow-auto rounded-lg shadow block">
                <table className="w-full">
                    <thead className="bg-white border-b text-sousmenu">
                        <tr className='divide-x h-[38px]'>
                            <th className="w-[450px] px-15px text-sm font-semibold tracking-wide text-left">Utilisateurs</th>
                            <th className="w-[450px] px-15px text-sm font-semibold tracking-wide text-left">Catégorie</th>
                            <th className="w-[120px] px-15px text-sm font-semibold tracking-wide text-left">Période</th>
                            <th className="w-[120px] px-15px text-sm font-semibold tracking-wide text-left">Solde actuel</th>
                            <th className="w-[120px] px-15px text-sm font-semibold tracking-wide text-left">Solde pris</th>
                            <th className="w-[120px] px-15px text-sm font-semibold tracking-wide text-left">Solde futu</th>
                            <th className="w-[270px] px-15px text-sm font-semibold tracking-wide text-left"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr className="bg-white divide-x text-menu h-[39px]">
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">
                                <a href="#" className="font-bold text-blue-500 hover:underline">Jean Marie</a>
                            </td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">
                                Kring New Fit office chair, mesh + PU, black
                            </td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">
                                <span
                                    className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
                            </td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">
                                <div className='flex justify-around'>
                                    <Image src={solder} alt="solder" width={32} height={32} />
                                    <Image src={solder} alt="solder" width={32} height={32} />
                                    <Image src={solder} alt="solder" width={32} height={32} />
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-[#F2F2F2] divide-x h-[38px]">
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">
                                <a href="#" className="font-bold text-blue-500 hover:underline">Paul Rogue</a>
                            </td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">
                                <span
                                    className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
                            </td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">
                                <div className='flex justify-around'>
                                    <Image src={solder} alt="solder" width={32} height={32} />
                                    <Image src={solder} alt="solder" width={32} height={32} />
                                    <Image src={solder} alt="solder" width={32} height={32} />
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white divide-x h-[38px]">
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">
                                <a href="#" className="font-bold text-blue-500 hover:underline">Chris brown</a>
                            </td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">
                                <span
                                    className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Cancelled</span>
                            </td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                            <td className="px-15px text-sm text-gray-700 whitespace-nowrap">$200.00</td>
                            <td className="px-15px py-[3px] text-sm text-gray-700 whitespace-nowrap">
                                <div className='flex justify-around'>
                                    <Image src={solder} alt="solder" width={32} height={32} />
                                    <Image src={solder} alt="solder" width={32} height={32} />
                                    <Image src={solder} alt="solder" width={32} height={32} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table