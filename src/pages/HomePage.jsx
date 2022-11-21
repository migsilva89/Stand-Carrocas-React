import React, { useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

function HomePage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <MainLayout>
      <header className="relative bg-gradient-to-t from-sky-50 ">
        <div className="md:flex justify-between max-w-7xl mx-auto">
          <div className=" md:w-7/12 max-w-8xl px-12 md:text-left text-center">
            <h1 className="text-blue-900 lg:text-7xl text-6xl font-medium lg:leading-snug md:max-w-xl md:mx-0 mx-auto">
              Easy and Fast Way To Buy & Sell a Car
            </h1>
            <p className="text-gray-400 font-normal tracking-wide mt-6 md:max-w-md">
              We will help you buy your dream car or sell our actual car, quick,
              easy and reliable.
            </p>
            <div className="mt-8 flex gap-8 font-semibold pb-10 justify-center md:justify-start">
              <Link to="/cars-list">
                <button className="bg-blue-500 text-white py-3 px-8 hover:bg-blue-400 transition duration-750 hover:scale-125">
                  I WANT TO BUY
                </button>
              </Link>
              <Link to="/sell">
                <button className="bg-blue-100 transition duration-750 hover:scale-125 text-blue-500 py-3 px-8 hover:bg-blue-200 hover:text-blue-600">
                  I WANT TO SELL
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-5/12">
            <div
              className="w-1/4 h-full bg-blue-100 ml-16"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="750"
            ></div>

            <img
              src="/car-img.png"
              alt=""
              className="absolute top-0 hidden md:block"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-12 font-semibold pb-10">
        <div className="flex justify-center m-8">
          <button className="bg-blue-500 text-white py-3 px-8 hover:bg-blue-400 transition duration-750 hover:scale-125">
            FIND THE PERFECT CAR FOR YOU
          </button>
        </div>
        <div className="max-w-7xl mx-auto pb-10 grid grid-cols-4 gap-7"></div>
      </section>
    </MainLayout>
  )
}

export default HomePage
