import {
    Bus,
    Utensils,
    Languages,
    Wine,
    Gift,
    Briefcase, // Ícono para el título
} from 'lucide-react';

interface ServicesFilterProps {
    selectedServices: string[];
    onChange: (updatedServices: string[]) => void;
}

const SERVICES = [
    { label: 'Transporte', icon: <Bus className="h-4 w-4 text-[#7D0633] mr-2" /> },
    { label: 'Almuerzo', icon: <Utensils className="h-4 w-4 text-[#7D0633] mr-2" /> },
    { label: 'Guía bilingüe', icon: <Languages className="h-4 w-4 text-[#7D0633] mr-2" /> },
    { label: 'Degustación', icon: <Wine className="h-4 w-4 text-[#7D0633] mr-2" /> },
    { label: 'Regalo', icon: <Gift className="h-4 w-4 text-[#7D0633] mr-2" /> },
];

export const ServicesFilter = ({ selectedServices, onChange }: ServicesFilterProps) => {
    const handleCheckboxChange = (service: string, checked: boolean) => {
        const updated = checked ? [...selectedServices, service] : selectedServices.filter((s) => s !== service);
        onChange(updated);
    };

    return (
        <div className="mb-6">
            <h3 className="text-sm font-medium text-[#2E4347] mb-3 flex items-center">
                <Briefcase className="h-4 w-4 mr-2 text-[#7D0633]" />
                Servicios Incluidos
            </h3>
            <div className="space-y-3">
                {SERVICES.map(({ label, icon }) => (
                    <label key={label} className="flex items-center">
                        <input
                            type="checkbox"
                            checked={selectedServices.includes(label)}
                            onChange={(e) => handleCheckboxChange(label, e.target.checked)}
                            className="text-[#7D0633] focus:ring-[#7D0633]"
                        />
                        <span className="ml-2 text-sm text-gray-600 flex items-center">
                            {icon}
                            {label}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};
