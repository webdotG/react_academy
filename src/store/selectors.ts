import { typeInitialState } from './reducer';

export const offersList = (state: typeInitialState) => state.offers;
export const offers = (state: typeInitialState) => state.fullOffers;
export const reviews = (state: typeInitialState) => state.reviews;
export const authorizationStatus = (state: typeInitialState) => state.authorizationStatus;
export const isOffersDataLoading = (state: typeInitialState) => state.isOffersDataLoading;
export const userInfo = (state: typeInitialState) => state.userInfo;
