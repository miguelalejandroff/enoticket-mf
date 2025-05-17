export interface WineTour {
    id: string;
    title: string;
    location: string;
    region: string;
    price: number;
    currency: string;
    duration: string;
    rating: number;
    reviewCount: number;
    imageUrl: string;
    valleyId: string;
    description: string;
    availableDates: string[];
    highlights: string[];
    includes: string[];
    languages: string[];
}

export interface Region {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    tourCount: number;
}

export interface FilterOptions {
    region: string;
    priceRange: [number, number];
    duration: string;
    services: string[];
    features: string[];
    experienceType?: string;
    dateRange: {
        start: string;
        end: string;
    };
    guests?: number;
}

export interface Review {
    id: number;
    tourId: string;
    userName: string;
    userImage: string;
    rating: number;
    date: string;
    comment: string;
    language: string;
    tourDate: string;
    highlights: string[];
}
