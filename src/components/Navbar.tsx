import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
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

    const logoUrl = '/logo.jpg';

    useEffect(() => {
        const img = new Image();
        img.src = '/logo.webp';
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'h-20 bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50'
                : 'h-24 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="relative h-12 flex items-center group">
                        {/* Base Logo (JPG) - This defines the space */}
                        <img
                            src={logoUrl}
                            alt="FiberLink Labs"
                            className="h-full w-auto object-contain transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                        />
                        {/* Hover Logo (WEBP) - Stays absolute to prevent layout shifts */}
                        <img
                            src="/logo.webp"
                            alt="FiberLink Labs"
                            className="absolute inset-0 h-full w-auto object-contain transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        FiberLink <span className="text-primary">Labs</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <a href="#soluciones" className="hover:text-primary transition-colors dark:text-slate-300">Soluciones</a>
                    <a href="#metodologia" className="hover:text-primary transition-colors dark:text-slate-300">Metodología</a>
                    <a href="#casos" className="hover:text-primary transition-colors dark:text-slate-300">Casos de Éxito</a>
                    <a href="#blog" className="hover:text-primary transition-colors dark:text-slate-300">Blog</a>
                    <a href="#contacto" className="px-5 py-2.5 bg-primary text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                        Contacto
                    </a>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center group"
                        aria-label="Toggle Theme"
                    >
                        <span className="material-symbols-outlined dark:hidden text-slate-600 group-hover:text-primary transition-colors">dark_mode</span>
                        <span className="material-symbols-outlined hidden dark:block text-slate-400 group-hover:text-primary transition-colors">light_mode</span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center group"
                        aria-label="Toggle Theme"
                    >
                        <span className="material-symbols-outlined dark:hidden text-slate-600 group-hover:text-primary transition-colors">dark_mode</span>
                        <span className="material-symbols-outlined hidden dark:block text-slate-400 group-hover:text-primary transition-colors">light_mode</span>
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-slate-600 dark:text-slate-400"
                    >
                        <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
                    <a href="#soluciones" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Soluciones</a>
                    <a href="#metodologia" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Metodología</a>
                    <a href="#casos" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Casos de Éxito</a>
                    <a href="#blog" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
                    <a href="#contacto" className="w-full py-3 bg-primary text-white font-semibold rounded-xl text-center" onClick={() => setIsMobileMenuOpen(false)}>
                        Contacto
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
