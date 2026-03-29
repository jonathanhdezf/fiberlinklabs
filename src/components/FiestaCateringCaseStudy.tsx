import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FiestaCateringCaseStudy.css';

const FiestaCateringCaseStudy = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });
    const [activeTab, setActiveTab] = useState(0);
    const [activePlan, setActivePlan] = useState<'compra' | 'renta'>('renta');

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const modules = [
        {
            id: 'banquetes', label: 'Gestión de Eventos', icon: 'celebration', color: '#e8956d',
            title: 'Control Total de Banquetes',
            desc: 'Panel privado para Reyna: registro de eventos, presupuestos, fechas y seguimiento de cada banquete en tiempo real.',
            features: ['Registro de eventos con fecha, lugar y tipo', 'Presupuestos y cotizaciones automáticas', 'Estado del evento: Cotización → Confirmado → Ejecutado', 'Historial completo por cliente', 'Alertas de fechas próximas'],
        },
        {
            id: 'inventario', label: 'Inventario', icon: 'inventory_2', color: '#d4a853',
            title: 'Rentas y Stock en Tiempo Real',
            desc: 'Control de mesas, sillas, manteles, vajillas y más. Sabe exactamente qué está disponible para cada fecha.',
            features: ['Catálogo de artículos con cantidad disponible', 'Calendario de disponibilidad por evento', 'Alertas de stock bajo o conflicto de fechas', 'Control de daños y reposición', 'Registro de artículos en uso vs. en almacén'],
        },
        {
            id: 'clientes', label: 'Clientes', icon: 'people', color: '#a78bfa',
            title: 'CRM de Clientes y Contactos',
            desc: 'Base de datos de clientes con historial, preferencias y canal de comunicación directa desde el sistema.',
            features: ['Perfil de cada cliente con historial de eventos', 'Envío de cotizaciones por WhatsApp o email', 'Recordatorios automáticos de pago', 'Seguimiento de pagos adelantados y saldos', 'Portal para que clientes vean su contrato'],
        },
        {
            id: 'reportes', label: 'Reportes', icon: 'bar_chart', color: '#34d399',
            title: 'Dashboard y Reportes',
            desc: 'Visualiza ingresos, eventos más rentables, artículos más rentados y proyecciones de tu negocio.',
            features: ['Ingresos por mes y por tipo de evento', 'Artículos más rentados y más rentables', 'Clientes frecuentes y valor por cliente', 'Exportar reportes en PDF o Excel', 'Proyección de disponibilidad futura'],
        },
    ];

    const flows = [
        {
            title: 'Gestión de un Nuevo Evento',
            color: 'rose', icon: 'celebration',
            steps: [
                { icon: 'person_add', text: 'Cliente contacta a Fiesta Catering' },
                { icon: 'edit_note', text: 'Reyna registra el evento y genera cotización' },
                { icon: 'inventory_2', text: 'Sistema verifica disponibilidad de artículos' },
                { icon: 'payments', text: 'Cliente acepta y realiza anticipo' },
                { icon: 'check_circle', text: 'Evento confirmado — recordatorios automáticos' },
            ],
        },
        {
            title: 'Control de Inventario en Renta',
            color: 'gold', icon: 'chair',
            steps: [
                { icon: 'search', text: 'Busca artículo: "50 sillas tiffany"' },
                { icon: 'event_available', text: 'Sistema muestra disponibilidad por fecha' },
                { icon: 'add_shopping_cart', text: 'Asigna artículos al evento' },
                { icon: 'local_shipping', text: 'Registra entrega y devolución' },
                { icon: 'bar_chart', text: 'Reporte actualizado automáticamente' },
            ],
        },
    ];

    const techStack = [
        { name: 'React + Vite', category: 'Frontend', icon: 'code' },
        { name: 'Node.js + Express', category: 'Backend', icon: 'dns' },
        { name: 'PostgreSQL', category: 'Base de datos', icon: 'database' },
        { name: 'Prisma ORM', category: 'Data layer', icon: 'layers' },
        { name: 'JWT + RBAC', category: 'Autenticación', icon: 'lock' },
        { name: 'Resend / Email', category: 'Notificaciones', icon: 'mail' },
        { name: 'Vercel + Railway', category: 'Hosting', icon: 'cloud_upload' },
        { name: 'WhatsApp API', category: 'Mensajería', icon: 'chat' },
    ];

    const roadmap = [
        { icon: 'credit_card', title: 'Pagos en línea', desc: 'Stripe o MercadoPago para que clientes paguen su anticipo directamente desde el portal.', version: 'v2.0' },
        { icon: 'calendar_month', title: 'Calendario público', desc: 'Portal donde clientes pueden ver fechas disponibles y solicitar su evento en línea.', version: 'v2.1' },
        { icon: 'draw', title: 'Contratos digitales', desc: 'Firma electrónica de contratos con validez legal, sin papel ni visitas presenciales.', version: 'v3.0' },
        { icon: 'whatsapp', title: 'WhatsApp Business API', desc: 'Recordatorios de pago y cotizaciones automáticas directo al WhatsApp del cliente.', version: 'v3.1' },
        { icon: 'storefront', title: 'Catálogo público', desc: 'Página de presentación de Fiesta Catering con catálogo de paquetes y galería de eventos.', version: 'v4.0' },
        { icon: 'smartphone', title: 'App móvil PWA', desc: 'Versión instalable para que Reyna gestione todo desde su celular sin instalar nada.', version: 'v4.1' },
    ];

    const metrics = [
        { value: '4 en 1', label: 'Módulos integrados' },
        { value: '10 sem', label: 'Desarrollo MVP' },
        { value: '100%', label: 'Web-based' },
        { value: '0', label: 'Instalaciones' },
    ];

    // Mock data for mockup tabs
    const events = [
        { name: 'Boda García', date: '12 Abr', type: 'Boda', guests: 180, status: 'Confirmado', total: '$28,500' },
        { name: 'XV Rodríguez', date: '19 Abr', type: 'XV Años', guests: 120, status: 'Pendiente', total: '$16,200' },
        { name: 'Graduación UNAM', date: '26 Abr', type: 'Graduación', guests: 80, status: 'En preparación', total: '$9,800' },
        { name: 'Bautizo Hernández', date: '03 May', type: 'Bautizo', guests: 60, status: 'Confirmado', total: '$7,500' },
    ];

    const inventoryItems = [
        { name: 'Sillas Tiffany', total: 300, available: 230, icon: 'chair', color: '#e8956d' },
        { name: 'Mesas Redondas', total: 40, available: 32, icon: 'table_restaurant', color: '#d4a853' },
        { name: 'Manteles Blancos', total: 200, available: 85, icon: 'bed', color: '#a78bfa' },
        { name: 'Centros de Mesa', total: 80, available: 62, icon: 'local_florist', color: '#34d399' },
    ];

    return (
        <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden blueprint-grid bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 selection:bg-primary/30 transition-colors duration-300">

            {/* ── Navigation ── */}
            <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="relative h-10 flex items-center group">
                            <img src="/logo.jpg" alt="FiberLink Labs" className="h-full w-auto object-contain transition-opacity duration-700 opacity-100 group-hover:opacity-0" />
                            <img src="/logo.webp" alt="FiberLink Labs" className="absolute inset-0 h-full w-auto object-contain transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">FiberLink <span className="text-primary">Labs</span></h2>
                    </Link>
                    <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center group" aria-label="Toggle Theme">
                        <span className="material-symbols-outlined dark:hidden text-slate-600 group-hover:text-primary transition-colors">dark_mode</span>
                        <span className="material-symbols-outlined hidden dark:block text-slate-400 group-hover:text-primary transition-colors">light_mode</span>
                    </button>
                </div>
            </header>

            {/* ── Back button ── */}
            <Link to="/#casos" className="fixed top-24 left-6 z-[60] flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-primary/20 text-slate-900 dark:text-white text-sm font-bold hover:bg-primary hover:text-white transition-all shadow-xl group">
                <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                <span>Regresar</span>
            </Link>

            <main className="flex-1 flex flex-col items-center justify-start pt-32 pb-24 px-6 relative z-10">

                {/* ── Hero ── */}
                <div className="text-center max-w-4xl mb-16 relative">
                    {/* Ambient glows */}
                    <div className="fcs-hero-glow fcs-hero-glow-1" />
                    <div className="fcs-hero-glow fcs-hero-glow-2" />

                    {/* Client badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#e8956d]/30 bg-[#e8956d]/5 text-[#e8956d] text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="material-symbols-outlined text-sm">storefront</span>
                        Propuesta para Fiesta Catering · Reyna Esther Aguilar Martínez
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#e8956d]/20 bg-[#e8956d]/5 text-[#e8956d] text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e8956d] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e8956d]"></span>
                        </span>
                        Blueprint · Software de Gestión de Banquetes y Rentas
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 dark:text-white">
                        Digitaliza tu negocio de<br />
                        <span style={{ background: 'linear-gradient(135deg, #e8956d, #d4a853)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            banquetes y rentas de artículos
                        </span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Una plataforma web hecha a la medida de <strong className="dark:text-white">Fiesta Catering</strong>: gestión de eventos, control de inventario de mesas, sillas y manteles, clientes y reportes — todo desde un solo sistema sin instalar nada.
                    </p>

                    {/* Metrics row */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {metrics.map(m => (
                            <div key={m.label} className="flex flex-col items-center px-6 py-3 rounded-2xl bg-[#e8956d]/5 border border-[#e8956d]/15 min-w-[120px]">
                                <span className="text-2xl font-black" style={{ color: '#e8956d' }}>{m.value}</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-0.5">{m.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Interactive Mockup ── */}
                <div className="relative w-full max-w-5xl mb-24">
                    <div className="absolute -inset-10 rounded-[4rem] blur-3xl opacity-30 pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(232,149,109,0.3) 0%, transparent 70%)' }} />

                    {/* Tab switcher */}
                    <div className="flex gap-2 justify-center mb-4 relative z-10 flex-wrap">
                        {['Panel de Eventos', 'Inventario', 'Dashboard'].map((tab, i) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(i)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide border transition-all ${activeTab === i ? 'text-white border-transparent shadow-lg' : 'border-white/10 text-slate-500 hover:text-white hover:border-white/20 bg-slate-900/60'}`}
                                style={activeTab === i ? { background: 'linear-gradient(135deg,#e8956d,#d4a853)', boxShadow: '0 8px 24px -4px rgba(232,149,109,0.4)' } : {}}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="relative rounded-xl border-[8px] border-slate-800 dark:border-slate-900 bg-slate-900 shadow-2xl overflow-hidden" style={{ boxShadow: '0 0 50px -12px rgba(232,149,109,0.3)' }}>
                        {/* Browser chrome */}
                        <div className="fcs-browser-chrome">
                            <div className="flex gap-1.5">
                                <div className="size-2.5 rounded-full bg-red-500/60" />
                                <div className="size-2.5 rounded-full bg-amber-500/60" />
                                <div className="size-2.5 rounded-full bg-emerald-500/60" />
                            </div>
                            <div className="flex-1 mx-4 h-5 bg-slate-700 rounded-full flex items-center px-3 gap-2">
                                <span className="material-symbols-outlined text-slate-500 text-xs">lock</span>
                                <span className="text-[10px] text-slate-500 font-mono">
                                    {activeTab === 0 ? 'app.fiestacat.mx/eventos' : activeTab === 1 ? 'app.fiestacat.mx/inventario' : 'app.fiestacat.mx/dashboard'}
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] font-bold" style={{ color: '#e8956d' }}>
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#e8956d' }} />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: '#e8956d' }} />
                                </span>
                                {activeTab === 0 ? '4 eventos activos' : activeTab === 1 ? 'Stock actualizado' : 'Datos en tiempo real'}
                            </div>
                        </div>

                        {/* ── Tab 0: Eventos ── */}
                        {activeTab === 0 && (
                            <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden flex">
                                {/* Sidebar */}
                                <div className="w-14 bg-slate-900 border-r border-white/5 flex flex-col items-center py-4 gap-4">
                                    {['celebration', 'inventory_2', 'people', 'bar_chart', 'payments', 'settings'].map((ic, i) => (
                                        <span key={ic} className={`material-symbols-outlined text-base ${i === 0 ? '' : 'text-slate-600'}`} style={i === 0 ? { color: '#e8956d' } : {}}>{ic}</span>
                                    ))}
                                </div>
                                {/* Main */}
                                <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-white text-sm font-bold">Mis Eventos — Abril 2026</div>
                                            <div className="text-slate-500 text-xs">4 eventos · $62,000 en contratos</div>
                                        </div>
                                        <div className="px-3 py-1.5 rounded-full text-[10px] font-bold text-white" style={{ background: 'linear-gradient(135deg,#e8956d,#d4a853)' }}>+ Nuevo evento</div>
                                    </div>
                                    {/* Stats */}
                                    <div className="grid grid-cols-4 gap-2">
                                        {[
                                            { label: 'Eventos confirmados', value: '2', color: '#34d399' },
                                            { label: 'Ingresos mes', value: '$62k', color: '#e8956d' },
                                            { label: 'Pendientes', value: '1', color: '#fbbf24' },
                                            { label: 'Total invitados', value: '440', color: '#a78bfa' },
                                        ].map(s => (
                                            <div key={s.label} className="bg-slate-900 border border-white/5 rounded-lg p-3">
                                                <div className="text-sm font-black mt-1 text-white">{s.value}</div>
                                                <div className="text-slate-600 text-[8px] uppercase tracking-wide">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Events table */}
                                    <div className="flex-1 bg-slate-900 border border-white/5 rounded-lg overflow-hidden">
                                        <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between">
                                            <span className="text-slate-400 text-[10px] uppercase tracking-wider font-bold">Próximos eventos</span>
                                        </div>
                                        {events.map(ev => (
                                            <div key={ev.name} className="flex items-center gap-3 px-4 py-2 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all">
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(232,149,109,0.1)' }}>
                                                    <span className="material-symbols-outlined text-sm" style={{ color: '#e8956d' }}>celebration</span>
                                                </div>
                                                <div className="flex-1 grid grid-cols-4 gap-2 items-center">
                                                    <div>
                                                        <div className="text-white text-[9px] font-bold">{ev.name}</div>
                                                        <div className="text-slate-500 text-[8px]">{ev.type}</div>
                                                    </div>
                                                    <div className="text-slate-400 text-[9px]">{ev.date} · {ev.guests} inv.</div>
                                                    <div className="text-white text-[9px] font-bold">{ev.total}</div>
                                                    <div className={`fcs-event-status`} data-status={ev.status}>
                                                        <span className="relative flex h-1 w-1"><span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current" /><span className="relative inline-flex rounded-full h-1 w-1 bg-current" /></span>
                                                        {ev.status}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── Tab 1: Inventario ── */}
                        {activeTab === 1 && (
                            <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden flex">
                                <div className="w-14 bg-slate-900 border-r border-white/5 flex flex-col items-center py-4 gap-4">
                                    {['celebration', 'inventory_2', 'people', 'bar_chart', 'payments', 'settings'].map((ic, i) => (
                                        <span key={ic} className={`material-symbols-outlined text-base ${i === 1 ? '' : 'text-slate-600'}`} style={i === 1 ? { color: '#d4a853' } : {}}>{ic}</span>
                                    ))}
                                </div>
                                <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-white text-sm font-bold">Inventario — Artículos en Renta</div>
                                            <div className="text-slate-500 text-xs">Control de stock por evento</div>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold" style={{ borderColor: 'rgba(212,168,83,0.3)', color: '#d4a853', background: 'rgba(212,168,83,0.08)' }}>
                                            <span className="material-symbols-outlined text-xs">event_available</span>
                                            Verificar disponibilidad
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 flex-1">
                                        {inventoryItems.map(item => {
                                            const pct = Math.round((item.available / item.total) * 100);
                                            return (
                                                <div key={item.name} className="bg-slate-900 border border-white/5 rounded-xl p-4 flex flex-col gap-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${item.color}15` }}>
                                                            <span className="material-symbols-outlined text-sm" style={{ color: item.color }}>{item.icon}</span>
                                                        </div>
                                                        <div>
                                                            <div className="text-white text-[10px] font-bold">{item.name}</div>
                                                            <div className="text-slate-500 text-[8px]">{item.available} / {item.total} disponibles</div>
                                                        </div>
                                                    </div>
                                                    <div className="fcs-inventory-bar">
                                                        <div className="fcs-inventory-fill" style={{ width: `${pct}%`, background: item.color }} />
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-[8px] text-slate-500">{pct}% libre</span>
                                                        <span className="text-[8px] font-bold px-2 py-0.5 rounded-full" style={{ color: item.color, background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                                                            {pct > 50 ? 'Disponible' : pct > 20 ? 'Stock bajo' : 'Crítico'}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── Tab 2: Dashboard ── */}
                        {activeTab === 2 && (
                            <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden flex">
                                <div className="w-14 bg-slate-900 border-r border-white/5 flex flex-col items-center py-4 gap-4">
                                    {['celebration', 'inventory_2', 'people', 'bar_chart', 'payments', 'settings'].map((ic, i) => (
                                        <span key={ic} className={`material-symbols-outlined text-base ${i === 3 ? '' : 'text-slate-600'}`} style={i === 3 ? { color: '#34d399' } : {}}>{ic}</span>
                                    ))}
                                </div>
                                <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
                                    <div className="text-white text-sm font-bold">Dashboard — Vista General</div>
                                    <div className="grid grid-cols-3 gap-2">
                                        {[
                                            { value: '$186,200', label: 'Ingresos Q1 2026', color: '#e8956d' },
                                            { value: '23', label: 'Eventos realizados', color: '#d4a853' },
                                            { value: '98%', label: 'Satisfacción clientes', color: '#34d399' },
                                        ].map(s => (
                                            <div key={s.label} className="bg-slate-900 border border-white/5 rounded-xl p-3 text-center">
                                                <div className="text-lg font-black" style={{ color: s.color }}>{s.value}</div>
                                                <div className="text-[8px] text-slate-500 uppercase tracking-wide mt-0.5">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Bar chart mock */}
                                    <div className="flex-1 bg-slate-900 border border-white/5 rounded-xl p-4 flex flex-col gap-2">
                                        <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider mb-2">Ingresos por mes</div>
                                        <div className="flex-1 flex items-end gap-3 px-2">
                                            {[
                                                { month: 'Ene', val: 55, color: '#e8956d' },
                                                { month: 'Feb', val: 70, color: '#e8956d' },
                                                { month: 'Mar', val: 85, color: '#d4a853' },
                                                { month: 'Abr', val: 62, color: '#e8956d' },
                                                { month: 'May', val: 90, color: '#34d399' },
                                                { month: 'Jun', val: 75, color: '#e8956d' },
                                            ].map(b => (
                                                <div key={b.month} className="flex-1 flex flex-col items-center gap-1">
                                                    <div className="w-full rounded-t-lg transition-all" style={{ height: `${b.val}%`, background: `${b.color}40`, border: `1px solid ${b.color}60` }} />
                                                    <span className="text-[7px] text-slate-600">{b.month}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="mx-auto w-[108%] h-3 bg-slate-800 rounded-b-xl -mt-1 shadow-xl" />
                </div>

                {/* ── Módulos ── */}
                <div className="w-full max-w-7xl mb-20">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest mb-4" style={{ borderColor: 'rgba(232,149,109,0.3)', background: 'rgba(232,149,109,0.06)', color: '#e8956d' }}>
                            <span className="material-symbols-outlined text-sm">layers</span>
                            Módulos del Sistema
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Un sistema. <span className="text-gradient">Cuatro motores.</span></h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm">
                            Diseñado específicamente para el negocio de banquetes y rentas de Reyna. Cada módulo resuelve un problema real.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {modules.map(mod => (
                            <div key={mod.id} className="fcs-module-card glass-card p-7 rounded-2xl relative group hover:border-primary/40 transition-all hover:shadow-[0_0_40px_-10px_rgba(232,149,109,0.3)] bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10" data-type={mod.id}>
                                <div className="fcs-module-bg-text">{mod.label}</div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="fcs-module-icon-wrapper">
                                        <span className="material-symbols-outlined fcs-module-icon">{mod.icon}</span>
                                    </div>
                                    <div>
                                        <div className="fcs-module-badge">{mod.label}</div>
                                        <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">{mod.title}</h3>
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm">{mod.desc}</p>
                                <ul className="space-y-2">
                                    {mod.features.map(f => (
                                        <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                            <span className="material-symbols-outlined fcs-feature-icon">check_circle</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Reto / Solución / Impacto ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mb-20">
                    {/* Reto */}
                    <div className="glass-card p-8 rounded-2xl relative bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10">
                        <div className="absolute top-0 right-0 p-6 opacity-10"><span className="text-7xl font-bold text-slate-900 dark:text-white">01</span></div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-amber-500/10 rounded-lg"><span className="material-symbols-outlined text-amber-500 text-3xl">warning</span></div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">El Reto</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Fiesta Catering opera con hojas de Excel, agenda en papel y WhatsApp para controlar eventos, clientes e inventario — generando errores, pérdida de tiempo y nula visibilidad del negocio.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'Control de inventario en hojas sin trazabilidad',
                                'Doble reserva de artículos por falta de sistema',
                                'Cotizaciones manuales tardadas',
                                'Sin historial de clientes ni eventos pasados',
                            ].map(it => (
                                <li key={it} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-amber-500 text-sm mt-0.5">error</span>{it}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solución */}
                    <div className="glass-card p-8 rounded-2xl relative bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10">
                        <div className="absolute top-0 right-0 p-6 opacity-10"><span className="text-7xl font-bold text-slate-900 dark:text-white">02</span></div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg" style={{ background: 'rgba(232,149,109,0.1)' }}><span className="material-symbols-outlined text-3xl" style={{ color: '#e8956d' }}>developer_board</span></div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">La Solución</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Plataforma web 100% a medida: panel administrativo para Reyna con gestión de eventos, inventario inteligente, CRM de clientes y reportes financieros visibles desde cualquier dispositivo.
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { label: 'Admin', value: 'JWT seguro', icon: 'manage_accounts' },
                                { label: 'Inventario', value: 'Tiempo real', icon: 'inventory_2' },
                                { label: 'Alertas', value: 'Email + WA', icon: 'notifications_active' },
                                { label: 'DB', value: 'PostgreSQL', icon: 'database' },
                            ].map(item => (
                                <div key={item.label} className="rounded-xl p-3 border transition-all" style={{ background: 'rgba(232,149,109,0.08)', borderColor: 'rgba(232,149,109,0.2)' }}>
                                    <div className="text-[10px] font-bold uppercase mb-1 flex items-center gap-1" style={{ color: '#e8956d' }}>
                                        <span className="material-symbols-outlined text-xs">{item.icon}</span>{item.label}
                                    </div>
                                    <div className="text-xs font-bold dark:text-white">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Impacto */}
                    <div className="glass-card p-8 rounded-2xl relative bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10">
                        <div className="absolute top-0 right-0 p-6 opacity-10"><span className="text-7xl font-bold text-slate-900 dark:text-white">03</span></div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-emerald-500/10 rounded-lg"><span className="material-symbols-outlined text-emerald-500 text-3xl">insights</span></div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">El Impacto</h3>
                        </div>
                        <div className="space-y-5">
                            {[
                                { value: '↓ 90%', label: 'tiempo en cotizaciones' },
                                { value: '0', label: 'doble-reservas de artículos' },
                                { value: '+35%', label: 'visibilidad financiera del negocio' },
                            ].map(stat => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-black" style={{ color: '#e8956d' }}>{stat.value}</div>
                                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
                                </div>
                            ))}
                            <div className="flex items-center gap-3 py-2 px-4 bg-emerald-500/10 rounded-full w-fit">
                                <span className="text-emerald-500 font-bold text-sm">Resultados esperados</span>
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Flujos ── */}
                <div className="w-full max-w-7xl mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">route</span>
                            Flujos de uso
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground">Así funciona <span className="text-gradient">en el día a día.</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {flows.map(flow => (
                            <div key={flow.title} className="fcs-flow-section glass-card p-7 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10" data-flow={flow.color}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="fcs-flow-icon-wrapper">
                                        <span className="material-symbols-outlined fcs-flow-icon">{flow.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">{flow.title}</h3>
                                </div>
                                <div className="relative">
                                    <div className="fcs-flow-line" />
                                    <div className="space-y-4">
                                        {flow.steps.map((step, i) => (
                                            <div key={step.text} className="flex items-center gap-4 pl-2">
                                                <div className="fcs-step-icon-wrapper">
                                                    <span className="material-symbols-outlined fcs-step-icon">{step.icon}</span>
                                                </div>
                                                <div className="flex-1 flex items-center justify-between">
                                                    <span className="text-sm text-slate-700 dark:text-slate-300">{step.text}</span>
                                                    <span className="fcs-step-number">0{i + 1}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Tech Stack ── */}
                <div className="w-full max-w-5xl mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">terminal</span>
                            Stack Tecnológico
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground">Construido para <span className="text-gradient">escalar con Fiesta Catering</span></h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {techStack.map(tech => (
                            <div key={tech.name} className="glass-card group flex flex-col items-center text-center p-5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10 hover:border-primary/40 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-all">
                                    <span className="material-symbols-outlined text-primary">{tech.icon}</span>
                                </div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{tech.category}</div>
                                <div className="font-bold text-slate-900 dark:text-white text-sm">{tech.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Planes de Pago ── */}
                <div className="w-full max-w-5xl mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest mb-4" style={{ borderColor: 'rgba(232,149,109,0.3)', background: 'rgba(232,149,109,0.06)', color: '#e8956d' }}>
                            <span className="material-symbols-outlined text-sm">payments</span>
                            Planes de Inversión
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground">Elige el modelo <span className="text-gradient">que más te conviene</span></h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm">
                            Dos formas de acceder a tu sistema. Sin costos ocultos, sin sorpresas.
                        </p>

                        {/* Toggle */}
                        <div className="flex justify-center mt-6">
                            <div className="flex p-1 bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-white/10 rounded-xl">
                                <button
                                    onClick={() => setActivePlan('renta')}
                                    className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${activePlan === 'renta' ? 'text-white shadow-lg' : 'text-slate-500'}`}
                                    style={activePlan === 'renta' ? { background: 'linear-gradient(135deg,#e8956d,#d4a853)' } : {}}
                                >
                                    Despliegue + Renta
                                </button>
                                <button
                                    onClick={() => setActivePlan('compra')}
                                    className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${activePlan === 'compra' ? 'text-white shadow-lg' : 'text-slate-500'}`}
                                    style={activePlan === 'compra' ? { background: 'linear-gradient(135deg,#e8956d,#d4a853)' } : {}}
                                >
                                    Compra Única
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Plan Renta */}
                        <div className={`fcs-plan-card bg-slate-100/80 dark:bg-slate-900/80 border p-8 rounded-2xl ${activePlan === 'renta' ? 'featured' : 'border-slate-200/50 dark:border-white/10 opacity-80'}`} style={activePlan === 'renta' ? { borderColor: '#e8956d' } : {}}>
                            {activePlan === 'renta' && <div className="fcs-plan-badge">⭐ Recomendado</div>}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(232,149,109,0.1)', border: '1px solid rgba(232,149,109,0.2)' }}>
                                    <span className="material-symbols-outlined text-2xl" style={{ color: '#e8956d' }}>cloud_sync</span>
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: '#e8956d' }}>Plan Flexible</div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Despliegue + Renta Mensual</h3>
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="text-slate-500 text-sm mb-1">Pago inicial (desarrollo)</div>
                                <div className="text-4xl font-black dark:text-white">$8,500 <span className="text-lg font-normal text-slate-500">MXN</span></div>
                                <div className="mt-3 text-slate-500 text-sm">+ Renta mensual</div>
                                <div className="text-3xl font-black dark:text-white mt-1">$1,200 <span className="text-lg font-normal text-slate-500">MXN/mes</span></div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {[
                                    'Menor inversión inicial',
                                    'Hosting, dominio y backups incluidos',
                                    'Soporte técnico prioritario',
                                    'Actualizaciones y nuevas funciones incluidas',
                                    'Escala según crezca Fiesta Catering',
                                    'Cancela cuando quieras (aviso 30 días)',
                                ].map(f => (
                                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-sm mt-0.5" style={{ color: '#e8956d' }}>check_circle</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/#contacto" className="block w-full text-center py-4 rounded-xl font-bold text-white transition-all hover:brightness-110" style={{ background: 'linear-gradient(135deg,#e8956d,#d4a853)', boxShadow: '0 8px 24px -4px rgba(232,149,109,0.4)' }}>
                                Iniciar con este plan
                            </Link>
                        </div>

                        {/* Plan Compra */}
                        <div className={`fcs-plan-card bg-slate-100/80 dark:bg-slate-900/80 border p-8 rounded-2xl ${activePlan === 'compra' ? 'featured' : 'border-slate-200/50 dark:border-white/10 opacity-80'}`} style={activePlan === 'compra' ? { borderColor: '#e8956d' } : {}}>
                            {activePlan === 'compra' && <div className="fcs-plan-badge">💎 Inversión única</div>}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(212,168,83,0.1)', border: '1px solid rgba(212,168,83,0.2)' }}>
                                    <span className="material-symbols-outlined text-2xl" style={{ color: '#d4a853' }}>workspace_premium</span>
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: '#d4a853' }}>Plan Propietario</div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Compra Única del Sistema</h3>
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="text-slate-500 text-sm mb-1">Pago único (código fuente + despliegue)</div>
                                <div className="text-4xl font-black dark:text-white">$24,000 <span className="text-lg font-normal text-slate-500">MXN</span></div>
                                <div className="mt-3 text-slate-500 text-sm">Solo pagas el hosting (~$300/mes por tu cuenta)</div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {[
                                    'El sistema es 100% tuyo para siempre',
                                    'Código fuente entregado',
                                    '6 meses de soporte técnico incluido',
                                    'Capacitación completa para el equipo',
                                    'Sin pagos recurrentes a FiberLink',
                                    'Puedes migrar o modificar a voluntad',
                                ].map(f => (
                                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-sm mt-0.5" style={{ color: '#d4a853' }}>check_circle</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/#contacto" className="block w-full text-center py-4 rounded-xl font-bold text-white transition-all hover:brightness-110" style={{ background: 'linear-gradient(135deg,#d4a853,#e8956d)', boxShadow: '0 8px 24px -4px rgba(212,168,83,0.4)' }}>
                                Iniciar con este plan
                            </Link>
                        </div>
                    </div>

                    {/* Plan comparison note */}
                    <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
                        💡 ¿No sabes cuál elegir? <Link to="/#contacto" className="font-bold hover:underline" style={{ color: '#e8956d' }}>Agenda una consulta gratuita</Link> y te orientamos sin compromiso.
                    </div>
                </div>

                {/* ── Roadmap ── */}
                <div className="w-full max-w-7xl mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">trending_up</span>
                            Escalabilidad futura
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground">El MVP entrega. <span className="text-gradient">La plataforma crece.</span></h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {roadmap.map(step => (
                            <div key={step.title} className="glass-card flex gap-4 items-start p-5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10 hover:border-primary/30 transition-all group">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                                    <span className="material-symbols-outlined text-primary">{step.icon}</span>
                                </div>
                                <div>
                                    <div className="text-[9px] font-black text-primary uppercase tracking-widest mb-0.5">{step.version}</div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{step.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CTA ── */}
                <div className="w-full max-w-4xl">
                    <div className="p-1 rounded-3xl" style={{ background: 'linear-gradient(135deg, #e8956d, #d4a853, #e8956d)' }}>
                        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[1.3rem] flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: '#e8956d' }}>Para Reyna Esther Aguilar Martínez</div>
                                <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">¿Lista para llevar Fiesta Catering al siguiente nivel?</h4>
                                <p className="text-slate-500">Agenda tu diagnóstico gratuito y diseñamos tu sistema en 48 hrs.</p>
                            </div>
                            <Link to="/#contacto" className="whitespace-nowrap px-8 py-4 font-bold rounded-2xl hover:brightness-110 transition-all text-white flex items-center gap-3 shadow-xl" style={{ background: 'linear-gradient(135deg,#e8956d,#d4a853)', boxShadow: '0 20px 40px -10px rgba(232,149,109,0.5)' }}>
                                Agendar diagnóstico
                                <span className="material-symbols-outlined">calendar_today</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── Footer ── */}
                <footer className="mt-24 pt-12 border-t border-primary/10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-slate-500 text-sm">
                    <div className="flex items-center gap-6">
                        <span>© 2026 FiberLink Labs Engineering</span>
                        <span className="h-4 w-px bg-slate-300 dark:bg-slate-800" />
                        <span>Propuesta: FiestaCatering-MVP-V1</span>
                    </div>
                    <div className="flex items-center gap-8">
                        <button className="hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="material-symbols-outlined text-lg group-hover:-translate-y-0.5 transition-transform">description</span> Descargar PDF
                        </button>
                        <button className="hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">share</span> Compartir Propuesta
                        </button>
                    </div>
                </footer>
            </main>

            {/* Decorative sidebar */}
            <div className="fcs-decor-left">
                <div className="text-xs rotate-90 origin-left whitespace-nowrap tracking-[0.5em] font-bold uppercase dark:text-white">Fiesta Catering · Gestión Digital</div>
                <div className="h-24 w-px mx-auto" style={{ background: '#e8956d' }} />
            </div>
        </div>
    );
};

export default FiestaCateringCaseStudy;
