import React from 'react'

export default function NoCarsFounded() {
  return (
    <section className="w-1/2 mx-auto mb-8">
      <h1 className="text-center text-4xl text-blue-900 font-bold">
        There are no cars with this brand name. Please recheck and try again
      </h1>
      <div className="flex justify-center">
        <img src="./Nocars.png" alt="" className="w-1/4" />
      </div>
    </section>
  )
}
