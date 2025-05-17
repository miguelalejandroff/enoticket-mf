import { Award, Clock, Heart, Users } from 'lucide-react';

const reasons = [
    {
        icon: <Award className="h-8 w-8 text-[#D4AF37]" />,
        title: 'Experiencias de Calidad',
        description: 'Seleccionamos cuidadosamente cada tour para garantizar la mejor experiencia enológica.',
    },
    {
        icon: <Users className="h-8 w-8 text-[#D4AF37]" />,
        title: 'Guías Especializados',
        description: 'Nuestros guías son expertos en vinos y conocen a fondo cada región vinícola.',
    },
    {
        icon: <Clock className="h-8 w-8 text-[#D4AF37]" />,
        title: 'Reserva Flexible',
        description: 'Cambia o cancela tus reservas hasta 48 horas antes sin cargos adicionales.',
    },
    {
        icon: <Heart className="h-8 w-8 text-[#D4AF37]" />,
        title: 'Experiencias Personalizadas',
        description: 'Adaptamos nuestros tours a tus preferencias para una experiencia única.',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-[#2E4347]">¿Por Qué Elegirnos?</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        En EnoTicket nos dedicamos a crear experiencias vinícolas inolvidables.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason) => (
                        <div
                            key={reason.title}
                            className="bg-white border border-gray-100 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="inline-flex items-center justify-center p-3 bg-[#F5F5DC] rounded-full mb-4">{reason.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-[#2E4347]">{reason.title}</h3>
                            <p className="text-gray-600">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
