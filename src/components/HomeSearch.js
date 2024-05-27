'use client'
import { MdOutlineSearch } from "react-icons/md";
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";

const handleSearch = (term) => {
    console.log(term)
    const params = new URLSearchParams(searchParams)
    if(term){
      params.set('query', term)
    } else{
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }

const HomeSearch = () => {
    const searchParams = useSearchParams();
    const  pathname = usePathname()
    const { replace } = useRouter()

  return (
    <div className="max-w-lg mx-auto relative w-full flex items-center ">
        <input
        className="bg-slate-100 pl-10 w-full py-1 tablet:py-2 px-4 rounded-xl placeholder:text-sm focus:outline-blue-200"
        type="text"
        placeholder="Search"
        onChange={(e)=>{handleSearch(e.target.value)}}
        defaultValue={searchParams.get('query')?.toString()}
        />
        <div className="absolute left-3 text-blue-400">
        <MdOutlineSearch size={20} />
        </div>
    </div>
  )
}

export default HomeSearch