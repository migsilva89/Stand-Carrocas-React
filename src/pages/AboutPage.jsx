import React from 'react'
import MainLayout from '../layouts/MainLayout'

function AboutPage() {
  return (
    <MainLayout>
      <header className="relative bg-hero-about h-96 bg-cover">
        <div className="bg-blue-500 h-full bg-opacity-25"></div>
      </header>
      <section className="flex max-w-7xl mx-auto px-12 justify-around py-36">
        <div className="w-1/2">
          <h1 className="text-blue-900 text-7xl text-left font-medium leading-snug">
            How are we?
          </h1>
          <p className="text-gray-400 font-normal tracking-wide mt-2 max-w-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium ullam obcaecati nostrum doloremque nisi! Recusandae
            tempore cumque atque quaerat quisquam, ducimus minima magnam porro?
            Quaerat voluptatem iusto quidem deleniti vero! Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. 
          </p>
        </div>
        <div className="w-1/2">
          <img src="/shop.png" alt="" className='rounded-xl drop-shadow-xl'/>
        </div>
      </section>
    </MainLayout>
  )
}

export default AboutPage
