import { useState } from 'react';
import CertificateGenerator from './CertificateGenerator';

const DonationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [step, setStep] = useState<'amount' | 'payment' | 'success'>('amount');
    const [amount, setAmount] = useState('100');
    const [donorName, setDonorName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    const handleDonation = () => {
        if (!donorName) {
            alert('Por favor, ingresa tu nombre completo para el certificado.');
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep('success');
        }, 3000);
    };

    const amounts = ['50', '100', '250', '500', '1000'];

    return (
        <div className="fixed inset-0 z-[250] overflow-y-auto">
            <div className="min-h-screen Charities-scrollbar flex items-center justify-center p-4">
                <div
                    className="fixed inset-0 bg-stone-950/80 backdrop-blur-lg -z-10"
                    onClick={step === 'success' ? undefined : onClose}
                ></div>

                <div className={`relative w-full ${step === 'success' ? 'max-w-5xl' : 'max-w-lg'} bg-white dark:bg-stone-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-200 dark:border-white/5 animate-in zoom-in-95 duration-300 my-8`}>
                    {step !== 'success' && (
                        <div className="p-8 md:p-12">
                            <div className="flex justify-between items-start mb-8">
                                <div className="pr-8">
                                    <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-600 mb-2">Piedra y Niebla</p>
                                    <h2 className="text-3xl font-black text-stone-900 dark:text-white uppercase leading-tight">Donar a la <br />Iniciativa</h2>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-stone-100 dark:hover:bg-white/5 rounded-full transition-colors flex-shrink-0">
                                    <span className="material-symbols-outlined text-stone-400">close</span>
                                </button>
                            </div>

                            {step === 'amount' && (
                                <div className="space-y-8">
                                    <div>
                                        <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-4 block">1. Selecciona el monto (MXN)</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {amounts.map(a => (
                                                <button
                                                    key={a}
                                                    onClick={() => setAmount(a)}
                                                    className={`py-3 rounded-2xl font-black transition-all border ${amount === a
                                                        ? 'bg-amber-600 border-amber-600 text-white shadow-lg shadow-amber-600/20'
                                                        : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400'
                                                        }`}
                                                >
                                                    ${a}
                                                </button>
                                            ))}
                                            <div className="relative col-span-1">
                                                <input
                                                    type="number"
                                                    placeholder="Otro"
                                                    className="w-full h-full py-3 px-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl font-black text-stone-900 dark:text-white placeholder:text-stone-400 text-center outline-none focus:border-amber-500 text-sm"
                                                    onChange={(e) => setAmount(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2 block">2. Nombre para el Certificado</label>
                                        <input
                                            type="text"
                                            value={donorName}
                                            onChange={(e) => setDonorName(e.target.value)}
                                            placeholder="Tu nombre completo"
                                            className="w-full py-4 px-6 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl font-bold text-stone-900 dark:text-white outline-none focus:border-amber-500 transition-colors"
                                        />
                                    </div>

                                    <button
                                        onClick={handleDonation}
                                        disabled={isLoading}
                                        className="w-full py-5 bg-stone-950 dark:bg-white text-white dark:text-stone-950 font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-98 transition-all disabled:opacity-50"
                                    >
                                        {isLoading ? (
                                            <>
                                                <span className="size-5 border-2 border-stone-400 border-t-white dark:border-stone-600 dark:border-t-stone-950 rounded-full animate-spin"></span>
                                                Procesando Pago...
                                            </>
                                        ) : (
                                            <>
                                                <span className="material-symbols-outlined">favorite</span>
                                                Donar con PayPal / Tarjeta
                                            </>
                                        )}
                                    </button>

                                    <p className="text-[10px] text-center text-stone-400 font-medium px-4">
                                        Al donar, recibirás un certificado digital interactivo de Fiberlink Labs que te acredita como Guardián de la Historia.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    {step === 'success' && (
                        <div className="w-full Charities-scrollbar">
                            <CertificateGenerator
                                donorName={donorName}
                                amount={amount}
                                date={new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })}
                                onClose={onClose}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DonationModal;
