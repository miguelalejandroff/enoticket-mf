import { Bus, Utensils, Languages, Wine, Gift, Briefcase } from 'lucide-react';

import { FilterHeader } from './filter-header';
import { CheckboxFilterGroup } from './checkbox-filter-group';

interface ServicesFilterProps {
    selectedServices: string[];
    onChange: (updatedServices: string[]) => void;
}

const SERVICES = [
    { value: 'Transporte', label: 'Transporte', icon: <Bus className="h-4 w-4 text-[#7D0633] mr-2" /> },
    { value: 'Almuerzo', label: 'Almuerzo', icon: <Utensils className="h-4 w-4 text-[#7D0633] mr-2" /> },
    { value: 'Guía bilingüe', label: 'Guía bilingüe', icon: <Languages className="h-4 w-4 text-[#7D0633] mr-2" /> },
    { value: 'Degustación', label: 'Degustación', icon: <Wine className="h-4 w-4 text-[#7D0633] mr-2" /> },
    { value: 'Regalo', label: 'Regalo', icon: <Gift className="h-4 w-4 text-[#7D0633] mr-2" /> },
];

export const ServicesFilter = ({ selectedServices, onChange }: ServicesFilterProps) => {
    return (
        <div className="mb-6">
            <FilterHeader icon={<Briefcase className="h-4 w-4 mr-2 text-[#7D0633]" />} title="Servicios Incluidos" />
            <CheckboxFilterGroup selectedValues={selectedServices} onChange={onChange} options={SERVICES} />
        </div>
    );
};
