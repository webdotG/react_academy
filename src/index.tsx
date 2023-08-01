import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import mockOffers from './mocks/mock_offers';
import mockOffersList from './mocks/mock_offers-list';
import mockReviews from './mocks/mock_reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



const Setting = {
  rentalOffer: 312,
} as const;

root.render(
  <React.StrictMode>
    <App
      rentalOffer={Setting.rentalOffer}
      offers={mockOffers}
      offersList={mockOffersList}
      reviews={mockReviews}
    />
  </React.StrictMode>
);
