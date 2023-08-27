import { createAction } from '@reduxjs/toolkit';
import { typeCityOffer, typeOffersList } from '../types/type_offers';
import { typeReviews } from '../types/type_reviews';

const changeCity = createAction('offers/changeCity', (city: typeCityOffer) => ({
  payload: city
}));

const offersCityList = createAction('offers/offersCityList', (offers: typeOffersList[]) => ({
  payload: offers
}));

const fullOffersList = createAction('offers/fullOffersList', (fullOffers: typeCityOffer[]) => ({
  payload: fullOffers
}));

const reviewsList = createAction('offers/reviews', (reviews: typeReviews[]) => ({
  payload: reviews
}));

const setError = createAction('setError', (error: string | null) =>({
  payload: error
}));

const setOffersDataLoadingStatus = createAction('setOffersDataLoadingStatus', (offersLoadingStatus: boolean)=> ({
  payload: offersLoadingStatus
}));


export { changeCity, offersCityList, fullOffersList, reviewsList, setError, setOffersDataLoadingStatus };
