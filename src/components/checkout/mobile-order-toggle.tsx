// components/checkout/MobileOrderToggle.tsx
import { ChevronDown, Wine } from 'lucide-react';
import { useCartStore } from '../../store/cart-store';
import { OrderSummary } from './order-summary';

interface MobileOrderToggleProps {
    show: boolean;
    toggle: () => void;
}

export const MobileOrderToggle = ({ show, toggle }: MobileOrderToggleProps) => {
    const { items, total } = useCartStore();
    return (
        <div className="lg:hidden mb-6 border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <button onClick={toggle} className="w-full bg-white px-4 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <Wine className="w-5 h-5 text-[#7D0633] mr-2" />
                    <span className="font-medium text-[#2E4347]">Tu pedido ({items.length})</span>
                </div>
                <div className="flex items-center">
                    <span className="font-bold text-[#7D0633] mr-3">${(total() * 1.19).toLocaleString('es-CL')}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${show ? 'rotate-180' : ''}`} />
                </div>
            </button>
            {show && (
                <div className="border-t border-gray-200 px-4 pb-4 pt-1">
                    <OrderSummary isMobile />
                </div>
            )}
        </div>
    );
};
