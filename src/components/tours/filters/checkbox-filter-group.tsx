interface CheckboxOption {
    value: string;
    label: string;
    icon?: React.ReactNode;
}

interface CheckboxFilterGroupProps {
    selectedValues: string[];
    onChange: (updated: string[]) => void;
    options: CheckboxOption[];
}

export const CheckboxFilterGroup = ({ selectedValues, onChange, options }: CheckboxFilterGroupProps) => {
    const handleChange = (value: string, checked: boolean) => {
        const updated = checked ? [...selectedValues, value] : selectedValues.filter((v) => v !== value);
        onChange(updated);
    };

    return (
        <div className="space-y-3">
            {options.map(({ value, label, icon }) => (
                <label key={value} className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={selectedValues.includes(value)}
                        onChange={(e) => handleChange(value, e.target.checked)}
                        className="accent-[#7D0633] text-[#7D0633] focus:ring-[#7D0633]"
                    />
                    {icon}
                    <span className="text-sm text-gray-600">{label}</span>
                </label>
            ))}
        </div>
    );
};
