import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'María Fernández',
        location: 'Santiago, Chile',
        image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
        text: 'Una experiencia absolutamente increíble. El recorrido por Concha y Toro superó todas mis expectativas. Nuestro guía era muy conocedor y las degustaciones fueron generosas. ¡Definitivamente volveré!',
        rating: 5,
        tour: 'Experiencia Premium en Viña Concha y Toro',
    },
    {
        id: 2,
        name: 'Juan Carlos Méndez',
        location: 'Buenos Aires, Argentina',
        image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
        text: 'El tour por el Valle de Casablanca fue espectacular. Visitamos tres viñas diferentes y cada una tenía su propio encanto. El almuerzo maridado fue exquisito y los vinos fueron excepcionales.',
        rating: 5,
        tour: 'Ruta del Vino en Valle de Casablanca',
    },
    {
        id: 3,
        name: 'Alejandra Rojas',
        location: 'Valparaíso, Chile',
        image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150',
        text: 'Como amante del vino, este tour me permitió aprender mucho sobre el proceso de vinificación en Chile. La atención personalizada y la calidad de los vinos degustados fueron excepcionales.',
        rating: 4,
        tour: 'Descubriendo el Carmenere en Santa Rita',
    },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-16 bg-[#F5F5DC] relative overflow-hidden">
            {/* Decorative wine glass pattern - semi-transparent in background */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                <div className="w-full h-full rounded-full border-8 border-[#7D0633]"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5">
                <div className="w-full h-full rounded-full border-8 border-[#7D0633]"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-[#2E4347]">Lo Que Dicen Nuestros Clientes</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Experiencias reales de quienes han disfrutado nuestros tours vinícolas.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 relative">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                            <div className="relative">
                                <img
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#D4AF37]"
                                />
                                <div className="absolute -bottom-2 -right-2 bg-[#7D0633] rounded-full p-1">
                                    <div className="flex">
                                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                            <Star key={i} className="h-3 w-3 text-white fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-2/3 md:pl-8">
                            <p className="text-gray-700 italic mb-4">"{testimonials[activeIndex].text}"</p>
                            <p className="font-bold text-[#2E4347]">{testimonials[activeIndex].name}</p>
                            <p className="text-sm text-gray-500 mb-2">{testimonials[activeIndex].location}</p>
                            <p className="text-xs font-medium text-[#7D0633]">Tour: {testimonials[activeIndex].tour}</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="mx-1 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            aria-label="Testimonio anterior"
                        >
                            <ChevronLeft className="h-5 w-5 text-[#2E4347]" />
                        </button>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`mx-1 w-3 h-3 rounded-full transition-colors ${
                                    index === activeIndex ? 'bg-[#7D0633]' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Ir al testimonio ${index + 1}`}
                            />
                        ))}
                        <button
                            onClick={nextTestimonial}
                            className="mx-1 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            aria-label="Siguiente testimonio"
                        >
                            <ChevronRight className="h-5 w-5 text-[#2E4347]" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
