import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import mockOffers from './mocks/mock_offers';
import mockOffersList from './mocks/mock_offers-list';
import { mockReviews } from './mocks/mock_reviews';
import { mockCity } from './mocks/mock_city';
import { Setting } from './const';
import { store } from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        rentalOffer={Setting.RentalOffersCount}
        offers={mockOffers}
        offersList={mockOffersList}
        reviews={mockReviews}
        city={mockCity}
      />
    </Provider>
  </React.StrictMode>
);


