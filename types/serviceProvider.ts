export interface IServiceProvider {
    _id: string;
    name: string;
    slug: string;
    phone: string;
    website: string;
    social_media: {
      facebook?: string;
      twitter?: string;
      youtube?: string;
      instagram?: string;
    };
    address: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    latitude: number;
    longitude: number;
    nearest_major_citystate: string;
    geolocation: {
      type: string;
      coordinates: [number, number];
    };
    categories: string[];
    services: string[];
    highlights: string[];
    lowlights: {
      lawn: string[];
    };
    certifications: Record<string, any>; 
    awards: Record<string, any>; 
    third_party_ratings: {
      google_places: {
        review_score: number;
        review_count: number;
      };
    };
    rating: {
      th: number;
      toh: number;
    };
    google_places_id: {
      data_id: string;
      data_cid: string;
    };
    is_hidden: boolean;
    status: {
      is_hidden: boolean;
      reason: string;
    };
    last_updated: string;
    review_score: number;
    review_count: number;
    distance: number;
  }