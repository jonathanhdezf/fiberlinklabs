import { useEffect, useRef } from 'react'
import './WebDevPlansModal.css'

interface WebDevPlansModalProps {
    isOpen: boolean
    onClose: () => void
}

const plans = [
    {
        id: 'starter',
        name: 'Starter',
        tagline: 'Para empresas que dan el primer paso digital.',
        price: '$12,500',
        period: 'pago único',
        highlight: false,
        badge: null,
        color: 'blue',
        icon: 'rocket_launch',
        features: [
            { icon: 'dashboard', text: 'Dashboard administrativo personalizado' },
            { icon: 'devices', text: 'Diseño responsive y accesible' },
            { icon: 'speed', text: 'Optimización básica de Core Web Vitals' },
            { icon: 'lock', text: 'Autenticación de usuarios' },
            { icon: 'support_agent', text: 'Soporte técnico 30 días' },
            { icon: 'code', text: '1 integración de API externa' },
        ],
        cta: 'Iniciar proyecto',
        notIncluded: ['Portal B2B / autoservicio', 'Multi-tenancy', 'SLA premium'],
    },
    {
        id: 'pro',
        name: 'Pro',
        tagline: 'La plataforma que centraliza y escala tu operación.',
        price: '$28,000',
        period: 'pago único',
        highlight: true,
        badge: 'Más popular',
        color: 'indigo',
        icon: 'workspace_premium',
        features: [
            { icon: 'dashboard', text: 'Dashboard avanzado con analíticas en tiempo real' },
            { icon: 'storefront', text: 'Portal de autoservicio B2B completo' },
            { icon: 'bolt', text: 'Optimización avanzada de Core Web Vitals' },
            { icon: 'group', text: 'Multi-role y control de permisos granular' },
            { icon: 'sync', text: 'Sincronización en tiempo real (WebSockets)' },
            { icon: 'api', text: 'Hasta 5 integraciones de API externas' },
            { icon: 'notifications', text: 'Notificaciones y alertas automatizadas' },
            { icon: 'support_agent', text: 'Soporte técnico 90 días' },
        ],
        cta: 'Elegir Pro',
        notIncluded: ['Multi-tenancy', 'SLA premium 24/7'],
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        tagline: 'Arquitectura sin límites para operaciones complejas.',
        price: 'A medida',
        period: 'cotización personalizada',
        highlight: false,
        badge: 'Para grandes empresas',
        color: 'purple',
        icon: 'corporate_fare',
        features: [
            { icon: 'dashboard', text: 'Dashboards ilimitados y personalizados' },
            { icon: 'storefront', text: 'Portales B2B multi-tenancy' },
            { icon: 'verified', text: 'Core Web Vitals score 95+ garantizado' },
            { icon: 'security', text: 'Auditoría de seguridad y pentesting' },
            { icon: 'lan', text: 'Arquitectura distribuida / microservicios' },
            { icon: 'api', text: 'Integraciones ilimitadas' },
            { icon: 'monitoring', text: 'Monitoreo y DevOps incluidos' },
            { icon: 'headset_mic', text: 'SLA premium 24/7 con gerente de cuenta' },
        ],
        cta: 'Agendar consultoría',
        notIncluded: [],
    },
]


export default function WebDevPlansModal({ isOpen, onClose }: WebDevPlansModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            document.addEventListener('keydown', handleKey)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div
            ref={overlayRef}
            onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
            className="wdpm-overlay"
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Planes de Desarrollo Web Empresarial"
                className="wdpm-dialog"
            >
                <button
                    onClick={onClose}
                    aria-label="Cerrar modal"
                    className="wdpm-close-btn"
                >
                    <span className="material-symbols-outlined wdpm-close-icon">close</span>
                </button>

                <div className="wdpm-header">
                    <div className="wdpm-badge-container">
                        <span className="material-symbols-outlined wdpm-header-icon">web_asset</span>
                        <span className="wdpm-badge-text">
                            Desarrollo Web Empresarial
                        </span>
                    </div>
                    <h2 className="wdpm-title">
                        Plataformas que{' '}
                        <span className="wdpm-title-gradient">
                            escalan contigo
                        </span>
                    </h2>
                    <p className="wdpm-subtitle">
                        Creamos plataformas robustas que centralizan la operación de tu negocio.
                        No solo se ven bien, están construidas para escalar.
                    </p>
                    <div className="wdpm-pills">
                        {['Dashboards personalizados', 'Portales de autoservicio B2B', 'Optimización de Core Web Vitals'].map(tag => (
                            <span key={tag} className="wdpm-pill">
                                <span className="material-symbols-outlined wdpm-pill-icon">check_circle</span>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="wdpm-grid">
                    {plans.map((plan, idx) => {
                        return (
                            <div
                                key={plan.id}
                                className={`wdpm-card wdpm-card-${idx}`}
                                data-highlight={plan.highlight ? "true" : "false"}
                                data-color={plan.color}
                                data-price-colored={plan.price === 'A medida' ? "true" : "false"}
                            >
                                {plan.badge && (
                                    <div className="wdpm-card-badge">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="wdpm-plan-header">
                                    <div className="wdpm-icon-wrapper">
                                        <span className="material-symbols-outlined wdpm-plan-icon">
                                            {plan.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="wdpm-plan-name">{plan.name}</h3>
                                        <p className="wdpm-plan-tagline">
                                            {plan.tagline}
                                        </p>
                                    </div>
                                </div>

                                <div className="wdpm-price-container">
                                    <div className="wdpm-price-row">
                                        <span className="wdpm-price-text">
                                            {plan.price}
                                        </span>
                                    </div>
                                    <p className="wdpm-period-text">
                                        {plan.period}
                                    </p>
                                </div>

                                <ul className="wdpm-features-list">
                                    {plan.features.map((feat, fi) => (
                                        <li key={fi} className="wdpm-feature-row">
                                            <span className="material-symbols-outlined wdpm-feature-icon">
                                                {feat.icon}
                                            </span>
                                            <span className="wdpm-feature-text">{feat.text}</span>
                                        </li>
                                    ))}
                                    {plan.notIncluded.map((feat, fi) => (
                                        <li key={`no-${fi}`} className="wdpm-feature-row wdpm-feature-disabled">
                                            <span className="material-symbols-outlined wdpm-feature-disabled-icon">
                                                remove_circle
                                            </span>
                                            <span className="wdpm-feature-disabled-text">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contacto"
                                    onClick={onClose}
                                    className="wdpm-cta-btn"
                                >
                                    {plan.cta}
                                    <span className="material-symbols-outlined wdpm-cta-icon">arrow_forward</span>
                                </a>
                            </div>
                        )
                    })}
                </div>

                <p className="wdpm-footer-note">
                    <span className="material-symbols-outlined wdpm-info-icon">info</span>
                    Todos los planes incluyen garantía de calidad y entrega en fases definidas. ¿Dudas?{' '}
                    <a href="#contacto" onClick={onClose} className="wdpm-footer-link">Escríbenos.</a>
                </p>
            </div>
        </div>
    )
}
