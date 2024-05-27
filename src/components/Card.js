import Image from 'next/image';
import Link from 'next/link';
import { MdLocationOn } from "react-icons/md"

const Card = (props) => {
  return (
    <div className="flex flex-col -gap-1">
      <Link href={props.href}>
        <Image width={16} height={9} alt="card" src={props.src} className="object-cover rounded-lg bg-slate-600 w-40 h-32" />
        <h2 className='font-semibold text-sm tablet:text-md text-nowrap'>{props.name}</h2>
      </Link>
      <div className="flex items-center">
          <MdLocationOn size={13} className="text-red-500" />
          <p className='text-xs tablet:text-sm text-nowrap'>{props.location}</p>
      </div>
    </div>
  )
}

export default Card