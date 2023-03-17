import React from 'react'

const Item = ({children}) => {
  return (
    <div className='flex justify-center content-center w-full'>
        {children}
    </div>
  )
}

export default Item