import { Crown } from "lucide-react";

export const PremiumBadge = () => (
    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#D4AF37] to-[#B39020] text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 shadow-xl border border-white/20">
        <Crown className="w-3 h-3" />
        <span className="font-semibold tracking-wide">Premium</span>
    </div>
);
