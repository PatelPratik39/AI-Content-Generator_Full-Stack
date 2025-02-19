'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'


interface PROPS {
    selectedTemplate?: TEMPLATE
    userFormInput?: any
}
const FormSection = ({ selectedTemplate, userFormInput }: PROPS) => {
    const [formData, setFormData] = useState<any>()

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // console.log(formData);
        userFormInput(formData);
        
    }

    return (
        <>
            <div className='p-5 shadow-md border rounded-lg bg-white'>
                {/* @ts-ignore */}
                <Image src={selectedTemplate?.icon} alt='icon of the selected template' width={70} height={70} />
                <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
                <p className='text-gray-500 text-sm'>{selectedTemplate?.description}</p>
                <form className='mt-6' onSubmit={handleSubmit}>
                    {selectedTemplate?.form?.map((item, index) => (
                        <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
                            <label className='font-bold'>{item.label}</label>
                            {item.field === 'input' ?
                                <Input name={item.name} required={item?.required} placeholder="Enter your text"  onChange={handleInputChange}/>
                                :
                                item.field === 'textarea' ? <Textarea name={item.name} required={item?.required} placeholder="Enter your text" /> : null
                            }
                        </div>
                    ))}
                    <Button className='w-full py-6'>Generate Content</Button>
                </form>
            </div>
        </>
    )
}

export default FormSection