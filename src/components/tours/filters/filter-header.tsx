interface FilterHeaderProps {
    icon: React.ReactNode;
    title: string;
}

export const FilterHeader = ({ icon, title }: FilterHeaderProps) => (
    <h3 className="text-sm font-medium text-[#2E4347] mb-3 flex items-center">
        {icon}
        {title}
    </h3>
);
