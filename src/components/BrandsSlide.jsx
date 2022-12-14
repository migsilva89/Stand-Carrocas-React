import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import data from '../data/data.json'
// import { Link } from 'react-router-dom'

function BrandsSlide() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      loopFillGroupWithBlank={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {data.map((car, index) => (
        <SwiperSlide key={index}>
          {/* DEVO PASSAR O LINK */}
          {/* <Link to={`/cars/${car.numerodechassi}`}> */}
            <img src={car.imagemmarca} alt={car.marca} />
          {/* </Link> */}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default BrandsSlide
