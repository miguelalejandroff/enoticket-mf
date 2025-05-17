import { useState } from 'react';
import { Menu, X, Wine as WineBottle, Search, Globe, User, ShoppingCart, Heart } from 'lucide-react';
import { useCartStore } from '../../store/cart-store';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const cartItems = useCartStore((state) => state.items);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm z-50 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center group">
                            <div className="relative">
                                <WineBottle className="h-8 w-8 text-[#7D0633] transform transition-transform group-hover:rotate-12" />
                                <div className="absolute inset-0 bg-[#7D0633]/10 rounded-full scale-110 animate-pulse-slow"></div>
                            </div>
                            <span className="ml-2 text-xl font-serif font-bold text-[#2E4347]">EnoTicket</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/tours" className="relative group px-3 py-2 text-sm font-medium">
                            <span className="text-[#2E4347] group-hover:text-[#7D0633] transition-colors">Tours</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7D0633] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </Link>
                        <Link to="/regions" className="relative group px-3 py-2 text-sm font-medium">
                            <span className="text-[#2E4347] group-hover:text-[#7D0633] transition-colors">Regiones</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7D0633] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </Link>
                        <Link to="/experiences" className="relative group px-3 py-2 text-sm font-medium">
                            <span className="text-[#2E4347] group-hover:text-[#7D0633] transition-colors">Experiencias</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7D0633] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </Link>
                        <Link to="/about" className="relative group px-3 py-2 text-sm font-medium">
                            <span className="text-[#2E4347] group-hover:text-[#7D0633] transition-colors">Nosotros</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7D0633] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </Link>
                    </nav>

                    {/* Right side icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="relative p-2 rounded-full hover:bg-gray-100 transition-all group"
                        >
                            <Search className="h-5 w-5" />
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Buscar tours
                            </span>
                        </button>
                        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-all group">
                            <Globe className="h-5 w-5" />
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Cambiar idioma
                            </span>
                        </button>
                        <Link to="/favorites" className="relative p-2 rounded-full hover:bg-gray-100 transition-all group">
                            <Heart className="h-5 w-5" />
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Favoritos
                            </span>
                        </Link>
                        <Link to="/checkout" className="relative p-2 rounded-full hover:bg-gray-100 transition-all group">
                            <ShoppingCart className="h-5 w-5" />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#7D0633] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Carrito
                            </span>
                        </Link>
                        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-all group">
                            <User className="h-5 w-5" />
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Mi cuenta
                            </span>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#2E4347] hover:text-[#7D0633] focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Search overlay */}
            {isSearchOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-4 animate-fade-in">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Buscar tours, regiones o experiencias..."
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#7D0633] focus:ring-2 focus:ring-[#7D0633]/20 transition-colors"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile menu, show/hide based on menu state */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
                    <Link
                        to="/tours"
                        className="block px-3 py-2 rounded-md text-base font-medium text-[#2E4347] hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Tours
                    </Link>
                    <Link
                        to="/regions"
                        className="block px-3 py-2 rounded-md text-base font-medium text-[#2E4347] hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Regiones
                    </Link>
                    <Link
                        to="/experiences"
                        className="block px-3 py-2 rounded-md text-base font-medium text-[#2E4347] hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Experiencias
                    </Link>
                    <Link
                        to="/about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-[#2E4347] hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Nosotros
                    </Link>

                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center justify-between px-3">
                            <div className="flex items-center space-x-4">
                                <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 rounded-full hover:bg-gray-100 transition-all">
                                    <Search className="h-5 w-5" />
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 transition-all">
                                    <Globe className="h-5 w-5" />
                                </button>
                                <Link to="/favorites" className="p-2 rounded-full hover:bg-gray-100 transition-all">
                                    <Heart className="h-5 w-5" />
                                </Link>
                                <Link to="/checkout" className="relative p-2 rounded-full hover:bg-gray-100 transition-all">
                                    <ShoppingCart className="h-5 w-5" />
                                    {cartItems.length > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-[#7D0633] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                                            {cartItems.length}
                                        </span>
                                    )}
                                </Link>
                                <button className="p-2 rounded-full hover:bg-gray-100 transition-all">
                                    <User className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
