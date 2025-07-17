import GuestCard from "./GuestCard";

const TestmonialCard = ({ title, comment  }) => {
  return(
    <div className="p-5 w-full bg-white shadow-md rounded">
      <h4 className="text-xs font-semibold">{title}</h4>
      <p className="text-gray-400 text-xs pt-2">{comment}</p>
      <GuestCard guestImage='/assets/images/david.jpg' guestName='Kola Emeka Adamu' profession='Director, CBN'  />
    </div>
  );
}

export default TestmonialCard;

//<GuestCard guestImage='assets/images/david.png' guestName='Ikechukwu Okafor' profession='Enterprenuer'  />
// <GuestCard guestImage='assets/images/david.png' guestName='farooq Ishaya' profession='Civil Engineer'  />