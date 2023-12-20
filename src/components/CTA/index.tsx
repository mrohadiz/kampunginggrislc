import Image from "next/image"
import image_1 from "../../assets/kampung-inggris-lc-cta-1.webp"
import image_2 from "../../assets/kampung-inggris-lc-cta-2.webp"

export default function CTA() {
    return (
        <>
            <div className="diff aspect-[16/9]">
                <div className="diff-item-1">
                    <div className="bg-warning text-center text-error-content text-5xl sm:text-9xl font-black grid place-content-center">LANGUAGE CENTER</div>
                </div>
                <div className="diff-item-2">
                    <div className="bg-base-100 text-center text-5xl sm:text-9xl font-black grid place-content-center">LANGUAGE CENTER</div>
                </div>
                <div className="diff-resizer"></div>
            </div>

            <div className="container pt-10">
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow p-2 card bg-base-100 rounded-box place-items-center">
                        <article className="prose">
                            <h1 className="text-3xl sm:text-5xl font-bold">
                                Kamu udah sering belajar bahasa Inggris tapi belum bisa juga, mungkin karena kamu ...
                            </h1>
                        </article>
                    </div>
                    {/* <div className="divider divider-warning lg:divider-horizontal"></div> */}
                    <div className="grid flex-grow p-2 card rounded-box place-items-center">
                        <Image
                            alt="kampung inggris lc"
                            src={image_1}
                        />
                    </div>
                </div>

                <div className="flex flex-col-reverse w-full lg:flex-row">
                    <div className="grid flex-grow p-2 card rounded-box place-items-center">
                        <Image
                            alt="kampung inggris lc"
                            src={image_2}
                        />

                    </div>
                    {/* <div className="divider divider-warning lg:divider-horizontal"></div> */}
                    <div className="grid flex-grow p-2 card bg-base-100 rounded-box place-items-center">
                        <article className="prose">
                            <h1 className="text-3xl sm:text-5xl font-bold">
                                Belajar Bahasa Inggris Tuh Paling Oke di Lingkungan Suportif, Jadi Kamu Bisa Ngerasain ...
                            </h1>
                        </article>
                    </div>
                </div>

                <div className="py-20 flex flex-col items-center justify-center gap-4">
                    <article className="prose">
                        <h1 className="text-3xl sm:text-5xl font-bold text-center">
                            That’s Why LC Nyediain Tempat Belajar yang Cocok Buat Kamu!
                        </h1>
                    </article>
                    <button className="btn btn-warning">Daftar Sekarang</button>
                    <div className="divider"></div>
                </div>
            </div>

            <article className="container prose flex flex-col w-full text-center">
                <h2 className="text-2xl sm:text-4xl font-bold mb-2">Ini Kata Member LC</h2>
            </article>
        </>
    )
}