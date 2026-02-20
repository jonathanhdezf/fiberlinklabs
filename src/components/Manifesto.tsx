import React from 'react';

const Manifesto: React.FC = () => {
    const dnaSections = [
        {
            id: "dna-1",
            number: "01 / 05",
            title: "Funcionalidad",
            desc: "El diseño no es solo estética; es rendimiento. En FiberLink Labs, cada bit de infraestructura está optimizado para la máxima eficiencia operativa. Resolvemos problemas complejos con soluciones directas.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBvxQqyEK09sw4q_NhbiYyfaii7nKJ3sTnPI7TcV8j17j2OmIFtO8V1onMmAXKK4EXz92kYFmIFNj1iU5Rilhy-NaEO51_n6pSUnNePLsXe5S9edMy0BY3hZwm3v1ciLsELfhYYuq9vlF0ZzjijBwv7fgAnStov29SDA6RqaNzHSaL72-q2F4B_eWWo1SPliuc9NmlYQdeg89_xchYP55f8LGZcR4pQGS5anfKlYM8FvX8gEB6A_OLNhuhhAjx_d9dhq51Lc2KkExg"
        },
        {
            id: "dna-2",
            number: "02 / 05",
            title: "Ingeniería",
            desc: "La precisión es nuestra métrica de éxito. Aplicamos rigor científico en el despliegue de redes, asegurando que la latencia sea un concepto del pasado y la estabilidad una garantía del presente.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNZyV5F12H06z7G8h4JRn8y2ApUG-s27_HlsPsj-v1pBMUx0ZP-gXvU-Z2e3LZWn7cyp_aJmE1mcaSbIxDyrgIa90GxikMPtInNBba37LzA_MFkI58M6VdrymqhKgAs6qlFpTc9h__dfWFp-eIsbxapLNpY5O2Lb8K5ht6-6ssk4zeE2DHFwsgGkZHKnD0h_WWLyCT9uNinHhPOqB-7z468bXhq7320img1bGVl_E17FRkp3VSPVD6pRQr0_CtthmW_P4YWbYDrLMI"
        },
        {
            id: "dna-3",
            number: "03 / 05",
            title: "Mentalidad",
            desc: "Innovación constante. No nos conformamos con lo establecido. Nuestra mentalidad es de constante iteración, buscando siempre la próxima frontera tecnológica antes de que sea tendencia.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQdX9ievmpj0FIod470HkN2hNi1MONkc4DInXetxi4K84vQUCjcad-goxWC9M22d1oAx-HM0cpg7HRKXxZFWlv7tBgy7uqIe5R-s3AQ-EKIJKUQW35llyjrfJMjSRdVzjPTb1ppWJ4_Nxe3LZ2n_Rtbxb7fSLfgvMns7WbtVX9TOx7XM-zDciT2U6Efbhu-v1OAtjKWC7bJ-pv7sp9PgNBR5bolA2WEFCwBASvefka2_XvWUMmdLSqQ-eqVict8-pmoY6KiwC68SZ4"
        },
        {
            id: "dna-4",
            number: "04 / 05",
            title: "Escalabilidad",
            desc: "Construimos para el mañana. Nuestras infraestructuras están diseñadas de forma modular, permitiendo un crecimiento exponencial sin fricción técnica ni obsolescencia programada.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCopBj0RncDdZ46GeXNg3CZ9Br4HNRAP9ilJdhlQN0KNrDogASc4stfrurbWXaxgzJzfpMS-8uV8zVe2Whs3k0mH8Te8FLqDzvbrtI6KV0gd2LUtZWDfG5SkpKkMA7eFXKvk1UtH7hcvS997Clq8QCS-WijKiEDhnnPl_sZjE7MkHn_uY-wGdb_4MlwY7yHQWEW865PpkUeGdHa-3BA3ljn9FUNRzg9nN_1W2wWAfTuXpQNTiWAnPIfQO0e-ewJpn-50M0w-LPCmg6Z"
        },
        {
            id: "dna-5",
            number: "05 / 05",
            title: "Integridad",
            desc: "Transparencia técnica absoluta. Somos custodios de la confianza de nuestros clientes, manteniendo estándares éticos que superan las normativas industriales más exigentes.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtMqJDg1ZWqFjZfns6nfD200HKRiXCdBEpxtDDOqS-t0Zhioc6p5ajVQc8ssXAV1B7YEEt1ytD0S3iZeHK6FmLQGCGsVRkIC8D1A_jJ36-plDbRdWWcEgzLCdqUqblEEfFJ3Lg6BMxX_Zn9C-2ti6paxzJQr5QQ5lUo-sDg3Cb6AX4c7ywrX2tPTrOLE5f7KeUcwEQZ4vKFYYstA28Pgi19JO9r1eMeE-_HHsR63CTmREGbtaiOGS-my4lyGHSZkIxNvK-4rwYj3lw"
        }
    ];

    return (
        <div className="bg-background-dark text-white font-display">
            {/* Progress Indicator */}
            <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6 items-center">
                <a className="w-1.5 h-1.5 rounded-full bg-primary ring-4 ring-primary/20" href="#mision" title="Nuestra Misión"></a>
                <div className="w-px h-12 bg-primary/20"></div>
                {dnaSections.map((section) => (
                    <a key={section.id} className="w-1.5 h-1.5 rounded-full bg-slate-700 hover:bg-primary transition-colors" href={`#${section.id}`} title={section.title}></a>
                ))}
                <div className="w-px h-12 bg-primary/20"></div>
                <a className="w-1.5 h-1.5 rounded-full bg-slate-700 hover:bg-primary transition-colors" href="#vision" title="La Visión"></a>
            </nav>

            <main>
                {/* Section 1: Nuestra Misión */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden" id="mision">
                    <div className="absolute inset-0 z-0">
                        <img
                            alt="City skyline at night with digital overlays"
                            className="w-full h-full object-cover opacity-40"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7FfXlcBWpy_4myG43-YsxcExL2MvInzX4OKfqpSXBMiWUSzz_Vhhwb6UfvdUvXOPEBjlrq4QGyJa5Dwyqw0JQ5X8pYOB7TvDKOvXR4e2Kw-LDfcjyDrBIAwnb1Ri8Gu1d6ReGFqp4wnCc88tVfL45ftxBSSBORArlosJhmWrkLMS0wIGOpidd5rxKUGjrwJf01d7NOxSLijVbSZ5PqS_a_AO09X8HPbb1ttxkdbYgXLrYRo-KkY7C0eDeMi2qP_Zt-uKIv8eStFfG"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/20 to-background-dark"></div>
                    </div>
                    <div className="relative z-10 max-w-5xl px-8 text-center">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-xs font-bold tracking-[0.4em] text-primary uppercase">Foundation</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-tight text-glow uppercase">
                            Nuestra <span className="text-primary italic">Misión</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                            Redefinir la conectividad global mediante la convergencia de infraestructura física de vanguardia y arquitectura digital inteligente.
                        </p>
                        <div className="mt-12 flex justify-center">
                            <span className="material-symbols-outlined text-primary text-4xl animate-bounce">expand_more</span>
                        </div>
                    </div>
                </section>

                {/* Section 2: El ADN Labs */}
                <div id="dna">
                    {dnaSections.map((section, idx) => (
                        <section key={section.id} className={`dna-panel flex items-center ${idx % 2 === 1 ? 'bg-slate-900/40' : ''}`} id={section.id}>
                            <div className="absolute inset-0 opacity-10">
                                <img alt={section.title} className="w-full h-full object-cover" src={section.image} />
                            </div>
                            <div className="scan-line"></div>
                            <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                                    <span className="text-primary font-bold text-lg mb-4 block tracking-widest">{section.number}</span>
                                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter uppercase">{section.title}</h2>
                                    <div className="w-24 h-1 bg-primary mb-8"></div>
                                </div>
                                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                                    <p className="text-2xl text-slate-300 leading-relaxed font-light">
                                        {section.desc}
                                    </p>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                {/* Section 3: La Visión */}
                <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background-dark" id="vision">
                    <div className="container mx-auto px-8 text-center relative z-10">
                        <span className="text-xs font-bold tracking-[0.5em] text-primary uppercase mb-12 block">Futuro Proyectado</span>
                        <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter max-w-4xl mx-auto">
                            Ser el sistema nervioso de la nueva <span className="text-primary">civilización digital.</span>
                        </h2>
                        <div className="flex flex-col items-center gap-12">
                            <div className="horizon-line w-full max-w-2xl"></div>
                            <p className="text-slate-500 font-medium tracking-widest uppercase text-sm">FiberLink Labs © 2026</p>
                            <button className="group relative px-8 py-4 overflow-hidden rounded bg-transparent border border-primary text-primary transition-all hover:text-white">
                                <span className="relative z-10 font-bold tracking-widest text-sm uppercase">Únete a la Revolución</span>
                                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>
                        </div>
                    </div>
                    {/* Glow effect background */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[30vh] bg-primary/5 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] horizon-line opacity-50"></div>
                </section>
            </main>
        </div>
    );
};

export default Manifesto;
