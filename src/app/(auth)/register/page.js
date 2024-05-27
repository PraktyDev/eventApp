'use client'
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdOutlineLock } from "react-icons/md";
import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    image: "",
    nationality: "",
    password: "",
  });

  const handleFormInput = (e) =>{
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    try {
      fetch('register/api',{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData)
      })
      console.log('Posted Successfully')
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  return (
    <section className="p-4 h-full max-w-md mx-auto flex flex-col border border-blue-200 justify-between">
      <div>
      <div className="flex flex-col">
        <h1 className="text-blue-800 text-lg font-semibold">Sign Up</h1>
        <p className="text-md">Hello there, sign up to continue!</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 items-center ">
          <div className="relative w-full flex items-center">
            <input name="name" value={formData.name} onChange={handleFormInput} className="border border-black pl-10  w-full py-2 px-4 rounded-md" type="text" placeholder="Full name"/>            
            <div className="absolute left-4 text-blue-400"><FaRegUser /></div>
          </div>
          <div className="relative w-full flex items-center">
            <input name="dob" value={formData.dob} onChange={handleFormInput} className="border border-black pl-10  w-full py-2 px-4 rounded-md" type="text" placeholder="Date of birth"/>            
            <div className="absolute left-4 text-blue-400"><FaRegUser /></div>
          </div>
          <div className="relative w-full flex items-center">
            <input name="gender" value={formData.gender} onChange={handleFormInput} className="border border-black pl-10  w-full py-2 px-4 rounded-md" type="text" placeholder="Gender"/>            
            <div className="absolute left-4 text-blue-400"><FaRegUser /></div>
          </div>
          <div className="relative w-full flex items-center">
            <input name="email" value={formData.email} onChange={handleFormInput} className="border border-black pl-10 w-full py-2 px-4 rounded-md" type="email" placeholder="Email"/>            
            <div className="absolute left-4 text-blue-400"><FiMail /></div>
          </div>
          <div className="relative w-full flex items-center">
            <input name="phone" value={formData.phone} onChange={handleFormInput} className="border border-black pl-10 w-full py-2 px-4 rounded-md" type="text" placeholder="Phone number"/>            
            <div className="absolute left-4 text-blue-400"><FiMail /></div>
          </div>
          <div className="relative w-full flex items-center">
            <input name="image" value={formData.image} onChange={handleFormInput} className="border border-black pl-10 w-full py-2 px-4 rounded-md" type="text" placeholder="Enter your photo"/>            
            <div className="absolute left-4 text-blue-400"><FiMail /></div>
          </div>
          <div className="relative w-full flex items-center">
            <input name="nationality" value={formData.nationality} onChange={handleFormInput} className="border border-black pl-10 w-full py-2 px-4 rounded-md" type="text" placeholder="Nationality"/>            
            <div className="absolute left-4 text-blue-400"><FiMail /></div>
          </div>
          <div className="relative w-full flex items-center">
            <input name="password" value={formData.password} onChange={handleFormInput} className="border border-black pl-10 w-full py-2 px-4 rounded-md" type="password" placeholder="Password" />            
            <div className="absolute left-4 text-blue-400"><MdOutlineLock /></div>
          </div>          
        </div>

        <div className="flex flex-col gap-6 items-center">
          <button className="bg-blue-800 hover:bg-blue-700 text-white w-full rounded-md py-2 ">Create Account</button>
          <button className="bg-slate-200 hover:bg-slate-100 w-full rounded-md py-2">
            <div className="flex gap-3 justify-center items-center">
              <FcGoogle />
              <p>Continue with Google</p>
            </div>
          </button>
        </div>
      </form>
      </div>

      <div className="flex justify-center mt-10">
        <p className="">
          Already have an account? <Link href="/login" className="text-blue-600 hover:text-blue-500">Log In</Link>
        </p>
      </div>

    </section>
  )
}

export default RegisterPage