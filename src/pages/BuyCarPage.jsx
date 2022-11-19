import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { useParams } from 'react-router-dom'
import data from '../data/data.json'
import DetailsCard from '../components/DetailsCard'
import ContactForm from '../components/ContactForm'
import SlideSingleCar from '../components/SlideSingleCar'

function BuyCarPage() {
  const params = useParams()
  const car = data.filter(
    (car) => car.numerodechassi.toLowerCase() == params.slug.toLowerCase(),
  )

  return (
    <MainLayout>
      <header className="relative bg-card-bg-buy h-96 bg-cover bg-center">
        <div className="bg-blue-500 h-full bg-opacity-25">
          <div className='flex justify-center items-center h-full'>
            <div className="bg-white bg-opacity-80">
              <h1 className="text-center p-12 uppercase text-blue-500 text-6xl font-bold lg:leading-snug  mx-auto">
                Feel the form with your offer
              </h1>
            </div>
          </div>
        </div>
      </header>
      {/* <div className='max-w-7xl pt-5 gap-12 mx-auto px-12'>
          <DetailsCard car={car[0]} />
        </div>
      <section className=" max-w-7xl grid grid-cols-2 pt-5 gap-12 mx-auto px-12">
       <div>
        <SlideSingleCar car={car[0]}/>
       </div>
        <div>
          <ContactForm />
        </div>
      </section> */}
    </MainLayout>
  )
}

export default BuyCarPage
