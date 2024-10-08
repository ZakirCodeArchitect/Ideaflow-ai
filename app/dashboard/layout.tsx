"use client"

import React, { useState } from 'react'
// import SideNav from './_components/SideNav';
import SideNav from './_components/sideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [totalUsage,setTotalUsage]=useState<Number>(0);

    const [updateCreditUsage,setUpdateCreditUsage]=useState()
return (

    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
    
    <UpdateCreditUsageContext.Provider value={{updateCreditUsage,setUpdateCreditUsage}}>
    <div className='bg-slate-100 h-max'>
        <div className='md:w-64 hidden md:block fixed'>
            <SideNav/>
        </div>
        <div className='md:ml-64'> 
            <Header toggleSidebar={function (): void {
                        throw new Error('Function not implemented.');
                    } }/>
            {children}
        </div>
    </div>
    </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
)
}

export default layout
