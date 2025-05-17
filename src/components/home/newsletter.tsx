import { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // In a real app, this would send the email to your API
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <section className="py-16 bg-[#2E4347]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#7D0633] rounded-lg py-10 px-6 md:px-12 flex flex-col md:flex-row items-center shadow-xl">
                    <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">Únete a Nuestra Comunidad de Amantes del Vino</h2>
                        <p className="text-gray-200">
                            Recibe ofertas exclusivas, invitaciones a eventos especiales y recomendaciones de tours personalizadas.
                        </p>
                    </div>

                    <div className="md:w-1/3 w-full">
                        {!subscribed ? (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Tu correo electrónico"
                                    className="flex-grow px-4 py-3 rounded-lg sm:rounded-r-none focus:outline-none  focus:ring-[#D4AF37] bg-white"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="mt-2 sm:mt-0 bg-[#D4AF37] hover:bg-[#b89429] text-white px-4 py-3 rounded-lg sm:rounded-l-none transition-colors flex items-center justify-center"
                                >
                                    <Send className="h-4 w-4 mr-2" />
                                    Suscribirme
                                </button>
                            </form>
                        ) : (
                            <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                                <p className="text-white">¡Gracias por suscribirte! Pronto recibirás nuestras novedades.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
