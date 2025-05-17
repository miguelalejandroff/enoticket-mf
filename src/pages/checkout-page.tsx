import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useCartStore } from '../store/cart-store';
import { ContactForm } from '../components/checkout/contact-form';
import { OrderSummary } from '../components/checkout/order-summary';
import { MobileOrderToggle } from '../components/checkout/mobile-order-toggle';
import { StepsIndicator } from '../components/checkout/steps-indicator';
import { EmptyCartMessage } from '../components/checkout/empty-cart-message';

const CheckoutPage = () => {
    const { items } = useCartStore();
    const [showOrderSummary, setShowOrderSummary] = useState(false);
    const [step, setStep] = useState(1);

    if (items.length === 0) {
        return <EmptyCartMessage />;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-[#2E4347] mb-2">Finalizar Reserva</h1>
                    <StepsIndicator step={step} />
                </div>
                <button onClick={() => window.history.back()} className="flex items-center text-gray-500 hover:text-[#7D0633] transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Volver
                </button>
            </div>

            {/* Mobile Order Summary Toggle */}
            <MobileOrderToggle show={showOrderSummary} toggle={() => setShowOrderSummary(!showOrderSummary)} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="hidden lg:block">
                    <OrderSummary isMobile={false} />
                </div>

                <ContactForm />
            </div>
        </div>
    );
};

export default CheckoutPage;
