import { MapPin, Grape, Wine, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSearchStore } from '../../store/search-store';
import type { Region } from '../../types';

interface RegionCardProps {
    region: Region;
}

const RegionCard = ({ region }: RegionCardProps) => {
    const { getToursCountByValleyId, setFilters } = useSearchStore();
    const navigate = useNavigate();
    const availableTours = getToursCountByValleyId(region.id);

    const handleClick = () => {
        setFilters({ region: region.id });
        navigate('/tours');
    };

    return (
        <div className="bg-white rounded-xl shadow-lg group border hover:border-[#7D0633] border-gray-100 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 group relative">
            <div className="relative overflow-hidden rounded-t-xl">
                <img
                    src={region.imageUrl}
                    alt={region.name}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100">
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center text-white">
                            <MapPin className="h-4 w-4" />
                            <span className="ml-2 text-sm">Valle Vinícola</span>
                        </div>
                    </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#7D0633] px-4 py-2 rounded-xl text-sm font-bold shadow-lg transform -rotate-2 group-hover:rotate-0 transition-all duration-300 hover:scale-105">
                    {availableTours} tours
                    <span className="block text-xs text-gray-500 text-center">disponibles</span>
                </div>
            </div>

            <div className="p-6 space-y-5">
                <div>
                    <h3 className="text-xl font-serif font-bold text-[#2E4347] line-clamp-2 group-hover:text-[#7D0633] transition-colors leading-tight mb-2">
                        {region.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {region.description}
                    </p>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto mb-4">
                    <div className="flex items-center space-x-3">
                        <div className="relative group/tooltip">
                            <div className="p-2 bg-[#F5F5DC]/30 rounded-lg border border-[#D4AF37]/0 text-[#7D0633] hover:bg-[#F5F5DC]/50 transition-colors">
                                <Grape className="h-4 w-4" />
                            </div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#2E4347] text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                Viñedos Exclusivos
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#2E4347]"></div>
                            </div>
                        </div>
                        <div className="relative group/tooltip">
                            <div className="p-2 bg-[#F5F5DC]/30 rounded-lg border border-[#D4AF37]/0 text-[#7D0633] hover:bg-[#F5F5DC]/0 transition-colors">
                                <Wine className="h-4 w-4" />
                            </div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#2E4347] text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                Vinos Premiados
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#2E4347]"></div>
                            </div>
                        </div>
                        <div className="relative group/tooltip">
                            <div className="p-2 bg-[#F5F5DC]/30 rounded-lg border border-[#D4AF37]/0 text-[#7D0633] hover:bg-[#F5F5DC]/50 transition-colors">
                                <Sun className="h-4 w-4" />
                            </div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-[#2E4347] text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                Clima Ideal
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#2E4347]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleClick}
                    className="w-full bg-[#7D0633] hover:bg-[#5d0426] text-white py-4 rounded-xl transition-all duration-300 text-sm font-bold shadow-md hover:shadow-xl group-hover:scale-[1.02] relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    Explorar Tours
                </button>
            </div>
        </div>
    );
};

export default RegionCard;
