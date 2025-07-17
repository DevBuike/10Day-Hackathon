"use client";

import Chart from "react-apexcharts";

export default function PropertyPerformance() {
  
    const series = [
      { name: "Rents", data: [500, 850, 900, 400, 450] }
    ];
    const options = {
      chart: { type: "bar", height: 250 },
      title: { text: "Property Performance Comparison" },
      xaxis: {
        categories: ["Studio", "2Bed Flat", "SelfCon", "3Bed Flat", "Bungalow"]
      }
    };

  return (
    <div className="w-full p-3 bg-white rounded-lg border border-gray-200">
      <Chart options={options} series={series} type="bar" className="w-full min-h-[200px]" />
    </div>
  );
}