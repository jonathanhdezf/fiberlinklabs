import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Animated Counter ── */
const useCounter = (end: number, duration = 2000, start = false) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (ts: number) => {
            if (!startTime) startTime = ts;
            const p = Math.min((ts - startTime) / duration, 1);
            setCount(Math.floor(p * end));
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [end, duration, start]);
    return count;
};

/* ── Phase Card ── */
const PhaseCard = ({ num, title, period, items, accent }: { num: string; title: string; period: string; items: string[]; accent: string }) => (
    <div className={`relative p-8 rounded-3xl border bg-white/60 dark:bg-stone-900/60 backdrop-blur-sm hover:-translate-y-1 transition-all duration-500 group overflow-hidden border-stone-200 dark:border-stone-700/50`}>
        <div className={`absolute top-0 left-0 w-1 h-full ${accent} rounded-l-3xl`}></div>
        <div className="absolute -top-6 -right-6 text-[8rem] font-black opacity-[0.04] text-stone-900 dark:text-white select-none leading-none">{num}</div>
        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 ${accent.replace('bg-', 'bg-').replace('-500', '-100')} ${accent.replace('bg-', 'text-').replace('-500', '-700')}`}>{period}</span>
        <h3 className="text-xl font-black text-stone-900 dark:text-white mb-4">{title}</h3>
        <ul className="space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-400">
                    <span className={`mt-1.5 size-1.5 rounded-full shrink-0 ${accent}`}></span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

/* ══════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════ */
const Teziutlan = () => {
    const [impactVisible, setImpactVisible] = useState(false);
    const impactRef = useRef<HTMLDivElement>(null);

    const visitors = useCounter(80000, 2200, impactVisible);
    const jobs = useCounter(1200, 2000, impactVisible);
    const families = useCounter(450, 1800, impactVisible);
    const roi = useCounter(35, 1500, impactVisible);

    useEffect(() => {
        document.title = 'Teziutlán: Piedra y Niebla | Iniciativas Locales · FiberLink Labs';
        const setMeta = (name: string, content: string, property = false) => {
            const attr = property ? 'property' : 'name';
            let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
            if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
            el.setAttribute('content', content);
        };
        setMeta('description', 'Teziutlán: Piedra y Niebla es un proyecto de desarrollo cultural, turístico y económico para transformar Teziutlán, Puebla en un destino de referencia nacional.');
        setMeta('keywords', 'Teziutlán, Puebla, turismo cultural, inversión social, desarrollo local, Piedra y Niebla, iniciativas locales');
        return () => { document.title = 'FiberLink Labs · Diseño Web & Sistemas que Escalan'; };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setImpactVisible(true); observer.disconnect(); } }, { threshold: 0.3 });
        if (impactRef.current) observer.observe(impactRef.current);
        return () => observer.disconnect();
    }, []);

    const phases = [
        {
            num: '01', title: 'Diagnóstico y Diseño Estratégico', period: '2025 · Meses 1–4',
            accent: 'bg-amber-500',
            items: ['Mapeo cultural y patrimonial del territorio', 'Consulta comunitaria y asambleas participativas', 'Diseño arquitectónico de nodos turísticos', 'Plan maestro de imagen urbana'],
        },
        {
            num: '02', title: 'Infraestructura y Habilitación', period: '2025–2026 · Meses 5–14',
            accent: 'bg-emerald-500',
            items: ['Rehabilitación del centro histórico y miradores', 'Construcción del Centro Cultural "La Niebla"', 'Red de señalización turística bilingüe', 'Habilitación de rutas de senderismo certificadas'],
        },
        {
            num: '03', title: 'Activación Económica', period: '2026 · Meses 15–22',
            accent: 'bg-sky-500',
            items: ['Incubación de 50+ micronegocios artesanales', 'Festival inaugural "Piedra y Niebla" (proyección 20K visitantes)', 'Plataforma digital de turismo experiencial', 'Alianzas con operadores turísticos nacionales'],
        },
        {
            num: '04', title: 'Consolidación y Escala', period: '2027+ · Expansión',
            accent: 'bg-violet-500',
            items: ['Registro como Pueblo Mágico (en trámite)', 'Modelo exportable a 3 municipios vecinos', 'Fondo de reinversión comunitaria perpetuo', 'Certificación internacional de turismo sostenible'],
        },
    ];

    const values = [
        { icon: 'museum', title: 'Patrimonio Vivo', desc: 'Rescate y activación de 12+ sitios culturales con historia de más de 400 años en la región serrana.' },
        { icon: 'groups', title: 'Empleo Local', desc: 'Generación de 1,200 empleos directos e indirectos con enfoque en comunidades indígenas y jóvenes.' },
        { icon: 'eco', title: 'Sostenibilidad', desc: 'Modelo de turismo regenerativo con neutralidad de carbono certificada para 2028.' },
        { icon: 'volunteer_activism', title: 'Impacto Inmediato', desc: 'Cada donación tiene destino específico y trazable: cultura, educación o infraestructura comunitaria.' },
        { icon: 'public', title: 'Alcance Regional', desc: 'Tu apoyo detonara desarrollo para 8 municipios de la Sierra Norte de Puebla con 280,000 habitantes.' },
        { icon: 'favorite', title: 'Legado Duradero', desc: 'Las obras e instituciones que construimos juntos perdurarán por generaciones en la comunidad.' },
    ];

    const gallery = [
        { src: '/teziutlan-hero.jpg', label: 'Vista Panorámica · Sierra Norte', tall: true },
        { src: '/teziutlan-1.jpg', label: 'Centro Histórico · Arquitectura Colonial' },
        { src: '/teziutlan-2.jpg', label: 'Artesanías · Identidad Totonaca' },
        { src: '/teziutlan-3.jpg', label: 'Niebla · Naturaleza y Mística' },
        { src: '/teziutlan-4.jpg', label: 'Gastronomía · Sabor de la Sierra' },
    ];

    return (
        <div className="min-h-screen bg-[#f5f0e8] dark:bg-[#0d0b07] text-stone-900 dark:text-stone-100 overflow-x-hidden">

            {/* ── Floating Nav ── */}
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-2rem)] max-w-3xl">
                <div className="rounded-2xl px-5 py-3 flex items-center justify-between bg-stone-950/70 backdrop-blur-md border border-white/10">
                    <Link to="/" className="flex items-center gap-2 text-sm font-bold text-stone-400 hover:text-amber-400 transition-colors">
                        <span className="material-symbols-outlined text-base">arrow_back</span>
                        <span className="hidden sm:block">FiberLink Labs</span>
                    </Link>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-amber-400">Iniciativas Locales · Teziutlán</span>
                    <a href="#donar" className="text-[10px] sm:text-xs font-black uppercase tracking-widest px-4 py-2 bg-amber-500 text-stone-950 rounded-xl hover:bg-amber-400 transition-all active:scale-95">
                        Donar
                    </a>
                </div>
            </nav>

            {/* ══════════════════════════════════════════════════
                HERO – Cinematic Full Screen
            ══════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
                {/* Background image + overlays */}
                <div className="absolute inset-0">
                    <img src="/teziutlan-hero.jpeg" alt="Teziutlán panorama" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-[#0d0b07]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 to-transparent"></div>
                </div>

                {/* Mist effect layers */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#f5f0e8] dark:from-[#0d0b07] to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>

                {/* Hero Content */}
                <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                        </span>
                        Iniciativa Local · Teziutlán, Puebla México
                    </div>

                    <h1 className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-6 uppercase text-white">
                        Teziutlán<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-stone-300 italic">
                            Piedra & Niebla
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
                        Donde la piedra centenaria se funde con la niebla de la sierra. Un proyecto para convertir la riqueza cultural e histórica de Teziutlán en motor de desarrollo sostenible para su gente.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#vision" className="group px-8 py-4 bg-amber-500 text-stone-950 font-black rounded-2xl shadow-2xl shadow-amber-500/30 hover:bg-amber-400 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2">
                            Conoce el Proyecto
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                        <a href="#donar" className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 text-white font-black rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">volunteer_activism</span>
                            Cómo Donar
                        </a>
                    </div>

                    {/* Scroll */}
                    <div className="mt-16 flex flex-col items-center gap-2 text-stone-500">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Descubrir</span>
                        <div className="w-px h-12 bg-gradient-to-b from-amber-400 to-transparent animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                CONCEPTO – Descripción
            ══════════════════════════════════════════════════ */}
            <section id="vision" className="py-32 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-500 mb-5">01 · El Concepto</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 uppercase leading-[0.9]">
                            Una ciudad que <br />
                            <span className="text-amber-500 italic">espera ser vista</span>
                        </h2>
                        <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6 font-medium text-lg">
                            Teziutlán es una joya escondida en la Sierra Norte de Puebla. Con más de 400 años de historia, arquitectura colonial intacta, tradiciones totonacas vivas y paisajes de montaña envueltos en niebla perpetua, la ciudad posee un potencial cultural y turístico extraordinario que aún no ha sido capitalizado.
                        </p>
                        <p className="text-stone-600 dark:text-stone-300 leading-relaxed font-medium">
                            <strong className="text-stone-900 dark:text-white">"Piedra y Niebla"</strong> es el concepto identitario del proyecto: la piedra representa la solidez histórica, la arquitectura, las raíces; la niebla evoca lo místico, lo natural, lo que envuelve y transforma. Juntos, son la esencia de Teziutlán.
                        </p>

                        <div className="mt-10 grid grid-cols-3 gap-4">
                            {[
                                { icon: 'history_edu', label: 'Historia Viva', val: '400+', unit: 'años' },
                                { icon: 'forest', label: 'Área Natural', val: '85', unit: 'km²' },
                                { icon: 'people', label: 'Habitantes', val: '100K+', unit: 'personas' },
                            ].map((s, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-white dark:bg-stone-900/70 border border-stone-200 dark:border-stone-700/50 text-center">
                                    <span className="material-symbols-outlined text-amber-500 text-2xl">{s.icon}</span>
                                    <p className="text-xl font-black text-stone-900 dark:text-white mt-1">{s.val}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">{s.unit}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-5">
                        {[
                            { icon: 'palette', color: 'text-amber-500 bg-amber-50 dark:bg-amber-900/20', title: 'Propósito Cultural', desc: 'Rescatar y activar el patrimonio histórico, artístico y gastronómico de Teziutlán como activo cultural de México.' },
                            { icon: 'travel_explore', color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20', title: 'Motor Turístico', desc: 'Posicionar a Teziutlán como destino turístico de referencia en la Sierra Norte, con 80,000 visitantes anuales en 3 años.' },
                            { icon: 'account_balance', color: 'text-sky-500 bg-sky-50 dark:bg-sky-900/20', title: 'Desarrollo Económico', desc: 'Generar un ecosistema de micronegocios, artesanías y servicios turísticos que eleven el ingreso per cápita de la región.' },
                            { icon: 'nature', color: 'text-violet-500 bg-violet-50 dark:bg-violet-900/20', title: 'Sostenibilidad', desc: 'Modelo de desarrollo que protege los ecosistemas de la sierra y garantiza que el progreso no destruya lo que lo inspira.' },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-stone-900/70 border border-stone-200 dark:border-stone-700/50 hover:border-amber-300 dark:hover:border-amber-700 transition-all group">
                                <div className={`size-12 shrink-0 rounded-xl ${item.color} flex items-center justify-center`}>
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <div>
                                    <h4 className="font-black text-stone-900 dark:text-white mb-1">{item.title}</h4>
                                    <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                IMPACTO ESPERADO – Animated Counters
            ══════════════════════════════════════════════════ */}
            <section ref={impactRef} className="py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-stone-950"></div>
                <div className="absolute inset-0 bg-[url('/teziutlan-hero.jpg')] bg-cover bg-center opacity-15"></div>
                <div className="absolute inset-0 blueprint-grid opacity-[0.04]"></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center mb-14">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-400 mb-4">03 · Impacto Proyectado</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
                        Números que <span className="text-amber-400 italic">transforman</span>
                    </h2>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { value: visitors, suffix: '+', label: 'Visitantes Anuales', unit: 'en 3 años', icon: 'travel_explore' },
                        { value: jobs, suffix: '+', label: 'Empleos Creados', unit: 'directos e indirectos', icon: 'groups' },
                        { value: families, suffix: '+', label: 'Familias Beneficiadas', unit: 'directamente', icon: 'family_restroom' },
                        { value: roi, suffix: 'K', label: 'Donantes Meta', unit: 'para 2027', icon: 'volunteer_activism' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center group p-4">
                            <span className="material-symbols-outlined text-amber-400 text-3xl mb-3 block">{stat.icon}</span>
                            <p className="text-4xl md:text-6xl font-black text-white tabular-nums group-hover:text-amber-400 transition-colors duration-300">
                                {stat.value}{stat.suffix}
                            </p>
                            <p className="font-bold text-stone-300 mt-2 text-sm">{stat.label}</p>
                            <p className="text-[10px] text-stone-500 uppercase tracking-wider mt-1">{stat.unit}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                INVERSORES – Value Proposition
            ══════════════════════════════════════════════════ */}
            <section id="por-que-donar" className="py-32 px-6 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-500 mb-4">04 · Por Qué Donar</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-stone-900 dark:text-white">
                            El poder de <span className="text-amber-500 italic">tu apoyo</span>
                        </h2>
                        <p className="text-stone-500 dark:text-stone-400 mt-4 max-w-2xl mx-auto font-medium">
                            Teziutlán no necesita grandes capitales — necesita personas que crean en su potencial. Tu donación, cualquiera que sea, construye cultura, empleo y futuro para su gente.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((v, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white dark:bg-stone-900/70 border border-stone-200 dark:border-stone-700/50 hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="size-14 rounded-2xl bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                    <span className="material-symbols-outlined text-2xl">{v.icon}</span>
                                </div>
                                <h3 className="text-lg font-black text-stone-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{v.title}</h3>
                                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                GALERÍA VISUAL
            ══════════════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-stone-950">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-400 mb-4">05 · Galería Conceptual</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white">
                            El alma de <span className="text-amber-400 italic">Teziutlán</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-4">
                        {gallery.map((img, i) => (
                            <div key={i} className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.tall ? 'row-span-2' : ''}`}>
                                {/* Gradient placeholder */}
                                <div className={`absolute inset-0 ${[
                                    'bg-gradient-to-br from-amber-900 via-stone-800 to-emerald-900',
                                    'bg-gradient-to-br from-stone-700 via-amber-800 to-stone-900',
                                    'bg-gradient-to-br from-emerald-900 via-stone-800 to-amber-900',
                                    'bg-gradient-to-br from-stone-800 via-emerald-900 to-stone-700',
                                    'bg-gradient-to-br from-amber-800 via-stone-900 to-amber-700',
                                ][i]}`}></div>
                                <img
                                    src={img.src}
                                    alt={img.label}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-5 flex items-end">
                                    <span className="text-white font-bold text-xs uppercase tracking-widest">{img.label}</span>
                                </div>
                                {/* Decorative corner */}
                                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-400/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-400/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-stone-600 text-xs mt-5 font-medium">
                        * Imágenes conceptuales. Fotografía final próximamente.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                PLAN DE DESARROLLO – Timeline Phases
            ══════════════════════════════════════════════════ */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-500 mb-4">06 · Plan de Desarrollo</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-stone-900 dark:text-white">
                            Hoja de <span className="text-amber-500 italic">ruta</span>
                        </h2>
                        <p className="text-stone-500 dark:text-stone-400 mt-4 max-w-xl mx-auto font-medium">
                            Cuatro fases estratégicas para transformar Teziutlán en un referente cultural y turístico de México.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {phases.map((phase, i) => (
                            <PhaseCard key={i} {...phase} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                IMPACTO COMUNITARIO
            ══════════════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-stone-100 dark:bg-stone-900/40 border-y border-stone-200 dark:border-stone-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-500 mb-4">07 · Impacto Comunitario</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-stone-900 dark:text-white">
                            Quiénes <span className="text-amber-500 italic">se benefician</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'person',
                                color: 'from-amber-500 to-amber-600',
                                title: 'Artesanos y Creadores',
                                desc: 'Plataforma de comercialización directa y talleres de capacitación para que los artesanos locales accedan a mercados nacionales e internacionales.',
                                tag: '200+ artesanos beneficiados',
                            },
                            {
                                icon: 'school',
                                color: 'from-emerald-500 to-emerald-600',
                                title: 'Jóvenes y Estudiantes',
                                desc: 'Programas de formación técnica en turismo, gastronomía, cultura digital y gestión de negocios para jóvenes de la Sierra Norte.',
                                tag: '500+ becas proyectadas',
                            },
                            {
                                icon: 'storefront',
                                color: 'from-sky-500 to-sky-600',
                                title: 'Microempresarios',
                                desc: 'Incubación, financiamiento semilla y acompañamiento para negocios de hospedaje, alimentación, guías turísticos y servicios locales.',
                                tag: '150+ negocios creados',
                            },
                        ].map((g, i) => (
                            <div key={i} className="relative group overflow-hidden rounded-3xl">
                                <div className={`absolute inset-0 bg-gradient-to-br ${g.color} opacity-90`}></div>
                                <div className="absolute inset-0 blueprint-grid opacity-[0.06]"></div>
                                <div className="relative z-10 p-8 h-full flex flex-col">
                                    <span className="material-symbols-outlined text-white/80 text-4xl mb-5">{g.icon}</span>
                                    <h3 className="text-xl font-black text-white mb-3">{g.title}</h3>
                                    <p className="text-white/80 text-sm leading-relaxed flex-1">{g.desc}</p>
                                    <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold">
                                        <span className="size-1.5 rounded-full bg-white"></span>
                                        {g.tag}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                CTA – Llamado a la Acción
            ══════════════════════════════════════════════════ */}
            <section id="donar" className="py-32 px-6 relative overflow-hidden bg-stone-950">
                <div className="absolute inset-0 bg-[url('/teziutlan-hero.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/60 pointer-events-none"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-black uppercase tracking-widest mb-10">
                        <span className="size-2 rounded-full bg-amber-400 animate-pulse"></span>
                        Donaciones Abiertas · 2025–2026
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-white">
                        Tu donación <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                            cambia vidas
                        </span>
                    </h2>

                    <p className="text-xl text-stone-400 font-medium mb-4 max-w-2xl mx-auto">
                        Buscamos donantes, aliados y patrocinadores que compartan la visión de preservar la identidad cultural de Teziutlán y transformarla en motor de bienestar para su gente.
                    </p>
                    <p className="text-stone-500 font-medium mb-12">
                        Desde $200 MXN puedes contribuir · 100% trazable · Recibo de donativo disponible
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <a
                            href="mailto:contacto@fiberlinklabs.com?subject=Donaci%C3%B3n%20Teziutl%C3%A1n%3A%20Piedra%20y%20Niebla"
                            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-amber-500 text-stone-950 font-black text-lg rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/30 hover:bg-amber-400 hover:-translate-y-1 active:scale-95 transition-all duration-300"
                        >
                            <span className="material-symbols-outlined">volunteer_activism</span>
                            Quiero Donar
                        </a>
                        <a
                            href="https://wa.me/521XXXXXXXXXX?text=Hola,%20me%20interesa%20donar%20al%20proyecto%20Teziutl%C3%A1n:%20Piedra%20y%20Niebla"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl border border-stone-700 text-stone-300 font-black hover:border-amber-500 hover:text-amber-400 transition-all"
                        >
                            <span className="material-symbols-outlined">chat</span>
                            Hablar con el Equipo
                        </a>
                    </div>

                    {/* Project by */}
                    <div className="border-t border-stone-800 pt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-stone-600 text-sm">
                        <span>Una iniciativa desarrollada por</span>
                        <Link to="/" className="text-amber-400 hover:text-amber-300 font-bold transition-colors flex items-center gap-2">
                            <img src="/logo.jpg" alt="FiberLink Labs" className="h-6 invert opacity-60 hover:opacity-100 transition-opacity" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                            FiberLink Labs · Fiberlink Servicios TIC
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teziutlan;
