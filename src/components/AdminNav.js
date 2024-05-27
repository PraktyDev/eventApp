'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { MdHome } from 'react-icons/md';

const AdminNav = () => {
    const pathname = usePathname();

  return (
    <div className='flex z-10 bg-slate-100 w-full p-4 items-center justify-between fixed top-0 left-0'>
       <div className='flex gap-4 text-nowrap overflow-x-auto'>
       <Link className={`py-1 px-4 text-sm rounded-sm text-black link ${pathname === '/admin/add-event' ? 'bg-yellow-500' : 'bg-white'}`} href={"/admin/add-event"}>
        Add Event
       </Link>

       <Link className={`py-1 px-4 text-sm rounded-sm text-black link ${pathname === '/admin/add-venue' ? 'bg-yellow-500' : 'bg-white'}`} href={"/admin/add-venue"}>
        Add Venue
       </Link>

       <Link className={`py-1 px-4 text-sm rounded-sm text-black link ${pathname === '/admin/add-dj' ? 'bg-yellow-500' : 'bg-white'}`} href={"/admin/add-dj"}>
        Add Dj
       </Link>

       <Link className={`py-1 px-4 text-sm rounded-sm text-black link ${pathname === '/admin/add-mc' ? 'bg-yellow-500' : 'bg-white'}`} href={"/admin/add-mc"}>
        Add Mc
       </Link>

       <Link className={`py-1 px-4 text-sm rounded-sm text-black link ${pathname === '/admin/add-comedian' ? 'bg-yellow-500' : 'bg-white'}`} href={"/admin/add-comedian"}>
        Add Comedian
       </Link>

       <Link className={`py-1 px-4 text-sm rounded-sm text-black link ${pathname === '/admin/add-dancers' ? 'bg-yellow-500' : 'bg-white'}`} href={"/admin/add-dancers"}>
        Add Dancers
       </Link>

       <Link className={`py-1 px-4 text-sm rounded-sm text-black link ${pathname === '/admin/add-musicbands' ? 'bg-yellow-500' : 'bg-white'}`} href={"/admin/add-musicbands"}>
        Add Music Bands
       </Link>

       <Link className={`py-1 px-4 text-sm rounded-sm text-black link ${pathname === '/admin/add-sound' ? 'bg-yellow-500' : 'bg-white'}`} href={"/admin/add-sound"}>
        Add Sound Engineers
       </Link>

       <Link className={`py-1 px-4 text-sm rounded-sm text-black link ${pathname === '/admin/add-security' ? 'bg-yellow-500' : 'bg-white'}`} href={"/admin/add-security"}>
        Add Security
       </Link>

       <Link className={`py-1 px-4 text-sm rounded-sm text-black link ${pathname === '/admin/add-catering' ? 'bg-yellow-500' : 'bg-white'}`} href={"/admin/add-catering"}>
        Add Catering
       </Link>

       <Link className={`py-1 px-4 text-sm rounded-sm text-black link ${pathname === '/admin/add-photography' ? 'bg-yellow-500' : 'bg-white'}`} href={"/admin/add-photography"}>
        Add Photography
       </Link>

       <Link className={`py-1 px-4 text-sm rounded-sm text-black link ${pathname === '/admin/add-videography' ? 'bg-yellow-500' : 'bg-white'}`} href={"/admin/add-videography"}>
        Add Videography
       </Link>
       </div>

       <div className='' >
            <Link className={`link ${pathname === '/admin' ? 'text-yellow-500' : 'text-white'}`} href={"/admin"}>
                <div className='flex flex-col items-center'>
                    <MdHome className='bg-slate-800 rounded-full p-1' size={30}/>
                </div>
            </Link>
       </div>
    </div>
  )
}

export default AdminNav