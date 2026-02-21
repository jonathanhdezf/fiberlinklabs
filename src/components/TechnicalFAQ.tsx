import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    code?: string;
    category: string;
}

const faqs: FAQItem[] = [
    {
        id: 'scalability',
        category: 'Arquitectura',
        question: '¿Cómo garantizan la escalabilidad horizontal en entornos multicloud?',
        answer: 'Utilizamos orquestación nativa de Kubernetes junto con Service Meshes (Istio/Linkerd) para gestionar el tráfico dinámico. Nuestras arquitecturas se basan en microservicios desacoplados y bases de datos distribuidas con consistencia eventual para soportar picos de carga masivos sin degradación de servicio.',
        code: '// Deployment Strategy\nreplicaSet: { min: 3, max: 100, targetCPU: "70%" }'
    },
    {
        id: 'stack',
        category: 'Arquitectura',
        question: '¿Cuál es su stack tecnológico preferido para soluciones de baja latencia?',
        answer: 'Para aplicaciones que requieren latencias en el rango de microsegundos, implementamos arquitecturas en Rust o Go, utilizando gRPC para la comunicación entre servicios y bases de datos in-memory como Redis o DragonflyDB para el almacenamiento de estado caliente.'
    },
    {
        id: 'serverless',
        category: 'Arquitectura',
        question: '¿Soportan arquitecturas Serverless y Event-Driven?',
        answer: 'Absolutamente. Diseñamos sistemas basados en eventos utilizando Apache Kafka o AWS EventBridge, permitiendo una escalabilidad infinita y un desacoplamiento total de los componentes del sistema.'
    },
    {
        id: 'gdpr',
        category: 'Seguridad',
        question: '¿Cómo manejan el cumplimiento de GDPR y soberanía de datos?',
        answer: 'Implementamos cifrado de extremo a extremo y políticas de residencia de datos granulares. Utilizamos herramientas de enmascaramiento de datos y auditorías automatizadas para asegurar que la información sensible nunca salga de la jurisdicción legal requerida.'
    },
    {
        id: 'encryption',
        category: 'Seguridad',
        question: '¿Qué protocolos de cifrado se implementan en reposo y en tránsito?',
        answer: 'En tránsito, utilizamos TLS 1.3 con prefijos de seguridad robustos. En reposo, implementamos AES-256 con gestión de claves a través de HSM (Hardware Security Modules) o servicios de KMS avanzados.'
    }
];

const categories = [
    { id: 'Arquitectura', icon: 'layers' },
    { id: 'Consultoría', icon: 'settings_suggest' },
    { id: 'Seguridad', icon: 'shield_person' },
    { id: 'Gestión de Datos', icon: 'database' }
];

