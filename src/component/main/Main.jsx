import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import DataSection from './DataSection'
import Pagination from './Pagination'



const Main = () => {
  return (
    <>
      <div className='flex flex-col'>
        <Navbar />
        <Hero />
        <DataSection />
        <Pagination/>
      </div>
    </>
  )
}

export default Main