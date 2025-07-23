import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'

const NavBar = () => {
  return (
    <div className='navbar'> 
        <Link href='/'>
            <div className='flex items-center gap-2.5 cursor-pointer'>
                <Image src='/images/logo.svg' alt='logo' width={45} height={45} />
            </div>
        </Link>
        <div className='flex items-center gap-8'>
          <NavItems />
          <p>Sign in</p>
        </div>
    </div>
  )
}

export default NavBar