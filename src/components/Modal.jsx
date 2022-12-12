import React from 'react'
import DetailsCard from './DetailsCard'

function Modal(props) {
  return (
    <div className="bg-white bg-opacity-95 md:px-20 px-10 pt-10 ">
      <div className="flex justify-start">
        <button
          onClick={() => {
            props.setFilteredCarsToCompare([])
            props.setIsReadyToCompare(false)
            props.setCarsToCompare([])
          }}
          className="bg-blue-500 text-white p-2 mb-8"
        >
          Back to List
        </button>
      </div>

      {props.filteredCarsToCompare.map((car, index) => (
        <div className="pb-10">
          <DetailsCard key={index} car={car} />
        </div>
      ))}
    </div>
  )
}

export default Modal
