import InServiceCard from "@/components/InServiceCard";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";


const VideographyIdPage = async ({ params }) => {   
    const { videographyId } = params

    const response = await fetch(`http://localhost:3000/admin/add-videography/api/${params.videographyId}`);
    const data = await response.json();

    return (
        <section className="flex flex-col h-svh w-full p-4 gap-3 justify-evenly">
            <div className="flex gap-2 items-center mb-5">
                <Link href="/services/videography"><FaArrowLeft /></Link>
                <p>{data.name}</p>
            </div>

            <div className="flex flex-col gap-3">
                <Image
                    width={300} 
                    height={200}
                    src={data.image}
                    className="w-full h-40 rounded-xl"
                />
            </div>

            <div className="flex flex-col">
                <InServiceCard description={data.description} />
                <button className="bg-blue-700 hover:bg-blue-600 rounded-md w-full h-10 text-white">{`$${data.amount}|Per Hour`}</button>
            </div>
        </section>
    );
}

export default VideographyIdPage;
