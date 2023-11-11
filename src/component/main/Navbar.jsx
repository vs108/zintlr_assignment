import React from 'react'
import search from '../../assets/search.png'
import first from '../../assets/11.png'
import second from '../../assets/12.png'
import third from '../../assets/13.png'
import fourth from '../../assets/14.png'
import india from '../../assets/india.png'
import drop from '../../assets/dropdown.png'
import graph from '../../assets/graph.png'
import graph2 from '../../assets/graph2.png'
import dp from '../../assets/dp.png'

const Navbar = () => {
  return (
    <>
      <div className='w-[1360px] h-[85px] mt-[38px] ml-[58px] flex justify-between'>
        {/* left */}
        <div className='flex relative'>
          <input
            placeholder='Search (Eg: Rewards)'
            className='bg-vik-gray p-4 w-[374px] h-[50px] rounded-[30px]'
          />
          <img src={search} className='absolute top-[15px] left-[340px]' />
        </div>

        {/* right */}
        <div className='flex gap-2'>
          <div className='flex gap-2'>
            <img src={first} className='w-[32px] h-[32px]' />
            <img src={second} className='w-[32px] h-[32px]' />
            <img src={third} className='w-[32px] h-[32px]' />
            <img src={fourth} className='w-[32px] h-[32px]' />
          </div>

          <div className='w-[310px] h-[83px] rounded-[10.93px] bg-vik-gray1 border-bir-gray1 border-2 -mt-5 p-3 flex gap-2'>
            <div>
              <p className='text-orange-vik'>Gold</p>
              <div className='flex'>
                <img src={india} className='w-[18px] h-[18px] rounded-full absolute top-[60px]' />
                <input
                  className='w-[60px] border-bir-gray1 border-2 pl-5'
                  type='dropdown'
                  value='IN'
                />
                <img src={drop} className='w-[6px] h-[10.5px] rounded-full absolute ml-[45px] mt-[8px]' />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <img src={graph} />
              <p className='text-[12px] font-medium leading-[14px] text-right text-green-vik'>+0.34%</p>
            </div>

            <div className='flex flex-col gap-1'>
              <div className='flex gap-2'>
                <p className='text-[14px]'>Buy: ₹7,390.00</p>
                <img src={graph2} className='h-[16px] w-[17px] mt-1' />
              </div>

              <div className='flex gap-2'>
                <p className='text-[14px]'>Sell: ₹7,090.00</p>
                <img src={graph2} className='h-[16px] w-[17px] mt-1' />
              </div>
            </div>

          </div>

          <div className='flex gap-2 bg-dp-col w-[129px] h-[85px] -mt-5 rounded-[10px] mr-[50px]'>
            <img src={dp} />
            <img src={drop} className='w-[6px] h-[10.5px]  rounded-full mt-[30px]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar