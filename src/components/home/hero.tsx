import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { format, addDays, startOfToday } from 'date-fns';
import { es } from 'date-fns/locale';
import type { RangeKeyDict, Range } from 'react-date-range';
import { DateRange } from 'react-date-range';
import { useSearchStore } from '../../store/search-store';
import { regions } from '../../data/tours';

const Hero = () => {
    const { filters, setFilters, search } = useSearchStore();
    const [showCalendar, setShowCalendar] = useState(false);
    const calendarRef = useRef<HTMLDivElement>(null);
    const today = startOfToday();
    const maxDate = addDays(today, 15);
    const [dateRange, setDateRange] = useState<Range[]>([
        {
            startDate: today,
            endDate: maxDate,
            key: 'selection',
        },
    ]);

    useEffect(() => {
        setFilters({
            dateRange: {
                start: format(today, 'yyyy-MM-dd'),
                end: format(maxDate, 'yyyy-MM-dd'),
            },
        });
        search();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
                setShowCalendar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleDateChange = (ranges: RangeKeyDict) => {
        const { startDate, endDate } = ranges.selection;
        setDateRange([ranges.selection]);

        if (startDate && endDate) {
            setFilters({
                dateRange: {
                    start: format(startDate, 'yyyy-MM-dd'),
                    end: format(endDate, 'yyyy-MM-dd'),
                },
            });
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        search();

        setShowCalendar(false);
        window.scrollTo({ top: document.getElementById('featured-tours')?.offsetTop, behavior: 'smooth' });
    };

    return (
        <div
            className="relative h-[80vh] min-h-[600px] bg-cover bg-center"
            style={{
                backgroundImage: 'url(https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg)',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
                    Descubre el{' '}
                    <span className="text-[#D4AF37] relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-[#D4AF37]/30">
                        Alma del Vino Chileno
                    </span>
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mb-12 leading-relaxed">
                    Experiencias enoturísticas únicas en los mejores viñedos de Chile. Reserva tu aventura vinícola ahora.
                </p>

                {/* Search Box */}
                <form
                    onSubmit={handleSearch}
                    className="w-full max-w-4xl bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl transition-all duration-300 transform hover:bg-white overflow-visible border border-white/20"
                >
                    <div className="md:flex">
                        <div className="w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-200">
                            <div className="flex items-center">
                                <MapPin className="h-5 w-5 text-[#7D0633]" />
                                <div className="ml-3 w-full group">
                                    <label
                                        htmlFor="location"
                                        className="block text-xs font-medium text-gray-500 group-hover:text-[#7D0633] transition-colors"
                                    >
                                        Región
                                    </label>
                                    <select
                                        id="location"
                                        value={filters.region}
                                        onChange={(e) => setFilters({ region: e.target.value })}
                                        className="block w-full border-0 p-0 text-gray-900 focus:ring-0 sm:text-sm bg-transparent cursor-pointer hover:text-[#7D0633] transition-colors"
                                    >
                                        <option value="">Todas las regiones</option>
                                        {regions.map((region) => (
                                            <option key={region.id} value={region.id}>
                                                {region.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-200">
                            <div className="flex items-center">
                                <Calendar className="h-5 w-5 text-[#7D0633]" />
                                <div className="ml-3 w-full relative group">
                                    <label
                                        htmlFor="calendar-toggle"
                                        className="block text-xs font-medium text-gray-500 group-hover:text-[#7D0633] transition-colors"
                                    >
                                        Fechas
                                    </label>
                                    <button
                                        id="calendar-toggle"
                                        type="button"
                                        onClick={() => setShowCalendar(!showCalendar)}
                                        className="w-full text-left text-sm text-gray-900 focus:outline-none relative hover:text-[#7D0633] transition-colors"
                                    >
                                        {dateRange[0].startDate ? (
                                            <span>
                                                {format(dateRange[0].startDate, 'dd MMM', { locale: es })}
                                                {dateRange[0].endDate && ` - ${format(dateRange[0].endDate, 'dd MMM', { locale: es })}`}
                                            </span>
                                        ) : (
                                            'Seleccionar fechas'
                                        )}
                                    </button>
                                    {showCalendar && (
                                        <div ref={calendarRef} className="absolute left-0 mt-2 z-[100]" style={{ transform: 'none' }}>
                                            <DateRange
                                                ranges={dateRange}
                                                onChange={handleDateChange}
                                                months={2}
                                                direction="horizontal"
                                                minDate={today}
                                                locale={es}
                                                rangeColors={['#7D0633']}
                                                showMonthAndYearPickers={true}
                                                showDateDisplay={false}
                                                moveRangeOnFirstSelection={false}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-200">
                            <div className="flex items-center">
                                <Users className="h-5 w-5 text-[#7D0633]" />
                                <div className="ml-3 w-full group">
                                    <label
                                        htmlFor="guests"
                                        className="block text-xs font-medium text-gray-500 group-hover:text-[#7D0633] transition-colors"
                                    >
                                        Participantes
                                    </label>
                                    <select
                                        id="guests"
                                        value={filters.guests}
                                        onChange={(e) => setFilters({ guests: parseInt(e.target.value) })}
                                        className="block w-full border-0 p-0 text-gray-900 focus:ring-0 sm:text-sm bg-transparent cursor-pointer hover:text-[#7D0633] transition-colors"
                                    >
                                        <option>1 persona</option>
                                        <option>2 personas</option>
                                        <option>3 personas</option>
                                        <option>4 personas</option>
                                        <option>5+ personas</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full md:w-1/4 p-4 bg-[#7D0633] hover:bg-[#5d0426] transition-all duration-300 flex items-center justify-center cursor-pointer group hover:shadow-lg rounded-r-xl"
                        >
                            <Search className="h-5 w-5 text-white" />
                            <span className="ml-2 text-white font-medium group-hover:tracking-wide transition-all">Buscar Tours</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Hero;
