import { Navigation, Timer, Ban, Shirt, CreditCard, Wine, Info } from 'lucide-react';
import { DetailCard } from './detail-card';
import type { WineTour } from '../../../types';
import { TourMapa } from './tour-map';

interface TourDetailsTabProps {
    tour: WineTour;
}

export const TourDetailsTab = ({ tour }: TourDetailsTabProps) => {
    return (
        <>
            <TourMapa />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DetailCard
                    icon={<Navigation className="h-5 w-5 text-[#7D0633] mr-2" />}
                    title="Punto de encuentro"
                    content={`${tour.location}. Nos reuniremos en la entrada principal de la viña. Te enviaremos la ubicación exacta por correo electrónico.`}
                />
                <DetailCard
                    icon={<Timer className="h-5 w-5 text-[#7D0633] mr-2" />}
                    title="Duración"
                    content={`${tour.duration}. El tour comienza puntualmente a la hora programada.`}
                />
                <DetailCard
                    icon={<Ban className="h-5 w-5 text-[#7D0633] mr-2" />}
                    title="Política de cancelación"
                    content="Cancelación gratuita hasta 48 horas antes. No hay reembolsos para cancelaciones posteriores."
                />
                <DetailCard
                    icon={<Shirt className="h-5 w-5 text-[#7D0633] mr-2" />}
                    title="Qué traer"
                    content="Identificación con foto, ropa cómoda, protector solar y una chaqueta ligera."
                />
                <DetailCard
                    icon={<CreditCard className="h-5 w-5 text-[#7D0633] mr-2" />}
                    title="Métodos de pago"
                    content="Aceptamos todas las tarjetas de crédito principales y transferencias bancarias."
                />
                <DetailCard
                    icon={<Wine className="h-5 w-5 text-[#7D0633] mr-2" />}
                    title="Degustación"
                    content="Incluye degustación de vinos premium seleccionados por nuestros expertos sommeliers."
                />
            </div>

            <div className="mt-8 p-6 bg-[#F5F5DC] rounded-lg">
                <div className="flex items-start">
                    <Info className="h-5 w-5 text-[#7D0633] mr-3 mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-medium text-[#2E4347] mb-2">Información importante</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• La experiencia requiere un mínimo de 2 participantes para realizarse</li>
                            <li>• La edad mínima para participar es 18 años</li>
                            <li>• Se recomienda reservar con al menos 48 horas de anticipación</li>
                            <li>• El tour se realiza con lluvia o sol, a menos que las condiciones sean extremas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
