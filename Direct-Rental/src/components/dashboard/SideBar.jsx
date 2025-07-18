'use client';
import Link from 'next/link';
import { useState } from 'react';
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineAnalytics, MdOutlineMessage, MdOutlineSettings, MdOutlineLogout } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";


const SideBar = () => {

  return (
    <aside className="hidden md:block w-[18%] h-screen bg-white text-black p-4 border border-gray-200 ">
      <div className="w-full mx-auto flex flex-col items-start justify-start">
        
        {/* Logo */}
        <Link href="/" className="text-blue-600 text-2xl font-bold whitespace-nowrap mt-5">
          DirectRental
        </Link>

        <nav className="hidden md:flex flex-col justify-start mt-10 w-full">
          <ul className="flex flex-col gap-4 text-gray-400">
            <li className="rounded active:text-blue-400 active:border border-blue-400 px-3 py-2 text-sm"><Link href="/dashboard" className='flex gap-2 items-center'><RiHome6Line  className='text-blue-400 text-sm' />
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
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex flex-col items-center gap-4 whitespace-nowrap mt-5">
          <Link href="#" className="text-blue-400 px-2 py-1 border border-blue-500 rounded flex gap-2 items-center"><MdOutlineLogout className='text-blue-400' /><span>
Log Out</span></Link>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;