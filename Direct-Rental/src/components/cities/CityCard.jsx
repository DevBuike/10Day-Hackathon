import Image from 'next/image';

const CityCard = ({ noOfProperties=0, city, cityImage }) => {
  return(
    <div className='rounded shadow-lg mt-5'>
      <div className="relative h-[400px]">
        <span className='absolute z-2 text-xs top-5 right-5 rounded bg-green-500 text-white py-2 px-3'>{noOfProperties === 0 ? noOfProperties: `+${noOfProperties}`} properties</span>
        <Image src={cityImage} alt={city} fill className="object-cover rounded" />
        <div className='absolute top-0 left-0 size-full bg-gradient-to-t from-[#6168FEE5] to-transparent rounded flex items-end justify-center'>
          <p className='font-xl mb-4 text-white'>{city}</p>
        </div>
      </div>
    </div>
  );
}

export default CityCard;