import Image from "next/image";

const Stats  = () => {
  return(
    <section className='bg-white rounded w-[90%] max-w-[980px] shadow-lg py-8 px-6 lg:px-12 mx-auto mt-[-60px]'>
      
        <div className='flex gap-2 flex-wrap lg:no-wrap lg:flex-row justify-around items-center'>
          <div className="flex flex-col items-center justify-center" >
            <p className="text-green-400 font-bold text-xl md:text-4xl">12+</p>
            <p className="text-xs text-gray-400">Years Of Experience</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-green-400 font-bold text-xl md:text-4xl">167k+</p>
            <p className="text-xs text-gray-400">Apartments Rent</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-green-400 font-bold text-xl md:text-4xl">239</p>
            <p className="text-xs text-gray-400">Total Rental</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-green-400 font-bold text-xl md:text-4xl">500+</p>
            <p className="text-xs text-gray-400">Landlords</p>
          </div>
        </div>
    </section>
  );
}

export default Stats;