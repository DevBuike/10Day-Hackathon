"use client";

import Chart from "react-apexcharts";

export default function RevenueAnalytics() {
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
    colors: ["#6366F1", "#F59E0B"],
  };

  const series = [
    {
      name: "Sales",
      data: [100, 150, 380, 150, 220, 800, 320, 250, 720],
    },
    {
    name: "Inquiries",
    data: [200, 140, 490, 150, 390, 1000, 500, 130, 860],
    },

  ];

  return (
    <div className="w-full p-4 bg-white rounded-lg border border-gray-200">
      <Chart options={options} series={series} type="line" height={350} className="w-full" />
    </div>
  );
}