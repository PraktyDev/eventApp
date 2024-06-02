import EventCard from "@/components/EventCard";
import { MdLocationOn } from "react-icons/md";
import HomeSearch from "@/components/HomeSearch";
import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";

const EventPage = async ({searchParams}) => {
  const query = searchParams?.query || '';

  return (
    <>
    <TopNav />
    <section className="flex flex-col h-full w-full p-4 gap-3">
      <div className="flex flex-col gap-3 bg-white py-2 sticky top-0">
        <div className="flex gap-1 items-center">
          <MdLocationOn size={20} className="text-red-500" />
          <p className="text-md">Location No 6, Trench Avenue, Pluto</p>
        </div>

        <HomeSearch />
      </div>
      
      <EventCard query={query} />
    </section>
    <BottomNav />
    </>
  )
}

export default EventPage