import Button from "./Button";

const Explore = () => {
  return(
    <section className="bg-white md:flex">
      <div style={{
        backgroundImage: 'url(/assets/images/bg/explore-bg1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}} className="w-full h-80">
      </div>
      <div style={{ backgroundColor: '#6168FE',
        backgroundImage: 'url(/assets/images/bg/explore-bg2.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}
      className="w-full h-80 py-12 px-8 md:py-15 md:px-20">
        <div className='text-white w-[80%] md:w-[80%] max-w-2xl'>
          <h1 className='text-lg font-semibold lg:text-4xl lg:leading-[40px]'>
            Living Where You Love <br />Means Loving Your Life
          </h1>
          <p className='pt-[20px] text-sm'>
            We’re changing the rental game — giving you full control, lower costs, and zero stress.
          </p>
          <div className='md:flex md:gap-x-5 pt-[20px]'>
            <Button label='Explore Properties' className='text-sm md:text-xl text-blue-500 bg-white mt-1' />
          </div>
        </div>
    </div>

    </section>
  );
}

export default Explore;