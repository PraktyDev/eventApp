'use client'
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";

const AddSecurityPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    amount: '',
  })

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await fetch("/admin/add-security/api",{
        method: 'POST',
        body: JSON.stringify(formData)
      })
      if(!response.ok){
        throw new Error("Failed to Post")
      }
      return response.json({ message: "Posted Successfully" })
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  return (
    <section className="p-4 mt-20 h-full max-w-md mx-auto flex flex-col border border-blue-200 justify-between">
      <form onSubmit={handleSubmit} className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 items-center ">
          <div className="relative w-full flex items-center">
            <input name="name" value={formData.name} onChange={handleChange} className="border border-black pl-10  w-full py-2 px-4 rounded-md" type="text" placeholder="Security Company name"/>            
            <div className="absolute left-4 text-blue-400"><FaRegUser /></div>
          </div>
          <div className="relative w-full flex items-center">
            <input name="image" value={formData.image} onChange={handleChange} className="border border-black pl-10 w-full py-2 px-4 rounded-md" type="text" placeholder="image url" />            
            <div className="absolute left-4 text-blue-400"><MdOutlineLock /></div>
          </div>        
          <div className="relative w-full flex items-center">
            <input name="description" value={formData.description} onChange={handleChange} className="border border-black pl-10 w-full py-2 px-4 rounded-md" type="text" placeholder="description" />            
            <div className="absolute left-4 text-blue-400"><MdOutlineLock /></div>
          </div>  
          <div className="relative w-full flex items-center">
            <input name="amount" value={formData.amount} onChange={handleChange} className="border border-black pl-10 w-full py-2 px-4 rounded-md" type="text" placeholder="Entry amount" />            
            <div className="absolute left-4 text-blue-400"><MdOutlineLock /></div>
          </div>                                     
        </div>

        <div className="flex flex-col gap-6 items-center">
          <button className="bg-blue-800 hover:bg-blue-700 text-white w-full rounded-md py-2 ">Add Security</button>
        </div>
      </form>
    </section>
  )
}

export default AddSecurityPage