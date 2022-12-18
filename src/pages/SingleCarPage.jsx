import React, { Suspense } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import DetailsCard from '../components/DetailsCard'
import SlideSingleCar from '../components/SlideSingleCar'
import Loading from '../components/Loading'

function SingleCarPage(props) {
  const params = useParams()
  const car = props.data.filter(
    (car) => car.numerodechassi.toLowerCase() == params.slug.toLowerCase(),
  )

  return (
    <MainLayout>
      <header className="relative bg-card-bg h-96 bg-cover bg-center">
        <div className="bg-blue-500 items-center h-96 bg-opacity-10 px-8">
          {!props.isLoading && (
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
                <Link
                  to={`/testdrive/${car[0].numerodechassi}`}
                  className="bg-blue-500 text-center w-full font-bold text-2xl text-white py-3 px-8 hover:bg-blue-900 "
                >
                  I WANT A TEST DRIVE
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
      <section className="py-12 bg-gradient-to-l from-sky-100">
        {props.isLoading ? (
          <Loading />
        ) : (
          <div className=" max-w-7xl grid lg:grid-cols-2 pt-5 gap-12 mx-auto px-12">
            <div className="md:max-w-xl sm:max-w-sm md:mt-3 sm:w-full w-72 lg:max-w-none mx-auto lg:mx-0">
              <SlideSingleCar car={car[0]} />
            </div>
            <div>
              <DetailsCard car={car[0]} />
            </div>
          </div>
        )}
      </section>
    </MainLayout>
  )
}

export default SingleCarPage
