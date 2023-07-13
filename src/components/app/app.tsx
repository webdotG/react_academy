import FavoritePage from '../../pages/favorite/favorite_page';
import LoginPage from '../../pages/login/login_page';
import MainPage from '../../pages/main/main_page';
import OfferPage from '../../pages/offer/offer_page';
import NotFound from '../../pages/not_found/not_found_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


type appPageProps = {
  rentalOffer: number;
}

function App({ rentalOffer }: appPageProps) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/main' element={<MainPage rentalOffer={rentalOffer}/> } />
        <Route path='/favorite' element={<FavoritePage />} />
        <Route path='/offer/:id' element={<OfferPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
