import Image from 'next/image'

const Hero = () => {
  return (
    <section className="min-h-screen relative hidden tablet:flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-slate-100 py-12 shadow-lg">
      <Image src={"/images/bg.jpg"} height={500} width={500} alt="background photo" className="absolute inset-0 h-screen w-full object-cover object-center rounded-md" />
      <div className="absolute inset-0 bg-black opacity-50 mix-blend-multiply"></div>
      <div className="relative flex flex-col items-center mt-5 max-w-xl">
        <h1 className="mb-8 text-center text-6xl font-bold text-white">Event <span className="text-blue-500">App</span></h1>
        <p className="mb-14 text-center text-3xl text-white">Find out about the next event happening around you</p>
      </div>
    </section>
  )
}

export default Hero