import { motion } from 'framer-motion'
import React from 'react'
import {IoIosArrowRoundForward} from "react-icons/io"
import Button from './Button'
function Card({width,start,para,hover="false",title, details}) {

  return (
    <motion.div whileHover={{backgroundColor: hover==="true" &&"#7443ff",padding:"25px"}} className={` bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem]  flex flex-col  justify-between`}>
       <div className='w-full'>
       <div className='w-full flex justify-between items-center'>
            <h3>{title}</h3>
            <IoIosArrowRoundForward/>
         </div>
         <h1 className='text-3xl font-medium mt-8'>{details}</h1>
       </div>
       <div className='w-full ' >
        {
            start && ( <><h1 className='text-6xl font-semibold tracking-tight leading-none mb-10'>Start a new Project</h1>
               <Button/>
                </>)
                
        }

        {para&& <p className='text-sm text-zinc-500 font-medium'>Explore what divides our team.</p>}
           
          
       </div>
    </motion.div>
  )
}

export default Card