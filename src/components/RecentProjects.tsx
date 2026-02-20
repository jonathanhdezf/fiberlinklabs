const CARD_DELAY_CLASSES = ["project-card-delay-0", "project-card-delay-1", "project-card-delay-2"];

const projects = [
    {
        id: 1,
        name: "FiberGravity MX",
        category: "ISP & Conectividad",
        description: "Plataforma de marketing y gestión de servicios de internet de alta velocidad para el mercado mexicano. Diagnóstico inteligente, planes personalizados y soporte 24/7.",
        image: "/fibergravity.jpg",
        url: "https://fibergravitymx.vercel.app/",
        tags: ["Next.js", "Tailwind", "ISP"],
        status: "En producción",
    },
    {
        id: 2,
        name: "El Buen Servir",
        category: "Gastronomía & POS",
        description: "Ecosistema digital para restaurantes modernos: gestión de menú en tiempo real, panel de órdenes y experiencia de cliente optimizada para hostelería.",
        image: "/elbuenservir.jpg",
        url: "https://elbuenservir.vercel.app/",
        tags: ["React", "Prisma", "SaaS"],
        status: "En producción",
    },
    {
        id: 3,
        name: "FiberLink Labs",
        category: "Software & Consultoría",
        description: "Sitio corporativo de FiberLink Labs: arquitectura de soluciones digitales, transformación empresarial y desarrollo de software a medida.",
        image: "/fiberlinklabs.jpg",
        url: "https://fiberlinklabs.vercel.app/",
        tags: ["Vite", "TypeScript", "B2B"],
        status: "En producción",
    },
];

const RecentProjects = () => {
    return (
        <section id="proyectos-recientes" className="py-24 px-6 bg-slate-50 dark:bg-[#060810] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none recent-projects-bg" aria-hidden="true" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                            Últimos Proyectos
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                            Lo que hemos{" "}
                            <span className="text-gradient">construido.</span>
                        </h2>
                        <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                            Soluciones reales para industrias reales. Cada proyecto refleja nuestro compromiso con la excelencia técnica y el impacto medible.
                        </p>
                    </div>
                    <a
                        href="mailto:contacto@fiberlinklabs.com"
                        className="shrink-0 px-8 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-2xl font-bold hover:border-primary transition-all text-sm dark:text-white hover:text-primary"
                    >
                        Iniciar un proyecto →
                    </a>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <a
                            key={project.id}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver proyecto ${project.name}`}
                            className={`project-card ${CARD_DELAY_CLASSES[idx] ?? ''} group flex flex-col rounded-[2rem] overflow-hidden border border-transparent hover:border-primary/20 transition-all duration-500 bg-white dark:bg-slate-900/60 hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.35)] focus:outline-none focus:ring-2 focus:ring-primary`}
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={`Preview de ${project.name}`}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                                    <span className="text-white font-bold text-sm flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base">open_in_new</span>
                                        Ver sitio en vivo
                                    </span>
                                </div>
                                {/* Status badge */}
                                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                                    {project.status}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-6 gap-4">
                                {/* Category */}
                                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                                    {project.category}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                                    {project.name}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;
