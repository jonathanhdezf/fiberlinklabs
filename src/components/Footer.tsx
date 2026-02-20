import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-sm font-bold">terminal</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight">FiberLink <span className="text-primary">Labs</span></span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8 leading-relaxed">
                            La división de innovación estratégica de Fiberlink Servicios TIC. Construimos el sistema nervioso de la nueva civilización digital.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'linkedin', 'twitter', 'instagram'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                                    <span className="material-symbols-outlined text-xl">share</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Soluciones</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Desarrollo Web</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Sistemas POS</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Automatización</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Infraestructura Cloud</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Compañía</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Metodología</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Casos de Éxito</a></li>
                            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ Técnico</Link></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Blog Tech</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-xs tracking-wide">
                        © 2026 FiberLink Servicios TIC. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <Link to="/privacidad" className="hover:text-primary transition-colors">Privacidad</Link>
                        <Link to="/terminos" className="hover:text-primary transition-colors">Términos</Link>
                        <Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
