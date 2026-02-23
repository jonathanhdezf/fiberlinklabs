import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './POSCaseStudy.css';

const POSCaseStudy = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const mvpFeatures = [
        {
            id: 'productos',
            icon: 'inventory_2',
            color: '#6366f1',
            colorBg: 'rgba(99,102,241,0.1)',
            colorBorder: 'rgba(99,102,241,0.25)',
            title: 'Gestión de Productos',
            desc: 'Alta, baja y edición de artículos con nombre, precio y stock en tiempo real.',
            bullets: ['Catálogo con imagen y código de barras', 'Categorías y subcategorías', 'Precio de compra vs. venta', 'Alertas de stock mínimo'],
        },
        {
            id: 'carrito',
            icon: 'shopping_cart',
            color: '#10b981',
            colorBg: 'rgba(16,185,129,0.1)',
            colorBorder: 'rgba(16,185,129,0.25)',
            title: 'Carrito / Venta Rápida',
            desc: 'Interfaz táctil optimizada para cajeros: búsqueda rápida y escaneo de barras.',
            bullets: ['Búsqueda por nombre o código', 'Descuentos por producto o total', 'Venta en un solo click', 'Compatible con lectores USB'],
        },
        {
            id: 'inventario',
            icon: 'warehouse',
            color: '#f59e0b',
            colorBg: 'rgba(245,158,11,0.1)',
            colorBorder: 'rgba(245,158,11,0.25)',
            title: 'Control de Inventario',
            desc: 'El stock se descuenta automáticamente al cerrar cada venta o al procesar devoluciones.',
            bullets: ['Actualización en tiempo real', 'Historial de movimientos', 'Ajuste manual con motivo', 'Exportar a Excel/CSV'],
        },
        {
            id: 'caja',
            icon: 'point_of_sale',
            color: '#3b82f6',
            colorBg: 'rgba(59,130,246,0.1)',
            colorBorder: 'rgba(59,130,246,0.25)',
            title: 'Registro de Caja',
            desc: 'Apertura y cierre de turno con fondo inicial, conteo de efectivo y conciliación automática.',
            bullets: ['Apertura/cierre de turno', 'Efectivo vs. tarjeta vs. transferencia', 'Diferencia de caja calculada', 'Corte imprimible en PDF'],
        },
        {
            id: 'usuarios',
            icon: 'manage_accounts',
            color: '#8b5cf6',
            colorBg: 'rgba(139,92,246,0.1)',
            colorBorder: 'rgba(139,92,246,0.25)',
            title: 'Usuarios & Roles',
            desc: 'Administrador con acceso total y cajero restringido al panel de ventas y caja.',
            bullets: ['Roles: Admin · Cajero · Gerente', 'Autenticación JWT segura', 'Log de acciones por usuario', 'Bloqueo por inactividad'],
        },
        {
            id: 'reportes',
            icon: 'bar_chart',
            color: '#ef4444',
            colorBg: 'rgba(239,68,68,0.1)',
            colorBorder: 'rgba(239,68,68,0.25)',
            title: 'Reportes Simples',
            desc: 'Ventas del día, semana o mes. Productos más vendidos y comparativa de períodos.',
            bullets: ['Ventas por día/semana/mes', 'Top 10 productos más vendidos', 'Histórico de cortes de caja', 'Descarga en PDF y CSV'],
        },
    ];

    const techStack = [
        { name: 'React + Vite', category: 'Frontend', icon: 'code' },
        { name: 'Node.js + Express', category: 'Backend', icon: 'dns' },
        { name: 'PostgreSQL', category: 'Base de datos', icon: 'database' },
        { name: 'Prisma ORM', category: 'Data layer', icon: 'layers' },
        { name: 'JWT + RBAC', category: 'Autenticación', icon: 'lock' },
        { name: 'Vercel + Railway', category: 'Hosting', icon: 'cloud_upload' },
        { name: 'Socket.io', category: 'Tiempo real', icon: 'sync' },
        { name: 'Recharts', category: 'Gráficas', icon: 'bar_chart' },
    ];

    const flow = [
        { step: '01', icon: 'login', title: 'Login del cajero', desc: 'Acceso con credenciales únicas. El rol determina las pantallas disponibles.' },
        { step: '02', icon: 'qr_code_scanner', title: 'Selección de producto', desc: 'Escaneo por código de barras o búsqueda por nombre. Agregado inmediato al carrito.' },
        { step: '03', icon: 'payments', title: 'Cobro', desc: 'Se registra el método de pago (efectivo, tarjeta, transferencia). El inventario se descuenta al instante.' },
        { step: '04', icon: 'receipt_long', title: 'Cierre de turno', desc: 'Reporte automático de ventas, diferencia de caja y corte listo para imprimir.' },
    ];

    const nextSteps = [
        { icon: 'qr_code_2', title: 'Lector de código de barras', desc: 'Integración con lectores USB/Bluetooth para agilizar el flujo de caja.' },
        { icon: 'print', title: 'Impresora de tickets', desc: 'Conexión con impresoras térmicas para tickets físicos de venta.' },
        { icon: 'local_shipping', title: 'Módulo de proveedores', desc: 'Órdenes de compra, recepción de mercancía y control de cuentas por pagar.' },
        { icon: 'analytics', title: 'Dashboard avanzado', desc: 'Métricas profundas: margen por producto, curva ABC, análisis de horas pico.' },
        { icon: 'store', title: 'Multi-sucursal', desc: 'Arquitectura preparada para escalar a múltiples tiendas con inventario centralizado.' },
        { icon: 'smartphone', title: 'App móvil', desc: 'Versión PWA o nativa para que el gerente revise métricas desde su celular.' },
    ];

    const metrics = [
        { value: '8 sem', label: 'Desarrollo MVP' },
        { value: '6', label: 'Módulos core' },
        { value: '3', label: 'Roles de usuario' },
        { value: '100%', label: 'Web-based (sin instalar)' },
    ];

    const cartItems = [
        { name: 'Agua 600ml', qty: 2, price: 14 },
        { name: 'Sabritas Original', qty: 1, price: 18 },
        { name: 'Coca-Cola 600ml', qty: 3, price: 19 },
        { name: 'Boing Mango', qty: 1, price: 12 },
    ];
    const cartTotal = cartItems.reduce((s, i) => s + i.qty * i.price, 0);

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
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center group"
                            aria-label="Toggle Theme"
                        >
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Blueprint · POS Web MVP
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 dark:text-white">
                        Punto de Venta Web:<br />
                        <span className="text-primary">Del mostrador a la nube en 8 semanas</span>
                    </h1>

                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Construimos un POS tipo OXXO como web app: sin instalaciones, con página de tienda para captar clientes locales y un panel completo para el negocio.
                    </p>

                    {/* Metric pills */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {metrics.map(m => (
                            <div key={m.label} className="flex flex-col items-center px-6 py-3 rounded-2xl bg-primary/5 border border-primary/15 min-w-[120px]">
                                <span className="text-2xl font-black text-primary">{m.value}</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-0.5">{m.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Browser Mockup (POS UI) ── */}
                <div className="relative w-full max-w-5xl mb-24 group">
                    <div className="absolute -inset-10 bg-primary/10 rounded-[4rem] blur-3xl opacity-50 pointer-events-none"></div>
                    <div className="relative rounded-xl border-[8px] border-slate-800 dark:border-slate-900 bg-slate-900 shadow-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(13,89,242,0.4)]">
                        {/* Browser chrome */}
                        <div className="h-8 w-full bg-slate-800 flex items-center px-4 gap-3">
                            <div className="flex gap-1.5">
                                <div className="size-2.5 rounded-full bg-red-500/60"></div>
                                <div className="size-2.5 rounded-full bg-amber-500/60"></div>
                                <div className="size-2.5 rounded-full bg-emerald-500/60"></div>
                            </div>
                            <div className="flex-1 mx-4 h-5 bg-slate-700 rounded-full flex items-center px-3 gap-2">
                                <span className="material-symbols-outlined text-slate-500 text-xs">lock</span>
                                <span className="text-[10px] text-slate-500 font-mono">pos.mitienda.mx/venta</span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-bold">
                                <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span></span>
                                Turno activo
                            </div>
                        </div>

                        {/* POS UI */}
                        <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden flex">
                            {/* Left: product grid */}
                            <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
                                {/* search bar */}
                                <div className="flex gap-2 items-center">
                                    <div className="flex-1 h-7 bg-slate-800 border border-white/10 rounded-lg flex items-center px-3 gap-2">
                                        <span className="material-symbols-outlined text-slate-500 text-sm">search</span>
                                        <span className="text-slate-600 text-xs font-mono">Buscar producto o escanear...</span>
                                    </div>
                                    <div className="h-7 w-7 rounded-lg bg-primary/20 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-sm">qr_code_scanner</span>
                                    </div>
                                </div>
                                {/* categories */}
                                <div className="flex gap-2 overflow-hidden">
                                    {['Todos', 'Bebidas', 'Snacks', 'Lácteos', 'Limpieza'].map((c, i) => (
                                        <div key={c} className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wide border ${i === 0 ? 'bg-primary text-white border-primary' : 'border-white/10 text-slate-500'}`}>{c}</div>
                                    ))}
                                </div>
                                {/* product grid */}
                                <div className="grid grid-cols-4 gap-2 flex-1">
                                    {[
                                        { name: 'Coca-Cola 600ml', price: 19, stock: 48, color: '#ef4444' },
                                        { name: 'Agua Ciel 600ml', price: 14, stock: 72, color: '#3b82f6' },
                                        { name: 'Sabritas Chile', price: 18, stock: 35, color: '#f59e0b' },
                                        { name: 'Pan Bimbo', price: 35, stock: 18, color: '#10b981' },
                                        { name: 'Leche Lala 1L', price: 28, stock: 22, color: '#8b5cf6' },
                                        { name: 'Gansito', price: 16, stock: 60, color: '#ec4899' },
                                        { name: 'Doritos Nacho', price: 22, stock: 41, color: '#f97316' },
                                        { name: 'Jugo Del Valle', price: 24, stock: 29, color: '#6366f1' },
                                    ].map(p => (
                                        <div key={p.name} className="bg-slate-900 border border-white/5 rounded-lg p-2 flex flex-col gap-1 hover:border-primary/30 transition-all cursor-pointer group/card pcs-product-card" data-color={p.color}>
                                            <div className="pcs-product-icon-wrapper">
                                                <span className="material-symbols-outlined pcs-product-icon">shopping_bag</span>
                                            </div>
                                            <div className="text-white text-[8px] font-bold leading-tight truncate">{p.name}</div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-primary text-[9px] font-black">${p.price}</span>
                                                <span className="text-slate-600 text-[7px]">{p.stock} pz</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: cart */}
                            <div className="w-52 bg-slate-900 border-l border-white/5 flex flex-col">
                                <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-primary text-sm">shopping_cart</span>
                                        <span className="text-white text-xs font-bold">Carrito</span>
                                    </div>
                                    <span className="text-[9px] bg-primary text-white rounded-full px-1.5 py-0.5 font-bold">
                                        {cartItems.reduce((s, i) => s + i.qty, 0)} items
                                    </span>
                                </div>

                                <div className="flex-1 px-3 py-2 space-y-2 overflow-hidden">
                                    {cartItems.map(item => (
                                        <div key={item.name} className="flex items-center justify-between gap-1">
                                            <div className="flex-1 min-w-0">
                                                <div className="text-white text-[9px] font-bold truncate">{item.name}</div>
                                                <div className="text-slate-500 text-[8px]">x{item.qty} · ${item.price}c/u</div>
                                            </div>
                                            <div className="text-primary text-[10px] font-black">${item.qty * item.price}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="px-3 py-3 border-t border-white/5 space-y-2">
                                    <div className="flex justify-between text-[10px]">
                                        <span className="text-slate-500">Subtotal:</span>
                                        <span className="text-white font-bold">${cartTotal}</span>
                                    </div>
                                    <div className="flex gap-1">
                                        {['Efectivo', 'Tarjeta'].map((m, i) => (
                                            <div key={m} className={`flex-1 text-center py-1 rounded text-[8px] font-bold border ${i === 0 ? 'bg-primary/20 border-primary text-primary' : 'border-white/10 text-slate-500'}`}>{m}</div>
                                        ))}
                                    </div>
                                    <div className="w-full py-2 rounded-lg bg-primary text-white text-[10px] font-bold text-center cursor-pointer">
                                        Cobrar ${cartTotal}.00
                                    </div>
                                </div>

                                {/* shift info */}
                                <div className="px-3 py-2 bg-emerald-500/5 border-t border-emerald-500/10">
                                    <div className="text-[8px] text-emerald-400 font-bold uppercase tracking-wide">Turno: María G.</div>
                                    <div className="text-[9px] text-white font-black">$1,842 vendidos hoy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto w-[108%] h-3 bg-slate-800 rounded-b-xl -mt-1 shadow-xl"></div>
                </div>

                {/* ── MVP Features ── */}
                <div className="w-full max-w-7xl mb-20">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">rocket_launch</span>
                            Funcionalidades del MVP
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                            6 módulos. Todo lo que necesita<br className="hidden md:block" /> una tienda desde el día 1.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mvpFeatures.map(feat => (
                            <div
                                key={feat.id}
                                className="glass-card p-7 rounded-2xl relative group hover:border-primary/40 transition-all hover:shadow-[0_0_40px_-10px_rgba(13,89,242,0.3)] bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10 pcs-feat-card"
                                data-type={feat.id}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="pcs-feat-icon-wrapper">
                                        <span className="material-symbols-outlined pcs-feat-icon">{feat.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight">{feat.title}</h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">{feat.desc}</p>
                                <ul className="space-y-2">
                                    {feat.bullets.map(b => (
                                        <li key={b} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                            <span className="material-symbols-outlined pcs-feat-bullet-icon">check_circle</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Flujo básico ── */}
                <div className="w-full max-w-5xl mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">route</span>
                            Flujo de uso
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground">Del login al <span className="text-gradient">corte de caja</span> en 4 pasos</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {flow.map((step, i) => (
                            <div key={step.step} className="relative glass-card group p-6 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10 hover:border-primary/40 transition-all hover:shadow-[0_0_30px_-8px_rgba(13,89,242,0.3)]">
                                {i < flow.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 -right-4 z-10">
                                        <span className="material-symbols-outlined text-primary/40 text-2xl">arrow_forward</span>
                                    </div>
                                )}
                                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                                    <span className="material-symbols-outlined text-primary">{step.icon}</span>
                                </div>
                                <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Paso {step.step}</div>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">{step.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Challenge / Architecture / Impact ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mb-20">
                    {/* El Reto */}
                    <div className="glass-card p-8 rounded-2xl relative group hover:border-primary/40 transition-all hover:shadow-[0_0_40px_-10px_rgba(13,89,242,0.3)] bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <span className="text-7xl font-bold text-slate-900 dark:text-white">01</span>
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-amber-500/10 rounded-lg">
                                <span className="material-symbols-outlined text-amber-500 text-3xl">warning</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">El Reto</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Tienda de conveniencia con ventas en libreta, inventario en Excel y sin visibilidad de pérdidas o productos estrella.
                        </p>
                        <ul className="space-y-3">
                            {['Sin control de inventario en tiempo real', 'Caja cuadrada a ojo: diferencias diarias', 'Sin página para captar clientes locales', 'Reposición de stock reactiva, no planificada'].map(item => (
                                <li key={item} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-amber-500 text-sm mt-0.5">error</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Arquitectura */}
                    <div className="glass-card p-8 rounded-2xl relative group hover:border-primary/40 transition-all hover:shadow-[0_0_40px_-10px_rgba(13,89,242,0.3)] bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <span className="text-7xl font-bold text-slate-900 dark:text-white">02</span>
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <span className="material-symbols-outlined text-primary text-3xl">developer_board</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">La Arquitectura</h3>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            API REST + WebSockets para actualizaciones en tiempo real. Frontend React táctil optimizado para pantallas de caja y panel admin separado.
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { label: 'POS UI', value: 'React táctil', icon: 'touch_app' },
                                { label: 'Admin', value: 'Dashboard web', icon: 'dashboard' },
                                { label: 'API', value: 'REST + WS', icon: 'api' },
                                { label: 'DB', value: 'PostgreSQL', icon: 'database' },
                            ].map(item => (
                                <div key={item.label} className="bg-primary/10 rounded-xl p-3 border border-primary/20 hover:bg-primary/20 transition-all">
                                    <div className="text-primary text-[10px] font-bold uppercase mb-1 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs">{item.icon}</span>
                                        {item.label}
                                    </div>
                                    <div className="text-xs font-bold dark:text-white">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* El Impacto */}
                    <div className="glass-card p-8 rounded-2xl relative group hover:border-primary/40 transition-all hover:shadow-[0_0_40px_-10px_rgba(13,89,242,0.3)] bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <span className="text-7xl font-bold text-slate-900 dark:text-white">03</span>
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                <span className="material-symbols-outlined text-emerald-500 text-3xl">insights</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">El Impacto</h3>
                        </div>
                        <div className="space-y-5">
                            {[
                                { value: '↓ 80%', label: 'errores de caja al día' },
                                { value: '+45%', label: 'visibilidad de inventario' },
                                { value: '3×', label: 'más rápido el cobro por cliente' },
                            ].map(stat => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-black text-primary">{stat.value}</div>
                                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
                                </div>
                            ))}
                            <div className="flex items-center gap-3 py-2 px-4 bg-emerald-500/10 rounded-full w-fit">
                                <span className="text-emerald-500 font-bold text-sm">Demo disponible</span>
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
                        <h2 className="text-3xl font-extrabold text-foreground">Elegido para <span className="text-gradient">velocidad y escalabilidad</span></h2>
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

                {/* ── Próximos pasos ── */}
                <div className="w-full max-w-7xl mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">trending_up</span>
                            Roadmap post-MVP
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground">El MVP es el <span className="text-gradient">punto de partida</span></h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm">
                            Una vez validado el core del negocio, añadimos módulos avanzados sin reescribir el sistema.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {nextSteps.map((step, i) => (
                            <div key={step.title} className="glass-card flex gap-4 items-start p-5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10 hover:border-primary/30 transition-all group">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                                    <span className="material-symbols-outlined text-primary">{step.icon}</span>
                                </div>
                                <div>
                                    <div className="text-[9px] font-black text-primary uppercase tracking-widest mb-0.5">v{i + 2}.0</div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{step.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CTA ── */}
                <div className="w-full max-w-4xl">
                    <div className="p-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl">
                        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[1.3rem] flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">¿Tienes una tienda que digitalizar?</h4>
                                <p className="text-slate-500">Agenda una sesión de diagnóstico y armamos tu blueprint en 48 hrs.</p>
                            </div>
                            <Link
                                to="/#contacto"
                                className="whitespace-nowrap px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-primary/30 flex items-center gap-3"
                            >
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
                        <span>Project: POS-Web-MVP-V1</span>
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
                <div className="text-xs rotate-90 origin-left whitespace-nowrap tracking-[0.5em] font-bold uppercase dark:text-white">POS Web MVP · Sistema Activo</div>
                <div className="h-24 w-px bg-primary mx-auto"></div>
            </div>
            <div className="fixed right-6 bottom-12 hidden lg:flex flex-col items-end gap-2 pointer-events-none opacity-20">
                <div className="text-[10px] font-mono dark:text-white">POS · INVENTORY · REPORTS</div>
                <div className="text-[10px] font-mono dark:text-white">Build: POS-Alpha-V1</div>
            </div>
        </div>
    );
};

export default POSCaseStudy;
