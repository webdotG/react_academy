export type typeOffer = {
  id: string;
  images: string[];
  isPremium: boolean;
  title: string;
  type: string;
  isFavorite: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
};

export type typeOffersList = {
  id: number;
  image: string;
  price: number;
  isFavorite: boolean;
  rating: number;
  title: string;
  type: string;
}
