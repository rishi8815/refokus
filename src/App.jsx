import { useEffect, useState } from 'react'
import React from 'react'

import Navbar from './component/Navbar'
import Work from './component/Work'
import Stripes from './component/Stripes'
import Produtcs from './component/Produtcs'
import Markies from './component/Markies'
import Cards from './component/Cards'
import Footer from './component/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  

return(
  <>
    <div className='bg-zinc-900 w-full h-screen'>
       <Navbar/>
       <Work/>
       <Stripes/>
       <Produtcs/>
       <Markies/>
       <Cards/>
       <Footer/>
    </div>
  </>

)
  


}

export default App
