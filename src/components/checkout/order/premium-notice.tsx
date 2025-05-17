// components/checkout/PremiumNotice.tsx
import { CheckCircle2 } from 'lucide-react';

export const PremiumNotice = () => {
    return (
        <div className="bg-[#F5F5DC]/30 p-4 rounded-lg border border-[#D4AF37]/20 flex items-start">
            <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
                <span className="font-medium">¡Excelente elección!</span> Has seleccionado experiencias premium que incluyen beneficios exclusivos y
                atención personalizada.
            </p>
        </div>
    );
};
