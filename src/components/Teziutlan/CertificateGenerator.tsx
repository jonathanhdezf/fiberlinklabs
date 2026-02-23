import { useState } from 'react';
import jsPDF from 'jspdf';
import './Certificate.css';

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
            // Documento en Horizontal (Landscape)
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4',
                putOnlyUsedFonts: true
            });

            const w = pdf.internal.pageSize.getWidth();
            const h = pdf.internal.pageSize.getHeight();

            // 1. Fondos y Capas Base
            pdf.setFillColor(12, 10, 9); // stone-950
            pdf.rect(0, 0, w, h, 'F');

            // 2. Imagen de Fondo (Con manejo de opacidad nativo)
            try {
                const img = new Image();
                img.src = '/teziutlan-hero.jpg';
                await new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve; // Continuar aunque falle
                });
                if (img.complete && img.naturalWidth > 0) {
                    // Simular opacidad bajando el GState si el navegador lo soporta
                    // o simplemente dibujando con color de fondo oscuro
                    pdf.setGState(new (pdf as any).GState({ opacity: 0.25 }));
                    pdf.addImage(img, 'JPEG', 0, 0, w, h, undefined, 'FAST');
                    pdf.setGState(new (pdf as any).GState({ opacity: 1.0 }));
                }
            } catch (e) {
                console.warn('BG image skip');
            }

            // 3. Cuadrícula Premium (Dibujada vectorialmente)
            pdf.setDrawColor(251, 191, 36); // amber-400
            pdf.setLineWidth(0.05);
            const gridSize = 10;
            for (let x = 0; x <= w; x += gridSize) {
                pdf.setGState(new (pdf as any).GState({ opacity: 0.1 }));
                pdf.line(x, 0, x, h);
            }
            for (let y = 0; y <= h; y += gridSize) {
                pdf.setGState(new (pdf as any).GState({ opacity: 0.1 }));
                pdf.line(0, y, w, y);
            }

            // 4. Bordes Ornamentales
            pdf.setGState(new (pdf as any).GState({ opacity: 1.0 }));
            pdf.setDrawColor(180, 83, 9); // amber-700
            pdf.setLineWidth(1.5);
            pdf.rect(10, 10, w - 20, h - 20, 'D'); // Marco principal

            pdf.setDrawColor(245, 158, 11); // amber-500
            pdf.setLineWidth(0.3);
            pdf.rect(12, 12, w - 24, h - 24, 'D'); // Línea fina interior

            // 5. Encabezado - Logo y Títulos
            pdf.setTextColor(245, 158, 11);
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(8);
            pdf.text('DOCUMENTO DE HONOR · FIBERLINK LABS', w / 2, 30, { align: 'center', charSpace: 2 });

            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(42);
            pdf.text('GUARDIÁN DE LA HISTORIA', w / 2, 55, { align: 'center' });

            // Divisor Dorado
            pdf.setDrawColor(245, 158, 11);
            pdf.setLineWidth(1);
            pdf.line(w / 2 - 15, 62, w / 2 + 15, 62);

            // 6. Cuerpo - El Donante (TOQUE ENCANTADOR)
            pdf.setTextColor(168, 162, 158); // stone-400
            pdf.setFontSize(16);
            pdf.setFont('helvetica', 'italic');
            pdf.text('Se otorga con distinción el presente a:', w / 2, 85, { align: 'center' });

            // NOMBRE DEL DONANTE (Grande y en el centro)
            pdf.setTextColor(251, 191, 36); // amber-400 (un amarillo dorado brillante)
            pdf.setFontSize(50);
            pdf.setFont('helvetica', 'bolditalic');
            // Simulamos un pequeño "brillo" con una sombra muy sutil o duplicando
            pdf.text(donorName.toUpperCase(), w / 2, 115, { align: 'center' });

            // 7. Texto de Agradecimiento
            pdf.setTextColor(214, 211, 209); // stone-300
            pdf.setFontSize(12);
            pdf.setFont('helvetica', 'normal');
            const msg = `Por su invaluable contribución de $${amount} MXN a la iniciativa de preservación cultural "Teziutlán: Piedra y Niebla". Gracias a su apoyo, el patrimonio y la tecnología de la Sierra Norte hoy cuentan con un aliado estratégico.`;
            const splitMsg = pdf.splitTextToSize(msg, 180);
            pdf.text(splitMsg, w / 2, 135, { align: 'center', lineHeightFactor: 1.5 });

            // 8. Footer - Fecha y Firma Digital
            pdf.setFontSize(9);
            pdf.setTextColor(120, 113, 108);

            // Izquierda: Fecha
            pdf.text('FECHA DE EXPEDICIÓN', 30, h - 30);
            pdf.setTextColor(255, 255, 255);
            pdf.text(date, 30, h - 23);

            // Derecha: Folio
            pdf.setTextColor(120, 113, 108);
            pdf.text('FOLIO DE SEGURIDAD', w - 30, h - 30, { align: 'right' });
            pdf.setTextColor(255, 255, 255);
            const folio = 'FL-' + Math.random().toString(36).substring(2, 9).toUpperCase();
            pdf.text(folio, w - 30, h - 23, { align: 'right' });

            // Centro: Icono verificado (Simulado con texto)
            pdf.setTextColor(245, 158, 11);
            pdf.text('VERIFICADO POR FIBERLINK LABS', w / 2, h - 23, { align: 'center' });

            // GUARDAR
            pdf.save(`Guardian_de_la_Historia_${donorName.replace(/\s+/g, '_')}.pdf`);
        } catch (error) {
            console.error('Direct PDF Error:', error);
            alert('Error crítico al generar el PDF. Verifica los permisos de descarga de tu navegador.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-10 p-8 md:p-12 bg-stone-950 rounded-[3rem] border border-white/5 shadow-3xl">
            {/* Cabecera visual */}
            <div className="text-center">
                <div className="size-20 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mx-auto mb-6 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                    <span className="material-symbols-outlined text-5xl">verified</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
                    ¡Certificado Listo!
                </h2>
                <p className="text-stone-400 max-w-md mx-auto text-sm md:text-base">
                    Hemos forjado tu reconocimiento. Descarga ahora la versión de alta fidelidad para conservar como Guardián.
                </p>
            </div>

            {/* PREVIEW VISUAL (Lo que el usuario ve en la web, sigue siendo encantador con CSS) */}
            <div className="w-full relative aspect-[1.414/1] max-w-2xl bg-stone-900 rounded-3xl border border-amber-950/30 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8 group">
                {/* Fondo e Interfaz del preview */}
                <div className="absolute inset-0 bg-[url('/teziutlan-hero.jpg')] bg-cover opacity-20 grayscale transition-transform duration-1000 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-stone-950 via-transparent to-stone-900/40"></div>

                {/* Cuadrícula visual */}
                <div className="absolute inset-0 opacity-10 pointer-events-none preview-grid"></div>

                <div className="relative z-10 border-2 border-double border-amber-600/30 w-full h-full p-6 flex flex-col items-center justify-between text-center">
                    <img src="/logo-footer.png" alt="FiberLink Logo" className="h-6 opacity-50 brightness-200" />
                    <div className="space-y-2">
                        <p className="text-[8px] text-amber-500 font-black tracking-[0.4em] uppercase">Patrimonio Histórico</p>
                        <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">Guardián de la Historia</h3>
                        <div className="w-8 h-0.5 bg-amber-600 mx-auto my-2"></div>
                        <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600 italic">
                            {donorName}
                        </p>
                    </div>
                    <p className="text-[10px] text-stone-500 font-medium">Documento de Honor Certificado</p>
                </div>
            </div>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row gap-5 w-full">
                <button
                    onClick={downloadPDF}
                    disabled={isGenerating}
                    className="flex-1 flex items-center justify-center gap-3 px-10 py-6 bg-amber-600 text-white font-black text-lg rounded-2xl shadow-[0_20px_40px_rgba(217,119,6,0.3)] hover:bg-amber-500 hover:scale-[1.02] transition-all disabled:opacity-50"
                >
                    {isGenerating ? (
                        <>
                            <span className="size-6 border-3 border-white/20 border-t-white rounded-full animate-spin"></span>
                            Descargando PDF...
                        </>
                    ) : (
                        <>
                            <span className="material-symbols-outlined text-2xl">workspace_premium</span>
                            Descargar Certificado Original (PDF)
                        </>
                    )}
                </button>
                <button onClick={onClose} className="px-10 py-6 bg-stone-900 border border-white/10 text-white font-black text-lg rounded-2xl">
                    Finalizar
                </button>
            </div>

            <p className="text-[11px] text-stone-600 font-medium tracking-wide">
                El PDF se genera directamente sin intermediarios para máxima seguridad y rapidez.
            </p>
        </div>
    );
};

export default CertificateGenerator;
