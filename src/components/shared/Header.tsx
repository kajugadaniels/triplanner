import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const menuOptions = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/contact' },
]

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <Image src={"/logo.svg"} alt="Logo" width={30} height={30} />
                <h2 className="font-bold text2-xl">triPlanner</h2>
            </div>
            <div className='flex gap-8 items-center'>
                {menuOptions.map((option) => (
                    <Link
                        key={option.name}
                        href={option.href}
                        className="text-sm font-medium text-gray-700 hover:text-gray-900"
                    >
                        <h2 className="text-lg hover:scale-10 transition">
                            {option.name}
                        </h2>
                    </Link>
                ))}
            </div>
            <Button>Get Started</Button>
        </div>
    )
}

export default Header
