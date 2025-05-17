import { useCartStore } from '../../store/cart-store';
import { ServiceGuarantees } from './order/service-guarantees';
import { SummaryTotals } from './order/summary-totals';
import { OrderItem } from './order/order-item';
import { PremiumNotice } from './order/premium-notice';

interface OrderSummaryProps {
    isMobile?: boolean;
}

export const OrderSummary = ({ isMobile }: OrderSummaryProps) => {
    const { items } = useCartStore();
    return (
        <div className={`bg-white p-6 ${!isMobile ? 'rounded-xl shadow-lg border border-gray-100' : ''}`}>
            <h2 className="text-xl font-serif font-bold text-[#2E4347] mb-4">Resumen de tu Experiencia</h2>

            <div className="space-y-4">
                {items.map((item) => (
                    <OrderItem key={item.tour.id} item={item} />
                ))}
            </div>

            <div className="mt-6 pt-6 border-t space-y-4 border-gray-300">
                {items.some((item) => item.tour.highlights.some((h) => h.toLowerCase().includes('premium'))) && <PremiumNotice />}
                <SummaryTotals />
            </div>

            <ServiceGuarantees />
        </div>
    );
};
