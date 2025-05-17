import type { Review, WineTour } from '../../../types';
import Button from '../../../ui/button';
import { ReviewCard } from './review-card';

interface TourReviewsTabProps {
    tour: WineTour;
    reviews: Review[];
}

export const TourReviewsTab = ({ tour, reviews }: TourReviewsTabProps) => {
    const tourReviews = reviews.filter((review) => review.tourId === tour.id);

    return (
        <div>
            {tourReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
            ))}

            <Button variant="outline" size="md" onClick={() => alert('Ver más reseñas')}>
                Ver todas las reseñas
            </Button>
        </div>
    );
};
