import { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface CertificateProps {
    donorName: string;
    amount: string;
    date: string;
    onClose: () => void;
}

const CertificateGenerator = ({ donorName, amount, date, onClose }: CertificateProps) => {
    const certificateRef = useRef<HTMLDivElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    // Preload image to ensure it's in cache and ready for capture
    useEffect(() => {
        const img = new Image();
        img.src = '/teziutlan-hero.jpg';
        img.onload = () => setIsImageLoaded(true);
        img.onerror = () => setIsImageLoaded(true); // Proceed even if fails
    }, []);

    const downloadPDF = async () => {
        if (!certificateRef.current || isGenerating) return;

        setIsGenerating(true);
        try {
            // Re-check capture element visibility
            const element = certificateRef.current;

            // Wait a bit for everything to be ultra-ready
            await new Promise(resolve => setTimeout(resolve, 800));

            const canvas = await html2canvas(element, {
                scale: 2, // Sweet spot for quality vs memory
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#0c0a09',
                logging: false,
                width: 1120, // Specific width for capture consistency
                height: 792,
                scrollX: -window.scrollX,
                scrollY: -window.scrollY,
                windowWidth: 1200,
                onclone: (clonedDoc) => {
                    // Ensure the cloned element is perfectly visible
                    const clonedEl = clonedDoc.getElementById('premium-cert-capture');
                    if (clonedEl) {
                        clonedEl.style.transform = 'none';
                        clonedEl.style.position = 'relative';
                        clonedEl.style.display = 'flex';
                    }
                }
            });

            const imgData = canvas.toDataURL('image/png', 1.0);
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4',
                compress: true
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Guardian_de_la_Historia_${donorName.replace(/\s+/g, '_')}.pdf`);
        } catch (error) {
            console.error('Premium PDF Generation Error:', error);
            alert('Error al generar el diseño premium. Por favor intenta de nuevo.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-10 p-8 md:p-12 bg-stone-950 rounded-[3rem] border border-white/5 shadow-3xl">
            {/* Header / Success State */}
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="size-20 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mx-auto mb-6 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                    <span className="material-symbols-outlined text-5xl">verified</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-none mb-4">
                    ¡Certificado Listo!
                </h2>
                <p className="text-stone-400 max-w-md mx-auto text-sm md:text-base">
                    Has sido reconocido como parte de la historia. Descarga tu certificado premium para conservarlo.
                </p>
            </div>

            {/* PREVIEW CONTAINER - This is what humans see */}
            <div className="w-full overflow-x-auto Charities-scrollbar pb-6 rounded-3xl">
                <div
                    id="premium-cert-capture"
                    ref={certificateRef}
                    className="relative min-w-[1120px] aspect-[1.414/1] bg-stone-950 flex flex-col items-center justify-center text-center p-16 border-[16px] border-stone-900/50 shadow-inner"
                >
                    {/* Background Img */}
                    <img
                        src="/teziutlan-hero.jpg"
                        alt="Teziutlán"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale brightness-110"
                        crossOrigin="anonymous"
                    />

                    {/* Artistic Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-stone-950/90 via-transparent to-stone-950/50"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.1),transparent)]"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M30%200L60%2030L30%2060L0%2030Z%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.03)%22%20stroke-width%3D%221%22/%3E%3C/svg%3E')] opacity-50"></div>

                    {/* Inner Frame */}
                    <div className="relative z-10 w-full h-full border-4 border-double border-amber-600/30 p-12 flex flex-col items-center justify-between">

                        {/* Cert Header */}
                        <div className="flex flex-col items-center">
                            <img src="/logo-footer.png" alt="FiberLink" className="h-14 w-auto mb-6 brightness-200 contrast-125" crossOrigin="anonymous" />
                            <div className="flex items-center gap-4 mb-2">
                                <div className="h-px w-8 bg-amber-500/50"></div>
                                <span className="text-amber-500 font-black uppercase tracking-[0.5em] text-[10px]">Documento de Honor</span>
                                <div className="h-px w-8 bg-amber-500/50"></div>
                            </div>
                            <h1 className="text-6xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                                Guardián de la Historia
                            </h1>
                            <div className="mt-4 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-amber-500 text-xs">★</span>
                                ))}
                            </div>
                        </div>

                        {/* Cert Body */}
                        <div className="flex flex-col items-center gap-6">
                            <p className="text-stone-400 text-xl font-medium italic">Se otorga con distinción el presente a:</p>
                            <h2 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-400 to-amber-700 italic drop-shadow-lg py-4">
                                {donorName}
                            </h2>
                            <p className="max-w-2xl text-stone-300 text-lg leading-relaxed font-medium">
                                Por su invaluable contribución de <strong className="text-amber-400 text-2xl font-black ml-1">${amount} MXN</strong> <br />
                                a la iniciativa de preservación cultural <strong className="text-white underline decoration-amber-500/50 decoration-2 underline-offset-4">"Teziutlán: Piedra y Niebla"</strong>.
                            </p>
                        </div>

                        {/* Cert Footer */}
                        <div className="w-full flex justify-between items-end px-16">
                            <div className="text-left">
                                <span className="block text-stone-500 text-[9px] uppercase font-bold tracking-[0.3em] mb-2">Fecha de Expedición</span>
                                <span className="text-white font-black text-base">{date}</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="size-20 border-2 border-amber-500/10 rounded-full flex items-center justify-center text-amber-500/30 mb-2 bg-gradient-to-b from-amber-500/5 to-transparent">
                                    <span className="material-symbols-outlined text-4xl">verified_user</span>
                                </div>
                                <span className="text-stone-500 text-[8px] uppercase font-black tracking-[0.4em]">Autenticidad FiberLink Labs</span>
                            </div>

                            <div className="text-right">
                                <span className="block text-stone-500 text-[9px] uppercase font-bold tracking-[0.3em] mb-2">Folio de Seguridad</span>
                                <span className="text-white font-mono text-[10px] bg-white/5 px-3 py-1 rounded-md">
                                    {Math.random().toString(36).substring(2, 10).toUpperCase()} - 01
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 size-32 border-t-[6px] border-l-[6px] border-amber-600/40 rounded-tl-3xl"></div>
                    <div className="absolute top-0 right-0 size-32 border-t-[6px] border-r-[6px] border-amber-600/40 rounded-tr-3xl"></div>
                    <div className="absolute bottom-0 left-0 size-32 border-b-[6px] border-l-[6px] border-amber-600/40 rounded-bl-3xl"></div>
                    <div className="absolute bottom-0 right-0 size-32 border-b-[6px] border-r-[6px] border-amber-600/40 rounded-br-3xl"></div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-5 w-full">
                <button
                    onClick={downloadPDF}
                    disabled={isGenerating || !isImageLoaded}
                    className="flex-1 flex items-center justify-center gap-3 px-10 py-6 bg-amber-600 text-white font-black text-lg rounded-2xl shadow-[0_20px_40px_rgba(217,119,6,0.3)] hover:bg-amber-500 hover:scale-[1.02] active:scale-98 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                    {isGenerating ? (
                        <>
                            <span className="size-6 border-3 border-white/20 border-t-white rounded-full animate-spin"></span>
                            Forjando Certificado Premium...
                        </>
                    ) : (
                        <>
                            <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">workspace_premium</span>
                            Descargar Certificado Premium (PDF)
                        </>
                    )}
                </button>
                <button
                    onClick={onClose}
                    className="px-10 py-6 bg-stone-900 border border-white/10 text-white font-black text-lg rounded-2xl hover:bg-stone-800 transition-all active:scale-95"
                >
                    Finalizar
                </button>
            </div>

            <p className="text-[11px] text-stone-600 font-medium tracking-wide">
                © 2024 FiberLink Labs · Patrimonio Digital y Alta Ingeniería
            </p>
        </div>
    );
};

export default CertificateGenerator;
