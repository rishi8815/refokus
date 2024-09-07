import React from 'react'
import {IoIosReturnRight} from "react-icons/io"

function Button({title="Get Started"}) {
  return (
    // <button>
    // <div className='min-w-40 px-4 py-2 bg-zinc-100 text-black  flex items-center justify-between rounded-full '>
    //     <span  className='text-sm font-medium '>{title}
    //     </span>
    //     <IoIosReturnRight/>

    // </div>
    // </button>
    <button class="  group relative inline-block overflow-hidden rounded-full border-4 border-double border-zinc-500 px-4 py-2 font-medium text-white">
    <span class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-zinc-300 opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
    <span class="relative group-hover:text-white">{title}</span>
   
</button>
  )
}

export default Button