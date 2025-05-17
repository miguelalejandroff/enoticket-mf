import { create } from 'zustand';
import type { FilterOptions, WineTour } from '../types';
import { wineTours } from '../data/tours';

interface SearchStore {
    filters: FilterOptions;
    searchResults: WineTour[];
    setFilters: (filters: Partial<FilterOptions>) => void;
    search: () => void;
    getToursCountByValleyId: (valleyId: string) => number;
}

const defaultFilters: FilterOptions = {
    region: '',
    priceRange: [35000, 100000],
    duration: '',
    services: [],
    features: [],
    experienceType: '',
    dateRange: {
        start: '2025-03-15',
        end: '2025-03-31',
    },
};

export const useSearchStore = create<SearchStore>((set) => ({
    filters: defaultFilters,
    searchResults: wineTours,
    setFilters: (newFilters) =>
        set((state) => {
            const updatedFilters = { ...state.filters, ...newFilters };
            return {
                filters: updatedFilters,
                searchResults: wineTours.filter((tour) => {
                    if (updatedFilters.region && tour.valleyId !== updatedFilters.region) {
                        return false;
                    }
                    return true;
                }),
            };
        }),
    search: () => {
        set((state) => {
            const filtered = wineTours.filter((tour) => {
                // Region filter
                if (state.filters.region && tour.valleyId !== state.filters.region) {
                    return false;
                }

                // Price range filter
                if (tour.price < state.filters.priceRange[0] || tour.price > state.filters.priceRange[1]) {
                    return false;
                }

                // Duration filter
                if (state.filters.duration && tour.duration !== state.filters.duration) {
                    return false;
                }

                // Experience type filter
                if (state.filters.experienceType) {
                    const experienceTypes = {
                        degustacion: ['Degustación', 'Cata', 'Premium'],
                        elaboracion: ['Elaboración', 'Vinificación', 'Proceso'],
                        vendimia: ['Vendimia', 'Cosecha', 'Recolección'],
                        maridaje: ['Maridaje', 'Gourmet', 'Gastronomía'],
                    };

                    const keywords = experienceTypes[state.filters.experienceType as keyof typeof experienceTypes];
                    const matchesType = keywords.some((keyword) => tour.title.includes(keyword) || tour.description.includes(keyword));

                    if (!matchesType) return false;
                }

                // Services filter
                if (state.filters.services.length > 0) {
                    const hasAllServices = state.filters.services.every((service) =>
                        tour.includes.some((included) => included.toLowerCase().includes(service.toLowerCase()))
                    );
                    if (!hasAllServices) return false;
                }

                // Features filter
                if (state.filters.features.length > 0) {
                    const hasAllFeatures = state.filters.features.every((feature) =>
                        tour.highlights.some((highlight) => highlight.toLowerCase().includes(feature.toLowerCase()))
                    );
                    if (!hasAllFeatures) return false;
                }

                // Date range filter
                if (state.filters.dateRange.start && state.filters.dateRange.end) {
                    const hasAvailableDateInRange = tour.availableDates.some((date) => {
                        return date >= state.filters.dateRange.start && date <= state.filters.dateRange.end;
                    });
                    if (!hasAvailableDateInRange) return false;
                }

                return true;
            });

            return { searchResults: filtered };
        });
    },
    getToursCountByValleyId: (valleyId: string) => {
        return wineTours.filter((tour) => tour.valleyId === valleyId).length;
    },
}));
