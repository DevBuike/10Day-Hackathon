import { FaMoneyBillAlt, FaUserCheck, FaClock, FaCheckCircle } from "react-icons/fa";
import { RiSparkling2Fill } from "react-icons/ri";
import { BsFillLightningChargeFill, BsShieldFillCheck } from "react-icons/bs";
import Button from "../layout/Button";

const LandlordCta = () => {
  return(
    <div className="text-white md:max-w-[450px]">
      <h4 className="text-3xl font-semibold">Are You A Landlord?</h4>
      <p className="text-xs my-5">List your property for free and connect directly with verified tenants. No middlemen, no commission fees, just direct relationships.</p>
      <div className="text-white text-xs grid grid-cols-2 gap-3 my-5">
        <div className="flex items-center gap-2 ">
          <div className="rounded border border-white-500 p-1"><FaMoneyBillAlt className="text-sm text-white-500" /></div>
          <p>No commission fees</p>
        </div>
        <div className="flex items-center gap-2 ">
          <div className="rounded border border-white-500 p-1"><FaUserCheck className="text-sm text-white-500" /></div>
          <p>Connect with verified tenants</p>
        </div>
        <div className="flex items-center gap-2 ">
          <div className="rounded border border-white-500 p-1"><FaClock className="text-sm text-white-500" /></div>
          <p>List in under 5 minutes</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded border border-white-500 p-1"><FaCheckCircle className="text-sm text-white-500" /></div>
          <p>Full control over your property</p>
        </div>
      </div>
      <div className="flex items-center gap-3 my-5">
        <Button label='Post a Property' className="bg-white text-blue-500 text-xs" />
        <Button label='Learn More' className="bg-white text-blue-500 text-xs" />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <RiSparkling2Fill className="text-sm text-yellow-500" />
          <p className="text-xs">Low Listing Fees</p>
        </div>
        <div className="flex items-center gap-2">
          <BsFillLightningChargeFill className="text-sm text-yellow-500" />
          <p className="text-xs">Instant Approval</p>
        </div>
        <div className="flex items-center gap-2">
          <BsShieldFillCheck className="text-sm text-yellow-500" />
          <p className="text-xs">Secure Platform</p>
        </div>
      </div>
    </div>
  );
}

export default LandlordCta;