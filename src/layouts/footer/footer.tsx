import { Wine as WineBottle, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#2E4347] text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center">
                            <WineBottle className="h-8 w-8 text-[#D4AF37]" />
                            <span className="ml-2 text-xl font-serif font-bold">EnoTicket</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-300">Descubre las mejores experiencias enoturísticas de Chile.</p>
                        <div className="mt-4 flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">Tours</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link to="/tours/valle-casablanca" className="text-gray-300 hover:text-white text-sm transition-colors">
                                    Valle de Casablanca
                                </Link>
                            </li>
                            <li>
                                <Link to="/tours/valle-maipo" className="text-gray-300 hover:text-white text-sm transition-colors">
                                    Valle del Maipo
                                </Link>
                            </li>
                            <li>
                                <Link to="/tours/valle-colchagua" className="text-gray-300 hover:text-white text-sm transition-colors">
                                    Valle de Colchagua
                                </Link>
                            </li>
                            <li>
                                <Link to="/tours/valle-curico" className="text-gray-300 hover:text-white text-sm transition-colors">
                                    Valle de Curicó
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">Compañía</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                                    Sobre Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-gray-300 hover:text-white text-sm transition-colors">
                                    Preguntas Frecuentes
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-gray-300 hover:text-white text-sm transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                                    Política de Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                                    Términos y Condiciones
                                </Link>
                            </li>
                            <li>
                                <Link to="/cookies" className="text-gray-300 hover:text-white text-sm transition-colors">
                                    Política de Cookies
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-600">
                    <p className="text-sm text-gray-300 text-center">&copy; {new Date().getFullYear()} EnoTicket. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
