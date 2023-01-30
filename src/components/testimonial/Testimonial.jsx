import React from 'react'
import './testimonial.css'
import Data from './Data'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonial = ()=>{
    return(
        <section className='testimonial container section' id='testimonial'>
            <h2 className='section__title'>My clients say</h2>
            <span className='section__subtitle'>Testimonial</span>

            <div className='testimonial__container'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{delay: 2500, disableOnInteraction: false}}
                    pagination={{clickable: true,}}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper">

                    {Data.map((item)=>{
                        return (
                            <SwiperSlide key={item.id}>
                            <div className='testimonial__card' key={item.id}>
                                <img src={item.image} alt='' className='testimonial__img'/>

                                <h3 className='testimonial__name'>{item.title}</h3>
                                <p className='testimonial__description'>{item.description}</p>
                            </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial