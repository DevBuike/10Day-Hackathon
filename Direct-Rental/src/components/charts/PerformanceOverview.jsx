"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


export default function PerformanceOverview() {
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
    title: { text: "Performance Overview" },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#4F46E5"],

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
    colors: ["#6366F1"],
  };

  const series = [
    {
      name: "Performance",
      data: [0, 100, 200, 150, 400, 500, 320, 450, 220],
    },
  ];

  return (
    <div className="w-full p-2 bg-white rounded-lg border border-gray-200">
      <Chart options={options} series={series} type="line" height={300} className="w-full" />
    </div>
  );
}