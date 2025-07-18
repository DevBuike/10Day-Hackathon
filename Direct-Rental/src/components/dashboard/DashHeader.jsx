'use client';
import Link from 'next/link';
import { useState } from 'react';
import Pill from './Pill';
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineAnalytics, MdOutlineMessage, MdOutlineSettings, MdOutlineLogout } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";

const DashHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-white text-black py-4 px-4 md:px-8 w-full border border-gray-200">
      <div className="flex items-center md:justify-end justify-between">
        
        {/* Logo */} 
        <Link href="/" className="md:hidden text-blue-600 text-xl md:text-2xl font-bold whitespace-nowrap">
          DirectRental
        </Link>

        {/* user highlight */}
        <div className="flex items-center gap-2 md:gap-4 whitespace-nowrap ">
          <Pill label='verified' className='hidden md:block text-green-500 bg-[#17A34A42]'/>
          <div className='hidden md:flex items-center gap-2'>
            <div className='rounded-full bg-blue-600 text-white text-xs text-center p-2'>DB</div>
            <div className=''>
              <p className='text-xs font-semibold'>Hello DevBuike!</p>
              <p className='text-gray-300 text-xs'>Premium Plan</p>
            </div>
          </div>
        
          {/* Hamburger for mobile/tablet */}
          <button
            className="md:hidden  text-black focus:outline-none ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {menuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-[60%] bg-white p-4 z-40 rounded shadow-lg">

          <div className='flex flex-col items-start gap-2 '>
            <div className='flex items-center gap-2'>
              <div className='rounded-full bg-blue-600 text-white text-xs text-center p-2'>DB</div>
              <div className=''>
                <p className='text-xs font-semibold'>Hello DevBuike!</p>
                <p className='text-gray-300 text-xs'>Premium Plan</p>
              </div>
            </div>
            <Pill label='verified' className='text-green-500 bg-[#17A34A42]'/>
          </div>
          

          <ul className="flex flex-col gap-4 text-gray-400 mt-2">
            <li className="rounded active:text-blue-400 active:border border-blue-400 px-3 py-2 text-sm"><Link href="/dashboard" className='flex gap-2 items-center'><RiHome6Line  className='text-blue-400' />
Overview</Link></li>
            <li className="rounded active:text-blue-400 active:border border-blue-400 px-3 py-2 text-sm"><Link href="/dashboard/analytics" className='flex gap-2 items-center'><MdOutlineAnalytics className='text-blue-400' />
Analytics</Link></li>
            <li className="rounded active:text-blue-400 active:border border-blue-400 px-3 py-2 text-sm"><Link href="#" className='flex gap-2 items-center'><FaClipboardList className='text-blue-400' />
Listings</Link></li>
            <li className="rounded active:text-blue-400 active:border border-blue-400 px-3 py-2 text-sm"><Link href="#" className='flex gap-2 items-center'><MdOutlineMessage className='text-blue-400' />
Messages</Link></li>
            <li className="rounded active:text-blue-400 active:border border-blue-400 px-3 py-2 text-sm"><Link href="#" className='flex gap-2 items-center'><MdOutlineSettings className='text-blue-400' />
Settings</Link></li>
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <Link href="#" className="text-blue-400 px-2 py-1 border border-blue-500 rounded flex gap-2 items-center"><MdOutlineLogout className='text-blue-400' /><span>
            Log Out</span></Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default DashHeader;