import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';

const BlogExcelPlatforma = () => {
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

    const metrics = [
        { value: '73%', label: 'de las PyMEs en México aún usan Excel como su principal herramienta de gestión', icon: 'table_chart' },
        { value: '4×', label: 'más rápido el procesamiento de datos en una plataforma web vs. hojas de cálculo', icon: 'speed' },
        { value: '↓60%', label: 'reducción en errores humanos al migrar a un sistema centralizado', icon: 'bug_report' },
        { value: '12 sem', label: 'tiempo promedio para tener un MVP funcional listo para producción', icon: 'schedule' },
    ];

    const phases = [
        {
            num: '01',
            title: 'Auditoría de Procesos',
            desc: 'Mapeamos todos los flujos actuales, identificamos cuellos de botella en tus hojas de cálculo y determinamos qué módulos tienen mayor impacto si se digitalizan primero.',
            icon: 'search',
            color: 'blue',
        },
        {
            num: '02',
            title: 'Diseño de Arquitectura',
            desc: 'Diseñamos la base de datos, los roles de usuario y el flujo de pantallas antes de escribir una sola línea de código. Esta fase ahorra semanas de retrabajos.',
            icon: 'architecture',
            color: 'indigo',
        },
        {
            num: '03',
            title: 'Desarrollo Iterativo (MVP)',
            desc: 'Construimos en sprints de 2 semanas. Empiezas a usar el sistema antes de que esté 100% completo, lo que genera retroalimentación real y un producto final que realmente encaja.',
            icon: 'code',
            color: 'violet',
        },
        {
            num: '04',
            title: 'Migración y Capacitación',
            desc: 'Importamos tus datos históricos de Excel, capacitamos a tu equipo y garantizamos un período de soporte activo para que la transición sea completamente fluida.',
            icon: 'move_up',
            color: 'teal',
        },
    ];

    const signals = [
        'Tu equipo pasa más de 2 horas al día consolidando información de múltiples archivos',
        'Tienes versiones diferentes del mismo reporte en distintas computadoras',
        'Es imposible saber qué está pasando en el negocio sin llamar a alguien',
        'El proceso de cierre mensual toma más de 3 días',
        'No puedes generar reportes automatizados para directivos',
        'Cuando una persona se va, se lleva el conocimiento de cómo funcionan los archivos',
    ];

    return (
        <div className="blog-article-root" data-theme={isDarkMode ? 'dark' : 'light'}>
            {/* Progress bar */}
            <div className="blog-progress-bar-wrap">
                <div className="blog-progress-bar-fill" ref={progressRef} />
            </div>

            {/* Nav */}
            <nav className="blog-topnav">
                <Link to="/#blog" className="blog-back-btn">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Blog Tech
                </Link>
                <button
                    onClick={() => setIsDarkMode(d => !d)}
                    className="blog-theme-btn"
                    aria-label="Toggle theme"
                >
                    <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
                </button>
            </nav>

            {/* Hero */}
            <header className="blog-hero">
                <div className="blog-hero-bg" />
                <div className="blog-hero-inner">
                    <div className="blog-meta-row">
                        <span className="blog-category-pill">Transformación Digital</span>
                        <span className="blog-read-time">
                            <span className="material-symbols-outlined">schedule</span>
                            7 min lectura
                        </span>
                    </div>
                    <h1 className="blog-hero-title">
                        De Excel a Plataforma:<br />
                        <span className="blog-hero-gradient">Cómo las PyMEs Mexicanas Digitalizan su Operación</span>
                    </h1>
                    <p className="blog-hero-subtitle">
                        El 73% de las pequeñas y medianas empresas en México operan con hojas de cálculo como columna vertebral. Aquí está la hoja de ruta para dar el salto sin perder el negocio en el intento.
                    </p>
                    <div className="blog-author-row">
                        <div className="blog-author-avatar">FL</div>
                        <div>
                            <div className="blog-author-name">Equipo FiberLink Labs</div>
                            <div className="blog-author-date">23 de Febrero, 2026 · Teziutlán, Puebla</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Metrics strip */}
            <section className="blog-metrics-strip">
                <div className="blog-metrics-grid">
                    {metrics.map((m, i) => (
                        <div key={i} className="blog-metric-card">
                            <span className="material-symbols-outlined blog-metric-icon">{m.icon}</span>
                            <div className="blog-metric-value">{m.value}</div>
                            <div className="blog-metric-label">{m.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Article body */}
            <article className="blog-article-body">
                <div className="blog-content-wrap">

                    <h2 className="blog-h2">El Problema con Excel No Es Excel</h2>
                    <p className="blog-p">
                        Excel es una herramienta extraordinaria. Fue diseñada para el análisis de datos, la modelación financiera y los cálculos complejos. El problema no es la herramienta — es que la mayoría de las empresas la usan para hacer cosas para las que nunca fue diseñada: gestión de inventario en tiempo real, control de nómina de 50 personas, seguimiento de clientes y pedidos simultáneos.
                    </p>
                    <p className="blog-p">
                        Cuando tu empresa opera con hojas de cálculo para procesos críticos, estás construyendo un rascacielos sobre cimientos de cartón. Funciona hasta que deja de funcionar — y cuando falla, falla caro.
                    </p>

                    <div className="blog-callout blog-callout-warning">
                        <span className="material-symbols-outlined blog-callout-icon">warning</span>
                        <div>
                            <strong>El costo oculto de Excel</strong>
                            <p>Un estudio de Accenture estima que las empresas que dependen de procesos manuales gastan hasta el 30% de su tiempo laboral corriendo información — tiempo que no genera valor.</p>
                        </div>
                    </div>

                    <h2 className="blog-h2">Las 6 Señales de que Es Momento de Migrar</h2>
                    <p className="blog-p">No esperes a que el sistema colapse. Estas son las señales de advertencia temprana:</p>

                    <ul className="blog-signal-list">
                        {signals.map((s, i) => (
                            <li key={i} className="blog-signal-item">
                                <span className="material-symbols-outlined blog-signal-icon">crisis_alert</span>
                                {s}
                            </li>
                        ))}
                    </ul>

                    <p className="blog-p">
                        Si identificas 3 o más de estas señales, tu empresa ya está pagando el costo de la digitalización pendiente. La diferencia es que lo estás pagando en fricción, errores y tiempo perdido en lugar de en una solución que resuelva el problema de raíz.
                    </p>

                    <h2 className="blog-h2">La Arquitectura de una Plataforma para PyMEs</h2>
                    <p className="blog-p">
                        No todas las empresas necesitan el mismo sistema. La clave es entender qué módulos tienen el mayor impacto según tu modelo de negocio. En FiberLink Labs hemos identificado un patrón común en las PyMEs mexicanas exitosas:
                    </p>

                    <div className="blog-arch-grid">
                        {[
                            { icon: 'group', title: 'Gestión de Usuarios y Roles', desc: 'Control granular de quién puede ver qué. Fundamental para separar operaciones de finanzas y dirección.' },
                            { icon: 'inventory_2', title: 'Módulo Operativo Core', desc: 'El corazón del negocio: inventario, pedidos, servicios o producción, dependiendo del giro.' },
                            { icon: 'payments', title: 'Finanzas y Facturación', desc: 'Cuentas por cobrar, por pagar, y la integración con el SAT para facturación electrónica.' },
                            { icon: 'bar_chart', title: 'Dashboard de Indicadores', desc: 'KPIs en tiempo real para que la dirección tome decisiones con datos, no con intuición.' },
                            { icon: 'notifications_active', title: 'Alertas y Automatizaciones', desc: 'Correos automáticos, recordatorios de pago, alertas de stock mínimo — el sistema trabaja mientras duermes.' },
                            { icon: 'phone_android', title: 'Diseño Mobile-First', desc: 'El 68% del acceso empresarial en México ya es desde dispositivo móvil. Tu plataforma debe funcionar perfectamente en celular.' },
                        ].map((item, i) => (
                            <div key={i} className="blog-arch-card">
                                <span className="material-symbols-outlined blog-arch-icon">{item.icon}</span>
                                <h4 className="blog-arch-title">{item.title}</h4>
                                <p className="blog-arch-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="blog-h2">Nuestra Metodología: Las 4 Fases de Migración</h2>
                    <p className="blog-p">
                        En los últimos 2 años hemos ejecutado migraciones digitales para empresas de manufactura, servicios profesionales, educación y comercio minorista. Este es el proceso que funciona:
                    </p>

                    <div className="blog-phases">
                        {phases.map((phase, i) => (
                            <div key={i} className="blog-phase-card">
                                <div className="blog-phase-num" data-color={phase.color}>
                                    {phase.num}
                                </div>
                                <div className="blog-phase-body">
                                    <div className="blog-phase-header">
                                        <span className="material-symbols-outlined blog-phase-icon">{phase.icon}</span>
                                        <h3 className="blog-phase-title">{phase.title}</h3>
                                    </div>
                                    <p className="blog-phase-desc">{phase.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="blog-callout blog-callout-info">
                        <span className="material-symbols-outlined blog-callout-icon">lightbulb</span>
                        <div>
                            <strong>El Principio de Pareto Digital</strong>
                            <p>El 20% de las funcionalidades de tu plataforma resolverá el 80% de tus problemas operativos. Identificar ese 20% correcto en la fase de auditoría es la diferencia entre una inversión exitosa y un proyecto que nunca termina.</p>
                        </div>
                    </div>

                    <h2 className="blog-h2">El ROI Real de la Digitalización</h2>
                    <p className="blog-p">
                        Las empresas con las que hemos trabajado reportan, en promedio, una recuperación de la inversión en el primer año de operación de la plataforma. Los beneficios no son solo cuantitativos — el impacto en la confianza del equipo, la capacidad de escalar sin contratar más personal operativo y la calidad de las decisiones directivas es transformador.
                    </p>
                    <p className="blog-p">
                        En el caso del proyecto de <strong>Plataforma de Arrendamiento</strong> que construimos para un arrendador independiente con 40 propiedades, la reducción en tiempo de gestión fue del 95%. Lo que antes tomaba 3 horas diarias ahora toma 15 minutos.
                    </p>

                    <div className="blog-cta-box">
                        <div className="blog-cta-content">
                            <span className="material-symbols-outlined blog-cta-icon">rocket_launch</span>
                            <h3 className="blog-cta-title">¿Listo para dejar atrás el Excel?</h3>
                            <p className="blog-cta-desc">Agenda una sesión de diagnóstico gratuita de 30 minutos. Analizamos tu operación actual y te presentamos un plan de acción concreto.</p>
                            <Link to="/#contacto" className="blog-cta-btn">
                                Agendar Sesión Gratuita
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </article>

            {/* Related posts */}
            <section className="blog-related">
                <div className="blog-related-inner">
                    <h2 className="blog-related-title">Continúa leyendo</h2>
                    <div className="blog-related-grid">
                        <Link to="/blog/pos-web-vs-tradicional" className="blog-related-card">
                            <span className="blog-related-cat">Tecnología para Negocios</span>
                            <h4 className="blog-related-name">POS Web vs. POS Tradicional: La Guía Definitiva</h4>
                            <span className="material-symbols-outlined blog-related-arrow">arrow_forward</span>
                        </Link>
                        <Link to="/blog/dashboard-errores-operativos" className="blog-related-card">
                            <span className="blog-related-cat">Desarrollo Web</span>
                            <h4 className="blog-related-name">Cómo un Dashboard Reduce un 80% los Errores Operativos</h4>
                            <span className="material-symbols-outlined blog-related-arrow">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="blog-footer">
                <p>© 2026 FiberLink Labs · <Link to="/">Volver al inicio</Link></p>
            </footer>
        </div>
    );
};

export default BlogExcelPlatforma;
