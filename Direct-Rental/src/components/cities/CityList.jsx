import CityCard from "./CityCard";

const CityList = () => {
  return(
    <section className='bg-white w-[90%] max-w-[980px] mx-auto mt-25 pb-20'>
      <div className='w-[80%] max-w-[620px] text-center mx-auto'>
        <h2 className="text-3xl font-bold mb-2">Our Hottest Nearby Cities</h2>
        <p className="text-gray-400 font-xs">
          We connect you with verified property owners so you can rent with peace of mind.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <CityCard city='Lagos' cityImage='/assets/images/lagos.jpg' />
        <CityCard noOfProperties='800' city='Abuja' cityImage='/assets/images/abuja.jpg' />
        <CityCard noOfProperties='600' city='Enugu' cityImage='/assets/images/enugu.jpg' />
      </div>
    </section> 
  );
}

export default CityList;