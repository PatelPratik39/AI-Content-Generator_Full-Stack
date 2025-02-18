import Templates from '@/app/(data)/Templates'
import React from 'react'
import TemplateCard from './TemplateCard';


export interface TEMPLATE {
    name: string;
    description: string;
    category: string;
    icon: string;
    aiPrompt: string;
    slug: string;
    form?: FORM[]
}

export interface FORM {
    label: string;
    field: string;
    name: string;
    required?: boolean;
}


const TemplateListSection = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {Templates.map((item: TEMPLATE, index: number) => (
                <TemplateCard {...item} key={index}/>
            ))}
        </div>
    )
}

export default TemplateListSection