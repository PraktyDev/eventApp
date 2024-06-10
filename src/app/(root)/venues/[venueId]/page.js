import VenueDescCard from "@/components/VenueDescCard";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";


const VenueIdPage = async ({ params }) => {
  const { venueId } = params;

  const response = await fetch(
    `http://localhost:3000/admin/add-venue/api/${params.venueId}`
  );
  const data = await response.json();

  return (
    <section className="flex flex-col h-svh w-full p-4 gap-1 justify-between">
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 items-center">
          <Link href="/venues">
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
          <div className="flex flex-col tablet:w-1/2 tablet:gap-10 gap-5">
            <div className="flex flex-col items-start gap-2">
              <div className="flex gap-2 items-center">
                <MdLocationOn size={20} className="text-red-500" />
                <p className="text-sm">{data.location}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <VenueDescCard
                about={data.description}
                schedule={data.time}
                date={data.date}
              />
            </div>
            <button className="hidden tablet:block bg-blue-700 hover:bg-blue-600 rounded-md w-full h-10 text-white text-sm">{`$${data.price}|Book`}</button>
          </div>
        </div>
      </div>
      <button className="block tablet:hidden bg-blue-700 hover:bg-blue-600 rounded-md w-full h-10 text-white text-sm">{`$${data.price}|Book`}</button>
    </section>
  );
};

export default VenueIdPage;
