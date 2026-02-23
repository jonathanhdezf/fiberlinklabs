import { useEffect, useRef } from 'react'
import './DigitalConsultingModal.css'

interface DigitalConsultingModalProps {
    isOpen: boolean
    onClose: () => void
}

const plans = [
    {
        id: 'diagnostico',
        name: 'Diagnóstico',
        tagline: 'Una radiografía honesta de tu stack tecnológico actual.',
        price: '$6,500',
        period: 'pago único',
        highlight: false,
        badge: null,
        color: 'amber',
        icon: 'pageview',
        deliverables: 'Entregable en 5 días hábiles',
        features: [
            { icon: 'find_in_page', text: 'Auditoría técnica de arquitectura actual' },
            { icon: 'accessibility_new', text: 'Evaluación UX y accesibilidad (WCAG 2.1)' },
            { icon: 'bug_report', text: 'Detección de deuda técnica crítica' },
            { icon: 'speed', text: 'Análisis de rendimiento y Core Web Vitals' },
            { icon: 'description', text: 'Informe ejecutivo PDF con hallazgos' },
            { icon: 'support_agent', text: 'Sesión de presentación de resultados' },
        ],
        cta: 'Solicitar diagnóstico',
        notIncluded: ['Roadmap de transformación', 'Estrategia de datos', 'Acompañamiento continuo'],
    },
    {
        id: 'estratega',
        name: 'Estratega',
        tagline: 'Hoja de ruta tecnológica clara para los próximos 12 meses.',
        price: '$18,000',
        period: 'pago único',
        highlight: true,
        badge: 'Más completo',
        color: 'orange',
        icon: 'query_stats',
        deliverables: 'Entregable en 10–15 días hábiles',
        features: [
            { icon: 'find_in_page', text: 'Auditoría técnica y UX completa' },
            { icon: 'map', text: 'Roadmap de transformación digital 12 meses' },
            { icon: 'analytics', text: 'Estrategia de datos, KPIs y analítica' },
            { icon: 'architecture', text: 'Propuesta de arquitectura objetivo' },
            { icon: 'playlist_add_check', text: 'Priorización de iniciativas por ROI' },
            { icon: 'groups', text: 'Talleres de alineación con stakeholders' },
            { icon: 'document_scanner', text: 'Documentación técnica ejecutiva completa' },
            { icon: 'support_agent', text: '2 sesiones de seguimiento post-entrega' },
        ],
        cta: 'Elegir Estratega',
        notIncluded: ['Acompañamiento continuo mensual'],
    },
    {
        id: 'cto-externo',
        name: 'CTO Externo',
        tagline: 'Liderazgo tecnológico senior sin el costo de una contratación.',
        price: 'Desde $12k/mo',
        period: 'mensualidad recurrente',
        highlight: false,
        badge: 'Máximo impacto',
        color: 'rose',
        icon: 'person_pin',
        deliverables: 'Todo lo del plan Estratega, más:',
        features: [
            { icon: 'architecture', text: 'Toma de decisiones tecnológicas continua' },
            { icon: 'code_blocks', text: 'Revisión de código y pull requests clave' },
            { icon: 'groups_3', text: 'Gestión y mentoría del equipo técnico' },
            { icon: 'security', text: 'Auditorías de seguridad trimestrales' },
            { icon: 'trending_up', text: 'Estrategia de escalabilidad y crecimiento' },
            { icon: 'handshake', text: 'Representación ante inversores y socios' },
            { icon: 'event_available', text: 'Disponibilidad garantizada 20 hrs/mes' },
            { icon: 'headset_mic', text: 'Canal directo WhatsApp / Slack' },
        ],
        cta: 'Agendar consultoría',
        notIncluded: [],
    },
]


export default function DigitalConsultingModal({ isOpen, onClose }: DigitalConsultingModalProps) {
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
            className="dcm-overlay"
        >
            {/* Dialog */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Planes de Consultoría Digital"
                className="dcm-dialog"
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    aria-label="Cerrar modal"
                    className="dcm-close-btn"
                >
                    <span className="material-symbols-outlined dcm-close-icon">close</span>
                </button>

                {/* Header */}
                <div className="dcm-header">
                    {/* Pill badge */}
                    <div className="dcm-badge-container">
                        <span className="material-symbols-outlined dcm-badge-icon">query_stats</span>
                        <span className="dcm-badge-text">
                            Consultoría Digital
                        </span>
                    </div>

                    <h2 className="dcm-title">
                        Estrategia que{' '}
                        <span className="dcm-title-gradient">
                            convierte tecnología en resultados
                        </span>
                    </h2>

                    <p className="dcm-subtitle">
                        No implementamos por implementar. Analizamos tu arquitectura actual y trazamos
                        una hoja de ruta tecnológica eficiente con foco en el ROI.
                    </p>

                    {/* Feature pills */}
                    <div className="dcm-pills">
                        {['Auditorías técnicas y UX', 'Roadmap de transformación', 'Estrategia de datos y analítica'].map(tag => (
                            <span key={tag} className="dcm-pill">
                                <span className="material-symbols-outlined dcm-pill-icon">check_circle</span>
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Process steps strip */}
                    <div className="dcm-process-strip">
                        {[
                            { num: '01', label: 'Auditar' },
                            { num: '02', label: 'Diagnosticar' },
                            { num: '03', label: 'Priorizar' },
                            { num: '04', label: 'Ejecutar' },
                        ].map((step, i, arr) => (
                            <div key={step.num} className="dcm-process-step">
                                <div className={`dcm-radar-box dcm-radar-box-${i}`}>
                                    <div className="dcm-step-num">{step.num}</div>
                                    <div className="dcm-step-label">{step.label}</div>
                                </div>
                                {i < arr.length - 1 && (
                                    <span className="material-symbols-outlined dcm-chevron">chevron_right</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="dcm-grid">
                    {plans.map((plan, idx) => {
                        return (
                            <div
                                key={plan.id}
                                className={`dcm-card dcm-card-${idx}`}
                                data-highlight={plan.highlight ? "true" : "false"}
                                data-color={plan.color}
                                data-price-colored={plan.price.startsWith('Desde') ? "true" : "false"}
                            >
                                {/* Badge */}
                                {plan.badge && (
                                    <div className="dcm-card-badge">
                                        {plan.badge}
                                    </div>
                                )}

                                {/* Plan header */}
                                <div className="dcm-plan-header">
                                    <div className="dcm-icon-wrapper">
                                        <span className="material-symbols-outlined dcm-plan-icon">
                                            {plan.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="dcm-plan-name">{plan.name}</h3>
                                        <p className="dcm-plan-tagline">
                                            {plan.tagline}
                                        </p>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="dcm-price-container">
                                    <div className="dcm-price-row">
                                        <span className="dcm-price-text">
                                            {plan.price}
                                        </span>
                                    </div>
                                    <p className="dcm-period-text">
                                        {plan.period}
                                    </p>
                                </div>

                                {/* Deliverable label */}
                                <div className="dcm-deliverable-badge">
                                    <span className="material-symbols-outlined dcm-deliverable-icon">schedule</span>
                                    <span className="dcm-deliverable-text">
                                        {plan.deliverables}
                                    </span>
                                </div>

                                {/* Features */}
                                <ul className="dcm-features-list">
                                    {plan.features.map((feat, fi) => (
                                        <li key={fi} className="dcm-feature-row">
                                            <span className="material-symbols-outlined dcm-feature-icon">
                                                {feat.icon}
                                            </span>
                                            <span className="dcm-feature-text">{feat.text}</span>
                                        </li>
                                    ))}
                                    {plan.notIncluded.map((feat, fi) => (
                                        <li key={`no-${fi}`} className="dcm-feature-row dcm-feature-disabled">
                                            <span className="material-symbols-outlined dcm-feature-disabled-icon">
                                                remove_circle
                                            </span>
                                            <span className="dcm-feature-disabled-text">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href="#contacto"
                                    onClick={onClose}
                                    className="dcm-cta-btn"
                                >
                                    {plan.cta}
                                    <span className="material-symbols-outlined dcm-cta-icon">arrow_forward</span>
                                </a>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom note */}
                <p className="dcm-footer-note">
                    <span className="material-symbols-outlined dcm-info-icon">info</span>
                    Todos los planes inician con una llamada de descubrimiento de 30 min sin costo. ¿Dudas?{' '}
                    <a href="#contacto" onClick={onClose} className="dcm-footer-link">Escríbenos.</a>
                </p>
            </div>
        </div>
    )
}
