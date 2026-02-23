import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './DesarrolloWebPage.css';

const DesarrolloWebPage = () => {
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

    /* ── Data arrays (no color inline props) ── */
    const codeLines: { num: number; parts: { t: string; v: string }[] }[] = [
        { num: 1, parts: [{ t: 'c-comment', v: '// FiberLink Labs — Filosofía de desarrollo' }] },
        { num: 2, parts: [] },
        { num: 3, parts: [{ t: 'c-keyword', v: 'const ' }, { t: 'c-func', v: 'build' }, { t: 'c-punct', v: '(' }, { t: 'c-type', v: 'business' }, { t: 'c-punct', v: ': ' }, { t: 'c-type', v: 'LocalBiz' }, { t: 'c-punct', v: ') => {' }] },
        { num: 4, parts: [{ t: 'c-plain', v: '  ' }, { t: 'c-keyword', v: 'const ' }, { t: 'c-plain', v: 'platform ' }, { t: 'c-punct', v: '= ' }, { t: 'c-func', v: 'design' }, { t: 'c-punct', v: '({' }] },
        { num: 5, parts: [{ t: 'c-plain', v: '    goal' }, { t: 'c-punct', v: ': ' }, { t: 'c-str', v: '"Acceso real a tech"' }, { t: 'c-punct', v: ',' }] },
        { num: 6, parts: [{ t: 'c-plain', v: '    cost' }, { t: 'c-punct', v: ': ' }, { t: 'c-str', v: '"accessible"' }, { t: 'c-punct', v: ',' }] },
        { num: 7, parts: [{ t: 'c-plain', v: '    scope' }, { t: 'c-punct', v: ': ' }, { t: 'c-str', v: '"MVP first"' }, { t: 'c-punct', v: ',' }] },
        { num: 8, parts: [{ t: 'c-plain', v: '    timeline' }, { t: 'c-punct', v: ': ' }, { t: 'c-num', v: '12' }, { t: 'c-plain', v: ' ' }, { t: 'c-comment', v: '// semanas' }] },
        { num: 9, parts: [{ t: 'c-punct', v: '  });' }] },
        { num: 10, parts: [] },
        { num: 11, parts: [{ t: 'c-keyword', v: '  return ' }, { t: 'c-func', v: 'launch' }, { t: 'c-punct', v: '(' }, { t: 'c-plain', v: 'platform' }, { t: 'c-punct', v: ');' }] },
        { num: 12, parts: [{ t: 'c-punct', v: '};' }] },
    ];

    // color keys used in data attributes resolved by CSS
    const bentoCards: {
        type: string;
        quote?: string; highlight?: string; wide?: boolean;
        stat?: string; statLabel?: string; color?: string;
        icon?: string; iconBg?: string; iconColor?: string;
        title?: string; body?: string;
    }[] = [
            { type: 'quote', quote: 'La web es la infraestructura más democrática que existe.', highlight: 'El único requisito es una idea y la ambición de construirla.', wide: true },
            { type: 'stat', stat: '4×', statLabel: 'más productivo es un negocio digitalmente estructurado vs. uno que opera exclusivamente con procesos físicos', icon: 'trending_up', iconBg: 'blue', iconColor: 'blue' },
            { type: 'feature', icon: 'code', iconBg: 'indigo', iconColor: 'indigo', title: 'El código bien escrito es silencioso', body: 'No se nota porque funciona. Esa es la diferencia entre construir con rigor y construir deprisa. Nos obsesiona el segundo tipo.' },
            { type: 'feature', icon: 'device_hub', iconBg: 'emerald', iconColor: 'emerald', title: 'Sistemas, no páginas', body: 'Una página web es una tarjeta de presentación digital. Una plataforma web es una extensión de tu negocio que trabaja 24/7. Construimos lo segundo.' },
            { type: 'feature', icon: 'psychology', iconBg: 'amber', iconColor: 'amber', title: 'UX no es cosmético', body: 'La diferencia entre 1 hora y 15 minutos en completar una tarea repetitiva es UX. Diseñamos para que las personas hagan más con menos esfuerzo.' },
            { type: 'stat', stat: '73%', statLabel: 'de las PyMEs en México aún opera sin una plataforma digital propia más allá de redes sociales', icon: 'business', iconBg: 'violet', iconColor: 'violet' },
        ];

    const manifesto = [
        { num: '01', title: 'Construimos herramientas, no vitrinas', desc: 'El sitio web bonito que nadie usa es dinero tirado. Cada proyecto que entregamos tiene un propósito operativo: ahorra tiempo, reduce errores o genera ingresos.' },
        { num: '02', title: 'El MVP es una postura filosófica', desc: 'Lanzar rápido no es descuido — es inteligencia. El mercado te enseña más en 2 semanas de uso real que en 6 meses de suposiciones de producto.' },
        { num: '03', title: 'La accesibilidad es nuestro propósito', desc: 'No construimos para corporativos con presupuestos millonarios. Construimos para el negocio que va creciendo y necesita tecnología a su medida.' },
        { num: '04', title: 'El código es la documentación más honesta', desc: 'Un sistema bien arquitectado se explica solo. Nos negamos a entregar software que solo el developer original puede entender.' },
        { num: '05', title: 'La velocidad de decisión es una ventaja competitiva', desc: 'Las empresas que toman decisiones con datos en tiempo real ganan. Un dashboard bien diseñado no es un lujo — es una obligación operativa.' },
        { num: '06', title: 'Calidad total no es perfeccionismo', desc: 'Perfección es el enemigo de lo bueno. Calidad total es asegurarte de que cada entrega hace exactamente lo que promete, sin excepciones.' },
    ];

    const strategySteps = [
        { num: 'PASO 01', icon: 'search', iconBg: 'blue', title: 'Diagnóstico de 30 Minutos', desc: 'Conversación gratuita donde entendemos tu operación, tus cuellos de botella y el impacto económico real de no tener una solución digital.' },
        { num: 'PASO 02', icon: 'architecture', iconBg: 'indigo', title: 'Propuesta a Medida', desc: '24-48 hrs después tienes una propuesta con alcance, timeline y costo total sin sorpresas. Sin letras chicas, sin módulos de "costo adicional".' },
        { num: 'PASO 03', icon: 'code', iconBg: 'violet', title: 'Construimos por Sprints', desc: 'Cada 2 semanas ves avances reales en un ambiente de pruebas. Tú pruebas, das retroalimentación y el producto evoluciona hacia lo correcto.' },
        { num: 'PASO 04', icon: 'rocket_launch', iconBg: 'emerald', title: 'Lanzamiento + Soporte', desc: 'Desplegamos en producción, capacitamos a tu equipo y te acompañamos los primeros meses para asegurar que el sistema se adopte de forma real.' },
    ];

    const pillars = [
        { icon: 'storefront', iconBg: 'blue', name: 'Presencia Digital Profesional', tagline: 'Para el negocio que quiere dar el primer paso digital con seriedad.', features: ['Sitio web responsive y optimizado', 'SEO técnico incluido', 'Formulario de contacto activo', 'Hosting + dominio gestionado', 'Panel de edición de contenidos'], featured: false },
        { icon: 'device_hub', iconBg: 'indigo', name: 'Plataforma Web MVP', tagline: 'Sistema funcional con lógica de negocio real. El salto de Excel a plataforma.', features: ['Autenticación + roles de usuario', 'Módulo operativo core (tu proceso principal)', 'Dashboard de indicadores básico', 'Notificaciones automáticas', 'Soporte activo por 3 meses'], featured: true },
        { icon: 'hub', iconBg: 'emerald', name: 'Solución Empresarial', tagline: 'Para negocios que ya digitalizaron y necesitan escalar su infraestructura.', features: ['Multi-sucursal y multi-rol', 'Integraciones con SAT, bancos, ERP', 'Analytics en tiempo real', 'API pública documentada', 'SLA de disponibilidad garantizado'], featured: false },
    ];

    const localPoints = [
        { icon: 'storefront', title: '¿Por qué los negocios locales nos importan?', desc: 'Somos de Teziutlán, Puebla. Entendemos el contexto del negocio local mexicano: márgenes ajustados, recursos humanos limitados y la presión de competir contra cadenas nacionales.' },
        { icon: 'currency_exchange', title: 'Inversión accesible, resultados reales', desc: 'Diseñamos contratos por proyecto, no suscripciones eternas. Pagas por lo que construimos, tienes el código en tu repositorio y no dependes de nosotros para siempre.' },
        { icon: 'support_agent', title: 'Acompañamiento, no abandono', desc: 'El 70% de los proyectos de software fallan por falta de adopción del equipo, no por problemas técnicos. Por eso incluimos capacitación y soporte post-lanzamiento en cada proyecto.' },
        { icon: 'trending_up', title: 'ROI en el primer año', desc: 'Nuestro criterio de éxito: que el sistema pague su costo en el primer año de operación a través de tiempo ahorrado, errores eliminados o ingresos incrementados.' },
    ];

    const impacts = [
        { value: '95%', label: 'reducción en tiempo de gestión diaria para el arrendador con 40 propiedades que digitalizamos' },
        { value: '12 sem', label: 'es el tiempo promedio de un MVP funcional listo para producción con usuarios reales' },
        { value: '0', label: 'proyectos abandonados — cada contrato que firmamos termina y se entrega' },
    ];

    return (
        <div className="dwp-root" data-theme={isDarkMode ? 'dark' : 'light'}>

            {/* Progress */}
            <div className="dwp-progress-wrap">
                <div className="dwp-progress-fill" ref={progressRef} />
            </div>

            {/* Nav */}
            <nav className="dwp-topnav">
                <Link to="/#soluciones" className="dwp-back-btn">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Volver a Soluciones
                </Link>
                <div className="dwp-nav-actions">
                    <button onClick={() => setIsDarkMode(d => !d)} className="dwp-theme-btn" aria-label="Cambiar tema">
                        <span className="material-symbols-outlined dwp-theme-icon">
                            {isDarkMode ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                    <Link to="/#contacto" className="dwp-nav-cta">
                        Hablar con nosotros
                        <span className="material-symbols-outlined dwp-nav-cta-arrow">arrow_forward</span>
                    </Link>
                </div>
            </nav>

            {/* ── HERO ── */}
            <section className="dwp-hero">
                <div className="dwp-hero-orb-1" />
                <div className="dwp-hero-orb-2" />
                <div className="dwp-hero-grid" />
                <div className="dwp-hero-inner">
                    <div>
                        <div className="dwp-hero-label">
                            <div className="dwp-hero-label-dot" />
                            Desarrollo Web Empresarial
                        </div>
                        <h1 className="dwp-hero-title">
                            Construimos <span className="dwp-hero-gradient">plataformas digitales</span><br />
                            que transforman negocios.
                        </h1>
                        <p className="dwp-hero-subtitle">
                            No solo escribimos código — diseñamos sistemas que resuelven problemas reales de operación para negocios locales en México que merecen acceso a tecnología de verdad.
                        </p>
                        <div className="dwp-hero-actions">
                            <Link to="/#contacto" className="dwp-hero-btn-primary">
                                Empieza tu proyecto
                                <span className="material-symbols-outlined dwp-hero-btn-icon">arrow_forward</span>
                            </Link>
                            <Link to="/#soluciones" className="dwp-hero-btn-secondary">
                                Ver planes
                            </Link>
                        </div>
                    </div>

                    {/* Code window */}
                    <div className="dwp-code-window">
                        <div className="dwp-code-titlebar">
                            <div className="dwp-code-dot dwp-code-dot-red" />
                            <div className="dwp-code-dot dwp-code-dot-yellow" />
                            <div className="dwp-code-dot dwp-code-dot-green" />
                            <span className="dwp-code-filename">fiberlink.config.ts</span>
                        </div>
                        <div className="dwp-code-body">
                            {codeLines.map((line, i) => (
                                <div key={i} className="dwp-code-line">
                                    <span className="dwp-line-num">{line.num}</span>
                                    <span>
                                        {line.parts.map((p, j) => (
                                            <span key={j} className={p.t}>{p.v}</span>
                                        ))}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── POR QUÉ AMAMOS EL DESARROLLO WEB ── */}
            <section className="dwp-section dwp-love-bg">
                <div className="dwp-section-wide">
                    <div className="dwp-section-label">
                        <span className="material-symbols-outlined dwp-label-icon">favorite</span>
                        Por qué lo amamos
                    </div>
                    <h2 className="dwp-section-title">
                        El desarrollo web es la respuesta más poderosa a casi cualquier problema de negocio.
                    </h2>
                    <p className="dwp-section-sub">
                        Nos dedicamos al desarrollo web porque creemos que es el campo de la ingeniería donde el impacto se ve más rápido, más claro y más humano.
                    </p>

                    <div className="dwp-bento-grid">
                        {bentoCards.map((card, i) => {
                            if (card.type === 'quote') {
                                return (
                                    <div key={i} className={`dwp-bento-card dwp-bento-card-dark ${card.wide ? 'dwp-bento-wide' : ''}`}>
                                        <div className="dwp-bento-quote">
                                            "{card.quote}" <span>{card.highlight}</span>
                                        </div>
                                    </div>
                                );
                            }
                            if (card.type === 'stat') {
                                return (
                                    <div key={i} className="dwp-bento-card" data-iconcolor={card.iconColor}>
                                        <div className="dwp-bento-icon-wrap" data-iconbg={card.iconBg}>
                                            <span className="material-symbols-outlined dwp-bento-icon" data-color={card.iconColor}>{card.icon}</span>
                                        </div>
                                        <div className="dwp-bento-stat" data-color={card.iconColor}>{card.stat}</div>
                                        <div className="dwp-bento-stat-label">{card.statLabel}</div>
                                    </div>
                                );
                            }
                            return (
                                <div key={i} className="dwp-bento-card">
                                    <div className="dwp-bento-icon-wrap" data-iconbg={card.iconBg}>
                                        <span className="material-symbols-outlined dwp-bento-icon" data-color={card.iconColor}>{card.icon}</span>
                                    </div>
                                    <div className="dwp-bento-title">{card.title}</div>
                                    <div className="dwp-bento-body">{card.body}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── MANIFIESTO ── */}
            <section className="dwp-section">
                <div className="dwp-section-inner">
                    <div className="dwp-section-label">
                        <span className="material-symbols-outlined dwp-label-icon">format_quote</span>
                        Nuestro Manifiesto
                    </div>
                    <h2 className="dwp-section-title">
                        Los principios que guían cada línea de código que escribimos.
                    </h2>
                    <p className="dwp-section-sub">
                        No somos una agencia que entrega proyectos en serie. Somos un equipo con una postura clara sobre cómo debe construirse el software para negocios reales.
                    </p>

                    <div className="dwp-manifesto-wrap">
                        {manifesto.map((m, i) => (
                            <div key={i} className="dwp-manifesto-card">
                                <div className="dwp-manifesto-num">{m.num}</div>
                                <div className="dwp-manifesto-content">
                                    <div className="dwp-manifesto-title">{m.title}</div>
                                    <div className="dwp-manifesto-desc">{m.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ESTRATEGIA ── */}
            <section className="dwp-section dwp-strategy-bg">
                <div className="dwp-section-wide">
                    <div className="dwp-strategy-header">
                        <div className="dwp-section-label dwp-strategy-label">
                            <span className="material-symbols-outlined dwp-label-icon">map</span>
                            Nuestra Estrategia
                        </div>
                        <h2 className="dwp-section-title dwp-section-title-light">
                            Cómo llevamos tecnología real a negocios locales.
                        </h2>
                        <p className="dwp-section-sub dwp-section-sub-dark">
                            La brecha entre "quiero digitalizar mi negocio" y "tengo una plataforma funcionando" no debería ser de 18 meses y $500,000 pesos. Este es nuestro proceso para reducirla a 12 semanas.
                        </p>
                    </div>

                    <div className="dwp-strategy-steps">
                        {strategySteps.map((step, i) => (
                            <div key={i} className="dwp-step-card">
                                <div className="dwp-step-connector" />
                                <div className="dwp-step-num">{step.num}</div>
                                <div className="dwp-step-icon-wrap" data-iconbg={step.iconBg}>
                                    <span className="material-symbols-outlined dwp-step-icon">{step.icon}</span>
                                </div>
                                <div className="dwp-step-title">{step.title}</div>
                                <div className="dwp-step-desc">{step.desc}</div>
                            </div>
                        ))}
                    </div>

                    <div className="dwp-pillars-grid">
                        {pillars.map((p, i) => (
                            <div key={i} className="dwp-pillar-card" data-featured={p.featured ? 'true' : 'false'}>
                                {p.featured && <div className="dwp-pillar-featured-badge">Más solicitado</div>}
                                <div className="dwp-pillar-icon-wrap" data-iconbg={p.iconBg}>
                                    <span className="material-symbols-outlined dwp-pillar-icon" data-color={p.iconBg}>{p.icon}</span>
                                </div>
                                <div className="dwp-pillar-name">{p.name}</div>
                                <div className="dwp-pillar-tagline">{p.tagline}</div>
                                <ul className="dwp-pillar-feature-list">
                                    {p.features.map((f, fi) => (
                                        <li key={fi} className="dwp-pillar-feature-item">
                                            <span className="material-symbols-outlined dwp-pillar-check">check_circle</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/#contacto" className="dwp-pillar-cta">
                                    Me interesa
                                    <span className="material-symbols-outlined dwp-pillar-cta-arrow">arrow_forward</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── NEGOCIOS LOCALES ── */}
            <section className="dwp-section dwp-local-section">
                <div className="dwp-section-inner">
                    <div className="dwp-section-label">
                        <span className="material-symbols-outlined dwp-label-icon">location_on</span>
                        Negocios Locales
                    </div>
                    <h2 className="dwp-section-title">
                        Por qué nos enfocamos en los negocios que crecen desde abajo.
                    </h2>

                    <div className="dwp-local-grid">
                        <div className="dwp-local-points">
                            {localPoints.map((pt, i) => (
                                <div key={i} className="dwp-local-point">
                                    <div className="dwp-local-icon-wrap">
                                        <span className="material-symbols-outlined dwp-local-icon">{pt.icon}</span>
                                    </div>
                                    <div>
                                        <div className="dwp-local-point-title">{pt.title}</div>
                                        <div className="dwp-local-point-desc">{pt.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="dwp-impact-list">
                            <p className="dwp-impact-heading">Impacto documentado en proyectos reales</p>
                            {impacts.map((imp, i) => (
                                <div key={i} className="dwp-impact-item">
                                    <div className="dwp-impact-value">{imp.value}</div>
                                    <div className="dwp-impact-label">{imp.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA FINAL ── */}
            <section className="dwp-cta-banner">
                <div className="dwp-cta-banner-orb" />
                <div className="dwp-cta-inner">
                    <div className="dwp-cta-tag">
                        <span className="material-symbols-outlined dwp-cta-tag-icon">electric_bolt</span>
                        Sin compromiso
                    </div>
                    <h2 className="dwp-cta-title">
                        30 minutos de diagnóstico<br />pueden cambiarlo todo.
                    </h2>
                    <p className="dwp-cta-sub">
                        Cuéntanos cómo funciona tu negocio hoy. Sin formularios complicados — solo una conversación donde analizamos si tiene sentido trabajar juntos y qué resultado realista puedes esperar.
                    </p>
                    <div className="dwp-cta-actions">
                        <Link to="/#contacto" className="dwp-cta-btn">
                            Agendar diagnóstico gratuito
                            <span className="material-symbols-outlined dwp-cta-btn-icon">arrow_forward</span>
                        </Link>
                        <Link to="/#soluciones" className="dwp-cta-btn-ghost">
                            Ver planes y precios
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="dwp-footer">
                <p>© 2026 FiberLink Labs · <Link to="/">Inicio</Link> · <Link to="/#soluciones">Soluciones</Link> · <Link to="/#blog">Blog Tech</Link></p>
            </footer>
        </div>
    );
};

export default DesarrolloWebPage;