const TechnicalFAQ: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('Arquitectura');
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['scalability']));

    const toggleItem = (id: string) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpandedItems(newExpanded);
    };

    const filteredFaqs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = faq.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bg-slate-50 dark:bg-slate-950 font-display text-slate-900 dark:text-slate-100 min-h-screen selection:bg-primary/30 relative overflow-x-hidden">
            <div className="fixed inset-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none"></div>

            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b border-primary/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-2xl">account_tree</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight uppercase">FiberLink <span className="text-primary">Labs</span></span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <button className="text-sm font-medium hover:text-primary transition-colors" onClick={() => navigate('/')}>Soluciones</button>
                        <button className="text-sm font-medium hover:text-primary transition-colors text-primary border-b-2 border-primary pb-1">Conocimiento</button>
                        <button className="text-sm font-medium hover:text-primary transition-colors" onClick={() => navigate('/')}>Casos</button>
                        <a href="#contacto" className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 text-center">
                            Agendar Sesión
                        </a>
                    </nav>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 lg:py-20 relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight dark:text-white">
                        Centro de <span className="text-primary">Consultas</span> Técnicas
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg mb-10">
                        Arquitectura de sistemas, protocolos de seguridad y metodologías de ingeniería para infraestructuras empresariales críticas.
                    </p>

                    {/* Glass Search Bar */}
                    <div className="relative max-w-2xl mx-auto group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-primary">search</span>
                        </div>
                        <input
                            className="w-full glass-effect bg-white/20 dark:bg-slate-900/60 backdrop-blur-xl rounded-xl py-5 pl-12 pr-4 text-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all placeholder:text-slate-500 border border-slate-200 dark:border-primary/20"
                            placeholder="Buscar arquitectura, cifrado, API..."
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:block">
                            <kbd className="px-2 py-1 bg-primary/20 rounded border border-primary/30 text-xs text-primary font-mono">⌘ K</kbd>
                        </div>
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all border ${activeCategory === cat.id
                                ? 'bg-primary text-white shadow-xl shadow-primary/20 border-primary'
                                : 'bg-white dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                                }`}
                        >
                            <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                            {cat.id}
                        </button>
                    ))}
                </div>

                {/* FAQ Sections */}
                <div className="space-y-12">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20"></div>
                            <h2 className="text-xl font-bold uppercase tracking-widest text-primary flex items-center gap-2 whitespace-nowrap">
                                <span className="material-symbols-outlined">{categories.find(c => c.id === activeCategory)?.icon}</span>
                                {activeCategory}
                            </h2>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20"></div>
                        </div>

                        <div className="grid gap-4">
                            {filteredFaqs.length > 0 ? filteredFaqs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className={`bg-white dark:bg-slate-900/50 border transition-all rounded-xl overflow-hidden shadow-lg ${expandedItems.has(faq.id)
                                        ? 'border-primary/40 shadow-primary/5'
                                        : 'border-slate-200 dark:border-slate-800 accordion-glow'
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleItem(faq.id)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
                                    >
                                        <span className={`text-lg font-semibold transition-colors ${expandedItems.has(faq.id) ? 'text-primary' : 'dark:text-white'}`}>
                                            {faq.question}
                                        </span>
                                        <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${expandedItems.has(faq.id) ? 'rotate-180' : ''}`}>
                                            expand_more
                                        </span>
                                    </button>
                                    <div className={`transition-all duration-300 ease-in-out ${expandedItems.has(faq.id) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                        <div className="px-6 pb-6 pt-2 border-t border-slate-200 dark:border-primary/10">
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                                {faq.answer}
                                            </p>
                                            {faq.code && (
                                                <div className="bg-slate-100 dark:bg-black/40 rounded-lg p-4 font-mono text-sm text-primary/80 border border-slate-200 dark:border-slate-800">
                                                    {faq.code.split('\n').map((line, i) => (
                                                        <div key={i}>{line}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <div className="text-center py-12 text-slate-500">
                                    No se encontraron resultados para su búsqueda en esta categoría.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <section className="mt-24">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-blue-800 p-12 text-center shadow-2xl">
                        {/* Abstract Background Pattern */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none cta-pattern"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-4">¿Aún tiene dudas sobre nuestra vanguardia técnica?</h3>
                            <p className="text-blue-100 mb-10 max-w-xl mx-auto">
                                Nuestros ingenieros senior están listos para discutir los pormenores de su arquitectura y cómo FiberLink Labs puede optimizar sus procesos.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#contacto" className="w-full sm:w-auto px-10 py-4 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-all shadow-xl text-center">
                                    Programar Sesión Estratégica
                                </a>
                                <button className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                                    Descargar Whitepaper
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-200 dark:border-slate-800 py-12 bg-white dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3 opacity-50 grayscale transition-all hover:grayscale-0 cursor-pointer" onClick={() => navigate('/')}>
                        <div className="size-8 bg-slate-700 rounded flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-sm">account_tree</span>
                        </div>
                        <span className="text-sm font-bold tracking-tight uppercase">FiberLink Labs</span>
                    </div>
                    <div className="flex gap-8 text-slate-500 text-sm font-medium">
                        <a onClick={() => navigate('/terminos')} className="hover:text-primary transition-colors cursor-pointer">Términos</a>
                        <a onClick={() => navigate('/privacidad')} className="hover:text-primary transition-colors cursor-pointer">Privacidad</a>
                        <a className="hover:text-primary transition-colors cursor-pointer">Documentación API</a>
                        <a className="hover:text-primary transition-colors cursor-pointer">SLA</a>
                    </div>
                    <div className="text-slate-500 text-sm">
                        © 2026 FiberLink Labs Inc. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TechnicalFAQ;
