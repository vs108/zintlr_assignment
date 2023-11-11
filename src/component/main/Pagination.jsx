import React from 'react'
import left from '../../assets/left.png'
import right from '../../assets/right.png'

const Pagination = () => {
  return (
    <div className='w-[1360px] mt-[30px] mb-[15px]'>
    <div className='gap-2 flex justify-center items-center'>
        <button className='w-[32px] h-[32px] border-[1px] border-[#DFE3E8] rounded-[4px] bg-[#919EAB]'> <img src={left}/></button>
        <button className='font-bold w-[32px] h-[32px] border-[1px] border-[#4da7f1] rounded-[4px] text-[#4da7f1]'>1</button>
        <button className='font-bold w-[32px] h-[32px] border-[1px] border-[#DFE3E8] rounded-[4px]'>2</button>
        <button className='font-bold w-[32px] h-[32px] border-[1px] border-[#DFE3E8] rounded-[4px]'>...</button>
        <button className='font-bold w-[32px] h-[32px] border-[1px] border-[#DFE3E8] rounded-[4px]'>9</button>
        <button className='font-bold w-[32px] h-[32px] border-[1px] border-[#DFE3E8] rounded-[4px]'>10</button>
        <button className='font-bold w-[32px] h-[32px] border-[1px] border-[#DFE3E8] rounded-[4px]'> <img src={right}/></button>
    
    </div>
    </div>
  )
}

export default Pagination