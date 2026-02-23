import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Glyph Block ── */
const Glyph = ({ symbol, label }: { symbol: string; label: string }) => (
    <div className="group flex flex-col items-center gap-3">
        <div className="size-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-500">
            {symbol}
        </div>
        <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-700/60 dark:text-amber-400/50">{label}</span>
    </div>
);

/* ── Objective Card ── */
const ObjCard = ({ num, icon, title, desc, accent }: {
    num: string; icon: string; title: string; desc: string; accent: string;
}) => (
    <div className={`group relative p-7 rounded-3xl border bg-white/60 dark:bg-stone-900/60 backdrop-blur-sm hover:-translate-y-2 transition-all duration-500 overflow-hidden ${accent}`}>
        <div className="absolute top-7 right-7 text-5xl font-black text-stone-100 dark:text-stone-800 select-none">{num}</div>
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-lg font-black text-stone-900 dark:text-stone-100 mb-3 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">{title}</h3>
        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{desc}</p>
    </div>
);

/* ── Impact Stat ── */
const ImpactStat = ({ icon, val, label, sub }: { icon: string; val: string; label: string; sub: string }) => (
    <div className="text-center group">
        <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-500">{icon}</div>
        <p className="text-4xl font-black text-amber-600 dark:text-amber-400 mb-1">{val}</p>
        <p className="font-black text-stone-900 dark:text-stone-100 text-sm mb-1">{label}</p>
        <p className="text-xs text-stone-500 dark:text-stone-500">{sub}</p>
    </div>
);

