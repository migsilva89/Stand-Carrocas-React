import React from 'react'
import { Link, useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import data from '../data/data.json'
import DetailsCard from '../components/DetailsCard'
import SlideSingleCar from '../components/SlideSingleCar'

function SingleCarPage() {
  const params = useParams()
  const car = data.filter(
    (car) => car.numerodechassi.toLowerCase() == params.slug.toLowerCase(),
  )

  return (
    <MainLayout>
      <header className="relative bg-card-bg h-96 bg-cover bg-center">
        <div className="bg-blue-500 items-center h-full bg-opacity-10 px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 items-center h-full gap-10">
            <div className="flex justify-center">
              <Link
                to={`/buy/${car[0].numerodechassi}`}
                className="bg-blue-100 text-center w-full font-bold text-2xl text-blue-900 py-3 px-8 hover:bg-blue-200 hover:text-blue-600"
              >
                I WANT TO BUY
              </Link>
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-500   w-full font-bold text-2xl text-white py-3 px-8 hover:bg-blue-900 ">
                I WANT A TEST DRIVE
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="py-12 bg-gradient-to-l from-sky-100">
        <div className=" max-w-7xl grid lg:grid-cols-2 pt-5 gap-12 mx-auto px-12">
          <div class='md:max-w-xl sm:max-w-sm  sm:w-full w-72 lg:max-w-none mx-auto lg:mx-0'>
            <SlideSingleCar car={car[0]} />
          </div>
          <div>
            <DetailsCard car={car[0]} />
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default SingleCarPage
