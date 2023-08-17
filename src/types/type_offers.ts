export type typeCityOffer = {
  name: string;
  location: typeOfferLocation;
};

export type typeOfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type typeHostOffer = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export type typeOffer = {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  images: string[];
  city: typeCityOffer;
  goods: string[];
  host: typeHostOffer;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  location: typeOfferLocation;
};

export type typeOffersList = {
  id: string;
  image: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  title: string;
  type: string;
  city: typeCityOffer;
  location: typeOfferLocation;
}
