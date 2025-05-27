import type { Review } from '../types';

export const reviews: Review[] = [
    {
        id: 1,
        tourId: 'tour-1',
        userName: 'Carolina Martínez',
        userImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 5,
        date: '2025-05-20',
        comment:
            'Una experiencia inolvidable en Concha y Toro. El guía fue muy conocedor y las degustaciones fueron excelentes. El Casillero del Diablo es impresionante.',
        language: 'es',
        tourDate: '2025-05-15',
        highlights: ['Guía experto', 'Excelentes degustaciones', 'Bodega histórica'],
    },
    {
        id: 2,
        tourId: 'tour-1',
        userName: 'Michael Thompson',
        userImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 4,
        date: '2025-05-18',
        comment:
            'Great tour with knowledgeable guides. The wine tasting was generous and the historical information was fascinating. Would highly recommend.',
        language: 'en',
        tourDate: '2025-05-10',
        highlights: ['Professional staff', 'Great wine selection'],
    },
    {
        id: 3,
        tourId: 'tour-1',
        userName: 'Ana García',
        userImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        rating: 5,
        date: '2025-05-14',
        comment:
            'Excelente tour, muy bien organizado. Las instalaciones son impresionantes y la degustación fue muy completa. El Don Melchor es excepcional.',
        language: 'es',
        tourDate: '2025-05-07',
        highlights: ['Organización perfecta', 'Vinos premium', 'Instalaciones modernas'],
    },
];
