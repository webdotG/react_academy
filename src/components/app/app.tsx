import FavoritePage from '../../pages/favorite/favorite_page';
import LoginPage from '../../pages/login/login_page';
import MainPage from '../../pages/main/main_page';
import OfferPage from '../../pages/offer/offer_page';
import NotFound from '../../pages/not_found/not_found_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute, { AuthorizationStatus } from '../private_route/private_route';
import TestExample from '../../pages/test_example/text_example';
import { typeOffer, typeOffersList, typeCityOffer } from '../../types/type_offers';
import typeReviews from '../../types/type_reviews';

type appPageProps = {
  rentalOffer: number;
  offers: typeOffer[];
  offersList: typeOffersList[];
  reviews: typeReviews[];
  city: typeCityOffer;
}

function App({ rentalOffer, offersList, offers, reviews, city }: appPageProps) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/main' element={<MainPage rentalOffer={rentalOffer} offersList={offersList} city={ city } offers={offers}/>} />
        <Route path='/favorite' element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <FavoritePage offersList={offersList}/>
          </PrivateRoute>
        }
        />
        <Route path='/offer/:id' element={<OfferPage offers={offers} reviews={ reviews } />} />
        <Route path='/test' element={<TestExample />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
