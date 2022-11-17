import React from 'react'
import MainLayout from '../layouts/MainLayout'

function HomePage() {
  return (
    <MainLayout>
      <header className="relative bg-gradient-to-t from-sky-50 ">
        <div className="flex justify-between max-w-7xl mx-auto">
          <div className=" w-7/12 max-w-8xl px-12">
            <h1 className="text-blue-900 text-7xl text-left font-medium leading-snug max-w-xl">
              Easy and Fast Way To Buy & Sell a Car
            </h1>
            <p className="text-gray-400 font-normal tracking-wide mt-6 max-w-md">
              We will help you buy your dream car or sell our actual car, quick,
              easy and reliable.
            </p>
            <div className="mt-8 flex gap-8 font-semibold pb-10">
              <button className="bg-blue-500 text-white py-3 px-8 hover:bg-blue-400 ">
                Buy
              </button>
              <button className="bg-blue-100 text-blue-500 py-3 px-8 hover:bg-blue-200 hover:text-blue-600">
                Sell
              </button>
            </div>
          </div>
          <div className="relative w-5/12">
            <div className="w-1/4 h-full bg-blue-100"></div>
            <img src="/car-img.png" alt="" className="absolute top-0" />
          </div>
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-12 font-semibold pb-10">
        <div className="flex justify-center m-8">
          <button className="bg-blue-500 text-white py-3 px-8 hover:bg-blue-400 ">
            Find the perfect car for you!!!
          </button>
        </div>
      </section>
    </MainLayout>
  )
}

export default HomePage
