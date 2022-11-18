import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'

function SlideSingleCar(props) {
  return (
    <Slide>
      {props.car.imagens.map((img, index) => (
        <div key={img}>
          <img key={index} src={img} alt="" className="rounded-2xl" />
        </div>
      ))}
    </Slide>
  )
}

export default SlideSingleCar
