import Link from "next/link"
export default function Hero() {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content text-center">
                <article className="prose">
                    <h1 className="text-3xl sm:text-5xl font-bold">
                        53.333+ Member LC Telah Membuktikannya
                        <br />
                        Sekarang Giliran Kamu!
                    </h1>
                    <p className="py-6">Kampung Inggris LC lebih dari sekadar tempat kursus Bahasa Inggris. Language Center adalah tempat bertumbuh dan meraih impian. 53 ribu ++ member dari seluruh Indonesia sudah merasakan baik dan asiknya metode unik yang diterapkan di LC.</p>
                    <div className="btns flex items-center justify-center gap-4">
                        <Link href="https://registrasi.kampunginggris.id/?br_code=PARE" passHref={true}>
                            <button className="btn btn-warning">Daftar Sekarang</button>
                        </Link>

                        <Link href="https://kampunginggrislc.com/tanyacspare?utm_source=LP&utm_medium=buttontanyacs&utm_campaign=Organik" passHref={true}>
                            <button className="btn btn-accent">Konsultasi CS</button>
                        </Link>
                    </div>
                    <div className="divider"></div>
                </article>
            </div>
        </div>
    )
}