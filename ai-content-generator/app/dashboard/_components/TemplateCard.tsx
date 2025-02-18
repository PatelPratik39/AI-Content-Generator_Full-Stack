import React from 'react'
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';

const TemplateCard = (item: TEMPLATE ) => {
  return (
    <div className='p-5 border rounded-md shadow-md bg-white flex flex-col justify-center items-center'>
        <Image src={item.icon} alt={item.name} width={50} height={50} />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
    </div>
  )
}

export default TemplateCard