export type Offer = {
  id: string;
  images: string;
  isPremium: boolean;
  title: string;
  isFavorite: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
};
