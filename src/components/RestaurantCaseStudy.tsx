import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RestaurantCaseStudy: React.FC = () => {
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

    return (
        <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden blueprint-grid bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 selection:bg-primary/30 transition-colors duration-300">
            {/* Navigation */}
            <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="relative h-10 flex items-center group">
                            <img
                                src="/logo.jpg"
                                alt="FiberLink Labs"
                                className="h-full w-auto object-contain transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                            />
                            <img
                                src="/logo.webp"
                                alt="FiberLink Labs"
                                className="absolute inset-0 h-full w-auto object-contain transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                            />
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">FiberLink <span className="text-primary">Labs</span></h2>
                    </Link>

                    <nav className="hidden md:flex items-center gap-10">
                        <Link to="/#soluciones" className="text-sm font-medium hover:text-primary transition-colors">Soluciones</Link>
                        <Link to="/#metodologia" className="text-sm font-medium hover:text-primary transition-colors">Metodología</Link>
                        <Link to="/#casos" className="text-sm font-medium hover:text-primary transition-colors text-primary">Casos de Éxito</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center group"
                            aria-label="Toggle Theme"
                        >
                            <span className="material-symbols-outlined dark:hidden text-slate-600 group-hover:text-primary transition-colors">dark_mode</span>
                            <span className="material-symbols-outlined hidden dark:block text-slate-400 group-hover:text-primary transition-colors">light_mode</span>
                        </button>
                        <button className="hidden sm:block px-5 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all">
                            Iniciar Blueprint
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-start pt-32 pb-24 px-6 relative z-10">
                {/* Hero Title Section */}
                <div className="text-center max-w-3xl mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Caso de Éxito / Blueprint V2
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 dark:text-white">
                        Restaurant Case Study: <br />
                        <span className="text-primary">Transformación Digital</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                        Ingeniería de un ecosistema de alto rendimiento para operaciones de hostelería moderna mediante sincronización personalizada de ERP y POS.
                    </p>
                </div>

                {/* Laptop Mockup Showcase */}
                <div className="relative w-full max-w-5xl mb-24 group">
                    {/* Abstract Glow */}
                    <div className="absolute -inset-10 bg-primary/10 rounded-[4rem] blur-3xl opacity-50"></div>
                    {/* Mockup Frame */}
                    <div className="relative rounded-xl border-[8px] border-slate-800 dark:border-slate-900 bg-slate-900 shadow-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(13,89,242,0.4)]">
                        <div className="h-6 w-full bg-slate-800 flex items-center px-4 gap-1.5">
                            <div className="size-2 rounded-full bg-red-500/50"></div>
                            <div className="size-2 rounded-full bg-amber-500/50"></div>
                            <div className="size-2 rounded-full bg-emerald-500/50"></div>
                        </div>
                        <div className="aspect-[16/10] w-full bg-background-dark overflow-hidden">
                            <img
                                alt="Restaurant Analytics Dashboard"
                                className="w-full h-full object-cover opacity-80"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuHLjynk_OHnmeFj65R_xGD7udlJc-gX6FRcoQpUqRvOr-c_47XjlU83VpdRaCO2TWCY8Xi9uVeSuqW1FRtM8L-8siPsqBv40QbaTZejx2md5H6CLk6q71Ub6b5Qyr3jPx9rpOsaVdPSN0K4pz3_ghYCCZ6dKkHdJ0a99LgXtDx9I_TvZvKtVAWbam-wqZLrD3rDi49u1G1lUUzRE5C7rPxnNOImWT3lj3tlDZ0wsWg8Hz6M8pUgjIf2dTpPICgMotsmqjifpiYuor"
                            />
                        </div>
                    </div>
                    {/* Base of laptop */}
                    <div className="mx-auto w-[110%] h-3 bg-slate-800 rounded-b-xl -mt-1 shadow-xl"></div>
                </div>

                {/* Three Column Story Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
                    {/* Section 1: El Reto */}
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
                            Parálisis operativa causada por el seguimiento manual de inventarios y filtraciones significativas de ingresos debido a ineficiencias en el procesamiento de pedidos.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-primary text-xs mt-1">check_circle</span>
                                Desajuste de inventario {'>'} 15% mensual
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-primary text-xs mt-1">check_circle</span>
                                Retraso en informes en tiempo real
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-primary text-xs mt-1">check_circle</span>
                                Silos de entrada manual de datos
                            </li>
                        </ul>
                    </div>

                    {/* Section 2: La Arquitectura */}
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
                            Una capa de sincronización unificada que conecta terminales POS personalizados con un núcleo de ERP centralizado para la integridad de datos de extremo a extremo.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-primary/10 rounded-xl p-4 border border-primary/20 hover:bg-primary/20 transition-all">
                                <div className="text-primary text-[10px] font-bold uppercase mb-1">Frontend</div>
                                <div className="text-xs font-bold dark:text-white">Custom POS UI</div>
                            </div>
                            <div className="bg-primary/10 rounded-xl p-4 border border-primary/20 hover:bg-primary/20 transition-all">
                                <div className="text-primary text-[10px] font-bold uppercase mb-1">Backend</div>
                                <div className="text-xs font-bold dark:text-white">ERP Connector</div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: El Impacto */}
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
                        <div className="space-y-6">
                            <div>
                                <div className="text-4xl font-black text-primary mb-1">+35%</div>
                                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Crecimiento en Eficiencia</div>
                            </div>
                            <div className="h-px w-full bg-primary/20"></div>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                Visibilidad digital completa que conduce a una cadena de suministro optimizada y cero pérdida de datos durante las horas pico.
                            </p>
                            <div className="flex items-center gap-3 py-2 px-4 bg-emerald-500/10 rounded-full w-fit">
                                <span className="text-emerald-500 font-bold text-sm">Monitoreo Activo</span>
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Details */}
                <footer className="mt-24 pt-12 border-t border-primary/10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-slate-500 text-sm">
                    <div className="flex items-center gap-6">
                        <span>© 2026 FiberLink Labs Engineering</span>
                        <span className="h-4 w-px bg-slate-300 dark:bg-slate-800"></span>
                        <span>Project: Restaurant-Alpha-V2</span>
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

            {/* Sidebar Decorative Elements */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 pointer-events-none opacity-20">
                <div className="text-xs rotate-90 origin-left whitespace-nowrap tracking-[0.5em] font-bold uppercase dark:text-white">Integridad del Sistema: 99.9%</div>
                <div className="h-24 w-px bg-primary mx-auto"></div>
            </div>
            <div className="fixed right-6 bottom-12 hidden lg:flex flex-col items-end gap-2 pointer-events-none opacity-20">
                <div className="text-[10px] font-mono dark:text-white">LAT: 40.7128° N</div>
                <div className="text-[10px] font-mono dark:text-white">LNG: 74.0060° W</div>
            </div>
        </div>
    );
};

export default RestaurantCaseStudy;
