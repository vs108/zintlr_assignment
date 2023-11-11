import React from 'react'
import logo from '../assets/logo.png';
import first from '../assets/1.png';
import second from '../assets/2.png';
import third from '../assets/3.png';
import fourth from '../assets/4.png';
import fifth from '../assets/5.png';
import sixth from '../assets/6.png';
import seventh from '../assets/7.png';
import eighth from '../assets/8.png';
import ninth from '../assets/9.png';
import store from '../assets/10store.png';
import './sidebar.css'

const Sidebar = () => {
    return (
        <>
            <div className='flex flex-col w-[308px] h-[1118px] bg-[#F6FAFC]'>
                <div className='flex mt-[49px] ml-[31px]'>
                    <img src={logo} alt="logo" className='w-[29.41px] h-[29.41px]' />
                    {/* font remaining */}
                    <p className='font-medium text-[20px] leading-[24.2px] text-regal-blue font-lato'>ZINTLR</p>
                </div>

                <div className='flex flex-col gap-8 mt-[40px] ml-[23px]'>
                    <div className='flex  gap-2'>
                        <img src={first} className='w-[22.32px] h-[24.55px] align-baseline' />
                        <p className='font-medium text-[18px] leading-[21.60px] opacity-50 mt-1'>Dashboard</p>
                    </div>

                    <div className='flex gap-2'>
                        <img src={second} className='w-[22.32px] h-[24.55px] align-baseline' />
                        <p className='font-medium text-[18px] leading-[21.60px] opacity-50 mt-1'>Bullion Operations</p>
                    </div>

                    <div className='flex gap-2'>
                        <img src={third} className='w-[22.32px] h-[24.55px] align-baseline' />
                        <p className='font-medium text-[18px] leading-[21.60px] opacity-50 mt-1'>Transactions</p>
                    </div>

                    <div className='flex gap-2'>
                        <img src={fourth} className='w-[22.32px] h-[24.55px] align-baseline' />
                        <p className='font-medium text-[18px] leading-[21.60px] opacity-50 mt-1'>Your Network</p>
                    </div>

                    {/* pending */}
                    <div className='flex gap-2 bg-[#4DAEFF] w-[253px] rounded-[30px] -ml-4 p-4'>
                        <img src={fifth} className='w-[22.32px] h-[24.55px] align-baseline bg-white rounded-full' />
                        <p className='font-medium text-[18px] leading-[21.60px] opacity-50 mt-1'>Consumers</p>
                    </div>

                    <div className='flex gap-2'>
                        <img src={sixth} className='w-[22.32px] h-[24.55px] align-baseline' />
                        <p className='font-medium text-[18px] leading-[21.60px] opacity-50 mt-1'>Other Operations</p>
                    </div>

                    <div className='flex gap-2'>
                        <img src={seventh} className='w-[22.32px] h-[24.55px] align-baseline' />
                        <p className='font-medium text-[18px] leading-[21.60px] opacity-50 mt-1'>Manage Bank Accounts</p>
                    </div>

                    <div className='flex gap-2'>
                        <img src={eighth} className='w-[22.32px] h-[24.55px] align-baseline' />
                        <p className='font-medium text-[18px] leading-[21.60px] opacity-50 mt-1'>FAQ</p>
                    </div>

                    <div className='flex gap-2'>
                        <img src={ninth} className='w-[22.32px] h-[24.55px] align-baseline' />
                        <p className='font-medium text-[18px] leading-[21.60px] opacity-50 mt-1'>Customize Dashboard</p>
                    </div>

                </div>

                <div className='ml-[23px] mt-20 flex flex-col'>
                    <p className='font-medium text-[17px] leading-[20.4px] font-lato'>Your Stock</p>

                    <div className='bg-[#4DAEFF] p-4 w-[250px] h-[135px] relative rounded-e-lg rounded-bl-lg'>
                        <img className='absolute top-1 left-0' src={store} />
                        <div className='bg-white w-[218px] h-[110px] ml-2 flex flex-col p-2 gap-2 rounded-lg'>
                            <div className='flex gap-2 mt-2 ml-2'>
                                <div className='flex flex-col'>
                                    <p className='text-[16px] font-normal leading-[19.2px]'>TruCoin <span className='text-orange-vik'>Gold</span></p>
                                    <p className='text-[12px] font-medium leading-[14px] text-left text-green-vik'>$6.18(+1.82%)</p>
                                </div>
                                <p className='text-[16px] font-semibold leading-[19.2px]'>
                                    7.3 k gm
                                </p>
                            </div>

                            <div className='flex gap-2 ml-2'>
                                <div className='flex flex-col'>
                                    <p className='text-[16px] font-normal leading-[19.2px]'>TruCoin <span className='text-orange-vik'>Silver</span></p>
                                    <p className='text-[12px] font-medium leading-[14px] text-left text-green-vik'>$6.18(+1.82%)</p>
                                </div>
                                <p className='text-[16px] font-semibold leading-[19.2px]'>
                                    8.3k gm
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar