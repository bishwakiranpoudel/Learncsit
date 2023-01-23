import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const Home = () => {
    return(
    <Sidebar>
      
    <div className=' w-full text-[#4d4d4d]'>
    
    {/* Hero Section */}
    <Herosection/>

    {/* Floating cards Section */}
    <Floatingcardsection/>
    
    {/* Semester Card Section */}
    <Semestercardsection/>

    {/* Recent articles/Notices bulleting section */}
    <Articlesection/>

    {/* Footer Section */}
    <Footer/>
    </div>

    </Sidebar>
    )
}

const Herosection = () => {
  return (
    <div className='p-3'>
    <aside className="h-fit top-0 bg-opacity-20 inset-y-0 z-10 flex flex-col flex-shrink-0 w-1/2  overflow-x-hidden overflow-y-hidden transition-all transform bg-white dark:bg-grayer dark:border-white-rgba-1 lg:z-10 lg:shadow-none">
      <div className='font-oswald font-bold text-[86px] leading-none '>Your <span className='text-[#6b9080]'>Education</span> <br /> is our priority</div>
      <div className='font-oswald font-light text-[25px] leading-none py-4'>We at EduBInary belive Life is an open book test. Learning how to learn is your most valuable skill in the online world</div>
    </aside>
    <div className='w-1/2'></div>
    </div>
  )
}

const Floatingcardsection = () => {
  return(
    <div className='w-full bg-[#eaf4f4] h-64'></div>
  )
}

const Semestercardsection = () => {
  return (
    <></>
  )
}

const Articlesection = () => {
  return (
    <></>
  )
}

export default Home 
