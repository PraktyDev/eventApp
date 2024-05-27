import Link from "next/link";
import { MdOutlineLock } from "react-icons/md";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const EditPasswordPage = () => {
  return (
    <section className="relative p-4 h-screen max-w-md mx-auto flex flex-col border border-blue-200 justify-between">
      <div className="absolute top-10">
        <Link href="/login"><IoArrowBackCircleSharp size={25} className="hover:text-slate-800"/></Link>
      </div> 
      <div className=" gap-5 flex flex-col my-auto">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold uppercase ">Event <span className="py-0.5 px-2 rounded-sm bg-blue-400">App</span></h1>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-black text-lg font-semibold">Create New Password</h2>
        <p className="text-md text-center">Your New Password Must Be Different From The Previous One.</p>
      </div>

      <form className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 items-center ">
          <div className="relative w-full flex items-center">
            <input className="border border-black pl-10 w-full py-2 px-4 rounded-md" type="password" placeholder="Your Current Password"/>            
            <div className="absolute left-4 text-blue-400"><MdOutlineLock /></div>
          </div>  

          <div className="relative w-full flex items-center">
            <input className="border border-black pl-10 w-full py-2 px-4 rounded-md" type="password" placeholder="New Password"/>            
            <div className="absolute left-4 text-blue-400"><MdOutlineLock /></div>
          </div>  

          <div className="relative w-full flex items-center">
            <input className="border border-black pl-10 w-full py-2 px-4 rounded-md" type="password" placeholder="Confirm Password"/>            
            <div className="absolute left-4 text-blue-400"><MdOutlineLock /></div>
          </div>         
        </div>

        <div className="flex items-center ">
          <Link href="/login" className="bg-blue-800 hover:bg-blue-700 text-white text-center w-full rounded-md py-2 "><button>Save</button></Link>
        </div>
      </form>
      </div>
    </section>
  )
}

export default EditPasswordPage