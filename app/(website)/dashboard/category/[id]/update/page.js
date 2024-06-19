import { addProducts } from '@/lib/actions/add-products'
import { deleteProduct } from '@/lib/actions/date-products'
import { updateCategory } from '@/lib/actions/update-category'
import prisma from '@/lib/prisma'
import { Button, Input } from '@nextui-org/react'
import React from 'react'

const UpdateCategory = async ({params}) => {
  const id = params.id
  const data = await prisma.category.findUnique({
    where: {
      id: id
    },
    include: {
      products: true
    }
  })
  return (
    <section className='p-24 space-y-6 min-h-screen flex flex-col'>
      <div>
        <form
        action={updateCategory}
        className='flex items-center'
        >
          <input hidden defaultValue={data.id} name='id' />
          <Input defaultValue={data.name} name='name' id='name'/>
          <Button type='submit' >Update</Button>
         </form>
      </div>
      <h2 className='text-center mt-4 mb-4'>Products Below</h2>
      <div>
        <form
        className='flex'
        action={addProducts}>
            <input hidden name='categoryId' defaultValue={data.id} />
            <Input placeholder='Name' name='name' id='name' />
            <Button type='submit'>Add Product</Button>
        </form>
      </div>
      {data.products.length > 0 ? (
        <>
        <table>
          <thead>
          <tr>
            <th className='px-5 py-3 border-b-1 text-gray-800 text-sm uppercase tracking-wider'>
              Name
            </th>
            <th className='px-5 py-3 border-b-1 text-gray-800 text-sm uppercase tracking-wider'>
              Action
            </th>
          </tr>
          </thead>
          <tbody>
          {data.products.map((product) => (
            <tr key={product.id} className='hover:bg-gray-100 transition duration-300'>
              <td className='px-5 py-5 border-b text-center border-gray-200 text-sm bg-white'>
                {product.name}
              </td>
              <td className='px-5 py-5 border-b text-center border-gray-200 text-sm bg-white'>
              <form action={deleteProduct}>
                <input hidden id='id' name='id' defaultValue={product.id}/>
                <Button
                type='submit'
                variant='light'
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
      ): (
        <>
        <div className='text-center mt-4'>Add your first Product!</div>
        </>

      )}
    </section>
  )
}

export default UpdateCategory