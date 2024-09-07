import React from 'react'
import Button from './Button'

function Product({val,mover,count}) {
  return (
    <div className=' h-[23rem] w-full py-20 text-white bg-zinc-900  '>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
          <h1 className='text-6xl capitalize font-medium '>{val.title}</h1>
           <div className='w-1/3 '>
           <p className='mb-10'>{val.desc}</p>
           <div className='flex items-center gap-7'>
           {val.live&& <Button/>}
           {val.case&& <Button title='Case'/>}
           </div>
           
           </div>
        </div>

    </div>
  )
}

export default Product