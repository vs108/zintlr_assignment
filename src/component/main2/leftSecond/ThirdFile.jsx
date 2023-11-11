import React from 'react'
import gmain from '../../../assets/gmain.png'

const ThirdFile = () => {
  return (
    <div className='w-[904px] h-[540px] border-[1px] border-[#C6CEF0] p-4 rounded-[10.93px] mb-[100px] flex flex-col'>
        <p className='text-[18px] font-normal'>Consumer Analysis</p>

        <div className='h-[26px] w-full flex justify-between p-10 border-b-[#E2E6F7] border-b-[1px]'>
            <div className='flex w-1/3 justify-between'>
                <p className='text-[16px] font-bold text-[#3896FF] border-[#3896FF]'>Activity</p>
                <p className='[text-16px]'>Stock</p>
                <p className='[text-16px]'>Volume</p>
            </div>

            <div className='flex gap-3 -mr-9'>
                <button className='border-[1px] px-[5px] py-[10px] border-[#313945] rounded-[4px] h-[35px] w-[82.78px] text-[12px] font-semibold'>Past Week</button>
                <button className='border-[1px] px-[5px] bg-[#313945] text-white py-[10px] border-[#313945] rounded-[4px] h-[35px] w-[82.78px] text-[12px] font-semibold'>Past Month</button>
                <button className='border-[1px] px-[5px] py-[10px] border-[#313945] rounded-[4px] h-[35px] w-[82.78px] text-[12px] font-semibold'>Past Year</button>
                <button className='border-[1px] px-[5px] py-[10px] border-[#313945] rounded-[4px] h-[35px] w-[82.78px] text-[12px] font-semibold'>All time</button>
            </div>
        </div>

        <div className='flex justify-end mt-2 gap-2'>
            <select id="Week" name="week" className='text-[14px] w-[163px] h-[40px] py-[5px] px-[4px] border-[1px] rounded-[4px] border-[#313945]'>
                <option value="volvo" >Filter By Associates</option>
            </select>

            <select id="Week" name="week" className='text-[14px] w-[128px] h-[40px] py-[5px] px-[4px] border-[1px] rounded-[4px] border-[#313945]'>
                <option value="volvo">Filter By zone</option>
            </select>

            <select id="Week" name="week" className='text-[14px] w-[189px] h-[40px] py-[5px] px-[4px] border-[1px] rounded-[4px] border-[#313945]'>
                <option value="volvo">Filetr By Accounttype</option>
            </select>
        </div>

        <div>
            <img src={gmain} className='w-[749px] h-[305px] ml-8 mt-4'/>
        </div>
    </div>  
  )
}

export default ThirdFile