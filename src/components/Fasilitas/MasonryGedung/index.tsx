"use client"

import Image from "next/image";

export default function Masonry() {
    return (
        <div>
            <article className="prose">
                <h1>Gedung</h1>
            </article>

            <div className="columns-2 md:columns-3 lg:columns-4">
                <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-base-100 before:bg-opacity-20">
                    <Image alt="kampung inggris lc kelas" src={``} />

                    <div className="test__body absolute inset-0 p-8 flex flex-col">
                        <article className="prose relative">
                            <h1>Title Image</h1>
                            <p>Description</p>
                        </article>
                        <div className="mt-auto">
                            <span className="test__tag bg-base-100 bg-opacity-60 py-1 px-4 rounded-md">#tag</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}