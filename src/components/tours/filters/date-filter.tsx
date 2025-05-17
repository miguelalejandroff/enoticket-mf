import { useState } from 'react';
import { DateRange, type Range, type RangeKeyDict } from 'react-date-range';
import { format, startOfToday, addDays, isValid, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar } from 'lucide-react';

interface DateFilterProps {
    selectedRange: { start: string; end: string };
    onChange: (range: { start: string; end: string }) => void;
}

export const DateFilter = ({ selectedRange, onChange }: DateFilterProps) => {
    const today = startOfToday();

    const parsedStart = isValid(parseISO(selectedRange.start)) ? parseISO(selectedRange.start) : today;
    const parsedEnd = isValid(parseISO(selectedRange.end)) ? parseISO(selectedRange.end) : addDays(today, 15);

    const [showPicker, setShowPicker] = useState(false);
    const [dateRange, setDateRange] = useState<Range[]>([
        {
            startDate: parsedStart,
            endDate: parsedEnd,
            key: 'selection',
        },
    ]);

    const handleDateRangeChange = (ranges: RangeKeyDict) => {
        const { startDate, endDate } = ranges.selection;
        setDateRange([ranges.selection]);

        if (startDate && endDate) {
            onChange({
                start: format(startDate, 'yyyy-MM-dd'),
                end: format(endDate, 'yyyy-MM-dd'),
            });
        }
    };

    return (
        <div className="mb-6">
            <h3 className="text-sm font-medium text-[#2E4347] mb-3 flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-[#7D0633]" />
                Fecha
            </h3>

            <div className="space-y-4 relative">
                <button onClick={() => setShowPicker(!showPicker)} className="w-full text-left p-2 border border-gray-300 rounded-md text-sm">
                    {selectedRange.start && selectedRange.end
                        ? `${format(parsedStart, 'dd MMM', { locale: es })} - ${format(parsedEnd, 'dd MMM', { locale: es })}`
                        : 'Seleccionar fechas'}
                </button>

                {showPicker && (
                    <DateRange
                        ranges={dateRange}
                        onChange={handleDateRangeChange}
                        months={2}
                        direction="horizontal"
                        locale={es}
                        minDate={today}
                        rangeColors={['#7D0633']}
                        showMonthAndYearPickers
                        showDateDisplay={false}
                        moveRangeOnFirstSelection={false}
                        className="absolute z-50 left-0"
                    />
                )}
            </div>
        </div>
    );
};
