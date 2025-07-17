import Image from "next/image";
import { FaStar } from "react-icons/fa";

const GuestCard = ({ guestImage, guestName, profession, rating=4.8 }) => {
  return(
    <div className="flex items-center justify-between mt-2">
      <div className="relative flex items-center gap-3">
        <Image src={guestImage} alt={guestName} width={40} height={40} className="rounded-full"/>
        <div>
          <h3 className="text-xs font-semibold">{guestName}</h3>
          <p className="text-gray-400 text-xs ">{profession}</p>
        </div>
      </div>
      <div className="flex gap-1">
        <FaStar className="text-yellow-500 text-xs" />
        <p className="text-xs text-gray-400">{rating}</p>
      </div>
    </div>
  );
}

export default GuestCard;