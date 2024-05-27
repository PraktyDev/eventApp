import VenueCard from "@/components/VenueCard";
import { MdLocationOn, MdOutlineSearch } from "react-icons/md";

const fetchVenues =async() =>{
  const response = await fetch('http://localhost:3000/admin/add-venue/api');
  if(!response.ok){
    throw new Error("Unable to fetch data")
  }
  return response.json()
}

const EventPage = async () => {
  const venue = await fetchVenues();

  return (
    <section className="flex flex-col h-full w-full p-4 gap-3">
      <div className="flex flex-col gap-3 bg-white py-2 sticky top-0">
        <div className="flex gap-1 items-center">
          <MdLocationOn size={20} className="text-red-500" />
          <p className="text-md">Location No 6, Trench Avenue, Pluto</p>
        </div>

        <div className="relative w-full flex items-center ">
          <input
            className="bg-slate-100 pl-10 w-full py-2 px-4 rounded-xl placeholder:text-sm focus:outline-blue-200"
            type="text"
            placeholder="Search"
          />
          <div className="absolute left-3 text-blue-400">
            <MdOutlineSearch size={20} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
      {venue.map(item =>(
        <VenueCard key={item._id} href={`/venues/${item._id}`} name={item.name} address={item.location} src={item.image} amount={item.price} />
      ))}
        </div>
    </section>
  )
}

export default EventPage