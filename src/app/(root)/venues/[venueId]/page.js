import VenueDescCard from "@/components/VenueDescCard";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";


export async function generateStaticParams(){
    const venues = await fetch('http://localhost:3000/admin/add-venue/api').then((res)=>res.json())
    return venues.map((venue)=>{
        venueId: venue._id
    })
}


const EventIdPage = async ({ params }) => {   
    const { venueId } = params

    const response = await fetch(`http://localhost:3000/admin/add-venue/api/${params.venueId}`);
    const data = await response.json();

    return (
        <section className="flex flex-col h-svh w-full p-4 gap-1 justify-between">
            <div className="flex flex-col gap-5" >
            <div className="flex gap-2 items-center">
                <Link href="/venues"><FaArrowLeft /></Link>
                <p className="font-semibold">{data.name}</p>
            </div>
            
            <div className="flex flex-col gap-3">
                <Image
                    width={300} 
                    height={200}
                    src={data.image}
                    className="w-[500px] h-40 rounded-md object-cover"
                />
                <div className="flex flex-col items-start gap-2">
                    <div className="flex gap-2 items-center">
                        <MdLocationOn size={20} className="text-red-500" />
                        <p className="text-sm">{data.location}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <VenueDescCard about={data.description} schedule={data.time} date={data.date} />
            </div>
            </div>
            <button className="bg-blue-700 hover:bg-blue-600 rounded-md w-full h-10 text-white text-sm">{`$${data.price}|Book`}</button>
        </section>
    );
}

export default EventIdPage;
