import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import testimonials from "./data/testimonials.js"

import Image from "next/image"

const Testimonials = () => {
  return (
    <div>
      <Swiper
        navigation
        pagination={{
          clickable: true,
        }}
        // effect={"fade"}
        speed={800}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        loop
        className='w-10/12 mx-auto my-8 bg-blue-200 h-[60vh] md:h-96 rounded-xl'
      >
        {testimonials.map((testimonial) => {
          const { imageUrl, text, user, company, avatarUrl, id } = testimonial
          return (
            <SwiperSlide
              key={id}
              className='flex flex-col items-center justify-center'
            >
              <Image src={imageUrl} width={120} height={50} layout='fixed' />
              <p className='w-4/6 my-6 text-2xl text-center'>{text}</p>
              <div className='flex items-center justify-center'>
                <span className='relative'>
                  <Image src={avatarUrl} width={80} height={50} />
                </span>
                <p className='font-semibold'>{user}</p>
                <p>{company}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
export default Testimonials
