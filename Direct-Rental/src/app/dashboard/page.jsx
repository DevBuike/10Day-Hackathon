"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

import DashHeader from "@/components/dashboard/DashHeader";
import SideBar from "@/components/dashboard/SideBar";
import PropertyOverview from "@/components/dashboard/PropertyOverview";
import ListedPropertyCard from "@/components/dashboard/ListedPropertyCard";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    router.push("/login");
    return null; // prevent flashing of content
  }

  return (
    <div className=" md:flex h-screen w-screen overflow-hidden">
      <SideBar />
      
      <main className="flex flex-col w-full lg:w-[82%] h-screen overflow-hidden bg-[#F9FAFB]">
        <DashHeader />
        <section className="overflow-y-auto p-5">
          <div className="md:flex justify-between items-center">
            <div>
              <h1 className="text-lg md:text-xl font-semibold">Property Dashboard</h1>
              <p className="text-gray-400 text-xs md:text-sm">Manage your property listings and track performance</p>
            </div>
            <div className="flex gap-2 items-center mt-3 md:mt-0">
              <Link href="#" className="rounded text-xs bg-blue-500 text-white py-2 px-5">Upgrade Plan</Link>
              <Link href="#" className="rounded text-xs bg-green-500 text-white py-2 px-5">Add Property</Link>
            </div>
          </div>

          {/* Overview chart and stats */}
          <PropertyOverview />

          {/*liste property section */}
          <div className="p-4 border border-gray-200 rounded mt-5 bg-white">
            <div className="text-gray-500 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between mb-3 ">
              <h2 className="text-sm md:text-lg font-semibold text-black">Property Listings</h2>
              <div className="flex items-center gap-2">
                <p className="text-sm">filter:</p>
                <select name="property-type" id="property-type" className="border border-gray-200 rounded-lg p-2 text-sm">
                  <option value={1}>All Properties</option>
                  <option value={2}>2 Bedroom</option>
                  <option value={3}>Studio</option>
                  <option value={4}>Shared</option>
                </select>
              </div>
            </div>
            <hr className='border border-gray-200 w-full' />

            <ListedPropertyCard 
            imageSrc='/assets/images/modern-2-bed.jpg' 
            name="Modern 2-Bedrrom apartment" 
            description="Luxury apartment with ocean view, fully furnished with modern amenities and 24/7 security." 
            featured={true}
            price="1,200,000" 
            specs="2 Beds, 2 Baths, 1 Kitchen"
            location="Lekki, Lagos" 
            noOfViews={137} 
            noOfInquiries={25}
            />

            <ListedPropertyCard 
            imageSrc='/assets/images/modern-studio.jpg' 
            name="Cozy Studio Apartment in Maitama" 
            description="Perfect for young professionals, fully equipped kitchen and modern bathroom facilities." 
            featured={false}
            price="800,000" 
            specs="Studio"
            location="Maitama, Abuja" 
            noOfViews={220} 
            noOfInquiries={53}
            />

            <ListedPropertyCard 
            imageSrc='/assets/images/shared-apartment.jpg' 
            name="Shared Apartment in New Haven" 
            description="Spacious shared living space with private bedrooms, shared kitchen and living area." 
            featured={false}
            price="200,000" 
            specs="Shared"
            location="New Haven, Enugu" 
            noOfViews={115} 
            noOfInquiries={31}
            />
          </div>
        </section>
      </main>
    </div>
  );
};
