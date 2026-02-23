import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NominaCaseStudy.css';

const NominaCaseStudy = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        if (isDarkMode) { document.documentElement.classList.add('dark'); localStorage.setItem('theme', 'dark'); }
        else { document.documentElement.classList.remove('dark'); localStorage.setItem('theme', 'light'); }
    }, [isDarkMode]);

    const modules = [
        {
            id: 'empleados', label: 'Empleados', icon: 'badge', color: '#6366f1',
            colorBg: 'rgba(99,102,241,0.1)', colorBorder: 'rgba(99,102,241,0.3)',
            title: 'Gestión de Empleados',
            desc: 'Registro completo de la plantilla: contratos, estado laboral y roles de acceso diferenciados por perfil.',
            features: ['Alta con datos básicos: puesto, ingreso, CURP', 'Estado laboral: activo / baja / vacaciones', 'Roles: Admin RRHH y Empleado', 'Historial de cambios por empleado', 'Descarga de expediente en PDF'],
        },
        {
            id: 'nomina', label: 'Nómina', icon: 'payments', color: '#10b981',
            colorBg: 'rgba(16,185,129,0.1)', colorBorder: 'rgba(16,185,129,0.3)',
            title: 'Nómina Automatizada',
            desc: 'Cálculo automático de pago mensual/quincenal considerando salario base, horas extra y descuentos activos.',
            features: ['Salario base + horas extras', 'Generación automática de nómina', 'Descuentos de préstamos integrados', 'Historial de pagos por empleado', 'Exportar en PDF y CSV'],
        },
        {
            id: 'prestamos', label: 'Préstamos', icon: 'account_balance_wallet', color: '#f59e0b',
            colorBg: 'rgba(245,158,11,0.1)', colorBorder: 'rgba(245,158,11,0.3)',
            title: 'Préstamos y Adelantos',
            desc: 'El empleado solicita desde su portal. El admin aprueba y el descuento se aplica automáticamente en nómina.',
            features: ['Solicitud en línea por el empleado', 'Aprobación / rechazo con un click', 'Descuento automático hasta liquidar', 'Estado: Pendiente → Activo → Liquidado', 'Balance pendiente visible en todo momento'],
        },
        {
            id: 'portal', label: 'Portal Público', icon: 'storefront', color: '#3b82f6',
            colorBg: 'rgba(59,130,246,0.1)', colorBorder: 'rgba(59,130,246,0.3)',
            title: 'Página de Identidad',
            desc: 'Presencia digital de la empresa: misión, valores y sección de reclutamiento para atraer talento.',
            features: ['Branding con logo, colores y tipografía', 'Sección "Trabaja con nosotros"', 'Misión, visión y valores institucionales', 'Formulario de postulación en línea', 'Optimizada para SEO'],
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
        { name: 'jsPDF / CSV', category: 'Exportación', icon: 'description' },
    ];

    const flows = [
        {
            title: 'Flujo del Administrador', color: '#6366f1', icon: 'manage_accounts',
            steps: [
                { icon: 'login', text: 'Admin inicia sesión' },
                { icon: 'person_add', text: 'Registra empleado y salario' },
                { icon: 'calculate', text: 'Sistema genera nómina automáticamente' },
                { icon: 'task_alt', text: 'Aprueba préstamos pendientes' },
                { icon: 'picture_as_pdf', text: 'Descarga reporte de nómina' },
            ],
        },
        {
            title: 'Flujo del Empleado', color: '#10b981', icon: 'person',
            steps: [
                { icon: 'login', text: 'Empleado accede a su portal' },
                { icon: 'receipt_long', text: 'Consulta su nómina y recibos' },
                { icon: 'request_quote', text: 'Solicita préstamo o adelanto' },
                { icon: 'notifications_active', text: 'Recibe notificación de aprobación' },
                { icon: 'account_balance', text: 'Descuento aplicado en siguiente pago' },
            ],
        },
    ];

    const roadmap = [
        { icon: 'send_money', title: 'Pagos vía SPEI / PayPal', desc: 'Transferencias directas a empleados desde la plataforma, con MercadoPago y PayPal.', version: 'v2.0' },
        { icon: 'event_available', title: 'Vacaciones y ausencias', desc: 'Solicitud y aprobación de vacaciones con calendario integrado y saldo de días.', version: 'v2.1' },
        { icon: 'star', title: 'Evaluaciones de desempeño', desc: 'Módulo de evaluación semestral con indicadores por puesto y área.', version: 'v3.0' },
        { icon: 'corporate_fare', title: 'Multi-empresa', desc: 'Varias empresas gestionando su nómina e inventario de empleados en la misma plataforma.', version: 'v3.1' },
        { icon: 'receipt', title: 'Timbrado SAT (CFDI 4.0)', desc: 'Generación de recibos de nómina digitales con validez fiscal para el SAT de México.', version: 'v4.0' },
        { icon: 'school', title: 'Capacitaciones', desc: 'Módulo de cursos y capacitaciones internas con seguimiento de avance por empleado.', version: 'v4.1' },
    ];

    const metrics = [
        { value: '4 en 1', label: 'Empleados + Nómina + Préstamos + Web' },
        { value: '10 sem', label: 'Desarrollo MVP' },
        { value: '0 Excel', label: 'Gestión 100% digital' },
        { value: '∞', label: 'Empleados escalable' },
    ];

    const employees = [
        { name: 'Ana García', puesto: 'Contadora', salario: 18500, status: 'Activo', prestamo: true },
        { name: 'Luis Martínez', puesto: 'Operador', salario: 12000, status: 'Activo', prestamo: false },
        { name: 'María López', puesto: 'Vendedora', salario: 10500, status: 'Vacaciones', prestamo: false },
        { name: 'Carlos Pérez', puesto: 'Almacenista', salario: 9800, status: 'Activo', prestamo: true },
    ];


    const tabs = ['Panel Admin', 'Portal Empleado', 'Nómina', 'Página Pública'];
    const tabUrls = ['app.minomina.mx/admin', 'app.minomina.mx/mi-cuenta', 'app.minomina.mx/nomina', 'minomina.mx'];
    const tabBadges = ['3 solicitudes', 'Mi nómina', 'Período activo', 'Online'];

    return (
        <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden blueprint-grid bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300">

            {/* Nav */}
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
                            <span className="material-symbols-outlined dark:hidden text-slate-600 group-hover:text-primary">dark_mode</span>
                            <span className="material-symbols-outlined hidden dark:block text-slate-400 group-hover:text-primary">light_mode</span>
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

            <main className="flex-1 flex flex-col items-center pt-32 pb-24 px-6 relative z-10">

                {/* Hero */}
                <div className="text-center max-w-4xl mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
                        Blueprint · RRHH y Nómina MVP
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 dark:text-white">
                        Del Excel a la nómina digital:<br />
                        <span className="text-primary">RRHH escalable desde semana 1</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        MVP que reemplaza Excel y libretas: gestión de empleados, nómina automática, préstamos con descuento integrado y portal de identidad empresarial.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {metrics.map(m => (
                            <div key={m.label} className="flex flex-col items-center px-6 py-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/15 min-w-[130px]">
                                <span className="text-2xl font-black text-emerald-500">{m.value}</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-0.5 text-center">{m.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mockup */}
                <div className="relative w-full max-w-5xl mb-24">
                    <div className="absolute -inset-10 bg-emerald-500/10 rounded-[4rem] blur-3xl opacity-40 pointer-events-none"></div>
                    <div className="flex gap-2 justify-center mb-4 relative z-10 flex-wrap">
                        {tabs.map((tab, i) => (
                            <button key={tab} onClick={() => setActiveTab(i)} className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide border transition-all ${activeTab === i ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'border-white/10 text-slate-500 hover:text-white hover:border-white/20 bg-slate-900/60'}`}>{tab}</button>
                        ))}
                    </div>

                    <div className="relative rounded-xl border-[8px] border-slate-800 bg-slate-900 shadow-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]">
                        {/* Chrome */}
                        <div className="h-8 w-full bg-slate-800 flex items-center px-4 gap-3">
                            <div className="flex gap-1.5">
                                <div className="size-2.5 rounded-full bg-red-500/60"></div>
                                <div className="size-2.5 rounded-full bg-amber-500/60"></div>
                                <div className="size-2.5 rounded-full bg-emerald-500/60"></div>
                            </div>
                            <div className="flex-1 mx-4 h-5 bg-slate-700 rounded-full flex items-center px-3 gap-2">
                                <span className="material-symbols-outlined text-slate-500 text-xs">lock</span>
                                <span className="text-[10px] text-slate-500 font-mono">{tabUrls[activeTab]}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold">
                                <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span></span>
                                {tabBadges[activeTab]}
                            </div>
                        </div>

                        {/* Tab 0: Admin Panel */}
                        {activeTab === 0 && (
                            <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden flex">
                                <div className="w-14 bg-slate-900 border-r border-white/5 flex flex-col items-center py-4 gap-4">
                                    {['dashboard', 'badge', 'payments', 'account_balance_wallet', 'bar_chart'].map((ic, i) => (
                                        <span key={ic} className={`material-symbols-outlined text-base ${i === 0 ? 'text-emerald-400' : 'text-slate-600'}`}>{ic}</span>
                                    ))}
                                </div>
                                <div className="flex-1 p-4 flex flex-col gap-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-white text-sm font-bold">Panel de RRHH</div>
                                            <div className="text-slate-500 text-xs">4 empleados activos · Feb 2026</div>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
                                            <span className="material-symbols-outlined text-amber-400 text-sm">pending_actions</span>
                                            <span className="text-amber-400 text-[10px] font-bold">2 préstamos pendientes</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2">
                                        {[{ label: 'Empleados', value: '12', color: '#6366f1', icon: 'badge' }, { label: 'Nómina mes', value: '$82,400', color: '#10b981', icon: 'payments' }, { label: 'Préstamos activos', value: '3', color: '#f59e0b', icon: 'account_balance_wallet' }, { label: 'Postulaciones', value: '5 nuevas', color: '#3b82f6', icon: 'work' }].map(s => (
                                            <div key={s.label} className="bg-slate-900 border border-white/5 rounded-lg p-3 ncs-stat-card" data-color={s.color === '#6366f1' ? 'indigo' : s.color === '#10b981' ? 'emerald' : s.color === '#f59e0b' ? 'amber' : 'blue'}>
                                                <span className="material-symbols-outlined ncs-stat-icon">{s.icon}</span>
                                                <div className="text-white text-sm font-black mt-1">{s.value}</div>
                                                <div className="text-slate-600 text-[8px] uppercase tracking-wide">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex-1 bg-slate-900 border border-white/5 rounded-lg overflow-hidden">
                                        <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between">
                                            <span className="text-slate-400 text-[10px] uppercase tracking-wider font-bold">Empleados</span>
                                            <span className="text-primary text-[10px] font-bold cursor-pointer">+ Agregar empleado</span>
                                        </div>
                                        {employees.map(e => (
                                            <div key={e.name} className="flex items-center gap-3 px-4 py-2 border-b border-white/5 last:border-0 hover:bg-white/5">
                                                <div className="w-7 h-7 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                                                    <span className="material-symbols-outlined text-indigo-400 text-sm">person</span>
                                                </div>
                                                <div className="flex-1 grid grid-cols-4 gap-2 items-center">
                                                    <div>
                                                        <div className="text-white text-[9px] font-bold">{e.name}</div>
                                                        <div className="text-slate-500 text-[8px]">{e.puesto}</div>
                                                    </div>
                                                    <div className="text-white text-[9px] font-bold">${e.salario.toLocaleString()}/mes</div>
                                                    <div className="ncs-status-badge" data-status={e.status}>
                                                        <span className="relative flex h-1 w-1">
                                                            <span className="animate-ping ncs-status-dot-pulse"></span>
                                                            <span className="ncs-status-dot"></span>
                                                        </span>
                                                        {e.status}
                                                    </div>
                                                    {e.prestamo && <div className="flex items-center gap-1 text-amber-400 text-[8px]"><span className="material-symbols-outlined text-xs">account_balance_wallet</span>Préstamo activo</div>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tab 1: Employee Portal */}
                        {activeTab === 1 && (
                            <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden flex flex-col">
                                <div className="px-6 py-3 bg-slate-900 border-b border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-emerald-400 text-base">person</span>
                                        </div>
                                        <div>
                                            <div className="text-white text-xs font-bold">Ana García</div>
                                            <div className="text-slate-500 text-[9px]">Contadora · Activa desde Mar 2024</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-emerald-400 text-sm">check_circle</span>
                                            <span className="text-emerald-400 text-[9px] font-bold">Nómina al corriente</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex p-4 gap-4">
                                    <div className="flex-1 flex flex-col gap-3">
                                        <div className="bg-slate-900 border border-white/5 rounded-lg p-4">
                                            <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider mb-3">Mis datos</div>
                                            <div className="grid grid-cols-3 gap-3">
                                                {[{ label: 'Salario base', value: '$18,500/mes' }, { label: 'Fecha ingreso', value: '15 Mar 2024' }, { label: 'Préstamo activo', value: '$5,000 (resto)' }].map(item => (
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
                                                {[{ period: 'Febrero 2026', base: '$18,500', descuento: '-$1,000', neto: '$17,500', status: 'Pagado' }, { period: 'Enero 2026', base: '$18,500', descuento: '-$1,000', neto: '$17,500', status: 'Pagado' }, { period: 'Diciembre 2025', base: '$18,500', descuento: '-$1,000', neto: '$17,500', status: 'Pagado' }].map(p => (
                                                    <div key={p.period} className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0">
                                                        <div className="text-slate-400 text-[9px] flex-1">{p.period}</div>
                                                        <div className="text-slate-500 text-[8px]">{p.base}</div>
                                                        <div className="text-amber-400 text-[8px]">{p.descuento}</div>
                                                        <div className="text-white text-[9px] font-bold">{p.neto}</div>
                                                        <div className="text-emerald-400 text-[8px] font-bold">{p.status}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-44 flex flex-col gap-3">
                                        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
                                            <div className="text-indigo-400 text-[9px] font-bold uppercase tracking-wide mb-3">Solicitar préstamo</div>
                                            <div className="space-y-2 mb-3">
                                                {['$2,000', '$5,000', '$10,000'].map(amt => (
                                                    <div key={amt} className={`w-full py-1.5 rounded-lg text-[9px] font-bold text-center border cursor-pointer ${amt === '$5,000' ? 'bg-indigo-500 text-white border-indigo-500' : 'border-white/10 text-slate-400'}`}>{amt}</div>
                                                ))}
                                            </div>
                                            <div className="w-full py-2 bg-indigo-500 text-white text-[9px] font-bold rounded-lg text-center cursor-pointer">Solicitar préstamo</div>
                                        </div>
                                        <div className="bg-slate-900 border border-white/5 rounded-lg p-3 flex items-center gap-2 cursor-pointer hover:border-emerald-500/30 transition-all">
                                            <span className="material-symbols-outlined text-emerald-400">picture_as_pdf</span>
                                            <div>
                                                <div className="text-white text-[9px] font-bold">Recibo de nómina</div>
                                                <div className="text-slate-500 text-[8px]">Febrero 2026</div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900 border border-white/5 rounded-lg p-3 flex items-center gap-2 cursor-pointer hover:border-emerald-500/30 transition-all">
                                            <span className="material-symbols-outlined text-slate-400">description</span>
                                            <div>
                                                <div className="text-white text-[9px] font-bold">Mi contrato</div>
                                                <div className="text-slate-500 text-[8px]">Descargar PDF</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tab 2: Payroll */}
                        {activeTab === 2 && (
                            <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden flex flex-col">
                                <div className="px-5 py-3 bg-slate-900 border-b border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-emerald-400">payments</span>
                                        <div>
                                            <div className="text-white text-sm font-bold">Nómina — Febrero 2026</div>
                                            <div className="text-slate-500 text-xs">12 empleados · Total: $82,400</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="px-3 py-1.5 bg-slate-800 border border-white/10 rounded-lg text-[9px] text-slate-400 font-bold flex items-center gap-1 cursor-pointer">
                                            <span className="material-symbols-outlined text-xs">download</span>CSV
                                        </div>
                                        <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-[9px] text-emerald-400 font-bold flex items-center gap-1 cursor-pointer">
                                            <span className="material-symbols-outlined text-xs">picture_as_pdf</span>PDF
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex p-4 gap-4">
                                    <div className="flex-1 bg-slate-900 border border-white/5 rounded-lg overflow-hidden">
                                        <div className="grid grid-cols-6 px-4 py-2 border-b border-white/5 text-[8px] font-bold uppercase tracking-wider text-slate-500">
                                            <span className="col-span-2">Empleado</span><span>Salario base</span><span>Extras</span><span>Descuentos</span><span>Neto a pagar</span>
                                        </div>
                                        {[...employees, { name: 'Roberto Soto', puesto: 'Ventas', salario: 11000, status: 'Activo', prestamo: false }].slice(0, 5).map((e, i) => (
                                            <div key={e.name} className="grid grid-cols-6 px-4 py-2.5 border-b border-white/5 last:border-0 hover:bg-white/5 items-center">
                                                <div className="col-span-2 flex items-center gap-2">
                                                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                                                        <span className="material-symbols-outlined text-indigo-400 text-xs">person</span>
                                                    </div>
                                                    <div>
                                                        <div className="text-white text-[9px] font-bold">{e.name}</div>
                                                        <div className="text-slate-500 text-[7px]">{e.puesto}</div>
                                                    </div>
                                                </div>
                                                <div className="text-slate-300 text-[9px]">${e.salario.toLocaleString()}</div>
                                                <div className="text-emerald-400 text-[9px]">+${(i * 200).toLocaleString()}</div>
                                                <div className="text-amber-400 text-[9px]">{e.prestamo ? '-$1,000' : '—'}</div>
                                                <div className="text-white text-[9px] font-black">${(e.salario + i * 200 - (e.prestamo ? 1000 : 0)).toLocaleString()}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-40 flex flex-col gap-3">
                                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                                            <div className="text-emerald-400 text-[9px] font-bold uppercase tracking-wide mb-2">Resumen</div>
                                            <div className="text-white text-2xl font-black">$82,400</div>
                                            <div className="text-slate-500 text-[9px] mt-1">Total a pagar</div>
                                            <div className="mt-3 space-y-1">
                                                <div className="flex justify-between text-[8px]"><span className="text-slate-500">Salarios base:</span><span className="text-white">$78,300</span></div>
                                                <div className="flex justify-between text-[8px]"><span className="text-slate-500">Extras:</span><span className="text-emerald-400">+$5,800</span></div>
                                                <div className="flex justify-between text-[8px]"><span className="text-slate-500">Descuentos:</span><span className="text-amber-400">-$1,700</span></div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900 border border-white/5 rounded-lg p-3 text-center cursor-pointer hover:border-emerald-500/30 transition-all">
                                            <span className="material-symbols-outlined text-emerald-400 text-xl">send</span>
                                            <div className="text-white text-[9px] font-bold mt-1">Autorizar nómina</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tab 3: Public page */}
                        {activeTab === 3 && (
                            <div className="aspect-[16/9] w-full bg-slate-900 overflow-hidden flex flex-col">
                                <div className="px-6 py-2.5 flex items-center justify-between border-b border-white/5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-white text-sm">corporate_fare</span>
                                        </div>
                                        <span className="text-white text-sm font-black">Grupo Industrial Cedros</span>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        {['Inicio', 'Nosotros', 'Valores', 'Trabaja con nosotros'].map(it => (
                                            <span key={it} className={`text-[10px] font-medium ${it === 'Trabaja con nosotros' ? 'text-emerald-400' : 'text-slate-400'}`}>{it}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex-1 flex p-5 gap-5">
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="text-emerald-400 text-[9px] font-bold uppercase tracking-widest mb-2">Desde 2010 · Compromiso con nuestro equipo</div>
                                            <div className="text-white text-2xl font-black leading-tight mb-3">Somos más que<br />una empresa</div>
                                            <div className="text-slate-400 text-[11px] leading-relaxed mb-4 max-w-xs">Comprometidos con el desarrollo profesional de nuestro equipo. Más de 80 colaboradores en todo el país.</div>
                                            <div className="flex gap-2">
                                                <div className="px-4 py-2 bg-emerald-500 text-white text-[10px] font-bold rounded-xl cursor-pointer">Únete al equipo →</div>
                                                <div className="px-4 py-2 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold rounded-xl cursor-pointer">Conoce más</div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            {[{ value: '80+', label: 'Colaboradores' }, { value: '15 años', label: 'Experiencia' }, { value: '98%', label: 'Retención talento' }].map(s => (
                                                <div key={s.label} className="bg-slate-800/50 border border-white/5 rounded-lg p-3 text-center">
                                                    <div className="text-emerald-400 text-lg font-black">{s.value}</div>
                                                    <div className="text-slate-500 text-[8px] uppercase tracking-wide">{s.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-52 flex flex-col gap-3">
                                        <div className="bg-slate-800 border border-white/5 rounded-lg p-4">
                                            <div className="text-emerald-400 text-[9px] font-bold uppercase tracking-widest mb-3">Vacantes activas</div>
                                            {[{ puesto: 'Contador Sr.', tipo: 'Tiempo completo', color: '#6366f1' }, { puesto: 'Operador CNC', tipo: 'Turno diurno', color: '#10b981' }, { puesto: 'Vendedor Regional', tipo: 'Comisiones', color: '#f59e0b' }].map(v => (
                                                <div key={v.puesto} className="flex items-center gap-2 py-2 border-b border-white/5 last:border-0">
                                                    <div className="ncs-vacancy-icon-wrapper" data-color={v.color}>
                                                        <span className="material-symbols-outlined ncs-vacancy-icon">work</span>
                                                    </div>
                                                    <div>
                                                        <div className="text-white text-[9px] font-bold">{v.puesto}</div>
                                                        <div className="text-slate-500 text-[8px]">{v.tipo}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                                            <div className="text-emerald-400 text-[9px] font-bold mb-2">Postúlate ahora</div>
                                            <div className="space-y-2">
                                                <div className="h-6 bg-slate-800 rounded border border-white/10 flex items-center px-2"><span className="text-slate-600 text-[8px]">Nombre completo</span></div>
                                                <div className="h-6 bg-slate-800 rounded border border-white/10 flex items-center px-2"><span className="text-slate-600 text-[8px]">Email profesional</span></div>
                                                <div className="w-full py-1.5 bg-emerald-500 text-white text-[9px] font-bold rounded-lg text-center cursor-pointer">Enviar solicitud</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="mx-auto w-[108%] h-3 bg-slate-800 rounded-b-xl -mt-1 shadow-xl"></div>
                </div>

                {/* Modules */}
                <div className="w-full max-w-7xl mb-20">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">layers</span>Módulos del MVP
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Cuatro módulos. Un solo sistema.</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm">Cada módulo puede activarse según las necesidades de la empresa, sin rediseñar la plataforma.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {modules.map(mod => (
                            <div
                                key={mod.id}
                                className="glass-card p-6 rounded-2xl relative group hover:border-primary/40 transition-all hover:shadow-[0_0_40px_-10px_rgba(13,89,242,0.3)] bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10 ncs-module-card"
                                data-type={mod.id}
                            >
                                <div className="ncs-module-bg-text">{mod.label}</div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="ncs-module-icon-wrapper">
                                        <span className="material-symbols-outlined ncs-module-icon">{mod.icon}</span>
                                    </div>
                                    <div>
                                        <div className="ncs-module-badge">{mod.label}</div>
                                        <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{mod.title}</h3>
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-4">{mod.desc}</p>
                                <ul className="space-y-2">
                                    {mod.features.map(f => (
                                        <li key={f} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                                            <span className="material-symbols-outlined ncs-feature-icon">check_circle</span>{f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flows */}
                <div className="w-full max-w-7xl mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">route</span>Flujos de uso
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground">Dos actores. <span className="text-gradient">Una sola app.</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {flows.map(flow => (
                            <div
                                key={flow.title}
                                className="glass-card p-7 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10 ncs-flow-section"
                                data-flow={flow.title}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="ncs-flow-icon-wrapper">
                                        <span className="material-symbols-outlined ncs-flow-icon">{flow.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">{flow.title}</h3>
                                </div>
                                <div className="relative">
                                    <div className="ncs-flow-line"></div>
                                    <div className="space-y-4">
                                        {flow.steps.map((step, i) => (
                                            <div key={step.text} className="flex items-center gap-4 pl-2">
                                                <div className="ncs-step-icon-wrapper">
                                                    <span className="material-symbols-outlined ncs-step-icon">{step.icon}</span>
                                                </div>
                                                <div className="flex-1 flex items-center justify-between">
                                                    <span className="text-sm text-slate-700 dark:text-slate-300">{step.text}</span>
                                                    <span className="ncs-step-number">0{i + 1}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Challenge / Architecture / Impact */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mb-20">
                    {[
                        { num: '01', icon: 'warning', iconColor: 'amber', title: 'El Reto', body: 'Empresa con 20+ empleados gestionando nómina en Excel, préstamos anotados en libreta y sin portal de reclutamiento.', items: ['Nómina calculada a mano con errores frecuentes', 'Préstamos sin trazabilidad ni descuento automático', 'Sin historial digital de pagos por empleado', 'Sin presencia para atraer talento nuevo'] },
                        { num: '02', icon: 'developer_board', iconColor: 'primary', title: 'La Arquitectura', isGrid: true },
                        { num: '03', icon: 'insights', iconColor: 'emerald', title: 'El Impacto', isStats: true },
                    ].map(card => (
                        <div key={card.num} className="glass-card p-8 rounded-2xl relative group hover:border-primary/40 transition-all hover:shadow-[0_0_40px_-10px_rgba(13,89,242,0.3)] bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10">
                            <div className="absolute top-0 right-0 p-6 opacity-10"><span className="text-7xl font-bold text-slate-900 dark:text-white">{card.num}</span></div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-2 bg-${card.iconColor === 'primary' ? 'primary' : card.iconColor + '-500'}/10 rounded-lg`}>
                                    <span className={`material-symbols-outlined text-${card.iconColor === 'primary' ? 'primary' : card.iconColor + '-500'} text-3xl`}>{card.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{card.title}</h3>
                            </div>
                            {card.body && <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">{card.body}</p>}
                            {card.items && <ul className="space-y-3">{card.items.map(it => (<li key={it} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"><span className="material-symbols-outlined text-amber-500 text-sm mt-0.5">error</span>{it}</li>))}</ul>}
                            {card.isGrid && (
                                <>
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">API REST con roles JWT diferenciados por perfil, cálculo de nómina serverside y exportación de recibos en PDF.</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[{ label: 'Admin', value: 'JWT + RBAC', icon: 'manage_accounts' }, { label: 'Nómina', value: 'Cálculo server', icon: 'calculate' }, { label: 'Alertas', value: 'Email + WS', icon: 'notifications' }, { label: 'DB', value: 'PostgreSQL', icon: 'database' }].map(item => (
                                            <div key={item.label} className="bg-primary/10 rounded-xl p-3 border border-primary/20 hover:bg-primary/20 transition-all">
                                                <div className="text-primary text-[10px] font-bold uppercase mb-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">{item.icon}</span>{item.label}</div>
                                                <div className="text-xs font-bold dark:text-white">{item.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                            {card.isStats && (
                                <div className="space-y-5">
                                    {[{ value: '↓ 90%', label: 'errores en cálculo de nómina' }, { value: '0', label: 'préstamos sin seguimiento' }, { value: '+50%', label: 'postulaciones vía portal' }].map(s => (
                                        <div key={s.label}>
                                            <div className="text-3xl font-black text-primary">{s.value}</div>
                                            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{s.label}</div>
                                        </div>
                                    ))}
                                    <div className="flex items-center gap-3 py-2 px-4 bg-emerald-500/10 rounded-full w-fit">
                                        <span className="text-emerald-500 font-bold text-sm">Sistema activo</span>
                                        <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Tech Stack */}
                <div className="w-full max-w-5xl mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">terminal</span>Stack Tecnológico
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground">Construido para <span className="text-gradient">crecer con la empresa</span></h2>
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

                {/* Roadmap */}
                <div className="w-full max-w-7xl mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">trending_up</span>Escalabilidad futura
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground">El MVP es el inicio. <span className="text-gradient">La plataforma escala.</span></h2>
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

                {/* CTA */}
                <div className="w-full max-w-4xl">
                    <div className="p-1 bg-gradient-to-r from-emerald-500 via-primary to-emerald-500 rounded-3xl">
                        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[1.3rem] flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">¿Todavía gestionas nómina en Excel?</h4>
                                <p className="text-slate-500">Agenda tu diagnóstico gratuito y armamos el blueprint de tu plataforma en 48 hrs.</p>
                            </div>
                            <Link to="/#contacto" className="whitespace-nowrap px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-primary/30 flex items-center gap-3">
                                Agendar diagnóstico <span className="material-symbols-outlined">calendar_today</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <footer className="mt-24 pt-12 border-t border-primary/10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-slate-500 text-sm">
                    <div className="flex items-center gap-6">
                        <span>© 2026 FiberLink Labs Engineering</span>
                        <span className="h-4 w-px bg-slate-300 dark:bg-slate-800"></span>
                        <span>Project: RRHH-Nomina-MVP-V1</span>
                    </div>
                    <div className="flex items-center gap-8">
                        <button className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="material-symbols-outlined text-lg group-hover:-translate-y-0.5 transition-transform">description</span>Descargar PDF</button>
                        <button className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">share</span>Compartir Blueprint</button>
                    </div>
                </footer>
            </main>

            <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 pointer-events-none opacity-20">
                <div className="text-xs rotate-90 origin-left whitespace-nowrap tracking-[0.5em] font-bold uppercase dark:text-white">RRHH Digital · Nómina Activa</div>
                <div className="h-24 w-px bg-emerald-500 mx-auto"></div>
            </div>
            <div className="fixed right-6 bottom-12 hidden lg:flex flex-col items-end gap-2 pointer-events-none opacity-20">
                <div className="text-[10px] font-mono dark:text-white">EMPLEADOS · NÓMINA · PRÉSTAMOS</div>
                <div className="text-[10px] font-mono dark:text-white">Build: RRHH-Alpha-V1</div>
            </div>
        </div>
    );
};

export default NominaCaseStudy;
