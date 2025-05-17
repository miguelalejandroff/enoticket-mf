import { Calendar, Wine, Utensils, Grape, BookOpenCheck } from 'lucide-react';
import { FilterHeader } from './filter-header';
import { RadioFilterGroup } from './radio-filter-group';

interface ExperienceFilterProps {
    experienceType?: string;
    onChange: (value: string) => void;
}

const EXPERIENCE_OPTIONS = [
    { value: 'degustacion', label: 'Degustación Premium', icon: <Wine className="h-4 w-4 text-[#7D0633]" /> },
    { value: 'elaboracion', label: 'Elaboración de Vinos', icon: <BookOpenCheck className="h-4 w-4 text-[#7D0633]" /> },
    { value: 'vendimia', label: 'Vendimia y Cosecha', icon: <Grape className="h-4 w-4 text-[#7D0633]" /> },
    { value: 'maridaje', label: 'Maridaje Gourmet', icon: <Utensils className="h-4 w-4 text-[#7D0633]" /> },
];

export const ExperienceFilter = ({ experienceType = '', onChange }: ExperienceFilterProps) => {
    return (
        <div className="mb-6">
            <FilterHeader icon={<Calendar className="h-4 w-4 mr-2 text-[#7D0633]" />} title="Tipo de Experiencia" />
            <RadioFilterGroup
                name="experienceType"
                selected={experienceType}
                onChange={onChange}
                options={EXPERIENCE_OPTIONS}
                anyOptionLabel="Todas las experiencias"
            />
        </div>
    );
};
