const Services = () => {
    const services = [
        {
            title: "Desarrollo Web Empresarial",
            desc: "Creamos plataformas robustas que centralizan la operación de tu negocio. No solo se ven bien, están construidas para escalar.",
            icon: "dashboard",
            accentIcon: "web_asset",
            features: ["Dashboards personalizados", "Portales de autoservicio B2B", "Optimización de Core Web Vitals"],
            color: "primary"
        },
        {
            title: "Soluciones Inteligentes",
            desc: "Integramos herramientas de punto de venta e inventario que eliminan la fricción operativa y mejoran la rentabilidad.",
            icon: "point_of_sale",
            accentIcon: "insights",
            features: ["Sistemas POS omnicanal", "Gestión de stock en tiempo real", "Automatización de facturación"],
            color: "secondary"
        },
        {
            title: "Consultoría Digital B2B",
            desc: "No implementamos por implementar. Analizamos tu arquitectura actual y trazamos una hoja de ruta tecnológica eficiente.",
            icon: "query_stats",
            accentIcon: "architecture",
            features: ["Auditorías técnicas y UX", "Roadmap de transformación", "Estrategia de datos y analítica"],
            color: "primary"
        }
    ];

    const colorMap = {
        primary: {
            bg: 'bg-primary/10',
            text: 'text-primary'
        },
        secondary: {
            bg: 'bg-secondary/10',
            text: 'text-secondary'
        },
        accent: {
            bg: 'bg-accent/10',
            text: 'text-accent'
        }
    };

    return (
        <section id="soluciones" className="relative py-24 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute top-1/2 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-16 space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Soluciones Digitales</h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-slate-900 dark:text-white">
                        Tu empresa no necesita "otra página web". Necesita una <span className="text-gradient">máquina que funcione 24/7.</span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-light max-w-2xl">
                        Desarrollamos infraestructura digital de alto rendimiento diseñada específicamente para el entorno B2B, priorizando la funcionalidad, la escalabilidad y el retorno de inversión.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, idx) => {
                        const colors = colorMap[service.color as keyof typeof colorMap] || colorMap.primary;
                        return (
                            <div
                                key={idx}
                                className="group relative bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-primary/5 p-8 rounded-[2rem] transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(13,89,242,0.2)] dark:hover:shadow-[0_0_50px_-12px_rgba(13,89,242,0.4)] hover:border-primary/40 overflow-hidden backdrop-blur-sm"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-7xl text-primary">{service.accentIcon}</span>
                                </div>
                                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <span className={`material-symbols-outlined ${colors.text}`}>{service.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 dark:text-white">{service.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                    {service.desc}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#" className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                                    Explorar soluciones
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action Banner */}
                <div className="mt-20 p-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl">
                    <div className="bg-white dark:bg-background-dark p-8 md:p-12 rounded-[1.3rem] flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h4 className="text-2xl font-bold mb-2">¿Listo para escalar tu infraestructura?</h4>
                            <p className="text-slate-500 dark:text-slate-400">Agenda una sesión de diagnóstico técnico gratuita con nuestros arquitectos.</p>
                        </div>
                        <button className="whitespace-nowrap px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-primary/30 flex items-center gap-3">
                            Agendar sesión gratuita
                            <span className="material-symbols-outlined">calendar_today</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
