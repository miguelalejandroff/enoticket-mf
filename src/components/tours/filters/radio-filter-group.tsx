interface RadioOption {
    value: string;
    label: string;
    icon?: React.ReactNode;
}

interface RadioFilterGroupProps {
    name: string;
    selected: string;
    onChange: (value: string) => void;
    options: RadioOption[];
    includeAnyOption?: boolean;
    anyOptionLabel?: string;
}

export const RadioFilterGroup = ({
    name,
    selected,
    onChange,
    options,
    includeAnyOption = true,
    anyOptionLabel = 'Cualquiera',
}: RadioFilterGroupProps) => (
    <div className="space-y-3">
        {options.map(({ value, label, icon }) => (
            <label key={value} className="flex items-center gap-2">
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={selected === value}
                    onChange={(e) => onChange(e.target.value)}
                    className="accent-[#7D0633] text-[#7D0633] focus:ring-[#7D0633]"
                />
                {icon}
                <span className="text-sm text-gray-600">{label}</span>
            </label>
        ))}
        {includeAnyOption && (
            <label className="flex items-center gap-2">
                <input
                    type="radio"
                    name={name}
                    value=""
                    checked={selected === ''}
                    onChange={(e) => onChange(e.target.value)}
                    className="accent-[#7D0633] text-[#7D0633] focus:ring-[#7D0633]"
                />
                <span className="text-sm text-gray-600">{anyOptionLabel}</span>
            </label>
        )}
    </div>
);
