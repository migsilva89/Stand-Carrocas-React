import React, { useState } from 'react'

function BuyForm(props) {
  const [offer, setOffer] = useState(props.price)

  if (offer.length < 4) {
    setOffer(props.price)
  }

  return (
    <form className="space-y-7">
      <div>
        <label className="text-blue-900 text-3xl font-bold">
          What's your offer ?
          <input
            placeholder={`Insert your offer - PVP $${offer}`}
            className="w-full px-4 font-normal leading-8 mt-2 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
            type="number"
            onChange={(event) => setOffer(event.target.value)}
          />
        </label>
      </div>

      <div className="">
        <h2 className="text-blue-900 text-3xl font-bold mb-4">
          Would you like to pay in parts?
        </h2>
        <div className="flex justify-between pt-4">
          <div className="flex items-center mb-4">
            <input
              // checked
              type="radio"
              value={offer}
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-2"
              className="ml-2 text-sm font-medium text-blue-900"
            >
              Pay total - $ {offer}
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              value={(offer / 60).toFixed()}
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-1"
              className="ml-2 text-sm font-medium text-blue-900"
            >
              5 Years - $ {(offer / 60).toFixed()} /month
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              value={(offer / 120).toFixed()}
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-1"
              className="ml-2 text-sm font-medium text-blue-900"
            >
              10 Years - $ {(offer / 120).toFixed()} /month
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              // checked
              type="radio"
              value={(offer / 180).toFixed()}
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label
              htmlFor="radio-2"
              className="ml-2 text-sm font-medium text-blue-900"
            >
              15 Years - $ {(offer / 180).toFixed()} /month
            </label>
          </div>
        </div>
      </div>
      <div>
        <label className="text-blue-900 text-3xl font-bold">
          Full name
          <input
            placeholder="Insert your name"
            className="w-full px-4 font-normal leading-8 mt-2 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
            type="number"
          />
        </label>
      </div>
      <div>
        <label className="text-blue-900 text-3xl font-bold">
          Date of birth
          <input
            className="w-full px-4 font-normal leading-8 mt-2 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
            type="date"
          />
        </label>
      </div>
      <div>
        <label className="text-blue-900 text-3xl font-bold">
          Adress
          <input
            placeholder="Insert your adress"
            className="w-full px-4 font-normal leading-8 mt-2 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
            type="number"
          />
        </label>
      </div>
      <div>
        <label className="text-blue-900 text-3xl font-bold">
          Email
          <input
            placeholder="Insert your email"
            className="w-full px-4 font-normal leading-8 mt-2 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
            type="email"
          />
        </label>
      </div>
      <div>
        <label className="text-blue-900 text-3xl font-bold">
          Phone number
          <input
            placeholder="Insert your phone number"
            className="w-full px-4 font-normal leading-8 mt-2 py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
        </label>
      </div>
      <div>
        <h2 className="text-blue-900 text-3xl font-bold pb-2">Message</h2>
        <div>
          <textarea
            placeholder="Insert your message"
            className="w-full px-4 leading-8  py-2 text-sm border rounded-md focus:border-bluep-500 focus:outline-none focus:ring-1 focus:ring-bluep-500"
            type="text"
          />
        </div>
      </div>

      <div>
        <button
          className="bg-blue-500 text-white py-3 px-10 hover:bg-blue-400 cursor-pointer"
          type="sumbit"
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default BuyForm
