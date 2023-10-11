import Table from "@/app/components/table/table";

async function fetchData() {
    const res = await fetch("http://localhost:3000/api/manatime", {
        next: {
          revalidate: 10,
        },
      });
    const data = await res.json();
    return data.dataManaTime;
}

export default async function Home() {
    const datas = await fetchData()
    return (

        <div className='w-full h-auto overflow-y-auto'>
            <div>
                <Table datas={datas}/>
            </div>
        </div>

    )
}