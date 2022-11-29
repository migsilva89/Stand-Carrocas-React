import React from 'react'
import CardComponent from '../components/CardComponent'
import MainLayout from '../layouts/MainLayout'
import data from '../data/data.json'

function CarsListPage() {
  
  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-12 pb-10 grid grid-cols-4 gap-7">
        {data.map((car, index) => (
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
          />
        ))}
      </section>
    </MainLayout>
  )
}

export default CarsListPage
