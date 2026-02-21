import { useState, useEffect } from 'react';

const sections = [
    { id: 'inicio', label: 'Innovaciones', icon: 'home' },
    { id: 'soluciones', label: 'Soluciones', icon: 'settings' },
    { id: 'metodologia', label: 'Crecimiento', icon: 'bolt' },
    { id: 'tech-stack', label: 'Tech DNA', icon: 'code' },
    { id: 'mision', label: 'Misión', icon: 'flag' },
    { id: 'casos', label: 'Casos de Éxito', icon: 'verified' },
    { id: 'proyectos-recientes', label: 'Portafolio', icon: 'account_tree' },
    { id: 'blog', label: 'Blog Tech', icon: 'article' },
    { id: 'contacto', label: 'Agendar', icon: 'send' },
    { id: 'diagnostico', label: 'Diagnóstico', icon: 'analytics' }
];

const VerticalNav = () => {
    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-[99998] hidden lg:flex flex-col gap-5 items-center p-4 bg-background/20 backdrop-blur-sm rounded-full border border-white/5 shadow-2xl">
            <div className="flex flex-col gap-4">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="group relative flex items-center justify-center"
                        aria-label={`Ir a ${section.label}`}
                    >
                        {/* Tooltip */}
                        <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-slate-900/90 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-xl">
                            {section.label}
                        </span>

                        {/* Dot */}
                        <div className={`
                            relative transition-all duration-500 rounded-full
                            ${activeSection === section.id
                                ? 'w-3 h-3 bg-primary ring-4 ring-primary/20'
                                : 'w-1.5 h-1.5 bg-slate-400/40 hover:bg-primary-hover group-hover:w-2 group-hover:h-2'}
                        `}>
                            {activeSection === section.id && (
                                <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></span>
                            )}
                        </div>
                    </button>
                ))}
            </div>

            {/* Connecting Line (Subtle) */}
            <div className="absolute top-0 bottom-0 right-1/2 translate-x-1/2 w-px bg-slate-200 dark:bg-white/5 -z-10"></div>
        </nav>
    );
};

export default VerticalNav;
