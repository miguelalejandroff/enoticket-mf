import { DollarSign } from 'lucide-react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import { cloneElement, useEffect, useRef, useState, type ReactElement } from 'react';

interface PriceFilterProps {
    priceRange: [number, number];
    onChange: (range: [number, number]) => void;
}

export const PriceFilter = ({ priceRange, onChange }: PriceFilterProps) => {
    const [internalRange, setInternalRange] = useState<[number, number]>(priceRange);
    const tooltipRefs = useRef<Array<{ forceAlign?: () => void } | null>>([]);

    useEffect(() => {
        tooltipRefs.current.forEach((ref) => {
            ref?.forceAlign?.();
        });
    }, [internalRange]);

    const handleRender = (
        node: ReactElement,
        props: {
            value: number;
            dragging: boolean;
            index: number;
        }
    ) => {
        return (
            <Tooltip
                overlay={`$${props.value.toLocaleString('es-CL')}`}
                visible={props.dragging}
                placement="top"
                destroyTooltipOnHide={false}
                ref={(instance: { forceAlign?: () => void } | null) => {
                    tooltipRefs.current[props.index] = instance;
                }}
                overlayInnerStyle={{ fontSize: '0.75rem' }}
            >
                {cloneElement(node)}
            </Tooltip>
        );
    };

    return (
        <div className="mb-6">
            <h3 className="text-sm font-medium text-[#2E4347] mb-3 flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-[#7D0633]" />
                Precio oferta
            </h3>
            <div className="px-2 py-4 bg-white ">
                <Slider
                    range
                    min={35000}
                    max={100000}
                    step={1000}
                    value={internalRange}
                    handleRender={handleRender}
                    onChange={(value) => {
                        if (Array.isArray(value)) {
                            setInternalRange([value[0], value[1]]);
                        }
                    }}
                    onChangeComplete={(value) => {
                        if (Array.isArray(value) && value.length === 2) {
                            onChange([value[0], value[1]]);
                        }
                    }}
                    railStyle={{ backgroundColor: '#E5E7EB' }}
                    trackStyle={[{ backgroundColor: '#7D0633' }]}
                    handleStyle={[
                        {
                            backgroundColor: '#7D0633',
                            borderColor: '#7D0633',
                            opacity: 1,
                            boxShadow: '0 0 0 5px rgba(125, 6, 51, 0.1)',
                        },
                        {
                            backgroundColor: '#7D0633',
                            borderColor: '#7D0633',
                            opacity: 1,
                            boxShadow: '0 0 0 5px rgba(125, 6, 51, 0.1)',
                        },
                    ]}
                />
                <div className="flex justify-between mt-4">
                    <span className="text-sm font-medium text-[#7D0633]">${priceRange[0].toLocaleString('es-CL')}</span>
                    <span className="text-sm font-medium text-[#7D0633]">${priceRange[1].toLocaleString('es-CL')}</span>
                </div>
            </div>
        </div>
    );
};
