'use client'
import React, { useState } from 'react';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { FiLoader } from "react-icons/fi";

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput?: any;
    loading?: boolean;
}

const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {
    const [formData, setFormData] = useState<{ [key: string]: any }>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        userFormInput(formData);
    };

    return (
        <div className='p-5 shadow-md border rounded-lg bg-white'>
            {/* Template Icon */}
            {selectedTemplate?.icon && (
                <Image src={selectedTemplate.icon} alt='Template Icon' width={70} height={70} />
            )}

            {/* Template Name & Description */}
            <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
            <p className='text-gray-500 text-sm'>{selectedTemplate?.description}</p>

            {/* Form Section */}
            <form className='mt-6' onSubmit={handleSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
                        <label className='font-bold'>{item.label}</label>

                        {/* Render Input Field Based on Type */}
                        {item.field === 'input' && (
                            <Input
                                name={item.name}
                                required={item?.required}
                                placeholder="Enter your text"
                                onChange={handleInputChange}
                            />
                        )}

                        {item.field === 'textarea' && (
                            <Textarea
                                name={item.name}
                                required={item?.required}
                                placeholder="Enter your text"
                                onChange={handleInputChange}
                            />
                        )}

                        {item.field === 'dropdown' && Array.isArray(item.options) && (
                            <select
                                name={item.name}
                                required={item?.required}
                                className="border rounded-md p-2 w-full"
                                onChange={handleInputChange}
                            >
                                <option value="">-- Select an option --</option>
                                {item.options.map((option: string, i: number) => (
                                    <option key={i} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        )}

                        {item.field === 'checkbox' && Array.isArray(item.options) && (
                            <div className="flex flex-wrap gap-3">
                                {item.options.map((option: string, i: number) => (
                                    <label key={i} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name={item.name}
                                            value={option}
                                            className="mr-2"
                                            onChange={handleInputChange}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        )}

                        {item.field === 'radio' && Array.isArray(item.options) && (
                            <div className="flex flex-col space-y-2">
                                {item.options.map((option: string, i: number) => (
                                    <label key={i} className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name={item.name}
                                            value={option}
                                            className="mr-2"
                                            onChange={handleInputChange}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        )}

                    </div>
                ))}

                {/* Submit Button */}
                <Button className='w-full py-6' disabled={loading}>
                    {loading && <FiLoader className="animate-spin text-2xl mr-2" />}
                    Generate Content
                </Button>
            </form>
        </div>
    );
};

export default FormSection;




// 'use client'
// import React, { useState } from 'react'
// import { TEMPLATE } from '../../_components/TemplateListSection'
// import Image from 'next/image'
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from '@/components/ui/button'
// // import { Loader2Icon } from 'lucide-react'
// import { FiLoader } from "react-icons/fi";


// interface PROPS {
//     selectedTemplate?: TEMPLATE
//     userFormInput?: any,
//     loading?: boolean
// }
// const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {
//     const [formData, setFormData] = useState<any>()

//     const handleInputChange = (e: any) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value })
//     }

//     const handleSubmit = (e: any) => {
//         e.preventDefault();
//         // console.log(formData);
//         userFormInput(formData);
//     }

//     return (
//         <>
//             <div className='p-5 shadow-md border rounded-lg bg-white'>
//                 {/* @ts-ignore */}
//                 <Image src={selectedTemplate?.icon} alt='icon of the selected template' width={70} height={70} />
//                 <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
//                 <p className='text-gray-500 text-sm'>{selectedTemplate?.description}</p>
//                 <form className='mt-6' onSubmit={handleSubmit}>
//                     {selectedTemplate?.form?.map((item, index) => (
//                         <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
//                             <label className='font-bold'>{item.label}</label>
//                             {item.field === 'input' ?
//                                 <Input name={item.name} required={item?.required} placeholder="Enter your text" onChange={handleInputChange} />
//                                 :
//                                 item.field === 'textarea' ? <Textarea name={item.name} required={item?.required} placeholder="Enter your text" /> : null
//                             }
//                         </div>
//                     ))}
//                     <Button className='w-full py-6' disabled={loading}>{loading && < FiLoader className="animate-spin text-6xl text-white"/>}Generate Content</Button>

//                 </form>
//             </div>
//         </>
//     )
// }

// export default FormSection