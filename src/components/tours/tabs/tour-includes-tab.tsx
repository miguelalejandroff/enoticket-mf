import { Check, Globe, Award } from 'lucide-react';
import type { WineTour } from '../../../types';
import { getIncludeMeta } from '../../../utils/get-includes';
import { getLanguageFlag } from '../../../utils/get-language';

interface TourIncludesTabProps {
    tour: WineTour;
    isPremium: boolean;
}

export const TourIncludesTab = ({ tour, isPremium }: TourIncludesTabProps) => {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-xl font-serif font-semibold mb-6 text-[#2E4347] flex items-center">
                    <Check className="h-5 w-5 text-[#7D0633] mr-2" />
                    Servicios Incluidos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tour.includes.map((item) => {
                        const { icon } = getIncludeMeta(item);
                        return (
                            <div key={item} className="flex items-center p-4 bg-white">
                                <div className="bg-gray-50 p-2 rounded-lg">{icon}</div>
                                <span className="ml-3 text-gray-700">{item}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-serif font-semibold mb-6 text-[#2E4347] flex items-center">
                    <Globe className="h-5 w-5 text-[#7D0633] mr-2" />
                    Idiomas Disponibles
                </h3>
                <div className="flex flex-wrap gap-4 px-2">
                    {tour.languages.map((language) => (
                        <div
                            key={language}
                            className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 bg-white  group cursor-default`}
                        >
                            <img
                                src={`https://flagcdn.com/w40/${getLanguageFlag(language)}.png`}
                                alt={`Bandera de ${language}`}
                                className="w-5 h-4 mr-2 rounded-sm"
                            />
                            <span className="ml-2 text-sm font-medium text-gray-700">{language}</span>
                        </div>
                    ))}
                </div>
            </div>

            {isPremium && (
                <section className="mt-8 rounded-xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 to-[#B39020]/10 p-6">
                    <div className="flex items-start gap-4">
                        <Award className="h-6 w-6 text-[#D4AF37] shrink-0" />
                        <div>
                            <h4 className="mb-3 font-serif text-lg font-semibold text-[#D4AF37]">Beneficios Premium</h4>
                            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                {[
                                    'Acceso exclusivo a vinos reserva',
                                    'Guía sumiller certificado',
                                    'Maridaje gourmet personalizado',
                                    'Regalo premium exclusivo',
                                ].map((benefit) => (
                                    <li key={benefit} className="flex items-center text-sm text-gray-700">
                                        <Check className="mr-2 h-4 w-4 text-[#D4AF37]" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};
