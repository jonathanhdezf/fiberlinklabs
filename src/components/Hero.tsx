const Hero = () => {
    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center hero-pattern">
            {/* Background Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] -z-10 animate-pulse-slow animate-delay-2s"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 xl:col-span-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Inovaciónes Web
                    </div>

                    <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight text-foreground">
                        Donde otros ven un negocio,<br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-indigo-400">
                            nosotros vemos una arquitectura digital.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-white max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10 font-normal">
                        FiberLink Labs es la división de innovación web de Fiberlink Servicios TIC. Desarrollamos plataformas, sistemas y automatizaciones para empresas que están listas para escalar.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                        <a href="#diagnostico" className="relative group w-full sm:w-auto">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-400 to-indigo-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative px-8 py-4.5 bg-slate-950 text-white font-black text-lg rounded-2xl flex items-center justify-center gap-3 border border-white/10 hover:border-white/20 transition-all active:scale-95">
                                <span className="relative z-10">Solicitar Diagnóstico <span className="text-primary italic">Digital</span></span>
                                <div className="size-8 bg-primary rounded-lg flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                    <span className="material-symbols-outlined text-sm font-black">arrow_forward</span>
                                </div>
                            </div>
                        </a>

                        <a href="#metodologia" className="group relative w-full sm:w-auto px-8 py-4.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-black text-lg rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-white/10 transition-all backdrop-blur-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            Nuestra Metodología
                            <span className="material-symbols-outlined text-slate-400 group-hover:rotate-45 transition-transform duration-500">expand_circle_right</span>
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-5 xl:col-span-4 hidden lg:block relative">
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-30"></div>
                        <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-7 shadow-2xl backdrop-blur-xl overflow-hidden group hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 hover:rotate-1">
                            {/* Window glass reflect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>

                            <div className="flex gap-2 mb-8">
                                <div className="w-3 h-3 rounded-full bg-red-400/40 group-hover:bg-red-500 transition-colors shadow-sm"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400/40 group-hover:bg-yellow-500 transition-colors shadow-sm"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400/40 group-hover:bg-green-500 transition-colors shadow-sm"></div>
                            </div>

                            <div className="space-y-5">
                                <div className="h-4 bg-primary/20 rounded-lg w-3/4 group-hover:w-full transition-all duration-1000"></div>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="h-36 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 flex flex-col justify-end p-4 group">
                                        <div className="flex items-end gap-1 h-12">
                                            {[40, 70, 45, 90, 60].map((h, i) => (
                                                <div key={i} className={`flex-1 bg-primary/30 rounded-t-sm group-hover:bg-primary transition-all duration-500 bar-h-${h}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-36 bg-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-150 transition-transform duration-1000 rounded-full"></div>
                                        <span className="material-symbols-outlined text-primary text-5xl relative z-10 group-hover:rotate-12 transition-transform duration-500">analytics</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-3 bg-slate-100 dark:bg-white/5 rounded-full w-full"></div>
                                    <div className="h-3 bg-slate-100 dark:bg-white/5 rounded-full w-5/6 group-hover:w-4/6 transition-all duration-700"></div>
                                </div>
                                <div className="mt-2 pt-6 border-t border-slate-100 dark:border-white/5 flex justify-between items-center">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className={`w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-slate-900 group-hover:translate-x-1 transition-transform delay-custom-${i}`}></div>
                                        ))}
                                    </div>
                                    <div className="px-3 py-1.5 bg-green-500/10 text-green-600 dark:text-green-400 text-[9px] font-black rounded-lg uppercase tracking-[0.15em] border border-green-500/20 group-hover:bg-green-500 group-hover:text-white transition-all">Sistema en linea</div>
                                </div>
                            </div>

                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-primary/20 group-hover:scale-125 transition-transform duration-700 overflow-hidden">
                                <img
                                    src="/logo.jpg"
                                    alt="FiberLink Visual"
                                    className="w-16 h-16 object-contain opacity-80 transition-opacity duration-700 group-hover:opacity-0"
                                />
                                <img
                                    src="/logo.webp"
                                    alt="FiberLink Visual"
                                    className="absolute inset-0 m-auto w-16 h-16 object-contain opacity-0 transition-opacity duration-700 group-hover:opacity-80"
                                />
                            </div>
                        </div>

                        <div className="absolute -bottom-8 -left-8 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce animate-duration-4s">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                    <span className="material-symbols-outlined text-green-600 dark:text-green-400">speed</span>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-300 tracking-wider">Tu Proyecto en tiempo record</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">99.9% del tiempo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Capabilities - Centered Globally in Hero */}
            <div className="mt-24 w-full max-w-7xl mx-auto px-6">
                <div className="w-full grid grid-cols-2 md:grid-cols-5 lg:flex lg:flex-nowrap justify-center items-start gap-y-10 gap-x-4 lg:gap-x-12 opacity-70 hover:opacity-100 transition-opacity duration-700">
                    {[
                        { icon: 'terminal', label: 'NÚCLEO', sub: 'TÉCNICO' },
                        { icon: 'deployed_code', label: 'CÓDIGO', sub: 'FUNCIONAL' },
                        { icon: 'hub', label: 'WEB APP', sub: 'NUEVA GEN' },
                        { icon: 'api', label: 'API', sub: 'INTERFAZ' },
                        { icon: 'database', label: 'DB', sub: 'BASE DE DATOS' },
                        { icon: 'shield_lock', label: 'AUTH', sub: 'SEGURIDAD' },
                        { icon: 'sync_alt', label: 'CI/CD', sub: 'PIPELINE' },
                        { icon: 'design_services', label: 'UX', sub: 'EXPERIENCIA' },
                        { icon: 'description', label: 'DOCS', sub: 'REFERENCIA' },
                        { icon: 'settings_suggest', label: 'OPS', sub: 'OPERACIONES' },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center group transition-all hover:-translate-y-1 lg:min-w-[100px]">
                            <span className="material-symbols-outlined text-2xl text-primary mb-3 group-hover:scale-110 transition-transform">{item.icon}</span>
                            <span className="text-[10px] font-black tracking-[0.2em] text-foreground uppercase text-center">{item.label}</span>
                            <span className="text-[8px] font-bold text-slate-500 dark:text-white/40 uppercase tracking-tighter whitespace-nowrap text-center">{item.sub}</span>
                        </div>
                    ))}
                </div>
            </div>

            <a href="#soluciones" className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-primary transition-all animate-bounce opacity-60">
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">Saber más</span>
                <div className="w-[2px] h-6 bg-gradient-to-b from-primary to-transparent"></div>
            </a>
            <style>{`
                .bar-h-40 { height: 40%; }
                .bar-h-70 { height: 70%; }
                .bar-h-45 { height: 45%; }
                .bar-h-90 { height: 90%; }
                .bar-h-60 { height: 60%; }
                .delay-custom-1 { transition-delay: 100ms; }
                .delay-custom-2 { transition-delay: 200ms; }
                .delay-custom-3 { transition-delay: 300ms; }
            `}</style>
        </section>
    );
};

export default Hero;
