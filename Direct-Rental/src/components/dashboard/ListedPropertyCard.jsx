import Image from 'next/image';
import Link from 'next/link';
import Pill from '@/components/dashboard/Pill';

const ListedPropertyCard = ({imageSrc, name='', featured=false, description='', price='', specs='', location='', noOfViews=0, noOfInquiries=0}) => {
  return(
    <>
      <div className='flex items-start justify-between gap-2 bg-white md:pb-5 mt-2 overflow-x-scroll md:overflow-x-hidden '>
        <div className='flex items-center gap-3'>
          <div className="relative aspect-square w-[120px] md:w-[25%] h-[120px] md:h-auto">
            <Image src={imageSrc} alt="" fill className="rounded-xl" />
          </div>
          <div className='py-2 w-[300px] md:w-[80%]'>
            <div className="flex flex-col lg:flex-row items-start md:items-center gap-2">
              <h3 className='text-xs md:text-sm font-semibold md:mr-3'>{name}</h3>
              <div className='flex items-start md:items-center gap-2 md:gap-3'>
                {!featured ? null : <Pill label="Featured" className="text-yellow-500 bg-[#FBBF24]/20 text-[10px]" />}
                <Pill label="Available" className="text-green-500 bg-[#17A34A42] text-[10px]" />
              </div>
            </div>
            <p className='text-gray-400 text-xs md:text-sm mt-2'>{description}</p>
            <p className='flex flex-wrap items-start md:items-center gap-2 md:gap-6 mt-2 text-[10px] md:text-xs text-gray-400'><span>₦{price}/Year</span> <span>{specs}</span> <span>{location}</span></p>
            <p className='flex items-center gap-6 mt-2'><span className='text-blue-500 text-xs'>{noOfViews} views</span> <span className='text-green-500 text-[10px] md:text-xs'>{noOfInquiries} Inquiries</span></p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-2">
          <Link href="#" className='p-1 bg-[#17A34A42] rounded'>icon</Link>
          <Link href="#" className='p-1 bg-[#17A34A42] rounded'>icon</Link>
          <Link href="#" className='p-1 bg-[#17A34A42] rounded'>icon</Link>
        </div>
      </div>
      <hr className='border border-gray-200 w-full' />
    </>
  );
}

export default ListedPropertyCard;