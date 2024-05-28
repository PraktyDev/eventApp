"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdLocationOn } from "react-icons/md"

export default function CardDisplay() {
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
    <>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={10}
      >
        <div className="flex gap-4 my-4">
            {venue.map(item =>(
                <SwiperSlide key={item._id}>          
                <div className="flex flex-col -gap-1">
                <Link href={`venues/${item._id}`}>
                    <Image width={16} height={9} alt="card" src={item.image} className="object-cover rounded-lg bg-slate-600 w-40 h-32" />
                    <h2 className='font-semibold text-sm tablet:text-md text-nowrap'>{item.name}</h2>
                </Link>
                <div className="flex items-center">
                    <MdLocationOn size={13} className="text-red-500" />
                    <p className='text-xs tablet:text-sm text-nowrap'>{item.location}</p>
                </div>
                </div>
                </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </>
  );
}
