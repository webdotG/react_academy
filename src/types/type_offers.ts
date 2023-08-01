type HostOffer = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

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
  host: HostOffer;
};

export type typeOffersList = {
  id: string;
  image: string;
  price: number;
  isFavorite: boolean;
  rating: number;
  title: string;
  type: string;
}
