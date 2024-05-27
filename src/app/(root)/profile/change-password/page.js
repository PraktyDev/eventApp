'use client'
import Link from "next/link";
import { MdOutlineLock } from "react-icons/md";
import { useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const ChangePasswordPage = () => {
  const [formData, setFormData] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleFormInput = (e) =>{
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    // try {
    //   fetch('register/api',{
    //     method: 'POST',
    //     headers: {
    //       'Content-Type' : 'application/json',
    //     },
    //     body: JSON.stringify(formData)
    //   })
    //   console.log('Posted Successfully')
    // } catch (error) {
    //   console.error('Error:', error.message)
    // }
  }

  return (
    <section className="relative p-4 h-screen max-w-md mx-auto flex flex-col justify-between">
      <div className="absolute top-5">
        <Link href="/login" className="flex gap-4 font-bold"><IoArrowBackCircleSharp size={25} className="hover:text-slate-800"/> Change Password</Link>
      </div> 
      <div>
      <div className="flex flex-col my-12">
        <p className="text-md">Your password needs to be a minimum of six characters long and should contain a mix of letters and numbers for security.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 items-center ">
          <div className="relative w-full flex items-center">
            <input name="current" value={formData.current} onChange={handleFormInput} className="border border-black pl-10  w-full py-2 px-4 rounded-md" type="password" placeholder="Tour Current Password"/>            
            <div className="absolute left-4 text-blue-400"><MdOutlineLock /></div>
          </div>
          <div className="relative w-full flex items-center">
            <input name="new" value={formData.new} onChange={handleFormInput} className="border border-black pl-10 w-full py-2 px-4 rounded-md" type="password" placeholder="Your New Password"/>            
            <div className="absolute left-4 text-blue-400"><MdOutlineLock /></div>
          </div>
          <div className="relative w-full flex items-center">
            <input name="confirm" value={formData.confirm} onChange={handleFormInput} className="border border-black pl-10 w-full py-2 px-4 rounded-md" type="password" placeholder="Confirm Password" />            
            <div className="absolute left-4 text-blue-400"><MdOutlineLock /></div>
          </div>
          <div className="flex justify-end">
            <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-500">Forget Password?</Link>
          </div>          
        </div>

        <div className="flex flex-col gap-6 items-center">
          <button className="bg-blue-800 hover:bg-blue-700 text-white w-full rounded-md py-2 ">Change Password</button>
        </div>
      </form>
      </div>
    </section>
  )
}

export default ChangePasswordPage