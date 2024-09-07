import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full bg-zinc-900'>
        <div className=' max-w-screen-xl mx-auto bg-zinc-900 text-white py-20 flex gap-1'>
            <Card width={"basis-1/3"} start={false} para={true} title="Up next news" details="Insights and behind the senses"/>
            <Card width={"basis-2/3"} start={true} para={false} hover="true" title="get in touch" details="Let's get to it, together"/>
        </div>
    </div>
  )
}

export default Cards