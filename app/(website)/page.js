import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import {auth} from "@clerk/nextjs/server"
import { redirect } from 'next/navigation'

const HomePage = async () => {
  const {userId} = auth()
  if(userId){
    redirect('/dashboard')
  }
  return (
    <section className='py-6'>
      <div className='text-center w-full mx-auto py-12 px-4 ms:px-4 lg:py-16 lg:px-8'>
        <h1 className='text-3xl font-extrabold text-black sm:text-2xl'>
          <span className='block'>
            Personal Item Organizer
          </span>
          <span className='text-purple-300'>
            Your personal item organizer, voted as the best tracker available. Sigin Below
          </span>
        </h1>
        <div className='lg:mt-0 lg:flex-shrink-0'>
          <div className='mt-12 inline-flex rounded-md'>
            <Link href={'/sign-in'}>
              <Button
              className='bg-purple-800'
              >
                SignIn Here
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage