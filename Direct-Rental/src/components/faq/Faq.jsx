import Image from "next/image";
import FaqQuestions from "./FaqQuestions";

const Faq = () => {
  return(
    <section className='bg-[#F9F9F9] w-full pb-10 pt-20 px-1'>
      <div className="md:flex items-center justify-between max-w-[980px] mx-auto">
        <div className="relative max-w-sm md:w-full mx-auto">
          <Image src="/assets/images/faq.png" width={300} height={350} alt='Faq image' className="w-full h-auto hidden md:block"
 />
        </div>
        <div className="w-full px-2 md:px-5 md:max-w-[400px] mt-10 md:mt-0 mx-auto md:px-6 lg:px-0">
          <h4 className="text-blue-500 text-xs mb-5">Have Questions?</h4>
          <h2  className="text-2xl font-bold">Frequently Asked Questions</h2>
          <FaqQuestions />
        </div>
      </div>
    </section>
  );
}

export default Faq;