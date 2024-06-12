import { MdLocationOn } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import CardDisplay from "@/components/CardDisplay";
import UpcomEvent from "@/components/UpcomEvent";
import BottomNav from "@/components/BottomNav";
import { Suspense } from "react";
import Loading from "./Loading"
import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";

const fetchBannerEvent =async() =>{
  const id = "663dac922a61e1339adf770a";
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/add-event/api/${id}`);
  return response.json();
}

const HomePage = async () => {

  const banner = await fetchBannerEvent();

  return (
    <>
    <TopNav />
    <section className="flex flex-col py-4 px-2 gap-3">
      <div className="flex flex-col gap-3 bg-white py-2 sticky top-0 z-10">
        <div className="flex gap-1 tablet:gap-5 items-center justify-start tablet:justify-center">
          <MdLocationOn size={20} className="text-red-500" />
          <p className="text-sm tablet:text-lg">No 6, Trench Avenue, Pluto</p>
        </div>
      </div>

      <Hero />

      <div className="flex flex-col tablet:max-w-lg tablet:mx-auto -mt-2">
        <div className="flex flex-col tablet:items-center">
        <h1 className="text-lg tablet:text-xl font-semibold flex justify-normal tablet:justify-center ">Happening Now!!!</h1>
        <div className="hidden tablet:block w-14 h-1 bg-blue-500 rounded-2xl"></div>
        </div>
        <Link href={`events/${banner._id}`}>
          <Image
            width={4}
            height={3}
            alt='happening event'
            src={banner.image}
            className="mx-auto w-[500px] tablet:w-[1000px] mt-3 h-[160px] tablet:h-[200px] rounded-md object-cover "
          />
        </Link>
        <div className="flex flex-row justify-between tablet:justify-center mt-1">
          <div className="flex flex-col items-start">
            <Link href={`events/${banner._id}`}><p className="font-semibold text-md tablet:text-xl">{banner.name}</p></Link>
            <div className="flex tablet:hidden gap-1 items-center">
              <MdLocationOn size={15} className="text-red-500" />
              <p className="text-sm">{banner.location}</p>
            </div>
          </div>

          <div className="text-xs flex tablet:hidden gap-1 flex-col items-end">
            <p>Entry: ${banner.amount}</p>
            <p>Time: {banner.time}</p>
          </div>
        </div>
      </div>

      <div id="upcoming-event">
        <div className="flex flex-row justify-between tablet:justify-center items-center">
          <div className="flex flex-col items-center">
          <h1 className="text-lg tablet:text-xl font-semibold">Upcoming Event</h1>
          <div className="hidden tablet:block w-14 h-1 bg-blue-500 rounded-2xl"></div>
          </div>
          <div className="">
            <Link href='/events' className='flex gap-1 items-center cursor-pointer tablet:hidden'>
              <p className="text-sm opacity-80 ">See all</p>
              <CiSquarePlus size={20} />
            </Link>
          </div>
        </div>

        <div className="mt-2">
          <Suspense fallback={<Loading /> }>
            <UpcomEvent />
          </Suspense>
        </div>
      </div>

      <div id="discover-venues">
        <div className="flex flex-row justify-between tablet:justify-center items-center">
          <div className="flex flex-col items-center">
          <h1 className="text-lg tablet:text-xl font-semibold ">Discover Venues</h1>
          <div className="hidden tablet:block w-14 h-1 bg-blue-500 rounded-2xl"></div>
          </div>
          <div className="flex gap-1 items-center cursor-pointer">
          <div className="">
            <Link href='/venues' className='flex gap-1 items-center cursor-pointer tablet:hidden'>
              <p className="text-sm opacity-80 ">See all</p>
              <CiSquarePlus size={20} />
            </Link>
          </div>
          </div>
        </div>

        <div className="mt-2">
          <Suspense fallback={<Loading />}>
            <CardDisplay />
          </Suspense>   
        </div>
      </div>
    </section>
    <BottomNav />
    </>
  );
};

export default HomePage;