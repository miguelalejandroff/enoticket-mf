import { Wine, GlassWater, Grape, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const experiences = [
    {
        icon: <Wine className="h-12 w-12 text-[#7D0633]" />,
        title: 'Degustaciones Premium',
        description: 'Prueba los mejores vinos de cada región con expertos sommeliers que te guiarán a través de una experiencia sensorial única.',
        type: 'degustacion',
        tourId: 'tour-1',
        features: ['Catas guiadas por expertos', 'Vinos premium y reserva', 'Maridajes exclusivos', 'Experiencia personalizada'],
    },
    {
        icon: <GlassWater className="h-12 w-12 text-[#7D0633]" />,
        title: 'Elaboración de Vinos',
        description:
            'Aprende el arte de la vinificación participando en el proceso de elaboración del vino, desde la selección de uvas hasta el embotellado.',
        type: 'elaboracion',
        tourId: 'tour-7',
        features: ['Proceso de vinificación', 'Técnicas de fermentación', 'Envejecimiento en barricas', 'Embotellado artesanal'],
    },
    {
        icon: <Grape className="h-12 w-12 text-[#7D0633]" />,
        title: 'Vendimia y Cosecha',
        description:
            'Vive la experiencia de la vendimia tradicional, participando en la cosecha de uvas y aprendiendo sobre los diferentes tipos de cepas.',
        type: 'vendimia',
        tourId: 'tour-8',
        features: ['Cosecha manual', 'Selección de uvas', 'Prensado tradicional', 'Almuerzo en viñedo'],
    },
    {
        icon: <Utensils className="h-12 w-12 text-[#7D0633]" />,
        title: 'Maridaje Gourmet',
        description: 'Descubre la perfecta armonía entre vino y gastronomía con menús especialmente diseñados por chefs expertos.',
        type: 'maridaje',
        tourId: 'tour-7',
        features: ['Menú de 5 tiempos', 'Vinos seleccionados', 'Chef especializado', 'Productos locales'],
    },
];

const ExperiencesPage = () => {
    return (
        <div className="pt-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-serif font-bold text-[#2E4347] mb-4">Experiencias Enoturísticas</h1>
                    <div className="w-20 h-1 bg-[#7D0633] mx-auto mb-6 rounded-full" />
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Descubre nuestras experiencias únicas diseñadas para los amantes del vino. Desde degustaciones premium hasta participación en
                        la vendimia.
                    </p>
                </div>

                {/* Experiences Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((experience) => (
                        <div
                            key={experience.tourId}
                            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center mb-6">
                                <div className="bg-[#F5F5DC] p-4 rounded-xl">{experience.icon}</div>
                                <h2 className="text-2xl font-serif font-bold text-[#2E4347] ml-6">{experience.title}</h2>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">{experience.description}</p>

                            <div className="space-y-3">
                                {experience.features.map((feature) => (
                                    <div key={feature} className="flex items-center">
                                        <div className="w-2 h-2 bg-[#7D0633] rounded-full mr-3" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to={`/tours/${experience.tourId}`}
                                className="mt-8 block text-center w-full bg-[#7D0633] text-white py-3 rounded-lg hover:bg-[#5d0426] transition-colors font-medium"
                            >
                                Reservar Experiencia
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4">¿Buscas una experiencia personalizada?</p>
                    <button className="inline-flex items-center px-6 py-3 bg-[#2E4347] text-white rounded-lg hover:bg-[#243538] transition-colors font-medium">
                        Contáctanos para más información
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExperiencesPage;
