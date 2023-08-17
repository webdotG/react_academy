import { typeCityOffer, typeOffersList } from '../types/type_offers';

function getOffersByCity (city: string | undefined, offers: typeOffersList[]): typeOffersList[]{
  return offers.filter((offer) => offer.city.name === city);
}

function getCity(selectedCity: string | undefined, cities: typeCityOffer[]): typeCityOffer| undefined{
  return cities.find((item) => item.name === selectedCity);
}


export { getOffersByCity, getCity };
