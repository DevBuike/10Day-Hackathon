import StepCard from "./HowItWorksStepsCard";

const HowItWorks = () => {
  return(
    <section className='bg-[#F9F9F9] w-full mx-auto mt-10 pb-10 pt-20'>
      <div className='w-[80%] max-w-[620px] text-center mx-auto'>
        <h2 className="text-3xl font-bold mb-5">How it Works</h2>
        <p className="text-xs text-gray-400">
          Finding your next home is simple with our direct rental platform.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-[90%] max-w-[980px] mx-auto">
        <StepCard stepImage='/assets/images/search-select.png' step='01' stepTitle='Search & Select' content='Search listings by location, price, and property type. All listings are verified and up-to-date.' />
        <StepCard stepImage='/assets/images/contact-landlord.png' step='02' stepTitle='Contact Landlord' content='Message or call the landlord directly through our secure platform. No middlemen involved.' />
        <StepCard stepImage='/assets/images/secure-lease.png' step='03' stepTitle='Secure Lease' content='Complete the rental process with transparent terms and secure documentation.' />
      </div>
      
    </section>
  );
}

export default HowItWorks;