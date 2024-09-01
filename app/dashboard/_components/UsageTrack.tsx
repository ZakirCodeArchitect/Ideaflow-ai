"use client"

import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { eq } from "drizzle-orm"
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';

function UsageTrack() {

    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const { updateCreditUsage } = useContext(UpdateCreditUsageContext);

    useEffect(() => {
        if (user) {
            GetData();
        }
    }, [user]);

    useEffect(() => {
        if (user && updateCreditUsage) {
            GetData();
        }
    }, [updateCreditUsage, user]);

    const GetData = async () => {
        if (user?.primaryEmailAddress?.emailAddress) {
            {/* @ts-ignore */}
            const result: HISTORY[] = await db.select().from(AIOutput)
                .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));

            GetTotalUsage(result);
        }
    }

    const GetTotalUsage = (result: HISTORY[]) => {
        let total: number = 0;
        result.forEach(element => {
            total = total + Number(element.aiResponse?.length);
        });

        setTotalUsage(total);
        console.log(total);
    }

    return (
        <div className='m-5'>
            <div className='bg-primary text-white p-3 rounded-lg'>
                <h2 className='font-medium'>Credit</h2>
                <div className='h-2 bg-[#5fa795] w-full rounded-full mt-3'>
                    <div className='h-2 bg-white rounded-full'
                        style={{
                            width: (totalUsage / 100000000) * 100 + "%"
                        }}
                    >
                    </div>
                </div>

                <h2 className='text-sm my-2'>{totalUsage}/100,000,000 credit used</h2>

            </div>

            <Button variant={'outline'} className='w-full my-3 bg-slate-200 text-primary'>Upgrade</Button>
        </div>

    )
}

export default UsageTrack;
