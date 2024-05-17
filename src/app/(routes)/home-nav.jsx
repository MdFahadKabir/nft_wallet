'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from "next/image";
import React from 'react'
import all from "../../../public/images/icon/visualization.png";
import rootstock from "../../../public/images/icon/rootstock.png";
import ordinals from "../../../public/images/icon/ordinals.png";
import stacks from "../../../public/images/icon/stacks.png";
import thor from "../../../public/images/icon/thor.png";

const HomeNav = ({
}) => {
    
    const Links = [
        {
            id: 1,
            href: '/',
            label: 'All Network',
            image: all
        },
        {
            id: 2,
            href: '/home/root-stock',
            label: 'RootStock',
            image: rootstock
        },
        {
            id: 3,
            href: '/home/ordinals',
            label: 'Ordinals',
            image: ordinals
        },
        {
            id: 4,
            href: '/home/stack',
            label: 'Stack',
            image: stacks
        },
        {
            id: 4,
            href: '/home/thor-chain',
            label: 'Thor Chain',
            image: thor
        }
    ]

    const pathname = usePathname()
    console.log(pathname)
    const routes = Links.map((route) => ({
        href: route.href,
        label: route.label,
        active: pathname === `${route.href}`,
        image: route.image
    }))
    return (
        <div className="flex justify-start items-center gap-5 pt-3">
            {
                routes.map((route) => (
                    <Link key={route.href}
                        href={route.href}
                        className={cn(
                            "font-semibold transition-colors hover:text-#[D500E7]/80 flex justify-center items-center px-3 pb-1",
                            route.active ? "text-[#D500E7] border-b-4 pb-2 border-[#D500E7]" : "text-neutral-100 mb-2"
                        )}
                    >
                        <Image
                            src={route.image}
                            height={10}
                            width={10}
                            className="w-auto h-auto"
                        />
                        <span className="ms-2 text-sm font-medium">{route.label}</span>
                    </Link>
                ))
            }
        </div>
    )
}



/* 
 <div className="bg-[#0C021D] flex justify-start items-center gap-5">
                    <div
                        className="data-[state=active]:border-[#D500E7] data-[state=active]:border-b-4 data-[state=active]:text-[#D500E7] rounded-none me-3"
                        value="ThorChain"
                    >
                        <Image
                            src={thor}
                            height={10}
                            width={10}
                            className="w-auto h-auto"
                        />
                        <span className="ms-2 text-sm font-medium">Thor Chain</span>
                    </div>
                </div>

*/

export default HomeNav