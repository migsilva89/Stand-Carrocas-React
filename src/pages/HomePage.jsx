import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'
import HomePageHeader from '../components/HomePageHeader'

function HomePage() {
 
  return (
    <MainLayout>
      <HomePageHeader/>
      <section className="max-w-7xl mx-auto px-12 font-semibold pb-10">
        <div className="flex justify-center m-8">
          <Link to="/cars-list" className="bg-blue-500 text-white py-3 px-8 hover:bg-blue-400 transition duration-750 hover:scale-125">
            FIND THE PERFECT CAR FOR YOU
          </Link>
        </div>
        <div className="max-w-7xl mx-auto pb-10 grid grid-cols-4 gap-7"></div>
      </section>
    </MainLayout>
  )
}

export default HomePage
