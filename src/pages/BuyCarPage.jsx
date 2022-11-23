import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { useParams } from 'react-router-dom'
import data from '../data/data.json'
import DetailsCard from '../components/DetailsCard'

import BuyForm from '../components/BuyForm'

function BuyCarPage() {
  const params = useParams()
  const car = data.filter(
    (car) => car.numerodechassi.toLowerCase() == params.slug.toLowerCase(),
  )

  return (
    <MainLayout>
      <header className="relative bg-card-bg-buy h-96 bg-cover bg-center">
        <div className="bg-blue-500 h-full bg-opacity-25">
          <div className="flex justify-center items-center h-full">
            <div className="bg-white bg-opacity-80">
              <h1 className="text-center p-12 uppercase text-blue-500 text-6xl font-bold lg:leading-snug  mx-auto">
                Feel the form with your offer
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section className="max-w-7xl px-12 mx-auto">
        {/* <div className="mt-12">
          <DetailsCard car={car[0]} />
        </div> */}
        <div className="mt-16 mb-12">
          <BuyForm price={car[0].preco} />
        </div>
      </section>
    </MainLayout>
  )
}

export default BuyCarPage
