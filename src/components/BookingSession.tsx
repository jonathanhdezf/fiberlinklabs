import React, { useState } from 'react';

const BookingSession: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        service: 'Desarrollo Web / App',
        message: ''
    });

    const services = [
        'Diseño Web de Alto Impacto',
        'Escalamiento de Negocios',
        'Automatización de Ventas',
        'Sistemas POS / ERP',
        'Infraestructura Cloud'
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const whatsappNumber = '522311024672';
        const text = `*Nueva Solicitud de Diseño y Escala - FiberLink Labs*%0A%0A` +
            `*Nombre:* ${formData.name}%0A` +
            `*Empresa:* ${formData.company}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Objetivo:* ${formData.service}%0A` +
            `*Notas:* ${formData.message}`;

        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    };

    return (
        <section id="contacto" className="relative py-24 px-6 overflow-hidden bg-background transition-colors duration-500">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.1] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Motor de Crecimiento
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground leading-[0.9] tracking-tighter uppercase mb-6">
                                Diseñamos tu Web <br />
                                <span className="text-primary italic">Escalamos</span> tu Éxito
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-xl leading-relaxed">
                                Transformamos tu presencia digital en un activo rentable. Agenda una sesión técnica de 15 minutos para proyectar el diseño y la infraestructura que tu empresa necesita para crecer sin límites.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: 'rocket_launch', title: 'Diseño que Vende', desc: 'Interfaces optimizadas para convertir visitantes en clientes.' },
                                { icon: 'query_stats', title: 'Infraestructura Escalable', desc: 'Sistemas preparados para crecer al ritmo de tu demanda.' },
                                { icon: 'bolt', title: 'Ventas Automatizadas', desc: 'Integramos procesos que capturan leads mientras descansas.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="size-12 shrink-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl flex items-center justify-center text-primary shadow-lg transition-all group-hover:scale-110">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">{item.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-slate-200 dark:border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-slate-950"></div>
                                    ))}
                                </div>
                                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                    +50 empresas escaladas este trimestre
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-30 transform translate-x-1/2 translate-y-1/2"></div>
                        <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-8 md:p-10 rounded-[2.5rem] shadow-2xl transition-colors duration-500">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Nombre Completo</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Empresa</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Nombre de tu Cía."
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Correo Corporativo</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="john@empresa.com"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Interés Técnico</label>
                                    <select
                                        title="Seleccionar interés técnico"
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all appearance-none cursor-pointer"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Notas del Proyecto</label>
                                    <textarea
                                        placeholder="Cuéntanos brevemente tu reto..."
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all min-h-[120px] resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-5 bg-primary text-white font-black text-lg rounded-2xl shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 group"
                                >
                                    AGENDAR VÍA WHATSAPP
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                                </button>

                                <p className="text-[10px] text-center text-slate-500 dark:text-slate-500 uppercase font-bold tracking-widest">
                                    Respuesta inmediata garantizada • Disponible 24/7
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingSession;
