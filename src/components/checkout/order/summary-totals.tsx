import { useCartStore } from '../../../store/cart-store';

export const SummaryTotals = () => {
    const { items, total } = useCartStore();
    return (
        <>
            <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Tours ({items.length})</span>
                <span>${total().toLocaleString('es-CL')}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Subtotal</span>
                <span>${total().toLocaleString('es-CL')}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600">
                <span>IVA (19%)</span>
                <span>${(total() * 0.19).toLocaleString('es-CL')}</span>
            </div>
            <div className="flex justify-between items-center text-xl font-bold text-[#2E4347]">
                <span>Total</span>
                <span>${(total() * 1.19).toLocaleString('es-CL')}</span>
            </div>
        </>
    );
};
