import Image from 'next/image';
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

const PropertyCard = ({propertyType, propertyImage, propertyName, propertyLocation, propertyPrice, duration, noOfBed, noOfBath, dimension=''}) => {
  return(
    <div className='rounded shadow-lg mt-5'>
      <div className="relative h-[300px]">
        <span className='absolute z-2 text-xs top-5 left-5 rounded bg-green-500 text-white py-2 px-3'>{propertyType}</span>
        <Image src={propertyImage} alt={`A ${propertyName}`} fill className="object-cover rounded-t-md" />
      </div>
      <div className='p-4'>
        <h4 className="text-md font-semibold my-3">{propertyName}</h4>
        <p className='flex my-3 items-center text-xs text-gray-400'><FaMapMarkerAlt className='text-green-400' /><span className='ml-1'>{propertyLocation}</span></p>
        <div className='flex my-3 items-center'>
          <div className='border border-gray-100 w-[33%] text-gray-400 flex items-center justify-center p-2 text-xs'>
            <FaBed className='text-xs mr-1 text-gray-400' />{noOfBed}
          </div>
          <div className='border border-gray-100 w-[33%] text-gray-400 flex items-center justify-center p-2 text-xs'>
            <FaBath className='text-xs mr-1 text-gray-400' />{noOfBath}
          </div>
          <div className='border border-gray-100 w-[33%] text-gray-400 flex items-center justify-center p-2 text-xs'>
            <FaRulerCombined className='text-xs mr-1 text-gray-400' />{dimension}
          </div>
        </div>
        <p className='font-semibold text-sm'><span className='text-green-400'>₦{propertyPrice}</span>/{duration}</p>
      </div>
    </div>
  );
}

export default PropertyCard; 