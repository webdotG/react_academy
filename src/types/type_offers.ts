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
  host: typeHostOffer;
  city: typeCityOffer;
  location: typeOfferLocation;
};

export type typeOffersList = {
  id: string;
  image: string;
  price: number;
  isFavorite: boolean;
  rating: number;
  title: string;
  type: string;
  city: typeCityOffer;
  location: typeOfferLocation;
}
