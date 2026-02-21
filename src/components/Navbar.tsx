import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const navSections = [
    { href: '#inicio', label: 'Innovaciones', icon: 'home', badge: '01', color: 'from-blue-500 to-cyan-400' },
    { href: '#soluciones', label: 'Soluciones', icon: 'settings', badge: '02', color: 'from-sky-500 to-blue-500' },
    { href: '#metodologia', label: 'Crecimiento', icon: 'bolt', badge: '03', color: 'from-amber-500 to-orange-400' },
    { href: '#tech-stack', label: 'Tech DNA', icon: 'code', badge: '04', color: 'from-violet-500 to-purple-400' },
    { href: '#mision', label: 'Misión', icon: 'flag', badge: '05', color: 'from-rose-500 to-red-400' },
    { href: '#casos', label: 'Casos de Éxito', icon: 'verified', badge: '06', color: 'from-emerald-500 to-green-400' },
    { href: '#proyectos-recientes', label: 'Portafolio', icon: 'account_tree', badge: '07', color: 'from-teal-500 to-cyan-400' },
    { href: '#blog', label: 'Blog Tech', icon: 'article', badge: '08', color: 'from-fuchsia-500 to-pink-400' },
    { href: '#contacto', label: 'Agendar', icon: 'send', badge: '09', color: 'from-primary to-blue-500' },
    { href: '#diagnostico', label: 'Diagnóstico', icon: 'analytics', badge: '10', color: 'from-indigo-500 to-blue-600' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [activeLink, setActiveLink] = useState<string | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    // Lock body scroll when menu open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const closeMenu = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            setIsMobileMenuOpen(false);
            setIsClosing(false);
        }, 400);
    }, []);

    const handleNavClick = useCallback((href: string) => {
        setActiveLink(href);
        setTimeout(() => {
            closeMenu();
            setTimeout(() => {
                const id = href.replace('#', '');
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                setActiveLink(null);
            }, 300);
        }, 200);
    }, [closeMenu]);

    const logoUrl = '/logo.jpg';

    return (
        <>
            {/* ── Top Nav Bar ── */}
            <nav
                className={`fixed top-0 left-0 right-0 z-[100000] transition-all duration-300 transform-gpu will-change-transform ${isScrolled
                    ? 'h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-b border-slate-200/40 dark:border-white/[0.08] shadow-[0_1px_40px_rgba(0,0,0,0.08)]'
                    : 'h-20 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-5 h-full flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 z-10">
                        <div className="relative h-10 flex items-center group">
                            <img src={logoUrl} alt="FiberLink Labs" className="h-full w-auto object-contain transition-opacity duration-700 opacity-100 group-hover:opacity-0" />
                            <img src="/logo.webp" alt="FiberLink Labs" className="absolute inset-0 h-full w-auto object-contain transition-opacity duration-700 opacity-0 group-hover:opacity-100" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-foreground">
                            FiberLink <span className="text-primary">Labs</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <a href="#soluciones" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">Soluciones</a>
                        <a href="#metodologia" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">Metodología</a>
                        <a href="#casos" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">Casos de Éxito</a>
                        <a href="#blog" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">Blog</a>
                        <a href="#contacto" className="px-5 py-2.5 bg-primary text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-px transition-all">
                            Contacto
                        </a>
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                            aria-label="Toggle Theme"
                        >
                            <span className="material-symbols-outlined dark:hidden text-slate-600 hover:text-primary transition-colors">dark_mode</span>
                            <span className="material-symbols-outlined hidden dark:block text-slate-400 hover:text-primary transition-colors">light_mode</span>
                        </button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="size-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                            aria-label="Toggle Theme"
                        >
                            <span className="material-symbols-outlined dark:hidden text-[20px]">dark_mode</span>
                            <span className="material-symbols-outlined hidden dark:block text-[20px]">light_mode</span>
                        </button>

                        {/* Hamburger — pill style */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/30 hover:scale-105 transition-transform active:scale-95"
                            aria-label="Abrir menú"
                        >
                            <span className="material-symbols-outlined text-[18px]">menu</span>
                            Menú
                        </button>
                    </div>
                </div>
            </nav>

            {/* ── Premium Glass Mobile Menu ── */}
            {(isMobileMenuOpen || isClosing) && (
                <div
                    className={`fixed inset-0 z-[200000] md:hidden flex transition-all duration-400 will-change-transform ${isClosing ? 'opacity-0' : 'opacity-100'
                        }`}
                    style={{ transition: 'opacity 0.4s cubic-bezier(0.4,0,0.2,1)' }}
                >
                    {/* Ultra-blurred backdrop — tapping it closes the menu */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-slate-900/70 to-slate-950/80 backdrop-blur-[30px]"
                        onClick={closeMenu}
                    />

                    {/* Glass panel — slides in from right */}
                    <div
                        className={`relative ml-auto w-[88%] max-w-[340px] h-full flex flex-col overflow-hidden
                        bg-white/12 dark:bg-slate-800/20
                        border-l border-white/15
                        shadow-[inset_0_0_60px_rgba(255,255,255,0.04),-2px_0_40px_rgba(0,0,0,0.25)]
                        backdrop-blur-[60px]
                        transition-transform duration-[420ms] ease-out
                        ${isClosing ? 'translate-x-full' : 'translate-x-0'}`}
                    >
                        {/* Inner glass sheen */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.1] via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                        {/* ── Header ── */}
                        <div className="relative flex items-center justify-between px-6 pt-safe pt-12 pb-6">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-0.5">NAVEGACIÓN</p>
                                <span className="text-2xl font-black text-white tracking-tight">
                                    Fiberlink<span className="text-primary"> Labs</span>
                                </span>
                            </div>
                            <button
                                onClick={closeMenu}
                                className="size-10 flex items-center justify-center rounded-2xl bg-white/10 border border-white/15 text-white hover:bg-white/20 active:scale-90 transition-all backdrop-blur-sm"
                            >
                                <span className="material-symbols-outlined text-[20px]">close</span>
                            </button>
                        </div>

                        {/* ── Links ── */}
                        <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-1.5">
                            {navSections.map((item, i) => {
                                const isActive = activeLink === item.href;
                                return (
                                    <button
                                        key={i}
                                        onClick={() => handleNavClick(item.href)}
                                        className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-left transition-all duration-300 group active:scale-[0.97]
                                        ${isActive
                                                ? 'bg-white/25 backdrop-blur-md scale-[0.98]'
                                                : 'hover:bg-white/10 active:bg-white/20'
                                            }`}
                                        style={{ animationDelay: `${i * 40}ms` }}
                                    >
                                        {/* Gradient icon badge */}
                                        <div className={`size-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                                            <span className="material-symbols-outlined text-white text-[18px]">{item.icon}</span>
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <p className="text-white font-bold text-sm leading-none mb-0.5">{item.label}</p>
                                            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">{item.badge}</p>
                                        </div>

                                        {/* Chevron */}
                                        <span className={`material-symbols-outlined text-white/30 text-[16px] transition-all duration-300 transform ${isActive ? 'translate-x-1 text-white/70' : 'group-hover:translate-x-0.5'}`}>
                                            chevron_right
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* ── Footer: Theme Toggle ── */}
                        <div className="relative px-4 pb-10 pt-4 border-t border-white/10">
                            <button
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-white/8 border border-white/10 text-white hover:bg-white/15 active:scale-[0.98] transition-all backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-white/60 text-[20px]">
                                        {isDarkMode ? 'light_mode' : 'dark_mode'}
                                    </span>
                                    <div>
                                        <p className="text-sm font-bold leading-none">Tema {isDarkMode ? 'Claro' : 'Oscuro'}</p>
                                        <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mt-0.5">
                                            {isDarkMode ? 'Activar modo luz' : 'Activar modo noche'}
                                        </p>
                                    </div>
                                </div>
                                {/* iOS-style toggle */}
                                <div className={`w-12 h-7 rounded-full transition-colors duration-300 flex items-center px-1 ${isDarkMode ? 'bg-primary' : 'bg-white/20'}`}>
                                    <div className={`size-5 rounded-full bg-white shadow-md transition-all duration-300 ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}`} />
                                </div>
                            </button>

                            <p className="text-center text-[9px] font-black uppercase tracking-[0.3em] text-white/20 mt-4">
                                © FiberLink Labs · 2026
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
