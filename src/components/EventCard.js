import Image from "next/image";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";

export const dynamic = "force-dynamic"

const fetchEvents =async() =>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/add-event/api`, { cache: "no-store"});
  if(!response.ok){
    throw new Error("Unable to fetch data")
  }
  return response.json()
}

const EventCard = async ({ query }) => {
  const events = await fetchEvents();

  const filteredEvent = Array.isArray(events) ? events.filter((event) =>{
    return event.name.toLowerCase().includes(query.toLowerCase());
  }) : [];

  return (
    <div className="flex flex-col tablet:grid grid-cols-2 laptop:grid-cols-3 gap-3">
    {Array.isArray(events) && filteredEvent.map(item =>(
    <div key={item._id} className="flex flex-col gap-2">
      <Link href={`/events/${item._id}`}>
      <Image
        width={16}
        height={9}
        src={item.image}
        alt="events"
        className="w-full h-48 rounded-md object-cover"
      />
      </Link>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-start">
          <Link href={`/events/${item._id}`}><p className="font-semibold text-md">{item.name}</p></Link>
          <div className="flex gap-1 items-center">
            <MdLocationOn size={15} className="text-red-500" />
            <p className="text-xs">{item.location}</p>
          </div>
        </div>

        <div className="text-xs flex flex-col items-end">
          <p><span className="font-semibold">Entry:</span> ${item.amount}</p>
          <p><span className="font-semibold">Date:</span> {item.date}</p>
          <p><span className="font-semibold">Time:</span> {item.time}</p>
        </div>
      </div>
    </div>
    ))}
    </div>
  );
};

export default EventCard;
