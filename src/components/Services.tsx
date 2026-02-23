import { useState } from 'react'
import { Link } from 'react-router-dom'
import WebDevPlansModal from './WebDevPlansModal'
import SmartSolutionsModal from './SmartSolutionsModal'
import DigitalConsultingModal from './DigitalConsultingModal'

const Services = () => {
    const [webDevModalOpen, setWebDevModalOpen] = useState(false)
    const [smartSolutionsModalOpen, setSmartSolutionsModalOpen] = useState(false)
    const [digitalConsultingModalOpen, setDigitalConsultingModalOpen] = useState(false)
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
            title: "Consultoría Digital",
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
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Soluciones Técnicas
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-foreground">
                            Tu empresa no necesita "otra página web". <br />
                            Necesita una <span className="text-gradient italic">máquina que funcione 24/7.</span>
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-xl leading-relaxed">
                            Desarrollamos infraestructura digital de alto rendimiento diseñada específicamente para el entorno B2B, priorizando la funcionalidad, la escalabilidad y el retorno de inversión real.
                        </p>
                    </div>

                    {/* Visual representation: Digital Engine / Machine 24/7 */}
                    <div className="hidden lg:flex justify-center items-center relative py-10">
                        <div className="relative size-80 flex items-center justify-center">
                            {/* Outer Orbits */}
                            <div className="absolute inset-0 border-2 border-primary/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-4 border border-dashed border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                            <div className="absolute inset-10 border border-primary/5 rounded-full"></div>

                            {/* Power Core */}
                            <div className="relative size-32 bg-slate-900 rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/20 animate-pulse"></div>
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-[scan_2s_linear_infinite]"></div>
                                <span className="material-symbols-outlined text-5xl text-primary animate-bounce">settings_slow_motion</span>
                            </div>

                            {/* Satellites / Nodes */}
                            {[0, 1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className={`absolute size-10 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-white/10 shadow-lg flex items-center justify-center animate-pulse engine-node-${i}`}
                                >
                                    <span className="material-symbols-outlined text-primary text-xl">
                                        {['api', 'database', 'shield', 'sync', 'monitoring'][i]}
                                    </span>
                                </div>
                            ))}

                            {/* Flow lines (abstract) */}
                            <div className="absolute size-full opacity-30">
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 3" className="text-primary" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, idx) => {
                        const colors = colorMap[service.color as keyof typeof colorMap] || colorMap.primary;
                        return (
                            <div
                                key={idx}
                                className="group relative bg-white border border-slate-200 p-8 rounded-[2rem] transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(13,89,242,0.2)] hover:border-primary/40 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-7xl text-primary">{service.accentIcon}</span>
                                </div>
                                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <span className={`material-symbols-outlined ${colors.text}`}>{service.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {service.desc}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-500">
                                            <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                {idx === 0 ? (
                                    <div className="flex flex-col gap-3">
                                        <button
                                            id="open-web-dev-plans-modal"
                                            onClick={() => setWebDevModalOpen(true)}
                                            className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all bg-transparent border-none p-0 cursor-pointer"
                                        >
                                            Ver planes y precios
                                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </button>
                                        <Link
                                            to="/servicios/desarrollo-web"
                                            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-primary font-semibold text-xs transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-xs">open_in_new</span>
                                            Conoce nuestra filosofía
                                        </Link>
                                    </div>
                                ) : idx === 1 ? (
                                    <button
                                        id="open-smart-solutions-modal"
                                        onClick={() => setSmartSolutionsModalOpen(true)}
                                        className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all bg-transparent border-none p-0 cursor-pointer"
                                    >
                                        Ver planes y precios
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                ) : (
                                    <button
                                        id="open-digital-consulting-modal"
                                        onClick={() => setDigitalConsultingModalOpen(true)}
                                        className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all bg-transparent border-none p-0 cursor-pointer"
                                    >
                                        Ver planes y precios
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action Banner */}
                <div className="mt-20 p-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl">
                    <div className="bg-white p-8 md:p-12 rounded-[1.3rem] flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h4 className="text-2xl font-bold mb-2 text-slate-900">¿Listo para escalar tu infraestructura?</h4>
                            <p className="text-slate-500">Agenda una sesión de diagnóstico técnico gratuita con nuestros arquitectos.</p>
                        </div>
                        <a href="#contacto" className="whitespace-nowrap px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-primary/30 flex items-center gap-3">
                            Agendar sesión gratuita
                            <span className="material-symbols-outlined">calendar_today</span>
                        </a>
                    </div>
                </div>
            </div>

            <WebDevPlansModal isOpen={webDevModalOpen} onClose={() => setWebDevModalOpen(false)} />
            <SmartSolutionsModal isOpen={smartSolutionsModalOpen} onClose={() => setSmartSolutionsModalOpen(false)} />
            <DigitalConsultingModal isOpen={digitalConsultingModalOpen} onClose={() => setDigitalConsultingModalOpen(false)} />

            <style>{`
                .engine-node-0 { transform: rotate(0deg) translateY(-140px) rotate(0deg); animation-delay: 0s; }
                .engine-node-1 { transform: rotate(72deg) translateY(-140px) rotate(-72deg); animation-delay: 0.4s; }
                .engine-node-2 { transform: rotate(144deg) translateY(-140px) rotate(-144deg); animation-delay: 0.8s; }
                .engine-node-3 { transform: rotate(216deg) translateY(-140px) rotate(-216deg); animation-delay: 1.2s; }
                .engine-node-4 { transform: rotate(288deg) translateY(-140px) rotate(-288deg); animation-delay: 1.6s; }
                
                @keyframes scan {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(100%); opacity: 0; }
                }
            `}</style>
        </section>
    );
};

export default Services;
