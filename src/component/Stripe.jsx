import React from 'react'

function Stripe({val}) {
  return (
    <div className=' text-white flex justify-between items-center w-[16.66%] py-5 px-10 border-t-[1px] border-r-[1px] border-b-[1px]  bg-zinc-900 border-zinc-700'>
        <img  src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe