"use client"

import { useState } from "react"
import MasonryGedung from "./MasonryGedung"
import MasonryKelas from "./MasonryKelas"
import Masonry from "./Masonry"

export default function Fasilitas() {
    return (
        <div className="container flex flex-col py-10 w-full items-center justify-center">
            <article className="container prose flex flex-col w-full text-center">
                <h1>Ini Fasilitas yang Bisa Kamu Nikmati di Kampung Inggris LC</h1>
            </article>

            {/* <div className="grid grid-cols-2 py-4">
                <Masonry />
                <MasonryKelas />
            </div> */}

            <Masonry />
            <MasonryKelas />
        </div>
    )
}