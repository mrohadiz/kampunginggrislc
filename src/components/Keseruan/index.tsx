"use client"

import YoutubePlayer from "../YoutubePlayer";
import Image from "next/image";
export default function Keseruan() {
    return (
        <div className="container flex flex-col py-10 w-full">
            <article className="container prose flex flex-col w-full text-center">
                <h1>Yuk, Makin Kenal dan Semakin Dekat dengan Kampung Inggris LC</h1>
            </article>
            <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
                <div className="w-full col-span-2 md:col-span-3 row-span-3"><YoutubePlayer videoId="ECEzqm3Mlns" /></div>
                <div className="w-full"><Image src='/background.webp' alt="gedung" width={1280} height={720} /></div>
                <div className="w-full"><Image src='/background.webp' alt="gedung" width={1280} height={720} /></div>
                <div className="w-full"><Image src='/background.webp' alt="gedung" width={1280} height={720} /></div>
                <div className="w-full"><Image src='/background.webp' alt="gedung" width={1280} height={720} /></div>
                <div className="w-full"><Image src='/background.webp' alt="gedung" width={1280} height={720} /></div>
                <div className="w-full"><Image src='/background.webp' alt="gedung" width={1280} height={720} /></div>
            </div>
        </div>
    )
}