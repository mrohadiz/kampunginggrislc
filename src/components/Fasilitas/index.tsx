"use client"

import { useState } from "react"
import MasonryGedung from "./MasonryGedung"
import MasonryKelas from "./MasonryKelas"
import Masonry from "./Masonry"

export default function Fasilitas() {
    return (
        <div className="container flex flex-col py-10 w-full">
            <div className="grid flex-grow card place-items-center">
                <article className="container prose flex flex-col w-full text-center">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-2">Ini Fasilitas yang Bisa Kamu Nikmati di Kampung Inggris LC</h2>
                </article>
            </div>
            <Masonry />
            <MasonryKelas />
        </div>
    )
}