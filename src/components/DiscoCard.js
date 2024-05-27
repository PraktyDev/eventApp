'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdLocationOn } from "react-icons/md"


const DiscoCard = () => {
    const [venue, setVenue] = useState([])

    const fetchVenues = () =>{
        fetch('http://localhost:3000/admin/add-venue/api')
        .then((response)=>{
            if(!response.ok){
                throw new Error("Unable to fetch data")
            }
            return response.json();
        })
        .then((data)=>{
            setVenue(data);
        });
    }
    
    useEffect(() => {
        fetchVenues();
    }, [])
  return (
    <div className="flex gap-4 my-4">
    {venue.map(item =>(            
        <div key={item._id} className="flex flex-col -gap-1">
        <Link href={`venues/${item._id}`}>
            <Image width={16} height={9} alt="card" src={item.image} className="object-cover rounded-lg bg-slate-600 w-40 h-32" />
            <h2 className='font-semibold text-sm tablet:text-md text-nowrap'>{item.name}</h2>
        </Link>
        <div className="flex items-center">
            <MdLocationOn size={13} className="text-red-500" />
            <p className='text-xs tablet:text-sm text-nowrap'>{item.location}</p>
        </div>
        </div>
    ))}
    </div>
  )
}

export default DiscoCard