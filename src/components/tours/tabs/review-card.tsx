import { Star } from 'lucide-react';
import type { Review } from '../../../types';

interface ReviewCardProps {
    review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => (
    <div className="mb-8 border-b border-gray-200 pb-6 last:border-b-0">
        <div className="flex items-start">
            <img src={review.userImage} alt={review.userName} className="w-12 h-12 rounded-full object-cover mr-4" />
            <div className="flex-1">
                <div className="flex items-center mb-2">
                    <h4 className="font-medium text-[#2E4347] mr-2">{review.userName}</h4>
                    <div className="flex text-[#D4AF37]">
                        {[...Array(5)].map((_, i) => (
                            <Star key={_} className={`h-4 w-4 ${i < review.rating ? 'fill-current' : ''}`} />
                        ))}
                    </div>
                </div>
                <p className="text-sm text-gray-500 mb-2">
                    Visitó el{' '}
                    {new Date(review.tourDate).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>
                <p className="text-gray-700 mb-3">{review.comment}</p>
                <div className="flex flex-wrap gap-2">
                    {review.highlights.map((highlight) => (
                        <span key={highlight} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                            {highlight}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
