export const ItemDetail = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
    <div className="flex items-center gap-1">
        {icon}
        {label}
    </div>
);
