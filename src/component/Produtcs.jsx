import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Produtcs() {
    var Produtcs =[{ title:"arqitel",desc:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate", live:true,case:false},
        { title:"Cula",desc:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live:true,case:false},
        { title:"Layout Land",desc:"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow", live:true,case:false},
        { title:"TTR",desc:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live:true,case:false},
        { title:"Yahoo!",desc:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop..", live:true,case:false},
        { title:"Maniv",desc:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live:true,case:true}
    ]
      const [pos,setPos] = useState(0)

      const mover=(val)=>{
        setPos(val*23)
      }
  return (
    <>
  
    <div className=' relative '>
        {Produtcs.map((elem,index)=><Product mover={mover}  count={index}val={elem}/>)}
        <div className='w-full h-full absolute top-0  pointer-events-none'>
          <motion.div initial={{y:pos , x:"-50%"}} animate={{y:pos +`rem`}} transition={{ease:[0.76,0,0.24,1], duration:.6}} className=' top-6 w-[32rem] h-[23rem] absolute left-[45%] -translate-x-[50%] bg-zinc-300 overflow-hidden'>
                 <motion.div transition={{ease:[0.76,0,0.24,1], duration:.5}}  animate={{y:-pos+`rem`}} className='w-full h-full bg-zinc-500'></motion.div>
                 <motion.div transition={{ease:[0.76,0,0.24,1], duration:.5}}  animate={{y:-pos+`rem`}}  className='w-full h-full bg-zinc-600'></motion.div>
                 <motion.div transition={{ease:[0.76,0,0.24,1], duration:.5}}  animate={{y:-pos+`rem`}} className='w-full h-full bg-zinc-700'> </motion.div>
                 <motion.div transition={{ease:[0.76,0,0.24,1], duration:.5}}  animate={{y:-pos+`rem`}} className='w-full h-full bg-zinc-800 '> </motion.div>
                 <motion.div transition={{ease:[0.76,0,0.24,1], duration:.5}}  animate={{y:-pos+`rem`}} className='w-full h-full bg-zinc-400 '> </motion.div>
          </motion.div>
        </div>
    </div>
  
    </>
  )
}

export default Produtcs