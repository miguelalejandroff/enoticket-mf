import { Calendar } from 'lucide-react';
import { RadioFilterGroup } from './radio-filter-group';
import { FilterHeader } from './filter-header';

const DURATION_OPTIONS = [
    { value: '4 horas', label: '44 horas' },
    { value: '5 horas', label: '5 horas' },
    { value: '6 horas', label: '6 horas' },
    { value: '7 horas', label: '7 horas' },
    { value: '8 horas', label: '8 horas' },
    { value: '10 horas', label: '10 horas' },
];
interface DurationFilterProps {
    selectedDuration: string;
    onChange: (value: string) => void;
}

export const DurationFilter = ({ selectedDuration, onChange }: DurationFilterProps) => (
    <div className="mb-6">
        <FilterHeader icon={<Calendar className="h-4 w-4 mr-2 text-[#7D0633]" />} title="Duración" />
        <RadioFilterGroup
            name="duration"
            selected={selectedDuration}
            onChange={onChange}
            options={DURATION_OPTIONS}
            anyOptionLabel="Cualquier duración"
        />
    </div>
);
