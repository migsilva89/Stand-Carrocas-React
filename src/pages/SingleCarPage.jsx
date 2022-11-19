import React from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import data from '../data/data.json'
import DetailsCard from '../components/DetailsCard'
import SlideSingleCar from '../components/SlideSingleCar'

function SingleCarPage() {
  const params = useParams()
  const id = params.slug
  const car = data[id - 1]

  return (
    <MainLayout>
      <section className="py-8 bg-gradient-to-l from-sky-100">
        <div className=" max-w-7xl grid grid-cols-2 pt-5 gap-12 mx-auto px-12">
          <div className="flex justify-center">
            <button className="bg-blue-100 hover:border-blue-900 hover:border-2 w-full font-bold text-2xl text-blue-900 py-3 px-8 hover:bg-blue-200 hover:text-blue-600">
              I WANT TO BUY
            </button>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:border-blue-600 border-2 w-full font-bold text-2xl text-white py-3 px-8 hover:bg-blue-900 ">
              I WANT A TEST DRIVE
            </button>
          </div>
          <div>
            <SlideSingleCar car={car} />
          </div>
          <div>
            <DetailsCard car={car} />
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default SingleCarPage