/* ══════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════ */
const Teziutlan = () => {
    const [conceptVisible, setConceptVisible] = useState(false);
    const conceptRef = useRef<HTMLDivElement>(null);
    const backLayerRef = useRef<HTMLDivElement>(null);
    const frontLayerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.title = 'Teziutlán: Piedra y Niebla · Pueblo Mágico · FiberLink Labs';
        const setMeta = (name: string, content: string) => {
            let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
            if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el); }
            el.setAttribute('content', content);
        };
        setMeta('description', 'Teziutlán: Piedra y Niebla — iniciativa de desarrollo cultural, turístico y económico para el Pueblo Mágico de Teziutlán, Puebla. Inversión, tecnología e identidad.');
        setMeta('keywords', 'Teziutlán, Pueblo Mágico, inversión cultural, turismo sostenible, desarrollo local, Piedra y Niebla, FiberLink Labs');
        return () => { document.title = 'FiberLink Labs · Diseño Web & Sistemas que Escalan'; };
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const currentY = window.scrollY;
            const offset = Math.min(currentY * 0.3, 120);
            if (backLayerRef.current) {
                backLayerRef.current.style.transform = `translateY(${offset * 0.4}px)`;
            }
            if (frontLayerRef.current) {
                frontLayerRef.current.style.transform = `translateY(${offset * 0.6}px)`;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        // Set background images via style direct to avoid lint
        const backSvg = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 400'%3E%3Cpath fill='%2378716c' d='M0,400 L0,280 L120,180 L260,240 L380,140 L500,200 L600,100 L720,160 L840,80 L960,150 L1080,90 L1200,170 L1320,110 L1440,200 L1440,400 Z'/%3E%3C/svg%3E\")";
        const frontSvg = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%2357534e' d='M0,320 L0,240 L180,160 L320,200 L440,120 L580,180 L700,80 L820,140 L940,60 L1060,130 L1180,70 L1300,150 L1440,100 L1440,320 Z'/%3E%3C/svg%3E\")";
        if (backLayerRef.current) backLayerRef.current.style.backgroundImage = backSvg;
        if (frontLayerRef.current) frontLayerRef.current.style.backgroundImage = frontSvg;
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setConceptVisible(true); observer.disconnect(); }
        }, { threshold: 0.15 });
        if (conceptRef.current) observer.observe(conceptRef.current);
        return () => observer.disconnect();
    }, []);

    const objectives = [
        {
            num: '01', icon: '💎', title: 'Atracción de Inversión',
            desc: 'Canalizar recursos privados, institucionales y gubernamentales hacia proyectos locales con alto impacto social y económico verificable.',
            accent: 'border-amber-200 dark:border-amber-800/40 hover:border-amber-400 dark:hover:border-amber-500/60',
        },
        {
            num: '02', icon: '🏛️', title: 'Rescate Histórico',
            desc: 'Documentar, digitalizar y difundir el patrimonio arquitectónico, gastronómico y cultural de la región para generaciones futuras.',
            accent: 'border-stone-200 dark:border-stone-700/40 hover:border-stone-400 dark:hover:border-stone-500/60',
        },
        {
            num: '03', icon: '🌿', title: 'Turismo Sostenible',
            desc: 'Diseñar rutas eco-culturales que beneficien a productores locales, artesanos y guías nativos, preservando el entorno natural de la Sierra.',
            accent: 'border-emerald-200 dark:border-emerald-800/40 hover:border-emerald-400 dark:hover:border-emerald-500/60',
        },
        {
            num: '04', icon: '🤖', title: 'Inteligencia Artificial',
            desc: 'Usar IA para categorizar experiencias turísticas, personalizar itinerarios, analizar flujos de visitantes y predecir temporadas de alta demanda.',
            accent: 'border-sky-200 dark:border-sky-800/40 hover:border-sky-400 dark:hover:border-sky-500/60',
        },
    ];

    const valueProps = [
        {
            icon: '🗺️',
            title: 'Plataforma Central',
            desc: 'Un ecosistema digital que unifica información turística, proyectos de inversión, agenda cultural y directorio de negocios locales en una sola interfaz moderna.',
        },
        {
            icon: '🔄',
            title: 'Escalable y Replicable',
            desc: 'La arquitectura modular permite clonar y adaptar la plataforma a comunidades vecinas como Zacapoaxtla, Cuetzalan o Tlatlauquitepec con mínimo esfuerzo técnico.',
        },
        {
            icon: '🌐',
            title: 'Puente Glocal',
            desc: 'Conecta la identidad local con marketplaces internacionales, fondos de turismo cultural y redes de inversión para amplificar el alcance más allá de la región.',
        },
    ];

    const impacts = [
        { icon: '👷', val: '200+', label: 'Empleos directos', sub: 'turismo, tech y cultura' },
        { icon: '🎓', val: '500+', label: 'Jóvenes capacitados', sub: 'digital skills & emprendimiento' },
        { icon: '🏘️', val: '5+', label: 'Comunidades', sub: 'beneficiadas en la Sierra' },
        { icon: '📈', val: '×3', label: 'Flujo turístico', sub: 'proyección a 5 años' },
    ];

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 overflow-x-hidden">

            {/* ── Floating Nav ── */}
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-2rem)] max-w-3xl">
                <div className="rounded-2xl px-5 py-3 flex items-center justify-between bg-white/70 dark:bg-stone-900/70 backdrop-blur-xl border border-stone-200/60 dark:border-stone-700/40 shadow-lg shadow-stone-900/5">
                    <Link to="/" className="flex items-center gap-2 text-sm font-bold text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                        <span className="material-symbols-outlined text-base">arrow_back</span>
                        <span className="hidden sm:block">FiberLink Labs</span>
                    </Link>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] text-amber-700 dark:text-amber-400 truncate px-2">Teziutlán · Piedra y Niebla</span>
                    <a href="#invertir" className="text-[10px] sm:text-xs font-black uppercase tracking-widest px-4 py-2 bg-amber-600 text-white rounded-xl hover:bg-amber-500 transition-all active:scale-95 whitespace-nowrap shadow-md shadow-amber-600/20">
                        Invertir
                    </a>
                </div>
            </nav>

            {/* ══════════════════════════════════════════════════
                HERO — ENCABEZADO
            ══════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden pb-24 px-6 pt-32">

                {/* Sky gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-400/30 via-stone-200/50 to-stone-50 dark:from-slate-900 dark:via-stone-900 dark:to-stone-950"></div>

                {/* Mountain silhouette layer — back */}
                <div
                    ref={backLayerRef}
                    className="absolute bottom-0 left-0 right-0 h-[70vh] bg-no-repeat bg-bottom bg-cover opacity-20 dark:opacity-10"
                ></div>

                {/* Mountain silhouette layer — front */}
                <div
                    ref={frontLayerRef}
                    className="absolute bottom-0 left-0 right-0 h-[55vh] bg-no-repeat bg-bottom bg-cover opacity-30 dark:opacity-20"
                ></div>

                {/* Mist overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-stone-50 via-stone-50/80 to-transparent dark:from-stone-950 dark:via-stone-950/70 dark:to-transparent"></div>

                {/* Floating fog particles */}
                <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                    {([
                        { cls: 'left-[5%] top-[30%] w-[30vw] h-32 [animation:drift_18s_ease-in-out_0s_infinite]' },
                        { cls: 'left-[35%] top-[45%] w-[25vw] h-24 [animation:drift_22s_ease-in-out_3s_infinite]' },
                        { cls: 'left-[60%] top-[25%] w-[35vw] h-28 [animation:drift_16s_ease-in-out_6s_infinite]' },
                        { cls: 'left-[10%] top-[60%] w-[20vw] h-20 [animation:drift_20s_ease-in-out_9s_infinite]' },
                    ] as { cls: string }[]).map(({ cls }, i) => (
                        <div key={i} className={`absolute rounded-full bg-white/20 dark:bg-white/5 blur-3xl ${cls}`}></div>
                    ))}
                </div>

                {/* Hero content */}
                <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-[0.25em] mb-10 backdrop-blur-sm">
                        <span className="text-base">⛰️</span>
                        Pueblo Mágico · Sierra Norte de Puebla
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-6 uppercase">
                        <span className="block text-stone-800 dark:text-stone-100">Teziutlán</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-stone-500 dark:from-amber-400 dark:via-amber-300 dark:to-stone-400">
                            Piedra
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-300 to-stone-300 dark:from-slate-400 dark:via-slate-300 dark:to-slate-500 italic">
                            &amp; Niebla&nbsp;
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
                        Donde la historia se talla en roca y el futuro flota entre nubes. Una plataforma que conecta la identidad más profunda de la Sierra con la visión de un desarrollo sostenible, tecnológico y humano.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <a href="#invertir" className="group px-8 py-4 bg-amber-600 text-white font-black rounded-2xl shadow-2xl shadow-amber-600/25 hover:bg-amber-500 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2">
                            Invertir en Piedra y Niebla
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                        <a href="#proyecto" className="px-8 py-4 bg-white/60 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 font-black rounded-2xl hover:bg-white dark:hover:bg-stone-800 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                            <span className="material-symbols-outlined">explore</span>
                            Conocer el Proyecto
                        </a>
                    </div>

                    {/* Glyph strip */}
                    <div className="flex flex-wrap justify-center gap-8 sm:gap-12 py-8 px-6 rounded-3xl bg-white/50 dark:bg-stone-900/50 border border-stone-200/60 dark:border-stone-800/40 backdrop-blur-md">
                        <Glyph symbol="⛰️" label="Sierra Norte" />
                        <Glyph symbol="🌫️" label="Pueblo Mágico" />
                        <Glyph symbol="🏛️" label="Patrimonio" />
                        <Glyph symbol="🌿" label="Naturaleza" />
                        <Glyph symbol="💻" label="Tecnología" />
                        <Glyph symbol="🤝" label="Comunidad" />
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                01 · RESUMEN DEL PROYECTO
            ══════════════════════════════════════════════════ */}
            <section id="proyecto" className="py-28 px-6 relative overflow-hidden">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-amber-400/[0.06] blur-[100px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-center">

                    {/* Text — 3 cols */}
                    <div className="lg:col-span-3">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 mb-5">01 · Resumen del Proyecto</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-[0.9] mb-8 text-stone-900 dark:text-stone-100">
                            Una iniciativa que<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-stone-500 dark:from-amber-400 dark:to-stone-400 italic">construye futuro </span>
                        </h2>
                        <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6 font-medium text-lg">
                            <strong className="text-stone-900 dark:text-stone-100">"Teziutlán: Piedra y Niebla"</strong> es una iniciativa local que busca atraer inversión privada e institucional para impulsar el desarrollo <strong className="text-amber-700 dark:text-amber-400">cultural, turístico y económico</strong> de la región Sierra Norte de Puebla.
                        </p>
                        <p className="text-stone-500 dark:text-stone-500 leading-relaxed font-medium mb-6">
                            Se construye sobre una <strong className="text-stone-800 dark:text-stone-300">plataforma digital de nueva generación</strong>: escalable, modular y replicable en comunidades vecinas con identidad y potencial similares. No solo es un sitio web; es la infraestructura básica para el desarrollo digital de toda la Sierra Norte.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {['Pueblo Mágico', 'Sierra Norte de Puebla', 'Inversión Social', 'Desarrollo Digital', 'Turismo Cultural'].map((tag, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 text-xs font-bold uppercase tracking-wide border border-stone-200 dark:border-stone-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Stats card — 2 cols */}
                    <div className="lg:col-span-2 space-y-4">
                        {([
                            { icon: '🗓️', label: 'Año de fundación', val: '2024', color: 'text-amber-600 dark:text-amber-400' },
                            { icon: '🏙️', label: 'Ciudades de impacto', val: '5+ en Sierra Norte', color: 'text-emerald-700 dark:text-emerald-400' },
                            { icon: '📡', label: 'Modelo tecnológico', val: 'SaaS Local replicable', color: 'text-sky-700 dark:text-sky-400' },
                            { icon: '🌐', label: 'Alcance proyectado', val: 'Regional → Nacional', color: 'text-violet-700 dark:text-violet-400' },
                        ] as { icon: string; label: string; val: string; color: string }[]).map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-2xl shrink-0">{item.icon}</span>
                                <div>
                                    <p className="text-xs text-stone-400 font-bold uppercase tracking-wider mb-0.5">{item.label}</p>
                                    <p className={`font-black text-sm ${item.color}`}>{item.val}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                02 · CONCEPTO CENTRAL
            ══════════════════════════════════════════════════ */}
            <section ref={conceptRef} className="py-28 px-6 relative overflow-hidden bg-stone-900 dark:bg-stone-950">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,251,235,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,251,235,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(217,119,6,0.06),transparent)]"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-500 mb-4">02 · Concepto Central</p>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
                            Dos fuerzas,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-stone-400 italic">una identidad&nbsp;</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* La Piedra */}
                        <div className={`relative p-10 rounded-3xl overflow-hidden border border-amber-800/30 bg-gradient-to-br from-amber-950/80 to-stone-950/90 transition-all duration-700 ${conceptVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M30%200L60%2030L30%2060L0%2030Z%22%20fill%3D%22none%22%20stroke%3D%22rgba(217%2C119%2C6%2C0.05)%22%20stroke-width%3D%221%22/%3E%3C/svg%3E')] opacity-60"></div>
                            <div className="relative z-10">
                                <p className="text-6xl mb-6">🪨</p>
                                <h3 className="text-3xl font-black text-amber-400 uppercase tracking-tight mb-4">La Piedra</h3>
                                <p className="text-stone-300 leading-relaxed mb-6 font-medium">
                                    Símbolo de <strong className="text-amber-400">solidez, permanencia e historia</strong>. Las piedras de Teziutlán guardan siglos de civilización, arte y resistencia. Son la base sólida sobre la que se construye todo proyecto duradero.
                                </p>
                                <ul className="space-y-2">
                                    {['Fundamentos históricos verificables', 'Patrimonio tangible y documentado', 'Confianza generada por resultados'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-stone-400">
                                            <span className="size-1.5 rounded-full bg-amber-500 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* La Niebla */}
                        <div className={`relative p-10 rounded-3xl overflow-hidden border border-slate-700/30 bg-gradient-to-br from-slate-900/80 to-stone-950/90 transition-all duration-700 delay-300 ${conceptVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                            <div className="absolute inset-0">
                                {([
                                    'left-[-10%] top-[20%] w-[60%] h-24 [animation:drift_15s_ease-in-out_0s_infinite]',
                                    'left-[30%] top-[50%] w-[50%] h-20 [animation:drift_20s_ease-in-out_5s_infinite]',
                                    'left-[10%] top-[70%] w-[40%] h-16 [animation:drift_18s_ease-in-out_2s_infinite]',
                                ] as string[]).map((cls, i) => (
                                    <div key={i} className={`absolute rounded-full bg-white/[0.03] blur-3xl ${cls}`}></div>
                                ))}
                            </div>
                            <div className="relative z-10">
                                <p className="text-6xl mb-6">🌫️</p>
                                <h3 className="text-3xl font-black text-slate-300 uppercase tracking-tight mb-4">La Niebla</h3>
                                <p className="text-stone-400 leading-relaxed mb-6 font-medium">
                                    Símbolo de <strong className="text-slate-300">misterio, inspiración y posibilidad</strong>. La niebla de la Sierra invita a explorar, descubrir y soñar. Es el futuro que no se ve con claridad todavía, pero que se siente con certeza.
                                </p>
                                <ul className="space-y-2">
                                    {['Innovación y creatividad sin límites', 'Visión estratégica a largo plazo', 'Apertura a lo nuevo y lo posible'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-stone-500">
                                            <span className="size-1.5 rounded-full bg-slate-400 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Union bar */}
                    <div className={`p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-amber-950/50 via-stone-900/60 to-slate-950/50 text-center transition-all duration-700 delay-500 ${conceptVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="text-white/40 text-xs uppercase tracking-widest font-black mb-4">La síntesis</p>
                        <p className="text-xl md:text-2xl font-black text-white leading-relaxed max-w-3xl mx-auto">
                            <span className="text-amber-400">Tradición</span> con <span className="text-sky-400">innovación</span> · <span className="text-emerald-400">Turismo</span> con <span className="text-violet-400">tecnología</span> · <span className="text-rose-400">Cultura</span> con <span className="text-emerald-400">sostenibilidad</span>
                        </p>
                        <p className="text-stone-500 mt-4 font-medium">Teziutlán no olvida sus raíces. Las eleva.</p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                03 · OBJETIVOS
            ══════════════════════════════════════════════════ */}
            <section className="py-28 px-6 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-72 h-72 bg-emerald-400/[0.04] blur-[120px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 mb-4">03 · Objetivos</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 dark:text-stone-100 uppercase">
                            Cuatro pilares,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600 dark:from-amber-400 dark:to-emerald-400 italic">un propósito </span>
                        </h2>
                        <p className="text-stone-500 dark:text-stone-500 mt-4 max-w-xl mx-auto font-medium">
                            Cada objetivo está diseñado para generar impacto real, medible y sostenido en la comunidad de Teziutlán y la región Sierra Norte.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                        {objectives.map((o, i) => <ObjCard key={i} {...o} />)}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                04 · PROPUESTA DE VALOR
            ══════════════════════════════════════════════════ */}
            <section className="py-28 px-6 relative overflow-hidden border-y border-stone-200/60 dark:border-stone-800/40 bg-stone-100/50 dark:bg-stone-900/30">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/[0.04] blur-[120px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 mb-4">04 · Propuesta de Valor</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 dark:text-stone-100 uppercase">
                            Más que un sitio web,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-sky-600 dark:from-amber-400 dark:to-sky-400 italic">un ecosistema&nbsp;</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {valueProps.map((vp, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-300 dark:hover:border-amber-700/60 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-500 hover:-translate-y-2">
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{vp.icon}</div>
                                <h3 className="font-black text-xl text-stone-900 dark:text-stone-100 mb-4 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">{vp.title}</h3>
                                <p className="text-stone-500 dark:text-stone-500 text-sm leading-relaxed">{vp.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Expansion roadmap */}
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-50 to-stone-100 dark:from-amber-950/30 dark:to-stone-900 border border-amber-200/60 dark:border-amber-800/20">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-700 dark:text-amber-500 mb-6 text-center">Mapa de expansión · Sierra Norte de Puebla</p>
                        <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-bold">
                            {([
                                { name: 'Teziutlán', status: 'Activo', sc: 'bg-amber-500 text-white' },
                                { name: '→', status: '', sc: 'text-stone-400' },
                                { name: 'Zacapoaxtla', status: 'Próximo', sc: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400' },
                                { name: '→', status: '', sc: 'text-stone-400' },
                                { name: 'Cuetzalan', status: 'Proyectado', sc: 'bg-stone-100 dark:bg-stone-800 text-stone-500' },
                                { name: '→', status: '', sc: 'text-stone-400' },
                                { name: 'Tlatlauqui', status: 'Proyectado', sc: 'bg-stone-100 dark:bg-stone-800 text-stone-500' },
                                { name: '→', status: '', sc: 'text-stone-400' },
                                { name: 'Sierra Norte', status: 'Visión', sc: 'bg-gradient-to-r from-amber-400 to-emerald-400 text-white' },
                            ] as { name: string; status: string; sc: string }[]).map((node, i) => (
                                node.status
                                    ? <span key={i} className={`px-4 py-2 rounded-xl ${node.sc} text-xs uppercase tracking-wider`}>{node.name}<br /><span className="opacity-70 font-normal normal-case">{node.status}</span></span>
                                    : <span key={i} className={`text-2xl ${node.sc}`}>{node.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                05 · IMPACTO ESPERADO
            ══════════════════════════════════════════════════ */}
            <section className="py-28 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(217,119,6,0.04),transparent)]"></div>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500 mb-4">05 · Impacto Esperado</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 dark:text-stone-100 uppercase">
                            Números que<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-600 dark:from-amber-400 dark:to-emerald-400 italic">importan&nbsp;</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                        {impacts.map((imp, i) => <ImpactStat key={i} {...imp} />)}
                    </div>

                    {/* 3 pillars */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {([
                            {
                                gradient: 'from-amber-500 to-orange-600', icon: '💼',
                                title: 'Empleo y Oportunidad',
                                items: ['Guías turísticos certificados', 'Creadores de contenido local', 'Desarrolladores tech nativos', 'Artesanos con e-commerce propio'],
                            },
                            {
                                gradient: 'from-emerald-500 to-teal-600', icon: '🏛️',
                                title: 'Cultura y Patrimonio',
                                items: ['Digitalización de archivos históricos', 'Mapa interactivo de sitios arqueológicos', 'Programas de rescate gastronómico', 'Red de museos comunitarios'],
                            },
                            {
                                gradient: 'from-sky-500 to-blue-600', icon: '📈',
                                title: 'Crecimiento Económico',
                                items: ['Flujo turístico incrementado', 'Nuevos emprendimientos apoyados', 'Exportación de productos locales', 'Inversión externa atraída'],
                            },
                        ] as { gradient: string; icon: string; title: string; items: string[] }[]).map((card, i) => (
                            <div key={i} className="relative overflow-hidden rounded-3xl">
                                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-90`}></div>
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                                <div className="relative z-10 p-8">
                                    <span className="text-4xl block mb-5">{card.icon}</span>
                                    <h3 className="text-xl font-black text-white mb-5 uppercase">{card.title}</h3>
                                    <ul className="space-y-2.5">
                                        {card.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-white/80">
                                                <span className="size-1.5 rounded-full bg-white/60 shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                06 · LLAMADO A LA ACCIÓN
            ══════════════════════════════════════════════════ */}
            <section id="invertir" className="py-32 px-6 relative overflow-hidden bg-stone-900 dark:bg-stone-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(217,119,6,0.08),transparent)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,251,235,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,251,235,0.015)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent"></div>

                {/* Mist */}
                <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none select-none overflow-hidden">
                    {([
                        'left-[-5%] w-[40%] h-24 [animation:drift_20s_ease-in-out_0s_infinite]',
                        'left-[30%] w-[35%] h-20 [animation:drift_16s_ease-in-out_4s_infinite]',
                        'left-[60%] w-[45%] h-28 [animation:drift_24s_ease-in-out_2s_infinite]',
                    ] as string[]).map((cls, i) => (
                        <div key={i} className={`absolute bottom-0 rounded-full bg-white/[0.03] blur-3xl ${cls}`}></div>
                    ))}
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-500 mb-6">06 · Llamado a la Acción</p>

                    <div className="text-7xl mb-8">⛰️</div>

                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-white">
                        Sé parte de<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-stone-400 italic">
                            la historia&nbsp;
                        </span>
                    </h2>

                    <p className="text-xl text-stone-400 font-medium mb-4 max-w-2xl mx-auto">
                        Teziutlán lleva siglos de pie, tallado en piedra. Ahora construimos su siguiente capítulo con visión, datos y tecnología.
                    </p>
                    <p className="text-stone-600 font-medium mb-14 max-w-xl mx-auto">
                        Inversionistas, instituciones educativas, organismos culturales y comunidad local: <strong className="text-amber-400">tu participación transforma.</strong>
                    </p>

                    {/* CTA options */}
                    <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
                        {([
                            { icon: '💎', label: 'Inversionista', desc: 'Proyectos con retorno social y económico' },
                            { icon: '🏛️', label: 'Institución', desc: 'Alianza cultural o educativa' },
                            { icon: '🤝', label: 'Comunidad', desc: 'Participa como activo local' },
                        ] as { icon: string; label: string; desc: string }[]).map((cta, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 hover:bg-white/10 transition-all cursor-pointer text-center group">
                                <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">{cta.icon}</span>
                                <p className="font-black text-white text-sm mb-1">{cta.label}</p>
                                <p className="text-[11px] text-stone-500 leading-snug">{cta.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
                        <a
                            href="mailto:contacto@fiberlinklabs.com?subject=Inversión%20Teziutlán%3A%20Piedra%20y%20Niebla"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-amber-600 text-white font-black text-lg rounded-2xl shadow-2xl shadow-amber-600/25 hover:bg-amber-500 hover:-translate-y-1 active:scale-95 transition-all"
                        >
                            <span className="material-symbols-outlined">diamond</span>
                            Invierte en Piedra y Niebla
                        </a>
                        <a
                            href="https://wa.me/522311024672?text=Hola,%20me%20interesa%20el%20proyecto%20Teziutlán:%20Piedra%20y%20Niebla"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl border border-white/15 text-white font-black hover:border-amber-500/40 hover:text-amber-400 transition-all"
                        >
                            <span className="material-symbols-outlined">chat</span>
                            Hablar por WhatsApp
                        </a>
                    </div>

                    <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-stone-600 text-sm">
                        <span>Una iniciativa apoyada por</span>
                        <Link to="/" className="text-amber-500 hover:text-amber-400 font-bold transition-colors">
                            FiberLink Labs · Fiberlink Servicios TIC
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teziutlan;
