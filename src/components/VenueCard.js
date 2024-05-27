import Image from "next/image";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";

const VenueCard = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <Image
        width={16}
        height={9}
        src={props.src}
        className="w-full h-32 rounded-xl "
      />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-start">
          <Link href={props.href}><p className="font-semibold text-md">{props.name}</p></Link>
          <div className="flex gap-1 items-center">
            <MdLocationOn size={15} className="text-red-500" />
            <p className="text-sm">{props.address}</p>
          </div>
        </div>

        <div className="text-sm flex flex-col items-end">
          <p>Price: ${props.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
