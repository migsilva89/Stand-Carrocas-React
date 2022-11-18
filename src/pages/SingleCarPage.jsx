import React from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

function SingleCarPage() {
  const params = useParams()
  const slug = params.slug

  return (
    <MainLayout>
      <div>{slug}</div>
    </MainLayout>
  )
}

export default SingleCarPage
