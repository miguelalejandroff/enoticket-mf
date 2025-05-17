import { Calendar, Wine, Utensils, Grape, BookOpenCheck } from 'lucide-react';

interface ExperienceFilterProps {
    experienceType?: string;
    onChange: (value: string) => void;
}

const EXPERIENCE_OPTIONS = [
    { id: 'degustacion', label: 'Degustación Premium', icon: Wine },
    { id: 'elaboracion', label: 'Elaboración de Vinos', icon: BookOpenCheck },
    { id: 'vendimia', label: 'Vendimia y Cosecha', icon: Grape },
    { id: 'maridaje', label: 'Maridaje Gourmet', icon: Utensils },
];

export const ExperienceFilter = ({ experienceType, onChange }: ExperienceFilterProps) => {
    return (
        <div className="mb-6">
            <h3 className="text-sm font-medium text-[#2E4347] mb-3 flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-[#7D0633]" />
                Tipo de Experiencia
            </h3>
            <div className="space-y-3">
                {EXPERIENCE_OPTIONS.map(({ id, label, icon: Icon }) => (
                    <label key={id} className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="experienceType"
                            value={id}
                            checked={experienceType === id}
                            onChange={(e) => onChange(e.target.value)}
                            className="text-[#7D0633] focus:ring-[#7D0633]"
                        />
                        <Icon className="h-4 w-4 text-[#7D0633]" />
                        <span className="text-sm text-gray-600">{label}</span>
                    </label>
                ))}

                <label className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="experienceType"
                        value=""
                        checked={experienceType === ''}
                        onChange={(e) => onChange(e.target.value)}
                        className="text-[#7D0633] focus:ring-[#7D0633]"
                    />
                    <Calendar className="h-4 w-4 text-[#7D0633]" />
                    <span className="text-sm text-gray-600">Todas las experiencias</span>
                </label>
            </div>
        </div>
    );
};
