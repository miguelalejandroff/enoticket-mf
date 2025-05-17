import { create } from 'zustand';
import type { WineTour } from '../types';

interface CartItem {
    tour: WineTour;
    quantity: number;
    date: string;
}

interface CartStore {
    items: CartItem[];
    addToCart: (tour: WineTour, quantity: number, date: string) => void;
    removeFromCart: (tourId: string) => void;
    updateQuantity: (tourId: string, quantity: number) => void;
    clearCart: () => void;
    total: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],
    addToCart: (tour, quantity, date) => {
        set((state) => {
            const existingItem = state.items.find((item) => item.tour.id === tour.id);
            if (existingItem) {
                return {
                    items: state.items.map((item) => (item.tour.id === tour.id ? { ...item, quantity: item.quantity + quantity } : item)),
                };
            }
            return { items: [...state.items, { tour, quantity, date }] };
        });
    },
    removeFromCart: (tourId) => {
        set((state) => ({
            items: state.items.filter((item) => item.tour.id !== tourId),
        }));
    },
    updateQuantity: (tourId, quantity) => {
        set((state) => ({
            items: state.items.map((item) => (item.tour.id === tourId ? { ...item, quantity } : item)),
        }));
    },
    clearCart: () => set({ items: [] }),
    total: () => {
        const items = get().items;
        return items.reduce((sum, item) => sum + item.tour.price * item.quantity, 0);
    },
}));
