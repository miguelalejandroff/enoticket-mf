import Footer from './footer/footer';
import Navbar from './navbar/navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {/* Navbar en la parte superior */}
            <Navbar />
            <div>
                {/* Contenido de cada página */}
                <div>{children}</div>
            </div>
            {/* Footer en la parte inferior */}
            <Footer />
        </div>
    );
};

export default Layout;
