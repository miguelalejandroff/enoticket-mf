import { Star, Shield, Leaf, Wine, Landmark, Crown } from 'lucide-react'; // Puedes personalizar estos íconos

interface FeaturesFilterProps {
    selectedFeatures: string[];
    onChange: (updatedFeatures: string[]) => void;
}

const FEATURES = [
    { label: 'Premium', icon: Crown },
    { label: 'Boutique', icon: Shield },
    { label: 'Gourmet', icon: Wine },
    { label: 'Histórico', icon: Landmark },
    { label: 'Orgánico', icon: Leaf },
];

export const FeaturesFilter = ({ selectedFeatures, onChange }: FeaturesFilterProps) => {
    const handleCheckboxChange = (feature: string, checked: boolean) => {
        const updated = checked ? [...selectedFeatures, feature] : selectedFeatures.filter((f) => f !== feature);
        onChange(updated);
    };

    return (
        <div className="mb-6">
            <h3 className="text-sm font-medium text-[#2E4347] mb-3 flex items-center">
                <Star className="h-4 w-4 mr-2 text-[#7D0633]" />
                Características Especiales
            </h3>
            <div className="space-y-3">
                {FEATURES.map(({ label, icon: Icon }) => (
                    <label key={label} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={selectedFeatures.includes(label)}
                            onChange={(e) => handleCheckboxChange(label, e.target.checked)}
                            className="text-[#7D0633] focus:ring-[#7D0633]"
                        />
                        <Icon className="h-4 w-4 text-[#7D0633]" />
                        <span className="text-sm text-gray-600">{label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};
