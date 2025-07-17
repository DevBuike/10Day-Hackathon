import Button from '@/components/layout/Button'

const Hero = () => {
  return (
    <div style={{
        backgroundImage: 'url(/assets/images/bg/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}
      className="w-full h-[80vh] md:h-[90vh] rounded-[10px] mt-[80px] pt-[80px] px-[15px] lg:p-[10%]">
        <div className='custom-media text-white w-[80%] md:w-[60%] max-w-2xl sm:mt-20 md:mt-30 lg:mt-0'>
          <h1 className='custom-header-text text-2xl font-semibold lg:text-4xl lg:leading-[60px]'>
            A New Way to Rent: Direct Access to Landlords, Transparent Deals, and Homes You’ll Love
          </h1>
          <p className='custom-p-text pt-[20px]'>
            It’s simple: search listings, talk to landlords, and get the keys — all in one place.
          </p>
          <div className='lg:flex lg:gap-6 pt-[20px] mb-4 md:mb-0'>
            <Button label='Browse Available Homes' className='text-sm md:text-xl text-blue-500 bg-white mt-1 mr-3 md:mr-0' />
            <Button label='List Your Property' className='text-sm md:text-xl text-blue-500 bg-white mt-1' />
          </div>
        </div>
    </div>
  );
}

export default Hero;