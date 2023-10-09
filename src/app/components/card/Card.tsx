import React from 'react'
import Image from 'next/image'

interface CardProps {
    image:string,
    altText:string,
    cardName:string
}

const Card: React.FC<CardProps> = ({image, altText, cardName}) => {
    console.log('>>>>>>>>>>', Image);
    
  return (
    <div className='bg-white rounded-[10px] border border-[#D4D4D4] flex flex-col justify-center items-center w-[170px] h-[170px]'>
        <div>
            <Image src={image} width={89} height={83} alt={altText}/>
        </div>
        <div>
            {cardName}
        </div>
    </div>
  )
}

export default Card