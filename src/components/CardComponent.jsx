import React from 'react'
import { Link } from 'react-router-dom'

function CardComponent(props) {
  return (
    <div className="w-full shadow-md bg-sky-50 ">
      <div className="overflow-hidden">
        <Link to={`/cars/${props.id}`} className="relative">
          <img
            src={props.carImgs[0]}
            alt="product image"
            className="hover:scale-125 transition"
          />
        </Link>
      </div>
      <div className="p-5">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold text-gray-800">
            {props.carName} {props.year}
          </h3>
          <button className="bg-sky-100 hover:scale-125 transition duration-750 text-xs drop-shadow-lg text-blue-500 py-2 px-3 hover:bg-blue-500 hover:text-white cursor-pointer">
            Compare
          </button>
        </div>
        <div className="flex gap-5 text-gray-400 text-xs pt-3  tracking-wider">
          <p>Fuel</p>
          <img src="/dot.png" alt="" className="w-4 h-4" />
          <p>4 Seats</p>
        </div>
        <div className="flex items-center justify-between mt-5">
          <h3 className="text-xl font-semibold text-blue-500 tracking-widest">
            ${props.price}
          </h3>
          <Link to={`/cars/${props.carName}`}>
            <button className="bg-blue-500 hover:scale-125 transition duration-750 text-white py-2 px-6 hover:bg-blue-400 cursor-pointer">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
