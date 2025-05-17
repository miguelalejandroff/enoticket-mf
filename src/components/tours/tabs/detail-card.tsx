interface DetailCardProps {
    icon: React.ReactNode;
    title: string;
    content: string;
}

export const DetailCard = ({ icon, title, content }: DetailCardProps) => (
    <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center mb-3">
            {icon}
            <h4 className="font-medium text-[#2E4347]">{title}</h4>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
    </div>
);