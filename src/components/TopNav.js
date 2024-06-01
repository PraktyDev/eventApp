'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FaUserAlt } from 'react-icons/fa';
import { FaUsersGear } from 'react-icons/fa6';
import { MdHome, MdPermContactCalendar } from 'react-icons/md';

const TopNav = () => {
    const pathname = usePathname();

  return (
    <nav className='w-full bg-black items-center text-nowrap px-5 h-14 z-50 sticky left-0 top-0 hidden tablet:flex justify-between'>
        <Link href={"/"} className=' hover:skew-x-3 cursor-pointer text-lg text-white font-semibold'>Event <span className='font-thin '>App</span></Link>
        <div className='flex flex-row gap-4 items-center w-3/4 justify-between'>
          <Link className={`link ${pathname === '/' ? 'text-yellow-500' : 'text-white'}`} href={"/"}>
                <div className='flex items-center gap-1'>
                    <MdHome size={18} />
                    <p className='text-[15px] leading-[10px]'>Home</p>
                </div>
            </Link>
          <Link className={`link ${pathname === '/events' ? 'text-yellow-500' : 'text-white'}`} href={"/events"}>
                <div className='flex items-center gap-1'>
                    <MdPermContactCalendar size={15}/>
                    <p className='text-[15px] leading-[10px]'>Events</p>
                </div>
          </Link>
          <Link className={`link ${pathname === '/services' ? 'text-yellow-500' : 'text-white'}`} href={"/services"}>
                <div className='flex items-center gap-1'>
                    <FaUsersGear size={14}/>
                    <p className='text-[15px] leading-[10px]'>Services</p>
                </div>
          </Link>
          <Link className={`link ${pathname === '/profile' ? 'text-yellow-500' : 'text-white'}`} href={"/profile"}>
                <div className='flex items-center gap-1'>
                    <FaUserAlt size={12}/>
                    <p className='text-[15px] leading-[10px]'>Profile</p>
                </div>
            </Link>         
        </div>
    </nav>
  )
}

export default TopNav