'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'

interface PROPS {
    params: {
        'template-slug': string
    }
}

const CreateNewContent = (props: PROPS) => {
    const params = useParams();
    const templateSlug = params['template-slug'] as string | undefined;
    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === templateSlug);
    // const selectedTemplate: TEMPLATE | undefined = TemplatesArray.find((item) => item.slug === templateSlug);

    // const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === props.params['template-slug'])
    const [loading, setLoading] = useState(false);

    const [aiOutput, setAiOutput] = useState<string>('');   

    const generateAIContent = async (formData: any) => {

        console.log('Generate AI Content');
        setLoading(true);
        const selectedPrompt = selectedTemplate?.aiPrompt;
        const finalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt;
        console.log(finalAIPrompt);

        const result = await chatSession.sendMessage(finalAIPrompt);
        console.log(result.response.text());
        setAiOutput(result.response.text());
        setLoading(false);
    }

    return (
        <>
            <div className='p-10'>
                <Link href={'/dashboard'}> <Button><ArrowLeft />Back</Button></Link>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
                    {/* Form Section */}
                    <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => generateAIContent(v)} loading={loading} />

                    {/* Output Section */}
                    <div className='md:col-span-2'>
                        <OutputSection aiOutput={aiOutput} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateNewContent