'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation'

const Navigation = () => {

    const Links = [
        {
            id: 2,
            label: "Recent",
            href: "/auction/recent",
        },

        {
            id: 3,
            label: "Active",
            href: "/auction/active",
        },
        {
            id: 4,
            label: "Closed",
            href: "/auction/closed",
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
        <div className="flex justify-start items-center gap-5 pt-3 bg-transparent border-b border-[#2F125F]">
            {
                routes.map((route) => (
                    <Link key={route.href}
                        href={route.href}
                        className={cn(
                            "font-semibold transition-colors hover:text-#[D500E7]/80 flex justify-center items-center px-4",
                            pathname.includes(route.href) ? "text-[#D500E7] border-b-4 pb-1 border-[#D500E7]" : "text-neutral-100 mb-2"
                        )}
                    >
                        <span className="ms-2 text-sm font-medium">{route.label}</span>
                    </Link>
                ))
            }
        </div>
    )
}

export default Navigation