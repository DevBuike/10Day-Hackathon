import React from 'react'
import dashboard from "../assets/dashboard-outline.png";
import purpleHouse from "../assets/purpleHouse.png";
import greeneye from "../assets/greeneye.png";
import wallet from "../assets/wallet.png";

import StepCard from '../components/StepCard';

export default function Intro() {
  return (
    <>
      <div className='border border-[#595B5A33] py-2 px-14 flex items-center justify-between'>
        <p className='font-nunito text-[27px] tracking-tight font-bold text-[#6168FE]'>DirectRenal</p>
        <button className='bg-[#6168FE] flex px-5 py-[15px] rounded-lg items-center justify-center'>
          <img className='h-5' src={dashboard} alt="dashboardOutlineImg" />
          <p className='text-white text-sm tracking-wide -mt-[2px] ml-2'>Launch Dashboard</p>
        </button>
      </div>

      <div className="flex flex-col justify-center items-center h-[calc(100vh-72px)]">
        <div className="text-center max-w-xl">
          <p className="text-4xl font-semibold mb-2">Manage Your Properties Like a Pro</p>
          <p className="leading-8">
            Complete property management dashboard for landlords. Upload listings, track engagement, handle payments, and grow your rental business.
          </p>
        </div>

        <div className='mt-6 flex gap-8'>
            <StepCard img={purpleHouse} title="Multiple Listing" bgcolor="#DBE9FE" subtitle="Upload unlimited properties with images, videos, and detailed descriptions" />
            <StepCard img={greeneye} title="View Tracking" bgcolor="#17A34A33" subtitle="Monitor listing views and track tenant inquiries in real-time" />
            <StepCard img={wallet} title="Easy Payment" bgcolor="#7A1DBC33" subtitle="Flexible payment options via Flutterwave and Paystack" />
        </div>

        <button className='bg-[#6168FE] mt-9 flex px-5 py-[15px] rounded-lg items-center justify-center'>
          <img className='h-5' src={dashboard} alt="dashboardOutlineImg" />
          <p className='text-white text-sm tracking-wide -mt-[2px] ml-2'>Launch Dashboard</p>
        </button>
      </div>
      
    </>
  )
}
