import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './InfraestructuraCloudPage.css';

const InfraestructuraCloudPage = () => {
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
    const serverNodes = [
        { icon: 'dns', color: 'cyan', name: 'Servidor de aplicación', detail: 'Node · React · API REST', status: 'up', statusLabel: 'En línea' },
        { icon: 'storage', color: 'violet', name: 'Base de datos gestionada', detail: 'PostgreSQL · Backups diarios', status: 'up', statusLabel: 'En línea' },
        { icon: 'cloud_sync', color: 'emerald', name: 'CDN / Assets globales', detail: 'Archivos estáticos · SSL', status: 'sync', statusLabel: 'Sincronizando' },
        { icon: 'security', color: 'amber', name: 'Firewall y WAF', detail: 'Reglas activas · DDoS off', status: 'up', statusLabel: 'Protegido' },
    ];

    const services = [
        {
            icon: 'cloud_upload',
            title: 'Hosting de aplicaciones web',
            desc: 'Tu plataforma vive en servidores redundantes con alta disponibilidad. Sin caídas por sobrecarga, sin pérdidas de datos, sin sorpresas.',
            tags: ['$0 downtime', 'Auto-scaling', 'SSL gratuito'],
        },
        {
            icon: 'storage',
            title: 'Bases de datos en la nube',
            desc: 'PostgreSQL, MySQL o bases NoSQL gestionadas por nosotros: actualizaciones, backups automáticos, monitoreo de rendimiento e índices optimizados.',
            tags: ['Backups diarios', 'Failover automático', 'Encriptación en reposo'],
        },
        {
            icon: 'backup',
            title: 'Respaldos automáticos',
            desc: 'Cada noche tu sistema y sus datos se respaldan automáticamente. En caso de fallo, podemos restaurar a cualquier punto del último mes.',
            tags: ['30 días de historial', 'Restauración en minutos', 'Offsite replication'],
        },
        {
            icon: 'language',
            title: 'CDN y caché global',
            desc: 'Los archivos de tu plataforma se sirven desde el nodo más cercano al usuario final. Páginas que cargan en < 1 segundo desde cualquier país.',
            tags: ['< 1s TTFB', 'Assets optimizados', 'Edge caching'],
        },
        {
            icon: 'security',
            title: 'SSL, firewall y WAF',
            desc: 'Certificados SSL gestionados y renovados automáticamente. Firewall + Web Application Firewall que bloquea ataques comunes antes de llegar a tu app.',
            tags: ['SSL wildcard', 'DDoS mitigation', 'OWASP Top 10'],
        },
        {
            icon: 'monitor_heart',
            title: 'Monitoreo 24/7 y alertas',
            desc: 'Supervisamos CPU, memoria, errores y latencia en tiempo real. Si algo sale del rango normal, recibimos una alerta antes de que lo note tu usuario.',
            tags: ['Uptime monitoring', 'Alertas por correo/SMS', 'Dashboard de métricas'],
        },
        {
            icon: 'mail_lock',
            title: 'Correo corporativo en la nube',
            desc: 'Tu dominio con correos @tuempresa.com alojados en la nube: sin servidores propios, sin problemas de spam, con almacenamiento ilimitado.',
            tags: ['SPF / DKIM / DMARC', 'Anti-spam avanzado', 'Sincronización móvil'],
        },
        {
            icon: 'deployed_code',
            title: 'CI/CD y despliegues automáticos',
            desc: 'Cada cambio aprobado en tu código se despliega automáticamente al servidor sin tiempo de inactividad. Tu equipo empuja cambios, el sistema hace el resto.',
            tags: ['Zero-downtime deploy', 'Rollback en 1 clic', 'Ambientes por rama'],
        },
        {
            icon: 'hub',
            title: 'Redes privadas e integración VPN',
            desc: 'Tu equipo accede a los servidores y datos internos a través de redes privadas seguras. Colaboración remota sin comprometer la seguridad.',
            tags: ['VPN gestionada', 'Tráfico cifrado', 'Acceso por IP restringida'],
        },
    ];

    const stats = [
        { icon: 'verified', value: '99.9%', label: 'de disponibilidad garantizada por contrato de servicio (SLA)' },
        { icon: 'speed', value: '< 1s', label: 'tiempo de carga promedio con CDN activo y activos optimizados' },
        { icon: 'backup', value: '30d', label: 'de historial de respaldos automáticos diarios para restaurar' },
        { icon: 'lock', value: '100%', label: 'del tráfico cifrado con SSL/TLS — sin exceptions, sin HTTP plano' },
    ];

    const tiers = [
        {
            icon: 'business_center',
            color: 'cyan',
            eyebrow: 'Negocio pequeño',
            title: 'Empieza bien desde el inicio',
            desc: 'Para el negocio que quiere una plataforma seria sin administrar servidores, sin pagar infraestructura sobredimensionada y sin necesitar un equipo de DevOps.',
            items: [
                'Hosting de app web o plataforma',
                'Base de datos gestionada',
                'SSL y dominio configurado',
                'Backups diarios automáticos',
                'Monitoreo básico 24/7',
                'Soporte por correo y chat',
            ],
            featured: false,
        },
        {
            icon: 'rocket_launch',
            color: 'violet',
            eyebrow: 'Negocio en crecimiento',
            title: 'Escala sin fricción técnica',
            desc: 'Para plataformas con tráfico creciente, múltiples módulos o integraciones que necesitan una infraestructura que responda antes de que sea urgente actuar.',
            items: [
                'Todo lo del nivel anterior',
                'CDN global activado',
                'Auto-scaling por demanda',
                'CI/CD para deploys automáticos',
                'WAF y firewall avanzado',
                'Dashboard de métricas en vivo',
            ],
            featured: true,
        },
        {
            icon: 'corporate_fare',
            color: 'indigo',
            eyebrow: 'Empresa / Multi-plataforma',
            title: 'Infraestructura de nivel enterprise',
            desc: 'Para organizaciones con múltiples plataformas, equipos técnicos propios o requerimientos de compliance, auditoría y alta disponibilidad regionalizada.',
            items: [
                'Todo lo de los niveles anteriores',
                'Arquitectura multi-región',
                'VPN privada para el equipo',
                'Correo corporativo con dominio',
                'SLA con tiempo de respuesta garantizado',
                'Auditoría de seguridad semestral',
            ],
            featured: false,
        },
    ];

    const archSteps = [
        { num: '01', icon: 'cloud_upload', title: 'Evaluamos tu aplicación', desc: 'Analizamos qué necesita tu plataforma en términos de cómputo, almacenamiento, tráfico y redundancia.' },
        { num: '02', icon: 'architecture', title: 'Diseñamos la arquitectura', desc: 'Definimos los componentes, regiones, políticas de backup y estrategia de acceso más adecuada para tu escala.' },
        { num: '03', icon: 'deployed_code', title: 'Migramos o desplegamos', desc: 'Llevamos tu plataforma a la nube sin tiempo de inactividad. Si ya tienes algo corriendo, lo migramos sin interrupciones.' },
        { num: '04', icon: 'monitor_heart', title: 'Monitoreamos y optimizamos', desc: 'Una vez activo, supervisamos en tiempo real y ajustamos recursos para que siempre pagues lo justo por lo que usas.' },
    ];

    return (
        <div className="cloud-root" data-theme={isDarkMode ? 'dark' : 'light'}>

            {/* Progress */}
            <div className="cloud-progress-wrap">
                <div className="cloud-progress-fill" ref={progressRef} />
            </div>

            {/* Nav */}
            <nav className="cloud-topnav">
                <Link to="/" className="cloud-back-btn">
                    <span className="material-symbols-outlined cloud-icon-sm">arrow_back</span>
                    Volver al inicio
                </Link>
                <div className="cloud-nav-actions">
                    <button onClick={() => setIsDarkMode(d => !d)} className="cloud-theme-btn" aria-label="Cambiar tema">
                        <span className="material-symbols-outlined cloud-icon-sm">
                            {isDarkMode ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>
                    <Link to="/#contacto" className="cloud-nav-cta">
                        Hablar con nosotros
                        <span className="material-symbols-outlined cloud-icon-xs">arrow_forward</span>
                    </Link>
                </div>
            </nav>

            {/* ── HERO ── */}
            <section className="cloud-hero">
                <div className="cloud-hero-orb-1" />
                <div className="cloud-hero-orb-2" />
                <div className="cloud-hero-grid" />

                {/* Animated packets */}
                <div className="cloud-hero-packets">
                    {[
                        { idx: '0' },
                        { idx: '1' },
                        { idx: '2' },
                        { idx: '3' },
                        { idx: '4' },
                    ].map((p) => (
                        <div key={p.idx} className="cloud-packet" data-packet={p.idx} />
                    ))}
                </div>

                <div className="cloud-hero-inner">
                    {/* Copy */}
                    <div>
                        <div className="cloud-hero-label">
                            <div className="cloud-hero-dot" />
                            Infraestructura Cloud
                        </div>
                        <h1 className="cloud-hero-title">
                            Tu plataforma siempre activa,<br />
                            <span className="cloud-hero-gradient">rápida y segura.</span>
                        </h1>
                        <p className="cloud-hero-subtitle">
                            Gestionamos la infraestructura en la nube para que tu plataforma funcione sin interrupciones: hosting, base de datos, backups, seguridad, correo corporativo y despliegues automáticos — todo sin que tú tengas que tocar un servidor.
                        </p>
                        <div className="cloud-hero-actions">
                            <Link to="/#contacto" className="cloud-hero-btn-primary">
                                Quiero mi infraestructura cloud
                                <span className="material-symbols-outlined cloud-icon-sm">arrow_forward</span>
                            </Link>
                            <a href="#servicios" className="cloud-hero-btn-secondary">
                                Ver qué incluye
                            </a>
                        </div>
                    </div>

                    {/* Server nodes diagram */}
                    <div className="cloud-diagram-wrap">
                        {serverNodes.map((node, i) => (
                            <div key={i} className="cloud-diagram-card">
                                <div className="cloud-server-icon-wrap" data-color={node.color}>
                                    <span className="material-symbols-outlined cloud-server-icon" data-color={node.color}>
                                        {node.icon}
                                    </span>
                                </div>
                                <div className="cloud-diag-info">
                                    <div className="cloud-diag-name">{node.name}</div>
                                    <div className="cloud-diag-detail">{node.detail}</div>
                                </div>
                                <div className={`cloud-diag-status ${node.status === 'up' ? 'cloud-status-up' : 'cloud-status-sync'}`}>
                                    <div className={`cloud-status-dot ${i === 0 ? 'cloud-status-dot-pulse' : ''}`} />
                                    {node.statusLabel}
                                </div>
                            </div>
                        ))}

                        <div className="cloud-uptime-banner">
                            <div>
                                <div className="cloud-uptime-val">99.9%</div>
                                <div className="cloud-uptime-label">SLA de disponibilidad</div>
                            </div>
                            <div className="cloud-uptime-divider">
                                <div className="cloud-uptime-val cloud-uptime-val-sm">0</div>
                                <div className="cloud-uptime-label">Incidentes activos</div>
                            </div>
                            <div className="cloud-uptime-divider">
                                <div className="cloud-uptime-val cloud-uptime-val-sm">4</div>
                                <div className="cloud-uptime-label">Servicios activos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── QUÉ ES ── */}
            <section className="cloud-section cloud-what-bg">
                <div className="cloud-section-inner">
                    <div className="cloud-what-grid">
                        <div>
                            <div className="cloud-section-label">
                                <span className="material-symbols-outlined cloud-icon-xs">help_outline</span>
                                ¿Qué es la Infraestructura Cloud?
                            </div>
                            <h2 className="cloud-section-title">
                                Es la base técnica sobre la que vive tu plataforma.
                            </h2>

                            <div className="cloud-pill-row">
                                {['Siempre activa', 'Escalable', 'Segura', 'Sin servidores propios', 'Gestionada'].map((p, i) => (
                                    <span key={i} className="cloud-pill">
                                        <span className="material-symbols-outlined cloud-pill-icon">check</span>
                                        {p}
                                    </span>
                                ))}
                            </div>

                            <p className="cloud-what-desc">
                                La infraestructura cloud es el conjunto de servidores, bases de datos, redes y servicios de respaldo que mantienen tu plataforma funcionando — alojados en centros de datos de alto rendimiento, sin que tú tengas que comprar ni administrar hardware.
                            </p>

                            <p className="cloud-what-desc">
                                En lugar de tener un servidor físico en una oficina o depender de hosting compartido lento, tu sistema vive en recursos cloud que escalan según la demanda, se respaldan automáticamente y se monitorean 24/7.
                            </p>

                            <div className="cloud-what-callout">
                                <p className="cloud-what-callout-text">
                                    "El 74% de las PYMEs que sufren pérdida de datos críticos cierran en los siguientes 18 meses. Un sistema de respaldos automáticos cuesta menos que un día de operación perdida."
                                </p>
                            </div>
                        </div>

                        {/* Old vs Cloud */}
                        <div className="cloud-old-new">
                            <div className="cloud-old-card">
                                <div className="cloud-card-label cloud-card-label-old">
                                    <span className="material-symbols-outlined cloud-card-label-icon">close</span>
                                    Sin infraestructura cloud
                                </div>
                                <div className="cloud-card-items">
                                    {[
                                        'El sitio se cae los lunes por la mañana cuando hay más tráfico.',
                                        'Los backups son manuales — o simplemente no existen.',
                                        'El servidor físico falla y se pierden días de datos.',
                                        'Actualizar el sistema implica horas de inactividad.',
                                        'No hay forma de saber si algo falló hasta que un cliente lo reporta.',
                                        'Escalar requiere comprar hardware nuevo meses antes de necesitarlo.',
                                    ].map((item, i) => (
                                        <div key={i} className="cloud-card-item">
                                            <span className="material-symbols-outlined cloud-icon-bad">cancel</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="cloud-new-card">
                                <div className="cloud-card-label cloud-card-label-new">
                                    <span className="material-symbols-outlined cloud-card-label-icon">cloud</span>
                                    Con FiberLink Cloud
                                </div>
                                <div className="cloud-card-items">
                                    {[
                                        'Tu plataforma escala automáticamente en horas pico — sin intervención.',
                                        'Respaldo automático diario con 30 días de historial restaurable.',
                                        'Alta disponibilidad con redundancia: si un nodo falla, otro toma el relevo.',
                                        'Deploys sin downtime — tus usuarios no notan las actualizaciones.',
                                        'Alertas automáticas antes de que un error llegue a tus usuarios.',
                                        'Pagas por lo que usas — creces sin invertir en hardware de antemano.',
                                    ].map((item, i) => (
                                        <div key={i} className="cloud-card-item">
                                            <span className="material-symbols-outlined cloud-icon-good">check_circle</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICIOS ── */}
            <section className="cloud-section" id="servicios">
                <div className="cloud-section-wide">
                    <div className="cloud-section-label">
                        <span className="material-symbols-outlined cloud-icon-xs">cloud</span>
                        Servicios incluidos
                    </div>
                    <h2 className="cloud-section-title">
                        Todo lo que mantiene tu plataforma en pie.
                    </h2>
                    <p className="cloud-section-sub">
                        No es solo hosting — es una pila completa de infraestructura gestionada para que tu equipo se enfoque en el producto, no en los servidores.
                    </p>

                    <div className="cloud-services-grid">
                        {services.map((svc, i) => (
                            <div key={i} className="cloud-svc-card">
                                <div className="cloud-svc-glow" />
                                <div className="cloud-svc-icon-wrap">
                                    <span className="material-symbols-outlined cloud-svc-icon">{svc.icon}</span>
                                </div>
                                <div className="cloud-svc-title">{svc.title}</div>
                                <div className="cloud-svc-desc">{svc.desc}</div>
                                <div className="cloud-svc-tags">
                                    {svc.tags.map((tag, ti) => (
                                        <span key={ti} className="cloud-svc-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── STATS ── */}
            <section className="cloud-stats-strip">
                <div className="cloud-stats-grid">
                    {stats.map((s, i) => (
                        <div key={i} className="cloud-stat-card">
                            <span className="material-symbols-outlined cloud-stat-icon">{s.icon}</span>
                            <div className="cloud-stat-value">{s.value}</div>
                            <div className="cloud-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── TIERS ── */}
            <section className="cloud-section cloud-tiers-bg" id="planes">
                <div className="cloud-section-wide">
                    <div className="cloud-section-label">
                        <span className="cloud-icon-xs material-symbols-outlined">layers</span>
                        Escala contigo
                    </div>
                    <h2 className="cloud-section-title">
                        Desde tu primera plataforma hasta infraestructura de empresa.
                    </h2>
                    <p className="cloud-section-sub">
                        La infraestructura que contratas hoy puede crecer con tu negocio — sin migrar de proveedor, sin reiniciar la configuración, sin tiempo de inactividad.
                    </p>

                    <div className="cloud-tiers-grid">
                        {tiers.map((tier, i) => (
                            <div key={i} className="cloud-tier-card" data-featured={tier.featured ? 'true' : 'false'}>
                                {tier.featured && <div className="cloud-tier-badge">Más popular</div>}
                                <div className="cloud-tier-icon-wrap" data-color={tier.color}>
                                    <span className="material-symbols-outlined cloud-tier-icon" data-color={tier.color}>
                                        {tier.icon}
                                    </span>
                                </div>
                                <div className="cloud-tier-eyebrow">{tier.eyebrow}</div>
                                <div className="cloud-tier-title">{tier.title}</div>
                                <div className="cloud-tier-desc">{tier.desc}</div>
                                <ul className="cloud-tier-list">
                                    {tier.items.map((item, ii) => (
                                        <li key={ii} className="cloud-tier-list-item">
                                            <span className="material-symbols-outlined cloud-tier-check">check_circle</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CÓMO LO IMPLEMENTAMOS ── */}
            <section className="cloud-arch-bg">
                <div className="cloud-section-wide">
                    <div className="cloud-arch-header">
                        <div className="cloud-section-label cloud-section-label-centered">
                            <span className="material-symbols-outlined cloud-icon-xs">build</span>
                            Cómo lo implementamos
                        </div>
                        <h2 className="cloud-section-title cloud-section-title-white cloud-section-title-centered">
                            Tu plataforma en la nube en menos de una semana.
                        </h2>
                        <p className="cloud-section-sub cloud-section-sub-center-dark">
                            No hay semanas de configuración ni esperas largas. Seguimos un proceso probado para que tu infraestructura quede lista, documentada y monitorizada.
                        </p>
                    </div>

                    <div className="cloud-arch-cols">
                        {archSteps.map((step, i) => (
                            <div key={i} className="cloud-arch-card">
                                <div className="cloud-arch-num">PASO {step.num}</div>
                                <div className="cloud-arch-icon-wrap">
                                    <span className="material-symbols-outlined cloud-arch-icon">{step.icon}</span>
                                </div>
                                <div className="cloud-arch-card-title">{step.title}</div>
                                <div className="cloud-arch-card-desc">{step.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA FINAL ── */}
            <section className="cloud-cta-banner">
                <div className="cloud-cta-orb" />
                <div className="cloud-cta-inner">
                    <div className="cloud-cta-tag">
                        <span className="material-symbols-outlined cloud-icon-xs">electric_bolt</span>
                        Sin complicaciones
                    </div>
                    <h2 className="cloud-cta-title">
                        Tu plataforma merece una base<br />técnica a la altura.
                    </h2>
                    <p className="cloud-cta-sub">
                        En 30 minutos evaluamos tu situación actual — qué tienes corriendo, qué necesita mejorar y cuál sería la arquitectura ideal para tu operación específica. Sin compromiso.
                    </p>
                    <div className="cloud-cta-actions">
                        <Link to="/#contacto" className="cloud-cta-btn">
                            Quiero mi infraestructura cloud
                            <span className="material-symbols-outlined cloud-icon-sm">arrow_forward</span>
                        </Link>
                        <Link to="/servicios/sistema-pos" className="cloud-cta-btn-ghost">
                            Ver Sistema POS
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="cloud-footer">
                <p>© 2026 FiberLink Labs · <Link to="/">Inicio</Link> · <Link to="/#soluciones">Soluciones</Link> · <Link to="/servicios/desarrollo-web">Desarrollo Web</Link> · <Link to="/servicios/automatizacion">Automatización</Link> · <Link to="/servicios/sistema-pos">Sistema POS</Link></p>
            </footer>
        </div>
    );
};

export default InfraestructuraCloudPage;
