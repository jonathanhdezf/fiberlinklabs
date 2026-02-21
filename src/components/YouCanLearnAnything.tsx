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

/* ── Platform Card ── */
const PlatformCard = ({ icon, name, desc, tag, color }: {
    icon: string; name: string; desc: string; tag: string; color: string;
}) => (
    <div className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/50 hover:border-violet-400 dark:hover:border-violet-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className={`size-12 rounded-xl ${color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {icon}
        </div>
        <h3 className="font-black text-slate-900 dark:text-white text-lg mb-1">{name}</h3>
        <span className="inline-block px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-[10px] font-black uppercase tracking-wider mb-3">{tag}</span>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
);

/* ══════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════ */
const YouCanLearnAnything = () => {
    const [statsVisible, setStatsVisible] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);

    const learners = useCounter(140, 2000, statsVisible);
    const courses = useCounter(10000, 1800, statsVisible);
    const languages = useCounter(50, 1500, statsVisible);
    const countries = useCounter(190, 1700, statsVisible);

    useEffect(() => {
        document.title = '#YouCanLearnAnything | Educación Digital · FiberLink Labs';
        const setMeta = (name: string, content: string, property = false) => {
            const attr = property ? 'property' : 'name';
            let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
            if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
            el.setAttribute('content', content);
        };
        setMeta('description', 'La educación digital democratiza el conocimiento. Descubre cómo plataformas como Khan Academy transforman comunidades y cómo este movimiento puede impactar a Teziutlán y toda la Sierra Norte.');
        setMeta('keywords', 'educación digital, Khan Academy, aprendizaje en línea, programación, Teziutlán, desarrollo local, YouCanLearnAnything');
        return () => { document.title = 'FiberLink Labs · Diseño Web & Sistemas que Escalan'; };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setStatsVisible(true); observer.disconnect(); }
        }, { threshold: 0.3 });
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    const platforms = [
        { icon: '📐', name: 'Khan Academy', desc: 'El pionero de la educación libre. Matemáticas, ciencias y programación explicadas desde cero, para cualquier edad, sin costo.', tag: '100% Gratuito', color: 'bg-emerald-100 dark:bg-emerald-900/30' },
        { icon: '💻', name: 'freeCodeCamp', desc: 'Certificaciones completas de desarrollo web, Python y ciencia de datos. Miles de horas de práctica guiada gratuita.', tag: 'Código abierto', color: 'bg-blue-100 dark:bg-blue-900/30' },
        { icon: '🎓', name: 'Coursera', desc: 'Cursos universitarios de Yale, Google y Stanford. Acceso global a educación de clase mundial.', tag: 'Certificados', color: 'bg-violet-100 dark:bg-violet-900/30' },
        { icon: '🚀', name: 'Platzi', desc: 'La plataforma latinoamericana de tecnología y negocios digitales pensada para el talento de nuestra región.', tag: 'En español', color: 'bg-green-100 dark:bg-green-900/30' },
        { icon: '🤖', name: 'Google Skillshop', desc: 'Certificaciones gratuitas de Google en marketing digital, IA y análisis de datos. Reconocidas globalmente.', tag: 'Certificado Google', color: 'bg-red-100 dark:bg-red-900/30' },
        { icon: '🌐', name: 'edX / MIT OpenCourse', desc: 'El MIT abre sus puertas digitalmente. Inteligencia artificial, ingeniería y ciencias de la computación sin barreras.', tag: 'Nivel universitario', color: 'bg-amber-100 dark:bg-amber-900/30' },
    ];

    const khanFacts = [
        { icon: 'groups', val: '150M+', label: 'estudiantes en el mundo', accent: 'text-emerald-500' },
        { icon: 'public', val: '190', label: 'países con acceso', accent: 'text-blue-500' },
        { icon: 'translate', val: '50+', label: 'idiomas disponibles', accent: 'text-violet-500' },
        { icon: 'code', val: '100%', label: 'gratuito para siempre', accent: 'text-amber-500' },
    ];

    const localImpacts = [
        { icon: 'school', title: 'Jóvenes de la Sierra', desc: 'Un estudiante en Teziutlán con internet básico puede aprender programación web, diseño digital o análisis de datos a nivel mundial. Sin pagar, sin moverse.', accent: 'border-l-violet-500' },
        { icon: 'store', title: 'Emprendedores Locales', desc: 'Artesanos y comerciantes pueden aprender marketing digital, gestión de redes sociales y comercio electrónico para llevar sus productos a mercados nacionales.', accent: 'border-l-amber-500' },
        { icon: 'medical_services', title: 'Profesionales de la Salud', desc: 'Enfermeras, médicos y promotores de salud comunitarios pueden actualizar sus conocimientos con cursos de instituciones de primer nivel.', accent: 'border-l-emerald-500' },
        { icon: 'agriculture', title: 'Sector Agropecuario', desc: 'Agricultores y productores locales pueden acceder a conocimiento sobre agrotecnología, mercados y cadenas de valor para modernizar su producción.', accent: 'border-l-blue-500' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#070a12] text-slate-900 dark:text-slate-100 overflow-x-hidden">

            {/* ── Floating Nav ── */}
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-2rem)] max-w-3xl">
                <div className="rounded-2xl px-5 py-3 flex items-center justify-between bg-slate-950/80 backdrop-blur-md border border-white/10">
                    <Link to="/" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-violet-400 transition-colors">
                        <span className="material-symbols-outlined text-base">arrow_back</span>
                        <span className="hidden sm:block">FiberLink Labs</span>
                    </Link>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] text-violet-400 truncate px-2">#YouCanLearnAnything</span>
                    <a href="#recursos" className="text-[10px] sm:text-xs font-black uppercase tracking-widest px-4 py-2 bg-violet-600 text-white rounded-xl hover:bg-violet-500 transition-all active:scale-95 whitespace-nowrap">
                        Explorar
                    </a>
                </div>
            </nav>

            {/* ══════════════════════════════════════════════════
                HERO
            ══════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20">
                {/* Background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0d0820] to-slate-950"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.25),transparent)]"></div>
                <div className="absolute inset-0 blueprint-grid opacity-[0.04]"></div>

                {/* Animated glow orbs */}
                <div className="absolute top-1/4 left-1/4 size-72 sm:size-96 bg-violet-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 size-60 sm:size-80 bg-indigo-600/15 blur-[100px] rounded-full pointer-events-none [animation-delay:1s] animate-pulse"></div>

                {/* Floating letters — decorative */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none select-none hidden md:block">
                    {([
                        { sym: '∑', cls: 'left-[10%] top-[15%] [animation:float_5s_ease-in-out_0s_infinite]' },
                        { sym: '∞', cls: 'left-[20%] top-[40%] [animation:float_5.7s_ease-in-out_0.4s_infinite]' },
                        { sym: '≈', cls: 'left-[30%] top-[65%] [animation:float_6.4s_ease-in-out_0.8s_infinite]' },
                        { sym: 'λ', cls: 'left-[40%] top-[15%] [animation:float_7.1s_ease-in-out_1.2s_infinite]' },
                        { sym: 'π', cls: 'left-[50%] top-[40%] [animation:float_7.8s_ease-in-out_1.6s_infinite]' },
                        { sym: '∂', cls: 'left-[60%] top-[65%] [animation:float_8.5s_ease-in-out_2s_infinite]' },
                        { sym: 'α', cls: 'left-[70%] top-[15%] [animation:float_9.2s_ease-in-out_2.4s_infinite]' },
                        { sym: '∇', cls: 'left-[80%] top-[40%] [animation:float_9.9s_ease-in-out_2.8s_infinite]' },
                        { sym: 'Δ', cls: 'left-[90%] top-[65%] [animation:float_10.6s_ease-in-out_3.2s_infinite]' },
                    ] as { sym: string; cls: string }[]).map(({ sym, cls }) => (
                        <span key={sym} className={`absolute text-4xl font-black text-violet-500/[0.06] blur-[0.5px] ${cls}`}>{sym}</span>
                    ))}
                </div>

                <div className="relative z-10 text-center max-w-5xl mx-auto w-full flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400"></span>
                        </span>
                        Movimiento Global de Educación Digital
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.85] mb-6 sm:mb-8">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400">
                            #YouCan
                        </span>
                        <br />
                        <span className="text-white">Learn</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-violet-400">Anything&nbsp;</span>
                    </h1>

                    <p className="text-base sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium mb-4 px-2">
                        El conocimiento nunca fue tan accesible. Hoy, cualquier persona con una conexión a internet puede aprender lo que antes solo estaba reservado para unos pocos.
                    </p>
                    <p className="text-sm sm:text-base text-slate-500 font-medium mb-10 italic">
                        "La educación es el arma más poderosa que puedes usar para cambiar el mundo." — Nelson Mandela
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
                        <a href="#khan" className="group px-8 py-4 bg-violet-600 text-white font-black rounded-2xl shadow-2xl shadow-violet-500/30 hover:bg-violet-500 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2">
                            Descubrir el Movimiento
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                        <a href="#recursos" className="px-8 py-4 bg-white/5 backdrop-blur border border-white/15 text-white font-black rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">school</span>
                            Ver Plataformas
                        </a>
                    </div>

                    {/* Scroll indicator */}
                    <div className="mt-14 flex flex-col items-center gap-2 text-slate-600">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explorar</span>
                        <div className="w-px h-10 bg-gradient-to-b from-violet-500 to-transparent animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                INTRODUCCIÓN – La Revolución del Aprendizaje
            ══════════════════════════════════════════════════ */}
            <section className="py-28 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/5 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-500 mb-5">01 · Introducción</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 uppercase leading-[0.9] text-slate-900 dark:text-white">
                            El conocimiento<br />
                            <span className="text-violet-500 italic">sin fronteras&nbsp;</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium text-lg">
                            Por siglos, el acceso a educación de calidad fue un privilegio. Las mejores universidades, los mejores profesores, los mejores recursos — reservados para quienes podían pagar o vivir cerca de ellos.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-8">
                            La revolución digital cambió todo. Hoy, un joven en Teziutlán tiene acceso a los mismos cursos de programación que un estudiante de Harvard. Un artesano de la Sierra Norte puede aprender marketing digital junto a un empresario de Silicon Valley. <strong className="text-slate-900 dark:text-white">El internet democratizó el conocimiento.</strong>
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {['Accesible', 'Global', 'Gratuito', 'En tu idioma', 'A tu ritmo', 'Para todos'].map((tag, i) => (
                                <span key={i} className="px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-black uppercase tracking-wider border border-violet-200 dark:border-violet-700/50">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        {[
                            { icon: 'wifi', title: 'Solo necesitas internet', desc: 'Una conexión básica abre el acceso a miles de cursos, tutoriales y certificaciones internacionales.', color: 'bg-violet-500' },
                            { icon: 'schedule', title: 'A tu propio ritmo', desc: 'Sin horarios fijos. Aprende cuando tienes 10 minutos o cuando tienes 3 horas. Tú decides.', color: 'bg-indigo-500' },
                            { icon: 'translate', title: 'En tu idioma', desc: 'La mayoría de las plataformas líderes ofrecen contenido en español, con subtítulos y comunidades locales.', color: 'bg-amber-500' },
                            { icon: 'workspace_premium', title: 'Certificaciones reales', desc: 'Muchos cursos ofrecen certificados reconocidos por empleadores globales como Google, IBM y Microsoft.', color: 'bg-emerald-500' },
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700/50 hover:border-violet-300 dark:hover:border-violet-600 transition-all group">
                                <div className={`size-10 rounded-xl ${item.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <span className="material-symbols-outlined text-base">{item.icon}</span>
                                </div>
                                <h4 className="font-black text-slate-900 dark:text-white text-sm mb-2">{item.title}</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                KHAN ACADEMY – El Impulso
            ══════════════════════════════════════════════════ */}
            <section id="khan" className="py-28 px-6 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(139,92,246,0.08),transparent)]"></div>
                <div className="absolute inset-0 blueprint-grid opacity-[0.03]"></div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-400 mb-4">02 · El Catalizador</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white mb-6">
                            Cómo <span className="text-emerald-400 italic">Khan Academy</span><br className="hidden sm:block" /> cambió todo
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg">
                            En 2006, Sal Khan comenzó a grabar videos de matemáticas para su prima. Hoy, ese gesto transformó la educación de 150 millones de personas en el mundo.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6">
                            {[
                                { icon: '🎯', title: 'La misión era simple', body: '"Proveer educación de clase mundial, gratis, para cualquier persona, en cualquier lugar." Una promesa que se convirtió en el estándar de la educación digital global.' },
                                { icon: '💡', title: 'La chispa de la programación', body: 'Khan Academy introdujo a millones al pensamiento computacional. Su curso de JavaScript fue para muchos desarrolladores de hoy el primer encuentro con el código. Yo mismo aprendí a programar con Khan Academy.' },
                                { icon: '📊', title: 'Datos que te mueven', body: 'Más del 40% de los nuevos programadores en mercados emergentes atribuyen su inicio a plataformas gratuitas como Khan Academy. En México, miles de jóvenes obtuvieron su primer empleo tech gracias a estos recursos.' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/40 transition-all group">
                                    <span className="text-2xl shrink-0 mt-1">{item.icon}</span>
                                    <div>
                                        <h4 className="font-black text-white mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div ref={statsRef} className="grid grid-cols-2 gap-5">
                            {khanFacts.map((f, i) => (
                                <div key={i} className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all text-center group hover:-translate-y-1">
                                    <span className={`material-symbols-outlined text-3xl mb-3 block ${f.accent}`}>{f.icon}</span>
                                    <p className={`text-4xl font-black mb-1 ${f.accent} tabular-nums`}>{f.val}</p>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">{f.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="relative p-8 md:p-12 rounded-3xl border border-violet-500/20 bg-violet-500/5 text-center overflow-hidden">
                        <div className="absolute top-4 left-6 text-[8rem] font-black text-violet-500/10 leading-none select-none">"</div>
                        <blockquote className="relative z-10 text-xl md:text-2xl font-black text-white max-w-3xl mx-auto leading-relaxed italic">
                            Si alguien tiene problema con una habilidad, no es que no esté capacitado — es que aún no ha tenido la oportunidad correcta de aprenderla.
                        </blockquote>
                        <cite className="block mt-4 text-violet-400 font-bold text-sm uppercase tracking-wider">— Sal Khan, fundador de Khan Academy</cite>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                STATS GLOBALES
            ══════════════════════════════════════════════════ */}
            <section className="py-20 px-6 bg-violet-600 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-[0.06]"></div>
                <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { value: learners, suffix: 'M+', label: 'Estudiantes Activos', unit: 'globalmente', icon: 'groups' },
                        { value: courses, suffix: '+', label: 'Cursos Disponibles', unit: 'en plataformas líderes', icon: 'menu_book' },
                        { value: languages, suffix: '+', label: 'Idiomas de Acceso', unit: 'incluido español', icon: 'translate' },
                        { value: countries, suffix: '', label: 'Países Conectados', unit: 'en el mundo', icon: 'public' },
                    ].map((s, i) => (
                        <div key={i} className="text-center group">
                            <span className="material-symbols-outlined text-white/60 text-3xl mb-2 block">{s.icon}</span>
                            <p className="text-4xl md:text-6xl font-black text-white tabular-nums group-hover:scale-105 transition-transform duration-300">
                                {s.value}{s.suffix}
                            </p>
                            <p className="font-bold text-violet-100 mt-2 text-sm">{s.label}</p>
                            <p className="text-[10px] text-violet-200/70 uppercase tracking-wider mt-1">{s.unit}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                PLATAFORMAS HOY
            ══════════════════════════════════════════════════ */}
            <section id="recursos" className="py-28 px-6 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-500 mb-4">03 · El Ecosistema Hoy</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">
                            Plataformas que <span className="text-violet-500 italic">transforman</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto font-medium">
                            Hoy existen docenas de plataformas que cubren desde programación hasta cocina, desde diseño hasta finanzas. Aquí están las más relevantes para nuestra región.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {platforms.map((p, i) => <PlatformCard key={i} {...p} />)}
                    </div>

                    {/* Relevancia laboral */}
                    <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 relative overflow-hidden">
                        <div className="absolute inset-0 blueprint-grid opacity-[0.06]"></div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <span className="material-symbols-outlined text-violet-200 text-4xl mb-4 block">trending_up</span>
                                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Relevancia en el Mercado Laboral</h3>
                                <p className="text-violet-100 leading-relaxed">
                                    Las habilidades digitales son las más demandadas del mundo hoy. Un 87% de los empleadores globales consideran las certificaciones digitales tan o más valiosas que un título universitario para roles tecnológicos.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {([
                                    { skill: 'Desarrollo Web Frontend', demand: 94, w: 'w-[94%]' },
                                    { skill: 'Análisis de Datos / IA', demand: 98, w: 'w-[98%]' },
                                    { skill: 'Marketing Digital', demand: 89, w: 'w-[89%]' },
                                    { skill: 'Diseño UX/UI', demand: 85, w: 'w-[85%]' },
                                ] as { skill: string; demand: number; w: string }[]).map((item) => (
                                    <div key={item.skill}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm text-white font-bold">{item.skill}</span>
                                            <span className="text-sm text-violet-200 font-black">{item.demand}%</span>
                                        </div>
                                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                            <div className={`h-full bg-white rounded-full transition-all duration-1000 ${item.w}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                CONEXIÓN LOCAL – Teziutlán
            ══════════════════════════════════════════════════ */}
            <section className="py-28 px-6 bg-slate-100 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-500 mb-4">04 · Conexión Local</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-slate-900 dark:text-white">
                            Teziutlán <span className="text-amber-500 italic">conectado</span> al mundo
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto font-medium">
                            La educación digital no es un privilegio de las grandes ciudades. Con las herramientas adecuadas, la Sierra Norte puede sumarse a la economía del conocimiento global.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {localImpacts.map((item, i) => (
                            <div key={i} className={`p-8 rounded-2xl bg-white dark:bg-slate-900/70 border-l-4 ${item.accent} border border-slate-200 dark:border-slate-700/50 hover:shadow-xl transition-all group`}>
                                <div className="flex items-start gap-5">
                                    <div className="size-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/30 transition-colors">
                                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-900 dark:text-white mb-2 text-lg">{item.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Teziutlán + educación digital = ? */}
                    <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-amber-500/10 to-violet-500/10 border border-amber-300/30 dark:border-amber-700/30 overflow-hidden">
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            {[
                                { icon: '🏔️', label: 'Teziutlán tiene', items: ['Historia de 400 años', 'Cultura viva totonaca', '100K+ habitantes jóvenes', 'Naturaleza extraordinaria'] },
                                { icon: '➕', label: 'La educación digital aporta', items: ['Habilidades digitales globales', 'Acceso a mercados remotos', 'Certificaciones internacionales', 'Ingresos sin migrar'] },
                                { icon: '=', label: 'El resultado es', items: ['Jóvenes que se quedan', 'Negocios que escalan', 'Comunidad que innova', 'Futuro que se construye aquí'] },
                            ].map((col, i) => (
                                <div key={i}>
                                    <div className="text-4xl mb-3">{col.icon}</div>
                                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">{col.label}</p>
                                    <ul className="space-y-2">
                                        {col.items.map((item, j) => (
                                            <li key={j} className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2">
                                                <span className="size-1.5 rounded-full bg-violet-500 shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            to="/iniciativas/teziutlan"
                            className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-black hover:text-amber-500 transition-colors text-sm uppercase tracking-wider"
                        >
                            <span className="material-symbols-outlined text-base">link</span>
                            Ver el proyecto Teziutlán: Piedra & Niebla
                        </Link>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                CTA – Llamado a la Acción
            ══════════════════════════════════════════════════ */}
            <section className="py-32 px-6 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(139,92,246,0.12),transparent)]"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent"></div>
                <div className="absolute inset-0 blueprint-grid opacity-[0.03]"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-xs font-black uppercase tracking-widest mb-10">
                        <span className="size-2 rounded-full bg-violet-400 animate-pulse"></span>
                        05 · Únete al Movimiento
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-white">
                        Tu turno<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-amber-400">
                            de aprender
                        </span>
                    </h2>

                    <p className="text-xl text-slate-400 font-medium mb-4 max-w-2xl mx-auto">
                        No necesitas dinero. No necesitas mudarte a otra ciudad. Solo necesitas curiosidad, una conexión a internet y la determinación de empezar.
                    </p>
                    <p className="text-slate-500 font-medium mb-12 text-sm">
                        El mejor momento para aprender fue ayer. El segundo mejor momento es ahora.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-14">
                        {[
                            { href: 'https://es.khanacademy.org', label: 'Khan Academy', icon: '📐', desc: 'Empieza a aprender hoy, gratis' },
                            { href: 'https://www.freecodecamp.org', label: 'freeCodeCamp', icon: '💻', desc: 'Aprende a programar desde cero' },
                            { href: 'https://platzi.com', label: 'Platzi', icon: '🚀', desc: 'La plataforma de tu región' },
                        ].map((r, i) => (
                            <a
                                key={i}
                                href={r.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-5 rounded-2xl border border-white/10 hover:border-violet-400/50 bg-white/5 hover:bg-violet-500/10 transition-all hover:-translate-y-1"
                            >
                                <div className="text-3xl mb-3">{r.icon}</div>
                                <p className="font-black text-white text-sm mb-1 group-hover:text-violet-300 transition-colors">{r.label}</p>
                                <p className="text-xs text-slate-500">{r.desc}</p>
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
                        <a
                            href="mailto:contacto@fiberlinklabs.com?subject=Proyecto%20Educativo%20%23YouCanLearnAnything"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-violet-600 text-white font-black text-lg rounded-2xl shadow-2xl shadow-violet-500/30 hover:bg-violet-500 hover:-translate-y-1 active:scale-95 transition-all"
                        >
                            <span className="material-symbols-outlined">volunteer_activism</span>
                            Comenzar aprender
                        </a>
                        <Link
                            to="/iniciativas/teziutlan"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl border border-slate-700 text-slate-300 font-black hover:border-violet-500 hover:text-violet-400 transition-all"
                        >
                            <span className="material-symbols-outlined">language</span>
                            Ver Iniciativas Locales
                        </Link>
                    </div>

                    {/* Footer créditos */}
                    <div className="border-t border-slate-800 pt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-600 text-sm">
                        <span>Una página impulsada por</span>
                        <Link to="/" className="text-violet-400 hover:text-violet-300 font-bold transition-colors flex items-center gap-2">
                            FiberLink Labs · Fiberlink Servicios TIC
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default YouCanLearnAnything;
