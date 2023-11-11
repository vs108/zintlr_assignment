import React from 'react'
import FirstFile from './leftSecond/FirstFile'
import SecondFile from './leftSecond/SecondFile'
import ThirdFile from './leftSecond/ThirdFile'
import FirstRight from './rightSecond/FirstRight'
import SecondRight from './rightSecond/SecondRight'

const MainSecond = () => {
  return (
    <div className='mt-[60px] ml-[50px] flex flex-col gap-2 mr-[100px]'>
        <p className='font-medium tex-[18px] leading-[21.6px]'>Consumers Overview</p>

        <div className='flex gap-2'>
            <div className='flex gap-2 flex-col w-[904px]'>
                <FirstFile/>
                <SecondFile/>
                <ThirdFile/>
            </div>

            <div className='flex gap-2 flex-col w-[444px]'>
                <FirstRight/>
                <SecondRight/>
            </div>
        </div>
    </div>
  )
}

export default MainSecond