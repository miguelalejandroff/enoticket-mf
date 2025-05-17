import { Wine, ArrowLeft } from 'lucide-react';
import Button from '../../ui/button';
import { Link } from 'react-router-dom';

export const EmptyCartMessage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30">
            <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <Wine className="w-12 h-12 text-gray-400" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-[#2E4347] mb-4">Tu carrito está vacío</h2>
                <p className="text-gray-600 mb-8">No hay tours seleccionados en tu carrito.</p>
                <div className="flex items-center justify-center gap-4">
                    <Button variant="outline" size="lg" className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Volver
                        </Link>
                    </Button>
                    <Button variant="primary" size="lg" className="flex items-center">
                        <Link to="/tours" className="flex items-center">
                            <Wine className="w-4 h-4 mr-2" />
                            Explorar Tours
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
