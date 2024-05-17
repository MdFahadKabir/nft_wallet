import React from 'react'
import Link from 'next/link'
import { Combobox } from './combobox'
import Container from './container'
import MainNav from './main-nav'
import NavbarActions from './navbar-actions'
import Image from 'next/image'
export const revalidate = 0 /* no caching */

const Navbar = async () => {

    const Links = [
        {
            id: 1,
            href: '/ranks',
            label: 'Ranks',
        },
        {
            id: 2,
            href: '/create',
            label: 'Create',
        },
        {
            id: 2,
            href: '/auction',
            label: 'Auction',
        },
        {
            id: 3,
            href: '/fame',
            label: 'Fame',
        },

    ]
    const data2 = []
    // console.log(products)
    return (
        <div className='sticky top-0 z-40 border-b bg-background '>

        {/* <div className='fixed w-full top-0 z-40 border-b bg-background '> */}
            <Container>
                <div className='relative flex h-16 items-center gap-10'>
                    <Link href='/' className='lg:flex lg:ml-0 gap-x-2 hidden'>
                        <Image
                            src='/images/logo.png'
                            height={30}
                            width={90}
                        />
                    </Link>
                    <Link href='/' className='flex lg:hidden'>
                        <p className='font-black text-xl tracking-widest'>LOGO</p>
                    </Link>
                    <MainNav data={Links} />
                    <div className='flex justify-end items-center ml-auto'>
                        <Combobox data={data2} />
                        <NavbarActions />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar