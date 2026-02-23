import { useEffect, useRef } from 'react'
import './SmartSolutionsModal.css'

interface SmartSolutionsModalProps {
    isOpen: boolean
    onClose: () => void
}

const plans = [
    {
        id: 'esencial',
        name: 'Esencial',
        tagline: 'Para negocios que arrancan su digitalización operativa.',
        price: '$9,800',
        period: 'pago único',
        highlight: false,
        badge: null,
        color: 'teal',
        icon: 'point_of_sale',
        features: [
            { icon: 'point_of_sale', text: 'Sistema POS mono-tienda con catálogo digital' },
            { icon: 'inventory_2', text: 'Gestión de inventario básica en tiempo real' },
            { icon: 'receipt_long', text: 'Facturación electrónica CFDI 4.0' },
            { icon: 'bar_chart', text: 'Reportes de ventas diarios / semanales' },
            { icon: 'devices', text: 'Acceso web y tablet (sin app nativa)' },
            { icon: 'support_agent', text: 'Soporte técnico 30 días' },
        ],
        cta: 'Iniciar con Esencial',
        notIncluded: ['POS omnicanal multi-sucursal', 'Automatización de reorden', 'Integraciones ERP'],
    },
    {
        id: 'profesional',
        name: 'Profesional',
        tagline: 'La solución inteligente que elimina la fricción operativa.',
        price: '$22,500',
        period: 'pago único',
        highlight: true,
        badge: 'Más popular',
        color: 'emerald',
        icon: 'insights',
        features: [
            { icon: 'point_of_sale', text: 'POS omnicanal: tienda física + e-commerce' },
            { icon: 'warehouse', text: 'Gestión de stock multi-almacén en tiempo real' },
            { icon: 'receipt_long', text: 'Automatización de facturación y conciliación' },
            { icon: 'sync', text: 'Reorden automático por umbrales configurables' },
            { icon: 'analytics', text: 'Dashboard de rentabilidad y márgenes' },
            { icon: 'local_shipping', text: 'Tracking de pedidos y proveedores' },
            { icon: 'smartphone', text: 'App móvil iOS y Android incluida' },
            { icon: 'support_agent', text: 'Soporte técnico 90 días' },
        ],
        cta: 'Elegir Profesional',
        notIncluded: ['Integración ERP / SAP', 'BI avanzado con predicción'],
    },
    {
        id: 'corporativo',
        name: 'Corporativo',
        tagline: 'Operación a escala: múltiples sucursales, un solo control.',
        price: 'A medida',
        period: 'cotización personalizada',
        highlight: false,
        badge: 'Grandes operaciones',
        color: 'cyan',
        icon: 'corporate_fare',
        features: [
            { icon: 'point_of_sale', text: 'POS omnicanal ilimitado con multi-empresa' },
            { icon: 'warehouse', text: 'Inventario centralizado con BI predictivo' },
            { icon: 'receipt_long', text: 'Facturación masiva + conciliación bancaria' },
            { icon: 'hub', text: 'Integración ERP / SAP / Contpaqi' },
            { icon: 'table_chart', text: 'Cuadros de mando ejecutivos personalizados' },
            { icon: 'security', text: 'Auditoría de accesos y trazabilidad completa' },
            { icon: 'monitoring', text: 'Monitoreo 24/7 con alertas en tiempo real' },
            { icon: 'headset_mic', text: 'SLA premium + gerente de cuenta dedicado' },
        ],
        cta: 'Agendar consultoría',
        notIncluded: [],
    },
]


export default function SmartSolutionsModal({ isOpen, onClose }: SmartSolutionsModalProps) {
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
            className="ssm-overlay"
        >
            {/* Dialog */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Planes de Soluciones Inteligentes"
                className="ssm-dialog"
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    aria-label="Cerrar modal"
                    className="ssm-close-btn"
                >
                    <span className="material-symbols-outlined ssm-close-icon">close</span>
                </button>

                {/* Header */}
                <div className="ssm-header">
                    <div className="ssm-badge-container">
                        <span className="material-symbols-outlined ssm-header-icon">insights</span>
                        <span className="ssm-badge-text">
                            Soluciones Inteligentes
                        </span>
                    </div>

                    <h2 className="ssm-title">
                        POS + Inventario que{' '}
                        <span className="ssm-title-gradient">
                            trabajan solos
                        </span>
                    </h2>

                    <p className="ssm-subtitle">
                        Integramos herramientas de punto de venta e inventario que eliminan la fricción
                        operativa y mejoran la rentabilidad de tu negocio.
                    </p>

                    {/* Feature pills */}
                    <div className="ssm-pills">
                        {['Sistemas POS omnicanal', 'Gestión de stock en tiempo real', 'Automatización de facturación'].map(tag => (
                            <span key={tag} className="ssm-pill">
                                <span className="material-symbols-outlined ssm-pill-icon">check_circle</span>
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Stats strip */}
                    <div className="ssm-stats-strip">
                        {[
                            { value: '↓ 40%', label: 'errores de inventario' },
                            { value: '3×', label: 'más rápido en caja' },
                            { value: '↑ 22%', label: 'rentabilidad promedio' },
                        ].map((stat, i) => (
                            <div key={stat.label} className={`ssm-stat-box ssm-stat-${i + 1}`}>
                                <div className="ssm-stat-value">{stat.value}</div>
                                <div className="ssm-stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="ssm-grid">
                    {plans.map((plan, idx) => {
                        return (
                            <div
                                key={plan.id}
                                className={`ssm-card ssm-card-${idx}`}
                                data-highlight={plan.highlight ? "true" : "false"}
                                data-color={plan.color}
                                data-price-colored={plan.price === 'A medida' ? "true" : "false"}
                            >
                                {/* Badge */}
                                {plan.badge && (
                                    <div className="ssm-card-badge">
                                        {plan.badge}
                                    </div>
                                )}

                                {/* Plan header */}
                                <div className="ssm-plan-header">
                                    <div className="ssm-icon-wrapper">
                                        <span className="material-symbols-outlined ssm-plan-icon">
                                            {plan.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="ssm-plan-name">{plan.name}</h3>
                                        <p className="ssm-plan-tagline">
                                            {plan.tagline}
                                        </p>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="ssm-price-container">
                                    <div className="ssm-price-row">
                                        <span className="ssm-price-text">
                                            {plan.price}
                                        </span>
                                    </div>
                                    <p className="ssm-period-text">
                                        {plan.period}
                                    </p>
                                </div>

                                {/* Features */}
                                <ul className="ssm-features-list">
                                    {plan.features.map((feat, fi) => (
                                        <li key={fi} className="ssm-feature-row">
                                            <span className="material-symbols-outlined ssm-feature-icon">
                                                {feat.icon}
                                            </span>
                                            <span className="ssm-feature-text">{feat.text}</span>
                                        </li>
                                    ))}
                                    {plan.notIncluded.map((feat, fi) => (
                                        <li key={`no-${fi}`} className="ssm-feature-row ssm-feature-disabled">
                                            <span className="material-symbols-outlined ssm-feature-disabled-icon">
                                                remove_circle
                                            </span>
                                            <span className="ssm-feature-disabled-text">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href="#contacto"
                                    onClick={onClose}
                                    className="ssm-cta-btn"
                                >
                                    {plan.cta}
                                    <span className="material-symbols-outlined ssm-cta-icon">arrow_forward</span>
                                </a>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom note */}
                <p className="ssm-footer-note">
                    <span className="material-symbols-outlined ssm-info-icon">info</span>
                    Todos los planes incluyen capacitación al equipo y soporte en la implementación. ¿Dudas?{' '}
                    <a href="#contacto" onClick={onClose} className="ssm-footer-link">Escríbenos.</a>
                </p>
            </div>
        </div>
    )
}
