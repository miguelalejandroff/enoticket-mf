import { Wine } from 'lucide-react';
import { includesMeta } from '../data/includes';

export const getIncludeMeta = (include: string) => {
    return (
        includesMeta.find((meta) => meta.keywords.some((kw) => include.toLowerCase().includes(kw))) || {
            label: include,
            icon: <Wine className="h-5 w-5 text-[#7D0633]" />,
        }
    );
};
