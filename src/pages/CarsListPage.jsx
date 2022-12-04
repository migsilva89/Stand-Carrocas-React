import React, { useState, useEffect } from 'react'
import CardComponent from '../components/CardComponent'
import DetailsCard from '../components/DetailsCard'
import MainLayout from '../layouts/MainLayout'
import data from '../data/data.json'
import Modal from '../components/Modal'

function CarsListPage() {
  const [carsToCompare, setCarsToCompare] = useState([])
  const [isReadyToCompare, setIsReadyToCompare] = useState(false)
  const [filteredCarsToCompare, setFilteredCarsToCompare] = useState([])

  const handleCompareModal = () => {
    if (carsToCompare.length == 2) {
      setIsReadyToCompare(true)
      getCarsToCompare(carsToCompare[0], carsToCompare[1])
    }
  }

  useEffect(() => {
    handleCompareModal()
  }, [carsToCompare])

  function getCarsToCompare(car1, car2) {
    let updatedCars = []
    data.filter((car) => {
      if (
        car.numerodechassi.toLowerCase() === car1 ||
        car.numerodechassi.toLowerCase() === car2
      ) {
        updatedCars.push(car)
      }
    })
    setFilteredCarsToCompare(updatedCars)
  }

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-12 pb-10 grid grid-cols-4 gap-7 relative">
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
            setCarsToCompare={setCarsToCompare}
            carsToCompare={carsToCompare}
          />
        ))}
        {isReadyToCompare ? (
          <div className="fixed w-full top-0 left-0 px-40 py-20">
            <Modal
              setCarsToCompare={setCarsToCompare}
              setFilteredCarsToCompare={setFilteredCarsToCompare}
              filteredCarsToCompare={filteredCarsToCompare}
              setIsReadyToCompare={setIsReadyToCompare}
            />
          </div>
        ) : (
          ''
        )}
      </section>
    </MainLayout>
  )
}

export default CarsListPage
