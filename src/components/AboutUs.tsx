import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ────────────────────────────────────────────────────────────────
   Animated Counter Hook
──────────────────────────────────────────────────────────────── */
const useCounter = (end: number, duration = 2000, start = false) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [end, duration, start]);
    return count;
};

/* ────────────────────────────────────────────────────────────────
   Floating Particle Component
──────────────────────────────────────────────────────────────── */
const Particle = ({ cls }: { cls: string }) => (
    <div className={`absolute rounded-full bg-primary/20 pointer-events-none blur-[1px] ${cls}`} />
);

/* ────────────────────────────────────────────────────────────────
   Skill Tag
──────────────────────────────────────────────────────────────── */
const SkillTag = ({ label, cls }: { label: string; cls: string }) => (
    <span className={`px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-wider border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 cursor-default animate-in fade-in [animation-fill-mode:both] ${cls}`}>
        {label}
    </span>
);

/* ────────────────────────────────────────────────────────────────
   MAIN COMPONENT
──────────────────────────────────────────────────────────────── */
const AboutUs = () => {
    const [statsVisible, setStatsVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
        return false;
    });
    const statsRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);

    const companies = useCounter(50, 2000, statsVisible);
    const days = useCounter(90, 2200, statsVisible);
    const projects = useCounter(120, 1800, statsVisible);
    const uptime = useCounter(99, 1500, statsVisible);

    useEffect(() => {
        // SEO meta
        document.title = 'Quiénes Somos | FiberLink Labs · Fiberlink Servicios TIC';
        const setMeta = (name: string, content: string, property = false) => {
            const attr = property ? 'property' : 'name';
            let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
            if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
            el.setAttribute('content', content);
        };
        setMeta('description', 'Conoce a FiberLink Labs, la división de innovación de Fiberlink Servicios TIC, liderada por Jonathan Filiberto Hernández Flores. Diseñamos webs que venden y sistemas que escalan.');
        setMeta('keywords', 'Fiberlink Servicios TIC, Jonathan Hernández Flores, director, FiberLink Labs, desarrollo web México');
        setMeta('author', 'Jonathan Filiberto Hernández Flores');
        setMeta('og:title', 'Quiénes Somos | FiberLink Labs', true);
        setMeta('og:description', 'La división de innovación digital de Fiberlink Servicios TIC, liderada por Jonathan Filiberto Hernández Flores.', true);
        // JSON-LD
        const existingScript = document.getElementById('about-jsonld');
        if (!existingScript) {
            const script = document.createElement('script');
            script.id = 'about-jsonld';
            script.type = 'application/ld+json';
            script.text = JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    { "@type": "Organization", "name": "Fiberlink Servicios TIC", "alternateName": "FiberLink Labs", "url": "https://fiberlinklabs.com", "founder": { "@type": "Person", "name": "Jonathan Filiberto Hernández Flores", "jobTitle": "Director General y CEO" } },
                    { "@type": "Person", "name": "Jonathan Filiberto Hernández Flores", "jobTitle": "Director General · CEO", "worksFor": { "@type": "Organization", "name": "Fiberlink Servicios TIC" } }
                ]
            });
            document.head.appendChild(script);
        }
        return () => {
            document.title = 'FiberLink Labs · Diseño Web & Sistemas que Escalan';
            document.getElementById('about-jsonld')?.remove();
        };
    }, []);

    // Stats IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setStatsVisible(true); observer.disconnect(); }
        }, { threshold: 0.3 });
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    const orb1Ref = useRef<HTMLDivElement>(null);
    const orb2Ref = useRef<HTMLDivElement>(null);

    // Parallax mouse effect on hero
    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            if (orb1Ref.current) orb1Ref.current.style.transform = `translate(${x}px, ${y}px)`;
            if (orb2Ref.current) orb2Ref.current.style.transform = `translate(${-x}px, ${-y}px)`;
        };
        window.addEventListener('mousemove', handleMouse);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, []);

    // Dark mode — sync DOM class on mount + on every toggle
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    // Dark mode toggle handler
    const toggleDark = () => setIsDarkMode(prev => !prev);

    const particles = [
        { cls: 'left-[10%] top-[20%] w-2 h-2 [animation:float_6s_ease-in-out_0s_infinite]' },
        { cls: 'left-[80%] top-[40%] w-3 h-3 [animation:float_7s_ease-in-out_1s_infinite]' },
        { cls: 'left-[30%] top-[60%] w-2 h-2 [animation:float_8s_ease-in-out_2s_infinite]' },
        { cls: 'left-[70%] top-[10%] w-4 h-4 [animation:float_9s_ease-in-out_3s_infinite]' },
        { cls: 'left-[20%] top-[80%] w-2 h-2 [animation:float_10s_ease-in-out_4s_infinite]' },
        { cls: 'left-[50%] top-[30%] w-3 h-3 [animation:float_6.5s_ease-in-out_0.5s_infinite]' },
        { cls: 'left-[90%] top-[70%] w-2 h-2 [animation:float_7.5s_ease-in-out_1.5s_infinite]' },
        { cls: 'left-[15%] top-[45%] w-4 h-4 [animation:float_8.5s_ease-in-out_2.5s_infinite]' },
        { cls: 'left-[65%] top-[85%] w-2 h-2 [animation:float_9.5s_ease-in-out_3.5s_infinite]' },
        { cls: 'left-[40%] top-[15%] w-3 h-3 [animation:float_10.5s_ease-in-out_4.5s_infinite]' },
    ];

    const pillars = [
        { icon: 'rocket_launch', title: 'Diseño que Convierte', desc: 'Interfaces optimizadas para convertir visitantes en clientes de forma sistemática, 24/7.' },
        { icon: 'query_stats', title: 'Sistemas Escalables', desc: 'Arquitecturas digitales preparadas para crecer sin cuellos de botella técnicos.' },
        { icon: 'bolt', title: 'Automatización Inteligente', desc: 'Eliminamos procesos manuales e integramos flujos que liberan el potencial humano.' },
        { icon: 'hub', title: 'Ecosistema Conectado', desc: 'Integramos todas tus herramientas en un único sistema centralizado de información.' },
        { icon: 'verified_user', title: 'Seguridad & Confianza', desc: 'Protocolo Zero Trust aplicado en cada capa de la infraestructura que construimos.' },
        { icon: 'insights', title: 'Inteligencia de Datos', desc: 'Dashboards y reportes en tiempo real para decisiones basadas en datos reales.' },
    ];

    const skills = ['Arquitectura Digital', 'Desarrollo Web', 'Estrategia de Negocios', 'Automatización', 'Sistemas ERP', 'IA Aplicada', 'Cloud Native', 'UI/UX Strategy'];

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* ── Floating Nav ── */}
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-2rem)] max-w-2xl">
                <div className="glass-panel rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between gap-2">
                    <Link to="/" className="flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-primary transition-colors shrink-0">
                        <span className="material-symbols-outlined text-base">arrow_back</span>
                        <span className="hidden sm:block">FiberLink Labs</span>
                    </Link>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary truncate px-2">× Quiénes Somos</span>
                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            onClick={toggleDark}
                            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all flex items-center justify-center"
                            aria-label="Toggle Theme"
                        >
                            <span className="material-symbols-outlined text-slate-500 dark:hidden text-base">dark_mode</span>
                            <span className="material-symbols-outlined text-slate-300 hidden dark:block text-base">light_mode</span>
                        </button>
                        <Link to="/#contacto" className="text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 sm:px-4 py-2 bg-primary text-white rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 whitespace-nowrap">
                            Contactar
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ══════════════════════════════════════════════════
                HERO – Cinematic Full-Screen
            ══════════════════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-24">
                {/* Animated Background */}
                <div className="absolute inset-0 ai-processing-bg opacity-60"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]"></div>

                {/* Floating Particles - hidden on mobile for performance */}
                <div className="hidden md:block">
                    {particles.map((p, i) => <Particle key={i} cls={p.cls} />)}
                </div>

                {/* Glow Orbs – Parallax */}
                <div
                    ref={orb1Ref}
                    className="absolute top-[10%] -left-[10%] size-[400px] md:size-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none transition-transform duration-200"
                />
                <div
                    ref={orb2Ref}
                    className="absolute bottom-[10%] -right-[10%] size-[300px] md:size-[400px] rounded-full bg-secondary/10 blur-[100px] pointer-events-none transition-transform duration-300"
                />

                {/* Scan line */}
                <div className="scan-line opacity-30 pointer-events-none"></div>

                {/* Hero Content */}
                <div className="relative z-10 text-center max-w-6xl mx-auto w-full flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-6 sm:mb-10 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Fiberlink Servicios TIC · Est. México
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-6 sm:mb-8 md:mb-10 uppercase">
                        <span className="block text-foreground">Quiénes</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-[data-flow_6s_ease_infinite] bg-[length:200%_200%] italic">
                            Somos&nbsp;
                        </span>
                    </h1>

                    <p className="text-base sm:text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium mb-8 sm:mb-10 px-2">
                        La división de innovación estratégica que construye el sistema nervioso de tu empresa digital. Webs que venden. Sistemas que escalan.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
                        <Link to="/#contacto" className="group px-6 sm:px-8 py-4 bg-primary text-white font-black rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2">
                            Sesión Estratégica Gratis
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                        </Link>
                        <a href="#director" className="px-6 sm:px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur border border-white/20 dark:border-white/10 text-foreground font-black rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                            Conoce al Director
                            <span className="material-symbols-outlined">expand_more</span>
                        </a>
                    </div>

                    {/* Scroll indicator – inside content flow, below buttons */}
                    <div className="mt-12 sm:mt-16 flex flex-col items-center gap-2 text-slate-400">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
                        <div className="w-px h-10 sm:h-12 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                STATS – Animated Counter Bar
            ══════════════════════════════════════════════════ */}
            <section ref={statsRef} className="relative py-16 px-6 overflow-hidden border-y border-slate-200 dark:border-white/5">
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="horizon-line absolute top-0 left-0 right-0"></div>
                <div className="horizon-line absolute bottom-0 left-0 right-0"></div>

                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                    {[
                        { value: companies, suffix: '+', label: 'Empresas Escaladas' },
                        { value: days, suffix: '', label: 'Días para 2× Leads' },
                        { value: projects, suffix: '+', label: 'Proyectos Entregados' },
                        { value: uptime, suffix: '%', label: 'Uptime Garantizado' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <p className="text-4xl md:text-6xl font-black text-primary tabular-nums group-hover:scale-110 transition-transform duration-300 origin-center">
                                {stat.value}{stat.suffix}
                            </p>
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                COMPANY IDENTITY – Bento Grid
            ══════════════════════════════════════════════════ */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-[0.04]"></div>

                <div className="max-w-6xl mx-auto">
                    <div className="mb-20">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-4">01 · Identidad</p>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">
                            Fiberlink <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Servicios TIC</span>
                        </h2>
                    </div>

                    {/* Bento Cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Big card */}
                        <div className="md:col-span-2 p-10 rounded-[2.5rem] bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
                            <div className="absolute inset-0 blueprint-grid opacity-10"></div>
                            <div className="absolute -bottom-10 -right-10 size-48 rounded-full bg-white/10 blur-3xl"></div>
                            <span className="material-symbols-outlined text-5xl mb-6 block opacity-80">corporate_fare</span>
                            <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">Nuestra Misión Digital</h3>
                            <p className="text-white/80 leading-relaxed font-medium max-w-md">
                                Transformamos negocios en máquinas de crecimiento digital. Cada solución que construimos está diseñada para generar retorno de inversión medible y escalable a largo plazo.
                            </p>
                        </div>

                        {/* Small card */}
                        <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-xl group hover:border-primary/40 hover:-translate-y-1 transition-all duration-500">
                            <span className="material-symbols-outlined text-4xl text-primary mb-5 block">location_on</span>
                            <h3 className="text-xl font-black text-foreground mb-3">Presencia Nacional</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Operamos desde México, sirviendo empresas en todo el territorio con soluciones cloud-native y soporte remoto 24/7.
                            </p>
                        </div>

                        {/* Small card */}
                        <div className="p-8 rounded-[2.5rem] bg-slate-950 text-white group hover:bg-primary transition-all duration-500 hover:-translate-y-1">
                            <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white mb-5 block transition-colors">auto_graph</span>
                            <h3 className="text-xl font-black mb-3">+50 Empresas Escaladas</h3>
                            <p className="text-slate-400 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                                Este trimestre hemos acompañado a más de 50 empresas en su transformación digital.
                            </p>
                        </div>

                        {/* Big card */}
                        <div className="md:col-span-2 p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-[4rem]"></div>
                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                {[
                                    { icon: 'rocket_launch', title: 'Diseño que Vende', desc: 'Interfaces que convierten visitantes en clientes.' },
                                    { icon: 'query_stats', title: 'Datos en Tiempo Real', desc: 'Dashboards para decisiones inteligentes.' },
                                    { icon: 'bolt', title: 'Velocidad de Entrega', desc: 'De la estrategia al lanzamiento en semanas.' },
                                    { icon: 'security', title: 'Zero Trust Security', desc: 'Seguridad empresarial en cada capa.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                            <span className="material-symbols-outlined text-sm">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                                            <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-2xl font-black text-foreground mt-8">La tecnología que tu empresa necesita para crecer sin límites.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                PILLARS – Hexagonal Grid
            ══════════════════════════════════════════════════ */}
            <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 transition-colors duration-500">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-4">02 · Capacidades</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-foreground">Nuestros <span className="text-primary italic">6 Pilares&nbsp;</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pillars.map((p, i) => (
                            <div
                                key={i}
                                className="group p-8 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="size-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                    <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                                </div>
                                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{p.desc}</p>

                                <div className="absolute bottom-4 right-4 text-primary/0 group-hover:text-primary/30 transition-all duration-500">
                                    <span className="material-symbols-outlined text-5xl font-black">{p.icon}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                DIRECTOR – Premium Profile Card
            ══════════════════════════════════════════════════ */}
            <section id="director" className="py-32 px-6 relative overflow-hidden">
                {/* Background FX */}
                <div className="absolute inset-0 ai-processing-bg opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-full bg-primary/5 blur-[150px] pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-4">03 · Liderazgo</p>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
                            El Arquitecto <span className="text-primary italic">detrás&nbsp;</span> <br />de la Visión
                        </h2>
                    </div>

                    {/* Director Card */}
                    <div className="max-w-4xl mx-auto">
                        <div className="relative group">
                            {/* Glow backdrop */}
                            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-white dark:bg-slate-900 transition-all duration-500 group-hover:border-primary/30">
                                {/* Card Header */}
                                <div className="bg-gradient-to-r from-primary to-secondary p-10 pb-0 relative overflow-hidden">
                                    <div className="absolute inset-0 blueprint-grid opacity-10"></div>
                                    <div className="absolute -bottom-20 -right-20 size-64 bg-white/10 rounded-full blur-2xl"></div>

                                    <div className="flex flex-col md:flex-row items-start md:items-end gap-8 relative z-10 pb-10">
                                        {/* Avatar */}
                                        <div className="size-28 md:size-36 rounded-[1.5rem] border-2 border-white/40 shrink-0 shadow-2xl overflow-hidden">
                                            <img
                                                src="/director.png"
                                                alt="Jonathan Filiberto Hernández Flores – Director General de Fiberlink Servicios TIC"
                                                className="w-full h-full object-cover object-top"
                                            />
                                        </div>

                                        <div className="text-white pb-2">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-[10px] font-black uppercase tracking-widest mb-4">
                                                <span className="size-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                                Director General · CEO
                                            </div>
                                            <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
                                                Jonathan Filiberto<br />Hernández Flores
                                            </h3>
                                            <p className="text-white/70 mt-2 font-medium">Fiberlink Servicios TIC · FiberLink Labs</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-10">
                                    <div className="grid md:grid-cols-5 gap-10">
                                        <div className="md:col-span-3 space-y-4">
                                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                                Jonathan Filiberto Hernández Flores es el Director General y fundador de <strong className="text-foreground">Fiberlink Servicios TIC</strong> y la división de innovación <strong className="text-foreground">FiberLink Labs</strong>.
                                            </p>
                                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                                Con una filosofía centrada en el impacto empresarial real, ha liderado proyectos de transformación digital para empresas de múltiples industrias en México, ayudando a organizaciones a duplicar sus ingresos mediante tecnología estratégica.
                                            </p>
                                            <blockquote className="mt-6 border-l-4 border-primary pl-6 py-2">
                                                <p className="text-slate-700 dark:text-slate-200 font-black text-lg italic leading-relaxed">
                                                    "La tecnología debe ser un activo que trabaja para ti, no un gasto que te preocupa."
                                                </p>
                                                <footer className="text-xs font-bold uppercase tracking-widest text-primary mt-3">— Jonathan Hernández Flores</footer>
                                            </blockquote>
                                        </div>

                                        <div className="md:col-span-2">
                                            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-5">Especialidades</p>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.map((s, i) => <SkillTag key={s} label={s} cls={`[animation-delay:${i * 100}ms]`} />)}
                                            </div>

                                            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/5 space-y-3">
                                                {[
                                                    { icon: 'language', label: 'México' },
                                                    { icon: 'work', label: 'Fiberlink Servicios TIC' },
                                                    { icon: 'hub', label: 'FiberLink Labs' },
                                                ].map(item => (
                                                    <div key={item.label} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                                        <span className="material-symbols-outlined text-base text-primary">{item.icon}</span>
                                                        <span className="font-medium">{item.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                CTA – Cinematic Closing
            ══════════════════════════════════════════════════ */}
            <section className="py-32 px-6 relative overflow-hidden border-t border-slate-200 dark:border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-10">
                        <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                        Disponible Ahora · 24/7
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                        ¿Construimos <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            tu futuro?
                        </span>
                    </h2>

                    <p className="text-xl text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-xl mx-auto">
                        15 minutos. Gratis. Sin compromiso. Con el equipo que ya escaló más de 50 empresas.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            to="/#contacto"
                            className="group relative inline-flex items-center gap-3 px-12 py-6 bg-primary text-white font-black text-lg rounded-2xl overflow-hidden shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:-translate-y-1 active:scale-95 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10">Agendar Sesión Gratis</span>
                            <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">send</span>
                        </Link>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-8 py-6 rounded-2xl border border-slate-300 dark:border-white/10 text-foreground font-bold hover:border-primary hover:text-primary transition-all"
                        >
                            <span className="material-symbols-outlined">home</span>
                            Volver al Inicio
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
