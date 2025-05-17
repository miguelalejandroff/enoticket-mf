import { AlertCircle, CreditCard, Shield, Users } from 'lucide-react';
import { useState } from 'react';
import Button from '../../ui/button';
import { useCartStore } from '../../store/cart-store';

export const ContactForm = () => {
    const { total } = useCartStore();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setFormError('');
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormError('');

        try {
            // Simulamos una redirección a Webpay
            window.location.href = 'https://webpay3gint.transbank.cl/';
        } catch (error) {
            console.error('Error al procesar el pago:', error);
            setFormError('Hubo un error al procesar el pago. Por favor, intenta nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-serif font-bold text-[#2E4347] mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2 text-[#7D0633]" />
                Información de Contacto
            </h2>

            {formError && (
                <div className="mb-6 bg-red-50 text-red-700 p-4 rounded-lg flex items-start">
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{formError}</p>
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label htmlFor="firstName" className="block text-sm font-medium text-[#2E4347]">
                            Nombre
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            autoComplete="given-name"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#7D0633] focus:ring-2 focus:ring-[#7D0633]/20 transition-colors"
                            placeholder="Juan"
                        />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="lastName" className="block text-sm font-medium text-[#2E4347]">
                            Apellido
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            autoComplete="family-name"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#7D0633] focus:ring-2 focus:ring-[#7D0633]/20 transition-colors"
                            placeholder="Pérez"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-[#2E4347]">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        autoComplete="email"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#7D0633] focus:ring-2 focus:ring-[#7D0633]/20 transition-colors"
                        placeholder="juan.perez@ejemplo.com"
                    />
                </div>

                <div className="space-y-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-[#2E4347]">
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        autoComplete="tel"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#7D0633] focus:ring-2 focus:ring-[#7D0633]/20 transition-colors"
                        placeholder="+56 9 1234 5678"
                    />
                </div>

                <div className="mt-8 p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-medium text-[#2E4347] mb-4 flex items-center">
                        <CreditCard className="w-5 h-5 mr-2 text-[#7D0633]" />
                        Método de Pago
                    </h3>
                    <p className="text-gray-600 mb-4">Al continuar, serás redirigido a Webpay para completar tu pago de forma segura.</p>
                    <div className="flex items-center justify-center space-x-4">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-kiy3Wsu7D4N_PZehOZBKvVq-tLcrd6UQw&s"
                            alt="Webpay"
                            className="h-14"
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    fullWidth
                    className={`mt-8 py-4 text-lg relative overflow-hidden group bg-gradient-to-r from-[#7D0633] to-[#5d0426] hover:from-[#5d0426] hover:to-[#7D0633] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02]`}
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
                            <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Procesando...
                        </span>
                    ) : (
                        <>Continuar al Pago ${(total() * 1.19).toLocaleString('es-CL')}</>
                    )}
                </Button>

                <div className=" flex items-center justify-center text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                    <Shield className="w-4 h-4 mr-2 text-[#7D0633]" />
                    <span>Pago seguro procesado por Webpay de Transbank</span>
                </div>
            </form>
        </div>
    );
};
