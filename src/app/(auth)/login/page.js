import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FiMail } from "react-icons/fi";
import { MdOutlineLock } from "react-icons/md";

const LoginPage = () => {
  return (
    <section className="p-4 h-screen max-w-md mx-auto flex flex-col border border-blue-200 justify-between">
      <div>
      <div className="flex flex-col mb-10">
        <h1 className="text-blue-800 text-lg font-semibold">Welcome!</h1>
        <p className="text-md">Hello there, sign in to continue!</p>
      </div>

      <form className="flex flex-col gap-12">
        <div className="flex flex-col">
          <div className="flex flex-col gap-4 items-center">
            <div className="relative w-full flex items-center">
              <input className="border border-black pl-10 w-full py-2 px-4 rounded-md" type="email" placeholder="Email"/>            
              <div className="absolute left-4 text-blue-400"><FiMail /></div>
            </div>
            <div className="relative w-full flex items-center">
              <input className="border border-black pl-10 w-full py-2 px-4 rounded-md" type="password" placeholder="Password" />            
              <div className="absolute left-4 text-blue-400"><MdOutlineLock /></div>
            </div>
          </div>
          <div className="flex justify-end mt-1">
            <Link href="/forget-password" className="text-blue-600 hover:text-blue-500" >Forgot Password?</Link>
          </div>         
        </div>


        <div className="flex flex-col gap-6 items-center">
          <button className="bg-blue-800 hover:bg-blue-700 text-white w-full rounded-md py-2 ">Log In</button>
          <button className="bg-slate-200 hover:bg-slate-100 w-full rounded-md py-2">
            <div className="flex gap-3 justify-center items-center">
              <FcGoogle />
              <p>Continue with Google</p>
            </div>
          </button>
        </div>
      </form>
      </div>

      <div className="flex justify-center">
        <p className="">
          Dont have an account? <Link href="/register" className="text-blue-600 hover:text-blue-500">Sign Up</Link>
        </p>
      </div>

    </section>
  )
}

export default LoginPage