import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col overflow-hidden selection:bg-primary/30 relative">
            {/* Background Layers */}
            <div className="fixed inset-0 z-0 opacity-40 wireframe-bg pointer-events-none"></div>
            <div className="fixed inset-0 z-0 opacity-20 circuit-pattern pointer-events-none"></div>
            <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-slate-950 pointer-events-none"></div>

            {/* Header Navigation */}
            <header className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                        <span className="material-symbols-outlined text-primary">insights</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight uppercase">FiberLink <span className="text-primary">Labs</span></h2>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <button className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/')}>Infraestructura</button>
                    <button className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/')}>Seguridad</button>
                    <button className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/')}>Soporte</button>
                </nav>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
                {/* Large Error Visual */}
                <div className="relative mb-8 group">
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-150 group-hover:bg-primary/30 transition-all duration-700"></div>
                    <h1 className="text-[120px] md:text-[220px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary to-primary/40 glow-text select-none">
                        404
                    </h1>
                    <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/30 rounded-tr-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/30 rounded-bl-xl"></div>
                </div>

                {/* Typography Block */}
                <div className="max-w-2xl mx-auto space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Fallo de Segmentación Detectado
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                        Error de Arquitectura: <br className="hidden md:block" /> <span className="text-primary">Nodo No Encontrado</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-xl mx-auto">
                        Parece que el sistema ha intentado acceder a una ruta inexistente en el ecosistema digital. La conexión solicitada ha sido fragmentada o se encuentra fuera de los límites del mapa actual.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                    <button
                        onClick={() => navigate('/')}
                        className="w-full sm:w-auto flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 group"
                    >
                        <span className="material-symbols-outlined mr-2 text-xl group-hover:-translate-x-1 transition-transform">refresh</span>
                        <span className="truncate">Reiniciar en Inicio</span>
                    </button>
                    <button className="w-full sm:w-auto flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white text-base font-bold leading-normal tracking-wide hover:bg-slate-300 dark:hover:bg-slate-700 transition-all border border-slate-300 dark:border-slate-700">
                        <span className="material-symbols-outlined mr-2 text-xl">support_agent</span>
                        <span className="truncate">Consultar Soporte</span>
                    </button>
                </div>

                {/* System Visual Decor */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl opacity-50">
                    <div className="flex items-center gap-4 p-4 border border-primary/10 rounded-xl bg-primary/5">
                        <span className="material-symbols-outlined text-primary">analytics</span>
                        <div className="text-left">
                            <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Protocolo</p>
                            <p className="text-xs font-mono">TCP/IP_V6_ERR_404</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-primary/10 rounded-xl bg-primary/5">
                        <span className="material-symbols-outlined text-primary">router</span>
                        <div className="text-left">
                            <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Estado</p>
                            <p className="text-xs font-mono">SISTEMA: ESTABLE</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-primary/10 rounded-xl bg-primary/5">
                        <span className="material-symbols-outlined text-primary">shield</span>
                        <div className="text-left">
                            <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Protección</p>
                            <p className="text-xs font-mono">FIREWALL_ACTIVE</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Decorative Corner Architecture */}
            <div className="fixed bottom-0 right-0 w-64 h-64 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute bottom-0 right-0 w-full h-full border-t border-l border-primary/40 transform rotate-12 translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute bottom-4 right-4 w-full h-full border-t border-l border-primary/30 transform rotate-12 translate-x-1/2 translate-y-1/2"></div>
            </div>

            {/* Footer */}
            <footer className="relative z-10 px-6 py-8 flex flex-col md:flex-row items-center justify-between text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">
                <div>© 2026 FiberLink Labs. Digital Architecture Division.</div>
                <div className="mt-4 md:mt-0 flex gap-6">
                    <a className="hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/faq')}>FAQ</a>
                    <a className="hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/privacidad')}>Privacidad</a>
                    <a className="hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/terminos')}>Términos</a>
                    <a className="hover:text-primary transition-colors cursor-pointer">Seguridad de Red</a>
                </div>
            </footer>
        </div>
    );
};

export default NotFound;
