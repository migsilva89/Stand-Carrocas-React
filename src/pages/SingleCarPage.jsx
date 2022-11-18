import React from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import data from '../data/data.json'
import SingleCarComponent from '../components/SingleCarComponent'

function SingleCarPage() {
  const params = useParams()
  const id = params.slug
  const car = data[id - 1]
  
  console.log(car)
  return (
    <MainLayout>
      <SingleCarComponent car={car}/>
    </MainLayout>
  )
}

export default SingleCarPage
