import { Award, Clock, Shield, Wine } from 'lucide-react';

export const ServiceGuarantees = () => {
    return (
        <div className="mt-6 space-y-3 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-[#2E4347] mb-4 flex items-center">
                <Shield className="w-4 h-4 mr-2 text-[#7D0633]" />
                Garantías del servicio
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start p-3 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300">
                    <Clock className="w-4 h-4 mr-2 text-[#7D0633]" />
                    <div>
                        <p className="font-medium text-[#2E4347] text-sm">Cancelación Flexible</p>
                        <p className="text-xs text-gray-600 mt-1">Cancela gratis hasta 48 horas antes del tour</p>
                    </div>
                </div>
                <div className="flex items-start p-3 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300">
                    <Wine className="w-4 h-4 mr-2 text-[#7D0633]" />
                    <div>
                        <p className="font-medium text-[#2E4347] text-sm">Satisfacción Garantizada</p>
                        <p className="text-xs text-gray-600 mt-1">Experiencia de calidad o te devolvemos tu dinero</p>
                    </div>
                </div>
                <div className="flex items-start p-3 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300">
                    <Award className="w-4 h-4 mr-2 text-[#7D0633]" />
                    <div>
                        <p className="font-medium text-[#2E4347] text-sm">Guías Expertos</p>
                        <p className="text-xs text-gray-600 mt-1">Profesionales certificados en enoturismo</p>
                    </div>
                </div>
                <div className="flex items-start p-3 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300">
                    <Shield className="w-4 h-4 mr-2 text-[#7D0633]" />
                    <div>
                        <p className="font-medium text-[#2E4347] text-sm">Pago 100% Seguro</p>
                        <p className="text-xs text-gray-600 mt-1">Transacciones cifradas y verificadas por Transbank</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
