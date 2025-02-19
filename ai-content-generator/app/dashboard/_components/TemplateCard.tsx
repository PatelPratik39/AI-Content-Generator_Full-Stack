import React from 'react'
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';
import  Link from 'next/link';

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={'/dashboard/content/' + item?.slug} >
      <div className='p-5 w-full h-[200px] border rounded-md shadow-lg bg-white flex flex-col gap-3 cursor-pointer justify-center items-center hover:scale-105 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100'>
        <Image src={item.icon} alt={item.name} width={50} height={50} />
        <h2 className='font-medium text-lg'>{item.name}</h2>
        <p className='text-gray-500 line-clamp-3'>{item.description}</p>
      </div>
    </Link>
  )
}

export default TemplateCard