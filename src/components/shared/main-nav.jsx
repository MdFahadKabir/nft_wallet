'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'


const MainNav = ({
  data
}) => {
  console.log(data)
  const pathname = usePathname()
  console.log(pathname)
  const routes = data.map((route) => ({
    href: route.href,
    label: route.label,
    active: pathname === `${route.href}`
  }))

  return (
    <nav className='mx-2 lg:mx-6 flex items-center space-x-2 lg:space-x-10 overflow-x-auto'>
      {
        routes.map((route) => (
          <Link key={route.href}
            href={route.href}
            className={cn(
              " font-semibold transition-colors hover:text-white",
              // route.active ? "text-[#D500E7] " : "text-neutral-100"
              pathname.includes(route.href) ? "text-[#D500E7] " : "text-neutral-100"
            )}
          >
            {route.label}
          </Link>
        ))
      }
    </nav>
  )
}

export default MainNav