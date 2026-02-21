const BlogPreview = () => {
    const posts = [
        {
            date: "14 Feb, 2026",
            title: "El fin de la latencia: Edge Computing en la industria 4.0",
            category: "Ingeniería",
            readTime: "5 min"
        },
        {
            date: "08 Feb, 2026",
            title: "Arquitecturas Serverless para escalabilidad empresarial",
            category: "Desarrollo",
            readTime: "8 min"
        },
        {
            date: "25 Jan, 2026",
            title: "Ciberseguridad en redes B2B: Más allá del Firewall",
            category: "Seguridad",
            readTime: "6 min"
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
                        <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
                            Perspectivas sobre <span className="text-gradient">el futuro digital.</span>
                        </h1>
                    </div>
                    <a href="#" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">
                        Ver todo el blog
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-50 border border-slate-200 dark:border-slate-300 p-8 rounded-3xl hover:border-primary/50 transition-all group">
                            <div className="flex items-center justify-between mb-6">
                                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                                    {post.category}
                                </span>
                                <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">{post.readTime} lectura</span>
                            </div>
                            <h3 className="text-xl font-bold mb-6 text-slate-900 group-hover:text-primary transition-colors leading-snug">
                                {post.title}
                            </h3>
                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                                <span className="text-xs font-medium text-slate-500">{post.date}</span>
                                <button className="text-primary material-symbols-outlined">add_circle</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
