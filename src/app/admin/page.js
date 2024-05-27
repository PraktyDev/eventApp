import Link from "next/link";

const AdminPage = () => {
  return (
    <section className="w-full h-full p-4 mt-20 flex flex-col">
      <div className="flex flex-col gap-6 my-auto items-center">
        <Link className="bg-blue-800 hover:bg-blue-700 text-white w-3/4 rounded-md py-2 text-center " href={'/admin/add-event'}>Add Event</Link>
        <Link className="bg-blue-800 hover:bg-blue-700 text-white w-3/4 rounded-md py-2 text-center " href={'/admin/add-venue'}>Add Venue</Link>
        <Link className="bg-blue-800 hover:bg-blue-700 text-white w-3/4 rounded-md py-2 text-center " href={'/admin/add-dj'}>Add DJ</Link>
        <Link className="bg-blue-800 hover:bg-blue-700 text-white w-3/4 rounded-md py-2 text-center " href={'/admin/add-mc'}>Add MC</Link>
        <Link className="bg-blue-800 hover:bg-blue-700 text-white w-3/4 rounded-md py-2 text-center " href={'/admin/add-comedian'}>Add Comedian</Link>
        <Link className="bg-blue-800 hover:bg-blue-700 text-white w-3/4 rounded-md py-2 text-center " href={'/admin/add-dancers'}>Add Dancers</Link>
        <Link className="bg-blue-800 hover:bg-blue-700 text-white w-3/4 rounded-md py-2 text-center " href={'/admin/add-musicbands'}>Add Music Bands</Link>
        <Link className="bg-blue-800 hover:bg-blue-700 text-white w-3/4 rounded-md py-2 text-center " href={'/admin/add-sound'}>Add Sound Engineers</Link>
        <Link className="bg-blue-800 hover:bg-blue-700 text-white w-3/4 rounded-md py-2 text-center " href={'/admin/add-security'}>Add Security</Link>
        <Link className="bg-blue-800 hover:bg-blue-700 text-white w-3/4 rounded-md py-2 text-center " href={'/admin/add-catering'}>Add Catering</Link>
        <Link className="bg-blue-800 hover:bg-blue-700 text-white w-3/4 rounded-md py-2 text-center " href={'/admin/add-photography'}>Add Photography</Link>
        <Link className="bg-blue-800 hover:bg-blue-700 text-white w-3/4 rounded-md py-2 text-center " href={'/admin/add-videography'}>Add Videography</Link>
      </div>
    </section>
  );
};

export default AdminPage;
