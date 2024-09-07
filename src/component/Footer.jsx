import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-zinc-900 text-white'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'>
               <h1 className='text-[11.5rem] font-semibold  leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4 '>
               <div className='basis-1/3'>
                     <h4 className='mb-10text-zinc-500'>socials</h4>
                     {["instagram","facebook","linkedind"].map((item)=><a className='block mt-3 text-zinc-500 capitalize'>{item}</a>)}
               </div>
               <div className='basis-1/3'>
                     <h4 className='mb-10text-zinc-700'>socials</h4>
                     {["instagram","facebook","linkedind"].map((item)=><a className='block mt-3 text-zinc-600 capitalize'>{item}</a>)}
               </div>
               <div className=' text-zinc-700 basis-1/2 text-right flex flex-col'>Refokus is pioneering digital agency driven by design and empowered by</div>
            </div>
        </div>
    </div>
  )
}

export default Footer