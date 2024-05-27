"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function CardDisplay() {
  return (
    <>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className='flex items-center justify-center w-48 h-48 border border-blue-500 rounded-md shadow-sm'>Slide 1</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center w-48 h-48 border border-blue-500 rounded-md shadow-sm'>Slide 2</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center w-48 h-48 border border-blue-500 rounded-md shadow-sm'>Slide 3</SwiperSlide>
        <SwiperSlide className='flex items-center justify-center w-48 h-48 border border-blue-500 rounded-md shadow-sm'>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
