"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from "next/image";
import kelas_1 from '../../../assets/fasilitas/kampung-inggris-lc-vip-class-room-1.webp'
import kelas_2 from '../../../assets/fasilitas/kampung-inggris-lc-vip-class-room-2.webp'
import kelas_3 from '../../../assets/fasilitas/kampung-inggris-lc-vip-class-room-3.webp'
import kelas_4 from '../../../assets/fasilitas/kampung-inggris-lc-vip-class-room-4.webp'

export default function Masonry() {
    const kelases = [
        kelas_1,
        kelas_2,
        kelas_3,
        kelas_4,
        kelas_3,
        kelas_2,
    ]
    return (
        <div className="container flex flex-col items-center w-full">
            {/* <div className='w-full'>
                <Swiper
                    effect={'coverflow'}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true, dynamicBullets: true }}
                    modules={[EffectCoverflow, Pagination]}
                >
                    {kelases.map((teacher, index) => (
                        <div key={index}>
                            <SwiperSlide>
                                <Image src={teacher} alt="kampung inggris lc teachers" className='rounded-box' />
                            </SwiperSlide>
                        </div>
                    ))}

                    <div className="slider-controler">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>

            <article className="prose py-4">
                <h2>Kelas</h2>
            </article> */}
            <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4 items-center">
                <div className="w-full col-span-2 md:col-span-3 row-span-3"><Image src={kelas_2} alt="gedung" /></div>
                <div className="w-full h-full"><Image src={kelas_1} alt="gedung" /></div>
                <div className="w-full h-full"><Image src={kelas_3} alt="gedung" /></div>
                <div className="w-full h-full"><Image src={kelas_4} alt="gedung" /></div>
                <div className="w-full h-full"><Image src={kelas_2} alt="gedung" /></div>
                <div className="w-full h-full"><Image src={kelas_1} alt="gedung" /></div>
                <div className="w-full h-full"><Image src={kelas_3} alt="gedung" /></div>
            </div>
        </div>
    );
}