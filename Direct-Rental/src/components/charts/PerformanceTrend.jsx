"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


export default function PerformanceTrend() {
  const options = {
    chart: {
      type: "line",
      dropShadow: {
          enabled: true,
          top: 4,
          left: 2,
          blur: 6,
          color: "#000",
          opacity: 0.5,
        },
      toolbar: {
        show: false,
      },
      height: 250,
      zoom: {
        enabled: false,
      },
    },
    title: { text: "Performance Trend" },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#4F46E5", "#059669", "#F59E0B"],

    },
    xaxis: {
      categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      title: {
        text: "Performance",
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    colors: ["#6366F1", "#10B981", "#F59E0B"],
  };

  const series = [
    {
      name: "Views",
      data: [300, 100, 480, 150, 400, 800, 320, 450, 720],
    },
    {
    name: "Inquiries",
    data: [200, 140, 230, 150, 390, 500, 150, 130, 460],
    },
    {
      name: "Applications",
      data: [80, 70, 100, 160, 240, 220, 160, 150, 270],
    },

  ];

  return (
    <div className="w-full p-4 bg-white rounded-lg border border-gray-200">
      <Chart options={options} series={series} type="line" height={350} className="w-full" />
    </div>
  );
}