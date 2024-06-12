import InServiceCard from "@/components/InServiceCard";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export const revalidate = 0

const DancersIdPage = async ({ params }) => {   
    const { dancersId } = params

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/add-dancers/api/${params.dancersId}`);
    const data = await response.json();

    return (
        <section className="flex flex-col h-svh w-full p-4 gap-3 justify-between">
            <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
                <Link href="/services/entertainment"><FaArrowLeft /></Link>
                <p>{data.name}</p>
            </div>

            <div className="flex flex-col gap-3">
                <Image
                    width={300} 
                    height={200}
                    src={data.image}
                    className="w-full h-40 rounded-md object-cover"
                />
            </div>

            <div className="flex flex-col">
                <InServiceCard description={data.description} />
            </div>
            </div>
            <button className="text-sm bg-blue-700 hover:bg-blue-600 rounded-md w-full h-10 text-white">{`$${data.amount}|Per Hour`}</button>
        </section>
    );
}

export default DancersIdPage;
