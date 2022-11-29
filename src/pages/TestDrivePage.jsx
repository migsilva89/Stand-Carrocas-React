import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { useParams } from 'react-router-dom'
import data from '../data/data.json'

function TestDrivePage() {
  const params = useParams()
  const car = data.filter(
    (car) => car.numerodechassi.toLowerCase() == params.slug.toLowerCase(),
  )
  console.log(car)
  return (
    <MainLayout>
      <div>Teste drive for {car[0].marca}</div>
    </MainLayout>
  )
}

export default TestDrivePage
