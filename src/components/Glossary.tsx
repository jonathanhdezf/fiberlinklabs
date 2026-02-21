import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const glossaryTerms = [
    {
        term: "Arquitectura Digital",
        definition: "La estructura tecnológica y organizativa que permite a una empresa operar de manera eficiente en el entorno digital, integrando sistemas, datos y procesos.",
        category: "Estructural"
    },
    {
        term: "B2B (Business to Business)",
        definition: "Modelos comerciales donde las transacciones de bienes o servicios ocurren exclusivamente entre dos empresas, en lugar de entre una empresa y el consumidor final.",
        category: "Negocios"
    },
    {
        term: "Cloud Native",
        definition: "Enfoque de diseño de aplicaciones que aprovecha plenamente las ventajas del modelo de computación en la nube: escalabilidad, resiliencia y gestión automatizada.",
        category: "Tecnología"
    },
    {
        term: "CRM (Customer Relationship Management)",
        definition: "Software especializado para gestionar todas las relaciones e interacciones de una empresa con sus clientes actuales y potenciales.",
        category: "Software"
    },
    {
        term: "Ecosistema Inteligente",
        definition: "Un conjunto interconectado de herramientas digitales y hardware que interactúan entre sí y utilizan datos para optimizar procesos de forma autónoma o semi-autónoma.",
        category: "Innovación"
    },
    {
        term: "Hoja de Ruta (Roadmap)",
        definition: "Documento estratégico que detalla los hitos, cronogramas y pasos específicos necesarios para transformar la infraestructura digital de una organización.",
        category: "Estrategia"
    },
    {
        term: "Infraestructura Digital",
        definition: "La base técnica compuesta por hardware, redes, centros de datos y software que permite el funcionamiento de todos los servicios digitales empresariales.",
        category: "Tecnología"
    },
    {
        term: "Madurez Digital",
        definition: "Medición del grado en que una organización ha integrado exitosamente las capacidades digitales para mejorar su propuesta de valor y eficiencia operativa.",
        category: "Medición"
    },
    {
        term: "Optimización Operativa",
        definition: "El uso de metodologías y tecnología para refinar los flujos de trabajo internos, reducir costos y eliminar cuellos de botella mediante la automatización inteligente.",
        category: "Eficiencia"
    },
    {
        term: "SaaS (Software as a Service)",
        definition: "Modelo de distribución de software donde las aplicaciones son alojadas por un proveedor de servicios y puestas a disposición de los clientes a través de internet.",
        category: "Software"
    },
    {
        term: "Zero Trust",
        definition: "Modelo de seguridad informática que asume que no se debe confiar automáticamente en nada dentro o fuera de la red, requiriendo verificación para cada acceso.",
        category: "Seguridad"
    },
    {
        term: "Escalabilidad Horizontal",
        definition: "Capacidad de un sistema para aumentar su rendimiento añadiendo más nodos (servidores) al conjunto existente, en lugar de aumentar la potencia de un solo nodo.",
        category: "Tecnología"
    }
];

const Glossary: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTerms = glossaryTerms.filter(t =>
        t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.definition.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => a.term.localeCompare(b.term));

    return (
        <div className="bg-background text-foreground min-h-screen font-display selection:bg-primary/30 transition-colors duration-500">
            <Navbar />

            <main className="relative pt-32 pb-20 px-6">
                <div className="fixed inset-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="mb-16 text-center">
                        <button
                            onClick={() => navigate('/')}
                            className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-8 hover:translate-x-1 transition-transform"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                            Volver al Inicio
                        </button>
                        <h1 id="glosario-titulo" className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6">
                            Glosario <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 italic">Tecnológico</span>
                        </h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                            Diccionario estratégico de FiberLink Labs para comprender el lenguaje de la transformación digital de alto rendimiento.
                        </p>

                        <div className="relative max-w-xl mx-auto">
                            <input
                                type="text"
                                placeholder="Buscar término o definición..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-6 py-4 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-2xl outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-xl dark:text-white"
                            />
                            <span className="material-symbols-outlined absolute right-6 top-4.5 text-slate-400">search</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTerms.map((t, i) => (
                            <div
                                key={i}
                                className="group p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-[2rem] hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                                        {t.category}
                                    </span>
                                    <div className="size-8 rounded-lg bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">info</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-black mb-4 text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">
                                    {t.term}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                    {t.definition}
                                </p>
                            </div>
                        ))}
                    </div>

                    {filteredTerms.length === 0 && (
                        <div className="text-center py-20">
                            <span className="material-symbols-outlined text-6xl text-slate-200 dark:text-white/10 mb-4">search_off</span>
                            <p className="text-slate-500">No encontramos términos que coincidan con su búsqueda.</p>
                        </div>
                    )}

                    <div className="mt-20 p-12 bg-slate-950 rounded-[3rem] text-center relative overflow-hidden border border-white/5">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black text-white mb-4">¿Necesita una auditoría de términos técnicos?</h3>
                            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                                Nuestro equipo puede ayudarle a estandarizar el lenguaje técnico de su organización para mejorar la comunicación corporativa.
                            </p>
                            <button className="bg-white text-slate-950 font-black py-4 px-10 rounded-2xl hover:bg-primary hover:text-white transition-all transform active:scale-95 shadow-xl">
                                SOLICITAR CONSULTORÍA
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Glossary;
