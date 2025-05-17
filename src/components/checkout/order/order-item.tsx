// components/checkout/OrderItem.tsx
import { Calendar, Trash2, Users } from 'lucide-react';
import { useCartStore } from '../../../store/cart-store';
import { PremiumBadge } from './premium-badge';
import { ItemDetail } from './item-detail';
import { QuantitySelector } from './quantity-selector';

interface OrderItemProps {
    item: {
        tour: {
            id: string;
            title: string;
            imageUrl: string;
            price: number;
            highlights: string[];
        };
        quantity: number;
        date: string;
    };
}

export const OrderItem = ({ item }: OrderItemProps) => {
    const { updateQuantity, removeFromCart } = useCartStore();
    const isPremium = item.tour.highlights.some((h) => h.toLowerCase().includes('premium'));

    const formattedDate = new Date(item.date).toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    });
    return (
        <div
            className={`relative bg-white rounded-xl p-5 transition-all duration-300 transform hover:-translate-y-1 ${
                isPremium
                    ? 'border-2 border-[#D4AF37]/30 shadow-[0_4px_20px_-4px_rgba(212,175,55,0.2)] hover:shadow-[0_8px_30px_-4px_rgba(212,175,55,0.3)]'
                    : 'border-2 border-[#7D0633]/30 shadow-[0_4px_20px_-4px_rgba(125,6,51,0.2)] hover:shadow-[0_8px_30px_-4px_rgba(125,6,51,0.3)]'
            }`}
        >
            {isPremium && <PremiumBadge />}

            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Imagen */}
                <img src={item.tour.imageUrl} alt={item.tour.title} className="w-full sm:w-24 h-40 sm:h-24 rounded-xl object-cover shadow-md" />

                {/* Contenido */}
                <div className="flex-1 flex flex-col gap-3">
                    <h3 className="font-medium text-[#2E4347] leading-snug">{item.tour.title}</h3>

                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                        <ItemDetail icon={<Calendar className="w-4 h-4" />} label={formattedDate} />
                        <ItemDetail icon={<Users className="w-4 h-4" />} label={`${item.quantity} ${item.quantity === 1 ? 'persona' : 'personas'}`} />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <QuantitySelector
                            quantity={item.quantity}
                            onDecrease={() => updateQuantity(item.tour.id, Math.max(1, item.quantity - 1))}
                            onIncrease={() => updateQuantity(item.tour.id, item.quantity + 1)}
                        />

                        <div className="flex items-center gap-4 ml-auto">
                            <span className="font-medium text-[#2E4347] text-sm">
                                <span className="text-gray-500">Subtotal:</span>{' '}
                                <span className="text-lg">${(item.tour.price * item.quantity).toLocaleString('es-CL')}</span>
                            </span>
                            <button
                                onClick={() => removeFromCart(item.tour.id)}
                                className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-all duration-300 group"
                            >
                                <Trash2 className="h-4 w-4 transform group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
