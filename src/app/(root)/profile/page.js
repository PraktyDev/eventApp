import Image from "next/image";
import { CiLock } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";

export const revalidate = 0
  
const fetchUser = async() =>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register/api`);
  if(!response.ok){
    throw new Error("Unable to fetch data")
  }
  return response.json();
}

const ProfilePage = async () => {

    const user = await fetchUser();

  return (
    <>
    <TopNav />
    <section className="flex flex-col mx-auto max-w-xl h-screen gap-3 justify-between pt-4">
        {user.map(item =>(
        <div key={item._id} className="flex flex-col gap-2 items-center justify-center">
            <Image width={15} height={15} alt="profile photo" src={"/images/contact.svg"} className="w-28 h-28 tablet:w-40 tablet:h-40 border border-blue-800 rounded-full" />
            <p className="tablet:text-lg font-semibold">{item.name}</p>
        </div>
        ))}
        <div className="bg-slate-200 w-full h-3/4 rounded-tr-3xl rounded-tl-3xl px-6 py-10">
            <h3 className="text-black mb-5 tablet:mb-10 text-lg font-semibold">Account Overview</h3>
            <div className="flex flex-col gap-4 tablet:gap-10">
            <div className="flex justify-between items-center" >
                <div className="flex gap-4 items-center">
                    <FaRegUser fill="blue" size={25} className="bg-blue-300 p-1 rounded-md" />
                    <Link href={'/profile/my-profile'}>My Profile</Link>
                </div>
                <Link href={'/profile/my-profile'}><IoIosArrowForward size={20} /></Link>
            </div>
            
            <div className="flex justify-between items-center" >
                <div className="flex gap-4 items-center">
                    <CiLock fill="red" size={25} className="bg-red-200 p-1 rounded-md" />
                    <Link href={'/profile/change-password'}>Change Password</Link>
                </div>
                <Link href={'/profile/change-password'}><IoIosArrowForward size={20} /></Link>
            </div>
            </div>
        </div>
    </section>
    <BottomNav />
    </>
  )
}

export default ProfilePage