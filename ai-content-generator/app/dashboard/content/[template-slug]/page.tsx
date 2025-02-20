'use client'
import React, { useContext, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { AIOutput } from '@/utils/schema'
import { db } from '@/utils/db'
import { useUser } from '@clerk/nextjs'
import moment from 'moment';
import { TotalUsageContext } from '@/app/(contex)/TotalUsageContext'

interface PROPS {
    params: {
        'template-slug': string
    }
}

const CreateNewContent = (props: PROPS) => {
    const params = useParams();
    const {user} = useUser();
    const router = useRouter();
    const{totalUsage, setTotalUsage} = useContext(TotalUsageContext);

    const templateSlug = params['template-slug'] as string | undefined;
    // const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === templateSlug);
    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => {
        if (item.form) {
            item.form = item.form.map((field) => ({
                ...field,
                field: field.field as "input" | "textarea" | "dropdown" | "checkbox" | "radio",
            }));
        }
        return item.slug === templateSlug;
    });
    // const selectedTemplate: TEMPLATE | undefined = TemplatesArray.find((item) => item.slug === templateSlug);

    // const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === props.params['template-slug'])
    const [loading, setLoading] = useState(false);

    const [aiOutput, setAiOutput] = useState<string>('');   

    const generateAIContent = async (formData: any) => {

        console.log('Generate AI Content');
        if(totalUsage >= 10000){
            console.log("Please Upgrade your plan");
            
            alert('You have reached your credit limit');
            router.push('/dashboard/billing');
            return
        }
        setLoading(true);
        const selectedPrompt = selectedTemplate?.aiPrompt;
        const finalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt;
        console.log(finalAIPrompt);

        const result = await chatSession.sendMessage(finalAIPrompt);
        console.log(result.response.text());
        setAiOutput(result.response.text());
        await saveToDb(formData,selectedTemplate?.slug, result?.response.text());
        setLoading(false);
    }

    // Save contents to the database - Drizzle Database
    // Save contents to the database - Drizzle Database

    const saveToDb = async (formData: any, templateSlug: any, aiResponse?: string) => {
        const createdBy = user?.primaryEmailAddress?.emailAddress || 'Unknown User';
        console.log('createdBy:', createdBy); // add this line

        if (!createdBy) {
            console.error('User email address is not available');
            return; // or throw an error, depending on your requirements
        }

        console.log('inserting data:', {
            formData: JSON.stringify(formData),
            templateSlug,
            aiResponse,
            createdBy,
            createdAt: moment().format('DD/MM/YYYY HH:mm:ss')
        }); // add this line

        try {
            // @ts-ignore
            const result = await db.insert(AIOutput).values({
                FormData: formData,
                templateSlug,
                aiResponse,
                createdBy,
                createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
                ignoreNulls: true
            });
            console.log('insert result:', result); // add this line
        } catch (error) {
            console.error('insert error:', error); // add this line
        }
    }
   
    // const saveToDb = async (formData: any, templateSlug: any, aiResponse?: string) => {
    //     const createdBy = user?.primaryEmailAddress?.emailAddress;
    //     if (!createdBy) {
    //         console.error('User email address is not available');
    //         return; // or throw an error, depending on your requirements
    //     }
    //     const result = await db.insert(AIOutput).values({
    //         // @ts-ignore
    //         FormData: formData,
    //         templateSlug: templateSlug,
    //         aiResponse: aiResponse,
    //         createdBy: createdBy,
    //         createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
    //     })
    //     console.log(result);
        
    // }

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