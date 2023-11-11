import React from 'react'
import g2 from '../../../assets/g2.png'
import frame from '../../../assets/Frame 1000003103.png'
const FirstRight = () => {
  return (
    <div className='w-[395px] h-[455px] p-3 flex flex-col gap-2 border-[1px] rounded-[10.93px] border-[#C6CEF0]'>
      <div className='w-full flex justify-between '>
        <p>Highest Revenue Earned</p>
        <select id="Week" name="week" className='text-[14px] w-[77px] h-[32px] py-[5px] px-[4px] border-[1px] rounded-[4px] border-[#313945]'>
          <option value="volvo" >Top 5</option>
        </select>
      </div>

      <div className='flex gap-3 -mr-9'>
        <button className='border-[1px] px-[5px] py-[2px] border-[#313945] rounded-[4px] h-[24px] w-[82.78px] text-[12px] font-semibold'>Past Week</button>
        <button className='border-[1px] px-[5px] bg-[#313945] text-white py-[2px] border-[#313945] rounded-[4px] h-[24px] w-[86.48px] text-[12px] font-semibold'>Past Month</button>
        <button className='border-[1px] px-[5px] py-[2px] border-[#313945] rounded-[4px] h-[24px] w-[73.58px] text-[12px] font-semibold'>Past Year</button>
        <button className='border-[1px] px-[5px] py-[2px] border-[#313945] rounded-[4px] h-[24px] w-[65.31px] text-[12px] font-semibold'>All time</button>
      </div>

      <div className='relative'>
        <img src={g2} className='mt-4'/>
        <img src={frame} className='absolute top-[30px] left-[100px]'/>
      </div>
    </div>
  )
}

export default FirstRight