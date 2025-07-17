import React from 'react'

export default function StepCard({ img, title, subtitle, bgcolor }) {
  return (
    <div className='border border-[#E3E3E3] px-5 pb-5 pt-4 rounded-xl flex items-center flex-col max-w-52'>
        <div className='p-4 rounded-lg inline-flex items-center justify-center' style={{ backgroundColor: bgcolor }}>
            <img className='h-4' src={img} alt="" />
        </div>
        <div className="mt-5 text-center">
            <p className='font-semibold text-[15px]'>{title}</p>
            <p className='text-[13px] leading-[22px]'>{subtitle}</p>
        </div>
    </div>

  )
}
