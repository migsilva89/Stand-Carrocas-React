import React from 'react'
import MainLayout from '../layouts/MainLayout'

function AboutPage() {
  return (
    <MainLayout>
      <header className="relative bg-hero-about h-96 bg-cover">
        <div className="bg-blue-500 h-96 bg-opacity-25"></div>
      </header>
      <section className="lg:flex max-w-7xl mx-auto px-12 justify-around lg:py-36 py-12">
        <div className="lg:w-1/2 lg:text-left text-center">
          <h1 className="text-blue-900 md:text-7xl text-5xl pb-4 font-medium leading-snug">
            How are we?
          </h1>
          <p className="text-gray-400 font-normal tracking-wide mt-2 lg:max-w-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium ullam obcaecati nostrum doloremque nisi! Recusandae
            tempore cumque atque quaerat quisquam, ducimus minima magnam porro?
            Quaerat voluptatem iusto quidem deleniti vero! Lorem, ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/shop.png"
            alt=""
            className="rounded-xl drop-shadow-xl lg:pt-0 pt-10"
          />
        </div>
      </section>
    </MainLayout>
  )
}

export default AboutPage
