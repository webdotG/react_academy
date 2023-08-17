import { createAction } from '@reduxjs/toolkit';
import { typeCityOffer, typeOffersList } from '../types/type_offers';

const changeCity = createAction('offers/changeCity', (city: typeCityOffer) => ({
  payload: city
}));

const offersCityList = createAction('offers/offersCityList', (offers: typeOffersList[]) => ({
  payload: offers
}));


export { changeCity, offersCityList };
