"use client"

import YoutubePlayer from "../YoutubePlayer";

export default function Keseruan() {
    return (
        <div className="container flex flex-col py-10 w-full">
            <article className="container prose flex flex-col w-full text-center">
                <h2 className="text-2xl sm:text-4xl font-bold mb-2">Yuk, Makin Kenal dan Semakin Dekat dengan Kampung Inggris LC</h2>
            </article>
            <YoutubePlayer videoId="ECEzqm3Mlns" />
        </div>
    )
}