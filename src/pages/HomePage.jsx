import React from 'react'
import MainLayout from '../layouts/MainLayout'
import PagesLayout from '../layouts/PagesLayout'

function HomePage() {
  return (
    <MainLayout>
     
        <header className="flex justify-between bg-gradient-to-t from-sky-50 py-10">
          <div className=" w-7/12 max-w-8xl m-auto px-12">
            <h1 className="text-blue-900 text-7xl text-left font-medium leading-snug max-w-xl">
              Easy and Fast Way To Buy & Sell a Car
            </h1>
            <p className="text-gray-400 font-normal tracking-wide mt-6 max-w-md">
              We will help you buy your dream car or sell our actual car, quick,
              easy and reliable.
            </p>
            <div className='mt-8 flex gap-8 font-semibold'>
              <button className='bg-blue-500 text-white py-3 px-8 hover:bg-blue-400 '>Buy</button>
              <button className='bg-blue-100 text-blue-500 py-3 px-8 hover:bg-blue-200 hover:text-blue-600'>Sell</button>
            </div>
          </div>
          <div className="border-2 text-center w-5/12">right</div>
        </header>
     
    </MainLayout>
  )
}

export default HomePage
