import DescCard from "@/components/DescCard";
import Image from "next/image";
import Link from "next/link";
import { CiCalendarDate, CiClock1 } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

export async function generateStaticParams() {
  const events = await fetch("http://localhost:3000/admin/add-event/api").then(
    (res) => res.json()
  );
  return events.map((event) => {
    eventId: event._id;
  });
}

const EventIdPage = async ({ params }) => {
  const { eventId } = params;

  const response = await fetch(
    `http://localhost:3000/admin/add-event/api/${params.eventId}`
  );
  const data = await response.json();

  return (
    <section className="flex flex-col h-svh w-full p-4 gap-1 justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center mb-1">
          <Link href="/events">
            <FaArrowLeft />
          </Link>
          <p className="font-semibold">{data.name}</p>
        </div>

        <div className="flex flex-col tablet:flex-row tablet:justify-between gap-5">
          <Image
            width={500}
            height={500}
            src={data.image}
            className="w-full tablet:w-1/2 h-40 tablet:h-[400px] laptop:h-full rounded-md object-cover"
          />
          <div className="flex flex-col tablet:w-1/2 tablet:gap-5">
            <div className="flex flex-col items-start gap-5 mb-4">
              <div className="flex gap-1 items-center">
                <CiCalendarDate size={20} className="text-blue-800" />
                <p className="text-sm">{data.date}</p>
              </div>
              <div className="flex gap-2 items-center">
                <CiClock1 size={20} className="text-blue-800" />
                <p className="text-sm">{data.time}</p>
              </div>
              <div className="flex gap-2 items-center">
                <MdLocationOn size={20} className="text-red-500" />
                <p className="text-sm">{data.location}</p>
              </div>
            </div>
            <div className="flex flex-col ">
              <DescCard
                regular={data.description1}
                vip={data.description2}
                tablefor5={data.description3}
              />
            </div>
            <button className="hidden tablet:block bg-blue-700 hover:bg-blue-600 rounded-md w-full h-10 text-white text-sm">
              {data.amount} | Buy Ticket
            </button>
          </div>
        </div>
      </div>
      <button className="block tablet:hidden bg-blue-700 hover:bg-blue-600 rounded-md w-full h-10 text-white text-sm">
        {data.amount} | Buy Ticket
      </button>
    </section>
  );
};

export default EventIdPage;
