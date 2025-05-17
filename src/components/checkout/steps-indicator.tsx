// components/checkout/StepsIndicator.tsx
import { ChevronRight } from 'lucide-react';

interface StepsIndicatorProps {
    step: number;
}

export const StepsIndicator = ({ step }: StepsIndicatorProps) => (
    <div className="flex items-center space-x-2 text-sm text-gray-500 overflow-x-auto pb-2 sm:pb-0">
        {['Resumen', 'Datos', 'Pago'].map((label, index) => {
            const stepNumber = index + 1;
            const isActive = step >= stepNumber;
            return (
                <div key={label} className="flex items-center">
                    <span
                        className={`w-6 h-6 rounded-full ${
                            isActive ? 'bg-[#7D0633] text-white' : 'bg-gray-200 text-gray-500'
                        } flex items-center justify-center mr-2`}
                    >
                        {stepNumber}
                    </span>
                    <span className={`${isActive ? 'text-[#7D0633]' : ''}`}>{label}</span>
                    {index < 2 && <ChevronRight className="w-4 h-4 mx-1" />}
                </div>
            );
        })}
    </div>
);
