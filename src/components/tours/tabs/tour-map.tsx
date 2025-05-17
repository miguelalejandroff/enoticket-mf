import { Loader, MapPin, Maximize2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { WineTour } from '../../../types';

export const TourMapa = () => {
    const [tour] = useState<WineTour | null>(null);
    const [loaded, setLoaded] = useState(false);
    const [mapModalOpen, setMapModalOpen] = useState(false);

    const coordinates: Record<string, string> = {
        'valle-casablanca': '-33.319%2C-71.409',
        'valle-maipo': '-33.7167%2C-70.7500',
        'valle-colchagua': '-34.6387%2C-71.1167',
        'valle-curico': '-34.9833%2C-71.2333',
    };

    const getCoordinates = () => {
        if (!tour) return '-33.4489%2C-70.6693'; // Santiago por defecto
        return coordinates[tour.valleyId] ?? '-33.4489%2C-70.6693';
    };

    // Cierre con ESC
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMapModalOpen(false);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <>
            <h3 className="text-xl font-serif font-semibold mb-6 text-[#2E4347] flex items-center">
                <MapPin className="h-5 w-5 text-[#7D0633] mr-2" />
                Ubicación
            </h3>

            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-lg">
                <iframe
                    title="Ubicación del Tour"
                    src={`https://www.google.com/maps?q=${getCoordinates()}&z=14&output=embed`}
                    className={`w-full h-full border-0 ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                    allowFullScreen
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                />

                {!loaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-xl">
                        <Loader className="w-8 h-8 text-[#7D0633] animate-spin" />
                    </div>
                )}

                <button
                    onClick={() => setMapModalOpen(true)}
                    className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition z-10 group"
                    aria-label="Expandir mapa"
                >
                    <Maximize2 className="h-5 w-5 text-[#7D0633] group-hover:scale-110 transition-transform" />
                </button>
            </div>

            {/* MODAL MAPA */}
            {mapModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-60">
                    <button
                        type="button"
                        aria-label="Cerrar modal de mapa"
                        onClick={() => setMapModalOpen(false)}
                        className="absolute inset-0 w-full h-full cursor-pointer bg-transparent"
                    />
                    <button
                        className="relative w-full max-w-5xl h-[80vh] bg-white rounded-xl overflow-hidden shadow-xl z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            title="Ubicación del Tour - Modal"
                            src={`https://www.google.com/maps?q=${getCoordinates()}&z=14&output=embed`}
                            className="w-full h-full border-0"
                            allowFullScreen
                        />
                        <button
                            onClick={() => setMapModalOpen(false)}
                            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition z-10 group cursor-pointer"
                            aria-label="Cerrar mapa"
                        >
                            <X className="h-5 w-5 text-[#7D0633] group-hover:scale-110 transition-transform" />
                        </button>
                    </button>
                </div>
            )}
        </>
    );
};
