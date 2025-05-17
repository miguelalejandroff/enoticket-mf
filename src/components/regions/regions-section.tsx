import { useState, useEffect } from 'react';
import { regions } from '../../data/tours';
import RegionCard from './region-card';
import type { Region } from '../../types';

const RegionsSection = () => {
    const [wineRegions, setWineRegions] = useState<Region[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

    useEffect(() => {
        // In a real app, this would be an API call
        setWineRegions(regions);
    }, []);

    const filteredRegions = selectedRegion ? wineRegions.filter((region) => region.id === selectedRegion) : wineRegions;

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif font-bold text-[#2E4347] mb-4">Regiones Vinícolas</h2>
                    <div className="w-20 h-1 bg-[#7D0633] mx-auto mb-6 rounded-full" />
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Explora las distintas regiones vinícolas de Chile, cada una con su propio carácter y variedad de vinos.
                    </p>
                </div>

                <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
                    <button
                        onClick={() => setSelectedRegion(null)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            !selectedRegion ? 'bg-[#7D0633] text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        Todas las regiones
                    </button>
                    {wineRegions.map((region) => (
                        <button
                            key={region.id}
                            onClick={() => setSelectedRegion(region.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                                selectedRegion === region.id ? 'bg-[#7D0633] text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {region.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {filteredRegions.map((region) => (
                        <RegionCard key={region.id} region={region} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RegionsSection;
