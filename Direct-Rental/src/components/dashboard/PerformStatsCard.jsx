import { FaRegEye } from "react-icons/fa";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { FaFileCirclePlus } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";

import Pill from '@/components/dashboard/Pill';

const PerformStatsCard = ({name='', featured=false, applications=0, price='', specs='', conversion=0, noOfViews=0, noOfInquiries=0}) => {
  return(
    <div className='py-5 px-2 bg-[#F9FAFB] rounded mb-3'>
      <div className="flex items-center justify-between gap-2">
        <h3 className='text-xs md:text-sm font-semibold md:mr-3'>{name}</h3>
        {!featured ? null : <Pill label="Featured" className="text-yellow-500 bg-[#FBBF24]/20 text-[10px]" />}
      </div>
      <p className='flex flex-wrap items-start gap-3 mt-2 text-sm text-gray-400'><span>₦{price}/Year</span> <span className='flex gap-1 items-center'><CiHome />{specs}</span> <span>{conversion}% Conversion</span> </p>
      <p className='text-gray-400 flex items-start gap-3 mt-2'><span className='text-xs flex gap-1 items-center'><FaRegEye />{noOfViews} views</span> <span className='text-xs flex gap-1 items-center'><LuMessageCircleQuestion />{noOfInquiries} Inquiries</span> <span className='text-xs flex gap-1 items-center'><FaFileCirclePlus />{applications} Applications</span></p>
    </div>
  );
}

export default PerformStatsCard;