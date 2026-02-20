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
                        Innovación B2B
                    </div>

                    <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
                        Donde otros ven un negocio,<br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-indigo-400">
                            nosotros vemos una arquitectura digital.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10 font-normal">
                        FiberLink Labs es la división de innovación B2B de Fiberlink Servicios TIC. Desarrollamos plataformas, sistemas y automatizaciones para empresas que están listas para escalar.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                        <a href="#diagnostico" className="glow-button w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold text-lg rounded-xl flex items-center justify-center gap-2">
                            Solicitar Diagnóstico Digital
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                        <a href="#metodologia" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-lg rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center">
                            Nuestra Metodología
                        </a>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-3xl">terminal</span>
                            <span className="font-bold tracking-tighter">NUCLEO TÉCNICO</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-3xl">deployed_code</span>
                            <span className="font-bold tracking-tighter">CODIGO FUNCIONAL</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-3xl">hub</span>
                            <span className="font-bold tracking-tighter">NUEVA GENERACIÓN</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 xl:col-span-4 hidden lg:block relative">
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-30"></div>
                        <div className="relative bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-sm overflow-hidden group">
                            <div className="flex gap-1.5 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>

                            <div className="space-y-4">
                                <div className="h-4 bg-primary/20 rounded-md w-3/4"></div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-32 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse"></div>
                                    <div className="h-32 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-4xl">analytics</span>
                                    </div>
                                </div>
                                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-md w-full"></div>
                                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-md w-5/6"></div>
                                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-slate-900"></div>
                                        <div className="w-8 h-8 rounded-full bg-primary/50 border-2 border-white dark:border-slate-900"></div>
                                        <div className="w-8 h-8 rounded-full bg-slate-400 dark:bg-slate-600 border-2 border-white dark:border-slate-900"></div>
                                    </div>
                                    <div className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase tracking-wider">Sistema en linea</div>
                                </div>
                            </div>

                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
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
                                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Accecibilidad</p>
                                    <p className="text-sm font-bold">99.9% del tiempo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 pointer-events-none">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Saber más</span>
                <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;
