'use client'
import React, { useState } from 'react'

const VenueDescCard = (props) => {
    const [activeTab, setActiveTab] = useState('about')

    const toggleTab = (tab) =>{
        setActiveTab(tab)
    }
  return (
    <div>
         <div className='flex mb-4 border-b items-center justify-evenly'>
            <button className={`text-sm mr-4 mb-1 ${activeTab ==='about'? 'border-b-2 border-red-800 font-semibold' : ''}`} onClick={() => toggleTab('about')}>About</button>
            <button className={`text-sm mr-4 mb-1 ${activeTab ==='schedule'? 'border-b-2 border-red-800 font-semibold' : ''}`} onClick={() => toggleTab('schedule')}>Schedule</button>
         </div>

         <div>
            {activeTab ==="about" && (
                <div className='mb-4 text-sm'>
                    <h3 className='font-semibold'>Description</h3>
                    <p>{props.about}</p>
                </div>
            )}
            {activeTab ==="schedule" && (
                <div className='mb-4 text-sm'>
                    <p>{props.schedule}</p>
                    <p>{props.date}</p>
                </div>
            )}
         </div>
    </div>
  )
}

export default VenueDescCard