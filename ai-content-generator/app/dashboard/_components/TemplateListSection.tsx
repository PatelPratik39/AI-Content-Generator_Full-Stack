import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
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


const TemplateListSection = ({ userSearchInput }: any) => {
    const [templateList, setTemplateList] = useState(Templates);

    useEffect(() => {
        console.log(userSearchInput);
        if(templateList){
            const filteredData = Templates.filter(item => item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
            setTemplateList(filteredData);
        } else {
            setTemplateList(Templates);
        }
    }, [userSearchInput])

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 h-screen bg-gray-100'>
            {templateList.map((item: TEMPLATE, index: number) => (
                <TemplateCard {...item} key={index} />
            ))}
        </div>
    )
}

export default TemplateListSection