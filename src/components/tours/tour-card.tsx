import { Star, Clock, MapPin, Calendar, Bus, UtensilsCrossed, Wine, Users, Crown } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import type { WineTour } from '../../types';
import { Link } from 'react-router-dom';

interface TourCardProps {
    tour: WineTour;
}

const TourCard = ({ tour }: TourCardProps) => {
    const nextAvailableDate = tour.availableDates[0];
    const isPremium = tour.highlights.some((h) => h.toLowerCase().includes('premium'));

    const formatPrice = (price: number, currency: string) => {
        if (currency === 'CLP') {
            return `$${price.toLocaleString('es-CL')}`;
        }
        return `${currency} ${price}`;
    };

    return (
        <div
            className={`bg-white rounded-xl shadow-lg border z-0 group transition-all duration-500 transform hover:-translate-y-2 relative
    ${isPremium ? 'border-gray-200 hover:border-[#D4AF37]' : 'border-gray-100 hover:border-[#7D0633]'}`}
        >
            <div className="relative overflow-hidden rounded-t-xl">
                <img
                    src={tour.imageUrl}
                    alt={tour.title}
                    className={`h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                        tour.highlights.some((h) => h.toLowerCase().includes('premium')) ? 'filter brightness-105 contrast-105' : ''
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100">
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                            <div className="flex items-center">
                                <MapPin className="h-4 w-4" />
                                <span className="ml-2 text-sm">{tour.region}</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="h-4 w-4" />
                                <span className="ml-2 text-sm">{tour.duration}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#7D0633] px-4 py-2 rounded-xl text-sm font-bold shadow-lg transform -rotate-2 group-hover:rotate-0 transition-all duration-300 hover:scale-105">
                    {isPremium && (
                        <div className="absolute -top-1 -right-1 w-6 h-6  flex items-center justify-center transform rotate-12">
                            <Crown className="w-5 h-5 text-[#D4AF37] fill-current" strokeWidth={1.5} />
                        </div>
                    )}
                    {formatPrice(tour.price, tour.currency)}
                    <span className="block text-xs text-gray-500 text-center">por persona</span>
                </div>
            </div>

            <div className="p-6 space-y-5">
                <div>
                    <h3
                        className={`text-xl font-serif font-bold line-clamp-2 transition-colors leading-tight mb-2 ${
                            isPremium ? 'text-[#D4AF37] group-hover:text-[#D4AF37]' : 'text-[#2E4347] group-hover:text-[#7D0633]'
                        }`}
                    >
                        {tour.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {tour.description}
                    </p>
                </div>

                {nextAvailableDate && (
                    <div className="flex items-center space-x-4">
                        <div className={`flex-1 rounded-lg p-3 bg-gradient-to-r bg-[#F5F5DC]/40 border border-[#D4AF37]/30`}>
                            <div className="flex items-center mb-1">
                                <Calendar className="h-4 w-4 text-[#7D0633]" />
                                <span className="ml-2 text-sm font-medium text-[#2E4347]">Próxima fecha</span>
                            </div>
                            <p className="text-sm text-[#2E4347] font-medium">
                                {format(new Date(nextAvailableDate), "EEEE d 'de' MMMM", { locale: es })}
                            </p>
                        </div>
                    </div>
                )}

                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                        <Star className="h-4 w-4 text-[#D4AF37] fill-current" />
                        <span className="ml-1 text-sm font-bold">{tour.rating}</span>
                        <span className="ml-1 text-xs text-gray-500">({tour.reviewCount})</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        {tour.includes.slice(0, 3).map((include, index) => {
                            let icon;
                            let label;

                            if (include.toLowerCase().includes('transporte')) {
                                icon = <Bus className="h-4 w-4" />;
                                label = 'Transporte incluido';
                            } else if (include.toLowerCase().includes('almuerzo')) {
                                icon = <UtensilsCrossed className="h-4 w-4" />;
                                label = 'Almuerzo gourmet';
                            } else if (include.toLowerCase().includes('degustación')) {
                                icon = <Wine className="h-4 w-4" />;
                                label = 'Degustación de vinos';
                            } else if (include.toLowerCase().includes('guía')) {
                                icon = <Users className="h-4 w-4" />;
                                label = 'Guía especializado';
                            }

                            return icon ? (
                                <div key={index} className="relative group/tooltip">
                                    <div className="p-2 bg-[#F5F5DC]/30 rounded-lg border border-[#D4AF37]/0 text-[#7D0633] hover:bg-[#F5F5DC]/50 transition-colors">
                                        {icon}
                                    </div>
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#2E4347] text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        {label}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#2E4347]"></div>
                                    </div>
                                </div>
                            ) : null;
                        })}
                    </div>
                </div>

                {tour.highlights.some((h) => h.toLowerCase().includes('premium')) ? (
                    <Link
                        to={`/tours/${tour.id}`}
                        className="block w-full text-center bg-gradient-to-r from-[#D4AF37] to-[#c29c1e] hover:from-[#c8a931] hover:to-[#a9871e] text-white py-4 rounded-xl transition-all duration-300 text-sm font-bold shadow-md hover:shadow-xl group-hover:scale-[1.02] relative overflow-hidden"
                    >
                        Reservar Experience
                    </Link>
                ) : (
                    <Link
                        to={`/tours/${tour.id}`}
                        className="block w-full text-center bg-[#7D0633] hover:bg-[#5d0426] text-white py-4 rounded-xl transition-all duration-300 text-sm font-bold shadow-md hover:shadow-xl group-hover:scale-[1.02] relative overflow-hidden"
                    >
                        Ver Detalles
                    </Link>
                )}
            </div>
        </div>
    );
};

export default TourCard;
