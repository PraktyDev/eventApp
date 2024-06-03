import InServiceCard from "@/components/InServiceCard";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";


const VideographyIdPage = async ({ params }) => {   
    const { videographyId } = params

    const response = await fetch(`http://localhost:3000/admin/add-videography/api/${params.videographyId}`);
    const data = await response.json();

    return (
        <section className="flex flex-col h-svh w-full p-4 gap-3 justify-between">
            <div className="flex flex-col gap-3" >
            <div className="flex gap-2 items-center">
                <Link href="/services/videography"><FaArrowLeft /></Link>
                <p>{data.name}</p>
            </div>

            <div className="flex flex-col tablet:flex-row gap-3">
                <Image
                    width={500} 
                    height={500}
                    src={data.image}
                    className="w-full tablet:w-1/2 h-40 tablet:h-[400px] laptop:h-full rounded-md object-cover"
                />
                <div className="flex flex-col tablet:w-1/2 justify-between">
                    <InServiceCard description={data.description} />
                    <button className="hidden tablet:block text-sm bg-blue-700 hover:bg-blue-600 rounded-md w-full h-10 text-white">{`$${data.amount}|Per Hour`}</button>
                </div>
            </div>
            </div>
            <button className="block tablet:hidden text-sm bg-blue-700 hover:bg-blue-600 rounded-md w-full h-10 text-white">{`$${data.amount}|Per Hour`}</button>
        </section>
    );
}

export default VideographyIdPage;
