import { useState, useEffect, type JSX } from 'react';
import type { WineTour } from '../types';
import { useCartStore } from '../store/cart-store';
import { wineTours } from '../data/tours';
import { reviews } from '../data/reviews';
import { useParams } from 'react-router-dom';
import { TourHeader } from '../components/tours/tour-header';
import { TourTabs } from '../components/tours/tour-tabs';
import { BookingSidebar } from '../components/tours/booking-sidebar';
import { Bus, Camera, Coffee, Gift, GraduationCap, Grape, Sparkles, UtensilsCrossed, Wine } from 'lucide-react';

interface TourDetailPageProps {
    showAllTours?: boolean;
}

const TourDetailPage = ({ showAllTours }: TourDetailPageProps) => {
    const { id } = useParams<{ id: string }>();
    const [tour, setTour] = useState<WineTour | null>(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [ticketCount, setTicketCount] = useState(2);
    const [activeTab, setActiveTab] = useState<'description' | 'includes' | 'details' | 'reviews'>('description');
    const addToCart = useCartStore((state) => state.addToCart);

    useEffect(() => {
        let selectedTour;
        if (showAllTours) {
            selectedTour = wineTours[0];
        } else if (id) {
            selectedTour = wineTours.find((t) => t.id === id) || wineTours[0];
        } else {
            selectedTour = wineTours[0];
        }

        setTour(selectedTour);
        if (selectedTour?.availableDates.length > 0) {
            setSelectedDate(selectedTour.availableDates[0]);
        }
    }, [id, showAllTours]);

    if (!tour) return <div>Loading...</div>;

    const getLanguageFlag = (language: string) => {
        const flags: { [key: string]: string } = {
            Español: 'es',
            Inglés: 'gb',
            Francés: 'fr',
            Portugués: 'pt',
            Alemán: 'de',
            Italiano: 'it',
        };
        return flags[language] || '🌐';
    };

    const getServiceIcon = (service: string) => {
        const serviceIcons: { [key: string]: JSX.Element } = {
            transporte: <Bus className="h-5 w-5 text-[#7D0633]" />,
            almuerzo: <UtensilsCrossed className="h-5 w-5 text-[#7D0633]" />,
            guía: <GraduationCap className="h-5 w-5 text-[#7D0633]" />,
            degustación: <Wine className="h-5 w-5 text-[#7D0633]" />,
            regalo: <Gift className="h-5 w-5 text-[#7D0633]" />,
            fotos: <Camera className="h-5 w-5 text-[#7D0633]" />,
            viñedos: <Grape className="h-5 w-5 text-[#7D0633]" />,
            premium: <Sparkles className="h-5 w-5 text-[#7D0633]" />,
            café: <Coffee className="h-5 w-5 text-[#7D0633]" />,
        };

        const key = Object.keys(serviceIcons).find((k) => service.toLowerCase().includes(k));
        return key ? serviceIcons[key] : <i className="h-5 w-5 text-[#7D0633]" />;
    };

    const isPremium = tour.highlights.some((h) => h.toLowerCase().includes('premium'));

    const handleBooking = () => {
        addToCart(tour, ticketCount, selectedDate);
    };

    return (
        <>
            {/* Tour Header */}
            <TourHeader tour={tour} isPremium={isPremium} />
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row">
                    {/* Tour details (left side) */}

                    <TourTabs
                        tour={tour}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        getLanguageFlag={getLanguageFlag}
                        getServiceIcon={getServiceIcon}
                        isPremium={isPremium}
                        reviews={reviews}
                    />

                    {/* Booking card (right side) */}
                    <BookingSidebar
                        tour={tour}
                        isPremium={isPremium}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        ticketCount={ticketCount}
                        setTicketCount={setTicketCount}
                        onBooking={handleBooking}
                    />
                </div>
            </div>
        </>
    );
};

export default TourDetailPage;
