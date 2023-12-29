"use client"

export default function Card() {
    const content = [
        {
            title: 'Confidence Booster',
            desc: 'LC akan ningkatin ke-pd-anmu dengan public speaking di depan teman-teman, jadi kamu terbiasa tampil di depan umum.'
        },
        {
            title: 'Grammar Hack',
            desc: 'Belajar grammar jadi mudah dan fun dengan teknik storytelling dan metode translation yang unik, bikin kamu jago mengaplikasikan ke dalam kalimat.'
        },
        {
            title: 'Speak Properly',
            desc: 'Latihan mengucapkan kosa kata bahasa Inggris ala native speaker di LC, dengan audio dan challenge seru yang bakal bikin kamu lancar berbahasa Inggris.'
        },
        {
            title: 'Speaking Without Thinking',
            desc: 'Dengan camp English area, jadikan kamu lancar dan natural berbahasa Inggris dan berbicara tanpa mikir ekstra.'
        },
        {
            title: 'Conceptual Mapping Skills',
            desc: 'Teacher LC akan mengajarkan kamu cara efektif merangkum pelajaran atau artikel dengan cepat dan mempresentasikannya kembali secara akurat.'
        },
        {
            title: 'English for Spesific Purpose',
            desc: 'LC akan membekali kamu dengan kosa kata dan hal lain yang berhubungan dengan tujuan belajar bahasa Inggrismu.'
        },
        {
            title: 'Critical Thinking',
            desc: 'Games dan aktivitas seru seperti English debate dan random question bakal asah kemampuan berpikir, berinovasi, dan berargumen dengan cerdas, sambil boost confidence-mu untuk berani sepak up berbahasa Inggris.'
        },
    ]

    return (
        <div className="py-10 flex flex-col items-center justify-center bg-base-content">
            <article className="container prose mb-1 text-center">
                <h1 className="text-base-100">
                    7 Metode Ini Bikin Ribuan Member
                    <br />
                    Lancar Berbahasa Inggris
                </h1>
            </article>

            <div className="container grid grid-cols-1 gap-4 content-center sm:grid sm:grid-cols-3">
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