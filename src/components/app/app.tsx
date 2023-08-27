import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthorizationStatus } from '../../const';
import FavoritePage from '../../pages/favorite/favorite_page';
import LoginPage from '../../pages/login/login_page';
import MainPage from '../../pages/main/main_page';
import OfferPage from '../../pages/offer/offer_page';
import NotFound from '../../pages/not_found/not_found_page';
import TestExample from '../../pages/test_example/text_example';
import PrivateRoute from '../private_route/private_route';
import { useAppSelector } from '../../hooks';
import { LoadingPage } from '../../pages/loading-page';


function App() {

  const offersList = useAppSelector((state) => state.offers);
  const offers = useAppSelector((state) => state.fullOffers);
  const reviews = useAppSelector((state) => state.reviews);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/main' element={<MainPage/>} />
          <Route path='/favorite' element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritePage offersList={offersList} />
            </PrivateRoute>
          }
          />
          <Route path='/offer/:id' element={<OfferPage offers={offers} offersList={offersList} reviews={reviews} />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/test' element={<TestExample />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
