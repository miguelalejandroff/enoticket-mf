import { MapPin } from 'lucide-react';
import { regions } from '../../../data/tours';
import { FilterHeader } from './filter-header';
import { RadioFilterGroup } from './radio-filter-group';

interface RegionFilterProps {
    selectedRegion: string;
    onChange: (regionId: string) => void;
}

const REGION_OPTIONS = regions.map((region) => ({
    value: region.id,
    label: region.name,
}));

export const RegionFilter = ({ selectedRegion, onChange }: RegionFilterProps) => {
    return (
        <div className="mb-6">
            <FilterHeader icon={<MapPin className="h-4 w-4 mr-2 text-[#7D0633]" />} title="Región" />
            <RadioFilterGroup
                name="region"
                selected={selectedRegion}
                onChange={onChange}
                options={REGION_OPTIONS}
                anyOptionLabel="Todas las regiones"
            />
        </div>
    );
};
