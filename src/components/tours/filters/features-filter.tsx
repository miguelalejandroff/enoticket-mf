import { Star, Shield, Leaf, Wine, Landmark, Crown } from 'lucide-react';
import { FilterHeader } from './filter-header';
import { CheckboxFilterGroup } from './checkbox-filter-group';

interface FeaturesFilterProps {
    selectedFeatures: string[];
    onChange: (updatedFeatures: string[]) => void;
}

const FEATURES = [
    { value: 'Premium', label: 'Premium', icon: <Crown className="h-4 w-4 text-[#7D0633]" /> },
    { value: 'Boutique', label: 'Boutique', icon: <Shield className="h-4 w-4 text-[#7D0633]" /> },
    { value: 'Gourmet', label: 'Gourmet', icon: <Wine className="h-4 w-4 text-[#7D0633]" /> },
    { value: 'Histórico', label: 'Histórico', icon: <Landmark className="h-4 w-4 text-[#7D0633]" /> },
    { value: 'Orgánico', label: 'Orgánico', icon: <Leaf className="h-4 w-4 text-[#7D0633]" /> },
];

export const FeaturesFilter = ({ selectedFeatures, onChange }: FeaturesFilterProps) => {
    return (
        <div className="mb-6">
            <FilterHeader icon={<Star className="h-4 w-4 mr-2 text-[#7D0633]" />} title="Características Especiales" />
            <CheckboxFilterGroup selectedValues={selectedFeatures} onChange={onChange} options={FEATURES} />
        </div>
    );
};
