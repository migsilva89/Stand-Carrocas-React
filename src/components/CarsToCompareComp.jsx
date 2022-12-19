import React from 'react'

function CarsToCompareComp(props) {
  return (
    <div className="flex justify-center my-8 px-8 pt-2 pb-4 rounded-md bg-sky-100 text-blue-500">
      {props.carsToCompare.length > 0 && (
        <p>
          Currently car selected to compare is
          <span class="capitalize underline pl-2 text-blue-900 font-bold text-2xl">
            {props.carsToCompare}
          </span>
          , choose another car to compare or press the same car to remove.
        </p>
      )}
    </div>
  )
}

export default CarsToCompareComp
