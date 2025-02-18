import React from 'react'
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';

const TemplateCard = (item: TEMPLATE ) => {
  return (
    <div className='p-5 border rounded-md shadow-md bg-white flex flex-col gap-3 cursor-pointer justify-center items-center'>
        <Image src={item.icon} alt={item.name} width={50} height={50} />
        <h2 className='font-medium text-lg'>{item.name}</h2>
        <p className='text-gray-500 line-clamp-3'>{item.description}</p>
    </div>
  )
}

export default TemplateCard