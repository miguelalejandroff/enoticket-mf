import type { Review, WineTour } from '../../types';
import { Star, Check, Info, Shirt, Sun, ThermometerSun, Globe, Award, Wine, Navigation, Timer, Ban, CreditCard } from 'lucide-react';
import Button from '../../ui/button';
import { type JSX } from 'react';

interface TourTabsProps {
    tour: WineTour;
    activeTab: 'description' | 'includes' | 'details' | 'reviews';
    setActiveTab: (tab: TourTabsProps['activeTab']) => void;
    getLanguageFlag: (lang: string) => string;
    getServiceIcon: (service: string) => JSX.Element;
    isPremium: boolean;
    reviews: Review[];
}

export const TourTabs = ({ tour, activeTab, setActiveTab, getLanguageFlag, getServiceIcon, isPremium, reviews }: TourTabsProps) => {
    return (
        <div className="lg:w-2/3 lg:pr-8">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
                <div className="flex overflow-x-auto">
                    <button
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                            activeTab === 'description' ? 'border-b-2 border-[#7D0633] text-[#7D0633]' : 'text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setActiveTab('description')}
                    >
                        Descripción
                    </button>
                    <button
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                            activeTab === 'includes' ? 'border-b-2 border-[#7D0633] text-[#7D0633]' : 'text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setActiveTab('includes')}
                    >
                        Qué incluye
                    </button>
                    <button
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                            activeTab === 'details' ? 'border-b-2 border-[#7D0633] text-[#7D0633]' : 'text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setActiveTab('details')}
                    >
                        Detalles
                    </button>
                    <button
                        className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                            activeTab === 'reviews' ? 'border-b-2 border-[#7D0633] text-[#7D0633]' : 'text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reseñas ({tour.reviewCount})
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
                {activeTab === 'description' && (
                    <div className="space-y-8">
                        <div className="bg-[#F5F5DC]/30 rounded-xl p-6 border border-[#D4AF37]/20">
                            <p className="text-gray-700 leading-relaxed">{tour.description}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-serif font-semibold mb-6 text-[#2E4347] flex items-center">
                                <Star className="h-5 w-5 text-[#D4AF37] mr-2 fill-current" />
                                Destacados del Tour
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {tour.highlights.map((highlight) => (
                                    <div key={highlight} className="flex items-start p-4 bg-white rounded-lg">
                                        <Check className="h-5 w-5 text-[#7D0633] mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#2E4347]/5 rounded-xl p-6">
                            <div className="flex items-center mb-4">
                                <div className=" p-2 mr-3">
                                    <Info className="h-5 w-5 text-[#7D0633]" />
                                </div>
                                <h4 className="font-medium text-[#2E4347] text-base">Recomendaciones</h4>
                            </div>

                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li className="flex items-center py-2 px-4 ">
                                    <div className="p-2 mr-3">
                                        <Shirt className="h-4 w-4 text-[#7D0633]" />
                                    </div>
                                    <span>Ropa y calzado cómodo</span>
                                </li>
                                <li className="flex items-cente py-2 px-4">
                                    <div className="p-2 mr-3">
                                        <Sun className="h-4 w-4 text-[#7D0633]" />
                                    </div>
                                    <span>Protector solar</span>
                                </li>
                                <li className="flex items-cente py-2 px-4">
                                    <div className="p-2 mr-3">
                                        <ThermometerSun className="h-4 w-4 text-[#7D0633]" />
                                    </div>
                                    <span>Chaqueta ligera (las bodegas mantienen temperaturas frescas)</span>
                                </li>
                                <li className="flex items-cente py-2 px-4">
                                    <div className="p-2 mr-3">
                                        <Wine className="h-4 w-4 text-[#7D0633]" />
                                    </div>
                                    <span>Todas las degustaciones están incluidas en el precio</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === 'includes' && (
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-serif font-semibold mb-6 text-[#2E4347] flex items-center">
                                <Check className="h-5 w-5 text-[#7D0633] mr-2" />
                                Servicios Incluidos
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {tour.includes.map((item) => (
                                    <div key={item} className="flex items-center p-4 bg-white ">
                                        <div className="bg-gray-50 p-2 rounded-lg ">{getServiceIcon(item)}</div>
                                        <span className="ml-3 text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-serif font-semibold mb-6 text-[#2E4347] flex items-center">
                                <Globe className="h-5 w-5 text-[#7D0633] mr-2" />
                                Idiomas Disponibles
                            </h3>
                            <div className="flex flex-wrap gap-4 px-2">
                                {tour.languages.map((language, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 bg-white  group cursor-default`}
                                    >
                                        <img
                                            src={`https://flagcdn.com/w40/${getLanguageFlag(language)}.png`}
                                            alt={`Bandera de ${language}`}
                                            className="w-5 h-4 mr-2 rounded-sm"
                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700">{language}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {isPremium && (
                            <div className="mt-8 bg-gradient-to-r from-[#D4AF37]/10 to-[#B39020]/10 rounded-xl p-6 border border-[#D4AF37]/30">
                                <div className="flex items-start space-x-4">
                                    <Award className="h-6 w-6 text-[#D4AF37] flex-shrink-0" />
                                    <div>
                                        <h4 className="font-serif font-semibold text-[#D4AF37] mb-2">Beneficios Premium</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <li className="flex items-center text-sm text-gray-700">
                                                <Check className="h-4 w-4 text-[#D4AF37] mr-2" />
                                                Acceso exclusivo a vinos reserva
                                            </li>
                                            <li className="flex items-center text-sm text-gray-700">
                                                <Check className="h-4 w-4 text-[#D4AF37] mr-2" />
                                                Guía sumiller certificado
                                            </li>
                                            <li className="flex items-center text-sm text-gray-700">
                                                <Check className="h-4 w-4 text-[#D4AF37] mr-2" />
                                                Maridaje gourmet personalizado
                                            </li>
                                            <li className="flex items-center text-sm text-gray-700">
                                                <Check className="h-4 w-4 text-[#D4AF37] mr-2" />
                                                Regalo premium exclusivo
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'details' && (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Navigation className="h-5 w-5 text-[#7D0633] mr-2" />
                                    <h4 className="font-medium text-[#2E4347]">Punto de encuentro</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {tour.location}. Nos reuniremos en la entrada principal de la viña. Te enviaremos la ubicación exacta por correo
                                    electrónico.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Timer className="h-5 w-5 text-[#7D0633] mr-2" />
                                    <h4 className="font-medium text-[#2E4347]">Duración</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {tour.duration}. El tour comienza puntualmente a la hora programada.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Ban className="h-5 w-5 text-[#7D0633] mr-2" />
                                    <h4 className="font-medium text-[#2E4347]">Política de cancelación</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Cancelación gratuita hasta 48 horas antes. No hay reembolsos para cancelaciones posteriores.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Shirt className="h-5 w-5 text-[#7D0633] mr-2" />
                                    <h4 className="font-medium text-[#2E4347]">Qué traer</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Identificación con foto, ropa cómoda, protector solar y una chaqueta ligera.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <CreditCard className="h-5 w-5 text-[#7D0633] mr-2" />
                                    <h4 className="font-medium text-[#2E4347]">Métodos de pago</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Aceptamos todas las tarjetas de crédito principales y transferencias bancarias.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center mb-3">
                                    <Wine className="h-5 w-5 text-[#7D0633] mr-2" />
                                    <h4 className="font-medium text-[#2E4347]">Degustación</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Incluye degustación de vinos premium seleccionados por nuestros expertos sommeliers.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-[#F5F5DC] rounded-lg">
                            <div className="flex items-start">
                                <Info className="h-5 w-5 text-[#7D0633] mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-medium text-[#2E4347] mb-2">Información importante</h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• La experiencia requiere un mínimo de 2 participantes para realizarse</li>
                                        <li>• La edad mínima para participar es 18 años</li>
                                        <li>• Se recomienda reservar con al menos 48 horas de anticipación</li>
                                        <li>• El tour se realiza con lluvia o sol, a menos que las condiciones sean extremas</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <div>
                        {reviews
                            .filter((review) => review.tourId === tour.id)
                            .map((review) => (
                                <div key={review.id} className="mb-8 border-b border-gray-200 pb-6 last:border-b-0">
                                    <div className="flex items-start">
                                        <img src={review.userImage} alt={review.userName} className="w-12 h-12 rounded-full object-cover mr-4" />
                                        <div className="flex-1">
                                            <div className="flex items-center mb-2">
                                                <h4 className="font-medium text-[#2E4347] mr-2">{review.userName}</h4>
                                                <div className="flex text-[#D4AF37]">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-current' : ''}`} />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-500 mb-2">
                                                Visitó el{' '}
                                                {new Date(review.tourDate).toLocaleDateString('es-ES', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </p>
                                            <p className="text-gray-700 mb-3">{review.comment}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {review.highlights.map((highlight) => (
                                                    <span key={highlight} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                                                        {highlight}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        <Button variant="outline" size="md" onClick={() => alert('Ver más reseñas')}>
                            Ver todas las reseñas
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
