import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Module Card ── */
const ModuleCard = ({ emoji, code, title, desc, tags, accent }: {
    emoji: string; code: string; title: string; desc: string; tags: string[]; accent: string;
}) => (
    <div className={`group relative p-7 rounded-3xl border bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2 overflow-hidden ${accent}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="text-4xl mb-5">{emoji}</div>
        <span className="inline-block px-2 py-0.5 rounded-md bg-white/10 text-white/40 text-[10px] font-black uppercase tracking-widest mb-3">{code}</span>
        <h3 className="text-xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors">{title}</h3>
        <p className="text-sm text-white/50 leading-relaxed mb-5">{desc}</p>
        <div className="flex flex-wrap gap-2">
            {tags.map((t, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-white/[0.07] text-white/60 text-[10px] font-bold uppercase tracking-wider">{t}</span>
            ))}
        </div>
    </div>
);

/* ── Feature Badge ── */
const Feature = ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
    <div className="flex gap-4 group">
        <div className="size-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-cyan-500/25 group-hover:scale-110 transition-all duration-300">
            <span className="material-symbols-outlined text-base">{icon}</span>
        </div>
        <div>
            <h4 className="font-black text-white text-sm mb-1">{title}</h4>
            <p className="text-xs text-white/50 leading-relaxed">{desc}</p>
        </div>
    </div>
);

/* ── Flow Step ── */
const FlowStep = ({ num, icon, title, desc, isLast }: { num: string; icon: string; title: string; desc: string; isLast?: boolean }) => (
    <div className="flex gap-5 relative">
        <div className="flex flex-col items-center">
            <div className="size-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/30 font-black text-sm z-10">
                {num}
            </div>
            {!isLast && <div className="w-0.5 flex-1 bg-gradient-to-b from-cyan-500/50 to-transparent mt-2 min-h-[40px]"></div>}
        </div>
        <div className="pb-10">
            <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-cyan-400 text-lg">{icon}</span>
                <h4 className="font-black text-white">{title}</h4>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
        </div>
    </div>
);

/* ══════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════ */
const ElBuenServir = () => {
    const [techVisible, setTechVisible] = useState(false);
    const techRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.title = 'El Buen Servir · Web App ERP | Iniciativas Locales · FiberLink Labs';
        const setMeta = (name: string, content: string) => {
            let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
            if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el); }
            el.setAttribute('content', content);
        };
        setMeta('description', 'El Buen Servir: ecosistema digital híbrido que combina E-commerce y ERP para restaurantes. Centraliza pedidos web y físicos, producción en cocina y logística de entrega.');
        setMeta('keywords', 'El Buen Servir, ERP restaurante, TPV, KDS, sistema de pedidos, delivery, React TypeScript, FiberLink Labs');
        return () => { document.title = 'FiberLink Labs · Diseño Web & Sistemas que Escalan'; };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setTechVisible(true); observer.disconnect(); }
        }, { threshold: 0.2 });
        if (techRef.current) observer.observe(techRef.current);
        return () => observer.disconnect();
    }, []);

    const modules = [
        {
            emoji: '🛒', code: 'PublicView', title: 'Frontend Cliente',
            desc: 'Interfaz premium para explorar el menú, personalizar platillos con modificadores y enviar pedidos directamente vía WhatsApp con ID único rastreable.',
            tags: ['E-commerce', 'WhatsApp', 'Mobile-first', 'ID de pedido'],
            accent: 'border-cyan-500/20 hover:border-cyan-400/40',
        },
        {
            emoji: '💻', code: 'TPV', title: 'Terminal Punto de Venta',
            desc: 'Módulo de atención en mostrador para ventas físicas. Grid de productos táctil, carrito inteligente, métodos de pago múltiples e impresión de comanda.',
            tags: ['Mostrador', 'Táctil', 'Comanda física', 'Multipago'],
            accent: 'border-blue-500/20 hover:border-blue-400/40',
        },
        {
            emoji: '🍳', code: 'KDS', title: 'Monitor de Cocina',
            desc: 'Kitchen Display System: pantalla interactiva para chefs. Organiza comandas por tiempo de espera y prioridad, con alertas visuales y sonoras.',
            tags: ['Tiempo real', 'Alertas', 'Prioridad', 'Sin papel'],
            accent: 'border-orange-500/20 hover:border-orange-400/40',
        },
        {
            emoji: '🛵', code: 'DDS', title: 'Logística de Despachos',
            desc: 'Dispatch & Delivery System: gestión de repartidores en tiempo real. Asignación de pedidos, seguimiento de ruta y confirmación de entrega.',
            tags: ['Repartidores', 'Tiempo real', 'Rutas', 'Confirmación'],
            accent: 'border-emerald-500/20 hover:border-emerald-400/40',
        },
        {
            emoji: '📊', code: 'SuperUser', title: 'Panel Administrativo',
            desc: 'Control total: inventario, personal, clientes, reportes y auditoría completa de logs. Edición avanzada de pedidos con trazabilidad de cambios.',
            tags: ['Inventario', 'Auditoría', 'Super Control', 'Analítica'],
            accent: 'border-violet-500/20 hover:border-violet-400/40',
        },
        {
            emoji: '🔔', code: 'Core', title: 'Núcleo de Notificaciones',
            desc: 'Sistema de notificaciones audio-visuales diferenciadas por canal. Nuevo pedido web, alerta de cocina, listo para despacho y confirmación de entrega.',
            tags: ['Audio', 'Visual', 'Push', 'Multicanal'],
            accent: 'border-amber-500/20 hover:border-amber-400/40',
        },
    ];

    const features = [
        { icon: 'sync_alt', title: 'Gestión omnicanal', desc: 'Un solo dashboard unifica pedidos web, WhatsApp y mostrador con estados sincronizados en tiempo real.' },
        { icon: 'tune', title: 'Personalización dinámica', desc: 'Los clientes ajustan ingredientes, tamaños y extras con actualizaciones automáticas de precio.' },
        { icon: 'fingerprint', title: 'Smart Auth', desc: 'Login simplificado por PIN o token de sesión para personal en movimiento. Sin contraseñas largas.' },
        { icon: 'admin_panel_settings', title: 'Super User Control', desc: 'El administrador puede modificar cualquier pedido en cualquier etapa con log de cambios auditado.' },
        { icon: 'notifications_active', title: 'Alertas diferenciadas', desc: 'Cada evento tiene su sonido y color asignado. El chef nunca confunde una notificación de cliente con una alerta de cocina.' },
        { icon: 'security', title: 'SiteLog & Auditoría', desc: 'Registro inmutable de cada acción: quién, qué, cuándo. Ideal para franquicias y control de mermas.' },
    ];

    const stack = [
        { label: 'React + TypeScript', pct: 'w-full', color: 'bg-cyan-400', desc: 'Base sólida y tipada' },
        { label: 'Tailwind CSS v4', pct: 'w-full', color: 'bg-blue-400', desc: 'Dark mode + Glass' },
        { label: 'Zustand / Context API', pct: 'w-[90%]', color: 'bg-violet-400', desc: 'Estado global ligero' },
        { label: 'Prisma + PostgreSQL', pct: 'w-[85%]', color: 'bg-emerald-400', desc: 'Persistencia robusta' },
        { label: 'Next.js App Router', pct: 'w-[95%]', color: 'bg-orange-400', desc: 'SSR + rutas API' },
        { label: 'Node.js + WebSockets', pct: 'w-[80%]', color: 'bg-amber-400', desc: 'Actualizaciones live' },
    ];

    return (
        <div className="min-h-screen bg-[#060810] text-white overflow-x-hidden">

            {/* ── Floating Nav ── */}
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-2rem)] max-w-3xl">
                <div className="rounded-2xl px-5 py-3 flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10">
                    <Link to="/" className="flex items-center gap-2 text-sm font-bold text-white/40 hover:text-cyan-400 transition-colors">
                        <span className="material-symbols-outlined text-base">arrow_back</span>
                        <span className="hidden sm:block">FiberLink Labs</span>
                    </Link>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] text-cyan-400 truncate px-2">El Buen Servir · Web App</span>
                    <a href="#contacto" className="text-[10px] sm:text-xs font-black uppercase tracking-widest px-4 py-2 bg-cyan-500 text-slate-950 rounded-xl hover:bg-cyan-400 transition-all active:scale-95 whitespace-nowrap">
                        Demo
                    </a>
                </div>
            </nav>

            {/* ══════════════════════════════════════════════════
                HERO
            ══════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20">
                {/* BG grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,22,58,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(6,22,58,0.8)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(6,182,212,0.12),transparent)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_80%,rgba(249,115,22,0.06),transparent)]"></div>

                {/* Glow orbs */}
                <div className="absolute top-1/3 left-[15%] size-80 bg-cyan-500/[0.07] blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-1/3 right-[15%] size-96 bg-orange-500/[0.05] blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-bold uppercase tracking-[0.2em] mb-10 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                        </span>
                        Ecosistema Digital · Restaurantes & Food Service
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-8 uppercase">
                        <span className="block text-white">El Buen</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400">Servir</span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-medium mb-4">
                        El ecosistema digital que unifica tu tienda online, tu mostrador, tu cocina y tus repartidores en una sola interfaz en tiempo real.
                    </p>
                    <p className="text-sm text-white/30 font-medium mb-12 italic">
                        ERP + E-commerce + KDS + DDS · Todo en uno.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <a href="#modulos" className="group px-8 py-4 bg-cyan-500 text-slate-950 font-black rounded-2xl shadow-2xl shadow-cyan-500/25 hover:bg-cyan-400 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2">
                            Ver Módulos
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                        <a href="#contacto" className="px-8 py-4 bg-white/5 border border-white/15 text-white font-black rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                            <span className="material-symbols-outlined">play_circle</span>
                            Solicitar Demo
                        </a>
                    </div>

                    {/* Mini stats bar */}
                    <div className="inline-flex flex-wrap justify-center gap-x-8 gap-y-3 px-8 py-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm text-sm">
                        {[
                            { val: '5', label: 'Módulos integrados' },
                            { val: '∞', label: 'Pedidos simultáneos' },
                            { val: '100%', label: 'Tiempo real' },
                            { val: 'MVP', label: 'Ya funcional' },
                        ].map((s, i) => (
                            <div key={i} className="text-center">
                                <p className="text-2xl font-black text-cyan-400">{s.val}</p>
                                <p className="text-[10px] text-white/30 uppercase tracking-wider font-bold">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                01 · RESUMEN DEL PROYECTO
            ══════════════════════════════════════════════════ */}
            <section className="py-28 px-6 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/[0.04] blur-[120px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-5">01 · Resumen del Proyecto</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-[0.9] mb-8">
                            Un sistema que<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 italic">lo piensa todo</span>
                        </h2>
                        <p className="text-white/60 leading-relaxed mb-6 font-medium text-lg">
                            <strong className="text-white">"El Buen Servir"</strong> es un ecosistema digital híbrido diseñado para negocios de alimentos. Combina una <strong className="text-cyan-400">Tienda Virtual (E-commerce)</strong> orientada al cliente con un potente <strong className="text-orange-400">ERP/Administrador interno</strong> para el equipo de operaciones.
                        </p>
                        <p className="text-white/50 leading-relaxed font-medium mb-10">
                            Su objetivo central es eliminar la fragmentación operativa: centraliza pedidos web y físicos, producción en cocina y logística de entrega <strong className="text-white">en una sola interfaz</strong>, reduciendo errores, tiempos muertos y pérdida de pedidos.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: 'storefront', label: 'E-commerce', color: 'text-cyan-400 bg-cyan-500/10' },
                                { icon: 'analytics', label: 'ERP Interno', color: 'text-orange-400 bg-orange-500/10' },
                                { icon: 'kitchen', label: 'KDS Cocina', color: 'text-emerald-400 bg-emerald-500/10' },
                                { icon: 'two_wheeler', label: 'Despachos', color: 'text-violet-400 bg-violet-500/10' },
                            ].map((item, i) => (
                                <div key={i} className={`flex items-center gap-3 p-4 rounded-xl ${item.color} border border-white/5`}>
                                    <span className={`material-symbols-outlined text-xl ${item.color.split(' ')[0]}`}>{item.icon}</span>
                                    <span className="font-black text-sm text-white">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mockup terminal */}
                    <div className="relative">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden">
                            {/* Terminal top bar */}
                            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-white/[0.02]">
                                <div className="size-3 rounded-full bg-red-500/80"></div>
                                <div className="size-3 rounded-full bg-amber-500/80"></div>
                                <div className="size-3 rounded-full bg-emerald-500/80"></div>
                                <span className="ml-3 text-xs text-white/30 font-mono">el-buen-servir · dashboard · Super User</span>
                            </div>
                            <div className="p-6 font-mono text-xs space-y-3">
                                {[
                                    { time: '12:34', icon: '🆕', msg: 'Pedido #1042 recibido — Web · $185.00', color: 'text-cyan-400' },
                                    { time: '12:34', icon: '🍳', msg: 'KDS: Comanda #1042 enviada a cocina', color: 'text-amber-400' },
                                    { time: '12:37', icon: '✅', msg: 'KDS: #1042 listo para despacho', color: 'text-emerald-400' },
                                    { time: '12:38', icon: '🛵', msg: 'DDS: Repartidor asignado → Carlos M.', color: 'text-violet-400' },
                                    { time: '12:54', icon: '📦', msg: 'DDS: Entrega confirmada por cliente', color: 'text-green-400' },
                                    { time: '12:34', icon: '🆕', msg: 'Pedido #1043 recibido — TPV · $95.00', color: 'text-cyan-400' },
                                ].map((log, i) => (
                                    <div key={i} className="flex items-start gap-3 group">
                                        <span className="text-white/20 shrink-0">[{log.time}]</span>
                                        <span className="shrink-0">{log.icon}</span>
                                        <span className={`${log.color} group-hover:brightness-125 transition-all`}>{log.msg}</span>
                                    </div>
                                ))}
                                <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                                    <span className="text-cyan-400">›</span>
                                    <span className="text-white/30 animate-pulse">_</span>
                                </div>
                            </div>
                        </div>
                        {/* Glow under card */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-cyan-500/20 blur-2xl rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                02 · MÓDULOS DEL SISTEMA
            ══════════════════════════════════════════════════ */}
            <section id="modulos" className="py-28 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(6,182,212,0.04),transparent)]"></div>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-4">02 · Módulos del Sistema</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
                            5 módulos, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 italic">1 sistema</span>
                        </h2>
                        <p className="text-white/40 mt-4 max-w-xl mx-auto font-medium">
                            Cada módulo es independiente pero se comunica con todos los demás. Puedes activar los que necesites según tu operación.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {modules.map((m, i) => <ModuleCard key={i} {...m} />)}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                03 · FUNCIONES Y CARACTERÍSTICAS
            ══════════════════════════════════════════════════ */}
            <section className="py-28 px-6 relative overflow-hidden bg-white/[0.02] border-y border-white/[0.05]">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-5">03 · Características Clave</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-[0.9] mb-10">
                            Potencia en<br />
                            <span className="text-orange-400 italic">cada detalle</span>
                        </h2>
                        <div className="space-y-7">
                            {features.map((f, i) => <Feature key={i} {...f} />)}
                        </div>
                    </div>

                    {/* KDS mockup */}
                    <div className="space-y-4">
                        <div className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.04] p-6 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🍳</span>
                                    <div>
                                        <p className="font-black text-white text-sm">Kitchen Display System</p>
                                        <p className="text-[10px] text-white/30 uppercase tracking-wider">3 comandas activas</p>
                                    </div>
                                </div>
                                <div className="size-2 rounded-full bg-emerald-400 animate-pulse"></div>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { id: '#1040', items: 'Tacos x3, Quesadilla x1', t: '8 min', st: 'En proceso', c: 'border-amber-500/50 bg-amber-500/[0.07]' },
                                    { id: '#1041', items: 'Hamburguesa x2, Papas x2', t: '3 min', st: 'Urgente', c: 'border-red-500/50 bg-red-500/[0.07]' },
                                    { id: '#1042', items: 'Caldo x1, Arroz x1', t: '1 min', st: 'Listo ✓', c: 'border-emerald-500/50 bg-emerald-500/[0.07]' },
                                ].map((cmd, i) => (
                                    <div key={i} className={`p-4 rounded-xl border ${cmd.c}`}>
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="font-black text-white text-sm">{cmd.id}</span>
                                            <span className="text-xs text-white/40 font-mono">{cmd.t} espera</span>
                                        </div>
                                        <p className="text-xs text-white/50 mb-2">{cmd.items}</p>
                                        <span className="text-[10px] font-black uppercase tracking-wider text-white/30">{cmd.st}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* TPV mockup */}
                        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-6 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">💻</span>
                                <div>
                                    <p className="font-black text-white text-sm">Punto de Venta · TPV</p>
                                    <p className="text-[10px] text-white/30 uppercase tracking-wider">Turno: Mañana</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                {['Tacos', 'Hambur.', 'Caldo', 'Papas', 'Refresco', '+ Extra'].map((item, i) => (
                                    <button key={i} className="p-2 rounded-xl bg-white/[0.06] hover:bg-cyan-500/20 text-white/60 text-[10px] font-bold uppercase transition-all text-center border border-white/5 hover:border-cyan-400/30">
                                        {item}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10">
                                <span className="text-sm text-white/40">Total carrito</span>
                                <span className="font-black text-cyan-400 text-lg">$185.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                04 · LOGÍSTICA Y FLUJO OPERATIVO
            ══════════════════════════════════════════════════ */}
            <section className="py-28 px-6 relative overflow-hidden">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/[0.05] blur-[120px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-5">04 · Flujo Operativo</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-[0.9] mb-4">
                            De la orden a<br />
                            <span className="text-emerald-400 italic">la entrega</span>
                        </h2>
                        <p className="text-white/40 font-medium mb-12">
                            Los estados de pedido evolucionan automáticamente, notificando a cada responsable en el momento justo.
                        </p>

                        <div>
                            <FlowStep num="01" icon="shopping_cart" title="Ingreso del Pedido"
                                desc="El cliente ordena desde el frontend web, el repartidor marca entrega a domicilio, o el cajero registra en TPV. Todos convergen al mismo sistema." />
                            <FlowStep num="02" icon="kitchen" title="Producción en Cocina"
                                desc="La comanda aparece automáticamente en el KDS del chef. Prioridad automática por tiempo de espera. Sin impresoras, sin llamadas, sin papel." />
                            <FlowStep num="03" icon="inventory_2" title="Listo para Despacho"
                                desc="El chef marca la comanda como lista. El sistema notifica al repartidor disponible y al cajero simultáneamente con alerta sonora diferenciada." />
                            <FlowStep num="04" icon="two_wheeler" title="Asignación y Ruta"
                                desc="DDS asigna automáticamente el repartidor más cercano o disponible y registra la dirección de entrega con confirmación." />
                            <FlowStep num="05" icon="check_circle" title="Entrega Confirmada" isLast
                                desc="El repartidor confirma entrega. El pedido cierra, el cliente queda registrado y el ticket queda disponible para reporte administrativo." />
                        </div>
                    </div>

                    {/* DDS mockup */}
                    <div className="lg:sticky lg:top-24">
                        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-6 backdrop-blur-sm mb-5">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-2xl">🛵</span>
                                <div>
                                    <p className="font-black text-white text-sm">Dispatch & Delivery System</p>
                                    <p className="text-[10px] text-white/30 uppercase tracking-wider">2 repartidores activos</p>
                                </div>
                            </div>
                            {[
                                { name: 'Carlos M.', pedido: '#1040', dir: 'Av. Juárez 220', st: 'En camino', stColor: 'text-amber-400 bg-amber-500/10' },
                                { name: 'Sofía R.', pedido: '#1038', dir: 'Calle Morelos 14', st: 'Entregado ✓', stColor: 'text-emerald-400 bg-emerald-500/10' },
                                { name: 'Javier T.', pedido: '—', dir: 'Disponible', st: 'En base', stColor: 'text-white/30 bg-white/[0.04]' },
                            ].map((r, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-3 last:mb-0">
                                    <div className="size-10 rounded-xl bg-white/10 flex items-center justify-center text-white font-black text-sm shrink-0">
                                        {r.name.charAt(0)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-black text-white text-sm">{r.name} <span className="text-white/30 font-normal">{r.pedido}</span></p>
                                        <p className="text-xs text-white/30 truncate">{r.dir}</p>
                                    </div>
                                    <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${r.stColor}`}>{r.st}</span>
                                </div>
                            ))}
                        </div>

                        {/* Tiempo ahorro */}
                        <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                            <p className="text-xs text-white/30 font-black uppercase tracking-wider mb-3">Tiempo promedio de ciclo</p>
                            <div className="grid grid-cols-3 gap-3 text-center">
                                {[
                                    { val: '< 2m', label: 'Pedido → Cocina' },
                                    { val: '< 1m', label: 'Listo → Despacho' },
                                    { val: '0', label: 'Llamadas internas' },
                                ].map((t, i) => (
                                    <div key={i}>
                                        <p className="text-2xl font-black text-cyan-400">{t.val}</p>
                                        <p className="text-[9px] text-white/30 uppercase tracking-wider mt-1">{t.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                05 · ANÁLISIS TÉCNICO
            ══════════════════════════════════════════════════ */}
            <section ref={techRef} className="py-28 px-6 relative overflow-hidden bg-white/[0.02] border-y border-white/[0.05]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-4">05 · Stack Técnico</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
                            Construido con <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 italic">las mejores herramientas</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-5">
                            {stack.map((s, i) => (
                                <div key={i}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-black text-white text-sm">{s.label}</span>
                                        <span className="text-white/30 text-xs font-bold">{s.desc}</span>
                                    </div>
                                    <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                                        <div className={`h-full ${s.color} rounded-full transition-all duration-1000 ${techVisible ? s.pct : 'w-0'}`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: '📱', title: 'Mobile-First Design', desc: 'El chef en cocina, el repartidor en moto y el administrador en oficina usan el mismo sistema. Cada vista está optimizada para su dispositivo y contexto de uso.' },
                                { icon: '🏗️', title: 'Arquitectura con types.ts', desc: 'Estructura de datos extensible y completamente tipada. Agregar un nuevo platillo, modificador o módulo es predecible, seguro y sin efectos secundarios.' },
                                { icon: '🌙', title: 'Dark Mode + Glassmorphism', desc: 'Diseñado para uso en ambientes de cocina (poca luz), mostradores con reflexo y oficinas bien iluminadas. Alta legibilidad en cualquier contexto.' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/20 transition-all group backdrop-blur-sm">
                                    <span className="text-3xl shrink-0">{item.icon}</span>
                                    <div>
                                        <h4 className="font-black text-white mb-2">{item.title}</h4>
                                        <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                06 · ESCALABILIDAD
            ══════════════════════════════════════════════════ */}
            <section className="py-28 px-6 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-96 h-96 bg-violet-500/[0.05] blur-[120px] rounded-full pointer-events-none"></div>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-4">06 · Escalabilidad</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
                            Crece <span className="text-violet-400 italic">contigo</span>
                        </h2>
                        <p className="text-white/40 mt-4 max-w-xl mx-auto font-medium">
                            Diseñado desde el día uno para escalar. No como una promesa vaga, sino con decisiones de arquitectura concretas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: 'account_tree', color: 'from-cyan-500 to-blue-600', shadow: 'shadow-cyan-500/20',
                                title: 'Horizontal', sub: 'Múltiples Sucursales',
                                items: ['Base de clientes compartida', 'Menú y precios por sucursal', 'Reportes consolidados', 'Repartidores por zona'],
                            },
                            {
                                icon: 'extension', color: 'from-violet-500 to-purple-600', shadow: 'shadow-violet-500/20',
                                title: 'Funcional', sub: 'Nuevas Capacidades',
                                items: ['Pasarela de pago (Stripe/MercadoPago)', 'Factura electrónica (CFDI)', 'Programa de lealtad', 'App móvil nativa'],
                            },
                            {
                                icon: 'insights', color: 'from-orange-500 to-amber-600', shadow: 'shadow-orange-500/20',
                                title: 'Analítica', sub: 'Business Intelligence',
                                items: ['Predicción de horas pico', 'Platillos más rentables', 'Rotación de inventario', 'Eficiencia por repartidor'],
                            },
                        ].map((card, i) => (
                            <div key={i} className="relative group overflow-hidden rounded-3xl">
                                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-90`}></div>
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                <div className="relative z-10 p-8">
                                    <span className={`material-symbols-outlined text-white/80 text-3xl mb-4 block`}>{card.icon}</span>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">{card.sub}</p>
                                    <h3 className="text-2xl font-black text-white mb-5 uppercase">Escala {card.title}</h3>
                                    <ul className="space-y-2.5">
                                        {card.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-white/80">
                                                <span className="size-1.5 rounded-full bg-white/60 shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
                07 · CONCLUSIÓN + CTA
            ══════════════════════════════════════════════════ */}
            <section id="contacto" className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(6,182,212,0.08),transparent)]"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-6">07 · Conclusión</p>

                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                        No es un menú.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-orange-400">
                            Es una ventaja.
                        </span>
                    </h2>

                    <p className="text-xl text-white/50 font-medium mb-6 max-w-2xl mx-auto">
                        "El Buen Servir" no es solo una página de pedidos. Es una <strong className="text-white">herramienta de optimización de ingresos</strong> que reduce el tiempo de comunicación entre cliente, cocina y repartidor.
                    </p>
                    <p className="text-white/30 font-medium mb-14 max-w-xl mx-auto">
                        Menos errores, menos llamadas, menos pedidos perdidos. El mismo personal. El doble de volumen.
                    </p>

                    {/* Key results */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-14">
                        {[
                            { val: '–70%', label: 'Errores de pedido' },
                            { val: '×2', label: 'Capacidad operativa' },
                            { val: '0', label: 'Llamadas a cocina' },
                            { val: '100%', label: 'Trazabilidad' },
                        ].map((r, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center hover:border-cyan-500/30 transition-all">
                                <p className="text-2xl md:text-3xl font-black text-cyan-400 mb-1">{r.val}</p>
                                <p className="text-[10px] text-white/30 uppercase tracking-wider font-bold">{r.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
                        <a
                            href="mailto:contacto@fiberlinklabs.com?subject=Demo%20El%20Buen%20Servir%20Web%20App"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-cyan-500 text-slate-950 font-black text-lg rounded-2xl shadow-2xl shadow-cyan-500/25 hover:bg-cyan-400 hover:-translate-y-1 active:scale-95 transition-all"
                        >
                            <span className="material-symbols-outlined">play_circle</span>
                            Quiero una Demo
                        </a>
                        <a
                            href="https://wa.me/522311024672?text=Hola,%20me%20interesa%20el%20sistema%20El%20Buen%20Servir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl border border-white/15 text-white font-black hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
                        >
                            <span className="material-symbols-outlined">chat</span>
                            Hablar por WhatsApp
                        </a>
                    </div>

                    <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/20 text-sm">
                        <span>Un producto desarrollado por</span>
                        <Link to="/" className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors">
                            FiberLink Labs · Fiberlink Servicios TIC
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ElBuenServir;
