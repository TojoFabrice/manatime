'use client'

import Table from "@/app/components/table/table";
import { useEffect, useState } from "react";

// async function fetchData() {
//     const res = await fetch("http://localhost:3000/api/manatime", {
//         next: {
//           revalidate: 10,
//         },
//       });
//     const data = await res.json();
//     return data.dataManaTime;
// }

export default function Home() {
    // const datas = await fetchData()

    const [datas, setData] = useState(null)
 
    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('http://localhost:3000/api/manatime')
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        setData(result.dataManaTime)
        }
    
        fetchData().catch((e) => {
        // handle the error as needed
        console.error('An error occurred while fetching the data: ', e)
        })
    }, [])

    return (

        <div className='w-full h-auto overflow-y-auto'>
            <div>
                <Table datas={datas}/>
            </div>
        </div>

    )
}