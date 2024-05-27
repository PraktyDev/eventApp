import EntertainmentCard from "@/components/EntertainmentCard";
import { MdOutlineSearch } from "react-icons/md";


const EntertainmentServicePage = async () => {
  return (
    <section className="flex flex-col min-h-screen w-full p-4 gap-3">
      <div className="sticky top-0 flex flex-col gap-3 bg-white py-2">
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

      <div className="">
        <EntertainmentCard />
      </div>
    </section>
  );
};

export default EntertainmentServicePage;
