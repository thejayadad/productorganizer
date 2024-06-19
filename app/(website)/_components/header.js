import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <section className='px-24 py-6 space-y-6'>
        <nav className='mx-auto max-w-screen-lg '>
            <div className='flex items-center justify-between'>
               <Link href={'/dashboard'}>
               Personal Organizer
               </Link>
                <UserButton />
            </div>
        </nav>
    </section>
  )
}

export default Header