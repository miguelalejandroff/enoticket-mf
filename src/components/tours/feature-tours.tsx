import { useState, useEffect } from 'react';
import TourCard from './tour-card';
import { Link } from 'react-router-dom';
import { useSearchStore } from '../../store/search-store';
import type { WineTour } from '../../types';

const FeaturedTours = () => {
    const { searchResults } = useSearchStore();
    const [displayedTours, setDisplayedTours] = useState<WineTour[]>([]);

    useEffect(() => {
        setDisplayedTours(searchResults.slice(0, 6));
    }, [searchResults]);

    return (
        <section id="featured-tours" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-[#2E4347] mb-4">Tours Destacados</h2>
                    <div className="w-20 h-1 bg-[#7D0633] mx-auto mb-6 rounded-full" />
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Descubre nuestras experiencias enoturísticas más populares en las principales regiones vinícolas de Chile.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {displayedTours.map((tour) => (
                        <TourCard key={tour.id} tour={tour} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        to="/tours"
                        className="inline-flex items-center px-10 py-4 bg-[#7D0633] hover:bg-[#5d0426] text-white rounded-xl transition-all duration-300 font-medium text-lg hover:shadow-xl transform hover:translate-y-[-2px]"
                    >
                        Explorar Todos los Tours
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedTours;
