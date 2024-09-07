import React from 'react'
import {motion} from 'framer-motion'

function Markie({imgUrl,direction}) {
  return (
  <div className='flex w-full py-5 gap-20 overflow-hidden'>
    <motion.div className='flex flex-shrink-0 gap-40 py-10 pr-40' initial={{x:direction==='left'? "0":"-100%"}} animate={{x:direction==='left'? "-100%":"0"}} transition={{ease:"linear", duration:50, repeat:Infinity}}>
      
     {imgUrl.map(url=><img src={url} className=''/>)}

    </motion.div>
    <motion.div className='flex flex-shrink-0 gap-40 py-10 pr-40' initial={{x:direction==='left'? "0":"-100%"}} animate={{x:direction==='left'? "-100%":"0"}} transition={{ease:"linear", duration:50, repeat:Infinity}}>
      
     {imgUrl.map(url=><img src={url} className=''/>)}

    </motion.div>


  </div>
  )
}

export default Markie
