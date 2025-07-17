import PerformanceOverview from "@/components/charts/PerformanceOverview";
import StatsCard from "./StatsCard";

const PropertyOverview = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-8 justify-between md:items-stretch">
      <div className="md:w-[70%] w-full">
        <PerformanceOverview />
      </div>
      <div className="flex flex-col gap-4 w-full md:w-[30%]">
        <div className="grid grid-cols-2 gap-3 justify-between items-stretch ">
          <div className="flex gap-4 flex-col text-center rounded border border-gray-200 py-2 px-5 bg-white">
            <h3 className="text-xl font-semibold">3</h3>
            <p className="text-xs md:text-sm">Active Listings</p>
          </div>
          <div className="flex gap-4 flex-col text-center rounded border border-gray-200 py-2 px-5 bg-white">
            <h3 className="text-xl font-semibold">1</h3>
            <p className="text-xs md:text-sm">Featured</p>
          </div>
        </div>
        
        <StatsCard title='Total Views' statsNumber={479} percent={12.5} />
        <StatsCard title='Total Inquiries' statsNumber={37} percent={-3} />
      </div>
      
    </div>
  );
}

export default PropertyOverview;