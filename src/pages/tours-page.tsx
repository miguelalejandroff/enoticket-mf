import { useState } from 'react';
import { Sliders } from 'lucide-react';
import { useSearchStore } from '../store/search-store';
import TourCard from '../components/tours/tour-card';
import { FiltersSidebar } from '../components/tours/tours-filter';

const ToursPage = () => {
    const { filters, setFilters, searchResults, search } = useSearchStore();
    const [showFilters, setShowFilters] = useState(true);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Filters Sidebar */}

                <FiltersSidebar filters={filters} setFilters={setFilters} search={search} showFilters={showFilters} setShowFilters={setShowFilters} />

                {/* Tours Grid */}
                <div className="md:w-3/4">
                    {/* Mobile Filter Button */}
                    <div className="md:hidden mb-4">
                        <button
                            onClick={() => setShowFilters(true)}
                            className="w-full bg-white border border-[#7D0633] text-[#7D0633] rounded-md px-4 py-2 text-sm font-medium hover:bg-[#7D0633] hover:text-white transition-colors flex items-center justify-center"
                        >
                            <Sliders className="h-4 w-4 mr-2" />
                            Mostrar Filtros
                        </button>
                    </div>

                    {/* Results Count */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-serif font-bold text-[#2E4347]">Tours Disponibles ({searchResults.length})</h2>
                        <p className="text-[#7D0633] mt-2">Descubre experiencias únicas en las mejores viñas de Chile</p>
                    </div>

                    {/* Tours Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {searchResults.map((tour) => (
                            <TourCard key={tour.id} tour={tour} />
                        ))}
                    </div>

                    {searchResults.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">No se encontraron tours con los filtros seleccionados.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ToursPage;
