// includes-meta.ts
import { Bus, UtensilsCrossed, GraduationCap, Wine, Gift, Camera, Grape, Sparkles, Coffee, GlassWater, Ticket, Users, Book } from 'lucide-react';
import type { JSX } from 'react';

export interface IncludeMeta {
    id: string;
    label: string;
    icon: JSX.Element;
    keywords: string[]; // para el match automático desde texto libre
}

export const includesMeta: IncludeMeta[] = [
    {
        id: 'transport',
        label: 'Transporte',
        icon: <Bus className="h-5 w-5 text-[#7D0633]" />,
        keywords: ['transporte', 'traslado'],
    },
    {
        id: 'lunch',
        label: 'Almuerzo',
        icon: <UtensilsCrossed className="h-5 w-5 text-[#7D0633]" />,
        keywords: ['almuerzo', 'comida', 'menú'],
    },
    {
        id: 'guide',
        label: 'Guía bilingüe',
        icon: <GraduationCap className="h-5 w-5 text-[#7D0633]" />,
        keywords: ['guía', 'sumiller', 'enólogo'],
    },
    {
        id: 'tasting',
        label: 'Degustación',
        icon: <Wine className="h-5 w-5 text-[#7D0633]" />,
        keywords: ['degustación', 'cata'],
    },
    {
        id: 'vineyard-entry',
        label: 'Entradas a viñas',
        icon: <Ticket className="h-5 w-5 text-[#7D0633]" />,
        keywords: ['entrada', 'visita', 'acceso'],
    },
    {
        id: 'gift',
        label: 'Regalo',
        icon: <Gift className="h-5 w-5 text-[#7D0633]" />,
        keywords: ['regalo', 'souvenir', 'recuerdo'],
    },
    {
        id: 'photo',
        label: 'Fotografías',
        icon: <Camera className="h-5 w-5 text-[#7D0633]" />,
        keywords: ['foto', 'fotografía'],
    },
    {
        id: 'vineyards',
        label: 'Viñedos',
        icon: <Grape className="h-5 w-5 text-[#7D0633]" />,
        keywords: ['viñedo', 'campo', 'parcela'],
    },
    {
        id: 'coffee',
        label: 'Café',
        icon: <Coffee className="h-5 w-5 text-[#7D0633]" />,
        keywords: ['café', 'desayuno'],
    },
    {
        id: 'experience',
        label: 'Experiencia Premium',
        icon: <Sparkles className="h-5 w-5 text-[#7D0633]" />,
        keywords: ['premium', 'exclusiva', 'boutique'],
    },
    {
        id: 'glass',
        label: 'Copa de regalo',
        icon: <GlassWater className="h-5 w-5 text-[#7D0633]" />,
        keywords: ['copa', 'cristal'],
    },
    {
        id: 'tour-group',
        label: 'Grupo guiado',
        icon: <Users className="h-5 w-5 text-[#7D0633]" />,
        keywords: ['grupo', 'tour'],
    },
    {
        id: 'material',
        label: 'Material educativo',
        icon: <Book className="h-5 w-5 text-[#7D0633]" />,
        keywords: ['material', 'información', 'manual'],
    },
];
