"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

import DashHeader from "@/components/dashboard/DashHeader";
import SideBar from "@/components/dashboard/SideBar";
import StatsCard from "@/components/dashboard/StatsCard";
import PerformanceTrend from "@/components/charts/PerformanceTrend";
import PropertyPerformance from "@/components/charts/PropertyComparison";
import PerformStatsCard from "@/components/dashboard/PerformStatsCard";
import InquiryAnalytics from "@/components/charts/InquiryAnalytics";
import RevenueAnalytics from "@/components/charts/RevenueAnalytics";

const Analytics = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    router.push("/login");
    return null; // prevent flashing of content
  }

  return(
    <div className=" md:flex h-screen w-screen overflow-hidden">
      <SideBar />
      
      
      
      <main className="flex flex-col w-[85%] h-screen overflow-hidden bg-[#F9FAFB]">
        <DashHeader />
        <section className="overflow-y-auto p-5">
          <div className="flex flex-col lg:flex-row gap-3 lg:justify-between items-start lg:items-center">
            <div>
              <h1 className="text-lg md:text-xl font-semibold">Analytics Dashboard</h1>
              <p className="text-gray-400 text-xs md:text-sm">Track performance and gain insights into your property listings</p>
            </div>
            <div className="flex gap-2 items-center mt-3 md:mt-0">
              <div className="flex items-start md:items-center gap-2 flex-col md:flex-row">
                <select name="property-type" id="property-type" className="border border-gray-200 rounded-lg p-3 text-sm">
                  <option value={1}>All Properties</option>
                  <option value={2}>2 Bedroom</option>
                  <option value={3}>Studio</option>
                  <option value={4}>Shared</option>
                </select>
                <div className="border border-gray-200 rounded-lg p-1 text-sm flex gap-2 items-center">
                  <Link href="#" className="rounded-sm text-xs  text-black py-2 px-2">7 Days</Link>
                  <Link href="#" className="rounded-sm text-xs bg-blue-500 text-white py-2 px-2">30 Days</Link>
                  <Link href="#" className="rounded-sm text-xs  text-black py-2 px-2">90 Days</Link>
                  <Link href="#" className="rounded-sm text-xs  text-black py-2 px-2">1 Year</Link>
                </div>
              </div>
            </div>
          </div>

          {/* stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 items-stretch justify-between mt-5">
            <StatsCard title='Total Views' statsNumber={2403} percent={15.3} />
            <StatsCard title='Total Inquiries' statsNumber={230} percent={8.7} />
            <StatsCard title='Application' statsNumber={76} percent={12.2} />
            <StatsCard title='Conversation Rate' statsNumber={9.6} percent={-2.1} />
          </div>

          {/* performance trend chart */}
          <div className="mt-5">
            <PerformanceTrend />
          </div>

          <div className=' flex flex-col lg:flex-row gap-4 mt-5 items-stretch'>
            <div className="w-full lg:w-[65%]">
              <PropertyPerformance />
            </div>
            <div className=" bg-white border border-gray-200 rounded pt-5 px-5 w-full lg:w-[35%]">
              <h2 className="text-sm md:text-xl font-semibold my-4">Top Performing Properties</h2>
              <PerformStatsCard 
              name="Modern 2-Bedroom, Victoria Island"
              featured={true} applications={12} price='2,500,000' specs='2 Bedroom' conversion={7.5} noOfViews={156} noOfInquiries={12} />

              <PerformStatsCard 
              name="Cozy studio, Maitama"
              featured={false} applications={12} price='2,500,000' specs='2 Bedroom' conversion={7.5} noOfViews={156} noOfInquiries={12} />

              <PerformStatsCard 
              name="Shared Apartment, New Haven"
              featured={false} applications={12} price='2,500,000' specs='2 Bedroom' conversion={7.5} noOfViews={156} noOfInquiries={12} />
            </div>
          </div>

          <div className=' flex flex-col md:flex-row gap-2 mt-5 items-stretch'>
            <div className="w-full md:w-[50%]">
              <InquiryAnalytics />
            </div>
            <div className=" w-full md:w-[50%]">
              <RevenueAnalytics />
            </div>
          </div>
          
          
        </section>
      </main>
    </div>
  );
}

export default Analytics;