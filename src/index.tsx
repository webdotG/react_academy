import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import mockOffers from './mocks/mock_offers';
import mockOffersList from './mocks/mock_offers-list';
import { mockReviews } from './mocks/mock_reviews';
import { store } from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={mockOffers}
        offersList={mockOffersList}
        reviews={mockReviews}
      />
    </Provider>
  </React.StrictMode>
);


