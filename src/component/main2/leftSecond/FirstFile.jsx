import React from 'react'

import firstFile from '../../../assets/fistfile.png'
import second from '../../../assets/ant-design_info-circle-filled.png'

const FirstFile = () => {
  return (
    <div className='flex gap-2 w-full h-[124px] rounded-[10px] border-[1px] border-[#C6CEF0]'>
        <div className='flex gap-4 w-[293.55px] h-full items-center p-3 rounded-[10px] bg-[#E2E6F7]'>
            <img src={firstFile} className='w-[79.73px] h-[64.5px]'/>
            <div className='flex flex-col'>
                <p className='text-[18px] leading-[21.6px]'>Total Consumers</p>
                <p className='text-[35px] leading-[42px]'>1,342</p>
            </div>
        </div>

        <div className='flex gap-8 w-[630px] h-[124px] p-9'>
            <div className='flex flex-col gap-4 w-3/7 h-full'>
                <div >
                    <div className='flex justify-between'>
                        <p className='flex text-[16px] leading-[19.2px]'>Direct Consumers 
                            <img src={second} className='ml-2 w-[15.45px] h-[15px] align-baseline'/>
                        </p>

                        <p className='text-[20px] leading-[24px]'>
                            342
                        </p>
                    </div>
                </div>

                <div >
                    <div className='flex justify-between'>
                        <p className='flex text-[15px] leading-[19.2px]'>Through Associate 
                            <img src={second} className='ml-2 w-[15.45px] h-[15px] align-baseline'/>
                        </p>

                        <p className=' ml-6 text-[20px] leading-[24px]'>
                            342
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-2 w-4/7 h-full'>
                <div >
                    <div className='flex justify-between'>
                        <p className='flex text-[16px] leading-[19.2px]'>Through Field Executives 
                            <img src={second} className='ml-1 w-[15.45px] h-[15px] align-baseline'/>
                        </p>

                        <p className='text-[20px] leading-[24px]'>
                            342
                        </p>
                    </div>
                </div>

                <div >
                    <div className='flex justify-between'>
                        <p className='flex text-[16px] leading-[19.2px]'>Through Sales Executives 
                            <img src={second} className='ml-2 w-[15.45px] h-[15px] align-baseline'/>
                        </p>

                        <p className='ml-6 text-[20px] leading-[24px]'>
                            342
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstFile