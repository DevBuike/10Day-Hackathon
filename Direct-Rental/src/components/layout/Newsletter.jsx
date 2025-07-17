import Button from './Button';

const Newsletter = () => {
  return(
    <section className='bg-white w-full mx-auto pb-10 pt-20'
    style={{
        backgroundImage: 'url(/assets/images/bg/newsletter-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}>
      <div className='w-[80%] max-w-[620px] text-center mx-auto'>
        <h2 className="text-3xl font-bold mb-5">Subscribe To Our Newsletter</h2>
        <p className="text-xs text-gray-400">
          Subscribe & get updates in your inbox
        </p>
      </div>
      <div className="w-[90%] max-w-[980px] mx-auto">
        <form action="#">
          <div className='grid grid-cols-1 sm:flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 mt-8'>
            <input type="text" placeholder="Your Name" className='text-gray-500 border border-gray-400 p-2 rounded' />
            <input type="email" placeholder="Your Email Address" className='text-gray-500 border border-gray-400 p-2 rounded' />
            <Button label='Subscribe Now' type='submit' className=' bg-blue-500 text-white px-5' />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;