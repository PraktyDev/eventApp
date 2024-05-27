import Image from "next/image"
import Link from "next/link"

const ServiceCard = (props) => {
  return (
    <Link href={props.href} className="flex flex-col gap-2">
        <Image width={1} height={1} src={props.src} alt="services" className="w-48 h-48 "/>
        <p className="pl-4 text-sm">{props.name}</p>
    </Link>
  )
}

export default ServiceCard