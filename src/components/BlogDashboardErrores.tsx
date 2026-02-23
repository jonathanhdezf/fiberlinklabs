import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';

const BlogDashboardErrores = () => {
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

    const principles = [
        {
            num: '01',
            icon: 'center_focus_strong',
            title: 'Jerarquía Visual Clara',
            desc: 'Los KPIs críticos deben estar en la parte superior y ser visibles sin hacer scroll. El ojo del usuario debe saber en 3 segundos si el negocio va bien o mal hoy.',
            detail: 'Utilizamos tamaños tipográficos agresivos (64px+ para cifras clave), color como semántica (verde = bien, rojo = acción requerida) y espaciado generoso para separar la señal del ruido.',
        },
        {
            num: '02',
            icon: 'bolt',
            title: 'El Principio de Acción Inmediata',
            desc: 'Cada métrica en tu dashboard debe ir acompañada de una acción posible. Si el usuario ve un número pero no sabe qué hacer con él, el dashboard falla.',
            detail: 'Diseñamos con la filosofía "ver→entender→actuar". Si el stock de un producto baja del mínimo, el dashboard no solo lo muestra — muestra el botón de reorden directamente en la alerta.',
        },
        {
            num: '03',
            icon: 'filter_alt',
            title: 'Contexto por Rol de Usuario',
            desc: 'El dashboard del director y el del supervisor de piso son completamente diferentes. Forzar a todos a ver la misma pantalla genera ruido y aumenta los errores.',
            detail: 'Implementamos dashboards basados en roles: el cajero ve su turno actual; el gerente ve comparativas semanales y alertas de equipo; la dirección ve márgen, crecimiento y proyecciones.',
        },
        {
            num: '04',
            icon: 'update',
            title: 'Datos en Tiempo Real, No en Foto',
            desc: 'Un dashboard que muestra datos del día anterior es solo un reporte disfrazado. La clave es la actualización automática y los indicadores de "cuándo fue la última vez que se actualizó".',
            detail: 'Implementamos WebSockets para datos críticos (inventario, caja) y polling cada 30-60 segundos para métricas de negocio. Cada widget muestra su timestamp de actualización.',
        },
        {
            num: '05',
            icon: 'touch_app',
            title: 'Interactividad con Propósito',
            desc: 'No todos los gráficos necesitan ser interactivos. La interactividad debe existir donde el usuario genuinamente necesita profundizar — no como adorno.',
            detail: 'Criterio de diseño: drill-down solo cuando la acción de profundizar tiene una consecuencia operativa. Si el usuario hace clic en "Ventas de Marzo", debería poder llegar a la transacción específica que causó un pico anormal.',
        },
    ];

    const mistakes = [
        { icon: 'bar_chart', title: 'Demasiados gráficos', desc: 'Más de 7-8 widgets en una pantalla y el cerebro deja de procesar. Cada gráfico que agregas compite por la atención del usuario.' },
        { icon: 'palette', title: 'Colores sin semántica', desc: 'Si usas 6 colores diferentes sin un significado claro detrás de cada uno, el usuario tiene que recordar "qué significa el azul aquí". Eso es carga cognitiva innecesaria.' },
        { icon: 'timeline', title: 'Gráficas de línea para todo', desc: 'Las gráficas de línea son para tendencias a lo largo del tiempo. Para comparar categorías usa barras. Para proporciones, usa donuts. Usar el tipo incorrecto confunde.' },
        { icon: 'numbers', title: 'Métricas de vanidad', desc: 'El número de visitas a tu sitio web no es un KPI operativo. Los dashboards deben mostrar métricas que cambien el comportamiento del equipo cuando se ven.' },
    ];

    return (
        <div className="blog-article-root" data-theme={isDarkMode ? 'dark' : 'light'}>
            <div className="blog-progress-bar-wrap">
                <div className="blog-progress-bar-fill" ref={progressRef} />
            </div>

            <nav className="blog-topnav">
                <Link to="/#blog" className="blog-back-btn">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Blog Tech
                </Link>
                <button onClick={() => setIsDarkMode(d => !d)} className="blog-theme-btn" aria-label="Toggle theme">
                    <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
                </button>
            </nav>

            <header className="blog-hero blog-hero-violet">
                <div className="blog-hero-bg blog-hero-bg-violet" />
                <div className="blog-hero-inner">
                    <div className="blog-meta-row">
                        <span className="blog-category-pill blog-pill-violet">Desarrollo Web</span>
                        <span className="blog-read-time">
                            <span className="material-symbols-outlined">schedule</span>
                            8 min lectura
                        </span>
                    </div>
                    <h1 className="blog-hero-title">
                        Cómo un Dashboard Bien Diseñado<br />
                        <span className="blog-hero-gradient blog-gradient-violet">Puede Reducir un 80% los Errores Operativos</span>
                    </h1>
                    <p className="blog-hero-subtitle">
                        La mayoría de los errores en operaciones de negocio no son errores de las personas — son errores de los sistemas que no les dan la información correcta en el momento correcto. El diseño del dashboard lo cambia todo.
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

            {/* Stats */}
            <section className="blog-metrics-strip blog-metrics-violet">
                <div className="blog-metrics-grid">
                    {[
                        { value: '80%', label: 'de reducción en errores operativos con dashboards bien diseñados', icon: 'bug_report' },
                        { value: '47%', label: 'del tiempo empresarial se pierde buscando información dispersa sin un dashboard central', icon: 'search' },
                        { value: '3 seg', label: 'es el tiempo máximo que debe tardar un usuario en entender el estado del negocio', icon: 'timer' },
                        { value: '4×', label: 'más rápidas son las decisiones cuando los datos están centralizados y visualizados', icon: 'speed' },
                    ].map((m, i) => (
                        <div key={i} className="blog-metric-card">
                            <span className="material-symbols-outlined blog-metric-icon">{m.icon}</span>
                            <div className="blog-metric-value">{m.value}</div>
                            <div className="blog-metric-label">{m.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <article className="blog-article-body">
                <div className="blog-content-wrap">

                    <h2 className="blog-h2">El Error Que Comete el 90% de los Negocios</h2>
                    <p className="blog-p">
                        Cuando las empresas piden un dashboard, generalmente piden más gráficas y más datos. Más colores, más líneas, más métricas. El resultado: un panel tan lleno de información que nadie lo entiende en menos de 2 minutos, y que termina siendo ignorado por el equipo operativo.
                    </p>
                    <p className="blog-p">
                        El propósito de un dashboard no es mostrar todo lo que sabes — es mostrarte exactamente lo que necesitas saber para tomar la siguiente decisión correcta. Esa distinción lo cambia todo.
                    </p>

                    <div className="blog-callout blog-callout-warning">
                        <span className="material-symbols-outlined blog-callout-icon">warning</span>
                        <div>
                            <strong>La paradoja de la información</strong>
                            <p>A más datos en pantalla, menos decisiones correctas. Estudios de UX empresarial muestran que cuando un dashboard supera 8-10 métricas simultáneas, la tasa de errores en decisiones operativas aumenta, no disminuye.</p>
                        </div>
                    </div>

                    <h2 className="blog-h2">Los 4 Errores de Dashboard Más Comunes</h2>
                    <div className="blog-mistakes-grid">
                        {mistakes.map((m, i) => (
                            <div key={i} className="blog-mistake-card">
                                <span className="material-symbols-outlined blog-mistake-icon">{m.icon}</span>
                                <h4 className="blog-mistake-title">{m.title}</h4>
                                <p className="blog-mistake-desc">{m.desc}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="blog-h2">Los 5 Principios de un Dashboard que Sí Funciona</h2>
                    <p className="blog-p">
                        Estos son los principios que aplicamos en cada plataforma que construimos en FiberLink Labs:
                    </p>

                    <div className="blog-phases">
                        {principles.map((p, i) => (
                            <div key={i} className="blog-phase-card">
                                <div className="blog-phase-num blog-phase-violet">
                                    {p.num}
                                </div>
                                <div className="blog-phase-body">
                                    <div className="blog-phase-header">
                                        <span className="material-symbols-outlined blog-phase-icon">{p.icon}</span>
                                        <h3 className="blog-phase-title">{p.title}</h3>
                                    </div>
                                    <p className="blog-phase-desc">{p.desc}</p>
                                    <p className="blog-phase-detail">{p.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="blog-h2">Caso Real: Dashboard de Nómina Empresarial</h2>
                    <p className="blog-p">
                        En nuestro proyecto de <strong>Plataforma de RRHH y Nómina MVP</strong> para una empresa industrial, el principal problema no era el cálculo de la nómina — era que nadie sabía en tiempo real cuántos empleados estaban activos, cuántos préstamos pendientes había y qué porcentaje del costo laboral representaba cada departamento.
                    </p>
                    <p className="blog-p">
                        Diseñamos un dashboard con 3 niveles de acceso: el operador de RRHH (gestión diaria de asistencia y movimientos), el administrador (aprobación de nómina y préstamos), y la dirección (visión financiera y proyecciones de costo laboral). Cada vista muestra exactamente lo que ese rol necesita — nada más, nada menos.
                    </p>
                    <p className="blog-p">
                        Resultado: <strong>reducción del 90% en errores de nómina</strong> y eliminación total del proceso de conciliación manual de Excel que tomaba 3 días cada quincena.
                    </p>

                    <div className="blog-callout blog-callout-info">
                        <span className="material-symbols-outlined blog-callout-icon">lightbulb</span>
                        <div>
                            <strong>Pregunta antes de diseñar</strong>
                            <p>"¿Cuál es la pregunta más importante que esta pantalla debe responder en 3 segundos?" Si no puedes responder eso antes de diseñar, el dashboard resultante será ruido visual, no una herramienta operativa.</p>
                        </div>
                    </div>

                    <h2 className="blog-h2">El Stack Técnico detrás de Dashboards en Tiempo Real</h2>
                    <p className="blog-p">
                        En nuestras plataformas usamos una combinación de tecnologías probadas para garantizar que los datos siempre estén frescos sin comprometer el rendimiento:
                    </p>

                    <div className="blog-arch-grid">
                        {[
                            { icon: 'bolt', title: 'WebSockets', desc: 'Para datos críticos que cambian en tiempo real: stock, caja activa, estado de pedidos en cocina.' },
                            { icon: 'refresh', title: 'Polling Inteligente', desc: 'Para métricas no críticas: actualizaciones cada 30-60 segundos sin sobrecargar el servidor.' },
                            { icon: 'database', title: 'Caché en Cliente', desc: 'Los datos históricos se cachean localmente. Solo se traen deltas del servidor, reduciendo el ancho de banda.' },
                            { icon: 'analytics', title: 'Agregaciones en Backend', desc: 'Los cálculos pesados (totales, promedios, tendencias) se hacen en el servidor, no en el navegador.' },
                            { icon: 'phone_android', title: 'Responsive por Diseño', desc: 'El dashboard en móvil no es una versión reducida — es una vista optimizada con las métricas más críticas.' },
                            { icon: 'offline_bolt', title: 'Resiliente a Desconexiones', desc: 'Los datos del último estado válido se muestran con un indicador de timestamp y alerta si hay más de 5 min sin datos.' },
                        ].map((item, i) => (
                            <div key={i} className="blog-arch-card">
                                <span className="material-symbols-outlined blog-arch-icon">{item.icon}</span>
                                <h4 className="blog-arch-title">{item.title}</h4>
                                <p className="blog-arch-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="blog-cta-box blog-cta-violet">
                        <div className="blog-cta-content">
                            <span className="material-symbols-outlined blog-cta-icon">dashboard</span>
                            <h3 className="blog-cta-title">¿Tu equipo toma decisiones a ciegas?</h3>
                            <p className="blog-cta-desc">Construimos el dashboard operativo que tu negocio necesita. En 4 semanas tienes una primera versión funcional con los KPIs que realmente importan.</p>
                            <Link to="/#contacto" className="blog-cta-btn blog-cta-btn-violet">
                                Quiero mi dashboard
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </article>

            <section className="blog-related">
                <div className="blog-related-inner">
                    <h2 className="blog-related-title">Continúa leyendo</h2>
                    <div className="blog-related-grid">
                        <Link to="/blog/excel-a-plataforma" className="blog-related-card">
                            <span className="blog-related-cat">Transformación Digital</span>
                            <h4 className="blog-related-name">De Excel a Plataforma: Cómo las PyMEs Digitalizan su Operación</h4>
                            <span className="material-symbols-outlined blog-related-arrow">arrow_forward</span>
                        </Link>
                        <Link to="/blog/pos-web-vs-tradicional" className="blog-related-card">
                            <span className="blog-related-cat">Tecnología para Negocios</span>
                            <h4 className="blog-related-name">POS Web vs. POS Tradicional: La Guía Definitiva</h4>
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

export default BlogDashboardErrores;
