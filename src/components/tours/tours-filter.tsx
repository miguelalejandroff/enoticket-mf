import { Filter, Sliders } from 'lucide-react';
import type { FilterOptions } from '../../types';
import { RegionFilter } from './filters/region-filter';
import { PriceFilter } from './filters/price-filter';
import { ExperienceFilter } from './filters/experience-filter';
import { ServicesFilter } from './filters/services-filter';
import { FeaturesFilter } from './filters/features-filter';
import { DurationFilter } from './filters/duration-filter';
import { DateFilter } from './filters/date-filter';

interface FiltersSidebarProps {
    filters: FilterOptions;
    setFilters: (filters: Partial<FilterOptions>) => void;
    search: () => void;
    showFilters: boolean;
    setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FiltersSidebar = ({ filters, setFilters, search, showFilters, setShowFilters }: FiltersSidebarProps) => {
    const handleFilterChange = (filterUpdate: Partial<FilterOptions>) => {
        setFilters(filterUpdate);
        search();
    };
    return (
        <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-serif font-bold text-[#2E4347] flex items-center">
                        <Filter className="h-5 w-5 mr-2 text-[#7D0633]" />
                        Filtros
                    </h2>
                    <button className="md:hidden text-gray-500 hover:text-gray-700" onClick={() => setShowFilters(false)}>
                        <Sliders className="h-5 w-5" />
                    </button>
                </div>

                <RegionFilter selectedRegion={filters.region} onChange={(region) => handleFilterChange({ region })} />
                <PriceFilter priceRange={filters.priceRange} onChange={(range) => handleFilterChange({ priceRange: range })} />
                <ExperienceFilter experienceType={filters.experienceType ?? ''} onChange={(value) => handleFilterChange({ experienceType: value })} />
                <ServicesFilter selectedServices={filters.services} onChange={(services) => handleFilterChange({ services })} />
                <FeaturesFilter selectedFeatures={filters.features} onChange={(features) => handleFilterChange({ features })} />
                <DurationFilter selectedDuration={filters.duration} onChange={(duration) => handleFilterChange({ duration })} />
                <DateFilter selectedRange={filters.dateRange} onChange={(range) => handleFilterChange({ dateRange: range })} />
            </div>
        </div>
    );
};
