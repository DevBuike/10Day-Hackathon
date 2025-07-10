import Image from 'next/image'
import Button from '@/components/layout/Button'

const Hero = () => {
  return (
    <div style={{
        backgroundImage: 'url(/assets/images/bg/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}
      className="w-full h-screen rounded-[10px] mt-[80px] pt-[80px] px-[10px] lg:p-[10%]">
        <div className='text-white w-[80%] md:w-[60%] max-w-2xl'>
          <h1 className='text-2xl font-semibold lg:text-4xl lg:leading-[60px]'>
            A New Way to Rent: Direct Access to Landlords, Transparent Deals, and Homes You’ll Love
          </h1>
          <p className='pt-[20px]'>
            It’s simple: search listings, talk to landlords, and get the keys — all in one place.
          </p>
          <div className='md:flex md:gap-x-5 pt-[20px]'>
            <Button label='Browse Available Homes' />
            <Button label='List Your Property' />
          </div>
        </div>
    </div>
  );
}

export default Hero;