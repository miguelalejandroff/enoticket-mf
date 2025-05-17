// src/components/tour/tabs/tour-description-tab.tsx

import { Star, Check, Info, Shirt, Sun, ThermometerSun, Wine } from 'lucide-react';
import type { WineTour } from '../../../types';

interface TourDescriptionTabProps {
    tour: WineTour;
}

export const TourDescriptionTab = ({ tour }: TourDescriptionTabProps) => {
    return (
        <div className="space-y-8">
            <div className="bg-[#F5F5DC]/30 rounded-xl p-6 border border-[#D4AF37]/20">
                <p className="text-gray-700 leading-relaxed">{tour.description}</p>
            </div>

            <div>
                <h3 className="text-xl font-serif font-semibold mb-6 text-[#2E4347] flex items-center">
                    <Star className="h-5 w-5 text-[#D4AF37] mr-2 fill-current" />
                    Destacados del Tour
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tour.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start p-4 bg-white rounded-lg">
                            <Check className="h-5 w-5 text-[#7D0633] mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#2E4347]/5 rounded-xl p-6">
                <div className="flex items-center mb-4">
                    <div className=" p-2 mr-3">
                        <Info className="h-5 w-5 text-[#7D0633]" />
                    </div>
                    <h4 className="font-medium text-[#2E4347] text-base">Recomendaciones</h4>
                </div>

                <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-center py-2 px-4 ">
                        <div className="p-2 mr-3">
                            <Shirt className="h-4 w-4 text-[#7D0633]" />
                        </div>
                        <span>Ropa y calzado cómodo</span>
                    </li>
                    <li className="flex items-cente py-2 px-4">
                        <div className="p-2 mr-3">
                            <Sun className="h-4 w-4 text-[#7D0633]" />
                        </div>
                        <span>Protector solar</span>
                    </li>
                    <li className="flex items-cente py-2 px-4">
                        <div className="p-2 mr-3">
                            <ThermometerSun className="h-4 w-4 text-[#7D0633]" />
                        </div>
                        <span>Chaqueta ligera (las bodegas mantienen temperaturas frescas)</span>
                    </li>
                    <li className="flex items-cente py-2 px-4">
                        <div className="p-2 mr-3">
                            <Wine className="h-4 w-4 text-[#7D0633]" />
                        </div>
                        <span>Todas las degustaciones están incluidas en el precio</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
