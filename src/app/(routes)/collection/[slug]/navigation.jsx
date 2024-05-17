'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation'

const Navigation = () => {

    const Links = [
        {
            id: 2,
            label: "World",
            href: "/collection/001/world",
        },

        {
            id: 3,
            label: "Story",
            href: "/collection/001/story",
        },
        {
            id: 4,
            label: "Items",
            href: "/collection/001/items",
        },
        {
            id: 5,
            label: "Offers",
            href: "/collection/001/offers",
        },
        // {
        //     id: 6,
        //     label: "Analytics",
        //     href: "/collection/001/analytics",
        // },
        // {
        //     id: 7,
        //     label: "Activities",
        //     href: "/collection/001/activities",

        // },
        {
            id: 8,
            label: "Vote",
            href: "/collection/001/vote",
        },
    ];

    const pathname = usePathname()
    console.log(pathname)
    const routes = Links.map((route) => ({
        href: route.href,
        label: route.label,
        active: pathname === `${route.href}`,
    }))

    return (
        <div className="flex justify-start items-center gap-5 pt-3 bg-[#0C021D] border-b border-[#2F125F]">
            {
                routes.map((route) => (
                    <Link key={route.href}
                        href={route.href}
                        className={cn(
                            "font-semibold transition-colors hover:text-#[D500E7]/80 flex justify-center items-center px-4",
                            pathname.includes(route.href) ? "text-[#D500E7] border-b-4 pb-1 border-[#D500E7]" : "text-neutral-100 mb-2"
                        )}
                    >
                        <span className="text-sm font-medium ">{route.label}</span>
                    </Link>
                ))
            }
        </div>
    )
}

export default Navigation