import InServiceCard from "@/components/InServiceCard";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";


const CateringIdPage = async ({ params }) => {   
    const { cateringId } = params

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/add-catering/api/${params.cateringId}`);
    const data = await response.json();

    return (
        <section className="flex flex-col h-svh w-full p-4 gap-3 justify-between">
            <div className="flex flex-col gap-3" >
            <div className="flex gap-2 items-center">
                <Link href="/services/catering"><FaArrowLeft /></Link>
                <p>{data.name}</p>
            </div>

            <div className="flex flex-col tablet:flex-row gap-3">
                <Image
                    width={500} 
                    height={500}
                    src={data.image}
                    className="w-full tablet:w-1/2 h-40 tablet:h-[400px]  rounded-md object-cover"
                />
                <div className="flex flex-col tablet:w-1/2 justify-between">
                    <InServiceCard description={data.description} />
                    <button className="hidden tablet:block bg-blue-700 hover:bg-blue-600 rounded-md w-full h-10 text-white text-sm">{`$${data.amount}|Per Hour`}</button>
                </div>
            </div>
            </div>
            <button className="block tablet:hidden bg-blue-700 hover:bg-blue-600 rounded-md w-full h-10 text-white text-sm">{`$${data.amount}|Per Hour`}</button>
        </section>
    );
}

export default CateringIdPage;
