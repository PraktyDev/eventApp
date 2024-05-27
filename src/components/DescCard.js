'use client'
import React, { useState } from 'react'

const DescCard = (props) => {
    const [activeTab, setActiveTab] = useState('regular')

    const toggleTab = (tab) =>{
        setActiveTab(tab)
    }
  return (
    <div>
         <div className='flex mb-4 border-b items-center justify-evenly'>
            <button className={`mr-4 mb-1 ${activeTab ==='regular'? 'border-b-2 border-red-800' : ''}`} onClick={() => toggleTab('regular')}>Regular</button>
            <button className={`mr-4 mb-1 ${activeTab ==='VIP'? 'border-b-2 border-red-800' : ''}`} onClick={() => toggleTab('VIP')}>VIP</button>
            <button className={`mr-4 mb-1 ${activeTab ==='Table for 5'? 'border-b-2 border-red-800' : ''}`} onClick={() => toggleTab('Table for 5')}>Table for 5</button>
         </div>

         <div>
            <h3 className='font-semibold text-md mb-2'>Description</h3>
            {activeTab ==="regular" && (
                <div className='mb-4 text-sm'>
                    <p>{props.regular}</p>
                </div>
            )}
            {activeTab ==="VIP" && (
                <div className='mb-4 text-sm'>
                    <p>{props.vip}</p>
                </div>
            )}
            {activeTab ==="Table for 5" && (
                <div className='mb-4 text-sm'>
                    <p>{props.tablefor5}</p>
                </div>
            )}
         </div>
    </div>
  )
}

export default DescCard