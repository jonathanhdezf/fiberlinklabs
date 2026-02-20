import { useNavigate } from 'react-router-dom';

const SuccessCases = () => {
    const navigate = useNavigate();
    const cases = [
        {
            title: "OmniChannel POS Transformation",
            client: "Retail Logistics Group",
            metric: "+45% Eficiencia",
            desc: "Rediseño completo de la infraestructura de punto de venta, conectando 15 sedes físicas con un core digital único en la nube.",
            image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1000&auto=format&fit=crop",
            tag: "Retail Tech",
            url: "#"
        },
        {
            title: "Restaurant Digital Transformation",
            client: "Gastronomy Systems V2",
            metric: "+35% Eficiencia",
            desc: "Ecosistema de alto rendimiento para hostelería moderna mediante sincronización personalizada de ERP y POS.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuHLjynk_OHnmeFj65R_xGD7udlJc-gX6FRcoQpUqRvOr-c_47XjlU83VpdRaCO2TWCY8Xi9uVeSuqW1FRtM8L-8siPsqBv40QbaTZejx2md5H6CLk6q71Ub6b5Qyr3jPx9rpOsaVdPSN0K4pz3_ghYCCZ6dKkHdJ0a99LgXtDx9I_TvZvKtVAWbam-wqZLrD3rDi49u1G1lUUzRE5C7rPxnNOImWT3lj3tlDZ0wsWg8Hz6M8pUgjIf2dTpPICgMotsmqjifpiYuor",
            tag: "Food & Beverage",
            url: "/casos/restaurante"
        }
    ];

    return (
        <section id="casos" className="py-24 px-6 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Casos de Éxito</h2>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                            Arquitecturas que <span className="text-gradient">redefinen industrias.</span>
                        </h1>
                    </div>
                    <button className="px-8 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-2xl font-bold hover:border-primary transition-all text-sm">
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
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium">{project.client}</p>
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
