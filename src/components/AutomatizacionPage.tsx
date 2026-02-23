import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './AutomatizacionPage.css';

const AutomatizacionPage = () => {
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
    const workflowSteps = [
        { icon: 'upload_file', iconBg: 'emerald', label: 'Entrada de datos', detail: 'Formulario, correo o carga de archivo', status: 'done', statusLabel: 'Completado' },
        { icon: 'rule', iconBg: 'blue', label: 'Validación automática', detail: 'Reglas de negocio aplicadas al instante', status: 'done', statusLabel: 'Completado' },
        { icon: 'settings', iconBg: 'indigo', label: 'Proceso interno', detail: 'Cálculos, clasificación y enrutamiento', status: 'running', statusLabel: 'En ejecución...' },
        { icon: 'send', iconBg: 'amber', label: 'Notificación y entrega', detail: 'Correo, PDF o actualización en dashboard', status: 'queue', statusLabel: 'En cola' },
    ];

    const areas = [
        {
            icon: 'description',
            title: 'Gestión de Documentos',
            desc: 'Genera, firma, envía y archiva documentos automáticamente: contratos, facturas, recibos y reportes sin intervención manual.',
            features: ['Generación de PDFs en 1 clic', 'Envío automático por correo', 'Archivo y búsqueda inteligente', 'Firma digital integrada'],
        },
        {
            icon: 'analytics',
            title: 'Informes y Dashboards',
            desc: 'Tu sistema consolida datos en tiempo real y genera informes ejecutivos que antes tardaban horas de trabajo manual en Excel.',
            features: ['Reportes diarios/semanales auto-enviados', 'Dashboards actualizados en vivo', 'Alertas por indicadores fuera de rango', 'Exportación a Excel/PDF con 1 clic'],
        },
        {
            icon: 'notifications_active',
            title: 'Alertas y Recordatorios',
            desc: 'El sistema detecta eventos críticos y notifica a las personas correctas: pagos pendientes, vencimientos, stock bajo o metas no alcanzadas.',
            features: ['Notificaciones por correo o WhatsApp', 'Escalamiento automático por urgencia', 'Recordatorios programados', 'Silenciamiento inteligente'],
        },
        {
            icon: 'inventory_2',
            title: 'Control de Inventario',
            desc: 'Entradas, salidas y ajustes registrados automáticamente desde tu punto de venta o formulario de recepción. Cero hojas de cálculo.',
            features: ['Conteo en tiempo real', 'Alertas de stock mínimo', 'Órdenes de compra auto-generadas', 'Historial de movimientos completo'],
        },
        {
            icon: 'manage_accounts',
            title: 'Flujos de Aprobación',
            desc: 'Solicitudes de gasto, permisos, vacaciones o compras que pasan por una cadena de aprobación digital, trazable y sin papel.',
            features: ['Cadena de aprobadores configurable', 'Historial de decisiones auditado', 'Aprobación desde móvil', 'Recordatorios a aprobadores inactivos'],
        },
        {
            icon: 'receipt_long',
            title: 'Facturación y Cobranza',
            desc: 'Desde la orden hasta el cobro: el sistema genera y envía facturas, registra pagos, identifica deudores y lanza recordatorios de cobranza.',
            features: ['Facturación CFDI automatizada', 'Seguimiento de pagos pendientes', 'Recordatorios de cobranza por etapa', 'Conciliación bancaria asistida'],
        },
    ];

    const stats = [
        { icon: 'schedule', value: '80%', label: 'de reducción promedio en tiempo de tareas repetitivas administrativas' },
        { icon: 'error_outline', value: '95%', label: 'menos errores humanos en captura de datos y generación de documentos' },
        { icon: 'trending_up', value: '3×', label: 'más rápido el ciclo de aprobación vs. procesos manuales en papel' },
        { icon: 'savings', value: '$0', label: 'de costo por tarea automatizada después del primer mes de operación' },
    ];

    const howSteps = [
        {
            num: 'PASO 01', icon: 'search', iconBg: 'emerald',
            title: 'Mapeamos tus procesos manuales',
            desc: 'Antes de automatizar, entendemos exactamente cómo fluye la información hoy: quién la recibe, quién la edita, dónde se atasca y cuánto tiempo cuesta.',
            tags: ['Entrevista de procesos', 'Diagrama de flujo', 'Inventario de tareas'],
        },
        {
            num: 'PASO 02', icon: 'rule', iconBg: 'blue',
            title: 'Definimos las reglas del negocio',
            desc: 'Traducimos tus decisiones cotidianas a lógica de sistema: si X entonces Y. Esta fase es la más importante — aquí el sistema aprende a pensar como tú.',
            tags: ['Reglas de validación', 'Condiciones y excepciones', 'Flujos de aprobación'],
        },
        {
            num: 'PASO 03', icon: 'code', iconBg: 'violet',
            title: 'Construimos dentro de tu plataforma',
            desc: 'La automatización no es un software por separado — vive dentro de tu sistema existente. Cada módulo habla con los demás sin intervención humana.',
            tags: ['Integración nativa', 'Triggers y eventos', 'Zero external dependencies'],
        },
        {
            num: 'PASO 04', icon: 'science', iconBg: 'amber',
            title: 'Probamos con datos reales',
            desc: 'Cada automatización pasa por una fase de piloto con escenarios reales: el borde del límite, el caso raro, el error humano intencional.',
            tags: ['Pruebas de regresión', 'Edge cases documentados', 'Validación con usuario final'],
        },
        {
            num: 'PASO 05', icon: 'rocket_launch', iconBg: 'emerald',
            title: 'Monitoreo continuo post-lanzamiento',
            desc: 'Una vez activa, la automatización se monitorea. Si un flujo falla o genera resultados inesperados, el sistema lo registra y genera una alerta antes de que lo notes.',
            tags: ['Logs de ejecución', 'Alertas de fallos', 'Historial auditable'],
        },
    ];

    const compareRows = [
        { feature: 'Generación de reporte mensual', manual: '4-6 horas de trabajo', auto: 'Automático cada cierre de mes' },
        { feature: 'Notificación de pago pendiente', manual: 'Depende de que alguien lo recuerde', auto: 'Automático: 3, 7 y 15 días' },
        { feature: 'Factura generada y enviada', manual: '15-20 min por factura', auto: 'Instantáneo al confirmar pedido' },
        { feature: 'Alta de nuevo cliente en sistema', manual: 'Captura manual en múltiples campos', auto: 'Un formulario → todos los módulos' },
        { feature: 'Revisión de stock diario', manual: 'Conteo físico o reporte en Excel', auto: 'Tiempo real en dashboard' },
        { feature: 'Aprobación de solicitud de gasto', manual: 'Email + seguimiento + papel', auto: 'Flujo digital con historial' },
        { feature: 'Auditoría de cambios', manual: 'Imposible o muy costosa', auto: 'Log automático cada acción' },
    ];


    return (
        <div className="atp-root" data-theme={isDarkMode ? 'dark' : 'light'}>

            {/* Progress */}
            <div className="atp-progress-wrap">
                <div className="atp-progress-fill" ref={progressRef} />
            </div>

            {/* Nav */}
            <nav className="atp-topnav">
                <Link to="/" className="atp-back-btn">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Volver al inicio
                </Link>
                <div className="atp-nav-actions">
                    <button onClick={() => setIsDarkMode(d => !d)} className="atp-theme-btn" aria-label="Cambiar tema">
                        <span className="material-symbols-outlined atp-icon-sm">
                            {isDarkMode ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                    <Link to="/#contacto" className="atp-nav-cta">
                        Hablar con nosotros
                        <span className="material-symbols-outlined atp-icon-xs">arrow_forward</span>
                    </Link>
                </div>
            </nav>

            {/* ── HERO ── */}
            <section className="atp-hero">
                <div className="atp-hero-orb-1" />
                <div className="atp-hero-orb-2" />
                <div className="atp-hero-grid" />
                <div className="atp-hero-lines">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="atp-flow-line" />)}
                </div>

                <div className="atp-hero-inner">
                    {/* Copy */}
                    <div>
                        <div className="atp-hero-label">
                            <div className="atp-hero-dot" />
                            Automatización de Procesos
                        </div>
                        <h1 className="atp-hero-title">
                            Tu equipo hace el trabajo que importa.<br />
                            El sistema hace <span className="atp-hero-gradient">lo repetitivo.</span>
                        </h1>
                        <p className="atp-hero-subtitle">
                            Integramos automatización directamente en tus plataformas: gestión documental, notificaciones, informes, aprobaciones y cobranza — sin hojas de cálculo, sin correos de seguimiento, sin errores humanos.
                        </p>
                        <div className="atp-hero-actions">
                            <Link to="/#contacto" className="atp-hero-btn-primary">
                                Ver cómo funciona en mi negocio
                                <span className="material-symbols-outlined atp-icon-sm">arrow_forward</span>
                            </Link>
                            <a href="#areas" className="atp-hero-btn-secondary">
                                Explorar áreas
                            </a>
                        </div>
                    </div>

                    {/* Workflow diagram */}
                    <div className="atp-workflow-diagram">
                        <div className="atp-workflow-card">
                            <div className="atp-workflow-header">
                                <span className="material-symbols-outlined atp-icon-sm atp-icon-green">
                                    account_tree
                                </span>
                                <span className="atp-workflow-title">Flujo de proceso activo</span>
                                <div className="atp-workflow-live">
                                    <div className="atp-workflow-live-dot" />
                                    Live
                                </div>
                            </div>

                            <div className="atp-workflow-steps">
                                {workflowSteps.map((step, i) => (
                                    <div key={i} className="atp-wf-step">
                                        <div className="atp-wf-icon-wrap" data-iconbg={step.iconBg}>
                                            <span className="material-symbols-outlined atp-wf-icon" data-iconcolor={step.iconBg}>
                                                {step.icon}
                                            </span>
                                        </div>
                                        <div className="atp-wf-content">
                                            <div className="atp-wf-label">{step.label}</div>
                                            <div className="atp-wf-detail">{step.detail}</div>
                                            <div className={`atp-wf-status atp-status-${step.status}`}>
                                                <span className="material-symbols-outlined atp-status-icon">
                                                    {step.status === 'done' ? 'check_circle' : step.status === 'running' ? 'sync' : 'schedule'}
                                                </span>
                                                {step.statusLabel}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="atp-wf-metrics">
                                <div className="atp-wf-metric">
                                    <div className="atp-wf-metric-val">2</div>
                                    <div className="atp-wf-metric-label">Completados hoy</div>
                                </div>
                                <div className="atp-wf-metric">
                                    <div className="atp-wf-metric-val">0</div>
                                    <div className="atp-wf-metric-label">Errores</div>
                                </div>
                                <div className="atp-wf-metric">
                                    <div className="atp-wf-metric-val">4.2s</div>
                                    <div className="atp-wf-metric-label">Tiempo prom.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── QUÉ ES LA AUTOMATIZACIÓN ── */}
            <section className="atp-section atp-what-bg">
                <div className="atp-section-inner">
                    <div className="atp-what-grid">
                        <div className="atp-what-text">
                            <div className="atp-section-label">
                                <span className="material-symbols-outlined atp-icon-xs">help_outline</span>
                                ¿Qué es?
                            </div>
                            <h2 className="atp-section-title">
                                Automatización es hacer que tu sistema trabaje solo, correctamente.
                            </h2>
                            <div className="atp-what-quote">
                                <p className="atp-what-quote-text">
                                    "Si un humano tiene que hacer la misma acción más de 3 veces, el sistema debería hacerlo por él."
                                </p>
                            </div>
                            <p className="atp-section-sub atp-section-sub-tight">
                                No se trata de reemplazar personas — se trata de liberarlas de las tareas que no requieren juicio humano para que se enfoquen en lo que sí lo requiere.
                            </p>
                            <ul className="atp-what-checklist">
                                {[
                                    'Una acción del usuario desencadena una cadena de eventos automáticos',
                                    'El sistema valida, calcula y decide según reglas del negocio',
                                    'Se generan documentos, notificaciones e informes sin intervención',
                                    'Todo queda registrado, trazable y auditable',
                                ].map((item, i) => (
                                    <li key={i} className="atp-what-check-item">
                                        <span className="material-symbols-outlined atp-check-icon">check_circle</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Before / After */}
                        <div className="atp-before-after">
                            <div className="atp-ba-card atp-ba-card-before">
                                <div className="atp-ba-label atp-ba-label-before">
                                    <span className="material-symbols-outlined atp-ba-icon-xs">close</span>
                                    Sin automatización
                                </div>
                                <div className="atp-ba-items">
                                    {[
                                        'El cliente paga → alguien revisa el correo → actualiza Excel → genera la factura a mano → la envía manualmente.',
                                        'El stock se revisa los lunes, cuando ya hay faltantes que nadie notó.',
                                        'El informe mensual lo hace alguien en 6 horas copiando datos entre hojas.',
                                        'Las aprobaciones se pierden en cadenas de correos sin historial.',
                                        'Nadie sabe quién modificó qué ni cuándo.',
                                    ].map((item, i) => (
                                        <div key={i} className="atp-ba-item">
                                            <span className="material-symbols-outlined atp-ba-icon-bad">cancel</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="atp-ba-card atp-ba-card-after">
                                <div className="atp-ba-label atp-ba-label-after">
                                    <span className="material-symbols-outlined atp-ba-icon-xs">check</span>
                                    Con automatización FiberLink
                                </div>
                                <div className="atp-ba-items">
                                    {[
                                        'El pago se confirma → el sistema genera la factura, la envía y actualiza el registro en segundos.',
                                        'El sistema alerta en tiempo real cuando el stock cae bajo el mínimo configurado.',
                                        'El informe se envía automáticamente cada cierre de mes con los datos consolidados.',
                                        'Las solicitudes siguen un flujo predefinido con historial completo y auditable.',
                                        'Cada cambio queda registrado: quién, cuándo y qué modificó.',
                                    ].map((item, i) => (
                                        <div key={i} className="atp-ba-item">
                                            <span className="material-symbols-outlined atp-ba-icon-good">check_circle</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ÁREAS DE AUTOMATIZACIÓN ── */}
            <section className="atp-section" id="areas">
                <div className="atp-section-wide">
                    <div className="atp-section-label">
                        <span className="material-symbols-outlined atp-icon-xs">category</span>
                        Áreas de Automatización
                    </div>
                    <h2 className="atp-section-title">
                        ¿En qué partes de tu negocio lo implementamos?
                    </h2>
                    <p className="atp-section-sub">
                        Automatizamos los procesos que más tiempo consumen y más errores generan. Cada área puede activarse de forma independiente o como parte de una plataforma integrada.
                    </p>

                    <div className="atp-areas-grid">
                        {areas.map((area, i) => (
                            <div key={i} className="atp-area-card">
                                <div className="atp-area-card-glow" />
                                <div className="atp-area-icon-wrap">
                                    <span className="material-symbols-outlined atp-area-icon">{area.icon}</span>
                                </div>
                                <div className="atp-area-title">{area.title}</div>
                                <div className="atp-area-desc">{area.desc}</div>
                                <ul className="atp-area-features">
                                    {area.features.map((f, fi) => (
                                        <li key={fi} className="atp-area-feature">
                                            <span className="material-symbols-outlined atp-area-feature-icon">arrow_right</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── STATS ── */}
            <section className="atp-stats-strip">
                <div className="atp-stats-grid">
                    {stats.map((s, i) => (
                        <div key={i} className="atp-stat-card">
                            <span className="material-symbols-outlined atp-stat-icon">{s.icon}</span>
                            <div className="atp-stat-value">{s.value}</div>
                            <div className="atp-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CÓMO LO IMPLEMENTAMOS ── */}
            <section className="atp-section atp-how-bg">
                <div className="atp-section-inner">
                    <div className="atp-section-label">
                        <span className="material-symbols-outlined atp-icon-xs">build</span>
                        Nuestra Metodología
                    </div>
                    <h2 className="atp-section-title">
                        Cómo llevamos la automatización a tu operación, paso a paso.
                    </h2>
                    <p className="atp-section-sub">
                        No instalamos software genérico — diseñamos cada automatización a la medida de cómo funciona tu negocio específicamente.
                    </p>

                    <div className="atp-how-steps">
                        {howSteps.map((step, i) => (
                            <div key={i} className="atp-how-step">
                                <div className="atp-how-step-left">
                                    <div className="atp-how-step-num">{step.num}</div>
                                    <div className="atp-how-icon-wrap" data-iconbg={step.iconBg}>
                                        <span className="material-symbols-outlined atp-how-icon" data-iconcolor={step.iconBg}>
                                            {step.icon}
                                        </span>
                                    </div>
                                </div>
                                <div className="atp-how-step-content">
                                    <div className="atp-how-step-title">{step.title}</div>
                                    <div className="atp-how-step-desc">{step.desc}</div>
                                    <div className="atp-how-tags">
                                        {step.tags.map((tag, ti) => (
                                            <span key={ti} className="atp-how-tag">
                                                <span className="material-symbols-outlined atp-how-tag-icon">label</span>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── COMPARISON TABLE ── */}
            <section className="atp-section atp-compare-bg">
                <div className="atp-section-wide">
                    <div className="atp-compare-header">
                        <div className="atp-section-label atp-compare-label">
                            <span className="material-symbols-outlined atp-icon-xs">compare_arrows</span>
                            Manual vs. Automatizado
                        </div>
                        <h2 className="atp-section-title">
                            La diferencia que se ve todos los días.
                        </h2>
                        <p className="atp-section-sub">
                            No son estimaciones hipotéticas — son las diferencias reales que registran los negocios que pasaron de procesos manuales a plataformas automatizadas.
                        </p>
                    </div>

                    <div className="atp-compare-table">
                        <div className="atp-cmp-header">
                            <div className="atp-cmp-cell">Tarea / Proceso</div>
                            <div className="atp-cmp-cell">
                                <span className="atp-cross-red">✗</span> Manual
                            </div>
                            <div className="atp-cmp-cell">
                                <span className="atp-check-green">✓</span> Con FiberLink
                            </div>
                        </div>
                        {compareRows.map((row, i) => (
                            <div key={i} className="atp-cmp-row">
                                <div className="atp-cmp-cell atp-cmp-feat">{row.feature}</div>
                                <div className="atp-cmp-cell atp-cmp-manual">
                                    <span className="atp-cross-red">✗</span> {row.manual}
                                </div>
                                <div className="atp-cmp-cell atp-cmp-auto">
                                    <span className="atp-check-green">✓</span> {row.auto}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA FINAL ── */}
            <section className="atp-cta-banner">
                <div className="atp-cta-orb" />
                <div className="atp-cta-inner">
                    <div className="atp-cta-tag">
                        <span className="material-symbols-outlined atp-icon-xs">electric_bolt</span>
                        Empieza hoy
                    </div>
                    <h2 className="atp-cta-title">
                        Dinos qué proceso te consume más tiempo.<br />
                        Lo automatizamos.
                    </h2>
                    <p className="atp-cta-sub">
                        En 30 minutos identificamos los 3 flujos con mayor potencial de automatización en tu operación y te mostramos cómo funcionaría dentro de tu sistema actual o uno nuevo.
                    </p>
                    <div className="atp-cta-actions">
                        <Link to="/#contacto" className="atp-cta-btn">
                            Quiero automatizar mi proceso
                            <span className="material-symbols-outlined atp-icon-sm">arrow_forward</span>
                        </Link>
                        <Link to="/servicios/desarrollo-web" className="atp-cta-btn-ghost">
                            Ver Desarrollo Web
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="atp-footer">
                <p>© 2026 FiberLink Labs · <Link to="/">Inicio</Link> · <Link to="/#soluciones">Soluciones</Link> · <Link to="/servicios/desarrollo-web">Desarrollo Web</Link></p>
            </footer>
        </div>
    );
};

export default AutomatizacionPage;
