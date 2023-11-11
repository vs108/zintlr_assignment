import React, { useState } from 'react'

import b1 from '../../assets/b1.png'
import b2 from '../../assets/b2.png'
import b3 from '../../assets/b3.png'
import b4 from '../../assets/b4.png'
import arrow from '../../assets/Arrow 1.png'

import search from '../../assets/search.png'
import downarrow from '../../assets/downarrow.png'



const DataSection = () => {
    const [revenue, setRevenue] = useState(false)
    const [kyc, setKyc] = useState(false);
    const [zone, setZone] = useState(false);
    const [account, setAccount] = useState(false);

    return (
        <div>
            <div className='flex flex-col mt-[60px] ml-[50px]'>
                <p className='font-medium text-[18px] leading-[21.6px] text-[#000000]'>Consumers Overview</p>

                <div className='mt-[10px] flex justify-between'>
                    <div className=' mb-[5px] flex relative border-[1px] border-[#B5C3D7] rounded-[5px]'>
                        <input
                            placeholder='Search Consumers'
                            className='p-4 w-[374px] h-[50px] rounded-[30px]'
                        />
                        <img src={search} className='absolute top-[15px] left-[340px]' />
                    </div>

                    <div className='flex gap-2 mr-[50px]'>
                        <img src={b1} className='w-[33px] h-[35px] rounded-md' />
                        <img src={b2} className='w-[47px] h-[35px] rounded-md' />
                        <img src={b3} className='w-[47px] h-[35px] rounded-md' />

                        <button className='flex gap-1 bg-[#4DAEFF] w-[77px] h-[35px] p-2 text-white rounded-md'>
                            <img src={b4} className='w-[20px] h-[20px]' />
                            Filter
                        </button>
                    </div>
                </div>

                <div>
                    <table className='w-[1360px]'>
                        <thead className='bg-[#DDEBFF] w-full h-[50px]'>
                            <th className=' pl-[20px] text-left font-medium text-[14px] leading-[16.8px]'>Consumer Name</th>
                            <th>
                                <div className='flex items-center gap-2'>
                                    <div className='flex flex-col'>
                                        <p className='text-left font-medium text-[14px] leading-[16.8px]'>Assets</p>
                                        <div className='flex items-center gap-[5px]'>
                                            <p className='font-medium text-[#0153C9] text-[10px] leading-[12px]'>Total ~₹9M</p>
                                            <span className='text-[#747371] text-[9px] gap-[10px] leading-[16.8px] w-[40px] h-[18px] bg-[#ecd271] px-[6px] py-[2px] rounded-[100px]'>50.54g</span>
                                            <span className='text-[#525151] text-[9px] gap-[10px] leading-[16.8px] w-[40px] h-[18px] bg-[#b2b0b0] px-[6px] py-[2px] rounded-[100px]'>34.2g</span>
                                            <span className='text-[#35b1ea] text-[9px] gap-[10px] leading-[16.8px] w-[40px] h-[18px] bg-[#c6e4f7] px-[6px] py-[2px] rounded-[100px]'>₹242.5</span>

                                        </div>
                                    </div>

                                    <div>
                                        <img src={downarrow} />
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className='flex gap-2 items-center mr-[20px] relative'>
                                    <div >
                                        <p className=' text-left font-medium text-[14px] leading-[16.8px]'>Revenue</p>
                                        <p className='font-medium text-[#0153C9] text-[10px] leading-[12px]'>Total ~₹9M</p>
                                    </div>

                                    {
                                        revenue && <div className='flex flex-col justify-evenly border-[1px] border-[#9a9999] shadow-2xl items-start absolute top-[40px] w-[151px] h-[136px] p-4 bg-white gap-2'>
                                            <div className='flex gap-2'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='text-[#FF4444] font-medium text-[14px] gap-[10px] leading-[16.8px] w-[100px] h-[25px] bg-[#FFE9E9] px-[10px] py-[4px] rounded-[100px]'> Pending</label><br />
                                            </div>

                                            <div className='flex gap-2'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='gap-[10px] text-[14px] text-[#f4c64f] leading-[16.8px] w-[100px] h-[25px] bg-[#FFF2D0] px-[10px] py-[4px] rounded-[100px]'>In Progress</label><br />
                                            </div>

                                            <div className='flex gap-2'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='text-[#27A607] font-medium text-[14px] gap-[10px] leading-[16.8px] w-[100px] h-[25px] bg-[#EAFFE0] px-[10px] py-[4px] rounded-[100px]'>Done</label><br />
                                            </div>

                                            <div className='flex gap-2'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='text-[#8E8E8E] font-medium text-[14px] gap-[10px] leading-[16.8px] w-[100px] h-[25px] bg-[#F1F1F1] px-[10px] py-[4px] rounded-[100px]'>Rejected</label><br />
                                            </div>
                                        </div>
                                    }
                                    <img src={downarrow} onClick={() => setRevenue(!revenue)} />
                                    <div>

                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className='flex gap-2 items-center mr-[20px]'>
                                    <p className='text-left font-medium text-[14px] leading-[16.8px]'>KYC Status</p>

                                    {
                                        kyc && <div className='flex flex-col justify-evenly border-[1px] border-[#9a9999] shadow-2xl items-start absolute top-[476px] w-[151px] h-[136px] p-4 bg-white gap-2'>
                                            <div className='flex gap-2'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='text-[#FF4444] font-medium text-[14px] gap-[10px] leading-[16.8px] w-[100px] h-[25px] bg-[#FFE9E9] px-[10px] py-[4px] rounded-[100px]'> Pending</label><br />
                                            </div>

                                            <div className='flex gap-2'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='gap-[10px] text-[14px] text-[#f4c64f] leading-[16.8px] w-[100px] h-[25px] bg-[#FFF2D0] px-[10px] py-[4px] rounded-[100px]'>In Progress</label><br />
                                            </div>

                                            <div className='flex gap-2'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='text-[#27A607] font-medium text-[14px] gap-[10px] leading-[16.8px] w-[100px] h-[25px] bg-[#EAFFE0] px-[10px] py-[4px] rounded-[100px]'>Done</label><br />
                                            </div>

                                            <div className='flex gap-2'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='text-[#8E8E8E] font-medium text-[14px] gap-[10px] leading-[16.8px] w-[100px] h-[25px] bg-[#F1F1F1] px-[10px] py-[4px] rounded-[100px]'>Rejected</label><br />
                                            </div>
                                        </div>
                                    }
                                    <img src={downarrow} onClick={() => setKyc(!kyc)}/>
                                </div>
                            </th>
                            <th className=' text-left font-medium text-[14px] leading-[16.8px]'>Facilitator</th>
                            <th>

                                <div className='flex gap-2 items-center mr-[20px]'>
                                    <p className='text-left font-medium text-[14px] leading-[16.8px] '>Zone</p>
                                    {
                                        zone && <div className='flex flex-col justify-evenly items-start absolute border-[1px] border-[#9a9999] shadow-2xl top-[476px] w-[100px] h-[136px] p-4 bg-white gap-2'>
                                            <div className='flex '>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='font-medium text-[14px] gap-[10px] leading-[16.8px]  h-[25px] px-[10px] py-[4px]'> SOUTH</label><br />
                                            </div>

                                            <div className='flex'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='font-medium text-[14px] gap-[10px] leading-[16.8px]  h-[25px] px-[10px] py-[4px]'>NORTH</label><br />
                                            </div>

                                            <div className='flex'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='font-medium text-[14px] gap-[10px] leading-[16.8px]  h-[25px] px-[10px] py-[4px]'>EAST</label><br />
                                            </div>

                                            <div className='flex'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='font-medium text-[14px] gap-[10px] leading-[16.8px] h-[25px] px-[10px] py-[4px]'>WEST</label><br />
                                            </div>
                                        </div>
                                    }
                                    <img src={downarrow} onClick={() => setZone(!zone)} />
                                </div>
                            </th>
                            <th>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-left font-medium text-[14px] leading-[16.8px]'>Account Type</p>
                                    
                                    {
                                        account && <div className='flex flex-col justify-evenly items-start absolute top-[476px] w-[200px] h-[150px] p-2 bg-white gap-2 border-[1px] border-[#9a9999] shadow-2xl '>
                                            <div className='flex'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='font-medium text-[14px] leading-[16.8px] h-[25px] px-[12px] py-[4px]'> Business</label><br />
                                            </div>

                                            <div className='flex'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='font-medium text-[14px] leading-[16.8px] h-[25px] px-[12px] py-[4px]'>Pay and Use(Minor)</label><br />
                                            </div>

                                            <div className='flex'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='font-medium text-[14px] gap-[10px] leading-[16.8px] h-[25px] px-[12px] py-[4px]'>Pay and Use(Major)</label><br />
                                            </div>

                                            <div className='flex gap-2'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='font-medium text-[14px] gap-[10px] leading-[16.8px] h-[25px] px-[6px] py-[4px]'>Salary</label><br />
                                            </div>
                                            <div className='flex gap-2'>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className='font-medium text-[14px] gap-[10px] leading-[16.8px] h-[25px] px-[6px] py-[4px]'>Earner</label><br />
                                            </div>
                                        </div>

                                    }
                                    
                                    <img src={downarrow} onClick={() => setAccount(!account)} />
                                </div>
                            </th>
                            <th className='text-left font-medium text-[14px] leading-[16.8px]'>TPA</th>
                        </thead>

                        <tr className='w-full h-[76px]'>
                            <td className='text-[14px] leading-[16.8px] font-medium text-[#0153C9] pl-[20px]'>Raghuvendra Raga <span className='w-[24px] h-[16px] py-[4px] px-[15px] rounded-[150px] bg-[#FF5555] gap-[10px] text-white'>3</span></td>
                            <td>
                                <div className='flex flex-col'>
                                    <div>
                                        <p className='text-[#313945] font-medium text-[16px] leading-[19.2px]'>₹35,342</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='text-[#747371] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#ecd271] px-[10px] py-[4px] rounded-[100px]'>50.54g</span>
                                        <span className='text-[#525151] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#b2b0b0] px-[10px] py-[4px] rounded-[100px]'>34.2g</span>
                                        <span className='text-[#35b1ea] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#c6e4f7] px-[10px] py-[4px] rounded-[100px]'>₹242.5</span>
                                    </div>
                                </div>
                            </td>
                            <td>₹35,342</td>
                            <td>
                                <span className='text-[#27A607] font-medium text-[14px] gap-[10px] leading-[16.8px] w-[88px] h-[25px] bg-[#EAFFE0] px-[10px] py-[4px] rounded-[100px]'>Done</span>
                            </td>
                            <td>
                                <div className='flex gap-2 items-center'>
                                    <div className='flex flex-col'>
                                        <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>B2B Field Executive</p>
                                        <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Arun Jha</p>
                                    </div>
                                    <div>
                                        <img src={arrow}></img>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>Associate</p>
                                        <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Anika Singh</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>South</td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Business</td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>9876543210@trucard</td>
                        </tr>

                        <tr className='w-full h-[76px] bg-[#F6FAFC]'>
                            <td className='pl-[20px] text-[14px] leading-[16.8px] font-medium text-[#0153C9]'>Abhinav Loyal </td>
                            <td>
                                <div className='flex flex-col'>
                                    <div>
                                        <p className='text-[#313945] font-medium text-[16px] leading-[19.2px]'>₹35,342</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='text-[#747371] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#ecd271] px-[10px] py-[4px] rounded-[100px]'>50.54g</span>
                                        <span className='text-[#525151] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#b2b0b0] px-[10px] py-[4px] rounded-[100px]'>34.2g</span>
                                        <span className='text-[#35b1ea] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#c6e4f7] px-[10px] py-[4px] rounded-[100px]'>₹242.5</span>
                                    </div>
                                </div>
                            </td>
                            <td>₹35,342</td>
                            <td>
                                <div className='flex flex-col'>
                                    <span className='text-[#FF4444] font-medium text-[14px] gap-[10px] leading-[16.8px] w-[88px] h-[25px] bg-[#FFE9E9] px-[10px] py-[4px] rounded-[100px]'>Pending</span>
                                    <span className='leading-[14.4px] text-[12px] text-[#313945] font-xs mt-[5px]'>Since 3 weeks</span>
                                </div>
                            </td>
                            <td><div className='flex gap-2 items-center'>
                                <div className='flex flex-col'>
                                    <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>B2B Field Executive</p>
                                    <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Arun Jha</p>
                                </div>
                                <div>
                                    <img src={arrow}></img>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>Associate</p>
                                    <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Anika Singh</p>
                                </div>
                            </div></td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>South</td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Pay and Use <span className='text-[#4fbdfd]'>(Minor)</span></td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>9876543210@trucard</td>
                        </tr>

                        <tr className='w-full h-[76px]'>
                            <td className='pl-[20px] text-[14px] leading-[16.8px] font-medium text-[#0153C9]'>Raghuvendra Raga </td>
                            <td>
                                <div className='flex flex-col'>
                                    <div>
                                        <p className='text-[#313945] font-medium text-[16px] leading-[19.2px]'>₹35,342</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='text-[#747371] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#ecd271] px-[10px] py-[4px] rounded-[100px]'>50.54g</span>
                                        <span className='text-[#525151] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#b2b0b0] px-[10px] py-[4px] rounded-[100px]'>34.2g</span>
                                        <span className='text-[#35b1ea] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#c6e4f7] px-[10px] py-[4px] rounded-[100px]'>₹242.5</span>
                                    </div>
                                </div>
                            </td>
                            <td>₹35,342</td>
                            <td>
                                <span className='text-[#27A607] font-medium text-[14px] gap-[10px] leading-[16.8px] w-[88px] h-[25px] bg-[#EAFFE0] px-[10px] py-[4px] rounded-[100px]'>Done</span>

                            </td>
                            <td>
                                <div className='flex gap-2 items-center'>
                                    <div className='flex flex-col'>
                                        <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>B2B Field Executive</p>
                                        <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Arun Jha</p>
                                    </div>
                                    <div>
                                        <img src={arrow}></img>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>Associate</p>
                                        <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Anika Singh</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>South</td>
                            <td></td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>9876543210@trucard</td>
                        </tr>


                        <tr className='w-full h-[76px] bg-[#F6FAFC]'>
                            <td className='pl-[20px] text-[14px] leading-[16.8px] font-medium text-[#0153C9]'>Abhinav Loyal </td>
                            <td>
                                <div className='flex flex-col'>
                                    <div>
                                        <p className='text-[#313945] font-medium text-[16px] leading-[19.2px]'>₹35,342</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='text-[#747371] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#ecd271] px-[10px] py-[4px] rounded-[100px]'>50.54g</span>
                                        <span className='text-[#525151] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#b2b0b0] px-[10px] py-[4px] rounded-[100px]'>34.2g</span>
                                        <span className='text-[#35b1ea] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#c6e4f7] px-[10px] py-[4px] rounded-[100px]'>₹242.5</span>
                                    </div>
                                </div>
                            </td>
                            <td>₹35,342</td>
                            <td>
                                <div className='flex flex-col'>
                                    <span className='gap-[10px] leading-[16.8px] w-[88px] h-[25px] bg-[#FFF2D0] px-[10px] py-[4px] rounded-[100px]'></span>
                                    <span className='leading-[14.4px] text-[12px] text-[#313945] font-xs mt-[5px]'>Since 3 weeks</span>
                                </div>
                            </td>
                            <td>
                                <div className='flex gap-2 items-center'>
                                    <div className='flex flex-col'>
                                        <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>B2B Field Executive</p>
                                        <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Arun Jha</p>
                                    </div>
                                    <div>
                                        <img src={arrow}></img>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>Associate</p>
                                        <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Anika Singh</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>South</td>
                            <td></td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>9876543210@trucard</td>
                        </tr>

                        <tr className='w-full h-[76px]'>
                            <td className=' pl-[20px] text-[14px] leading-[16.8px] font-medium text-[#0153C9]'>Raghuvendra Raga <span className='w-[24px] h-[16px] py-[4px] px-[15px] rounded-[150px] bg-[#FF5555] gap-[10px] text-white'>1</span></td>
                            <td>
                                <div className='flex flex-col'>
                                    <div>
                                        <p className='text-[#313945] font-medium text-[16px] leading-[19.2px]'>₹35,342</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='text-[#747371] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#ecd271] px-[10px] py-[4px] rounded-[100px]'>50.54g</span>
                                        <span className='text-[#525151] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#b2b0b0] px-[10px] py-[4px] rounded-[100px]'>34.2g</span>
                                        <span className='text-[#35b1ea] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#c6e4f7] px-[10px] py-[4px] rounded-[100px]'>₹242.5</span>
                                    </div>
                                </div>
                            </td>
                            <td>₹35,342</td>
                            <td>
                                <span className='text-[#27A607] font-medium text-[14px] gap-[10px] leading-[16.8px] w-[88px] h-[25px] bg-[#EAFFE0] px-[10px] py-[4px] rounded-[100px]'>Done</span>

                            </td>
                            <td>
                                <div className='flex gap-2 items-center'>
                                    <div className='flex flex-col'>
                                        <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>B2B Field Executive</p>
                                        <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Arun Jha</p>
                                    </div>
                                    <div>
                                        <img src={arrow}></img>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>Associate</p>
                                        <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Anika Singh</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>South</td>
                            <td></td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>9876543210@trucard</td>
                        </tr>

                        <tr className='w-full h-[76px] bg-[#F6FAFC]'>
                            <td className='pl-[20px] text-[14px] leading-[16.8px] font-medium text-[#0153C9]'>Abhinav Loyal <span className='w-[24px] h-[16px] py-[4px] px-[15px] rounded-[150px] bg-[#FF5555] gap-[10px] text-white'>5</span></td>
                            <td>
                                <div className='flex flex-col'>
                                    <div>
                                        <p className='text-[#313945] font-medium text-[16px] leading-[19.2px]'>₹35,342</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='text-[#747371] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#ecd271] px-[10px] py-[4px] rounded-[100px]'>50.54g</span>
                                        <span className='text-[#525151] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#b2b0b0] px-[10px] py-[4px] rounded-[100px]'>34.2g</span>
                                        <span className='text-[#35b1ea] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#c6e4f7] px-[10px] py-[4px] rounded-[100px]'>₹242.5</span>
                                    </div>
                                </div>
                            </td>
                            <td>₹35,342</td>
                            <td>
                                <div className='flex flex-col'>
                                    <span className='text-[#FF4444] font-medium text-[14px] gap-[10px] leading-[16.8px] w-[88px] h-[25px] bg-[#FFE9E9] px-[10px] py-[4px] rounded-[100px]'>Pending</span>
                                    <span className='leading-[14.4px] text-[12px] text-[#313945] font-xs mt-[5px]'>Since 3 weeks</span>
                                </div>
                            </td>
                            <td>
                                <div className='flex gap-2 items-center'>
                                    <div className='flex flex-col'>
                                        <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>B2B Field Executive</p>
                                        <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Arun Jha</p>
                                    </div>
                                    <div>
                                        <img src={arrow}></img>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>Associate</p>
                                        <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Anika Singh</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>South</td>
                            <td></td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>9876543210@trucard</td>
                        </tr>

                        <tr className='w-full h-[76px]'>
                            <td className='pl-[20px] text-[14px] leading-[16.8px] font-medium text-[#0153C9]'>Raghuvendra Raga <span className='w-[24px] h-[16px] py-[4px] px-[15px] rounded-[150px] bg-[#FF5555] gap-[10px] text-white'>3</span></td>
                            <td>
                                <div className='flex flex-col'>
                                    <div>
                                        <p className='text-[#313945] font-medium text-[16px] leading-[19.2px]'>₹35,342</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='text-[#747371] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#ecd271] px-[10px] py-[4px] rounded-[100px]'>50.54g</span>
                                        <span className='text-[#525151] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#b2b0b0] px-[10px] py-[4px] rounded-[100px]'>34.2g</span>
                                        <span className='text-[#35b1ea] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#c6e4f7] px-[10px] py-[4px] rounded-[100px]'>₹242.5</span>
                                    </div>
                                </div>
                            </td>
                            <td>₹35,342</td>
                            <td>
                                <span className='text-[#27A607] font-medium text-[14px] gap-[10px] leading-[16.8px] w-[88px] h-[25px] bg-[#EAFFE0] px-[10px] py-[4px] rounded-[100px]'>Done</span>

                            </td>
                            <td>
                                <div className='flex gap-2 items-center'>
                                    <div className='flex flex-col'>
                                        <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>B2B Field Executive</p>
                                        <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Arun Jha</p>
                                    </div>
                                    <div>
                                        <img src={arrow}></img>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>Associate</p>
                                        <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Anika Singh</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>South</td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Business</td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>9876543210@trucard</td>
                        </tr>

                        <tr className='w-full h-[76px] bg-[#F6FAFC]'>
                            <td>

                            </td>
                            <td>
                                <div className='flex flex-col'>
                                    <div>
                                        <p className='text-[#313945] font-medium text-[16px] leading-[19.2px]'>₹35,342</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span className='text-[#747371] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#ecd271] px-[10px] py-[4px] rounded-[100px]'>50.54g</span>
                                        <span className='text-[#525151] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#b2b0b0] px-[10px] py-[4px] rounded-[100px]'>34.2g</span>
                                        <span className='text-[#35b1ea] text-[14px] gap-[10px] leading-[16.8px] w-[66px] h-[25px] bg-[#c6e4f7] px-[10px] py-[4px] rounded-[100px]'>₹242.5</span>
                                    </div>
                                </div>
                            </td>
                            <td>₹35,342</td>
                            <td>
                                <div className='flex flex-col'>
                                    <span className='gap-[10px] leading-[16.8px] w-[88px] h-[25px] bg-[#FFF2D0] px-[10px] py-[4px] rounded-[100px]'></span>
                                    <span className='leading-[14.4px] text-[12px] text-[#313945] font-xs mt-[5px]'>Since 3 weeks</span>
                                </div>
                            </td>
                            <td>
                                <div className='flex gap-2 items-center'>
                                    <div className='flex flex-col'>
                                        <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>B2B Field Executive</p>
                                        <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Arun Jha</p>
                                    </div>
                                    <div>
                                        <img src={arrow}></img>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p className='text-[10px] leading-[12px] font-normal text-[#313945]'>Associate</p>
                                        <p className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>Anika Singh</p>
                                    </div>
                                </div>
                            </td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>South</td>
                            <td></td>
                            <td className='text-[14px] leading-[16.8px] font-normal text-[#313945]'>9876543210@trucard</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default DataSection