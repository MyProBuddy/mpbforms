'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className='flex justify-between px-7 py-1 md:py-0 md:px-12 md:h-16 shadow-md bg-white'>
            <div className='h-16 flex items-center'>
                <Image
                    alt='logo'
                    src={'/imgs/logo.png'}
                    width={98 * 0.75}
                    height={67 * 0.75}
                />
            </div>
            <div className='hidden md:flex items-center justify-center gap-14 text-[#ED4935] font-semibold'>
                <Link href={'/#'}>Home</Link>
                <Link href={'https://www.linkedin.com/groups/14304535/'}>Join The Community</Link>
                <Link href={'https://www.linkedin.com/in/amrish-krishnan/'}>View Our Expert Profile</Link>
                <Link href={'/termsandconditions'}>Terms & Conditions</Link>
                <Link href={'/privacypolicy'}>Privacy Policy</Link>
            </div>
            <div className='hidden md:block'></div>
            <div className='flex items-center z-20 px-2 md:hidden '>
                {menuOpen ? (
                    <X
                        size={24}
                        className='cursor-pointer'
                        onClick={handleMenuToggle}
                    />
                ) : (
                    <Menu
                        size={24}
                        className='cursor-pointer'
                        onClick={handleMenuToggle}
                    />
                )}
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-white z-10 transition-all duration-300 ease-in-out ${
                    menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                style={{ height: menuOpen ? '100%' : '0' }}
            >
                <div className='flex flex-col gap-8 items-center pt-16 text-[#ED4935] font-semibold'>
                <Link href={'/#'}>Home</Link>
                <Link href={'https://www.linkedin.com/groups/14304535/'}>Join The Community</Link>
                <Link href={'https://www.linkedin.com/in/amrish-krishnan/'}>View Our Expert Profile</Link>
                <Link href={'/termsandconditions'}>Terms & Conditions</Link>
                <Link href={'/privacypolicy'}>Privacy Policy</Link>
                </div>
            </div>
        </nav>
    )
}
