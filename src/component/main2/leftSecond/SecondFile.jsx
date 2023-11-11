import React from 'react'
import g1 from '../../../assets/g1.png'
import bag from '../../../assets/bag$.png'
import rupee from '../../../assets/rupee.png'
import wallet from '../../../assets/wallet.png'
import abc from '../../../assets/abc.png'


const SecondFile = () => {
    return (
        <div className='flex gap-2 w-full'>
            <div className='w-[423px] flex flex-col gap-1'>
                <div className='h-[132px] w-full flex items-center gap-10 p-4 border-[1px] rounded-[10px] border-[#C6CEF0]'>
                    <div className='flex flex-col'>
                        <p className='text-[14px] leading-16.8px]'>Total Earnings</p>
                        <p className='text-[22px]'>₹1,321,342</p>
                        <select id="Week" name="week" className='text-[14px] w-[106px] h-[32px] py-[5px] px-[4px] border-[1px] rounded-[4px] border-[#313945]'>
                            <option value="volvo">Past Week</option>
                        </select>
                    </div>

                    <div>
                        <img src={g1} className='w-[212px] h-[115px]'/>
                    </div>
                </div>

                <div className='h-[88px] w-full rounded-[10px] bg-[#ECEAFE] flex gap-2 items-center justify-between p-4'>
                    <div className='flex gap-3'>
                        <div className='w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center'>
                            <img src={bag} className='w-[25px] h-[25px]'/>
                        </div>

                        <div>
                            <p className='text-[16px] text-[#313945]'>Overall Cash Wallet</p>
                            <p className='text-[14px] flex items-center gap-1 text-[#0153C9]'>Wallet History <img className="w-[8px] h-[8px]" src={abc}></img></p>
                        </div>
                    </div>

                    <div>
                        <p className='text-[20px] font-medium'>₹1,35,342</p>
                    </div>
                </div>
            </div>

            <div className='w-[471px] flex flex-col gap-1'>
                <div className='h-[88px] w-full rounded-[10px] bg-[#ECEAFE] flex gap-2 items-center justify-between p-2'>
                    <div className='flex gap-3'>
                        <div className='w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center'>
                            <img src={rupee} className='w-[25px] h-[25px]'/>
                        </div>

                        <div>
                            <p className='text-[16px] text-[#313945]'>Overall Cash Wallet </p>
                            <p className='text-[14px] flex items-center gap-1 text-[#0153C9]'>Wallet History <img className="w-[8px] h-[8px]" src={abc}></img></p>
                        </div>
                    </div>

                    <div>
                        <p className='text-[20px] font-medium'>₹1,35,342</p>
                    </div>
                </div>

                <div className=' flex h-[132px] w-full border-[1px] rounded-[10px] bg-[#faf0e9] items-center justify-between p-2'>
                <div className='flex gap-3'>
                        <div className='w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center'>
                            <img src={wallet} className='w-[25px] h-[25px]'/>
                        </div>

                        <div>
                            <p className='text-[16px] text-[#313945]'>Overall Cash Wallet </p>
                            <p className='text-[14px] flex items-center gap-1 text-[#0153C9]'>Wallet History <img className="w-[8px] h-[8px]" src={abc}></img></p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='text-[14px] font-medium  w-[59px] h-[25px] bg-[#FFEDB2] rounded-[100px] px-[8px] py-[4px] text-[#fdce35]'>Gold</p>
                        <p className='text-[14px] font-medium  w-[59px] h-[25px] bg-[#FFFFFF] rounded-[100px] px-[8px] py-[4px] text-[#A7A7A7]'>Silver</p>
               
                    </div>
                    <div>
                        <div>
                            <p className='text-[14px] ml-8 '>4,232 gm</p>
                            <p className='w-[98px] h-[25px] text-[16px] text-[#0153C9] bg-white rounded-[17px] px-[15px] py-[2px]'>₹9242.5</p>

                        </div>
                        <div>
                            <p className='text-[14px] ml-8 '>134,232 gm</p>
                            <p className='w-[98px] h-[25px] text-[16px] text-[#0153C9] bg-white rounded-[17px] px-[15px] py-[2px]'>₹922.5</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondFile