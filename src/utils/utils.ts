import { typeCityOffer, typeOffersList } from '../types/type_offers';
import { typeSortOffer } from '../types/sorting';
import { SortOffersType } from '../const';

function getOffersByCity (city: string | undefined, offers: typeOffersList[]): typeOffersList[]{
  return offers.filter((offer) => offer.city.name === city);
}

function getCity(selectedCity: string | undefined, cities: typeCityOffer[]): typeCityOffer| undefined{
  return cities.find((item) => item.name === selectedCity);
}

function sortOffersByType (offers: typeOffersList[], type: typeSortOffer): typeOffersList[] {
  switch (type) {
    case SortOffersType.PriceToHigh:
      return offers.sort((a, b) => a.price - b.price);
    case SortOffersType.PriceToLow:
      return offers.sort((a, b) => b.price - a.price);
    case SortOffersType.TopRated:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}

export { getOffersByCity, getCity, sortOffersByType };
