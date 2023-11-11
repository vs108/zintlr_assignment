import React from 'react'
import Sidebar from '../Sidebar'
import Main from '../main/Main'
import Navbar from '../main/Navbar'
import HeroSecond from '../main2/HeroSecond'
import MainSecond from '../main2/MainSecond'

const SecondPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Navbar/>
        <HeroSecond/>
        <MainSecond/>
      </div>
    </div>
  )
}

export default SecondPage