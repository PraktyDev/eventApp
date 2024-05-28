'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FaUserAlt } from 'react-icons/fa';
import { FaUsersGear } from 'react-icons/fa6';
import { MdHome, MdPermContactCalendar } from 'react-icons/md';

const BottomNav = () => {
    const pathname = usePathname();

  return (
    <nav className='w-full bg-black h-14 z-50 sticky left-0 bottom-0 flex'>
        <div className='flex flex-row px-10 w-full text-xs items-center justify-between'>
          <Link className={`link ${pathname === '/' ? 'text-yellow-500' : 'text-white'}`} href={"/"}>
                <div className='flex flex-col items-center'>
                    <MdHome size={24} />
                    <p className='text-[10px] leading-[10px]'>Home</p>
                </div>
            </Link>
          <Link className={`link ${pathname === '/events' ? 'text-yellow-500' : 'text-white'}`} href={"/events"}>
                <div className='flex flex-col items-center'>
                    <MdPermContactCalendar size={20}/>
                    <p className='text-[10px] leading-[10px]'>Events</p>
                </div>
          </Link>
          <Link className={`link ${pathname === '/services' ? 'text-yellow-500' : 'text-white'}`} href={"/services"}>
                <div className='flex flex-col items-center'>
                    <FaUsersGear size={20}/>
                    <p className='text-[10px] leading-[10px]'>Services</p>
                </div>
          </Link>
          <Link className={`link ${pathname === '/profile' ? 'text-yellow-500' : 'text-white'}`} href={"/profile"}>
                <div className='flex flex-col items-center'>
                    <FaUserAlt size={18}/>
                    <p className='mt-1 text-[10px] leading-[10px]'>Profile</p>
                </div>
            </Link>         
        </div>
    </nav>
  )
}

export default BottomNav