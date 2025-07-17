"use client";
import React from 'react'
import StepCard from '../../components/onboarding/StepCard';
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";


export default function Intro() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    router.push("/login");
    return null; // prevent flashing of content
  }


  return (
    <>
      <div className='border border-[#595B5A33] py-2 px-3 sm:px-14 flex items-center justify-between'>
        <p className='font-nunito text-2xl sm:text-[27px] tracking-tight font-bold text-blue-500'>DirectRental</p>
        <button className='bg-blue-600 flex px-3 sm:px-5 py-2 sm:py-[15px] rounded-lg items-center justify-center cursor-pointer'>
          <img className='h-3 sm:h-5' src='/assets/images/dashboard-outline.png' alt="dashboardOutlineImg" />
          <p className='text-white text-xs sm:text-sm tracking-wide -mt-[2px] ml-2'>Launch Dashboard</p>
        </button>
      </div>

      <div className="flex flex-col justify-center items-center mt-10 mb-6 px-5">
        <div className="text-center max-w-xl">
          <p className="text-4xl font-semibold mb-2">Manage Your Properties Like a Pro</p>
          <p className="leading-8">
            Complete property management dashboard for landlords. Upload listings, track engagement, handle payments, and grow your rental business.
          </p>
        </div>

        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            <StepCard img='/assets/images/purpleHouse.png' title="Multiple Listing" bgcolor="#DBE9FE" subtitle="Upload unlimited properties with images, videos, and detailed descriptions" />
            <StepCard img='/assets/images/greeneye.png' title="View Tracking" bgcolor="#17A34A33" subtitle="Monitor listing views and track tenant inquiries in real-time" />
            <StepCard img='/assets/images/wallet.png' title="Easy Payment" bgcolor="#7A1DBC33" subtitle="Flexible payment options via Flutterwave and Paystack" />
        </div>

        <button className='bg-blue-600 mt-9 flex px-5 py-[15px] rounded-lg items-center justify-center cursor-pointer'>
          <img className='h-5' src='/assets/images/dashboard-outline.png' alt="dashboardOutlineImg" />
          <p className='text-white text-sm tracking-wide -mt-[2px] ml-2'>Launch Dashboard</p>
        </button>
      </div>
      
    </>
  )
}
