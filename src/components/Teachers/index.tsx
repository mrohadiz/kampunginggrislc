"use client"

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
                <h2 className="text-2xl sm:text-4xl font-bold mb-2">Yuk Kenalan Sama Teacher</h2>
            </article>

            <div className="divider divider-warning sm:divider-horizontal">SWIPE</div>

            <div className="carousel bg-base-300 rounded-box">
                {teachers.map((teacher, index) => (
                    <div key={index} className="carousel-item w-1/3 sm:w-auto">
                        <Image
                            alt="kampung inggris lc teacher"
                            src={teacher}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}