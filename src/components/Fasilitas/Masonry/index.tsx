"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from "next/image";
import asrama_1 from '../../../assets/fasilitas/kampung-inggris-lc-vip-camp-1.webp'
import asrama_2 from '../../../assets/fasilitas/kampung-inggris-lc-vip-camp-2.webp'
import asrama_3 from '../../../assets/fasilitas/kampung-inggris-lc-vip-camp-3.webp'
import asrama_4 from '../../../assets/fasilitas/kampung-inggris-lc-vip-camp-4.webp'
import asrama_5 from '../../../assets/fasilitas/kampung-inggris-lc-vip-camp-5.webp'

export default function Masonry() {
  const asramas = [
    {
      img: asrama_1,
      desc: "",
      tag: "#vip",
    },
    {
      img: asrama_2,
      desc: "",
      tag: "#reguler",
    },
    {
      img: asrama_3,
      desc: "",
      tag: "#reguler",
    },
    {
      img: asrama_4,
      desc: "",
      tag: "#reguler",
    },
    {
      img: asrama_5,
      desc: "",
      tag: "#reguler",
    },
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
          {asramas.map((asrama, index) => (
            <div key={index}>
              <SwiperSlide>
                <Image src={asrama.img} alt="kampung inggris lc teachers" className='rounded-box' />
              </SwiperSlide>
            </div>
          ))}

          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div> */}
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full col-span-2 md:col-span-3 row-span-3"><Image src={asrama_1} alt="gedung" /></div>
        <div className="w-full h-full object-cover"><Image src={asrama_2} alt="gedung" /></div>
        <div className="w-full h-full object-cover"><Image src={asrama_3} alt="gedung" /></div>
        <div className="w-full h-full object-cover"><Image src={asrama_4} alt="gedung" /></div>
        <div className="w-full h-full object-cover"><Image src={asrama_5} alt="gedung" /></div>
        <div className="w-full h-full object-cover"><Image src={asrama_1} alt="gedung" /></div>
        <div className="w-full h-full object-cover"><Image src={asrama_2} alt="gedung" /></div>
      </div>
      {/* <article className="prose py-4">
        <h2>Asrama</h2>
      </article> */}

    </div>
  );
}