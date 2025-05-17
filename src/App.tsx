import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/layout';
import HomePage from './pages/home-page';
import RegionsPage from './pages/regions-page';
import TourDetailPage from './pages/tour-detail-page';
import ToursPage from './pages/tours-page';
import CheckoutPage from './pages/checkout-page';
import ExperiencesPage from './pages/experiences-page';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/regions" element={<RegionsPage />} />
                    <Route path="/tours" element={<ToursPage />} />
                    <Route path="/tours/:id" element={<TourDetailPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/experiences" element={<ExperiencesPage />} />
                    {/* Define otras rutas según necesites */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
