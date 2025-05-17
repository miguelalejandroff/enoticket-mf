import { MapPin } from 'lucide-react';
import { regions } from '../../../data/tours';

interface RegionFilterProps {
    selectedRegion: string;
    onChange: (regionId: string) => void;
}

export const RegionFilter = ({ selectedRegion, onChange }: RegionFilterProps) => {
    return (
        <div className="mb-6">
            <h3 className="text-sm font-medium text-[#2E4347] mb-3 flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-[#7D0633]" />
                Región
            </h3>
            <div className="space-y-3">
                {regions.map((region) => (
                    <label key={region.id} className="flex items-center">
                        <input
                            type="radio"
                            name="region"
                            value={region.id}
                            checked={selectedRegion === region.id}
                            onChange={() => onChange(region.id)}
                            className="text-[#7D0633] focus:ring-[#7D0633]"
                        />
                        <span className="ml-2 text-sm text-gray-600">{region.name}</span>
                    </label>
                ))}
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="region"
                        value=""
                        checked={selectedRegion === ''}
                        onChange={() => onChange('')}
                        className="text-[#7D0633] focus:ring-[#7D0633]"
                    />
                    <span className="ml-2 text-sm text-gray-600">Todas las regiones</span>
                </label>
            </div>
        </div>
    );
};
