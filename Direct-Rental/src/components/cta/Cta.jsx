import CtaBox from "./CtaBox";
import LandlordCta from "./LandlordCta";

const Cta = () => {
  return(
    <section className="bg-gradient-to-r from-[#6168FEE5] to-[#17A34A80] w-full pb-20 pt-20 md:px-10">
      <div className="md:flex gap-2 px-7 md:px-15 lg:px-30 items-center justify-between ">
        <LandlordCta />
        <CtaBox />
      </div>
    </section>
  );
}

export default Cta;