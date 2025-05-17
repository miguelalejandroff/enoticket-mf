import type { Review, WineTour } from '../../types';
import { TourDescriptionTab } from './tabs/tour-description-tab';
import { TourIncludesTab } from './tabs/tour-includes-tab';
import { TourDetailsTab } from './tabs/tour-details-tab';
import { TourReviewsTab } from './tabs/tour-reviews-tab';

interface TourTabsProps {
    tour: WineTour;
    activeTab: 'description' | 'includes' | 'details' | 'reviews';
    setActiveTab: (tab: TourTabsProps['activeTab']) => void;
    isPremium: boolean;
    reviews: Review[];
}

export const TourTabs = ({ tour, activeTab, setActiveTab, isPremium, reviews }: TourTabsProps) => {
    return (
        <div className="lg:w-2/3 lg:pr-8">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
                <div className="flex overflow-x-auto">
                    {[
                        { id: 'description', label: 'Descripción' },
                        { id: 'includes', label: 'Qué incluye' },
                        { id: 'details', label: 'Detalles' },
                        { id: 'reviews', label: `Reseñas (${tour.reviewCount})` },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                                activeTab === tab.id ? 'border-b-2 border-[#7D0633] text-[#7D0633]' : 'text-gray-500 hover:text-gray-700'
                            }`}
                            onClick={() => setActiveTab(tab.id as typeof activeTab)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}

            <div className="mb-8">
                {activeTab === 'description' && <TourDescriptionTab tour={tour} />}
                {activeTab === 'includes' && <TourIncludesTab tour={tour} isPremium={isPremium} />}
                {activeTab === 'details' && <TourDetailsTab tour={tour} />}
                {activeTab === 'reviews' && <TourReviewsTab tour={tour} reviews={reviews} />}
            </div>
        </div>
    );
};
