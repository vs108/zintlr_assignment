import React from 'react'

import add from '../../assets/add.png'
import heroone from '../../assets/hero1.png'
import contact from '../../assets/contact.png'
import lastHero from '../../assets/lastHerom.png'
import ex from '../../assets/ex.png'
import iconsec from '../../assets/icon2.png'


import { Link } from 'react-router-dom'


const HeroSecond = () => {
    return (
        <>
            <div className='flex gap-2'>
                <div className='ml-[50px] bg-[#e1f8ff] w-[533px] h-[153px] p-5 flex justify-between rounded-[13px]'>
                    <div>
                        <div className='flex gap-2'>
                            <p className='text-[25px]'>Hello Shakir!</p>
                        </div>

                        <div className='text-[14px] mb-3 text-[#7B7B7E]'>
                        You have 134 consumers this week.
                        </div>
                        
                        <div className='flex gap-2'>
                        <div className=' flex text-center gap-2 bg-[#313945] w-[184px] h-[40px] rounded-[10px] border-[1px] px-[10px] py-[5px]'>
                            <img src={add} className=' mt-[6px] w-[22px] h-[16px]' />
                            <button className='text-white font-semibold'>Add Consumers</button>
                        </div>
                        <div className=' flex text-center gap-2  bg-[#e1f8ff] w-[202px] h-[40px] border-[#313945] rounded-[10px] border-[1px] px-[5px] py-[5px]'>
                            <img src={iconsec} className=' mt-[3px] w-[26px] h-[25px]' />
                            <Link to="/" className='text-[#313945] text-[15px] mt-[4px] font-semibold'>Manage Consumers</Link>
                            
                        </div>
                        </div>
                    </div>

                    <div>
                        <img src={heroone} />
                    </div>
                </div>

                <div className='flex flex-col p-8 w-[249px] h-[153px] rounded-[13px] bg-[#f8e1cd]'>
                    <div className='flex gap-2'>
                        <img src={contact} className='w-[21.67px] h-[20px]' />
                        <p className='text-[18px]'>You have</p>
                        <p className='text-[28px] -mt-2'>276</p>  
                        
                    </div>

                    <div className='text-[16px] -mt-2'>KYC approval pending</div>

                    <button className='w-[98px] h-[38px] rounded-[4px] pl-[5px] pr-[10px] pb-[10px] pt-[5px] bg-[#313945] text-white text-[16px] mt-2'>View List</button>
                </div>

                <div className='flex flex-col p-8 w-[249px] h-[153px] rounded-[13px] bg-[#f4e1ea]'>
                    <div className='flex gap-2'>
                        <img src={ex} className='w-[21.67px] h-[20px]' />
                        <p className='text-[18px]'>There are</p>
                        <p className='text-[28px] -mt-2'>182</p>
                        
                    </div>

                    <div className='text-[16px] -mt-2'> high risk consumers</div>

                    <button className='w-[98px] h-[38px] rounded-[4px] pl-[5px] pr-[10px] pb-[10px] pt-[5px] bg-[#313945] text-white text-[16px] mt-2'>View List</button>


                </div>

                <div className='flex flex-col p-8 w-[249px] h-[153px] rounded-[13px] bg-[#d1dff3]'>
                    <div className='flex gap-2'>
                        <img src={lastHero} className='w-[21.67px] h-[20px]' />
                        <p className='text-[18px]'>There are </p>
                        <p className='text-[28px] -mt-2'>32</p>
                         
                    </div>

                    <div className='text-[16px] -mt-2'>tickets open</div>

                    <button className='w-[98px] h-[38px] rounded-[4px] pl-[5px] pr-[10px] pb-[10px] pt-[5px] bg-[#313945] text-white text-[16px] mt-2'>View List</button>
                </div>


            </div>
        </>
    )
}

export default HeroSecond