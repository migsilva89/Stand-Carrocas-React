import React from 'react'
import MainLayout from '../layouts/MainLayout'
import HomePageHeader from '../components/HomePageHeader'
import data from '../data/data.json'
import BrandsSlide from '../components/BrandsSlide'
import CardComponent from '../components/CardComponent'

function HomePage() {
  const lastFourAdded = data.slice(-4)

  return (
    <MainLayout>
      <HomePageHeader />
      <section className="max-w-7xl mx-auto font-semibold py-10 mb-auto w-full">
        <h1 className="text-blue-900 text-5xl text-center pb-10 font-medium lg:leading-snug">
          <span className="text-blue-500">|</span> Latest added{' '}
          <span className="text-blue-500">|</span>
        </h1>
        <section className="grid grid-cols-4 gap-7">
          {lastFourAdded.map((car, index) => (
            <CardComponent
              key={index}
              carName={car.marca}
              carImgs={car.imagens}
              year={car.anofabrico}
              price={car.preco}
              id={index + 1}
              fuel={car.combustivel}
              doors={car.portas}
              slug={car.numerodechassi.toLowerCase()}
              // setCarsToCompare={setCarsToCompare}
              // carsToCompare={carsToCompare}
              // setIsReadyToCompare={setIsReadyToCompare}
            />
          ))}
        </section>
        <h1 className="text-blue-900 text-5xl text-center font-medium lg:leading-snug py-10 bg-blue">
          <span className="text-blue-500">|</span> Brands{' '}
          <span className="text-blue-500">|</span>
        </h1>
        <div className="max-w-7xl mx-auto w-full flex justify-center">
          <BrandsSlide />
        </div>
      </section>
    </MainLayout>
  )
}

export default HomePage
