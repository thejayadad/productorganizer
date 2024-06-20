import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import prisma from '@/lib/prisma'
import Link from 'next/link'
import { addCategory } from '@/lib/actions/add-category'
import { Button, Input } from '@nextui-org/react'
import { deleteCategory } from '@/lib/actions/delete-category'

const Dashboard = async () => {
  const user = await currentUser()
  const creator = user.firstName
  const categories = await prisma.category.findMany({
    where: {
      creator: creator
    }
  })
  return (
    <section className='p-24 space-y-6 min-h-screen flex flex-col'>
      <div>
        <form className='flex'
        action={addCategory}>
          <input hidden id='creator' name='creator' defaultValue={creator} />
          <Input name='name' id='name' placeholder='Name' />
          <Button type='submit'>
            Add Category
          </Button>
        </form>
      </div>
      {categories.length > 0 ? (
          <>
          <table className='min-w-full leading-normal text-center'>
          <thead>
            <tr>
              <th
              className='px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200'
              >
                Name
              </th>
              <th
               className='px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200'
              >
                Update
              </th>
            </tr>
          </thead>
          <tbody className='w-full'>
            {categories.map(category => (
              <tr key={category.id}>
                <td className='px-5 py-3 text-sm font-normal text-center  text-gray-800 border-b border-gray-200 '>  
                  <Link 
                  href={`/dashboard/category/${category.id}/update`}>
                  {category.name}
                  </Link>
                </td>
                <td className='px-5 py-3 text-sm font-normal text-center flex items-center justify-center  text-gray-800 border-b border-gray-200'>  
                    <Link 
                    className='mr-1'
                    href={`/dashboard/category/${category.id}/update`}>
                      Details
                    </Link>      
                    <form
                  
                    action={deleteCategory}>
                      <input hidden defaultValue={category.id} name='id' />
                      <Button
                      variant='light'
                      type='submit'
                      >
                        Delete
                      </Button>
                    </form>           
                </td>
              </tr>
            ))}
          </tbody>
          </table>
          </>
      ) : (
        <>
          <div className='text-center'>
            Add a category today!
          </div>
        </>
      )}
    </section>
  )
}

export default Dashboard