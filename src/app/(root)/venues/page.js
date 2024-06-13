import VenueCard from "@/components/VenueCard";
import HomeSearch from "@/components/HomeSearch";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Link from "next/link";

const VenuePage = async ({searchParams}) => {

  const query = searchParams?.query || '';

  return (
    <section className="flex flex-col min-h-screen w-full p-4 gap-3">
      <div className=" flex flex-col gap-3 bg-white py-2 sticky top-0">
        <div className="relative flex justify-center items-center font-semibold">
          <div className="absolute flex w-1/4 justify-start left-0">
            <Link href="/"><IoArrowBackCircleSharp size={20} className="hover:text-slate-800"/></Link>
          </div>
          <p className="flex w-full justify-center items-center text-md">Event Venues</p>       
        </div>

        <HomeSearch />
      </div>

      <VenueCard />
    </section>
  )
}

export default VenuePage