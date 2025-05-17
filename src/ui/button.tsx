import type { LucideIcon } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';
import React from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: LucideIcon;
    iconPosition?: 'left' | 'right';
    fullWidth?: boolean;
    focusRingColor?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    icon: Icon,
    iconPosition = 'left',
    fullWidth = false,
    children,
    className = '',
    focusRingColor = '',
    ...props
}) => {
    const baseStyles =
        'inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantStyles = {
        primary: 'bg-[#7D0633] hover:bg-[#5d0426] text-white focus:ring-[#7D0633]',
        secondary: 'bg-[#2E4347] hover:bg-[#243538] text-white focus:ring-[#2E4347]',
        outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 text-[#2E4347] focus:ring-[#7D0633]',
        ghost: 'bg-transparent hover:bg-gray-100 text-[#2E4347] focus:ring-[#7D0633]',
    };

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-5 py-2.5 text-lg',
    };

    const widthStyle = fullWidth ? 'w-full' : '';

    const focusRingRegex = /focus:ring-\[[^\]]+\]/;
    const focusRingMatch = focusRingRegex.exec(variantStyles[variant]);
    const focusRing = focusRingColor ? `focus:ring-[${focusRingColor}]` : focusRingMatch?.[0] ?? '';

    return (
        <button className={`${baseStyles} ${variantStyles[variant]} ${focusRing} ${sizeStyles[size]} ${widthStyle} ${className}`} {...props}>
            {Icon && iconPosition === 'left' && <Icon className={`h-5 w-5 ${children ? 'mr-2' : ''}`} />}
            {children}
            {Icon && iconPosition === 'right' && <Icon className={`h-5 w-5 ${children ? 'ml-2' : ''}`} />}
        </button>
    );
};

export default Button;
