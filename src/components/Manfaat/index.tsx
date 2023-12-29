"use client"

export default function Card() {
    const content = [
        {
            title: 'Metode berkualitas',
            desc: 'Integrated Intensive Program, sistem belajar yang terintegrasi dari speaking, grammar, dan pronounciation bakal mempercepat kamu mahir berbahasa Inggris.'
        },
        {
            title: 'Pengajar Berpengalaman',
            desc: 'LC memilih pengajar terbaik dan berpengalaman untuk memastikan kamu dapet pembelajaran yang top-notch.'
        },
        {
            title: 'Metode Belajar Fun',
            desc: 'Pengajar di LC penuh kreatifitas yang bikin suasana belajar jadi asik dan mudah dipahami.'
        },
        {
            title: 'Lingkungan yang Mendukung',
            desc: 'LC nyediain English area, jadi kamu bisa praktik speaking English 24 Jam biar makin natural. Ada juga event penunjang yang aik dan bisa ningkatin ke-PD-anmu.'
        },
        {
            title: 'Tutor Pendamping Asrama',
            desc: 'Selain nyediain camp yang nyaman, kamu juga bakal didampingi tutor pendamping yang friendly dan ramah, siap jadi bestie-mu selama di camp.'
        },
        {
            title: 'Banyak Chanel Pembayaran',
            desc: 'Kamu bisa bayar dari mana aja dan kapan aja'
        },
        {
            title: 'Ikatan Kekeluargaan',
            desc: 'Rasakan hangatnya keluarga baru dari berbagai kota yang siap bikin lupa jauh dari rumah dengan sejuta kenangan indah.'
        },
        {
            title: 'More than Just Learning',
            desc: 'Jadwal yang terstruktur bakal melatih kamu menjadi terstruktur, disiplin, dan menjadi pribadi percaya diri yang lebih keren.'
        },
    ]

    return (
        <div className="py-10 flex flex-col items-center justify-center bg-base-content">
            <article className="container prose flex flex-col w-full text-center mb-1">
                <h1 className="text-base-100">
                    Ini 8 Hal yang Bakal
                    <br />
                    Kamu Dapetin di LC
                </h1>
            </article>

            <div className="container grid grid-cols-1 gap-2 sm:grid sm:grid-cols-3 md:grid-cols-4 md:gap-4">
                {content.map((item, index) => (
                    <div key={index} className="card shadow-md">
                        <div className="card-body text-base-100">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}