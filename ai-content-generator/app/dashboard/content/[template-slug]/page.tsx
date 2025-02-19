'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface PROPS {
    params: {
        'template-slug': string
    }
}

const CreateNewContent = (props: PROPS) => {
    const params = useParams(); // ✅ Get params properly
    const templateSlug = params['template-slug'] as string; // Ensure it's treated as a string
    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === templateSlug);
    // const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === props.params['template-slug'])

    const generateAIContent = (formData: any) => {
        console.log('Generate AI Content');
    }

    return (
        <>
            <div className='p-10'>
                <Link href={'/dashboard'}> <Button><ArrowLeft />Back</Button></Link>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
                    {/* Form Section */}
                    <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => generateAIContent(v)
                    } />

                    {/* Output Section */}
                    <div className='md:col-span-2'>
                        <OutputSection />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateNewContent