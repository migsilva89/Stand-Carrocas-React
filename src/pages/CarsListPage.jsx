import React, { useState, useEffect } from 'react'
import CardComponent from '../components/CardComponent'
import NoCarsFounded from '../components/NoCarsFounded'
import MainLayout from '../layouts/MainLayout'
import Modal from '../components/Modal'
import Loading from '../components/Loading'
import CarsToCompareComp from '../components/CarsToCompareComp'

function CarsListPage(props) {
  const [carsToCompare, setCarsToCompare] = useState([])
  const [isReadyToCompare, setIsReadyToCompare] = useState(false)
  const [filteredCarsToCompare, setFilteredCarsToCompare] = useState([])
  const [carSearchValue, setCarSearchValue] = useState('')

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
    props.data.filter((car) => {
      if (
        car.numerodechassi.toLowerCase() === car1 ||
        car.numerodechassi.toLowerCase() === car2
      ) {
        updatedCars.push(car)
      }
    })
    setFilteredCarsToCompare(updatedCars)
  }

  const handleSearch = (event) => {
    setCarSearchValue(event.target.value)
  }

  const renderedCars = props.data.filter((car) => {
    if (car.marca === '') {
      return car
    } else if (car.marca.toLowerCase().includes(carSearchValue.toLowerCase())) {
      return car
    }
  })

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-12 w-full ">
        <input
          onChange={handleSearch}
          placeholder="Search for a car brand"
          type="text"
          className="w-full h-8 p-4 py-6 text-blue-900 bg-gray-50 border border-blue-500 rounded-md"
        />
        <CarsToCompareComp carsToCompare={carsToCompare} />
      </div>
      {props.isLoading ? (
        <Loading />
      ) : (
        <div>
          {renderedCars.length < 1 ? (
            <NoCarsFounded />
          ) : (
            <section className="max-w-7xl mx-auto px-12 pb-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7 relative mb-auto">
              {renderedCars.map((car, index) => (
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
              {isReadyToCompare && (
                <div
                  onClick={() => {
                    setFilteredCarsToCompare([])
                    setIsReadyToCompare(false)
                    setCarsToCompare([])
                  }}
                  className="fixed overflow-scroll w-screen h-screen top-0 left-0 lg:px-40 px-10 py-20 drop-shadow-2xl bg-black bg-opacity-75"
                >
                  <div
                    onClick={(event) => {
                      event.stopPropagation()
                    }}
                    className="max-w-7xl mx-auto"
                  >
                    <Modal
                      setCarsToCompare={setCarsToCompare}
                      setFilteredCarsToCompare={setFilteredCarsToCompare}
                      filteredCarsToCompare={filteredCarsToCompare}
                      setIsReadyToCompare={setIsReadyToCompare}
                    />
                  </div>
                </div>
              )}
            </section>
          )}
        </div>
      )}
    </MainLayout>
  )
}

export default CarsListPage
