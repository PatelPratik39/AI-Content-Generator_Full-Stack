
import { db } from '@/utils/db'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import CopyButton from './_components/CopyButton'
import { AIOutput } from '@/utils/schema'
import { TEMPLATE } from '../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import Image from 'next/image'
import { desc } from 'drizzle-orm'
import { eq } from 'drizzle-orm';
import { Button } from '@/components/ui/button'

export interface HISTORY {
    id: number,
    formData: string,
    aiResponse: string,
    templateSlug: string,
    createdBy: string,
    createdAt: string   
    }

async function History ()  {
    const user = await currentUser();

    // @ts-ignore
    const HistoryList: HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(AIOutput.id));
    

    const GetTemplateName = (slug: string) => {

        const template: TEMPLATE | any = Templates?.find((item) => item.slug == slug)
        return template;
    }

    return (
        <div className='m-5 p-5 border rounded-lg bg-white'>
            <h2 className='font-bold text-3xl'>History</h2>
            <p className='text-gray-500'>Search your previously generate AI content</p>
            <div className='grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3'>
                <h2 className='col-span-2'>TEMPLATE</h2>
                <h2 className='col-span-2'>AI RESPONSE</h2>
                <h2>DATE</h2>
                <h2>WORDS</h2>
                <h2>COPY</h2>
            </div>
            <hr />
            {HistoryList.map((item: HISTORY, index: number) => (
                <div key={item.id} className='grid grid-cols-7 my-5 py-3 px-3'>
                    <h2 className='col-span-2 flex gap-2 items-center'>
                        <Image src={GetTemplateName(item?.templateSlug)?.icon} width={25} height={25} alt='icon' />
                        {GetTemplateName(item.templateSlug)?.name}
                    </h2>
                    <h2 className='col-span-2 line-clamp-3 mr-3'>{item?.aiResponse}</h2>
                    <h2>{item.createdAt}</h2>
                    <h2>{item?.aiResponse.length}</h2>
                    <h2>
                        <CopyButton aiResponse={item.aiResponse} />
                    </h2>
                </div>
            ))}
        </div>
    )
}

export default History