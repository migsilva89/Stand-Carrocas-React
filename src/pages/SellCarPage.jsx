import React from 'react'
import MainLayout from '../layouts/MainLayout'

function SellCarPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto mb-auto ">
        <h1 className="text-center my-10 text-4xl">
          We are currently preparing our platform for selling...
        </h1>
        <img
          src="https://cdn.dribbble.com/users/56427/screenshots/6003020/budio_hero_illustration_for_animation_2.gif"
          alt=""
          className="my-10 w-full rounded-lg shadow-2xl"
        />
      </div>
    </MainLayout>
  )
}

export default SellCarPage
