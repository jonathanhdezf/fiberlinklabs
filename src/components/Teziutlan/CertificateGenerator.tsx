import { useRef } from 'react';
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

    const downloadPDF = async () => {
        if (!certificateRef.current) return;

        try {
            const canvas = await html2canvas(certificateRef.current, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#0c0a09', // stone-950
                windowWidth: 1200, // Ensure consistent sizing for capture
                windowHeight: 850
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('l', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Guardian_de_la_Historia_${donorName.replace(/\s+/g, '_')}.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Hubo un error al generar tu certificado. Por favor intenta de nuevo.');
        }
    };

    return (
        <div className="flex flex-col items-center gap-8 p-6 md:p-10 bg-stone-900 rounded-[2rem]">
            {/* Header */}
            <div className="text-center">
                <div className="size-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto mb-4 animate-bounce">
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">¡Gracias, Guardián!</h2>
                <p className="text-stone-400 text-sm mt-2">Tu contribución ha sido procesada con éxito.</p>
            </div>

            {/* Visual Certificate (The thing to capture) - Wrap in a scale container for desktop/mobile view */}
            <div className="w-full overflow-x-auto Charities-scrollbar pb-4">
                <div
                    ref={certificateRef}
                    className="relative min-w-[800px] aspect-[1.414/1] bg-stone-950 p-10 border-[10px] border-amber-900/30 overflow-hidden flex flex-col items-center justify-center text-center mx-auto"
                >
                    {/* Artistic Background Elements */}
                    <div className="absolute inset-0 bg-[url('/teziutlan-hero.jpeg')] bg-cover bg-center opacity-10 grayscale"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-transparent to-stone-950/90"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.1),transparent)]"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                    {/* Content */}
                    <div className="relative z-10 border-2 border-amber-500/20 p-8 w-full h-full flex flex-col items-center justify-between">
                        <div className="flex flex-col items-center">
                            <img src="/logo-footer.png" alt="FiberLink Labs" className="h-10 w-auto mb-4 grayscale brightness-200" />
                            <p className="text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] mb-2">Certificado de Reconocimiento</p>
                            <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Guardián de la Historia</h1>
                            <div className="w-20 h-1 bg-amber-500 mt-3 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <p className="text-stone-400 text-base">Se otorga el presente documento a:</p>
                            <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-white to-amber-400 italic py-1">
                                {donorName}
                            </p>
                            <div className="max-w-xl text-stone-300 text-xs leading-relaxed px-4">
                                Por su valiosa contribución de <span className="text-amber-400 font-bold">${amount} MXN</span> a la iniciativa <strong>"Teziutlán: Piedra y Niebla"</strong>. Gracias a su apoyo, la preservación del patrimonio cultural y el desarrollo tecnológico de la Sierra Norte de Puebla hoy cuentan con un aliado estratégico.
                            </div>
                        </div>

                        <div className="w-full flex justify-between items-end px-8">
                            <div className="text-left">
                                <p className="text-stone-500 text-[8px] uppercase font-bold tracking-widest mb-1">Fecha de expedición</p>
                                <p className="text-white font-bold text-xs">{date}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="size-16 border-2 border-amber-500/20 rounded-full flex items-center justify-center text-amber-500 opacity-50 mb-1">
                                    <span className="material-symbols-outlined text-3xl">verified</span>
                                </div>
                                <p className="text-stone-500 text-[7px] uppercase font-bold tracking-[0.3em]">Autenticado por FiberLink Labs</p>
                            </div>
                            <div className="text-right">
                                <p className="text-stone-500 text-[8px] uppercase font-bold tracking-widest mb-1">ID Transacción</p>
                                <p className="text-white font-mono text-[9px]">FL-TEZ-{Math.random().toString(36).substring(7).toUpperCase()}</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Corners */}
                    <div className="absolute top-0 left-0 size-16 border-t-4 border-l-4 border-amber-500/40"></div>
                    <div className="absolute top-0 right-0 size-16 border-t-4 border-r-4 border-amber-500/40"></div>
                    <div className="absolute bottom-0 left-0 size-16 border-b-4 border-l-4 border-amber-500/40"></div>
                    <div className="absolute bottom-0 right-0 size-16 border-b-4 border-r-4 border-amber-500/40"></div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button
                    onClick={downloadPDF}
                    className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-amber-600 text-white font-black rounded-2xl shadow-xl hover:bg-amber-500 transition-all hover:scale-[1.02] active:scale-98"
                >
                    <span className="material-symbols-outlined">download</span>
                    Descargar Certificado (PDF)
                </button>
                <button
                    onClick={onClose}
                    className="px-8 py-4 bg-stone-800 text-white font-black rounded-2xl hover:bg-stone-700 transition-all"
                >
                    Finalizar
                </button>
            </div>
        </div>
    );
};

export default CertificateGenerator;
