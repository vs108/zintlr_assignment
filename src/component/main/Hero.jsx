import React from 'react'

import add from '../../assets/add.png'
import heroone from '../../assets/hero1.png'
import contact from '../../assets/contact.png'
import lastHero from '../../assets/lastHerom.png'
import ex from '../../assets/ex.png'


import { Link } from 'react-router-dom'


const Hero = () => {
    return (
        <>
            <div className='flex gap-2'>
                <div className='ml-[50px] bg-[#e7f3f7] w-[533px] h-[153px] flex justify-between rounded-[13px]'>
                    <div className='flex flex-col gap-2 p-5'>
                        <div className='flex gap-2'>
                            
                            <Link to="/manageConsumers" className='text-[#1FB9FC]'>Consumer > Manage Consumers</Link>
                        </div>

                        <div>
                            Actions
                        </div>

                        <div className=' flex text-center gap-2 bg-[#313945] w-[184px] h-[40px] rounded-[10px] border-[1px] px-[10px] py-[5px]'>
                            <img src={add} className=' mt-[6px] w-[22px] h-[16px]' />
                            <button className='text-white'>Add Consumers</button>
                        </div>
                    </div>

                    <div>
                        <img src={heroone} />
                    </div>
                </div>

                <div className='flex flex-col p-8 w-[249px] h-[153px] rounded-[13px] bg-[#edd3b9]'>
                    <div className='flex gap-2'>
                        <img src={contact} className='w-[21.67px] h-[20px]' />
                        <p className='text-[28px] -mt-2'>276</p>
                        <p className='text-[18px]'>KYC</p>
                    </div>

                    <div className='text-[16px] -mt-2'>Approval Pending</div>

                    <button className='w-[98px] h-[38px] rounded-[4px] pl-[5px] pr-[10px] pb-[10px] pt-[5px] bg-[#313945] text-white text-[16px] mt-2'>View List</button>
                </div>

                <div className='flex flex-col p-8 w-[249px] h-[153px] rounded-[13px] bg-[#f4e1ea]'>
                    <div className='flex gap-2'>
                        <img src={ex} className='w-[21.67px] h-[20px]' />
                        <p className='text-[28px] -mt-2'>182 </p>
                        <p className='text-[18px]'>high risk</p>
                    </div>

                    <div className='text-[16px] -mt-2'> consumers</div>

                    <button className='w-[98px] h-[38px] rounded-[4px] pl-[5px] pr-[10px] pb-[10px] pt-[5px] bg-[#313945] text-white text-[16px] mt-2'>View List</button>


                </div>

                <div className='flex flex-col p-8 w-[249px] h-[153px] rounded-[13px] bg-[#d1dff3]'>
                    <div className='flex gap-2 mb-[10px]'>
                        <img src={lastHero} className='w-[21.67px] h-[20px]' />
                        <p className='text-[28px] -mt-2'>32 </p>
                        <p className='text-[18px]'>tickets open</p>
                    </div>

                    <button className='w-[98px] h-[38px] rounded-[4px] pl-[5px] pr-[10px] pb-[10px] pt-[5px] bg-[#313945] text-white text-[16px] mt-2'>View List</button>
                </div>


            </div>
        </>
    )
}

export default Hero