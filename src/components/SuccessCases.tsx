import { useNavigate } from 'react-router-dom';

const SuccessCases = () => {
    const navigate = useNavigate();
    const cases = [
        {
            title: "Especialización para Restaurantes",
            client: "Sector Gastronómico Local",
            metric: "+35% Eficiencia",
            desc: "Mejoramos la operación de negocios de comida con sistemas que agilizan pedidos y controlan costos de forma automática.",
            image: "/elbuenservir.jpg",
            tag: "Gastronomía Digital",
            url: "/iniciativas/elbuenservir"
        },
        {
            title: "Portal Académico MVP",
            client: "Institución Educativa",
            metric: "+60% Eficiencia",
            desc: "Construimos en 12 semanas una plataforma que unifica SGE, LMS y portal institucional: inscripciones, cursos, pagos y expedientes digitales en un solo lugar.",
            image: "/portal-educativo.jpg",
            tag: "EdTech · Plataforma Académica",
            url: "/casos/portal-academico"
        },
        {
            title: "Punto de Venta Web MVP",
            client: "Tienda de Conveniencia Local",
            metric: "↓ 80% Errores de Caja",
            desc: "POS web estilo OXXO: carrito de compras, control de inventario, registro de caja, roles de usuario y reportes diarios. Sin instalar nada.",
            image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1000&auto=format&fit=crop",
            tag: "Retail · Punto de Venta",
            url: "/casos/punto-de-venta"
        },
        {
            title: "Tortillería Digital MVP",
            client: "Tortillería Familiar Regional",
            metric: "5× más rápido pedidos",
            desc: "POS en mostrador + portal de reabastecimiento para distribuidores + página de identidad de marca. Tres módulos en una sola web app.",
            image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1000&auto=format&fit=crop",
            tag: "Alimentos · POS + Distribuidores",
            url: "/casos/tortilleria"
        },
        {
            title: "Plataforma de Arrendamiento MVP",
            client: "Arrendador Independiente",
            metric: "↓ 95% tiempo en gestión",
            desc: "Panel admin de residentes, control de pagos y alertas automáticas unificado con portal público de catálogo de departamentos y solicitudes de renta.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
            tag: "PropTech · Gestión de Rentas",
            url: "/casos/arrendador"
        },
        {
            title: "RRHH y Nómina MVP",
            client: "Empresa Industrial Regional",
            metric: "↓ 90% errores de nómina",
            desc: "Del Excel a la nómina digital: gestión de empleados, cálculo automático, préstamos con descuento integrado y portal de reclutamiento. Todo sin instalar nada.",
            image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1000&auto=format&fit=crop",
            tag: "HRTech · Nómina Digital",
            url: "/casos/nomina"
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
