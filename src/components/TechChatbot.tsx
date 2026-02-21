import React, { useState, useEffect, useRef } from 'react';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const TechChatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "¡Hola! Soy tu Consultor de Crecimiento. He visto que exploraste nuestro trabajo. ¿Buscas diseñar una web que impacte o quieres escalar las ventas de la que ya tienes?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [step, setStep] = useState<'chat' | 'name' | 'project' | 'phone' | 'done'>('chat');
    const [leadData, setLeadData] = useState({ name: '', project: '', phone: '' });
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Simplified Knowledge Base with Sales Psychology
    const getAiResponse = (input: string): { text: string; nextStep: 'chat' | 'name' } => {
        const text = input.toLowerCase();

        // Handling GREETINGS and EMPATHY
        if (text.includes('hola') || text.includes('buenos dias') || text.includes('buenas tardes') || text.includes('que tal') || text.includes('saludos')) {
            return {
                text: "¡Hola! Qué gusto saludarte. Soy el asistente de FiberLink Labs. Estoy aquí para ayudarte a que tu negocio dé el siguiente paso digital. ¿Tienes algún proyecto en mente o te gustaría que te ayude a optimizar lo que ya tienes?",
                nextStep: 'chat'
            };
        }

        if (text.includes('muchas gracias') || text.includes('gracias') || text.includes('entiendo')) {
            return {
                text: "¡A ti! Es un placer resolver tus dudas. Mi objetivo es que veas cómo la tecnología puede trabajar a tu favor. ¿Te gustaría que iniciemos con un diagnóstico estratégico para tu marca?",
                nextStep: 'chat'
            };
        }

        // Handling DOUBT and HESITATION
        if (text.includes('no se') || text.includes('tal vez') || text.includes('luego') || text.includes('pensare') || text.includes('duda') || text.includes('despues')) {
            return {
                text: "Es normal tener dudas al principio. La mayoría de nuestros clientes empezaron igual. Por eso la sesión de 15 minutos es totalmente gratuita y sin compromiso: es para que veas el potencial real de tu proyecto sin riesgo alguno. ¿Te parece si agendamos esa charla rápida y salimos de dudas?",
                nextStep: 'chat'
            };
        }

        if (text.includes('funciona') || text.includes('experiencia') || text.includes('confiar') || text.includes('seguro')) {
            return {
                text: "Nuestros sistemas han ayudado a empresas a duplicar sus leads en menos de 90 días. No solo hacemos webs, creamos activos que generan dinero. ¿Quieres que te cuente cómo logramos resultados reales para otros negocios similares al tuyo?",
                nextStep: 'chat'
            };
        }

        // Sales triggers for Web Design
        if (text.includes('web') || text.includes('pagina') || text.includes('diseño') || text.includes('sitio')) {
            return {
                text: "Entiendo. Una web hoy en día debe ser tu mejor vendedor 24/7, no solo un adorno. Nosotros diseñamos sitios que capturan leads automáticamente. ¿Te gustaría que proyectemos una web así para tu marca?",
                nextStep: 'chat'
            };
        }

        // Sales triggers for Scaling/Automation
        if (text.includes('escalar') || text.includes('ventas') || text.includes('crecer') || text.includes('automatizar')) {
            return {
                text: "Para escalar necesitas sistemas, no más horas de trabajo. Transformamos webs estáticas en motores que atraen clientes solos. ¿Quieres saber cómo podemos aplicar esto en tu operación actual?",
                nextStep: 'chat'
            };
        }

        // Objection handling: Price/Value
        if (text.includes('precio') || text.includes('cuanto') || text.includes('costo')) {
            return {
                text: "Más que un gasto, es una inversión en infraestructura. Un mal sitio te hace perder dinero cada día. Nosotros creamos activos digitales que se pagan solos con nuevas ventas. ¿Hacemos un diagnóstico rápido?",
                nextStep: 'chat'
            };
        }

        // Direct intent to start
        if (text.includes('si') || text.includes('quiero') || text.includes('me interesa') || text.includes('contacto') || text.includes('comenzar')) {
            return {
                text: "¡Excelente! Vamos a diseñar esa visión juntos. Primero, ¿cómo te llamas?",
                nextStep: 'name'
            };
        }

        return {
            text: "Nuestra misión es simple: Webs que vendan y sistemas que escalen. ¿Qué objetivo tienes en mente para este año en tu empresa?",
            nextStep: 'chat'
        };
    };

    // Track scroll
    useEffect(() => {
        const handleScroll = () => {
            if (hasTriggered) return;
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const clientHeight = window.innerHeight;
            if (scrollTop + clientHeight >= scrollHeight - 30) {
                setShowNotification(true);
                setHasTriggered(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasTriggered]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsgText = inputValue;
        const userMessage: Message = {
            id: Date.now(),
            text: userMsgText,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            let botResponse = "";
            let nextStep = step;

            if (step === 'chat' || step === 'done') {
                const aiResult = getAiResponse(userMsgText);
                botResponse = aiResult.text;
                nextStep = aiResult.nextStep;
            } else if (step === 'name') {
                setLeadData(prev => ({ ...prev, name: userMsgText }));
                botResponse = `Mucho gusto, ${userMsgText}. ¿Qué buscas exactamente? (Ej. Una web nueva, automatizar mis ventas, relanzar mi marca...)`;
                nextStep = 'project';
            } else if (step === 'project') {
                setLeadData(prev => ({ ...prev, project: userMsgText }));
                botResponse = "Perfecto, tenemos el blueprint ideal para eso. Bríndame tu WhatsApp para que un asesor te contacte ahora mismo y agendemos tu Sesión de Diseño Estratégico.";
                nextStep = 'phone';
            } else if (step === 'phone') {
                const finalPhone = userMsgText;
                const diagId = `DIA-${Math.floor(100 + Math.random() * 900)}`;
                const now = new Date();
                const dateStr = now.toLocaleDateString();
                const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                botResponse = `¡Listo! Tu ID de Diagnóstico es **${diagId}**. He enviado tu solicitud a nuestro equipo de diseño. Mantente atento, un asesor te escribirá en menos de 15 minutos para iniciar.`;
                nextStep = 'done';

                // Final WhatsApp Lead
                const whatsappNumber = '522311024672';
                const messageParts = [
                    "*NUEVO DIAGNÓSTICO DE DISEÑO & ESCALA*",
                    `*ID:* ${diagId}`,
                    `*Fecha/Hora:* ${dateStr} - ${timeStr}`,
                    "--------------------------------",
                    `*Interesado:* ${leadData.name}`,
                    `*Objetivo:* ${leadData.project}`,
                    `*WhatsApp:* ${finalPhone}`,
                    "--------------------------------",
                    "_Meta: Diseñar web/sistema que escale._",
                    "_Promesa: Contacto en < 15 minutos._"
                ];

                const finalText = encodeURIComponent(messageParts.join('\n'));
                window.open(`https://wa.me/${whatsappNumber}?text=${finalText}`, '_blank');
            }

            setStep(nextStep);
            const botMsg: Message = {
                id: Date.now() + 1,
                text: botResponse,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[200] font-display">
            {/* Proactive Notification */}
            {showNotification && !isOpen && (
                <div className="absolute bottom-20 right-0 w-72 p-5 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-primary/20 animate-in slide-in-from-right-10 fade-in duration-500">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <span className="material-symbols-outlined">smart_toy</span>
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">¡Objetivo alcanzado!</p>
                            <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">¿Diseñamos tu próximo gran proyecto hoy?</p>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            setIsOpen(true);
                            setShowNotification(false);
                        }}
                        className="w-full py-2.5 bg-primary text-white text-xs font-black rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
                    >
                        HABLAR CON UN ASESOR
                    </button>
                    <button
                        onClick={() => setShowNotification(false)}
                        className="absolute -top-2 -right-2 size-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors border border-slate-200 dark:border-white/10"
                    >
                        <span className="material-symbols-outlined text-[14px]">close</span>
                    </button>
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
                    {/* Header */}
                    <div className="p-6 bg-primary text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">
                                <span className="material-symbols-outlined text-white">smart_toy</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">FiberLink AI Assistant</h4>
                                <div className="flex items-center gap-1.5">
                                    <span className="size-2 rounded-full bg-green-400 animate-pulse"></span>
                                    <span className="text-[10px] opacity-80 uppercase tracking-widest font-black">Asesor Virtual</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="size-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors">
                            <span className="material-symbols-outlined text-sm text-white">close</span>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50 dark:bg-slate-950/50 relative group/messages">
                        {/* Premium Animated Background */}
                        <div className="absolute inset-0 ai-processing-bg opacity-40 pointer-events-none"></div>
                        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>

                        {messages.map(msg => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}>
                                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed transition-all duration-300 ${msg.sender === 'user'
                                    ? 'bg-gradient-to-br from-primary to-secondary text-white rounded-tr-none shadow-xl shadow-primary/10 border border-white/20'
                                    : 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-700 dark:text-slate-200 shadow-sm border border-slate-100 dark:border-white/5 rounded-tl-none font-medium hover:scale-[1.02]'
                                    }`}>
                                    {msg.text.split('\n').map((line, i) => (
                                        <p key={i} className={i > 0 ? 'mt-2' : ''}>
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start relative z-10">
                                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl rounded-tl-none border border-slate-100 dark:border-white/5 flex gap-1 items-center shadow-lg">
                                    <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                    <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                    <div className="size-1.5 bg-primary rounded-full animate-bounce"></div>
                                    <span className="text-[10px] ml-2 font-black uppercase tracking-tighter text-primary/50">Procesando...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-100 dark:border-white/5 flex gap-2 relative z-20">
                        <input
                            type="text"
                            placeholder={step === 'name' ? 'Escribe tu nombre...' : step === 'phone' ? 'Escribe tu WhatsApp...' : 'Escribe un mensaje...'}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            className="flex-1 px-4 py-3 rounded-xl bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 text-sm outline-none focus:border-primary/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                        />
                        <button
                            onClick={handleSend}
                            className="size-11 rounded-xl bg-primary text-white flex items-center justify-center hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-90 group/send"
                        >
                            <span className="material-symbols-outlined group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">send</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    setShowNotification(false);
                }}
                className={`size-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 overflow-hidden group ${isOpen ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 rotate-90 scale-110' : 'bg-primary text-white'}`}
            >
                <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
                    {isOpen ? 'close' : 'smart_toy'}
                </span>
                {!isOpen && (
                    <span className="absolute inset-0 bg-white/20 animate-ping opacity-20 pointer-events-none"></span>
                )}
            </button>
        </div>
    );
};

export default TechChatbot;
