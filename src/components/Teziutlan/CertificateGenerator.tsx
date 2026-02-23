import { useState } from 'react';
import jsPDF from 'jspdf';

interface CertificateProps {
    donorName: string;
    amount: string;
    date: string;
    onClose: () => void;
}

const CertificateGenerator = ({ donorName, amount, date, onClose }: CertificateProps) => {
    const [isGenerating, setIsGenerating] = useState(false);

    const downloadPDF = async () => {
        setIsGenerating(true);
        try {
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });

            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();

            // 1. Solid Background
            pdf.setFillColor(12, 10, 9); // stone-950
            pdf.rect(0, 0, width, height, 'F');

            // 2. Add Background Image (Full height/width)
            // We use a try-catch for the image to not break the whole thing if it fails
            try {
                // We add a slightly lightened version or just overlay it
                // Note: jsPDF addImage works best with base64 or URL if it's on same origin
                // For robustness, we will try to load it
                const img = new Image();
                img.src = '/teziutlan-hero.jpeg';
                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                });
                pdf.setGState(new (pdf as any).GState({ opacity: 0.15 }));
                pdf.addImage(img, 'JPEG', 0, 0, width, height);
                pdf.setGState(new (pdf as any).GState({ opacity: 1.0 }));
            } catch (e) {
                console.warn('Could not load background image for PDF, continuing with solid color');
            }

            // 3. Borders
            pdf.setDrawColor(120, 113, 108); // stone-500
            pdf.setLineWidth(1);
            pdf.rect(10, 10, width - 20, height - 20, 'D');

            pdf.setDrawColor(180, 83, 9); // amber-700
            pdf.setLineWidth(0.5);
            pdf.rect(15, 15, width - 30, height - 30, 'D');

            // 4. Logo
            try {
                const logo = new Image();
                logo.src = '/logo-footer.png';
                await new Promise((resolve, reject) => {
                    logo.onload = resolve;
                    logo.onerror = reject;
                });
                pdf.addImage(logo, 'PNG', (width / 2) - 15, 25, 30, 15);
            } catch (e) { /* skip logo if fails */ }

            // 5. Text - Certificado de Reconocimiento
            pdf.setTextColor(245, 158, 11); // amber-500
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(10);
            pdf.text('CERTIFICADO DE RECONOCIMIENTO', width / 2, 55, { align: 'center', charSpace: 2 });

            // 6. Title - Guardián de la Historia
            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(45);
            pdf.setFont('helvetica', 'bold');
            pdf.text('GUARDIÁN DE LA HISTORIA', width / 2, 75, { align: 'center' });

            // 7. Divider
            pdf.setDrawColor(245, 158, 11);
            pdf.setLineWidth(1.5);
            pdf.line((width / 2) - 20, 82, (width / 2) + 20, 82);

            // 8. Body
            pdf.setTextColor(168, 162, 158); // stone-400
            pdf.setFontSize(14);
            pdf.setFont('helvetica', 'normal');
            pdf.text('Se otorga el presente documento a:', width / 2, 105, { align: 'center' });

            // 9. Donor Name
            pdf.setTextColor(245, 158, 11); // amber-500
            pdf.setFontSize(40);
            pdf.setFont('helvetica', 'bolditalic');
            pdf.text(donorName.toUpperCase(), width / 2, 125, { align: 'center' });

            // 10. Message
            pdf.setTextColor(214, 211, 209); // stone-300
            pdf.setFontSize(11);
            pdf.setFont('helvetica', 'normal');
            const splitText = pdf.splitTextToSize(
                `Por su valiosa contribución de $${amount} MXN a la iniciativa "Teziutlán: Piedra y Niebla". Gracias a su apoyo, la preservación del patrimonio cultural y el desarrollo tecnológico de la Sierra Norte de Puebla hoy cuentan con un aliado estratégico.`,
                160
            );
            pdf.text(splitText, width / 2, 145, { align: 'center' });

            // 11. Footer details
            pdf.setFontSize(8);
            pdf.setTextColor(120, 113, 108);

            // Left: Date
            pdf.text('FECHA DE EMISIÓN', 35, height - 35);
            pdf.setTextColor(255, 255, 255);
            pdf.text(date, 35, height - 30);

            // Center: Signature/Security
            pdf.setTextColor(120, 113, 108);
            pdf.text('AUTENTICADO POR FIBERLINK LABS', width / 2, height - 30, { align: 'center' });

            // Right: ID
            pdf.text('ID TRANSACCIÓN', width - 35, height - 35, { align: 'right' });
            pdf.setTextColor(255, 255, 255);
            const id = 'FL-TEZ-' + Math.random().toString(36).substring(7).toUpperCase();
            pdf.text(id, width - 35, height - 30, { align: 'right' });

            pdf.save(`Certificado_Teziutlan_${donorName.replace(/\s+/g, '_')}.pdf`);
        } catch (error) {
            console.error('Error with jsPDF direct generation:', error);
            alert('Error al generar el certificado. Verifica tu conexión.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-10 p-10 bg-stone-950 rounded-[2.5rem] border border-white/5">
            <div className="text-center">
                <div className="size-20 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mx-auto mb-6">
                    <span className="material-symbols-outlined text-5xl">verified</span>
                </div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">Donación Exitosa</h2>
                <p className="text-stone-400 mt-2">¡Felicidades {donorName}! Eres oficialmente un Guardián de la Historia.</p>
            </div>

            {/* Visual Preview (Simplified CSS version for web viewing) */}
            <div className="w-full max-w-2xl bg-stone-900 p-8 rounded-3xl border border-amber-500/10 flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/teziutlan-hero.jpeg')] bg-cover opacity-10 grayscale"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                    <img src="/logo-footer.png" className="h-8 mb-4 brightness-200 opacity-50" />
                    <p className="text-[10px] text-amber-500 font-bold tracking-[0.3em] mb-1">CERTIFICADO PREMIUM</p>
                    <h3 className="text-2xl font-black text-white tracking-tighter">GUARDIÁN DE LA HISTORIA</h3>
                    <div className="w-12 h-0.5 bg-amber-500 my-4"></div>
                    <p className="text-stone-300 text-3xl font-black italic mb-2">{donorName}</p>
                    <p className="text-stone-500 text-xs px-10">Reconocido por su contribución al patrimonio de Teziutlán.</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button
                    onClick={downloadPDF}
                    disabled={isGenerating}
                    className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-amber-600 text-white font-black rounded-2xl shadow-xl hover:bg-amber-500 transition-all disabled:opacity-50"
                >
                    {isGenerating ? (
                        <>
                            <span className="size-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                            Generando PDF de Alta Calidad...
                        </>
                    ) : (
                        <>
                            <span className="material-symbols-outlined">download</span>
                            Descargar Certificado Original (PDF)
                        </>
                    )}
                </button>
                <button onClick={onClose} className="px-8 py-5 bg-stone-800 text-white font-black rounded-2xl">
                    Finalizar
                </button>
            </div>

            <p className="text-[10px] text-stone-600 text-center px-4">
                El certificado será generado directamente en tu navegador con tecnología Ultra-PDF de FiberLink Labs.
            </p>
        </div>
    );
};

export default CertificateGenerator;
