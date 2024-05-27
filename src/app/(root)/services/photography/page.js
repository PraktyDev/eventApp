import { MdLocationOn, MdOutlineSearch } from "react-icons/md";
import Image from 'next/image'
import Link from 'next/link';

export const revalidate = 0

const fetchPhoto = async() =>{
  const response = await fetch('http://localhost:3000/admin/add-photography/api');
  if(!response.ok){
    throw new Error("Unable to fetch data")
  }
  return response.json();
}

const PhotographyServicePage = async () => {

  const photo = await fetchPhoto();

  return (
    <section className="flex flex-col h-screen w-full p-4 gap-3">
      <div className="flex flex-col gap-3 bg-white py-2 sticky top-0">
        <div className="flex gap-1 items-center">
          <MdLocationOn size={20} className="text-red-500" />
          <p className="text-md">Location No 6, Trench Avenue, Pluto</p>
        </div>

        <div className="relative w-full flex items-center ">
          <input
            className="bg-slate-100 pl-10 w-full py-2 px-4 rounded-xl placeholder:text-sm focus:outline-blue-200"
            type="text"
            placeholder="Search"
          />
          <div className="absolute left-3 text-blue-400">
            <MdOutlineSearch size={20} />
          </div>
        </div>
      </div>

        <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
          {photo.map((item) =>(
            <div key={item._id} className='flex flex-col'>
              <Link href={`/services/photography/${item._id}`}>
                <Image src={item.image} width={100} height={100} alt='service card' className='w-48 h-48 bg-slate-200' />
                <h3>{item.name}</h3>             
              </Link>
            </div>
          ))}
        </div>
    </section>
  );
};

export default PhotographyServicePage;
