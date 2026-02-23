const Manifesto = () => {
    const dnaSections = [
        {
            id: "dna-1",
            number: "01 / 05",
            title: "Resultados",
            desc: "Un sitio web debe ser una herramienta de ventas, no un gasto. En FiberLink Labs optimizamos cada proyecto para que cargue rápido y se vea perfecto en cualquier celular, asegurando que tus clientes siempre te encuentren.",
            image: "/manifesto_functionality.png"
        },
        {
            id: "dna-2",
            number: "02 / 05",
            title: "Infraestructura",
            desc: "Construimos el sistema nervioso de tu negocio. Desde redes estables hasta servidores locales, aplicamos ingeniería de alta precisión para que tu conexión nunca falle y tus datos estén siempre seguros.",
            image: "/manifesto_ingenieria.png"
        },
        {
            id: "dna-3",
            number: "03 / 05",
            title: "Innovación",
            desc: "Traemos la tecnología de las grandes ciudades a nuestra región. No nos conformamos con lo básico; usamos herramientas de última generación para que tu negocio local compita al nivel de los mejores del país.",
            image: "/manifesto_mentalidad.png"
        },
        {
            id: "dna-4",
            number: "04 / 05",
            title: "Crecimiento",
            desc: "Sistemas hechos para escalar. Si tu negocio crece mañana, tu tecnología crece con él. Diseñamos nuestras webs y redes de forma modular para que puedas expandirte sin fricciones ni gastos innecesarios.",
            image: "/manifesto_escalabilidad.png"
        },
        {
            id: "dna-5",
            number: "05 / 05",
            title: "Confianza",
            desc: "Trato directo y honesto. Hablamos claro y sin tecnicismos complicados. Somos tu socio local de confianza, cuidando tu infraestructura digital como si fuera la nuestra.",
            image: "/manifesto_integridad.png"
        }
    ];

    return (
        <div className="bg-background text-foreground font-display transition-colors duration-500">
            <main>
                {/* Section 1: Nuestra Misión */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden" id="mision">
                    <div className="absolute inset-0 z-0">
                        <img
                            alt="City skyline at night with digital overlays"
                            className="w-full h-full object-cover opacity-40"
                            src="/hero.png"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background"></div>
                    </div>
                    <div className="relative z-10 max-w-5xl px-8 text-center">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-xs font-bold tracking-[0.4em] text-primary uppercase">Foundation</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-none text-glow uppercase text-foreground">
                            Nuestra <span className="text-primary italic">Misión</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                            Impulsar el éxito de los negocios de la región mediante infraestructura digital sólida y un desarrollo web que realmente vende.
                        </p>
                        <div className="mt-12 flex justify-center">
                            <span className="material-symbols-outlined text-primary text-4xl animate-bounce">expand_more</span>
                        </div>
                    </div>
                </section>

                {/* Section 2: El ADN Labs */}
                <div id="dna">
                    {dnaSections.map((section, idx) => (
                        <section key={section.id} className={`dna-panel flex items-center py-24 lg:py-0 ${idx % 2 === 1 ? 'bg-primary/5 dark:bg-white/5' : 'bg-background'}`} id={section.id}>
                            <div className="absolute inset-0 opacity-15">
                                <img alt={section.title} className="w-full h-full object-cover" src={section.image} />
                            </div>
                            <div className="scan-line"></div>

                            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                                    <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <span className="text-primary font-bold text-sm lg:text-base mb-3 block tracking-[0.3em] uppercase opacity-90">
                                            {section.number}
                                        </span>
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 tracking-tighter uppercase leading-[1.1] text-foreground">
                                            {section.title}
                                        </h2>
                                        <div className="w-20 h-1.5 bg-primary/80 glow-line mb-4"></div>
                                    </div>

                                    <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <p className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light max-w-prose">
                                            {section.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                {/* Section 3: La Visión */}
                <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background transition-colors" id="vision">
                    <div className="container mx-auto px-8 text-center relative z-10">
                        <span className="text-xs font-bold tracking-[0.5em] text-primary uppercase mb-12 block">Futuro Proyectado</span>
                        <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter max-w-4xl mx-auto">
                            Digitalizar por completo la Sierra Norte y <span className="text-primary">liderar el futuro tecnológico local.</span>
                        </h2>
                        <div className="flex flex-col items-center gap-12">
                            <div className="horizon-line w-full max-w-2xl"></div>
                            <p className="text-slate-500 font-medium tracking-widest uppercase text-sm">FiberLink Labs © 2026</p>
                            <button className="group relative px-8 py-4 overflow-hidden rounded bg-transparent border border-primary text-primary transition-all hover:text-white">
                                <span className="relative z-10 font-bold tracking-widest text-sm uppercase">Empieza tu Proyecto</span>
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
