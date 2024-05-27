"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdLocationOn } from "react-icons/md"

export default function UpcomEvent() {
    const [event, setEvent] = useState([])

    const fetchEvents = () =>{
        fetch('http://localhost:3000/admin/add-event/api')
        .then((response)=>{
            if(!response.ok){
                throw new Error("Unable to fetch data")
            }
            return response.json();
        })
        .then((data)=>{
            setEvent(data);
        });
    }
    
    useEffect(() => {
        fetchEvents();
    }, [])

  return (
    <>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={10}
      >
        <div className="flex gap-4 my-4">
            {event.map(item =>(
                <SwiperSlide>          
                <div key={item._id} className="flex flex-col -gap-1">
                <Link href={`events/${item._id}`}>
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
