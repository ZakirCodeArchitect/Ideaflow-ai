    "use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { CircuitBoardIcon, History, Home, HomeIcon, LogOut, LogOutIcon, LucideSettings2, Wallet2Icon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import UsageTrack from './UsageTrack'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
// import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

function SideNav() {

    const MenuList = [
        {
            name: 'Dashboard',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: History,
            path: '/dashboard/history'
        },
        // {
        //     name: 'Billing',
        //     icon: Wallet2Icon,
        //     path: '/dashboard/Billing'
        // },
        {
            name: 'Setting',
            icon: LucideSettings2,
            path: '/dashboard/settings'
        },
        {
            name: 'Home',
            icon: LogOutIcon,
            path: '/'
        }
    ]

    const path = usePathname();
    useEffect(() => {
        console.log(path)
    }, [path])

    return (
        <div className='h-screen relative p-5 shadow-sm border bg-slate-50'>
            <div className="flex justify-center items-center">
                <Link href="/" className="flex items-center">
                    <Image src="/logo.svg" alt="logo" width={37} height={37.5} />
                    <h1 className="ml-2">IdeaFlowAI</h1>
                </Link>
            </div>

            <hr className='my-6 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <Link href={menu.path} key={index}>
                        <div
                            className={`flex gap-2 mb-2 p-3
                            hover:bg-primary hover:text-white rounded-sm
                            cursor-pointer items-center
                            ${path == menu.path && 'bg-primary text-white'}
                        `}>
                            <menu.icon className='h-5 w-5' />
                            <h2 className='text-md'>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                <UsageTrack />
                
            </div>

        </div>
    )
}

export default SideNav
