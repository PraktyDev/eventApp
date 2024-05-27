import Image from 'next/image'
import React from 'react'

const McCard = (props) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
        <div key={props.key} className='flex flex-col'>
            <Image src={props.src} width={1} height={1} alt='service card' className='w-48 h-48 bg-slate-200' />
            <h3>{props.name}</h3>
        </div>
    </div>
  )
}

export default McCard