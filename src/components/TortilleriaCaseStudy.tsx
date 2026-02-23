import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TortilleriaCaseStudy.css';

const TortilleriaCaseStudy = () => {
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
            id: 'pos',
            label: 'POS',
            icon: 'point_of_sale',
            color: '#f59e0b',
            colorBg: 'rgba(245,158,11,0.1)',
            colorBorder: 'rgba(245,158,11,0.3)',
            title: 'Módulo Punto de Venta',
            desc: 'Interfaz táctil para el mostrador: registro de ventas, descuento automático de stock y control de caja por turno.',
            features: [
                'Búsqueda rápida y lectura de código de barras',
                'Control de inventario en tiempo real',
                'Apertura y cierre de caja con reporte',
                'Roles: administrador y cajero',
                'Historial de ventas del día / semana',
            ],
        },
        {
            id: 'pedidos',
            label: 'Pedidos en Línea',
            icon: 'local_shipping',
            color: '#10b981',
            colorBg: 'rgba(16,185,129,0.1)',
            colorBorder: 'rgba(16,185,129,0.3)',
            title: 'Portal de Distribuidores',
            desc: 'Plataforma exclusiva para tiendas distribuidoras: login propio, catálogo, pedido rápido y seguimiento de estado.',
            features: [
                'Login seguro para cada distribuidor',
                'Catálogo: tortillas, masa, derivados',
                'Pedidos estándar predefinidos (ej: 20 kg)',
                'Notificación al admin en tiempo real',
                'Estados: Pendiente → En preparación → Enviado',
            ],
        },
        {
            id: 'marca',
            label: 'Página de Marca',
            icon: 'storefront',
            color: '#6366f1',
            colorBg: 'rgba(99,102,241,0.1)',
            colorBorder: 'rgba(99,102,241,0.3)',
            title: 'Identidad Digital',
            desc: 'Página pública que refuerza la marca, muestra el catálogo con precios, y convierte visitantes en clientes.',
            features: [
                'Historia y valores de la tortillería',
                'Catálogo con precios y disponibilidad',
                'Contacto y ubicación con Google Maps',
                'Branding visual: colores, tipografía, logo',
                'Diseño responsive y PWA ready',
            ],
        },
    ];

    const techStack = [
        { name: 'React + Vite', category: 'Frontend', icon: 'code' },
        { name: 'Node.js + Express', category: 'Backend', icon: 'dns' },
        { name: 'PostgreSQL', category: 'Base de datos', icon: 'database' },
        { name: 'Prisma ORM', category: 'Data layer', icon: 'layers' },
        { name: 'JWT + RBAC', category: 'Autenticación', icon: 'lock' },
        { name: 'Socket.io', category: 'Notificaciones', icon: 'notifications_active' },
        { name: 'Vercel + Railway', category: 'Hosting', icon: 'cloud_upload' },
        { name: 'Resend / Email', category: 'Alertas', icon: 'mail' },
    ];

    const flows = [
        {
            title: 'Venta en Mostrador',
            color: '#f59e0b',
            icon: 'shopping_cart',
            steps: [
                { icon: 'login', text: 'Cajero inicia sesión' },
                { icon: 'qr_code_scanner', text: 'Escanea o busca producto' },
                { icon: 'add_shopping_cart', text: 'Agrega al carrito' },
                { icon: 'payments', text: 'Cobro y método de pago' },
                { icon: 'inventory', text: 'Stock se descuenta' },
            ],
        },
        {
            title: 'Pedido de Distribuidor',
            color: '#10b981',
            icon: 'local_shipping',
            steps: [
                { icon: 'storefront', text: 'Distribuidor entra al portal' },
                { icon: 'shopping_bag', text: 'Selecciona productos y cantidades' },
                { icon: 'send', text: 'Confirma pedido en línea' },
                { icon: 'notifications_active', text: 'Admin recibe alerta inmediata' },
                { icon: 'local_shipping', text: 'Admin actualiza a "Enviado"' },
            ],
        },
    ];

    const roadmap = [
        { icon: 'whatsapp', title: 'WhatsApp Business API', desc: 'Pedidos rápidos vía WhatsApp desde el catálogo del distribuidor.', version: 'v2.0' },
        { icon: 'analytics', title: 'Dashboard avanzado', desc: 'Métricas de ventas, análisis de pedidos y comparativas por período.', version: 'v2.1' },
        { icon: 'store', title: 'Multi-sucursal', desc: 'Inventarios separados por sucursal con consolidado central.', version: 'v3.0' },
        { icon: 'print', title: 'Impresora de tickets', desc: 'Tickets físicos de venta en mostrador con impresoras térmicas.', version: 'v3.1' },
        { icon: 'receipt_long', title: 'Facturación electrónica', desc: 'CFDI 4.0 integrado para clientes que requieren factura.', version: 'v4.0' },
        { icon: 'smartphone', title: 'App móvil', desc: 'PWA nativa para que el gerente gestione todo desde su celular.', version: 'v4.1' },
    ];

    const metrics = [
        { value: '3 en 1', label: 'POS + Pedidos + Web' },
        { value: '10 sem', label: 'Desarrollo MVP' },
        { value: '100%', label: 'Web-based' },
        { value: '∞', label: 'Distribuidores escalable' },
    ];

    const products = [
        { name: 'Tortilla Blanca 1kg', kg: '1 kg', price: 22, stock: 340, color: '#f59e0b' },
        { name: 'Tortilla Azul 1kg', kg: '1 kg', price: 28, stock: 120, color: '#6366f1' },
        { name: 'Masa para tortillas', kg: '5 kg', price: 65, stock: 80, color: '#10b981' },
        { name: 'Tostada Horneada', kg: '500g', price: 35, stock: 200, color: '#ef4444' },
    ];

    const orders = [
        { distributor: 'Minisuper La Palma', qty: '40 kg', status: 'Enviado', time: '09:12' },
        { distributor: 'Abarrotes Don Chuy', qty: '20 kg', status: 'En preparación', time: '10:45' },
        { distributor: 'Tienda El Rancho', qty: '60 kg', status: 'Pendiente', time: '11:30' },
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        Blueprint · Tortillería Digital MVP
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 dark:text-white">
                        La Tortillería en el Siglo XXI:<br />
                        <span className="text-primary">POS + Distribuidores + Marca en una app</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Un MVP que integra el punto de venta del mostrador, el portal para reabastecimiento de tiendas distribuidoras y la página pública de la tortillería en una sola plataforma web.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {metrics.map(m => (
                            <div key={m.label} className="flex flex-col items-center px-6 py-3 rounded-2xl bg-amber-500/5 border border-amber-500/15 min-w-[120px]">
                                <span className="text-2xl font-black text-amber-500">{m.value}</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-0.5">{m.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Interactive Mockup with Tabs ── */}
                <div className="relative w-full max-w-5xl mb-24">
                    <div className="absolute -inset-10 bg-amber-500/10 rounded-[4rem] blur-3xl opacity-40 pointer-events-none"></div>

                    {/* Tab switcher */}
                    <div className="flex gap-2 justify-center mb-4 relative z-10">
                        {['POS Mostrador', 'Portal Distribuidores', 'Página Pública'].map((tab, i) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(i)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide border transition-all ${activeTab === i ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'border-white/10 text-slate-500 hover:text-white hover:border-white/20 bg-slate-900/60'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="relative rounded-xl border-[8px] border-slate-800 dark:border-slate-900 bg-slate-900 shadow-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(245,158,11,0.3)]">
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
                                    {activeTab === 0 ? 'tortilleria.mx/pos' : activeTab === 1 ? 'tortilleria.mx/distribuidores' : 'tortilleria.mx'}
                                </span>
                            </div>
                            <div className="tcs-active-status" data-color={activeTab === 0 ? 'emerald' : activeTab === 1 ? 'amber' : 'indigo'}>
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping tcs-pulse-bg"></span>
                                    <span className="tcs-pulse-dot"></span>
                                </span>
                                {activeTab === 0 ? 'Turno activo' : activeTab === 1 ? '3 pedidos nuevos' : 'Online'}
                            </div>
                        </div>

                        {/* ── Tab 0: POS ── */}
                        {activeTab === 0 && (
                            <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden flex">
                                {/* Sidebar */}
                                <div className="w-12 bg-slate-900 border-r border-white/5 flex flex-col items-center py-3 gap-4">
                                    {['point_of_sale', 'inventory_2', 'bar_chart', 'manage_accounts'].map((ic, i) => (
                                        <span key={ic} className={`material-symbols-outlined text-base ${i === 0 ? 'text-amber-500' : 'text-slate-600'}`}>{ic}</span>
                                    ))}
                                </div>
                                {/* Products */}
                                <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
                                    <div className="flex gap-2">
                                        <div className="flex-1 h-7 bg-slate-800 border border-white/10 rounded-lg flex items-center px-3 gap-2">
                                            <span className="material-symbols-outlined text-slate-500 text-sm">search</span>
                                            <span className="text-slate-600 text-xs">Buscar producto o kg...</span>
                                        </div>
                                        <div className="h-7 w-7 rounded-lg bg-amber-500/20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-amber-500 text-sm">qr_code_scanner</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        {['Todos', 'Tortillas', 'Masa', 'Tostadas'].map((c, i) => (
                                            <div key={c} className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase border ${i === 0 ? 'bg-amber-500 text-white border-amber-500' : 'border-white/10 text-slate-500'}`}>{c}</div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-4 gap-2 flex-1">
                                        {products.map(p => (
                                            <div key={p.name} className="bg-slate-900 border border-white/5 rounded-lg p-2 flex flex-col gap-1 hover:border-amber-500/30 transition-all cursor-pointer tcs-product-card" data-color={p.color}>
                                                <div className="tcs-product-icon-wrapper">
                                                    <span className="material-symbols-outlined tcs-product-icon">grain</span>
                                                </div>
                                                <div className="text-white text-[8px] font-bold leading-tight truncate">{p.name}</div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-amber-500 text-[9px] font-black">${p.price}</span>
                                                    <span className="text-slate-600 text-[7px]">{p.stock} pz</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Cart */}
                                <div className="w-48 bg-slate-900 border-l border-white/5 flex flex-col">
                                    <div className="px-3 py-2 border-b border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-amber-500 text-sm">shopping_cart</span>
                                            <span className="text-white text-xs font-bold">Venta</span>
                                        </div>
                                        <span className="text-[9px] bg-amber-500 text-white rounded-full px-1.5 py-0.5 font-bold">3 items</span>
                                    </div>
                                    <div className="flex-1 px-3 py-2 space-y-2">
                                        {[{ n: 'Tortilla Blanca 1kg', x: 5, p: 22 }, { n: 'Masa 5kg', x: 2, p: 65 }, { n: 'Tostada 500g', x: 3, p: 35 }].map(item => (
                                            <div key={item.n} className="flex items-center justify-between">
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-white text-[8px] font-bold truncate">{item.n}</div>
                                                    <div className="text-slate-500 text-[7px]">x{item.x}</div>
                                                </div>
                                                <div className="text-amber-500 text-[10px] font-black">${item.x * item.p}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="px-3 py-3 border-t border-white/5 space-y-2">
                                        <div className="flex justify-between text-[10px]">
                                            <span className="text-slate-500">Total:</span>
                                            <span className="text-white font-black">$345</span>
                                        </div>
                                        <div className="w-full py-2 rounded-lg bg-amber-500 text-white text-[10px] font-bold text-center">Cobrar $345</div>
                                    </div>
                                    <div className="px-3 py-2 bg-emerald-500/5 border-t border-emerald-500/10">
                                        <div className="text-[8px] text-emerald-400 font-bold">Cajera: Ana R.</div>
                                        <div className="text-[9px] text-white font-black">$4,820 hoy</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── Tab 1: Distributor Portal ── */}
                        {activeTab === 1 && (
                            <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden flex">
                                <div className="w-14 bg-slate-900 border-r border-white/5 flex flex-col items-center py-4 gap-4">
                                    {['dashboard', 'local_shipping', 'inventory_2', 'receipt_long', 'notifications'].map((ic, i) => (
                                        <span key={ic} className={`material-symbols-outlined text-base ${i === 1 ? 'text-emerald-400' : 'text-slate-600'}`}>{ic}</span>
                                    ))}
                                </div>
                                <div className="flex-1 p-5 flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-white text-sm font-bold">Panel de Pedidos</div>
                                            <div className="text-slate-500 text-xs">Hoy, 22 Feb 2026</div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                                                <span className="material-symbols-outlined text-emerald-400 text-sm">notifications_active</span>
                                                <span className="text-emerald-400 text-[10px] font-bold">3 pedidos nuevos</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Stats */}
                                    <div className="grid grid-cols-4 gap-3">
                                        {[
                                            { label: 'Pedidos hoy', value: '12', color: '#10b981', icon: 'shopping_bag' },
                                            { label: 'Kg despachados', value: '380 kg', color: '#f59e0b', icon: 'scale' },
                                            { label: 'Distribuidores', value: '8 activos', color: '#6366f1', icon: 'store' },
                                            { label: 'Pendientes', value: '3', color: '#ef4444', icon: 'pending_actions' },
                                        ].map(s => (
                                            <div key={s.label} className="bg-slate-900 border border-white/5 rounded-lg p-3 tcs-stat-card" data-color={s.color}>
                                                <span className="material-symbols-outlined tcs-stat-icon">{s.icon}</span>
                                                <div className="text-white text-base font-black mt-1">{s.value}</div>
                                                <div className="text-slate-600 text-[9px] uppercase tracking-wide">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Orders list */}
                                    <div className="flex-1 bg-slate-900 border border-white/5 rounded-lg overflow-hidden">
                                        <div className="px-4 py-2 border-b border-white/5 flex items-center justify-between">
                                            <span className="text-slate-400 text-[10px] uppercase tracking-wider font-bold">Pedidos recientes</span>
                                            <span className="text-primary text-[10px] font-bold">Ver todos →</span>
                                        </div>
                                        {orders.map(o => (
                                            <div key={o.distributor} className="flex items-center gap-3 px-4 py-2.5 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all">
                                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                                    <span className="material-symbols-outlined text-emerald-400 text-sm">storefront</span>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-white text-xs font-bold truncate">{o.distributor}</div>
                                                    <div className="text-slate-500 text-[9px]">{o.qty} · {o.time} hrs</div>
                                                </div>
                                                <div className="tcs-order-status" data-status={o.status}>
                                                    <span className="relative flex h-1.5 w-1.5">
                                                        <span className="animate-ping tcs-pulse-bg"></span>
                                                        <span className="tcs-pulse-dot"></span>
                                                    </span>
                                                    {o.status}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── Tab 2: Public page ── */}
                        {activeTab === 2 && (
                            <div className="aspect-[16/9] w-full bg-amber-950 overflow-hidden flex flex-col">
                                {/* Header */}
                                <div className="px-8 py-3 flex items-center justify-between border-b border-amber-800/30 bg-amber-950">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-white text-sm">grain</span>
                                        </div>
                                        <span className="text-amber-100 text-sm font-black">Tortillería La Esperanza</span>
                                    </div>
                                    <div className="hidden md:flex items-center gap-6">
                                        {['Inicio', 'Productos', 'Nosotros', 'Contacto'].map(item => (
                                            <span key={item} className="text-amber-300 text-[10px] hover:text-amber-100 transition-colors font-medium">{item}</span>
                                        ))}
                                        <div className="px-3 py-1 bg-amber-500 text-white rounded-full text-[9px] font-bold">Soy distribuidor</div>
                                    </div>
                                </div>
                                {/* Hero */}
                                <div className="flex-1 flex">
                                    <div className="flex-1 flex flex-col justify-center px-8 py-4">
                                        <div className="text-amber-400 text-[9px] font-bold uppercase tracking-widest mb-2">Desde 1982 · Tradición familiar</div>
                                        <div className="text-amber-50 text-2xl font-black leading-tight mb-3">La tortilla más<br />fresca de la región</div>
                                        <div className="text-amber-300/70 text-[11px] leading-relaxed mb-4 max-w-xs">Producción artesanal con maíz nixtamalizado de primera calidad. Servicio a domicilio y distribución a tiendas.</div>
                                        <div className="flex gap-2">
                                            <div className="px-4 py-2 bg-amber-500 text-white text-[10px] font-bold rounded-xl">Ver productos</div>
                                            <div className="px-4 py-2 border border-amber-500/40 text-amber-300 text-[10px] font-bold rounded-xl">Soy distribuidor →</div>
                                        </div>
                                    </div>
                                    {/* Product preview */}
                                    <div className="w-52 px-4 py-3 flex flex-col gap-2">
                                        <div className="text-amber-400 text-[9px] font-bold uppercase tracking-widest mb-1">Productos del día</div>
                                        {products.map(p => (
                                            <div key={p.name} className="flex items-center gap-2 bg-amber-900/30 border border-amber-800/30 rounded-lg px-2 py-1.5 tcs-product-card" data-color={p.color}>
                                                <div className="tcs-public-product-icon-wrapper">
                                                    <span className="material-symbols-outlined text-xs">grain</span>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-amber-100 text-[8px] font-bold truncate">{p.name}</div>
                                                    <div className="text-amber-400 text-[7px]">{p.kg} · ${p.price}</div>
                                                </div>
                                                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-amber-400 text-xs">add</span>
                                                </div>
                                            </div>
                                        ))}
                                        {/* Map placeholder */}
                                        <div className="mt-1 h-14 rounded-lg bg-amber-900/40 border border-amber-800/30 flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-amber-500 text-sm">location_on</span>
                                            <span className="text-amber-400 text-[9px] font-bold">Ver en Google Maps</span>
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">layers</span>
                            Arquitectura del MVP
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                            Tres módulos. Una sola plataforma.
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto text-sm">
                            Cada módulo puede usarse de forma independiente o integrada según el crecimiento de la tortillería.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {modules.map(mod => (
                            <div
                                key={mod.id}
                                className="glass-card p-8 rounded-2xl relative group hover:border-primary/40 transition-all hover:shadow-[0_0_40px_-10px_rgba(13,89,242,0.3)] bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10 tcs-module-card"
                                data-type={mod.id}
                            >
                                <div className="tcs-module-bg-text">{mod.label}</div>
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="tcs-module-icon-wrapper">
                                        <span className="material-symbols-outlined tcs-module-icon">{mod.icon}</span>
                                    </div>
                                    <div>
                                        <div className="tcs-module-badge">{mod.label}</div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{mod.title}</h3>
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5 text-sm">{mod.desc}</p>
                                <ul className="space-y-2.5">
                                    {mod.features.map(f => (
                                        <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                            <span className="material-symbols-outlined tcs-feature-icon">check_circle</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Flows ── */}
                <div className="w-full max-w-7xl mb-20">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="material-symbols-outlined text-sm">route</span>
                            Flujos de uso
                        </div>
                        <h2 className="text-3xl font-extrabold text-foreground">Dos flujos. <span className="text-gradient">Un solo sistema.</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {flows.map(flow => (
                            <div
                                key={flow.title}
                                className="glass-card p-7 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-primary/10 tcs-flow-section"
                                data-flow={flow.color}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="tcs-flow-icon-wrapper">
                                        <span className="material-symbols-outlined tcs-flow-icon">{flow.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">{flow.title}</h3>
                                </div>
                                <div className="relative">
                                    <div className="tcs-flow-line"></div>
                                    <div className="space-y-4">
                                        {flow.steps.map((step, i) => (
                                            <div key={step.text} className="flex items-center gap-4 pl-2">
                                                <div className="tcs-step-icon-wrapper">
                                                    <span className="material-symbols-outlined tcs-step-icon">{step.icon}</span>
                                                </div>
                                                <div className="flex-1 flex items-center justify-between">
                                                    <span className="text-sm text-slate-700 dark:text-slate-300">{step.text}</span>
                                                    <span className="tcs-step-number">0{i + 1}</span>
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
                            Tortillería familiar con ventas manuales, distribuidores que pedían por WhatsApp de forma desorganizada y sin presencia digital.
                        </p>
                        <ul className="space-y-3">
                            {['Pedidos de distribuidores sin trazabilidad', 'Stock gestionado en papel o Excel', 'Sin página que muestre su identidad', 'Retrasos por comunicación informal'].map(it => (
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
                            Monorepo con tres capas: POS (modo offline-first), portal de distribuidores con WS y página pública estática con SEO.
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { label: 'POS', value: 'React táctil', icon: 'touch_app' },
                                { label: 'Portal', value: 'WS + JWT', icon: 'notifications_active' },
                                { label: 'Pública', value: 'SSR + SEO', icon: 'language' },
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
                                { value: '5×', label: 'más rápido el proceso de pedidos' },
                                { value: '↓ 90%', label: 'errores por pedidos informales' },
                                { value: '+35%', label: 'distribuidores nuevos vía portal' },
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
                        <h2 className="text-3xl font-extrabold text-foreground">Elegido para <span className="text-gradient">crecer con el negocio</span></h2>
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
                        <h2 className="text-3xl font-extrabold text-foreground">El MVP escala. <span className="text-gradient">La tortillería también.</span></h2>
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
                    <div className="p-1 bg-gradient-to-r from-amber-500 via-primary to-amber-500 rounded-3xl">
                        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[1.3rem] flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">¿Tienes una tortillería o negocio de alimentos?</h4>
                                <p className="text-slate-500">Agenda tu diagnóstico gratuito y armamos el blueprint en 48 hrs.</p>
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
                        <span>Project: Tortilleria-MVP-V1</span>
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
                <div className="text-xs rotate-90 origin-left whitespace-nowrap tracking-[0.5em] font-bold uppercase dark:text-white">Tortillería Digital · MVP Activo</div>
                <div className="h-24 w-px bg-amber-500 mx-auto"></div>
            </div>
            <div className="fixed right-6 bottom-12 hidden lg:flex flex-col items-end gap-2 pointer-events-none opacity-20">
                <div className="text-[10px] font-mono dark:text-white">POS · DISTRIBUIDORES · MARCA</div>
                <div className="text-[10px] font-mono dark:text-white">Build: Tortilleria-Alpha-V1</div>
            </div>
        </div>
    );
};

export default TortilleriaCaseStudy;
