import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SistemaPOSPage.css';

const SistemaPOSPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    useEffect(() => {
        const handleScroll = () => {
            const el = document.documentElement;
            const scrollTop = el.scrollTop || document.body.scrollTop;
            const scrollHeight = el.scrollHeight - el.clientHeight;
            const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            if (progressRef.current) progressRef.current.style.width = `${pct}%`;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* ── Data ── */
    const receiptItems = [
        { name: '2x Tamal oaxaqueño', price: '$80.00' },
        { name: '1x Café americano', price: '$35.00' },
        { name: '3x Pan dulce', price: '$45.00' },
        { name: '1x Jugo de naranja', price: '$28.00' },
    ];

    const features = [
        {
            icon: 'point_of_sale',
            title: 'Registro de ventas en tiempo real',
            desc: 'Cada venta queda registrada al instante: producto, cantidad, precio, método de pago y cajero. Cero papeles, cero cuadernos.',
        },
        {
            icon: 'inventory_2',
            title: 'Control de inventario automático',
            desc: 'Al registrar una venta, el sistema descuenta el stock automáticamente. Ves en tiempo real cuánto tienes de cada producto.',
        },
        {
            icon: 'receipt_long',
            title: 'Tickets y comprobantes digitales',
            desc: 'Genera tickets impresos o digitales por correo/WhatsApp. Facturas CFDI cuando el cliente lo requiere, sin software adicional.',
        },
        {
            icon: 'payments',
            title: 'Múltiples métodos de pago',
            desc: 'Efectivo, tarjeta, transferencia, QR o pagos digitales — el sistema registra todos por separado para un corte de caja claro.',
        },
        {
            icon: 'analytics',
            title: 'Reportes de ventas automáticos',
            desc: 'Reportes diarios, semanales y mensuales generados solos. Ve qué se vende más, cuándo y quién lo vende. Sin Excel, sin cálculos manuales.',
        },
        {
            icon: 'supervisor_account',
            title: 'Usuarios y roles por empleado',
            desc: 'El cajero solo ve su caja. El gerente ve todo. El dueño accede desde cualquier dispositivo. Cada quien ve lo que necesita.',
        },
        {
            icon: 'currency_exchange',
            title: 'Corte de caja digital',
            desc: 'Al final del turno, el sistema calcula automáticamente lo que debería haber vs. lo que hay. Diferencias al instante, auditables.',
        },
        {
            icon: 'storefront',
            title: 'Multi-sucursal desde el día uno',
            desc: 'Si tienes dos locales o planeas abrir uno, el sistema los gestiona desde un solo panel. Un solo login para ver todo.',
        },
        {
            icon: 'notifications_active',
            title: 'Alertas de stock mínimo',
            desc: 'Cuando un producto llega al mínimo que tú defines, el sistema te avisa automáticamente para que nunca te quedes sin stock.',
        },
    ];

    const stats = [
        { icon: 'speed', value: '< 2 min', label: 'para registrar una venta y que quede completa en el sistema' },
        { icon: 'trending_down', value: '90%', label: 'de reducción en errores de cobro y cuadre de caja' },
        { icon: 'timer_off', value: '4 hrs', label: 'que se ahorran a la semana en cuadres, reportes y manejo de Excel' },
        { icon: 'devices', value: '100%', label: 'web — funciona desde cualquier dispositivo sin instalar nada' },
    ];

    const scales = [
        {
            icon: 'storefront',
            color: 'amber',
            eyebrow: 'Pequeño negocio',
            title: 'El que quiere empezar bien',
            desc: 'Para el puesto, la tiendita, la cafetería o el restaurante familiar que quiere dejar el cuaderno y llevar las cuentas en serio sin complicarse.',
            items: [
                'Registro de ventas y productos',
                'Control de inventario básico',
                'Tickets digitales o impresos',
                'Reportes diarios por WhatsApp',
                'Un usuario operador + dueño',
                'Sin inversión en hardware especial',
            ],
            featured: false,
        },
        {
            icon: 'business',
            color: 'orange',
            eyebrow: 'Negocio en crecimiento',
            title: 'El que ya tiene equipo',
            desc: 'Para el negocio que ya tiene empleados, turnos, proveedores y más de un producto. Necesita control real sin perder tiempo en administración.',
            items: [
                'Todo lo del nivel anterior',
                'Múltiples cajeros con roles',
                'Corte de caja por turno',
                'Compras y gestión de proveedores',
                'Historial de ventas por empleado',
                'Reportes comparativos mensuales',
            ],
            featured: true,
        },
        {
            icon: 'hub',
            color: 'red',
            eyebrow: 'Multi-sucursal',
            title: 'El que ya está escalando',
            desc: 'Para negocios con dos o más puntos de venta que necesitan visibilidad total centralizada y control preciso por sucursal.',
            items: [
                'Todo lo de los niveles anteriores',
                'Panel central multi-sucursal',
                'Inventarios por ubicación',
                'Transferencias entre sucursales',
                'Dashboard ejecutivo integrado',
                'API para integraciones externas',
            ],
            featured: false,
        },
    ];

    const howSteps = [
        { num: 'PASO 01', icon: 'add_circle', title: 'Registras tus productos', desc: 'Subes tu catálogo con precios, unidades y stock inicial. Puede ser desde cero o importando desde tu hoja de Excel actual.' },
        { num: 'PASO 02', icon: 'person_add', title: 'Configuras a tu equipo', desc: 'Creas usuarios para cada cajero o empleado. Defines qué puede ver y qué puede modificar cada uno.' },
        { num: 'PASO 03', icon: 'sell', title: 'Empiezas a vender', desc: 'El cajero selecciona productos, el sistema calcula el total, registra el pago y genera el ticket. En menos de 60 segundos.' },
        { num: 'PASO 04', icon: 'bar_chart', title: 'Ves los resultados', desc: 'Al final del día, la semana o el mes: reportes automáticos con todo lo que necesitas saber para tomar decisiones.' },
    ];

    return (
        <div className="pos-root" data-theme={isDarkMode ? 'dark' : 'light'}>

            {/* Progress */}
            <div className="pos-progress-wrap">
                <div className="pos-progress-fill" ref={progressRef} />
            </div>

            {/* Nav */}
            <nav className="pos-topnav">
                <Link to="/" className="pos-back-btn">
                    <span className="material-symbols-outlined pos-back-btn-icon">arrow_back</span>
                    Volver al inicio
                </Link>
                <div className="pos-nav-actions">
                    <button onClick={() => setIsDarkMode(d => !d)} className="pos-theme-btn" aria-label="Cambiar tema">
                        <span className="material-symbols-outlined pos-theme-icon">
                            {isDarkMode ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                    <Link to="/#contacto" className="pos-nav-cta">
                        Hablar con nosotros
                        <span className="material-symbols-outlined pos-nav-cta-arrow">arrow_forward</span>
                    </Link>
                </div>
            </nav>

            {/* ── HERO ── */}
            <section className="pos-hero">
                <div className="pos-hero-orb-1" />
                <div className="pos-hero-orb-2" />
                <div className="pos-hero-grid" />

                <div className="pos-hero-inner">
                    {/* Copy */}
                    <div>
                        <div className="pos-hero-label">
                            <div className="pos-hero-dot" />
                            Sistema Punto de Venta
                        </div>
                        <h1 className="pos-hero-title">
                            Tu negocio merece cobrar, registrar y crecer<br />
                            <span className="pos-hero-gradient">sin caos ni cuadernos.</span>
                        </h1>
                        <p className="pos-hero-subtitle">
                            Un Sistema POS web que funciona desde cualquier dispositivo. Registra ventas, controla inventario, genera reportes y da corte de caja — desde tu tiendita hasta tus sucursales. Sin instalar nada.
                        </p>
                        <div className="pos-hero-actions">
                            <Link to="/#contacto" className="pos-hero-btn-primary">
                                Quiero mi sistema POS
                                <span className="material-symbols-outlined pos-hero-arrow">arrow_forward</span>
                            </Link>
                            <a href="#escalas" className="pos-hero-btn-secondary">
                                Ver planes por tamaño
                            </a>
                        </div>
                    </div>

                    {/* Receipt visual */}
                    <div className="pos-receipt-wrap">
                        <div className="pos-receipt">
                            <div className="pos-receipt-header">
                                <div className="pos-receipt-store">Cafetería Don Jorge</div>
                                <div className="pos-receipt-powered">Powered by FiberLink POS</div>
                                <div className="pos-receipt-date">Lun 23 Feb 2026 · 09:14 am · Cajero: María</div>
                            </div>

                            <div className="pos-receipt-items">
                                {receiptItems.map((item, i) => (
                                    <div key={i} className="pos-receipt-item">
                                        <span className="pos-receipt-item-name">{item.name}</span>
                                        <span className="pos-receipt-item-price">{item.price}</span>
                                    </div>
                                ))}
                            </div>

                            <hr className="pos-receipt-divider" />

                            <div className="pos-receipt-total-row">
                                <span>Subtotal</span>
                                <span className="pos-receipt-amount">$188.00</span>
                            </div>
                            <div className="pos-receipt-total-row">
                                <span>Descuento aplicado</span>
                                <span className="pos-receipt-amount">-$0.00</span>
                            </div>
                            <div className="pos-receipt-total-row pos-total-final">
                                <span>TOTAL</span>
                                <span className="pos-receipt-amount">$188.00</span>
                            </div>

                            <div className="pos-receipt-pay">
                                <span className="material-symbols-outlined pos-receipt-pay-icon">check_circle</span>
                                Pago con tarjeta · Aprobado
                            </div>

                            <div className="pos-receipt-footer">
                                ¡Gracias por tu preferencia! · fiberlinklabs.com
                            </div>
                        </div>

                        <div className="pos-receipt-stats">
                            <div className="pos-r-stat">
                                <div className="pos-r-stat-val">47</div>
                                <div className="pos-r-stat-label">Ventas hoy</div>
                            </div>
                            <div className="pos-r-stat">
                                <div className="pos-r-stat-val">$8.4k</div>
                                <div className="pos-r-stat-label">Total del día</div>
                            </div>
                            <div className="pos-r-stat">
                                <div className="pos-r-stat-val">0</div>
                                <div className="pos-r-stat-label">Errores de caja</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── QUÉ ES UN POS ── */}
            <section className="pos-section pos-what-bg">
                <div className="pos-section-inner">
                    <div className="pos-what-grid">
                        <div>
                            <div className="pos-section-label">
                                <span className="material-symbols-outlined pos-icon-xs">help_outline</span>
                                ¿Qué es un Sistema POS?
                            </div>
                            <h2 className="pos-section-title">
                                Es el cerebro digital de tu punto de venta.
                            </h2>

                            <div className="pos-pill-row">
                                {['Cobras', 'Registras', 'Controlas stock', 'Reportas', 'Cuadras caja'].map((p, i) => (
                                    <span key={i} className="pos-pill">
                                        <span className="material-symbols-outlined pos-pill-icon">check</span>
                                        {p}
                                    </span>
                                ))}
                            </div>

                            <p className="pos-what-desc">
                                Un Sistema POS (Point of Sale) es el software que reemplaza la caja registradora, el cuaderno de ventas, la hoja de inventario en Excel y el reporte manual del mes — todo en una sola herramienta web que funciona desde cualquier dispositivo.
                            </p>

                            <p className="pos-what-desc">
                                No necesitas hardware especial, no pagas licencias imposibles y no tardas semanas en aprender a usarlo. En un día ya estás cobrando con tu nuevo sistema.
                            </p>

                            <div className="pos-what-callout">
                                <p className="pos-what-callout-text">
                                    "El 68% de los pequeños negocios en México todavía usa cuadernos o Excel para llevar sus ventas. Eso tiene un costo real: errores, pérdidas y decisiones a ciegas."
                                </p>
                            </div>
                        </div>

                        {/* Old vs New */}
                        <div className="pos-old-new">
                            <div className="pos-old-card">
                                <div className="pos-card-label pos-card-label-old">
                                    <span className="material-symbols-outlined pos-card-label-icon">close</span>
                                    Sin Sistema POS
                                </div>
                                <div className="pos-card-items">
                                    {[
                                        'Cobras a ojo y escribes en cuaderno o bloc de notas.',
                                        'El inventario se revisa contando físicamente cada semana.',
                                        'El corte de caja tarda 30-45 min y aun así cuadra a medias.',
                                        'No sabes qué se vendió más ni en qué horario.',
                                        'Un empleado cobra mal y no lo descubres hasta tarde.',
                                        'El mes cierra y no sabes exactamente cuánto ganaste.',
                                    ].map((item, i) => (
                                        <div key={i} className="pos-card-item">
                                            <span className="material-symbols-outlined pos-icon-bad">cancel</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pos-new-card">
                                <div className="pos-card-label pos-card-label-new">
                                    <span className="material-symbols-outlined pos-card-label-icon">point_of_sale</span>
                                    Con FiberLink POS
                                </div>
                                <div className="pos-card-items">
                                    {[
                                        'Cada cobro queda registrado: producto, monto, método de pago, quién cobró.',
                                        'El stock se descuenta automáticamente con cada venta. Siempre actualizado.',
                                        'El corte de caja se genera en segundos. Diferencias detectadas al instante.',
                                        'Reportes automáticos te dicen qué se vende más, cuándo y cuánto.',
                                        'Cada cajero tiene su acceso. Todo queda trazado y auditado.',
                                        'El reporte mensual está listo el día 1 del siguiente mes, automático.',
                                    ].map((item, i) => (
                                        <div key={i} className="pos-card-item">
                                            <span className="material-symbols-outlined pos-icon-good">check_circle</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FUNCIONALIDADES ── */}
            <section className="pos-section" id="funciones">
                <div className="pos-section-wide">
                    <div className="pos-section-label">
                        <span className="material-symbols-outlined pos-icon-xs">settings</span>
                        Funcionalidades
                    </div>
                    <h2 className="pos-section-title">
                        Todo lo que necesita tu negocio, en un solo sistema.
                    </h2>
                    <p className="pos-section-sub">
                        No es un software de cobro genérico — es una plataforma construida específicamente para el negocio local mexicano, con las funciones que realmente se necesitan desde el primer día.
                    </p>

                    <div className="pos-features-grid">
                        {features.map((feat, i) => (
                            <div key={i} className="pos-feat-card">
                                <div className="pos-feat-glow" />
                                <div className="pos-feat-icon-wrap">
                                    <span className="material-symbols-outlined pos-feat-icon">{feat.icon}</span>
                                </div>
                                <div className="pos-feat-title">{feat.title}</div>
                                <div className="pos-feat-desc">{feat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── STATS ── */}
            <section className="pos-stats-strip">
                <div className="pos-stats-grid">
                    {stats.map((s, i) => (
                        <div key={i} className="pos-stat-card">
                            <span className="material-symbols-outlined pos-stat-icon">{s.icon}</span>
                            <div className="pos-stat-value">{s.value}</div>
                            <div className="pos-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── ESCALA POR TAMAÑO ── */}
            <section className="pos-section pos-scales-bg" id="escalas">
                <div className="pos-section-wide">
                    <div className="pos-section-label">
                        <span className="material-symbols-outlined pos-icon-xs">trending_up</span>
                        Crece con tu negocio
                    </div>
                    <h2 className="pos-section-title">
                        Desde tu primer local hasta tu cadena de tiendas.
                    </h2>
                    <p className="pos-section-sub">
                        El sistema empieza simple para que tu equipo lo adopte de inmediato — y crece contigo sin que tengas que cambiar de plataforma cuando tu negocio escala.
                    </p>

                    <div className="pos-scales-grid">
                        {scales.map((scale, i) => (
                            <div key={i} className="pos-scale-card" data-featured={scale.featured ? 'true' : 'false'}>
                                {scale.featured && <div className="pos-scale-badge">Más popular</div>}
                                <div className="pos-scale-icon-wrap" data-color={scale.color}>
                                    <span className="material-symbols-outlined pos-scale-icon" data-color={scale.color}>
                                        {scale.icon}
                                    </span>
                                </div>
                                <div className="pos-scale-eyebrow">{scale.eyebrow}</div>
                                <div className="pos-scale-title">{scale.title}</div>
                                <div className="pos-scale-desc">{scale.desc}</div>
                                <ul className="pos-scale-list">
                                    {scale.items.map((item, ii) => (
                                        <li key={ii} className="pos-scale-list-item">
                                            <span className="material-symbols-outlined pos-scale-check">check_circle</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CÓMO FUNCIONA ── */}
            <section className="pos-section pos-how-bg">
                <div className="pos-section-wide">
                    <div className="pos-how-header">
                        <div className="pos-section-label pos-section-label-centered">
                            <span className="material-symbols-outlined pos-icon-xs">play_circle</span>
                            Cómo funciona
                        </div>
                        <h2 className="pos-section-title pos-section-title-white pos-section-title-centered">
                            De cero a cobrando en un día.
                        </h2>
                        <p className="pos-section-sub pos-section-sub-center-dark">
                            No hay instalaciones complicadas ni capacitaciones de días. El día que activas tu sistema ya puedes registrar tu primera venta.
                        </p>
                    </div>

                    <div className="pos-how-steps">
                        {howSteps.map((step, i) => (
                            <div key={i} className="pos-how-step">
                                <div className="pos-how-connector" />
                                <div className="pos-how-step-num">{step.num}</div>
                                <div className="pos-how-icon-wrap">
                                    <span className="material-symbols-outlined pos-how-icon">{step.icon}</span>
                                </div>
                                <div className="pos-how-step-title">{step.title}</div>
                                <div className="pos-how-step-desc">{step.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA FINAL ── */}
            <section className="pos-cta-banner">
                <div className="pos-cta-orb" />
                <div className="pos-cta-inner">
                    <div className="pos-cta-tag">
                        <span className="material-symbols-outlined pos-icon-xs">electric_bolt</span>
                        Sin complicaciones
                    </div>
                    <h2 className="pos-cta-title">
                        Tu negocio merece un sistema<br />que trabaje tan duro como tú.
                    </h2>
                    <p className="pos-cta-sub">
                        En 30 minutos de diagnóstico entendemos tu operación y te mostramos cómo quedaría tu sistema POS — configurado para tu tipo de negocio, con tus productos y tu equipo.
                    </p>
                    <div className="pos-cta-actions">
                        <Link to="/#contacto" className="pos-cta-btn">
                            Quiero mi Sistema POS
                            <span className="material-symbols-outlined pos-icon-sm">arrow_forward</span>
                        </Link>
                        <Link to="/servicios/automatizacion" className="pos-cta-btn-ghost">
                            Ver Automatización
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="pos-footer">
                <p>© 2026 FiberLink Labs · <Link to="/">Inicio</Link> · <Link to="/#soluciones">Soluciones</Link> · <Link to="/servicios/desarrollo-web">Desarrollo Web</Link> · <Link to="/servicios/automatizacion">Automatización</Link></p>
            </footer>
        </div>
    );
};

export default SistemaPOSPage;
