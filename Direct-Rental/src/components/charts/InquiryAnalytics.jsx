"use client";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


export default function InquiryAnalytics() {
    const series = [44, 55, 13, 33];
    const options = {
      chart: { type: "donut" },
      title: { text: "Inquiry Analytics" },
      labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
      colors: ["#6366F1", "#10B981", "#F59E0B", "#EF4444"], // custom colors
      legend: { position: "bottom" },
    };

  return (
      <div className="w-full p-2 bg-white rounded-lg border border-gray-200">
        <Chart options={options} series={series} type="donut"  className="w-full" />
      </div>
    );
}