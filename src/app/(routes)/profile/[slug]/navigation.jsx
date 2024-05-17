'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation'

const Navigation = () => {

    const Links = [
        {
            id: 1,
            label: "Collected",
            href: "/profile/001/collected",
        },

        {
            id: 2,
            label: "Created",
            href: "/profile/001/created",
        },
        {
            id: 3,
            label: "Offers",
            href: "/profile/001/offers",
        },

        {
            id: 4,
            label: "Offers Made",
            href: "/profile/001/offerMade",
        },

        // {
        //     id: 5,
        //     label: "Deals",
        //     href: "/profile/001/deals",
        // },
        // {
        //     id: 6,
        //     label: "Favorites",
        //     href: "/profile/001/favorites",
        // },
        // {
        //     id: 7,
        //     label: "Activities",
        //     href: "/profile/001/activities",

        // },
        {
            id: 7,
            label: "Vote",
            href: "/profile/001/vote",

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
                        <span className="text-sm font-medium">{route.label}</span>
                    </Link>
                ))
            }
        </div>
    )
}

export default Navigation