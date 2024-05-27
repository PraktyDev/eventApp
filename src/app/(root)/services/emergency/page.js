import { MdLocationOn, MdOutlineSearch } from "react-icons/md";
import Image from 'next/image'

const EmergencyServicePage = () => {

  return (
    <section className="flex flex-col h-screen w-full p-4 gap-3">
      <div className="flex flex-col gap-3 bg-white py-2 sticky top-0">

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
            <div className='flex flex-col'>
                <Image src={''} width={1} height={1} alt='service card' className='w-48 h-48 bg-slate-200' />
                <h3>name</h3>
            </div>
        </div>
    </section>
  );
};

export default EmergencyServicePage;
