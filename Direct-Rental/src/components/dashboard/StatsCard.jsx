const StatsCard = ({title, statsNumber=0, percent=0}) => {
  return(
    <div className="rounded-lg border border-gray-200 bg-white p-3 ">
      <div className="flex justify-between items-start">
        <div >
          <p className="text-black text-xs font-medium">{title}</p>
          <h3 className="text-xl font-semibold mt-2">{statsNumber}</h3>
          <p className="text-gray-400 text-xs mt-2"><span className={percent < 0 ? 'text-red-500': 'text-green-500'}>{percent < 0 ? '': '+'}{percent}%</span> from last month</p>
        </div>
        <div className="p-2 bg-[#DBE9FE]">icon</div>
      </div>
    </div>
  );
}

export default StatsCard;