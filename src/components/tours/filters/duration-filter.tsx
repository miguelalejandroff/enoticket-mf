import { Calendar } from 'lucide-react';

interface DurationFilterProps {
    selectedDuration: string;
    onChange: (value: string) => void;
}

const DURATION_OPTIONS = ['4 horas', '5 horas', '6 horas', '7 horas', '8 horas', '10 horas'];

export const DurationFilter = ({ selectedDuration, onChange }: DurationFilterProps) => {
    return (
        <div className="mb-6">
            <h3 className="text-sm font-medium text-[#2E4347] mb-3 flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-[#7D0633]" />
                Duración
            </h3>
            <div className="space-y-3">
                {DURATION_OPTIONS.map((duration) => (
                    <label key={duration} className="flex items-center">
                        <input
                            type="radio"
                            name="duration"
                            value={duration}
                            checked={selectedDuration === duration}
                            onChange={(e) => onChange(e.target.value)}
                            className="text-[#7D0633] focus:ring-[#7D0633]"
                        />
                        <span className="ml-2 text-sm text-gray-600">{duration}</span>
                    </label>
                ))}
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="duration"
                        value=""
                        checked={selectedDuration === ''}
                        onChange={(e) => onChange(e.target.value)}
                        className="text-[#7D0633] focus:ring-[#7D0633]"
                    />
                    <span className="ml-2 text-sm text-gray-600">Cualquier duración</span>
                </label>
            </div>
        </div>
    );
};
