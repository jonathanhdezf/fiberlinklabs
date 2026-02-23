import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ArrendadorCaseStudy.css';

const ArrendadorCaseStudy = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });
    const [activeTab, setActiveTab] = useState(0);

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
            id: 'gestion',
            label: 'Gestión Interna',
            icon: 'apartment',
            color: '#6366f1',
            colorBg: 'rgba(99,102,241,0.1)',
            colorBorder: 'rgba(99,102,241,0.3)',
            title: 'Gestión de Residentes',
            desc: 'Panel privado para el arrendador: registro de contratos, control de pagos y estado de cada unidad en tiempo real.',
            features: [
                'Registro de arrendatarios y contratos',
                'Control de renta mensual e historial',
                'Estado por unidad: ocupado / disponible / mantenimiento',
                'Alertas automáticas de vencimiento de renta',
                'Descarga de recibos y comprobantes en PDF',
            ],
        },
        {
            id: 'portal',
            label: 'Portal Público',
            icon: 'storefront',
            color: '#10b981',
            colorBg: 'rgba(16,185,129,0.1)',
            colorBorder: 'rgba(16,185,129,0.3)',
            title: 'Portal de Identidad y Oferta',
            desc: 'Página pública que muestra la marca del arrendador, catálogo de unidades disponibles y formulario de contacto.',
            features: [
                'Catálogo con fotos, precios y características',
                'Filtros: precio, tipo, ubicación, estudiantes/residencial',
                'Formulario de solicitud de visita',
                'Sección "Quiénes somos" y testimoniales',
                'Integración con Google Maps',
            ],
        },
        {
            id: 'solicitudes',
            label: 'Solicitudes',
            icon: 'contact_mail',
            color: '#f59e0b',
            colorBg: 'rgba(245,158,11,0.1)',
            colorBorder: 'rgba(245,158,11,0.3)',
            title: 'Solicitudes en Línea',
            desc: 'Los prospectos envían su solicitud desde el portal y el arrendador la recibe en el panel con seguimiento completo.',
            features: [
                'Formulario de solicitud de renta',
                'Registro automático en el backend',
                'Notificación inmediata al arrendador',
                'Estados: Nuevo → En revisión → Agendado → Aceptado',
                'Integración con WhatsApp Business',
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
        { name: 'Google Maps API', category: 'Ubicación', icon: 'location_on' },
    ];

    const flows = [
        {
            title: 'Gestión del Arrendador',
            color: '#6366f1',
            icon: 'manage_accounts',
            steps: [
                { icon: 'login', text: 'Arrendador inicia sesión en el panel' },
                { icon: 'add_home', text: 'Registra propiedades y unidades' },
                { icon: 'person_add', text: 'Agrega residente y contrato' },
                { icon: 'notifications_active', text: 'Sistema envía alerta de pago' },
                { icon: 'bar_chart', text: 'Revisa reportes de ocupación' },
            ],
        },
        {
            title: 'Prospecto Interesado',
            color: '#10b981',
            icon: 'search',
            steps: [
                { icon: 'language', text: 'Visita el portal público' },
                { icon: 'filter_list', text: 'Filtra por precio y tipo de unidad' },
                { icon: 'photo_library', text: 'Ve fotos y características' },
                { icon: 'send', text: 'Envía solicitud de visita' },
                { icon: 'calendar_today', text: 'Arrendador agenda y confirma' },
            ],
        },
    ];

    const roadmap = [
        { icon: 'credit_card', title: 'Pagos en línea', desc: 'Stripe o MercadoPago para que los residentes paguen su renta directamente desde el portal.', version: 'v2.0' },
        { icon: 'draw', title: 'Contratos digitales', desc: 'Firma electrónica de contratos con validez legal, sin paper ni visitas presenciales.', version: 'v2.1' },
        { icon: 'analytics', title: 'Dashboard de métricas', desc: 'Ocupación, ingresos mensuales, rotación de residentes y proyecciones.', version: 'v3.0' },
        { icon: 'corporate_fare', title: 'Multi-arrendador', desc: 'Varios propietarios gestionando sus unidades en la misma plataforma con roles separados.', version: 'v3.1' },
        { icon: 'whatsapp', title: 'WhatsApp Business API', desc: 'Recordatorios de pago y notificaciones automáticas vía WhatsApp al residente.', version: 'v4.0' },
        { icon: 'smartphone', title: 'App móvil PWA', desc: 'Versión instalable para que el arrendador gestione todo desde su celular.', version: 'v4.1' },
    ];

    const metrics = [
        { value: '3 en 1', label: 'Admin + Residentes + Portal' },
        { value: '10 sem', label: 'Desarrollo MVP' },
        { value: '100%', label: 'Web-based sin instalar' },
        { value: '∞', label: 'Unidades escalable' },
    ];

    // Mock data for the tabs
    const units = [
        { id: 'A-101', type: 'Depto 1 recámara', tenant: 'Carlos M.', rent: 5500, status: 'Ocupado', due: '01 Mar', paid: true },
        { id: 'A-102', type: 'Depto 2 recámaras', tenant: '—', rent: 7200, status: 'Disponible', due: '—', paid: false },
        { id: 'B-201', type: 'Cuarto estudiantes', tenant: 'Sofía R.', rent: 3200, status: 'Ocupado', due: '01 Mar', paid: false },
        { id: 'B-202', type: 'Cuarto estudiantes', tenant: 'Luis P.', rent: 3200, status: 'Ocupado', due: '28 Feb', paid: true },
        { id: 'C-301', type: 'Depto 2 recámaras', tenant: '—', rent: 7800, status: 'Mantenimiento', due: '—', paid: false },
    ];


    const listings = [
        { title: 'Depto 2 Rec. Amueblado', price: 7200, type: 'Residencial', area: '65 m²', floor: '3er Piso', color: '#6366f1' },
        { title: 'Cuarto para Estudiantes', price: 3200, type: 'Estudiantes', area: '18 m²', floor: '2do Piso', color: '#10b981' },
        { title: 'Depto 1 Rec. Moderno', price: 5500, type: 'Residencial', area: '42 m²', floor: '1er Piso', color: '#f59e0b' },
    ];

    const requests = [
        { name: 'María López', unit: 'Depto 2 Rec.', date: '22 Feb', status: 'Nuevo', color: '#6366f1' },
        { name: 'Roberto Díaz', unit: 'Cuarto Estud.', date: '21 Feb', status: 'En revisión', color: '#f59e0b' },
        { name: 'Ana Gutiérrez', unit: 'Depto 1 Rec.', date: '20 Feb', status: 'Agendado', color: '#10b981' },
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

                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center group" aria-label="Toggle Theme">
                            <span className="material-symbols-outlined dark:hidden text-slate-600 group-hover:text-primary transition-colors">dark_mode</span>
                            <span className="material-symbols-outlined hidden dark:block text-slate-400 group-hover:text-primary transition-colors">light_mode</span>
                        </button>

                    </div>
                </div>
            </header>


            {/* ── Regresar Flotante ── */}
            <Link
                to="/#casos"
                className="fixed top-24 left-6 z-[60] flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-primary/20 text-slate-900 dark:text-white text-sm font-bold hover:bg-primary hover:text-white transition-all shadow-xl group"
            >
                <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                <span>Regresar</span>
            </Link>

            <main className="flex-1 flex flex-col items-center justify-start pt-32 pb-24 px-6 relative z-10">

                {/* ── Hero ── */}
                <div className="text-center max-w-4xl mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-500 text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Blueprint · Plataforma de Arrendamiento MVP
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 dark:text-white">
                        Gestiona tus rentas<br />
                        <span className="text-primary">y atrae nuevos inquilinos desde una sola app</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Un MVP que unifica el panel privado del arrendador (residentes, pagos, contratos) con el portal público de oferta de departamentos. Del mostrador analógico a la gestión digital.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {metrics.map(m => (
                            <div key={m.label} className="flex flex-col items-center px-6 py-3 rounded-2xl bg-indigo-500/5 border border-indigo-500/15 min-w-[120px]">
                                <span className="text-2xl font-black text-indigo-500">{m.value}</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-0.5">{m.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Interactive Mockup with Tabs ── */}
                <div className="relative w-full max-w-5xl mb-24">
                    <div className="absolute -inset-10 bg-indigo-500/10 rounded-[4rem] blur-3xl opacity-40 pointer-events-none"></div>

                    {/* Tab switcher */}
                    <div className="flex gap-2 justify-center mb-4 relative z-10 flex-wrap">
                        {['Panel Admin', 'Vista Residente', 'Portal Público'].map((tab, i) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(i)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide border transition-all ${activeTab === i ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'border-white/10 text-slate-500 hover:text-white hover:border-white/20 bg-slate-900/60'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="relative rounded-xl border-[8px] border-slate-800 dark:border-slate-900 bg-slate-900 shadow-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(99,102,241,0.35)]">
                        {/* Browser chrome */}
                        <div className="h-8 w-full bg-slate-800 flex items-center px-4 gap-3">
                            <div className="flex gap-1.5">
                                <div className="size-2.5 rounded-full bg-red-500/60"></div>
                                <div className="size-2.5 rounded-full bg-amber-500/60"></div>
                                <div className="size-2.5 rounded-full bg-emerald-500/60"></div>
                            </div>
                            <div className="flex-1 mx-4 h-5 bg-slate-700 rounded-full flex items-center px-3 gap-2">
                                <span className="material-symbols-outlined text-slate-500 text-xs">lock</span>
                                <span className="text-[10px] text-slate-500 font-mono">
                                    {activeTab === 0 ? 'app.misrentas.mx/admin' : activeTab === 1 ? 'app.misrentas.mx/mi-cuenta' : 'misrentas.mx'}
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                                </span>
                                {activeTab === 0 ? '2 alertas pendientes' : activeTab === 1 ? 'Sesión activa' : '3 solicitudes nuevas'}
                            </div>
                        </div>

                        {/* ── Tab 0: Admin Panel ── */}
                        {activeTab === 0 && (
                            <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden flex">
                                {/* Sidebar */}
                                <div className="w-14 bg-slate-900 border-r border-white/5 flex flex-col items-center py-4 gap-4">
                                    {['dashboard', 'apartment', 'people', 'payments', 'notifications', 'bar_chart'].map((ic, i) => (
                                        <span key={ic} className={`material-symbols-outlined text-base ${i === 0 ? 'text-indigo-400' : 'text-slate-600'}`}>{ic}</span>
                                    ))}
                                </div>
                                {/* Main content */}
                                <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-white text-sm font-bold">Panel de Administración</div>
                                            <div className="text-slate-500 text-xs">5 unidades · 3 ocupadas</div>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
                                            <span className="material-symbols-outlined text-amber-400 text-sm">warning</span>
                                            <span className="text-amber-400 text-[10px] font-bold">1 pago vencido</span>
                                        </div>
                                    </div>
                                    {/* Stats row */}
                                    <div className="grid grid-cols-4 gap-2">
                                        {[
                                            { label: 'Ocupación', value: '60%', color: '#10b981', icon: 'home_work' },
                                            { label: 'Ingresos / mes', value: '$11,900', color: '#6366f1', icon: 'attach_money' },
                                            { label: 'Vencen pronto', value: '2', color: '#f59e0b', icon: 'schedule' },
                                            { label: 'Solicitudes', value: '3 nuevas', color: '#3b82f6', icon: 'contact_mail' },
                                        ].map(s => (
                                            <div key={s.label} className="bg-slate-900 border border-white/5 rounded-lg p-3 acs-stat-card" data-color={s.color}>
                                                <span className="material-symbols-outlined acs-stat-icon">{s.icon}</span>
                                                <div className="text-white text-sm font-black mt-1">{s.value}</div>
                                                <div className="text-slate-600 text-[8px] uppercase tracking-wide">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Units table */}
                                    <div className="flex-1 bg-slate-900 border border-white/5 rounded-lg overflow-hidden">
                                        <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between">
                                            <span className="text-slate-400 text-[10px] uppercase tracking-wider font-bold">Unidades</span>
                                            <span className="text-primary text-[10px] font-bold cursor-pointer">+ Agregar unidad</span>
                                        </div>
                                        {units.slice(0, 4).map(u => (
                                            <div key={u.id} className="flex items-center gap-3 px-4 py-2 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all">
                                                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                                    <span className="material-symbols-outlined text-indigo-400 text-sm">apartment</span>
                                                </div>
                                                <div className="flex-1 min-w-0 grid grid-cols-4 gap-2 items-center">
                                                    <div>
                                                        <div className="text-white text-[9px] font-bold">{u.id}</div>
                                                        <div className="text-slate-500 text-[8px]">{u.type}</div>
                                                    </div>
                                                    <div className="text-slate-400 text-[9px]">{u.tenant}</div>
                                                    <div className="text-white text-[9px] font-bold">${u.rent.toLocaleString()}/mes</div>
                                                    <div className="acs-unit-status" data-status={u.status}>
                                                        <span className="relative flex h-1 w-1">
                                                            <span className="animate-ping acs-status-dot-pulse"></span>
                                                            <span className="acs-status-dot"></span>
                                                        </span>
                                                        {u.status}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── Tab 1: Resident View ── */}
                        {activeTab === 1 && (
                            <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden flex flex-col">
                                {/* Top bar */}
                                <div className="px-6 py-3 bg-slate-900 border-b border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-indigo-400 text-base">person</span>
                                        </div>
                                        <div>
                                            <div className="text-white text-xs font-bold">Sofía Ramírez</div>
                                            <div className="text-slate-500 text-[9px]">Unidad B-201 · Cuarto Estudiantes</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
                                        <span className="material-symbols-outlined text-amber-400 text-sm">warning</span>
                                        <span className="text-amber-400 text-[9px] font-bold">Pago pendiente</span>
                                    </div>
                                </div>
                                <div className="flex-1 flex p-4 gap-4">
                                    {/* Left: contract info */}
                                    <div className="flex-1 flex flex-col gap-3">
                                        <div className="bg-slate-900 border border-white/5 rounded-lg p-4">
                                            <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider mb-3">Mi contrato</div>
                                            <div className="grid grid-cols-2 gap-3">
                                                {[
                                                    { label: 'Inicio contrato', value: '01 Sep 2025' },
                                                    { label: 'Vence', value: '01 Sep 2026' },
                                                    { label: 'Renta mensual', value: '$3,200' },
                                                    { label: 'Depósito pagado', value: '$6,400' },
                                                ].map(item => (
                                                    <div key={item.label} className="bg-slate-800/50 rounded-lg p-2">
                                                        <div className="text-slate-500 text-[8px] uppercase tracking-wide">{item.label}</div>
                                                        <div className="text-white text-[11px] font-bold mt-0.5">{item.value}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex-1 bg-slate-900 border border-white/5 rounded-lg p-4">
                                            <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider mb-3">Historial de pagos</div>
                                            <div className="space-y-2">
                                                {[
                                                    { month: 'Febrero 2026', amount: '$3,200', status: 'Pendiente', color: '#f59e0b' },
                                                    { month: 'Enero 2026', amount: '$3,200', status: 'Pagado', color: '#10b981' },
                                                    { month: 'Diciembre 2025', amount: '$3,200', status: 'Pagado', color: '#10b981' },
                                                ].map(p => (
                                                    <div key={p.month} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                                                        <div className="text-slate-400 text-[9px]">{p.month}</div>
                                                        <div className="text-white text-[9px] font-bold">{p.amount}</div>
                                                        <div className="acs-payment-status" data-status={p.status}>{p.status}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Right: CTA + contact */}
                                    <div className="w-44 flex flex-col gap-3">
                                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-center">
                                            <span className="material-symbols-outlined text-amber-400 text-2xl">receipt_long</span>
                                            <div className="text-amber-400 text-xs font-bold mt-2">Pago de Febrero</div>
                                            <div className="text-white text-lg font-black">$3,200</div>
                                            <div className="text-amber-400 text-[9px] mb-3">Vence: 01 Mar</div>
                                            <div className="w-full py-2 bg-amber-500 text-white text-[9px] font-bold rounded-lg text-center">Registrar pago</div>
                                        </div>
                                        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-3">
                                            <div className="text-indigo-400 text-[9px] font-bold mb-2 uppercase tracking-wide">Contactar arrendador</div>
                                            <div className="flex items-center gap-2 py-1.5 bg-slate-800 rounded-lg px-2 cursor-pointer">
                                                <span className="material-symbols-outlined text-emerald-400 text-sm">chat</span>
                                                <span className="text-white text-[9px]">WhatsApp</span>
                                            </div>
                                            <div className="flex items-center gap-2 py-1.5 mt-1 bg-slate-800 rounded-lg px-2 cursor-pointer">
                                                <span className="material-symbols-outlined text-slate-400 text-sm">mail</span>
                                                <span className="text-white text-[9px]">Email</span>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900 border border-white/5 rounded-lg p-3 text-center cursor-pointer hover:border-indigo-500/30 transition-all">
                                            <span className="material-symbols-outlined text-indigo-400 text-xl">description</span>
                                            <div className="text-slate-400 text-[9px] mt-1">Descargar contrato PDF</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── Tab 2: Public portal ── */}
                        {activeTab === 2 && (
                            <div className="aspect-[16/9] w-full bg-slate-900 overflow-hidden flex flex-col">
                                {/* Header */}
                                <div className="px-6 py-2.5 flex items-center justify-between border-b border-white/5 bg-slate-900">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-white text-sm">apartment</span>
                                        </div>
                                        <span className="text-white text-sm font-black">Rentas Cedros</span>
                                    </div>
                                    <div className="hidden md:flex items-center gap-5">
                                        {['Inicio', 'Disponibles', 'Nosotros', 'Contacto'].map(it => (
                                            <span key={it} className={`text-[10px] font-medium ${it === 'Disponibles' ? 'text-indigo-400' : 'text-slate-400'}`}>{it}</span>
                                        ))}
                                        <div className="px-3 py-1 bg-indigo-500 text-white rounded-full text-[9px] font-bold">Solicitar visita</div>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="flex-1 flex p-4 gap-4">
                                    {/* Listings */}
                                    <div className="flex-1 flex flex-col gap-3">
                                        <div className="flex items-center justify-between">
                                            <div className="text-white text-sm font-bold">Unidades disponibles <span className="text-indigo-400 text-xs">(2)</span></div>
                                            <div className="flex gap-2">
                                                {['Precio ↓', 'Tipo', 'Zona'].map(f => (
                                                    <div key={f} className="px-2 py-0.5 border border-white/10 rounded-full text-[8px] text-slate-500 cursor-pointer hover:border-indigo-500/40 transition-all">{f}</div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-3 flex-1">
                                            {listings.map(l => (
                                                <div key={l.title} className="acs-listing-card group" data-color={l.color}>
                                                    <div className="acs-listing-img-placeholder">
                                                        <span className="material-symbols-outlined acs-listing-icon">apartment</span>
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="text-white text-[9px] font-bold leading-tight mb-1">{l.title}</div>
                                                        <div className="flex items-center justify-between mb-2">
                                                            <div className="acs-listing-price">${l.price.toLocaleString()}<span className="text-[8px] text-slate-500 font-normal">/mes</span></div>
                                                            <div className="acs-listing-badge">{l.type}</div>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-slate-500 text-[8px]">
                                                            <span>{l.area}</span>
                                                            <span>·</span>
                                                            <span>{l.floor}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Requests panel */}
                                    <div className="w-44 flex flex-col gap-3">
                                        <div className="bg-slate-800 border border-white/5 rounded-lg p-3">
                                            <div className="text-indigo-400 text-[9px] font-bold uppercase tracking-wide mb-2">Solicitudes recientes</div>
                                            {requests.map(r => (
                                                <div key={r.name} className="py-2 border-b border-white/5 last:border-0">
                                                    <div className="flex items-center justify-between mb-0.5">
                                                        <div className="text-white text-[9px] font-bold">{r.name}</div>
                                                        <div className="acs-request-status" data-color={r.color}>{r.status}</div>
                                                    </div>
                                                    <div className="text-slate-500 text-[8px]">{r.unit} · {r.date}</div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* Map */}
                                        <div className="flex-1 bg-slate-800 border border-white/5 rounded-lg flex flex-col items-center justify-center gap-1">
                                            <span className="material-symbols-outlined text-indigo-400 text-xl">location_on</span>
                                            <div className="text-slate-400 text-[9px] text-center font-medium">Col. Los Cedros<br />Ciudad de México</div>
                                            <div className="px-2 py-1 mt-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-[8px] text-indigo-400 font-bold cursor-pointer">Ver en Maps →</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="mx-auto w-[108%] h-3 bg-slate-800 rounded-b-xl -mt-1 shadow-xl"></div>
                </div>

                {/* ── 3 Modules ── */}
                <div className="w-full max-w-7xl mb-20">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">layers</span>
                            Arquitectura del MVP
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                            Un sistema. Tres frentes.
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm">
                            Gestión interna del arrendador, portal público de captación y sistema de solicitudes atomizado en un solo MVP.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {modules.map(mod => (
                            <div
                                key={mod.id}
                                className="glass-card p-8 rounded-2xl relative group hover:border-primary/40 transition-all hover:shadow-[0_0_40px_-10px_rgba(13,89,242,0.3)] bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10 acs-module-card"
                                data-type={mod.id}
                            >
                                <div className="acs-module-bg-text">{mod.label}</div>
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="acs-module-icon-wrapper">
                                        <span className="material-symbols-outlined acs-module-icon">{mod.icon}</span>
                                    </div>
                                    <div>
                                        <div className="acs-module-badge">{mod.label}</div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{mod.title}</h3>
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5 text-sm">{mod.desc}</p>
                                <ul className="space-y-2.5">
                                    {mod.features.map(f => (
                                        <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                            <span className="material-symbols-outlined acs-feature-icon">check_circle</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Flujos ── */}
                <div className="w-full max-w-7xl mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">route</span>
                            Flujos de uso
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground">Dos actores. <span className="text-gradient">Un solo sistema.</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {flows.map(flow => (
                            <div
                                key={flow.title}
                                className="glass-card p-7 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10 acs-flow-section"
                                data-flow={flow.color}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="acs-flow-icon-wrapper">
                                        <span className="material-symbols-outlined acs-flow-icon">{flow.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">{flow.title}</h3>
                                </div>
                                <div className="relative">
                                    <div className="acs-flow-line"></div>
                                    <div className="space-y-4">
                                        {flow.steps.map((step, i) => (
                                            <div key={step.text} className="flex items-center gap-4 pl-2">
                                                <div className="acs-step-icon-wrapper">
                                                    <span className="material-symbols-outlined acs-step-icon">{step.icon}</span>
                                                </div>
                                                <div className="flex-1 flex items-center justify-between">
                                                    <span className="text-sm text-slate-700 dark:text-slate-300">{step.text}</span>
                                                    <span className="acs-step-number">0{i + 1}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Challenge / Architecture / Impact ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mb-20">
                    <div className="glass-card p-8 rounded-2xl relative group hover:border-primary/40 transition-all hover:shadow-[0_0_40px_-10px_rgba(13,89,242,0.3)] bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10">
                        <div className="absolute top-0 right-0 p-6 opacity-10"><span className="text-7xl font-bold text-slate-900 dark:text-white">01</span></div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-amber-500/10 rounded-lg"><span className="material-symbols-outlined text-amber-500 text-3xl">warning</span></div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">El Reto</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Arrendador con 10+ unidades gestionadas en WhatsApp, hojas de Excel y sin presencia digital para atraer nuevos inquilinos.
                        </p>
                        <ul className="space-y-3">
                            {['Control de pagos en Excel sin trazabilidad', 'Sin portal para mostrar unidades disponibles', 'Alertas de vencimiento manuales por WhatsApp', 'Solicitudes de renta llegaban sin orden ni seguimiento'].map(it => (
                                <li key={it} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-amber-500 text-sm mt-0.5">error</span>{it}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass-card p-8 rounded-2xl relative group hover:border-primary/40 transition-all hover:shadow-[0_0_40px_-10px_rgba(13,89,242,0.3)] bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10">
                        <div className="absolute top-0 right-0 p-6 opacity-10"><span className="text-7xl font-bold text-slate-900 dark:text-white">02</span></div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-primary/10 rounded-lg"><span className="material-symbols-outlined text-primary text-3xl">developer_board</span></div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">La Arquitectura</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Panel admin privado con JWT, portal público con SSR para SEO, y módulo de solicitudes con notificaciones por email en tiempo real.
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { label: 'Admin', value: 'JWT + RBAC', icon: 'manage_accounts' },
                                { label: 'Portal', value: 'SSR + SEO', icon: 'language' },
                                { label: 'Alertas', value: 'Email + WS', icon: 'notifications_active' },
                                { label: 'DB', value: 'PostgreSQL', icon: 'database' },
                            ].map(item => (
                                <div key={item.label} className="bg-primary/10 rounded-xl p-3 border border-primary/20 hover:bg-primary/20 transition-all">
                                    <div className="text-primary text-[10px] font-bold uppercase mb-1 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs">{item.icon}</span>{item.label}
                                    </div>
                                    <div className="text-xs font-bold dark:text-white">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-2xl relative group hover:border-primary/40 transition-all hover:shadow-[0_0_40px_-10px_rgba(13,89,242,0.3)] bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10">
                        <div className="absolute top-0 right-0 p-6 opacity-10"><span className="text-7xl font-bold text-slate-900 dark:text-white">03</span></div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-emerald-500/10 rounded-lg"><span className="material-symbols-outlined text-emerald-500 text-3xl">insights</span></div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">El Impacto</h3>
                        </div>
                        <div className="space-y-5">
                            {[
                                { value: '↓ 95%', label: 'tiempo en gestión de pagos' },
                                { value: '+40%', label: 'solicitudes de renta nuevas vía portal' },
                                { value: '0', label: 'pagos vencidos sin aviso' },
                            ].map(stat => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-black text-primary">{stat.value}</div>
                                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
                                </div>
                            ))}
                            <div className="flex items-center gap-3 py-2 px-4 bg-emerald-500/10 rounded-full w-fit">
                                <span className="text-emerald-500 font-bold text-sm">Sistema activo</span>
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Tech Stack ── */}
                <div className="w-full max-w-5xl mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">terminal</span>
                            Stack Tecnológico
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground">Construido para <span className="text-gradient">escalar con el negocio</span></h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {techStack.map(tech => (
                            <div key={tech.name} className="glass-card group flex flex-col items-center text-center p-5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_rgba(13,89,242,0.3)] transition-all">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-all">
                                    <span className="material-symbols-outlined text-primary">{tech.icon}</span>
                                </div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{tech.category}</div>
                                <div className="font-bold text-slate-900 dark:text-white text-sm">{tech.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Roadmap ── */}
                <div className="w-full max-w-7xl mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">trending_up</span>
                            Escalabilidad futura
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground">El MVP valida. <span className="text-gradient">La plataforma crece.</span></h2>
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
                    <div className="p-1 bg-gradient-to-r from-indigo-500 via-primary to-indigo-500 rounded-3xl">
                        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[1.3rem] flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">¿Eres arrendador con más de 3 unidades?</h4>
                                <p className="text-slate-500">Agenda tu diagnóstico gratuito y diseñamos tu plataforma en 48 hrs.</p>
                            </div>
                            <Link to="/#contacto" className="whitespace-nowrap px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-primary/30 flex items-center gap-3">
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
                        <span className="h-4 w-px bg-slate-300 dark:bg-slate-800"></span>
                        <span>Project: Arrendador-MVP-V1</span>
                    </div>
                    <div className="flex items-center gap-8">
                        <button className="hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="material-symbols-outlined text-lg group-hover:-translate-y-0.5 transition-transform">description</span> Descargar PDF
                        </button>
                        <button className="hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">share</span> Compartir Blueprint
                        </button>
                    </div>
                </footer>
            </main>

            {/* ── Sidebar decoratives ── */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 pointer-events-none opacity-20">
                <div className="text-xs rotate-90 origin-left whitespace-nowrap tracking-[0.5em] font-bold uppercase dark:text-white">Arrendamiento Digital · MVP Activo</div>
                <div className="h-24 w-px bg-indigo-500 mx-auto"></div>
            </div>
            <div className="fixed right-6 bottom-12 hidden lg:flex flex-col items-end gap-2 pointer-events-none opacity-20">
                <div className="text-[10px] font-mono dark:text-white">RESIDENTES · PAGOS · PORTAL</div>
                <div className="text-[10px] font-mono dark:text-white">Build: Arrendador-Alpha-V1</div>
            </div>
        </div>
    );
};

export default ArrendadorCaseStudy;
