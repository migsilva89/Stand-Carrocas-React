import React from 'react'
import DetailsCard from './DetailsCard'

function Modal(props) {
  return (
    <div className='bg-gray-500 bg-opacity-40'>
      <button
        onClick={() => {
          props.setFilteredCarsToCompare([])
          props.setIsReadyToCompare(false)
          props.setCarsToCompare([])
        }}
        className="bg-red-500 text-white p-2"
      >
        Close
      </button>
      {props.filteredCarsToCompare.map((car, index) => (
        <DetailsCard key={index} car={car} />
      ))}
    </div>
  )
}

export default Modal
