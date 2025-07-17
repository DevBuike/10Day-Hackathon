import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return(
    <footer className="bg-blue-500 w-full text-white py-20 px-4 md:px-10">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mx-auto mb-10 md:my-10 lg:px-20">
        <div className="w-full sm:col-span-2 md:col-span-1">
          <h2 className="text-2xl font-bold whitespace-nowrap">DirectRental</h2>
          <p className="text-xs text-[#ffffffd6] max-w-[50%] mt-5">Connecting tenants and landlords directly for transparent, low-fee rentals across Nigeria.</p>
        </div>
        <div className="w-full">
          <h4 className="text-xl font-bold whitespace-nowrap mt-3 md:mt-0 mb-1">Company</h4>
          <hr className="w-10 h-[1px] bg-white" />
          <ul className="flex flex-col gap-2 mt-5 text-sm text-[#ffffffd6]">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">How it works</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Press</Link></li>
          </ul>
        </div>
        <div className="w-full">
          <h4 className="text-xl font-bold whitespace-nowrap mt-3 md:mt-0 mb-1">Support</h4>
          <hr className="w-10 h-[1px] bg-white" />
          <ul className="flex flex-col gap-2 mt-5 text-sm text-[#ffffffd6]">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Landlords</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Survey</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="w-full h-full hidden sm:block">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63038.20544065435!2d7.479786378094497!3d9.073981692125885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1752270706384!5m2!1sen!2sng" width="100%" height="100%"  style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded"></iframe>
        </div>
      </div>
      <hr className="w-full h-[1px] bg-white" />
      <div></div>
    </footer>
  );
}

export default Footer;