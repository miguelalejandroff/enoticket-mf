import { Crown, Star, MapPin, Clock } from 'lucide-react';
import type { WineTour } from '../../types';

interface TourHeaderProps {
    tour: WineTour;
    isPremium: boolean;
}

export const TourHeader = ({ tour, isPremium }: TourHeaderProps) => (
    <div className="relative h-80 md:h-96">
        <img src={tour.imageUrl} alt={tour.title} className={`w-full h-full object-cover ${isPremium ? 'filter brightness-105 contrast-105' : ''}`} />
        <div className={`absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70`}></div>

        {isPremium && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D4AF37] to-[#B39020] text-white px-6 py-3 rounded-full font-bold shadow-xl border border-white/20 backdrop-blur-sm flex items-center space-x-2">
                <Crown className="h-5 w-5" />
                <span>Premium Experience</span>
            </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center text-white text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>
                        {tour.location}, {tour.region}
                    </span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{tour.duration}</span>
                </div>

                <h1 className="text-2xl md:text-4xl font-serif font-bold text-white mb-2">{tour.title}</h1>

                <div className="flex items-center">
                    <div className="flex text-[#D4AF37]">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < Math.floor(tour.rating) ? 'fill-current' : ''}`} />
                        ))}
                    </div>
                    <span className="ml-2 text-white">
                        {tour.rating} ({tour.reviewCount} reseñas)
                    </span>
                </div>
            </div>
        </div>
    </div>
);
