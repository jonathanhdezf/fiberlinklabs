import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AcademicPortalCaseStudy.css';

const AcademicPortalCaseStudy = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const modules = [
        {
            id: 'sge',
            label: 'SGE',
            title: 'Sistema de Gestión Escolar',
            icon: 'manage_accounts',
            color: '#6366f1',
            colorBg: 'rgba(99,102,241,0.1)',
            colorBorder: 'rgba(99,102,241,0.25)',
            desc: 'Centraliza la administración institucional: inscripciones, control de pagos, asistencia y expedientes digitales en un solo lugar.',
            features: ['Inscripciones y reinscripciones en línea', 'Módulo de cobranza y pagos', 'Control de asistencia por materia', 'Expedientes académicos digitales', 'Reportes administrativos en tiempo real'],
        },
        {
            id: 'lms',
            label: 'LMS',
            title: 'Learning Management System',
            icon: 'school',
            color: '#10b981',
            colorBg: 'rgba(16,185,129,0.1)',
            colorBorder: 'rgba(16,185,129,0.25)',
            desc: 'Organiza cursos, materiales y evaluaciones. Inspirado en la arquitectura de Moodle/Canvas pero adaptado al contexto latinoamericano.',
            features: ['Catálogo de cursos y materias', 'Carga de recursos: PDF, video, links', 'Evaluaciones y quizzes automáticos', 'Seguimiento del aprendizaje por alumno', 'Foros de discusión y mensajería'],
        },
        {
            id: 'portal',
            label: 'Portal',
            title: 'Portal Académico Institucional',
            icon: 'web_asset',
            color: '#f59e0b',
            colorBg: 'rgba(245,158,11,0.1)',
            colorBorder: 'rgba(245,158,11,0.25)',
            desc: 'La capa unificada: combina información institucional, acceso a clases, recursos académicos y autoservicio en un solo portal responsive.',
            features: ['Dashboard personalizado por rol', 'Calendario académico interactivo', 'Biblioteca de recursos institucionales', 'Noticias y comunicados oficiales', 'Acceso móvil nativo (PWA)'],
        },
    ];

    const techStack = [
        { name: 'React + Vite', category: 'Frontend', icon: 'code' },
        { name: 'Node.js / Express', category: 'Backend', icon: 'dns' },
        { name: 'PostgreSQL', category: 'Base de datos', icon: 'database' },
        { name: 'Prisma ORM', category: 'Data layer', icon: 'layers' },
        { name: 'JWT + RBAC', category: 'Autenticación', icon: 'lock' },
        { name: 'Vercel / Railway', category: 'Deploy', icon: 'cloud_upload' },
        { name: 'Tailwind CSS', category: 'Estilos', icon: 'palette' },
        { name: 'WebSockets', category: 'Tiempo real', icon: 'sync' },
    ];

    const timeline = [
        { week: 'Sem 1–2', phase: 'Discovery', desc: 'Entrevistas con directivos, docentes y alumnos. Mapeo de flujos y definición de alcance MVP.', icon: 'search' },
        { week: 'Sem 3–4', phase: 'Diseño UX', desc: 'Wireframes, prototipo interactivo en Figma. Validación con usuarios reales.', icon: 'draw' },
        { week: 'Sem 5–8', phase: 'Desarrollo Core', desc: 'SGE (inscripciones, pagos, asistencia) + autenticación multi-rol.', icon: 'developer_mode' },
        { week: 'Sem 9–11', phase: 'LMS + Portal', desc: 'Módulo de cursos, evaluaciones, calendario y dashboard institucional.', icon: 'school' },
        { week: 'Sem 12', phase: 'QA & Launch', desc: 'Testing, carga de datos iniciales, capacitación al equipo y despliegue en producción.', icon: 'rocket_launch' },
    ];

    const metrics = [
        { value: '12 sem', label: 'De 0 a producción' },
        { value: '3 en 1', label: 'SGE + LMS + Portal' },
        { value: '+60%', label: 'Reducción de papeleo' },
        { value: '100%', label: 'Acceso móvil (PWA)' },
    ];

    return (
        <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden blueprint-grid bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 selection:bg-primary/30 transition-colors duration-300">

            {/* ── Navigation ── */}
            <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="relative h-10 flex items-center group">
                            <img src="/logo.jpg" alt="FiberLink Labs" className="h-full w-auto object-contain transition-opacity duration-700 opacity-100 group-hover:opacity-0" />
                            <img src="/logo.webp" alt="FiberLink Labs" className="absolute inset-0 h-full w-auto object-contain transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">FiberLink <span className="text-primary">Labs</span></h2>
                    </Link>



                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center group"
                            aria-label="Toggle Theme"
                        >
                            <span className="material-symbols-outlined dark:hidden text-slate-600 group-hover:text-primary transition-colors">dark_mode</span>
                            <span className="material-symbols-outlined hidden dark:block text-slate-400 group-hover:text-primary transition-colors">light_mode</span>
                        </button>

                    </div>
                </div>
            </header>


            {/* ── Regresar Flotante ── */}
            <Link
                to="/#casos"
                className="fixed top-24 left-6 z-[60] flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-primary/20 text-slate-900 dark:text-white text-sm font-bold hover:bg-primary hover:text-white transition-all shadow-xl group"
            >
                <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                <span>Regresar</span>
            </Link>

            <main className="flex-1 flex flex-col items-center justify-start pt-32 pb-24 px-6 relative z-10">

                {/* ── Hero ── */}
                <div className="text-center max-w-4xl mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Caso de Éxito · MVP Educativo
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 dark:text-white">
                        Portal Académico:<br />
                        <span className="text-primary">SGE + LMS en 12 semanas</span>
                    </h1>

                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Construimos un MVP que unifica la gestión escolar administrativa, el aprendizaje en línea y el portal institucional en una sola plataforma escalable.
                    </p>

                    {/* Metric pills */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {metrics.map(m => (
                            <div key={m.label} className="flex flex-col items-center px-6 py-3 rounded-2xl bg-primary/5 border border-primary/15 min-w-[110px]">
                                <span className="text-2xl font-black text-primary">{m.value}</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-0.5">{m.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Browser Mockup ── */}
                <div className="relative w-full max-w-5xl mb-24 group">
                    <div className="absolute -inset-10 bg-primary/10 rounded-[4rem] blur-3xl opacity-50 pointer-events-none"></div>
                    <div className="relative rounded-xl border-[8px] border-slate-800 dark:border-slate-900 bg-slate-900 shadow-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(13,89,242,0.4)]">
                        {/* Browser chrome */}
                        <div className="h-8 w-full bg-slate-800 flex items-center px-4 gap-3">
                            <div className="flex gap-1.5">
                                <div className="size-2.5 rounded-full bg-red-500/60"></div>
                                <div className="size-2.5 rounded-full bg-amber-500/60"></div>
                                <div className="size-2.5 rounded-full bg-emerald-500/60"></div>
                            </div>
                            <div className="flex-1 mx-4 h-5 bg-slate-700 rounded-full flex items-center px-3 gap-2">
                                <span className="material-symbols-outlined text-slate-500 text-xs">lock</span>
                                <span className="text-[10px] text-slate-500 font-mono">portal.institucion.edu.mx</span>
                            </div>
                        </div>
                        {/* Dashboard UI simulation */}
                        <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden flex">
                            {/* Sidebar */}
                            <div className="w-14 bg-slate-900 border-r border-white/5 flex flex-col items-center py-4 gap-4">
                                {['home', 'school', 'calendar_today', 'receipt_long', 'groups', 'analytics'].map(ic => (
                                    <span key={ic} className="material-symbols-outlined text-slate-600 text-lg hover:text-primary transition-colors">{ic}</span>
                                ))}
                            </div>
                            {/* Main content */}
                            <div className="flex-1 p-6 flex flex-col gap-4 overflow-hidden">
                                {/* Top bar */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-white text-sm font-bold">Panel Académico</div>
                                        <div className="text-slate-500 text-xs">Ciclo Escolar 2025–2026</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 h-5 bg-primary/20 rounded-full border border-primary/30"></div>
                                        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary text-sm">person</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Stat cards */}
                                <div className="grid grid-cols-4 gap-3">
                                    {[
                                        { label: 'Alumnos', value: '1,248', color: '#6366f1', icon: 'groups' },
                                        { label: 'Cursos activos', value: '42', color: '#10b981', icon: 'school' },
                                        { label: 'Pagos pendientes', value: '87', color: '#f59e0b', icon: 'receipt_long' },
                                        { label: 'Asistencia hoy', value: '94%', color: '#3b82f6', icon: 'event_available' },
                                    ].map(stat => (
                                        <div key={stat.label} className="apcs-stat-card" data-color={stat.color === '#6366f1' ? 'indigo' : stat.color === '#10b981' ? 'emerald' : stat.color === '#f59e0b' ? 'amber' : 'blue'}>
                                            <span className="material-symbols-outlined apcs-stat-icon">{stat.icon}</span>
                                            <div className="text-white text-lg font-black leading-none mt-1">{stat.value}</div>
                                            <div className="text-slate-600 text-[9px] uppercase tracking-wider mt-0.5">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                                {/* Content rows */}
                                <div className="grid grid-cols-3 gap-3 flex-1">
                                    <div className="col-span-2 bg-slate-900 border border-white/5 rounded-lg p-3">
                                        <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-2">Cursos recientes</div>
                                        {['Matemáticas IV', 'Programación Web', 'Contabilidad II', 'Inglés Avanzado'].map((c, i) => (
                                            <div key={c} className="flex items-center gap-2 py-1.5 border-b border-white/5 last:border-0">
                                                <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-primary text-xs">book</span>
                                                </div>
                                                <span className="text-slate-300 text-xs flex-1">{c}</span>
                                                <div className="apcs-progress-bar">
                                                    <div className="apcs-progress-fill" data-width={[78, 62, 91, 45][i]}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-slate-900 border border-white/5 rounded-lg p-3">
                                        <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-2">Calendario</div>
                                        <div className="grid grid-cols-7 gap-px text-center">
                                            {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(d => <div key={d} className="text-slate-600 text-[8px]">{d}</div>)}
                                            {Array.from({ length: 28 }, (_, i) => (
                                                <div key={i} className={`text-[9px] rounded py-0.5 ${i === 14 ? 'bg-primary text-white font-bold' : 'text-slate-500 hover:text-white'}`}>{i + 1}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto w-[108%] h-3 bg-slate-800 rounded-b-xl -mt-1 shadow-xl"></div>
                </div>

                {/* ── The 3 Modules ── */}
                <div className="w-full max-w-7xl mb-20">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">layers</span>
                            Arquitectura del MVP
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                            Tres módulos. Una sola plataforma.
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto">
                            Diseñamos el MVP para que cada módulo pueda usarse de manera independiente o integrada, dependiendo de las necesidades de la institución.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {modules.map(mod => (
                            <div
                                key={mod.id}
                                className="apcs-module-card"
                                data-type={mod.id}
                            >
                                <div className="apcs-module-bg-text">{mod.label}</div>

                                <div className="flex items-center gap-3 mb-5">
                                    <div className="apcs-module-icon-wrapper">
                                        <span className="material-symbols-outlined apcs-module-icon">{mod.icon}</span>
                                    </div>
                                    <div>
                                        <div className="apcs-module-badge">{mod.label}</div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{mod.title}</h3>
                                    </div>
                                </div>

                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm">{mod.desc}</p>

                                <ul className="space-y-2.5">
                                    {mod.features.map(f => (
                                        <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                            <span className="material-symbols-outlined apcs-feature-icon">check_circle</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Challenge / Architecture / Impact ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mb-20">
                    {/* El Reto */}
                    <div className="glass-card p-8 rounded-2xl relative group hover:border-primary/40 transition-all hover:shadow-[0_0_40px_-10px_rgba(13,89,242,0.3)] bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <span className="text-7xl font-bold text-slate-900 dark:text-white">01</span>
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-amber-500/10 rounded-lg">
                                <span className="material-symbols-outlined text-amber-500 text-3xl">warning</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">El Reto</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Institución educativa con procesos 100% manuales: inscripciones en papel, pagos por transferencia sin conciliación y clases sin plataforma unificada.
                        </p>
                        <ul className="space-y-3">
                            {['Expedientes físicos sin digitalizar', 'Sin trazabilidad de pagos ni adeudos', 'Docentes sin espacio para subir materiales', 'Alumnos sin acceso centralizado a recursos'].map(item => (
                                <li key={item} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-amber-500 text-sm mt-0.5">error</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Arquitectura */}
                    <div className="glass-card p-8 rounded-2xl relative group hover:border-primary/40 transition-all hover:shadow-[0_0_40px_-10px_rgba(13,89,242,0.3)] bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <span className="text-7xl font-bold text-slate-900 dark:text-white">02</span>
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <span className="material-symbols-outlined text-primary text-3xl">developer_board</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">La Arquitectura</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Arquitectura modular con API REST, autenticación RBAC multi-rol (admin, docente, alumno, padre de familia) y despliegue en la nube.
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { label: 'Auth', value: 'JWT + RBAC', icon: 'lock' },
                                { label: 'API', value: 'REST + WS', icon: 'api' },
                                { label: 'DB', value: 'PostgreSQL', icon: 'database' },
                                { label: 'Deploy', value: 'Railway', icon: 'cloud' },
                            ].map(item => (
                                <div key={item.label} className="bg-primary/10 rounded-xl p-3 border border-primary/20 hover:bg-primary/20 transition-all">
                                    <div className="text-primary text-[10px] font-bold uppercase mb-1 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs">{item.icon}</span>
                                        {item.label}
                                    </div>
                                    <div className="text-xs font-bold dark:text-white">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* El Impacto */}
                    <div className="glass-card p-8 rounded-2xl relative group hover:border-primary/40 transition-all hover:shadow-[0_0_40px_-10px_rgba(13,89,242,0.3)] bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <span className="text-7xl font-bold text-slate-900 dark:text-white">03</span>
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                <span className="material-symbols-outlined text-emerald-500 text-3xl">insights</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">El Impacto</h3>
                        </div>
                        <div className="space-y-5">
                            {[
                                { value: '+60%', label: 'reducción en tiempo administrativo' },
                                { value: '100%', label: 'digitalización de expedientes' },
                                { value: '3× más', label: 'rapidez en cobro de colegiaturas' },
                            ].map(stat => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-black text-primary">{stat.value}</div>
                                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
                                </div>
                            ))}
                            <div className="flex items-center gap-3 py-2 px-4 bg-emerald-500/10 rounded-full w-fit">
                                <span className="text-emerald-500 font-bold text-sm">Sistema activo</span>
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Timeline ── */}
                <div className="w-full max-w-5xl mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">timeline</span>
                            Proceso de desarrollo
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground">Del blueprint al lanzamiento en <span className="text-gradient">12 semanas</span></h2>
                    </div>

                    <div className="relative">
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block"></div>
                        <div className="space-y-6">
                            {timeline.map((step, i) => (
                                <div key={step.phase} className="relative flex gap-6 items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center z-10 group-hover:bg-primary/20 transition-all">
                                        <span className="material-symbols-outlined text-primary">{step.icon}</span>
                                    </div>
                                    <div className="flex-1 glass-card p-5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10 group-hover:border-primary/30 transition-all">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                                            <span className="text-xs font-black text-primary uppercase tracking-widest">{step.week}</span>
                                            <h4 className="font-bold text-slate-900 dark:text-white">{step.phase}</h4>
                                            <div className="sm:ml-auto flex items-center gap-1 text-xs text-slate-400 font-mono">
                                                <span className="text-primary font-bold">{String(i + 1).padStart(2, '0')}</span>
                                                <span>/</span>
                                                <span>{timeline.length}</span>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Tech Stack ── */}
                <div className="w-full max-w-5xl mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">terminal</span>
                            Stack Tecnológico
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground">Herramientas elegidas para <span className="text-gradient">escalar</span></h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {techStack.map(tech => (
                            <div key={tech.name} className="glass-card group flex flex-col items-center text-center p-5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(13,89,242,0.3)] transition-all">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-all">
                                    <span className="material-symbols-outlined text-primary">{tech.icon}</span>
                                </div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{tech.category}</div>
                                <div className="font-bold text-slate-900 dark:text-white text-sm">{tech.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CTA ── */}
                <div className="w-full max-w-4xl">
                    <div className="p-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl">
                        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[1.3rem] flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">¿Tu institución necesita un portal así?</h4>
                                <p className="text-slate-500">Agenda una sesión de diagnóstico gratuita y diseñamos tu blueprint en 48 hrs.</p>
                            </div>
                            <Link
                                to="/#contacto"
                                className="whitespace-nowrap px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-primary/30 flex items-center gap-3"
                            >
                                Agendar diagnóstico
                                <span className="material-symbols-outlined">calendar_today</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── Footer ── */}
                <footer className="mt-24 pt-12 border-t border-primary/10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-slate-500 text-sm">
                    <div className="flex items-center gap-6">
                        <span>© 2026 FiberLink Labs Engineering</span>
                        <span className="h-4 w-px bg-slate-300 dark:bg-slate-800"></span>
                        <span>Project: Academic-Portal-MVP-V1</span>
                    </div>
                    <div className="flex items-center gap-8">
                        <button className="hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="material-symbols-outlined text-lg group-hover:-translate-y-0.5 transition-transform">description</span> Descargar PDF
                        </button>
                        <button className="hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">share</span> Compartir Blueprint
                        </button>
                    </div>
                </footer>
            </main>

            {/* ── Sidebar decoratives ── */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 pointer-events-none opacity-20">
                <div className="text-xs rotate-90 origin-left whitespace-nowrap tracking-[0.5em] font-bold uppercase dark:text-white">Plataforma Educativa · MVP Activo</div>
                <div className="h-24 w-px bg-primary mx-auto"></div>
            </div>
            <div className="fixed right-6 bottom-12 hidden lg:flex flex-col items-end gap-2 pointer-events-none opacity-20">
                <div className="text-[10px] font-mono dark:text-white">SGE + LMS + PORTAL</div>
                <div className="text-[10px] font-mono dark:text-white">Build: Academic-Alpha-V1</div>
            </div>
        </div>
    );
};

export default AcademicPortalCaseStudy;
