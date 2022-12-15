import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

function BrandsSlide(props) {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        425: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      }}
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
      {props.data.map((car, index) => (
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
