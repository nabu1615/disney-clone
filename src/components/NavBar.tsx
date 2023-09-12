import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const NavBar = () => {
    return (
        <nav className='nav-bar relative z-10 mb-8'>
            <Link href="/">
                <Image
                    src="/disney_logo.png"
                    width={150}
                    height={150}
                    alt="Picture of the author"
                />
            </Link>
        </nav>
    )
}
