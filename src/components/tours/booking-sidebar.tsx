import { Calendar, Users, Shield, Clock, Crown } from 'lucide-react';
import type { WineTour } from '../../types';
import Button from '../../ui/button';
import { Link } from 'react-router-dom';

interface BookingSidebarProps {
    tour: WineTour;
    isPremium: boolean;
    selectedDate: string;
    setSelectedDate: (date: string) => void;
    ticketCount: number;
    setTicketCount: (count: number) => void;
    onBooking: () => void;
}

export const BookingSidebar = ({ tour, isPremium, selectedDate, setSelectedDate, ticketCount, setTicketCount, onBooking }: BookingSidebarProps) => {
    const totalPrice = tour.price * ticketCount;

    const formatPrice = (price: number, currency: string) => (currency === 'CLP' ? `$${price.toLocaleString('es-CL')}` : `${currency} ${price}`);

    return (
        <div className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="bg-white rounded-xl shadow-xl p-6 sticky top-24 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-3xl font-serif font-bold text-[#2E4347] space-x-2">
                        {isPremium && <Crown className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />}

                        <span>{formatPrice(tour.price, tour.currency)}</span>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">por persona</span>
                </div>

                <div className="bg-[#F5F5DC]/30 rounded-lg p-4 mb-6 border border-[#D4AF37]/20">
                    <div className="flex items-center text-sm text-[#2E4347]">
                        <Users className="h-4 w-4 text-[#7D0633] mr-2" />
                        <span>Solo quedan {Math.max(2, ticketCount + 2)} cupos disponibles para esta fecha</span>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-[#2E4347] mb-2 flex items-center">
                        <Calendar className="h-4 w-4 text-[#7D0633] mr-2" />
                        Fecha
                    </label>
                    <select
                        id="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-[#7D0633] focus:border-[#7D0633] py-3 bg-white hover:border-[#7D0633] transition-colors cursor-pointer"
                    >
                        {tour.availableDates.map((date) => (
                            <option key={date} value={date}>
                                {new Date(date).toLocaleDateString('es-ES', {
                                    weekday: 'long',
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="tickets" className="block text-sm font-medium text-[#2E4347] mb-2 flex items-center">
                        <Users className="h-4 w-4 text-[#7D0633] mr-2" />
                        Número de personas
                    </label>
                    <div className="flex items-center bg-white rounded-lg border border-gray-300 hover:border-[#7D0633] transition-colors w-fit">
                        <button
                            onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                            className="px-4 py-3 text-[#7D0633] hover:bg-gray-50 rounded-l-lg transition-colors text-lg font-medium"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            id="tickets"
                            min="1"
                            value={ticketCount}
                            onChange={(e) => setTicketCount(Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-20 text-center border-x border-gray-300 py-3 text-[#2E4347] font-medium focus:outline-none no-spinner"
                        />
                        <button
                            onClick={() => setTicketCount(ticketCount + 1)}
                            className="px-4 py-3 text-[#7D0633] hover:bg-gray-50 rounded-r-lg transition-colors text-lg font-medium"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">
                            {formatPrice(tour.price, tour.currency)} x {ticketCount}
                        </span>
                        <span>{formatPrice(tour.price * ticketCount, tour.currency)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-xl text-[#2E4347] mt-3">
                        <span>Total</span>
                        <span>{formatPrice(totalPrice, tour.currency)}</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <Link to={`/checkout`} className="block">
                        <Button
                            variant="primary"
                            size="lg"
                            fullWidth
                            onClick={onBooking}
                            focusRingColor={isPremium ? '#D4AF37' : ''}
                            className={`py-4 text-base relative overflow-hidden group ${
                                isPremium ? 'bg-gradient-to-r from-[#D4AF37] to-[#B39020] hover:from-[#B39020] hover:to-[#D4AF37]' : ''
                            }`}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                            {isPremium ? 'Reservar Experiencia Premium' : 'Reservar Ahora'}
                        </Button>
                    </Link>
                </div>

                <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-center text-sm text-gray-500">
                        <Shield className="h-4 w-4 mr-2 text-[#7D0633]" />
                        <span>Pago seguro garantizado</span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2 text-[#7D0633]" />
                        <span>Cancelación gratuita hasta 48h antes</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
