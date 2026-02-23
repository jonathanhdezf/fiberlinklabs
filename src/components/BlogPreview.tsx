import { Link } from 'react-router-dom';

const BlogPreview = () => {
    const posts = [
        {
            date: "23 Feb, 2026",
            title: "De Excel a Plataforma: Cómo las PyMEs Mexicanas Digitalizan su Operación",
            category: "Transformación Digital",
            readTime: "7 min",
            slug: "/blog/excel-a-plataforma",
            icon: "table_chart",
            accent: "from-blue-500/20 to-indigo-500/10",
            iconColor: "text-blue-500",
            pillColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
            desc: "El 73% de las pymes opera con hojas de cálculo. Esta es la hoja de ruta para dar el salto sin perder el negocio en el intento.",
        },
        {
            date: "23 Feb, 2026",
            title: "POS Web vs. POS Tradicional: La Guía Definitiva para Negocios en Crecimiento",
            category: "Tecnología para Negocios",
            readTime: "9 min",
            slug: "/blog/pos-web-vs-tradicional",
            icon: "point_of_sale",
            accent: "from-emerald-500/20 to-teal-500/10",
            iconColor: "text-emerald-500",
            pillColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
            desc: "Comparativa honesta y sin sesgos: todo lo que necesitas saber antes de elegir el sistema de cobro que procesará tus transacciones.",
        },
        {
            date: "23 Feb, 2026",
            title: "Cómo un Dashboard Bien Diseñado Puede Reducir un 80% los Errores Operativos",
            category: "Desarrollo Web",
            readTime: "8 min",
            slug: "/blog/dashboard-errores-operativos",
            icon: "dashboard",
            accent: "from-violet-500/20 to-purple-500/10",
            iconColor: "text-violet-500",
            pillColor: "bg-violet-500/10 text-violet-600 border-violet-500/20",
            desc: "Los errores operativos no son culpa de las personas — son culpa de los sistemas que no les dan información correcta en el momento correcto.",
        }
    ];

    return (
        <section id="blog" className="py-24 px-6 bg-background transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Blog Tech
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
                            Perspectivas sobre <span className="text-gradient">el futuro digital.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <Link
                            key={idx}
                            to={post.slug}
                            className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col"
                        >
                            {/* Gradient accent top */}
                            <div className={`h-1.5 w-full bg-gradient-to-r ${post.accent} opacity-80`} />

                            {/* Icon area */}
                            <div className={`mx-8 mt-7 mb-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${post.accent} flex items-center justify-center`}>
                                <span className={`material-symbols-outlined ${post.iconColor} text-2xl`}>{post.icon}</span>
                            </div>

                            <div className="px-8 pb-8 flex flex-col flex-1">
                                {/* Category + read time */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`px-2.5 py-1 border text-[10px] font-bold uppercase tracking-widest rounded-full ${post.pillColor}`}>
                                        {post.category}
                                    </span>
                                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">schedule</span>
                                        {post.readTime}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors leading-snug">
                                    {post.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                                    {post.desc}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
                                    <span className="text-xs font-medium text-slate-400">{post.date}</span>
                                    <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all">
                                        Leer artículo
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
