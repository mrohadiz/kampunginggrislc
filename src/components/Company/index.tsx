"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from "next/image";
import Link from 'next/link';
import partnership_1 from '../../assets/kampung-inggris-lc-pare-partnership-1.webp'
import partnership_2 from '../../assets/kampung-inggris-lc-pare-partnership-2.webp'
import partnership_3 from '../../assets/kampung-inggris-lc-pare-partnership-3.webp'
import partnership_4 from '../../assets/kampung-inggris-lc-pare-partnership-4.webp'

export default function Company() {
    return (
        <div className="py-20 flex flex-col items-center justify-center gap-4">
            <article className="prose">
                <h1 className="text-3xl sm:text-5xl font-bold text-center">
                    Mereka Sudah Belajar di LC
                </h1>
            </article>

            <div className='container'>
                <Swiper
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                >
                    <SwiperSlide>
                        <Image alt='kampung inggris lc partnership' src={partnership_1} className='rounded-box' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt='kampung inggris lc partnership' src={partnership_2} className='rounded-box' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt='kampung inggris lc partnership' src={partnership_3} className='rounded-box' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt='kampung inggris lc partnership' src={partnership_4} className='rounded-box' />
                    </SwiperSlide>

                </Swiper>
            </div>

            <article className="prose">
                <h1 className="text-3xl sm:text-5xl font-bold text-center">
                    Sekarang Giliranmu
                </h1>
                {/* <h2>Kami Tunggu Kalian di LC!</h2> */}
            </article>
            <div className="btns flex items-center justify-center gap-4">
                <Link href="https://registrasi.kampunginggris.id/?br_code=PARE" passHref={true}>
                    <button className="btn btn-warning">Daftar Sekarang</button>
                </Link>

                <Link href="https://kampunginggrislc.com/tanyacspare?utm_source=LP&utm_medium=buttontanyacs&utm_campaign=Organik" passHref={true}>
                    <button className="btn btn-accent">Konsultasi CS</button>
                </Link>
            </div>
            <div className="divider"></div>
        </div>
    )
}