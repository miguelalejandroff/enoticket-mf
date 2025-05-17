import { useState } from 'react';
import { Trash2, Calendar, Users, Shield, Clock, Wine, Award, ArrowLeft, Crown, CreditCard } from 'lucide-react';
import { useCartStore } from '../store/cart-store';
import Button from '../ui/button';

const CheckoutPage = () => {
    const { items, removeFromCart, updateQuantity, total } = useCartStore();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // aqui tengo que hacer lo de transbank
            window.location.href = 'https://webpay3gint.transbank.cl/';
        } catch (error) {
            console.error('Error al procesar el pago:', error);
            alert('Hubo un error al procesar el pago. Por favor, intenta nuevamente.');
        }
    };

    if (items.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30">
                <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <Wine className="w-12 h-12 text-gray-400" />
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-[#2E4347] mb-4">Tu carrito está vacío</h2>
                    <p className="text-gray-600 mb-8">No hay tours seleccionados en tu carrito.</p>
                    <div className="flex items-center justify-center gap-4">
                        <Button variant="outline" size="lg" onClick={() => window.history.back()} className="flex items-center">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Volver
                        </Button>
                        <Button variant="primary" size="lg" onClick={() => (window.location.href = '/')} className="flex items-center">
                            <Wine className="w-4 h-4 mr-2" />
                            Explorar Tours
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-serif font-bold text-[#2E4347]">Finalizar Reserva</h1>
                <button onClick={() => window.history.back()} className="flex items-center text-gray-500 hover:text-[#7D0633] transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Volver
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Cart Summary */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h2 className="text-xl font-serif font-bold text-[#2E4347] mb-4">Resumen de tu Experiencia</h2>

                    <div className="space-y-4">
                        {items.map((item) => (
                            <div
                                key={item.tour.id}
                                className="relative bg-white rounded-lg border border-gray-100 p-4 hover:shadow-md transition-shadow"
                            >
                                {item.tour.highlights.some((h) => h.toLowerCase().includes('premium')) && (
                                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#D4AF37] to-[#B39020] text-white text-xs px-3 py-1.5 rounded-full transform rotate-12 flex items-center gap-1.5 shadow-lg border border-white/20">
                                        <Crown className="w-3 h-3" />
                                        <span>Premium</span>
                                    </div>
                                )}

                                <div className="flex items-start space-x-4">
                                    <img
                                        src={item.tour.imageUrl}
                                        alt={item.tour.title}
                                        className={`w-20 h-20 rounded-lg object-cover ${
                                            item.tour.highlights.some((h) => h.toLowerCase().includes('premium'))
                                                ? 'filter brightness-105 contrast-105'
                                                : ''
                                        }`}
                                    />

                                    <div className="flex-1">
                                        <h3 className="font-medium text-[#2E4347] mb-2">{item.tour.title}</h3>

                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {new Date(item.date).toLocaleDateString('es-ES', {
                                                    weekday: 'long',
                                                    day: 'numeric',
                                                    month: 'long',
                                                })}
                                            </div>
                                            <div className="flex items-center">
                                                <Users className="w-4 h-4 mr-1" />
                                                {item.quantity} {item.quantity === 1 ? 'persona' : 'personas'}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
                                                <span className="text-xs text-gray-500 mr-1">Cantidad:</span>
                                                <button
                                                    onClick={() => updateQuantity(item.tour.id, Math.max(1, item.quantity - 1))}
                                                    className="text-[#7D0633] hover:text-[#5d0426] transition-colors w-6 h-6 flex items-center justify-center rounded-full hover:bg-white"
                                                >
                                                    -
                                                </button>
                                                <span className="font-medium text-[#2E4347] min-w-[1.5rem] text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.tour.id, item.quantity + 1)}
                                                    className="text-[#7D0633] hover:text-[#5d0426] transition-colors w-6 h-6 flex items-center justify-center rounded-full hover:bg-white"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <span className="font-medium text-[#2E4347]">
                                                    <span className="text-sm text-gray-500 mr-1">Subtotal:</span>
                                                    <span className="text-lg">${(item.tour.price * item.quantity).toLocaleString('es-CL')}</span>
                                                </span>
                                                <button
                                                    onClick={() => removeFromCart(item.tour.id)}
                                                    className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-all duration-300 group"
                                                >
                                                    <Trash2 className="h-4 w-4 transform group-hover:scale-110 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-6 border-t space-y-4">
                        <div className="flex justify-between items-center text-sm text-gray-600">
                            <span>Tours ({items.length})</span>
                            <span>${total().toLocaleString('es-CL')}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-600">
                            <span>Subtotal</span>
                            <span>${total().toLocaleString('es-CL')}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-600">
                            <span>IVA (19%)</span>
                            <span>${(total() * 0.19).toLocaleString('es-CL')}</span>
                        </div>
                        <div className="flex justify-between items-center text-xl font-bold text-[#2E4347]">
                            <span>Total</span>
                            <span>${(total() * 1.19).toLocaleString('es-CL')}</span>
                        </div>
                    </div>

                    <div className="mt-6 space-y-3 bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium text-[#2E4347] mb-2 flex items-center">
                            <Shield className="w-4 h-4 mr-2 text-[#7D0633]" />
                            Garantías del servicio
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2 text-[#7D0633]" />
                                <span>Cancelación gratuita hasta 48h antes</span>
                            </div>
                            <div className="flex items-center">
                                <Wine className="w-4 h-4 mr-2 text-[#7D0633]" />
                                <span>Experiencia 100% garantizada</span>
                            </div>
                            <div className="flex items-center">
                                <Award className="w-4 h-4 mr-2 text-[#7D0633]" />
                                <span>Guías certificados</span>
                            </div>
                            <div className="flex items-center">
                                <Shield className="w-4 h-4 mr-2 text-[#7D0633]" />
                                <span>Pago seguro verificado</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Form */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h2 className="text-xl font-serif font-bold text-[#2E4347] mb-6 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-[#7D0633]" />
                        Información de Contacto
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
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

                        <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                            <h3 className="text-lg font-medium text-[#2E4347] mb-4 flex items-center">
                                <CreditCard className="w-5 h-5 mr-2 text-[#7D0633]" />
                                Método de Pago
                            </h3>
                            <p className="text-gray-600 mb-4">Al continuar, serás redirigido a Webpay para completar tu pago de forma segura.</p>
                            <div className="flex items-center justify-center space-x-4">
                                <img src="https://www.webpay.cl/assets/img/logo-dark.svg" alt="Webpay" className="h-8" />
                                <img src="https://www.transbank.cl/wp-content/uploads/2021/05/logo-tb.svg" alt="Transbank" className="h-6" />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            fullWidth
                            className="mt-8 py-4 text-lg relative overflow-hidden group bg-gradient-to-r from-[#7D0633] to-[#5d0426] hover:from-[#5d0426] hover:to-[#7D0633]"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                            Continuar al Pago ${(total() * 1.19).toLocaleString('es-CL')}
                        </Button>

                        <div className="mt-6 flex items-center justify-center text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                            <Shield className="w-4 h-4 mr-2 text-[#7D0633]" />
                            <span>Pago seguro procesado por Webpay de Transbank</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
