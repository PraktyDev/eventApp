import { MdLocationOn } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import Image from "next/image";
import Card from "@/components/Card";
import Link from "next/link";
import HomeSearch from "@/components/HomeSearch";
import CardDisplay from "@/components/CardDisplay";

const fetchEvents =async() =>{
  const response = await fetch('http://localhost:3000/admin/add-event/api');
  if(!response.ok){
    throw new Error("Unable to fetch data")
  }
  return response.json();
}

const fetchBannerEvent =async() =>{
  const id = "663dac922a61e1339adf770a";
  const response = await fetch(`http://localhost:3000/admin/add-event/api/${id}`);
  return response.json();
}

const fetchVenues =async() =>{
  const response = await fetch('http://localhost:3000/admin/add-venue/api');
  if(!response.ok){
    throw new Error("Unable to fetch data")
  }
  return response.json();
}

const HomePage = async ({searchParams}) => {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const eventPromise = await fetchEvents();
  const venuePromise = await fetchVenues();
  const bannerPromise = await fetchBannerEvent();

  const [ event, venue, banner ] = await Promise.all([ eventPromise, venuePromise, bannerPromise ])

  return (
    <section className="flex flex-col p-4 gap-3">
      <div className="flex flex-col gap-3 bg-white py-2 sticky top-0">
        <div className="flex gap-1 tablet:gap-5 items-center justify-start tablet:justify-center">
          <MdLocationOn size={20} className="text-red-500" />
          <p className="text-sm tablet:text-lg">Location No 6, Trench Avenue, Pluto</p>
        </div>

        <HomeSearch />
      </div>

      <div className="flex flex-col tablet:max-w-lg tablet:mx-auto">
        <h1 className="text-xl tablet:text-2xl font-semibold flex justify-normal tablet:justify-center ">Happening Now!!!</h1>
        <Link href={`events/${banner._id}`}>
          <Image
            width={4}
            height={3}
            src={banner.image}
            className="mx-auto w-[500px] mt-3 h-48 rounded-lg object-cover "
          />
        </Link>
        <div className="flex flex-row justify-between mt-1">
          <div className="flex flex-col items-start">
            <Link href={`events/${banner._id}`}><p className="font-semibold text-md">{banner.name}</p></Link>
            <div className="flex gap-1 items-center">
              <MdLocationOn size={15} className="text-red-500" />
              <p className="text-sm">{banner.location}</p>
            </div>
          </div>

          <div className="text-sm flex gap-1 flex-col items-end">
            <p>Entry: ${banner.amount}</p>
            <p>Time: {banner.time}</p>
          </div>
        </div>
      </div>

      <div id="upcoming-event">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl tablet:text-2xl font-semibold">Upcoming Event</h1>
          <div className="">
            <Link href='/events' className='flex gap-1 items-center cursor-pointer tablet:hidden'>
              <p className="text-sm opacity-80 ">See all</p>
              <CiSquarePlus size={20} />
            </Link>
          </div>
        </div>

        <div className="flex gap-4 my-4 overflow-hidden">
          {event.map(item =>(
            <Card key={item._id} href={`events/${item._id}`} name={item.name} location={item.location} src={item.image} />            
          ))}
        </div>
      </div>

      <div id="discover-venues">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl tablet:text-2xl font-semibold">Discover Venues</h1>
          <div className="flex gap-1 items-center cursor-pointer">
          <div className="">
            <Link href='/venues' className='flex gap-1 items-center cursor-pointer tablet:hidden'>
              <p className="text-sm opacity-80 ">See all</p>
              <CiSquarePlus size={20} />
            </Link>
          </div>
          </div>
        </div>

        <div className="flex gap-4 my-4 overflow-x-scroll">
          {venue.map(item =>(
            <Card key={item._id} href={`venues/${item._id}`} name={item.name} location={item.location} src={item.image} />            
          ))}
        </div>
      </div>

      {/* <CardDisplay /> */}
    </section>
  );
};

export default HomePage;


