import { MdOutlineSearch } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export const revalidate = 0;

const fetchSecurity = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/add-security/api`);
  if (!response.ok) {
    throw new Error("Unable to fetch data");
  }
  return response.json();
};

const SecurityServicePage = async () => {
  const security = await fetchSecurity();

  return (
    <section className="flex flex-col h-screen w-full p-4 gap-3">
      <div className="flex flex-col gap-3 bg-white py-2 sticky top-0">
        <div className="relative flex justify-center items-center font-semibold">
          <div className="absolute flex w-1/4 justify-start left-0">
            <Link href="/services">
              <IoArrowBackCircleSharp
                size={20}
                className="hover:text-slate-800"
              />
            </Link>
          </div>
          <p className="flex w-full justify-center items-center text-md">
            Security
          </p>
        </div>

        <div className="relative tablet:w-3/4 tablet:mx-auto flex items-center ">
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

      <div className="grid grid-cols-2 gap-4 w-full ">
        {security.map((item) => (
          <div key={item._id} className="flex flex-col">
            <Link href={`/services/security/${item._id}`}>
              <Image
                src={item.image}
                width={100}
                height={100}
                alt="service card"
                className="w-48 tablet:w-56 h-48 tablet:h-56 bg-slate-200"
              />
              <h3 className="tablet:text-lg">{item.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecurityServicePage;
