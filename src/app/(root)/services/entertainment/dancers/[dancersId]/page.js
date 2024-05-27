import InServiceCard from "@/components/InServiceCard";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export const revalidate = 0

const DancersIdPage = async ({ params }) => {   
    const { dancersId } = params

    const response = await fetch(`http://localhost:3000/admin/add-dancers/api/${params.dancersId}`);
    const data = await response.json();

    return (
        <section className="flex flex-col h-svh w-full p-4 gap-3 justify-evenly">
            <div className="flex gap-2 items-center mb-5">
                <Link href="/services/entertainment"><FaArrowLeft /></Link>
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

export default DancersIdPage;