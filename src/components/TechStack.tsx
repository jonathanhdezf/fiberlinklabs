const TechStack = () => {
    const techCategories = [
        {
            name: "Tecnologías Web",
            techs: [
                { name: "React", icon: "code" },
                { name: "TypeScript", icon: "terminal" },
                { name: "Node.js", icon: "javascript" },
                { name: "Next.js", icon: "data_object" },
                { name: "Tailwind CSS", icon: "palette" },
                { name: "Vite", icon: "bolt" }
            ]
        },
        {
            name: "Infraestructura & Datos",
            techs: [
                { name: "PostgreSQL", icon: "database" },
                { name: "MongoDB", icon: "storage" },
                { name: "Prisma", icon: "account_tree" },
                { name: "Redis", icon: "memory" },
                { name: "Docker", icon: "package_2" },
                { name: "AWS", icon: "cloud" }
            ]
        }
    ];

    return (
        <section id="tech-stack" className="py-24 px-6 relative overflow-hidden bg-background transition-colors duration-500">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Nuestro DNA Tecnológico
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                        Construimos con el <span className="text-gradient">stack del futuro.</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
                        Utilizamos las tecnologías más robustas y modernas para garantizar que tu arquitectura digital sea escalable, segura y ultrarrápida.
                    </p>
                </div>

                <div className="space-y-16">
                    {techCategories.map((category, idx) => (
                        <div key={idx} className="relative">
                            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8 text-center flex items-center justify-center gap-4">
                                <span className="h-px w-12 bg-slate-200 dark:bg-slate-800"></span>
                                {category.name}
                                <span className="h-px w-12 bg-slate-200 dark:bg-slate-800"></span>
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                {category.techs.map((tech, tIdx) => (
                                    <div
                                        key={tIdx}
                                        className="group relative p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
                                    >
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                                <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors text-2xl">
                                                    {tech.icon}
                                                </span>
                                            </div>
                                            <span className="text-sm font-bold text-slate-700 dark:text-white group-hover:text-primary transition-colors">
                                                {tech.name}
                                            </span>
                                        </div>
                                        {/* Background Glow */}
                                        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Accent Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
        </section>
    );
};

export default TechStack;
