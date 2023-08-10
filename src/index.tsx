import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import mockOffers from './mocks/mock_offers';
import mockOffersList from './mocks/mock_offers-list';
import mockReviews from './mocks/mock_reviews';
import { mockCity }from './mocks/mock_city';
import { Setting } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App
      rentalOffer={Setting.RentalOffersCount}
      offers={mockOffers}
      offersList={mockOffersList}
      reviews={mockReviews}
      city = { mockCity }
    />
  </React.StrictMode>
);
