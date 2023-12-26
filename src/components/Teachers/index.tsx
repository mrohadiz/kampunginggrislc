"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from "next/image"
import teacher_1 from "../../assets/kampung-inggris-lc-pare-teacher-1.webp"
import teacher_2 from "../../assets/kampung-inggris-lc-pare-teacher-2.webp"
import teacher_3 from "../../assets/kampung-inggris-lc-pare-teacher-3.webp"
import teacher_4 from "../../assets/kampung-inggris-lc-pare-teacher-4.webp"
import teacher_5 from "../../assets/kampung-inggris-lc-pare-teacher-5.webp"
import teacher_6 from "../../assets/kampung-inggris-lc-pare-teacher-6.webp"
import teacher_7 from "../../assets/kampung-inggris-lc-pare-teacher-7.webp"
import teacher_8 from "../../assets/kampung-inggris-lc-pare-teacher-8.webp"
import teacher_9 from "../../assets/kampung-inggris-lc-pare-teacher-9.webp"

export default function Teachers() {
    const teachers = [
        teacher_1,
        teacher_2,
        teacher_3,
        teacher_4,
        teacher_5,
        teacher_6,
        teacher_7,
        teacher_8,
        teacher_9,
    ]
    return (
        <div className="container flex flex-col py-10">
            <article className="container prose flex flex-col w-full text-center">
                <h1 className="text-3xl sm:text-5xl font-bold text-center">Yuk Kenalan Sama Teacher LC</h1>
            </article>

            <div className='w-full'>
                <Swiper
                    effect={'coverflow'}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    autoHeight={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 7,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true, dynamicBullets: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                >
                    {teachers.map((teacher, index) => (
                        <div key={index}>
                            <SwiperSlide>
                                <Image src={teacher} alt="kampung inggris lc teachers" />
                            </SwiperSlide>
                        </div>
                    ))}

                    <div className="slider-controler text-warning">
                        <div className="swiper-button-prev slider-arrow">
                        </div>
                        <div className="swiper-button-next slider-arrow">
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}