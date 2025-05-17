export const QuantitySelector = ({ quantity, onDecrease, onIncrease }: { quantity: number; onDecrease: () => void; onIncrease: () => void }) => (
    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
        <span className="text-xs text-gray-500 mr-1">Cantidad:</span>
        <button
            type="button"
            onClick={onDecrease}
            className="text-[#7D0633] hover:text-[#5d0426] transition-colors w-6 h-6 flex items-center justify-center rounded-full hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#7D0633]/20"
        >
            -
        </button>
        <span className="font-medium text-[#2E4347] min-w-[1.5rem] text-center">{quantity}</span>
        <button
            type="button"
            onClick={onIncrease}
            className="text-[#7D0633] hover:text-[#5d0426] transition-colors w-6 h-6 flex items-center justify-center rounded-full hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#7D0633]/20"
        >
            +
        </button>
    </div>
);
