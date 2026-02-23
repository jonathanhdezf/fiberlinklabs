import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';

const BlogPOSWebTradicional = () => {
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

    const comparison = [
        {
            feature: 'Costo inicial',
            tradicional: 'Alto (hardware + licencia + instalación)',
            web: 'Bajo (solo desarrollo o suscripción)',
            winner: 'web',
        },
        {
            feature: 'Acceso remoto',
            tradicional: 'No disponible o requiere VPN compleja',
            web: 'Desde cualquier dispositivo con internet',
            winner: 'web',
        },
        {
            feature: 'Actualización del sistema',
            tradicional: 'Manual, costosa, requiere técnico',
            web: 'Automática y transparente',
            winner: 'web',
        },
        {
            feature: 'Funcionamiento sin internet',
            tradicional: 'Completo',
            web: 'Modo offline disponible con PWA',
            winner: 'tie',
        },
        {
            feature: 'Integración con otros sistemas',
            tradicional: 'Limitada, requiere módulos adicionales',
            web: 'APIs abiertas: SAT, bancos, ERP, CRM',
            winner: 'web',
        },
        {
            feature: 'Reportes en tiempo real',
            tradicional: 'Parcial, generalmente al cierre del día',
            web: 'En tiempo real desde cualquier lugar',
            winner: 'web',
        },
        {
            feature: 'Velocidad de respuesta (hardware potente)',
            tradicional: 'Más rápido en terminales dedicadas',
            web: 'Muy rápido con conexión decente',
            winner: 'tie',
        },
        {
            feature: 'Escalabilidad (nuevas sucursales)',
            tradicional: 'Costosa: nuevo hardware por sucursal',
            web: 'Inmediata: solo una nueva cuenta',
            winner: 'web',
        },
    ];

    const useCases = [
        {
            icon: 'storefront',
            title: 'Tiendas de Conveniencia',
            desc: 'Alta rotación de productos, múltiples cajeros, reportes de caja por turno. El POS Web permite al dueño ver las ventas en tiempo real desde su celular.',
            indicator: 'web',
        },
        {
            icon: 'restaurant',
            title: 'Restaurantes',
            desc: 'Integración con cocina, control de mesas, splits de cuenta. El POS Web conecta sala, barra y cocina en un solo sistema accesible desde tablets.',
            indicator: 'web',
        },
        {
            icon: 'local_pharmacy',
            title: 'Farmacias / Abarrotes',
            desc: 'Control estricto de inventario con fechas de caducidad, lotes y proveedores. El POS Web centraliza el catálogo y elimina duplicados.',
            indicator: 'web',
        },
        {
            icon: 'spa',
            title: 'Servicios y Salones',
            desc: 'Agenda, historial de clientes, paquetes. El POS Web actúa como CRM ligero integrado directamente al proceso de cobro.',
            indicator: 'web',
        },
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

            <header className="blog-hero blog-hero-emerald">
                <div className="blog-hero-bg blog-hero-bg-emerald" />
                <div className="blog-hero-inner">
                    <div className="blog-meta-row">
                        <span className="blog-category-pill blog-pill-emerald">Tecnología para Negocios</span>
                        <span className="blog-read-time">
                            <span className="material-symbols-outlined">schedule</span>
                            9 min lectura
                        </span>
                    </div>
                    <h1 className="blog-hero-title">
                        POS Web vs. POS Tradicional:<br />
                        <span className="blog-hero-gradient blog-gradient-emerald">La Guía Definitiva para Negocios en Crecimiento</span>
                    </h1>
                    <p className="blog-hero-subtitle">
                        Comparativa honesta, sin sesgos de proveedor. Todo lo que necesitas saber antes de elegir el sistema de punto de venta que va a procesar tus transacciones día a día.
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

            <article className="blog-article-body">
                <div className="blog-content-wrap">

                    <h2 className="blog-h2">¿Qué es exactamente un POS Web?</h2>
                    <p className="blog-p">
                        Un POS (Point of Sale) tradicional es un software que se instala localmente en una computadora o terminal dedicada, con una base de datos local. Un POS Web, en cambio, funciona completamente en el navegador — no requiere instalación, los datos se almacenan en la nube y puede usarse desde cualquier dispositivo con conexión a internet.
                    </p>
                    <p className="blog-p">
                        La distinción importa porque define cómo escala tu negocio, qué tan rápido puedes reaccionar a problemas, y cuánto pagas en mantenimiento año con año.
                    </p>

                    <div className="blog-callout blog-callout-info">
                        <span className="material-symbols-outlined blog-callout-icon">info</span>
                        <div>
                            <strong>Dato clave</strong>
                            <p>El mercado global de POS en la nube creció 24.3% en 2024, siendo Latinoamérica la región de mayor adopción acelerada, impulsada por la digitalización post-pandemia de pequeñas empresas.</p>
                        </div>
                    </div>

                    <h2 className="blog-h2">Comparativa Directa: 8 Factores Clave</h2>
                    <p className="blog-p">Esta es la comparativa sin filtros que todo dueño de negocio debería leer antes de firmar con cualquier proveedor:</p>

                    {/* Comparison table */}
                    <div className="blog-comparison-table">
                        <div className="blog-comp-header">
                            <div className="blog-comp-cell blog-comp-feature">Factor</div>
                            <div className="blog-comp-cell blog-comp-traditional">
                                <span className="material-symbols-outlined">computer</span> POS Tradicional
                            </div>
                            <div className="blog-comp-cell blog-comp-web">
                                <span className="material-symbols-outlined">cloud</span> POS Web
                            </div>
                        </div>
                        {comparison.map((row, i) => (
                            <div key={i} className={`blog-comp-row ${i % 2 === 0 ? 'blog-comp-row-alt' : ''}`}>
                                <div className="blog-comp-cell blog-comp-feature">{row.feature}</div>
                                <div className={`blog-comp-cell ${row.winner === 'traditional' ? 'blog-comp-winner' : ''}`}>
                                    {row.winner === 'traditional' && <span className="blog-comp-check">✓</span>}
                                    {row.tradicional}
                                </div>
                                <div className={`blog-comp-cell ${row.winner === 'web' ? 'blog-comp-winner-web' : ''}`}>
                                    {row.winner === 'web' && <span className="blog-comp-check-web">✓</span>}
                                    {row.web}
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="blog-h2">¿Para qué tipo de negocio sirve mejor cada uno?</h2>
                    <p className="blog-p">
                        La respuesta honesta: en el 90% de los casos donde existe conexión a internet, el POS Web gana. Pero el contexto importa. Aquí van los casos de uso más comunes:
                    </p>

                    <div className="blog-use-cases">
                        {useCases.map((uc, i) => (
                            <div key={i} className="blog-use-card">
                                <div className="blog-use-icon-wrap">
                                    <span className="material-symbols-outlined blog-use-icon">{uc.icon}</span>
                                </div>
                                <div>
                                    <h4 className="blog-use-title">{uc.title}</h4>
                                    <p className="blog-use-desc">{uc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="blog-callout blog-callout-warning">
                        <span className="material-symbols-outlined blog-callout-icon">warning</span>
                        <div>
                            <strong>Cuándo SÍ tiene sentido usar POS Tradicional</strong>
                            <p>En zonas rurales sin conexión a internet estable, en negocios de alto volumen que procesan más de 500 transacciones por hora, o cuando las regulaciones del sector requieren datos estrictamente locales. Fuera de estos casos, el POS Web es la opción objetivamente superior.</p>
                        </div>
                    </div>

                    <h2 className="blog-h2">El POS que Construimos para la Tienda de Conveniencia Local</h2>
                    <p className="blog-p">
                        En nuestro proyecto <strong>"Punto de Venta Web MVP"</strong>, desarrollamos un sistema completo estilo OXXO para una tienda de conveniencia local con 2 cajeros y 3,000 SKUs de inventario. El resultado: <strong>reducción del 80% en errores de caja</strong> en el primer mes.
                    </p>
                    <p className="blog-p">
                        El sistema incluyó: carrito de compras con búsqueda por código de barras y nombre, control de inventario en tiempo real, registro de turno por cajero, roles de usuario diferenciados (cajero vs. administrador), y reportes diarios automáticos al correo del dueño.
                    </p>
                    <p className="blog-p">
                        Todo funcionando desde el navegador, sin instalar nada, desde cualquier dispositivo. El dueño ahora revisa las ventas del día desde su celular mientras hace otra cosa.
                    </p>

                    <div className="blog-cta-box">
                        <div className="blog-cta-content">
                            <span className="material-symbols-outlined blog-cta-icon">point_of_sale</span>
                            <h3 className="blog-cta-title">¿Necesitas un POS hecho a la medida de tu negocio?</h3>
                            <p className="blog-cta-desc">En 12 semanas tenemos un MVP funcional en producción. Sin software genérico que se adapta a medias — construimos exactamente lo que tu operación necesita.</p>
                            <Link to="/#contacto" className="blog-cta-btn blog-cta-btn-emerald">
                                Consultar mi caso
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

export default BlogPOSWebTradicional;
