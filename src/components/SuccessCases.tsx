import { useNavigate } from 'react-router-dom';

const SuccessCases = () => {
    const navigate = useNavigate();
    const cases = [
        {
            title: "Control Total de Ventas",
            client: "Grupo Comercial de la Región",
            metric: "+45% Eficiencia",
            desc: "Conectamos múltiples sucursales con un sistema moderno que permite controlar inventarios y ventas en tiempo real desde cualquier lugar.",
            image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1000&auto=format&fit=crop",
            tag: "Ventas & Retail",
            url: "#"
        },
        {
            title: "Especialización para Restaurantes",
            client: "Sector Gastronómico Local",
            metric: "+35% Eficiencia",
            desc: "Mejoramos la operación de negocios de comida con sistemas que agilizan pedidos y controlan costos de forma automática.",
            image: "/elbuenservir.jpg",
            tag: "Gastronomía Digital",
            url: "/iniciativas/elbuenservir"
        }
    ];

    return (
        <section id="casos" className="py-24 px-6 bg-background transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Casos de Éxito
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                            Soluciones que <span className="text-gradient">impulsan negocios reales.</span>
                        </h1>
                    </div>
                    <button className="px-8 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-2xl font-bold hover:border-primary transition-all text-sm text-foreground">
                        Ver todos los proyectos
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {cases.map((project, idx) => (
                        <div key={idx} className="group cursor-pointer bg-white/5 dark:bg-slate-900/20 p-4 rounded-[2.5rem] border border-transparent hover:border-primary/10 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(13,89,242,0.2)]" onClick={() => project.url !== '#' && navigate(project.url)}>
                            <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden mb-8">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <span className="text-white font-bold flex items-center gap-2">
                                        Explorar Proyecto <span className="material-symbols-outlined">arrow_outward</span>
                                    </span>
                                </div>
                                <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                                    {project.tag}
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-slate-500 dark:text-white font-medium">{project.client}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-black text-primary">{project.metric}</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Impacto Medido</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessCases;
