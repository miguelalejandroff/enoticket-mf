import Hero from '../components/home/hero';
import Newsletter from '../components/home/newsletter';
import WhyChooseUs from '../components/home/why-choose-us';
import RegionsSection from '../components/regions/regions-section';
import Testimonials from '../components/testimonials/testimonials';
import FeaturedTours from '../components/tours/feature-tours';

const HomePage = () => {
    return (
        <>
            <Hero />
            <FeaturedTours />
            <RegionsSection />
            <WhyChooseUs />
            <Testimonials />
            <Newsletter />
        </>
    );
};

export default HomePage;
