import ServiceCard from "@/components/ServiceCard";
import { MdLocationOn } from "react-icons/md";
import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";

const ServicePage = () => {
  return (
    <>
    <TopNav />
    <section className="flex flex-col w-full p-4 gap-3">
      <div className="flex flex-col gap-3 bg-white py-2 sticky top-0">
        <div className="flex gap-1 items-center">
          <MdLocationOn size={20} className="text-red-500" />
          <p className="text-md">Location No 6, Trench Avenue, Pluto</p>
        </div>
      </div>

      <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4 w-full justify-items-center">
        <ServiceCard href="/services/entertainment" name="Entertainment" src="/images/entertainment.svg" />
        <ServiceCard href="/events" name="Event Venues" src="/images/eventvenue.svg" />
        <ServiceCard href="/services/security" name="Security Personnel" src="/images/security.svg" />
        <ServiceCard href="/services/catering" name="Catering Services" src="/images/catering.svg" />
        <ServiceCard href="/services/photography" name="Photography" src="/images/photography.svg" />
        <ServiceCard href="/services/videography" name="Videography" src="/images/videography.svg" />
        <ServiceCard href="/services/emergency" name="Emergency" src="/images/emergency.svg" />
        <ServiceCard href="/services/contact" name="Contact Us" src="/images/contact.svg" />
      </div>
    </section>
    <BottomNav />
    </>
  );
};

export default ServicePage;
