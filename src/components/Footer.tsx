import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-background pt-20 pb-10 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-10">
                                <img
                                    src="/logo.jpg"
                                    alt="FiberLink Labs"
                                    className="h-full w-auto object-contain dark:invert"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground">FiberLink <span className="text-primary">Labs</span></span>
                        </div>
                        <p className="text-slate-500 dark:text-white max-w-sm mb-8 leading-relaxed">
                            La división de innovación estratégica de Fiberlink Servicios TIC. Construimos el sistema nervioso de la nueva civilización digital.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { name: 'facebook', icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' },
                                { name: 'linkedin', icon: 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png' },
                                { name: 'twitter', icon: 'https://cdn-icons-png.flaticon.com/512/5969/5969020.png' },
                                { name: 'instagram', icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png' }
                            ].map((social) => (
                                <a key={social.name} href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center grayscale hover:grayscale-0 hover:border-primary transition-all p-2 bg-white dark:bg-slate-50">
                                    <img src={social.icon} alt={social.name} className="w-full h-full object-contain" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Soluciones</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                            <li><a href="/servicios/desarrollo-web" className="hover:text-primary transition-colors dark:text-white">Desarrollo Web</a></li>
                            <li><Link to="/servicios/sistema-pos" className="hover:text-primary transition-colors dark:text-white">Sistemas POS</Link></li>
                            <li><Link to="/servicios/automatizacion" className="hover:text-primary transition-colors dark:text-white">Automatización</Link></li>
                            <li><Link to="/servicios/infraestructura-cloud" className="hover:text-primary transition-colors dark:text-white">Infraestructura Cloud</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Compañía</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                            <li><Link to="/quienes-somos" className="hover:text-primary transition-colors dark:text-white">Quiénes Somos</Link></li>
                            <li><a href="#" className="hover:text-primary transition-colors dark:text-white">Metodología</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors dark:text-white">Casos de Éxito</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors dark:text-white">Blog Tech</a></li>
                            <li><a href="#contacto" className="hover:text-primary transition-colors dark:text-white">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Iniciativas Locales</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                            <li><Link to="/iniciativas/teziutlan" className="hover:text-primary transition-colors dark:text-white flex items-center gap-1.5">Teziutlán: Piedra &amp; Niebla</Link></li>
                            <li><Link to="/educacion-digital" className="hover:text-primary transition-colors dark:text-white">#YouCanLearnAnything</Link></li>
                            <li><Link to="/iniciativas/elbuenservir" className="hover:text-primary transition-colors dark:text-white">El Buen Servir · Web App</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-xs tracking-wide">
                        © 2026 FiberLink Servicios TIC. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <Link to="/privacidad#privacidad-titulo" className="hover:text-primary transition-colors">Privacidad</Link>
                        <Link to="/terminos#terminos-titulo" className="hover:text-primary transition-colors">Términos</Link>
                        <Link to="/cookies#cookies-titulo" className="hover:text-primary transition-colors">Cookies</Link>
                        <Link to="/glosario#glosario-titulo" className="hover:text-primary transition-colors">Glosario</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
