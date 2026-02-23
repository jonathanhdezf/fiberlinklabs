import { useRef, useState } from 'react';
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

    const downloadPDF = async () => {
        if (!certificateRef.current || isGenerating) return;

        setIsGenerating(true);
        try {
            // Give the browser a moment to ensure all styles/images are rendered
            await new Promise(resolve => setTimeout(resolve, 500));

            const canvas = await html2canvas(certificateRef.current, {
                scale: 3, // Higher quality
                useCORS: true,
                allowTaint: false,
                backgroundColor: '#0c0a09',
                logging: false,
                // Ensure the capture happens at the full size of the certificate
                width: 1000,
                height: 707,
                onclone: (doc) => {
                    // Force display of elements that might be hidden or problematic
                    const el = doc.getElementById('capture-certificate');
                    if (el) el.style.display = 'flex';
                }
            });

            const imgData = canvas.toDataURL('image/png', 1.0);
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
            pdf.save(`Certificado_Teziutlan_${donorName.replace(/\s+/g, '_')}.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Error al generar PDF. Prueba usando un navegador moderno como Chrome o Edge.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-8 p-6 md:p-10 bg-stone-900 rounded-[2rem]">
            <div className="text-center">
                <div className="size-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto mb-4">
                    <span className="material-symbols-outlined text-4xl">verified_user</span>
                </div>
                <h2 className="text-2xl font-black text-white uppercase">Donación Exitosa</h2>
                <p className="text-stone-400 text-sm mt-2">Tu apoyo a Teziutlán ha sido registrado.</p>
            </div>

            {/* Visual Certificate */}
            <div className="w-full overflow-x-auto Charities-scrollbar pb-4">
                <div
                    id="capture-certificate"
                    ref={certificateRef}
                    className="relative min-w-[1000px] aspect-[1.414/1] bg-stone-950 overflow-hidden flex flex-col items-center justify-center shadow-2xl"
                >
                    {/* Background Image - Using img tag for better html2canvas support */}
                    <img
                        src="/teziutlan-hero.jpeg"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
                        crossOrigin="anonymous"
                    />

                    {/* Artistic Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/80"></div>
                    <div className="absolute inset-0 border-[12px] border-amber-900/20"></div>

                    {/* Main Content Box */}
                    <div className="relative z-10 w-[90%] h-[85%] border-2 border-amber-500/10 p-10 flex flex-col items-center justify-between text-center">

                        {/* Header */}
                        <div className="flex flex-col items-center">
                            <img src="/logo-footer.png" alt="Logo" className="h-12 w-auto mb-4 brightness-200" crossOrigin="anonymous" />
                            <p className="text-amber-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-2 font-serif">Reconocimiento Oficial</p>
                            <h1 className="text-5xl font-black text-white uppercase tracking-tighter">Guardián de la Historia</h1>
                            <div className="w-24 h-1 bg-amber-500 mt-4"></div>
                        </div>

                        {/* Body */}
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-stone-400 text-lg">Por la presente se reconoce a:</p>
                            {/* Gradient text replacement for canvas compatibility if needed, but trying high scale first */}
                            <h2 className="text-6xl font-black text-amber-500 italic py-2">
                                {donorName}
                            </h2>
                            <p className="max-w-xl text-stone-300 text-sm leading-relaxed">
                                Por su contribución de <span className="text-amber-500 font-bold">${amount} MXN</span> a la iniciativa <strong className="text-stone-100">"Teziutlán: Piedra y Niebla"</strong>. Su compromiso con el patrimonio y el futuro tecnológico de la Sierra Norte de Puebla lo acredita como aliado distinguido de FiberLink Labs.
                            </p>
                        </div>

                        {/* Footer Info */}
                        <div className="w-full flex justify-between items-end px-10">
                            <div className="text-left">
                                <span className="block text-stone-500 text-[8px] uppercase font-serif tracking-widest mb-1">Fecha de Emisión</span>
                                <span className="text-white font-bold text-xs">{date}</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="size-12 border-2 border-amber-500/20 rounded-full flex items-center justify-center text-amber-500/50 mb-1">
                                    <span className="material-symbols-outlined text-2xl">security</span>
                                </div>
                                <span className="text-stone-500 text-[7px] uppercase tracking-widest">Validado por Fiberlink Labs</span>
                            </div>

                            <div className="text-right">
                                <span className="block text-stone-500 text-[8px] uppercase font-serif tracking-widest mb-1">ID Transacción</span>
                                <span className="text-white font-mono text-[9px]">FL-CERT-{Math.random().toString(36).substring(7).toUpperCase()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 size-24 border-t-2 border-l-2 border-amber-500/30"></div>
                    <div className="absolute bottom-0 right-0 size-24 border-b-2 border-r-2 border-amber-500/30"></div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button
                    onClick={downloadPDF}
                    disabled={isGenerating}
                    className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-amber-600 text-white font-black rounded-2xl shadow-xl hover:bg-amber-500 transition-all disabled:opacity-50"
                >
                    {isGenerating ? (
                        <>
                            <span className="size-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                            Generando PDF...
                        </>
                    ) : (
                        <>
                            <span className="material-symbols-outlined">download</span>
                            Descargar Certificado Original
                        </>
                    )}
                </button>
                <button
                    onClick={onClose}
                    className="px-8 py-5 bg-stone-800 text-white font-black rounded-2xl hover:bg-stone-700 transition-all"
                >
                    Finalizar
                </button>
            </div>
        </div>
    );
};

export default CertificateGenerator;
