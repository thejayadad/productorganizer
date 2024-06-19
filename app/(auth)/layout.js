import React from 'react'

const layout = ({children}) => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        {children}
    </div>
  )
}

export default layout