import Pill from '@/components/dashboard/Pill';

const PerformStatsCard = ({name='', featured=false, applications=0, price='', specs='', conversion=0, noOfViews=0, noOfInquiries=0}) => {
  return(
    <div className='py-5 px-2 bg-[#F9FAFB] rounded mb-3'>
      <div className="flex items-center justify-between gap-2">
        <h3 className='text-xs md:text-sm font-semibold md:mr-3'>{name}</h3>
        {!featured ? null : <Pill label="Featured" className="text-yellow-500 bg-[#FBBF24]/20 text-[10px]" />}
      </div>
      <p className='flex flex-wrap items-start gap-3 mt-2 text-sm text-gray-400'><span>₦{price}/Year</span> <span>{specs}</span> <span>{conversion}% Conversion</span> </p>
      <p className='text-gray-400 flex items-start gap-3 mt-2'><span className='text-xs'>{noOfViews} views</span> <span className='text-xs'>{noOfInquiries} Inquiries</span> <span className='text-xs'>{applications} Applications</span></p>
    </div>
  );
}

export default PerformStatsCard;